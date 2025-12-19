"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import type {
  ProductImageGalleryProps,
  GalleryItem,
} from "./ProductImageGallery.types";
import "./ProductImageGallery.style.css";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import iconsObject from "@/src/assets/icons/iconsObject";
import { CustomVideoPlayer } from "../../atoms/CustomVideoPlayer/CustomVideoPlayer.component";
import { useMobileView } from "@/hooks/use-mobile";

// Helper to normalize images array
const normalizeImages = (images: string[] | GalleryItem[]): GalleryItem[] => {
  if (images.length === 0) return [];

  // If it's a string array, convert to GalleryItem array
  if (typeof images[0] === "string") {
    return (images as string[]).map((src, index) => ({
      src,
      type: index === 0 ? ("video" as const) : ("image" as const), // First one is video on mobile
      videoSrc: index === 0 ? "/videos/product-video.mp4" : undefined,
    }));
  }

  return images as GalleryItem[];
};

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productName,
}) => {
  const normalizedImages = normalizeImages(images);
  const [mainImage, setMainImage] = useState({
    item: normalizedImages[0],
    index: 0,
  });
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const isMobileView = useMobileView(768);

  // Auto-play first video if it's the main image on mobile
  useEffect(() => {
    if (isMobileView && mainImage.item.type === "video") {
      // Video will show play button, not auto-play
    }
  }, [mainImage, isMobileView]);

  const handleNext = () => {
    const nextIndex = (currentMobileIndex + 1) % normalizedImages.length;
    setCurrentMobileIndex(nextIndex);
    setMainImage({ item: normalizedImages[nextIndex], index: nextIndex });
  };

  const handlePrev = () => {
    const prevIndex =
      (currentMobileIndex - 1 + normalizedImages.length) %
      normalizedImages.length;
    setCurrentMobileIndex(prevIndex);
    setMainImage({ item: normalizedImages[prevIndex], index: prevIndex });
  };

  const handleThumbnailClick = (item: GalleryItem, index: number) => {
    setMainImage({ item, index });
    if (isMobileView) {
      setCurrentMobileIndex(index);
    }
  };
  return (
    <div className="gallery">
      {/* Main Image/Video Area */}
      <div className="gallery__main-image">
        {mainImage.item.type === "video" &&
        mainImage.item.videoSrc &&
        isMobileView ? (
          <CustomVideoPlayer
            videoSrc={mainImage.item.videoSrc}
            posterSrc={mainImage.item.src}
            alt={`${productName} video`}
          />
        ) : (
          <Image
            src={mainImage.item.src || "/placeholder.svg"}
            alt={productName}
            fill
            className="object-cover"
            priority
          />
        )}

        {/* Mobile Navigation Arrows - Only on mobile */}
        {isMobileView && normalizedImages.length > 1 && (
          <>
            <Button
              className="gallery__nav-button gallery__nav-button--prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <Icon name={iconsObject.previous} className="gallery__nav-icon" />
            </Button>
            <Button
              className="gallery__nav-button gallery__nav-button--next"
              onClick={handleNext}
              aria-label="Next image"
            >
              <Icon name={iconsObject.next} className="gallery__nav-icon" />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnails - Hidden on mobile */}
      <div className="gallery__thumbnails">
        {normalizedImages.map((item, index) => (
          <Button
            key={index}
            onClick={() => handleThumbnailClick(item, index)}
            className={`gallery__thumbnail ${
              mainImage.index === index ? "gallery__thumbnail--active" : ""
            }`}
          >
            <div className="gallery__thumbnail-inner">
              {item.type === "video" && isMobileView ? (
                <>
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={`${productName} video thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    style={{ borderRadius: 5 }}
                  />
                  <div className="gallery__video-overlay">
                    <Icon
                      name={iconsObject.play}
                      className="gallery__video-play-icon"
                    />
                  </div>
                </>
              ) : (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={`${productName} view ${index + 1}`}
                  fill
                  className="object-cover"
                  style={{ borderRadius: 5 }}
                />
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
