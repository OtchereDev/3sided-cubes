import { useRouter } from "next/router";
import { createContext, useState } from "react";

export interface IFormValues {
  nominee_id: string;
  reason: string;
  process: string;
}

export interface ContextInterface {
  setFormField: (
    field: "nominee_id" | "reason" | "process",
    value: string,
  ) => void;
  clearForm: () => void;
  formValues: IFormValues;
}

interface IFormContextProvider {
  children: React.ReactNode;
}

export const FormContext = createContext<ContextInterface>({
  setFormField: (field, value) => null,
  clearForm: () => null,
  formValues: { nominee_id: "", process: "", reason: "" },
});

const FormContextProvider: React.FC<IFormContextProvider> = ({ children }) => {
  const [formValues, setFormValues] = useState<IFormValues>({
    nominee_id: "",
    reason: "",
    process: "",
  });

  const setFormField = (
    field: "nominee_id" | "reason" | "process",
    value: string,
  ) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const clearForm = () => {
    setFormValues({ nominee_id: "", process: "", reason: "" });
  };

  return (
    <FormContext.Provider value={{ setFormField, clearForm, formValues }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
