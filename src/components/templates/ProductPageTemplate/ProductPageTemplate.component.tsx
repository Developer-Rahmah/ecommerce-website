"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Header } from "@/src/components/organisms/Header";
import { ProductImageGallery } from "@/src/components/organisms/ProductImageGallery";
import { ProductInfoSection } from "@/src/components/organisms/ProductInfoSection";
import { ProductDetails } from "@/src/components/organisms/ProductDetails";
import { RelatedProducts } from "@/src/components/organisms/RelatedProducts";
import type { ProductPageTemplateProps } from "./ProductPageTemplate.types";
import "./ProductPageTemplate.style.css";
import {
  productService,
  type ProductData,
} from "@/src/services/api/productService";
import { TopBanner } from "../../organisms/TopBanner";
import Link from "next/link";
import CustomText from "../../atoms/CustomText";
import { useMobileView } from "@/hooks/use-mobile";
import { MobileSearchBanner } from "../../molecules/MobileSearchBanner/MobileSearchBanner.component";

export const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({
  className = "",
}) => {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isMobileView = useMobileView(768);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await productService.getProductById("prod-001");
        setProductData(data);
      } catch (error) {
        console.error(" Error fetching product data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, []);

  if (isLoading || !productData) {
    return (
      <div className={`product-page ${className}`}>
        <Header />
        <div className="product-page__loading">Loading product...</div>
      </div>
    );
  }

  return (
    <div className={`product-page ${className}`}>
      <Header />
      {isMobileView ? <MobileSearchBanner /> : null}

      <TopBanner />
      {!isMobileView ? (
        <nav className="product-page__breadcrumb">
          <Link href="/" className="product-page__breadcrumb-link">
            Home
          </Link>
          {" / "}
          <a href="/dresses" className="product-page__breadcrumb-link">
            Dresses
          </a>
          {" / "}
          <CustomText className="product-page__breadcrumb-current">
            {productData.name}
          </CustomText>
        </nav>
      ) : null}

      <div className="product-page__content">
        <div className="product-page__main">
          <ProductImageGallery
            images={productData.images}
            productName={productData.name}
          />
          <ProductInfoSection
            productName={productData.name}
            price={productData.price}
            promoCode={productData.promoCode}
          />
        </div>

        <div className="product-page__details">
          <ProductDetails productData={productData} />
        </div>
      </div>

      <div className="product-page__related">
        <div className="product-page__related-container">
          <RelatedProducts products={productData.relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageTemplate;
