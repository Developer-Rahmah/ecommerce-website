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
} from "./ProductDetails.types";
import styles from "./ProductDetails.module.css";
import CustomText, { TextVariant } from "../../atoms/CustomText";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import iconsObject from "@/src/assets/icons/iconsObject";
import imagesObject from "@/src/assets/images/imagesObject";

const MOBILE_SECTION_ORDER: AccordionSection[] = [
  "material",
  "cleaning",
  "return",
  "description",
];

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

  const MaterialSection = () => (
    <div className={styles["details-section"]}>
      <Button
        onClick={() => toggleSection("material")}
        className={styles["section-header"]}
      >
        <CustomText variant={TextVariant.HEADING2}>
          {t("productDetails.materialDetails")}
        </CustomText>
        <Icon
          name={
            openSections.includes("material")
              ? iconsObject.minus
              : iconsObject.plus
          }
          width={12}
          height={12}
        />
      </Button>
      {openSections.includes("material") && (
        <div className={styles["section-content"]}>
          <Slider
            title="Stretch"
            value={stretchValue}
            onChange={setStretchValue}
            labels={[
              t("productDetails.noStretch"),
              t("productDetails.mediumStretch"),
              t("productDetails.highStretch"),
            ]}
          />

          <Slider
            value={liningValue}
            title="Lining"
            onChange={setLiningValue}
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
        </div>
      )}
    </div>
  );

  const CleaningSection = () => (
    <div className={styles["details-section"]}>
      <Button
        onClick={() => toggleSection("cleaning")}
        className={`${styles["section-header"]} ${styles["with-left-padding"]}`}
      >
        <CustomText variant={TextVariant.HEADING2}>
          {t("productDetails.cleaningInstructions")}
        </CustomText>

        <Icon
          name={
            openSections.includes("cleaning")
              ? iconsObject.minus
              : iconsObject.plus
          }
          width={12}
          height={12}
        />
      </Button>
      {openSections.includes("cleaning") && (
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

  const DescriptionSection = () => (
    <div className={styles["details-section"]}>
      <Button
        onClick={() => toggleSection("description")}
        className={`${styles["section-header"]} ${styles["with-left-padding"]}`}
      >
        <CustomText variant={TextVariant.HEADING2}>
          {t("productDetails.description")}
        </CustomText>
        <Icon
          name={
            openSections.includes("description")
              ? iconsObject.minus
              : iconsObject.plus
          }
          width={12}
          height={12}
        />
      </Button>
      {openSections.includes("description") && (
        <div
          className={`${styles["section-content"]} ${styles["with-left-padding"]}`}
        >
          <CustomText
            text={
              productData?.description ?? t("productDetails.descriptionText")
            }
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

  const ReturnSection = () => (
    <div className={`${styles["details-section"]} ${styles["return-section"]}`}>
      <Button
        onClick={() => toggleSection("return")}
        className={`${styles["section-header"]} ${styles["with-left-padding"]}`}
      >
        <CustomText variant={TextVariant.HEADING2}>
          {t("productDetails.freeReplacementReturn")}
        </CustomText>
        <span className={styles["section-icon"]}>
          <Icon
            name={
              openSections.includes("return")
                ? iconsObject.minus
                : iconsObject.plus
            }
            width={12}
            height={12}
          />
        </span>
      </Button>
      {openSections.includes("return") && (
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
                  setSelectedLocation(
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
            {productData?.returnPolicies.map((policy, index) => (
              <li key={index} className={styles["return-list-item"]}>
                <span>•</span>
                <CustomText variant={TextVariant.CAPTION_TITLE1}>
                  {policy}
                </CustomText>
              </li>
            ))}
          </ul>

          <div className={styles["delivery-table"]}>
            {productData?.delivery.locations.map((location) => (
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
                  {t("productDetails.deliveryTime", { value: location.days })}
                </CustomText>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const sectionComponents: Record<AccordionSection, React.ReactNode> = {
    material: <MaterialSection key="material" />,
    cleaning: <CleaningSection key="cleaning" />,
    description: <DescriptionSection key="description" />,
    return: <ReturnSection key="return" />,
  };

  return (
    <div className={`${styles["product-details-grid"]} ${className}`}>
      {/* Desktop layout - original order */}
      {/* <div className={styles["desktop-layout"]}>
        {DESKTOP_SECTION_ORDER.map((section) => sectionComponents[section])}
      </div> */}
      <div className={styles["desktop-layout"]}>
        {sectionComponents.material}

        <div className={styles["middle-column"]}>
          {sectionComponents.cleaning}
          {sectionComponents.return}
        </div>

        {sectionComponents.description}
      </div>

      {/* Mobile layout - reordered: Material, Cleaning, Free Replacement, Description */}
      <div className={styles["mobile-layout"]}>
        {MOBILE_SECTION_ORDER.map((section) => sectionComponents[section])}
      </div>
    </div>
  );
};
