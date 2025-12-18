"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/LanguageContext";
import type { RelatedProductsProps } from "./RelatedProducts.types";
import type { RelatedProduct as APIRelatedProduct } from "@/src/services/api/productService";
import "./RelatedProducts.style.css";
import iconsObject from "@/src/assets/icons/iconsObject";
import { Icon } from "../../atoms/Icon";
import CustomText from "../../atoms/CustomText";

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const displayProducts =
    products?.map((p: APIRelatedProduct) => ({
      id: Number(p.id.split("-")[1]) || 1,
      image: p.image,
      title: p.name,
      price: p.price,
      badge: p.newArrival ? t("relatedProducts.newArrival") : undefined,
    })) || [];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const itemWidth = scrollContainer.scrollWidth / displayProducts.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(newIndex, displayProducts.length - 1));
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [displayProducts.length]);

  const scrollToItem = (index: number) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const itemWidth = scrollContainer.scrollWidth / displayProducts.length;
    scrollContainer.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  };

  if (!displayProducts.length) return null;

  return (
    <section className="related-products">
      <h2 className="related-products__title">{t("relatedProducts.title")}</h2>

      {/* Desktop Grid */}
      <div className="related-products__grid">
        {displayProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="related-products-image">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className=" product-img"
              />
              {product.badge && (
                <div className="product-badge">{product.badge}</div>
              )}
            </div>
            <CustomText text={product.title} />

            <div className="flex items-center gap-1">
              <Image
                src={iconsObject.riyal || "/placeholder.svg"}
                alt="SAR"
                width={12}
                height={12}
              />
              <CustomText text={`${product.price}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="related-products__carousel">
        <div className="related-products__carousel-wrapper">
          <div className="related-products__carousel-track" ref={scrollRef}>
            <div className="related-products__carousel-slides">
              {displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="related-products__carousel-slide"
                >
                  <div className="related-products__product-card">
                    <div className="related-products__product-image">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                      {product.badge && (
                        <div className="related-products__product-badge">
                          {product.badge}
                        </div>
                      )}
                    </div>
                    <CustomText
                      text={product.title}
                      className="related-products__product-title"
                    />
                    <div className="related-products__product-price">
                      <Icon name={iconsObject.riyal} width={12} height={12} />
                      <CustomText text={`${product?.price}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="related-products__indicators">
          {displayProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToItem(index)}
              className={`related-products__indicator ${
                index === activeIndex
                  ? "related-products__indicator--active"
                  : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
