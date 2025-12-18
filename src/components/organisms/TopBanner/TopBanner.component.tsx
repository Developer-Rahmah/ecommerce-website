import type React from "react";
import type { TopBannerProps } from "./TopBanner.types";
import "./TopBanner.style.css";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { BannerItem } from "../../molecules/BannerItem/BannerItem.component";

export const TopBanner: React.FC<TopBannerProps> = ({ className = "" }) => {
  const { t } = useLanguage();

  // Define banner items in an array
  const bannerItems = [
    {
      id: "freeReturns",
      iconName: "freeReturn" as const,
      text: t("banner.freeReturns"),
      className: "",
    },
    {
      id: "fastDelivery",
      iconName: "freeDelivery" as const,
      text: t("banner.fastDelivery"),
      className: "",
    },
    {
      id: "finestFabrics",
      iconName: "thumbsUp" as const,
      text: t("banner.finestFabrics"),
      className: "top-banner__item--hidden-mobile",
    },
  ];

  return (
    <div className={`top-banner ${className}`}>
      <div className="top-banner__container">
        <div className="top-banner__content">
          {bannerItems.map((item) => (
            <BannerItem
              key={item.id}
              iconName={item.iconName}
              text={item.text}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
