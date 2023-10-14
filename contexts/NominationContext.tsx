import { createContext, useContext } from "react";
import {
  CubeAcademyGetAllNominationsError,
  useCubeAcademyDeleteNomination,
  useCubeAcademyGetAllNominations,
  useCubeAcademyGetNominationById,
  useCubeAcademyRetrieveNomineeList,
} from "@/api/apiComponents";
import { AUTHKEY } from "@/constants/jwt";
import { Nominations, Nominee } from "@/api/apiResponses";
import {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { generateHeader } from "@/utils/apiUtils";

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
  const { data } = useCubeAcademyRetrieveNomineeList({
    headers: generateHeader(),
  });

  const { data: nominationsList, refetch } = useCubeAcademyGetAllNominations({
    headers: generateHeader(),
  });

  const { mutateAsync: deleteNominationAsync, isLoading: isDeleteLoading } =
    useCubeAcademyDeleteNomination();

  const onDeletNomination = async (id: string) => {
    try {
      const response = await deleteNominationAsync({
        pathParams: {
          nominationId: id,
        },
        headers: generateHeader(),
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
