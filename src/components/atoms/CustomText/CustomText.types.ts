import type { ArgumentArray } from "classnames";

import { TypographyVariants } from "../../../styles/typography";

// Define the available HTML elements for the Text component
type TextElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "div"
  | "span"
  | "label";

export interface CustomTextPropsTypes
  extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariants;
  as?: TextElement;
  overrideStyle?: ArgumentArray | string;
  text?: string;
}
