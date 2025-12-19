"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Slider } from "@/src/components/atoms/Slider";
import { useLanguage } from "@/src/contexts/LanguageContext";
import type {
  ProductDetailsProps,
  AccordionSection,
  LocationType,
  DescriptionSectionProps,
  CleaningSectionProps,
  MaterialSectionProps,
  ReturnSectionProps,
} from "./ProductDetails.types";
import styles from "./ProductDetails.module.css";
import CustomText, { TextVariant } from "../../atoms/CustomText";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import iconsObject from "@/src/assets/icons/iconsObject";
import imagesObject from "@/src/assets/images/imagesObject";
import { DeliveryLocation } from "@/src/services/api/productService";

const MOBILE_SECTION_ORDER: AccordionSection[] = [
  "material",
  "cleaning",
  "return",
  "description",
];

const MaterialSection: React.FC<MaterialSectionProps> = ({
  isOpen,
  stretchValue,
  liningValue,
  productData,
  t,
  onToggle,
  onStretchChange,
  onLiningChange,
}) => (
  <div className={styles["details-section"]}>
    <Button onClick={onToggle} className={styles["section-header"]}>
      <CustomText variant={TextVariant.HEADING2}>
        {t("productDetails.materialDetails")}
      </CustomText>
      <Icon
        name={isOpen ? iconsObject.minus : iconsObject.plus}
        width={12}
        height={12}
      />
    </Button>
    {isOpen && (
      <div className={styles["section-content"]}>
        <Slider
          title="Stretch"
          value={stretchValue}
          onChange={onStretchChange}
          labels={[
            t("productDetails.noStretch"),
            t("productDetails.mediumStretch"),
            t("productDetails.highStretch"),
          ]}
        />

        <Slider
          value={liningValue}
          title="Lining"
          onChange={onLiningChange}
          labels={[t("productDetails.noLining"), t("productDetails.lined")]}
        />

        <div>
          <h4 className={styles["fabric-detail-title"]}>
            {t("productDetails.fabricDetail")}
          </h4>
          <p className={styles["fabric-detail-text"]}>
            {productData?.material.fabricType ?? t("productDetails.crepe")}
          </p>
          <Image
            src={productData?.material.fabricImage || "/placeholder.svg"}
            alt="Fabric texture"
            width={357}
            height={150}
            className={styles["fabric-image"]}
          />
        </div>
        <div className={styles["separator"]} />
      </div>
    )}
  </div>
);

const CleaningSection: React.FC<CleaningSectionProps> = ({
  isOpen,
  t,
  onToggle,
}) => (
  <div className={styles["details-section"]}>
    <Button
      onClick={onToggle}
      className={`${styles["section-header"]} ${styles["with-left-padding"]}`}
    >
      <CustomText variant={TextVariant.HEADING2}>
        {t("productDetails.cleaningInstructions")}
      </CustomText>
      <Icon
        name={isOpen ? iconsObject.minus : iconsObject.plus}
        width={12}
        height={12}
      />
    </Button>
    {isOpen && (
      <div
        className={`${styles["section-content"]} ${styles["with-left-padding"]}`}
      >
        <div className={styles["cleaning-item"]}>
          <Icon name={iconsObject.noBleach} />
          <CustomText
            text={t("productDetails.doNotBleach")}
            variant={TextVariant.BODY}
          />
        </div>
        <div className={styles["content-divider"]} />
        <div className={styles["cleaning-item"]}>
          <Icon name={iconsObject.iron} />
          <CustomText
            text={t("productDetails.ironLowTemp")}
            variant={TextVariant.BODY}
          />
        </div>
        <div className={styles["separator"]} />
      </div>
    )}
  </div>
);

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  isOpen,
  productData,
  t,
  onToggle,
}) => (
  <div className={styles["details-section"]}>
    <Button
      onClick={onToggle}
      className={`${styles["section-header"]} ${styles["with-left-padding"]}`}
    >
      <CustomText variant={TextVariant.HEADING2}>
        {t("productDetails.description")}
      </CustomText>
      <Icon
        name={isOpen ? iconsObject.minus : iconsObject.plus}
        width={12}
        height={12}
      />
    </Button>
    {isOpen && (
      <div
        className={`${styles["section-content"]} ${styles["with-left-padding"]}`}
      >
        <CustomText
          text={productData?.description ?? t("productDetails.descriptionText")}
          variant={TextVariant.BODY}
        />

        <div className={styles["separator"]} />
        <CustomText
          variant={TextVariant.HEADING2}
          text={t("productDetails.buyWholeSet")}
        />

        <div className={styles["buy-set-image-wrapper"]}>
          <Image
            src={imagesObject.aleenaSingleSilkPillowcaseMain}
            alt="Yellow elegant dress"
            width={240}
            height={319}
          />
          <div className={styles["buy-set-overlay"]}>
            <Button className={styles["buy-set-button"]}>
              {t("productDetails.viewItem")}
            </Button>
          </div>
        </div>
      </div>
    )}
  </div>
);

