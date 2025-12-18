import type { ArgumentArray } from "classnames";

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

export enum TextVariant {
  HEADING1 = "heading1",
  HEADING2 = "heading2",
  TITLE = "title",
  BODY = "body",
  CAPTION_TITLE1 = "captionTitle1",
  CAPTION_BODY1 = "captionBody1",
  CAPTION_TITLE2 = "captionTitle2",
  CAPTION_BODY2 = "captionBody2",
}

export interface CustomTextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: TextElement;
  overrideStyle?: ArgumentArray | string;
  children?: React.ReactNode;
  text?: string;
  className?: string;
}
