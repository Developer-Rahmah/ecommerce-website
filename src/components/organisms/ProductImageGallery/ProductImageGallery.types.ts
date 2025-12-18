export interface GalleryItem {
  src: string;
  type: "image" | "video";
  videoSrc?: string;
}

export interface ProductImageGalleryProps {
  images: string[] | GalleryItem[];
  productName: string;
}
