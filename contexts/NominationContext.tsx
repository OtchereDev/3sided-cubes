import { createContext, useContext } from "react";
import {
  CubeAcademyGetAllNominationsError,
  useCubeAcademyDeleteNomination,
  useCubeAcademyGetAllNominations,
  useCubeAcademyRetrieveNomineeList,
} from "@/api/apiComponents";
import { Nominations, Nominee } from "@/api/apiResponses";
import {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { generateHeader } from "@/utils/apiUtils";
import { AUTH_LOCALSTORAGE_KEY } from "@/constants/storageKeys";
import Cookies from "js-cookie";

export interface INominationContext {
  nominees: Nominee["data"];
  nominations: Nominations["data"];
  nominationCount: string;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<
    QueryObserverResult<Nominations, CubeAcademyGetAllNominationsError>
  >;
  deleteNomination: (id: string) => Promise<void>;
  isDeleteLoading: boolean;
}

export interface IFormContextProvider {
  children: React.ReactNode;
}

export const NominationContext = createContext<INominationContext | null>(null);

const NominationProvider: React.FC<IFormContextProvider> = ({ children }) => {
  const jwt = Cookies.get(AUTH_LOCALSTORAGE_KEY);
  const { data } = useCubeAcademyRetrieveNomineeList(
    {
      headers: generateHeader(jwt as string),
    },
    { retry: false, enabled: (jwt?.length as number) > 0 },
  );

  const { data: nominationsList, refetch } = useCubeAcademyGetAllNominations(
    {
      headers: generateHeader(jwt as string),
    },
    { retry: 0, enabled: (jwt?.length as number) > 0 },
  );

  const { mutateAsync: deleteNominationAsync, isLoading: isDeleteLoading } =
    useCubeAcademyDeleteNomination();

  const onDeletNomination = async (id: string) => {
    try {
      const response = await deleteNominationAsync({
        pathParams: {
          nominationId: id,
        },
        headers: generateHeader(jwt as string),
      });
      if (response.data) {
        await refetch();
      }
    } catch (error: any) {
      toast.error(error.stack.message);
    }
  };

  return (
    <NominationContext.Provider
      value={{
        nominees: data?.data,
        nominations: nominationsList?.data,
        nominationCount: nominationsList?.data?.length?.toString() || "0",
        refetch,
        deleteNomination: onDeletNomination,
        isDeleteLoading,
      }}
    >
      {children}
    </NominationContext.Provider>
  );
};

export const useNominationContext = () => {
  const ctx = useContext<INominationContext | null>(NominationContext);
  if (!ctx) {
    throw new Error(
      "useNominationContext must be used within a NominationProvider",
    );
  }
  return ctx;
};

export default NominationProvider;
