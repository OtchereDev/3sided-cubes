import { createContext, useContext, useEffect } from "react";
import {
  CubeAcademyLoginRequestBody,
  CubeAcademyRegisterRequestBody,
  useCubeAcademyLogin,
  useCubeAcademyRegister,
} from "@/api/apiComponents";
import { toast } from "sonner";
import { AUTHKEY } from "@/constants/jwt";
import { useRouter } from "next/router";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorageUtils";

export interface IAuthContext {
  login: (data: CubeAcademyLoginRequestBody) => Promise<void>;
  register: (data: CubeAcademyRegisterRequestBody) => Promise<void>;
  isLoginLoading: boolean;
  isRegisterLoading: boolean;
}

export interface IFormContextProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: React.FC<IFormContextProvider> = ({ children }) => {
  const AUTH_LOCALSTORAGE_KEY = "3sidedcubes.auth";
  const { mutateAsync: loginAsync, isLoading: isLoginLoading } =
    useCubeAcademyLogin();
  const { mutateAsync: registerAsync, isLoading: isRegisterLoading } =
    useCubeAcademyRegister();
  const router = useRouter();
  const route = router.route;

  const login = async (data: CubeAcademyLoginRequestBody) => {
    try {
      const response = await loginAsync({
        headers: {
          authorization: `Bearer ${AUTHKEY}`,
        },
        body: data,
      });

      if (response.data) {
        setToLocalStorage(AUTH_LOCALSTORAGE_KEY, response.data.authToken);
        toast.success("Successfully logged in 🥳");
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error.stack.message);
    }
  };

  const register = async (data: CubeAcademyRegisterRequestBody) => {
    try {
      const response = await registerAsync({
        headers: {
          authorization: `Bearer ${AUTHKEY}`,
        },
        body: data,
      });

      if (response.data) {
        setToLocalStorage(AUTH_LOCALSTORAGE_KEY, response.data.authToken);
        toast.success("Successfully created your account 🎉");
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error.stack.message);
    }
  };

  const checkedLoggedInUser = () => {
    const authToken = getFromLocalStorage<string>(AUTH_LOCALSTORAGE_KEY, "");
    if (["/auth/login", "/auth/signup"].includes(route)) {
      if (authToken.length) {
        router.push("/");
      }
    } else {
      if (!authToken.length) {
        router.push("/auth/login");
      }
    }
  };

  useEffect(() => {
    checkedLoggedInUser();
  }, [route]);
  return (
    <AuthContext.Provider
      value={{ register, login, isLoginLoading, isRegisterLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext<IAuthContext | null>(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return ctx;
};

export default AuthProvider;
