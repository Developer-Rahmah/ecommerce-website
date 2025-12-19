import type { ProductData } from "@/src/services/api/productService";

interface ProductDetailsProps {
  className?: string;
  productData?: ProductData;
}
type AccordionSection = "material" | "cleaning" | "description" | "return";

type LocationType = "saudi" | "world";
interface MaterialSectionProps {
  isOpen: boolean;
  stretchValue: number;
  liningValue: number;
  productData?: ProductData;
  t: (key: string) => string;
  onToggle: () => void;
  onStretchChange: (value: number) => void;
  onLiningChange: (value: number) => void;
}

interface CleaningSectionProps {
  isOpen: boolean;
  t: (key: string) => string;
  onToggle: () => void;
}

interface DescriptionSectionProps {
  isOpen: boolean;
  productData?: ProductData;
  t: (key: string) => string;
  onToggle: () => void;
}

interface ReturnSectionProps {
  isOpen: boolean;
  selectedLocation: LocationType;
  productData?: ProductData;
  t: (key: string, params?: Record<string, string>) => string;
  onToggle: () => void;
  onLocationChange: (location: LocationType) => void;
}
export type {
  ProductDetailsProps,
  AccordionSection,
  LocationType,
  MaterialSectionProps,
  CleaningSectionProps,
  DescriptionSectionProps,
  ReturnSectionProps,
};
