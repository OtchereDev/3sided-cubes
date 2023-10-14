import { ISelectOption } from "@/types/select";

export function getSelectDisplay(
  options: ISelectOption[],
  value?: string,
): string {
  return options.find((option) => option.value == value)?.text as string;
}
