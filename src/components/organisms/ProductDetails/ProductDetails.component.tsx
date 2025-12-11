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
import { iconsObject } from "@/src/assets/icons/iconsObject";
import CustomText from "../../atoms/CustomText";
import { TypographyVariants } from "@/src/styles/typography";

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

  return (
    <div className={`${styles["product-details-grid"]} ${className}`}>
      {/* Material Details Section */}
      <div className={styles["details-section"]}>
        <button
          onClick={() => toggleSection("material")}
          className={styles["section-header"]}
        >
          <span className={styles["section-title"]}>
            {t("productDetails.materialDetails")}
          </span>
          <Image
            src={
              openSections.includes("material")
                ? iconsObject.minus
                : iconsObject.plus
            }
            alt={openSections.includes("material") ? "Collapse" : "Expand"}
            width={12}
            height={12}
          />
        </button>
        {openSections.includes("material") && (
          <div className={styles["section-content"]}>
            <Slider
              value={stretchValue}
              onChange={setStretchValue}
              labels={[
                t("productDetails.noStretch"),
                t("productDetails.mediumStretch"),
                t("productDetails.highStretch"),
              ]}
              className={styles["mb-6"]}
            />

            <div className={styles["content-divider"]} />

            <Slider
              value={liningValue}
              onChange={setLiningValue}
              labels={[t("productDetails.noLining"), t("productDetails.lined")]}
              className={styles["mb-6"]}
            />

            <div className={styles["content-divider"]} />

            <div>
              <h4 className={styles["fabric-detail-title"]}>
                {t("productDetails.fabricDetail")}
              </h4>
              <p className={styles["fabric-detail-text"]}>
                {productData?.material.fabricType ?? t("productDetails.crepe")}
              </p>
              <Image
                src={
                  productData?.material.fabricImage ??
                  "/white-crepe-fabric-texture-closeup.jpg"
                }
                alt="Fabric texture"
                width={400}
                height={200}
                className={styles["fabric-image"]}
              />
            </div>
          </div>
        )}
      </div>

      {/* Cleaning Instructions Section */}
      <div className={styles["details-section"]}>
        <button
          onClick={() => toggleSection("cleaning")}
          className={`${styles["section-header"]} ${styles["with-left-padding"]}`}
        >
          <CustomText
            className={styles["section-title"]}
            variant={TypographyVariants.TextsmRegular}
            text={t("productDetails.cleaningInstructions")}
          ></CustomText>
          <Image
            src={
              openSections.includes("cleaning")
                ? iconsObject.minus
                : iconsObject.plus
            }
            alt={openSections.includes("cleaning") ? "Collapse" : "Expand"}
            width={12}
            height={12}
          />
        </button>
        {openSections.includes("cleaning") && (
          <div
            className={`${styles["section-content"]} ${styles["with-left-padding"]}`}
          >
            <div className={styles["cleaning-item"]}>
              <Image
                src={iconsObject.noBleach || "/placeholder.svg"}
                alt="No bleach"
                width={20}
                height={20}
                className={styles["cleaning-icon"]}
              />
              <span className={styles["cleaning-text"]}>
                {t("productDetails.noBleach")}
              </span>
            </div>
            <div className={styles["content-divider"]} />
            <div className={styles["cleaning-item"]}>
              <Image
                src={iconsObject.iron || "/placeholder.svg"}
                alt="Iron"
                width={20}
                height={20}
                className={styles["cleaning-icon"]}
              />
              <span className={styles["cleaning-text"]}>
                {t("productDetails.ironLow")}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Description Section */}
      <div className={styles["details-section"]}>
        <button
          onClick={() => toggleSection("description")}
          className={`${styles["section-header"]} ${styles["with-left-padding"]}`}
        >
          <span className={styles["section-title"]}>
            {t("productDetails.description")}
          </span>
          <Image
            src={
              openSections.includes("description")
                ? iconsObject.minus
                : iconsObject.plus
            }
            alt={openSections.includes("description") ? "Collapse" : "Expand"}
            width={12}
            height={12}
          />
        </button>
        {openSections.includes("description") && (
          <div
            className={`${styles["section-content"]} ${styles["with-left-padding"]}`}
          >
            <p className={styles["description-text"]}>
              {productData?.description ?? t("productDetails.descriptionText")}
            </p>

            <div>
              <h3 className={styles["buy-set-title"]}>
                {t("productDetails.buyWholeSet")}
              </h3>
              <div className={styles["buy-set-image-wrapper"]}>
                <Image
                  src="/yellow-elegant-dress-model-full-body.jpg"
                  alt="Yellow elegant dress"
                  width={240}
                  height={320}
                />
                <div className={styles["buy-set-overlay"]}>
                  <button className={styles["buy-set-button"]}>
                    {t("productDetails.viewItem")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Free Replacement and Return Section */}
      <div className={styles["details-section"]}>
        <button
          onClick={() => toggleSection("return")}
          className={`${styles["section-header"]} ${styles["with-left-padding"]}`}
        >
          <span className={styles["section-title"]}>
            {t("productDetails.freeReplacementReturn")}
          </span>
          <Image
            src={
              openSections.includes("return")
                ? iconsObject.minus
                : iconsObject.plus
            }
            alt={openSections.includes("return") ? "Collapse" : "Expand"}
            width={12}
            height={12}
          />
        </button>
        {openSections.includes("return") && (
          <div
            className={`${styles["section-content"]} ${styles["with-left-padding"]}`}
          >
            <div className={styles["toggle-wrapper"]}>
              <span
                className={`${styles["toggle-label"]} ${
                  selectedLocation === "saudi" ? styles.active : styles.inactive
                }`}
              >
                {t("productDetails.saudiArabia")}
              </span>
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
              <span
                className={`${styles["toggle-label"]} ${
                  selectedLocation === "world" ? styles.active : styles.inactive
                }`}
              >
                {t("productDetails.restOfWorld")}
              </span>
            </div>

            <ul className={styles["return-list"]}>
              {productData?.returnPolicies.map((policy, index) => (
                <li key={index} className={styles["return-list-item"]}>
                  <span>•</span>
                  <span>{policy}</span>
                </li>
              ))}
            </ul>

            <div className={styles["delivery-table"]}>
              {productData?.delivery.locations.map((location) => (
                <div key={location.name} className={styles["delivery-row"]}>
                  <span className={styles["delivery-city"]}>
                    {location.name}
                  </span>
                  <span className={styles["delivery-time"]}>
                    {/* {t(`productDetails.deliveryWith`, { value: location.days })} */}
                    {t("productDetails.deliveryTime", { value: location.days })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
