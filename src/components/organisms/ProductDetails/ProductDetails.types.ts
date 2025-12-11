import type { ProductData } from "@/src/services/api/productService";

export interface ProductDetailsProps {
  className?: string;
  productData?: ProductData;
}
export type AccordionSection =
  | "material"
  | "cleaning"
  | "description"
  | "return";

export type LocationType = "saudi" | "world";
