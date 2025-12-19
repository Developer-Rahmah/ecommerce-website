"use client";

import type React from "react";
import styles from "./MobileSearchBanner.module.css";
import { Icon } from "../../atoms/Icon/index";
import iconsObject from "@/src/assets/icons/iconsObject";
import { Button } from "../../atoms/Button/index";
import { useLanguage } from "@/src/contexts/LanguageContext";

export interface MobileSearchBannerProps {
  className?: string;
}

export const MobileSearchBanner: React.FC<MobileSearchBannerProps> = ({
  className = "",
}) => {
  const { t } = useLanguage();

  return (
    <div className={`${styles["mobile-search-banner"]} ${className}`}>
      <div className={styles["search-container"]}>
        <div className={styles["search-input-wrapper"]}>
          <input
            type="text"
            placeholder={t("header.search") || "Search"}
            className={styles["search-input"]}
          />
          <Button className={styles["search-button"]}>
            <Icon name={iconsObject.search} />
          </Button>
        </div>
        <Button className={styles["visual-search-button"]}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            className={styles["visual-search-icon"]}
          >
            <path d="M32.41082,7.60858a17.528,17.528,0,1,0-2.61108,26.92279,3.41827,3.41827,0,1,0-1.25586-1.56732A15.52619,15.52619,0,1,1,35.34149,22.4455a1.0004,1.0004,0,1,0,1.97656.31054A17.60924,17.60924,0,0,0,32.41082,7.60858Zm-1.627,23.03027a1.40822,1.40822,0,0,1,.918-.33984c.03613,0,.07324.002.11035.00488a1.39761,1.39761,0,0,1,.96484.48926,1.41453,1.41453,0,0,1-.15332,1.99317v.001a1.41428,1.41428,0,0,1-1.83984-2.14844Z"></path>
            <path d="M19.82728,16.32285a3.90561,3.90561,0,1,0,3.90564,3.90564A3.90558,3.90558,0,0,0,19.82728,16.32285Zm0,5.3974a1.49179,1.49179,0,1,1,1.49182-1.49176A1.49183,1.49183,0,0,1,19.82728,21.72025Z"></path>
            <path d="M27.16382,13.33341H24.04664l-1.81348-1.49414a2.00026,2.00026,0,0,0-1.27344-.458H18.6941a1.99318,1.99318,0,0,0-1.27149.457l-1.8164,1.49511H12.491a2.0026,2.0026,0,0,0-2,2v9.79a2.0026,2.0026,0,0,0,2,2H27.16382a2.0026,2.0026,0,0,0,2-2v-9.79A2.0026,2.0026,0,0,0,27.16382,13.33341Zm-3.10546.001h0Zm3.10546,11.78906H12.491v-9.79h3.11524a2.00523,2.00523,0,0,0,1.27246-.45605l1.81543-1.49609h2.2666l1.81543,1.49609a2.00218,2.00218,0,0,0,1.27148.45605h3.11621Z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