const ReturnSection: React.FC<ReturnSectionProps> = ({
  isOpen,
  selectedLocation,
  productData,
  t,
  onToggle,
  onLocationChange,
}) => (
  <div className={`${styles["details-section"]} ${styles["return-section"]}`}>
    <Button
      onClick={onToggle}
      className={`${styles["section-header"]} ${styles["with-left-padding"]}`}
    >
      <CustomText variant={TextVariant.HEADING2}>
        {t("productDetails.freeReplacementReturn")}
      </CustomText>
      <span className={styles["section-icon"]}>
        <Icon
          name={isOpen ? iconsObject.minus : iconsObject.plus}
          width={12}
          height={12}
        />
      </span>
    </Button>
    {isOpen && (
      <div
        className={`${styles["section-content"]} ${styles["with-left-padding"]}`}
      >
        <div className={styles["toggle-wrapper"]}>
          <CustomText
            variant={TextVariant.CAPTION_TITLE1}
            className={`${styles["toggle-label"]} ${
              selectedLocation === "saudi" ? styles.active : styles.inactive
            }`}
          >
            {t("productDetails.saudiArabia")}
          </CustomText>
          <label className={styles["toggle-switch"]}>
            <input
              type="checkbox"
              className={styles["toggle-input"]}
              checked={selectedLocation === "world"}
              onChange={() =>
                onLocationChange(
                  selectedLocation === "saudi" ? "world" : "saudi"
                )
              }
            />
            <div className={styles["toggle-slider"]}>
              <div className={styles["toggle-thumb"]} />
            </div>
          </label>
          <CustomText
            variant={TextVariant.CAPTION_TITLE1}
            className={`${styles["toggle-label"]} ${
              selectedLocation === "world" ? styles.active : styles.inactive
            }`}
          >
            {t("productDetails.restOfWorld")}
          </CustomText>
        </div>

        <ul className={styles["return-list"]}>
          {productData?.returnPolicies.map((policy: string, index: number) => (
            <li key={index} className={styles["return-list-item"]}>
              <span>•</span>
              <CustomText variant={TextVariant.CAPTION_TITLE1}>
                {policy}
              </CustomText>
            </li>
          ))}
        </ul>

        <div className={styles["delivery-table"]}>
          {productData?.delivery.locations.map((location: DeliveryLocation) => (
            <div key={location.name} className={styles["delivery-row"]}>
              <CustomText
                variant={TextVariant.HEADING2}
                className={styles["delivery-city"]}
              >
                {location.name}
              </CustomText>
              <CustomText
                variant={TextVariant.CAPTION_TITLE1}
                className={styles["delivery-time"]}
              >
                {t("productDetails.deliveryTime", { value: location?.days })}
              </CustomText>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  className = "",
  productData,
}) => {
  const [openSections, setOpenSections] = useState<AccordionSection[]>([
    "material",
  ]);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationType>("saudi");
  const [stretchValue, setStretchValue] = useState(
    productData?.material.stretch ?? 0
  );
  const [liningValue, setLiningValue] = useState(
    productData?.material.lining ?? 100
  );
  const { t } = useLanguage();

  const toggleSection = (section: AccordionSection) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const isSectionOpen = (section: AccordionSection) =>
    openSections.includes(section);

  return (
    <div className={`${styles["product-details-grid"]} ${className}`}>
      {/* Desktop layout */}
      <div className={styles["desktop-layout"]}>
        <MaterialSection
          key="material"
          isOpen={isSectionOpen("material")}
          stretchValue={stretchValue}
          liningValue={liningValue}
          productData={productData}
          t={t}
          onToggle={() => toggleSection("material")}
          onStretchChange={setStretchValue}
          onLiningChange={setLiningValue}
        />

        <div className={styles["middle-column"]}>
          <CleaningSection
            key="cleaning"
            isOpen={isSectionOpen("cleaning")}
            t={t}
            onToggle={() => toggleSection("cleaning")}
          />
          <ReturnSection
            key="return"
            isOpen={isSectionOpen("return")}
            selectedLocation={selectedLocation}
            productData={productData}
            t={t}
            onToggle={() => toggleSection("return")}
            onLocationChange={setSelectedLocation}
          />
        </div>

        <DescriptionSection
          key="description"
          isOpen={isSectionOpen("description")}
          productData={productData}
          t={t}
          onToggle={() => toggleSection("description")}
        />
      </div>

      {/* Mobile layout  */}
      <div className={styles["mobile-layout"]}>
        {MOBILE_SECTION_ORDER.map((section) => {
          switch (section) {
            case "material":
              return (
                <MaterialSection
                  key="material"
                  isOpen={isSectionOpen("material")}
                  stretchValue={stretchValue}
                  liningValue={liningValue}
                  productData={productData}
                  t={t}
                  onToggle={() => toggleSection("material")}
                  onStretchChange={setStretchValue}
                  onLiningChange={setLiningValue}
                />
              );
            case "cleaning":
              return (
                <CleaningSection
                  key="cleaning"
                  isOpen={isSectionOpen("cleaning")}
                  t={t}
                  onToggle={() => toggleSection("cleaning")}
                />
              );
            case "description":
              return (
                <DescriptionSection
                  key="description"
                  isOpen={isSectionOpen("description")}
                  productData={productData}
                  t={t}
                  onToggle={() => toggleSection("description")}
                />
              );
            case "return":
              return (
                <ReturnSection
                  key="return"
                  isOpen={isSectionOpen("return")}
                  selectedLocation={selectedLocation}
                  productData={productData}
                  t={t}
                  onToggle={() => toggleSection("return")}
                  onLocationChange={setSelectedLocation}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};
