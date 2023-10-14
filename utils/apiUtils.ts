import { AUTH_LOCALSTORAGE_KEY } from "@/constants/storageKeys";
import { getFromLocalStorage } from "./localStorageUtils";

export const generateHeader = () => {
  const AUTHKEY = getFromLocalStorage<string>(AUTH_LOCALSTORAGE_KEY, "");
  return {
    authorization: `Bearer ${AUTHKEY}`,
  };
};
