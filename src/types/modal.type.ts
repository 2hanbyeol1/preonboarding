import { ReactNode } from "react";

export type ModalOptionType = {
  title?: string;
  contents: string | string[] | ReactNode;
};
