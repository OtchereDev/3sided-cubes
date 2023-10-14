import { createContext, useContext } from "react";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  useForm,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
  submitForm: (data: FormValues) => void;
  register: UseFormRegister<FormValues>;
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

  const formValues = watch();

  const submitForm = (data: FormValues) => {};

  return (
    <FormContext.Provider
      value={{
        formValues,
        control,
        setValue,
        trigger,
        errors,
        submitForm,
        register,
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
