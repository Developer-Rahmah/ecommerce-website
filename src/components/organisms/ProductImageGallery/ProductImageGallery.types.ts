import { Images } from "@/src/services/api/productService";

export interface GalleryItem {
  src: string;
  type: "image" | "video";
  videoSrc?: string;
}

export interface ProductImageGalleryProps {
  images: Images[];
  productName: string;
}
