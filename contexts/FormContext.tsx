import {
  BaseSyntheticEvent,
  createContext,
  useContext,
  useEffect,
} from "react";
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  useForm,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import {
  CubeAcademyGetAllNominationsError,
  useCubeAcademyCreateNomination,
  useCubeAcademyGetNominationById,
  useCubeAcademyRetrieveNomineeList,
  useCubeAcademyUpdateNomination,
} from "@/api/apiComponents";
import useLinkGeneration from "@/hooks/useLinkGeneration";
import { Nomination, Nominations, Nominee } from "@/api/apiResponses";
import { toast } from "sonner";
import {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult,
} from "@tanstack/react-query";
import {
  clearFromLocalStorage,
  getFromLocalStorage,
  setToLocalStorage,
} from "@/utils/localStorageUtils";
import {
  AUTH_LOCALSTORAGE_KEY,
  FORM_LOCALSTORAGE_KEY,
} from "@/constants/storageKeys";
import { generateHeader } from "@/utils/apiUtils";
import Cookies from "js-cookie";

export type FormValues = {
  nominee_id: string;
  reason: string;
  process: string;
  cubeName?: string;
};
export interface IFormContext {
  formValues: FormValues;
  control: Control<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  trigger: UseFormTrigger<FormValues>;
  errors: FieldErrors<FormValues>;
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
  onSubmit: (
    refetch: <TPageData>(
      options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
    ) => Promise<
      QueryObserverResult<Nominations, CubeAcademyGetAllNominationsError>
    >,
  ) => (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  isCreateLoading: boolean;
  isUpdateLoading: boolean;
  setDataToLocalStorage: () => void;
  clearDataFromLocalStorage: () => void;
}

export interface IFormContextProvider {
  children: React.ReactNode;
}

const NomineeSchema = yup
  .object({
    nominee_id: yup.string().required("Please select a cube name"),
    reason: yup.string().required("Please provide a reason"),
    process: yup.string().required("Please rate our process"),
  })
  .required();

export const FormContext = createContext<IFormContext | null>(null);

const FormProvider: React.FC<IFormContextProvider> = ({ children }) => {
  const jwt = Cookies.get(AUTH_LOCALSTORAGE_KEY);
  const {
    handleSubmit,
    trigger,
    control,
    watch,
    setValue,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      nominee_id: "",
      reason: "",
      process: "",
      cubeName: "",
    },
    resolver: yupResolver(NomineeSchema, { abortEarly: false }),
  });

  // hooks
  const { mode, id } = useLinkGeneration();
  const router = useRouter();

  // mutations and queries
  const { data: nomineeList } = useCubeAcademyRetrieveNomineeList(
    {
      headers: generateHeader(jwt as string),
    },
    { retry: 0, enabled: (jwt?.length as number) > 0 },
  );

  const { data: nominationData } = useCubeAcademyGetNominationById(
    {
      headers: generateHeader(jwt as string),
      pathParams: { nominationId: id as string },
    },
    { enabled: mode == "edit" && (id?.length as number) > 0, retry: false },
  );

  const { isLoading, mutateAsync } = useCubeAcademyCreateNomination();
  const { isLoading: isUpdateLoading, mutateAsync: updateMutateAsync } =
    useCubeAcademyUpdateNomination();

  // for creating and updating nomination
  const onSubmit = (
    refetch: <TPageData>(
      options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
    ) => Promise<
      QueryObserverResult<Nominations, CubeAcademyGetAllNominationsError>
    >,
  ) =>
    handleSubmit(async (data) => {
      try {
        let response: Nomination;
        if (mode == "edit" && id.length) {
          // update nomination here
          response = await updateMutateAsync({
            headers: generateHeader(jwt as string),
            body: {
              nominee_id: data.nominee_id,
              reason: data.reason,
              process: data.process,
            },
            pathParams: {
              nominationId: id,
            },
          });
        } else {
          // create nomination here
          response = await mutateAsync({
            headers: generateHeader(jwt as string),
            body: {
              nominee_id: data.nominee_id,
              reason: data.reason,
              process: data.process,
            },
          });
        }

        if (response.data) {
          let successUrl = "/submitted";
          if (mode == "edit") {
            successUrl += `?mode=edit`;
          }
          clearDataFromLocalStorage();
          await refetch();
          router.push(successUrl);
        }
      } catch (error: any) {
        toast.error(error.stack.message);
      }
    });

  useEffect(() => {
    if (nominationData?.data) {
      setValue("nominee_id", nominationData.data.nominee_id as string);
      setValue("reason", nominationData.data.reason as string);
      setValue("process", nominationData.data.process as string);

      const nominee = nomineeList?.data?.find(
        (person) => person.nominee_id == nominationData?.data?.nominee_id,
      );

      if (nominee) {
        setValue("cubeName", nominee.first_name + " " + nominee.last_name);
      }
      trigger();
    }
  }, [nominationData]);

  const formValues = watch();

  const setDataToLocalStorage = () =>
    setToLocalStorage(FORM_LOCALSTORAGE_KEY, formValues);
  const getDataFromLocalStorage = () =>
    getFromLocalStorage(FORM_LOCALSTORAGE_KEY, {
      nominee_id: "",
      reason: "",
      process: "",
      cubeName: "",
    });
  const clearDataFromLocalStorage = () => {
    setValue("cubeName", "");
    setValue("nominee_id", "");
    setValue("process", "");
    setValue("reason", "");
    clearFromLocalStorage(FORM_LOCALSTORAGE_KEY);
  };

  useEffect(() => {
    const data = getDataFromLocalStorage();
    setValue("cubeName", data.cubeName);
    setValue("nominee_id", data.nominee_id);
    setValue("process", data.process);
    setValue("reason", data.reason);
  }, []);

  return (
    <FormContext.Provider
      value={{
        formValues,
        control,
        setValue,
        trigger,
        errors,
        register,
        handleSubmit,
        isCreateLoading: isLoading,
        isUpdateLoading,
        onSubmit,
        setDataToLocalStorage,
        clearDataFromLocalStorage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext<IFormContext | null>(FormContext);
  if (!ctx) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return ctx;
};

export default FormProvider;
