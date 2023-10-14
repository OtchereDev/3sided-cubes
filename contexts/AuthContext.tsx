import { createContext, useContext, useEffect } from "react";
import {
  CubeAcademyLoginRequestBody,
  CubeAcademyRegisterRequestBody,
  useCubeAcademyLogin,
  useCubeAcademyRegister,
} from "@/api/apiComponents";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { setToLocalStorage } from "@/utils/localStorageUtils";
import { AUTH_LOCALSTORAGE_KEY } from "@/constants/storageKeys";
import { useCookie } from "react-use";

export interface IAuthContext {
  login: (data: CubeAcademyLoginRequestBody) => Promise<void>;
  register: (data: CubeAcademyRegisterRequestBody) => Promise<void>;
  isLoginLoading: boolean;
  isRegisterLoading: boolean;
  logout: () => void;
}

export interface IFormContextProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider: React.FC<IFormContextProvider> = ({ children }) => {
  const [value, updateCookie, deleteCookie] = useCookie(AUTH_LOCALSTORAGE_KEY);
  const { mutateAsync: loginAsync, isLoading: isLoginLoading } =
    useCubeAcademyLogin();
  const { mutateAsync: registerAsync, isLoading: isRegisterLoading } =
    useCubeAcademyRegister();
  const router = useRouter();
  const route = router.route;

  const login = async (data: CubeAcademyLoginRequestBody) => {
    try {
      const response = await loginAsync({
        body: data,
      });

      if (response.data) {
        setToLocalStorage(AUTH_LOCALSTORAGE_KEY, response.data.authToken);
        updateCookie(response.data.authToken as string, {});
        toast.success("Successfully logged in 🥳");
        router.push("/");
      }
    } catch (error: any) {
      toast.error(
        error.stack.message || error.stack.data.error || error.message,
      );
    }
  };

  const register = async (data: CubeAcademyRegisterRequestBody) => {
    try {
      const response = await registerAsync({
        body: data,
      });

      if (response.data) {
        setToLocalStorage(AUTH_LOCALSTORAGE_KEY, response.data.authToken);
        updateCookie(response.data.authToken as string, {});
        toast.success("Successfully created your account 🎉");
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error.stack.message);
    }
  };

  const logout = () => {
    deleteCookie();
    toast.success("You have successfully logged out 😄");
    router.push("/login");
  };

  const checkedLoggedInUser = () => {
    const authToken = value;
    if (["/auth/login", "/auth/signup"].includes(route)) {
      if (authToken?.length) {
        router.push("/");
      }
    } else {
      if (!authToken?.length) {
        router.push("/auth/login");
      }
    }
  };

  useEffect(() => {
    checkedLoggedInUser();
  }, [route]);
  return (
    <AuthContext.Provider
      value={{ register, login, isLoginLoading, isRegisterLoading, logout }}
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
