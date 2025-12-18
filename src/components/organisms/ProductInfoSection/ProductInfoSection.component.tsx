"use client";

import type React from "react";
import { useState } from "react";
import type { ProductInfoSectionProps } from "./ProductInfoSection.types";
import "./ProductInfoSection.style.css";
import iconsObject from "@/src/assets/icons/iconsObject";
import CustomText, { TextVariant } from "../../atoms/CustomText";
import { Button } from "../../atoms/Button";
import { ButtonVariant } from "../../atoms/Button/Button.types";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { Icon } from "../../atoms/Icon";

export const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  productName,
  price,
  promoCode,
}) => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedCity, setSelectedCity] = useState("Riyadh");
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const { t } = useLanguage();

  return (
    <div className="product-info">
      <div className="product-info__header">
        <div className="product-info__title-wrapper">
          <CustomText className="product-info__title">{`${productName}`}</CustomText>
        </div>
        <div className="product-info__rating">
          <Icon name={iconsObject.riyal} />
          <CustomText variant={TextVariant.HEADING2}>{price}</CustomText>
        </div>
      </div>

      <div className="product-info__sizes">
        {sizes.map((size) => (
          <Button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`product-info__size-button ${
              selectedSize === size ? "product-info__size-button--active" : ""
            }`}
          >
            {size}
          </Button>
        ))}
      </div>

      <div className="product-info__buttons">
        <Button customBtnType={ButtonVariant.SECONDARY}>
          {t("product.buyNow")}
        </Button>
        <Button customBtnType={ButtonVariant.PRIMARY}>
          {t("product.addToCart")}
        </Button>
      </div>

      <div className="product-info__promo">
        <Icon name={iconsObject.sale} className="product-info__promo-icon" />
        <div className="promo-desc-container">
          <CustomText
            variant={TextVariant.BODY}
            text={t("product.promoText")}
          />
          <CustomText variant={TextVariant.HEADING2} text={promoCode} />
        </div>
      </div>

      <div className="product-info__delivery">
        <div className="product-info__delivery-line">
          <CustomText text={t("productDetails.deliveryDate")} />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="product-info__city-select"
          >
            <option value="Riyadh">Riyadh</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Dammam">Dammam</option>
            <option value="Other Cities">Other Cities</option>
          </select>
        </div>

        <div className="product-info__return-text">
          <CustomText text={t("productDetails.youCanRequest")} />
          <CustomText
            variant={TextVariant.HEADING2}
            text={t("productDetails.freeReturn")}
          />
          <CustomText text={t("productDetails.deliveryDays")} />
        </div>
      </div>
    </div>
  );
};
