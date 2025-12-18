import type React from "react";
import iconsObject from "@/src/assets/icons/iconsObject";
import { Icon } from "../../atoms/Icon";
import CustomText, { TextVariant } from "../../atoms/CustomText";
import { BannerItemProps } from "./BannerItem.types";

export const BannerItem: React.FC<BannerItemProps> = ({
  iconName,
  text,
  className = "",
}) => {
  return (
    <div className={`top-banner__item ${className}`}>
      <Icon name={iconsObject[iconName]} />
      <CustomText variant={TextVariant.BODY}>{text}</CustomText>
    </div>
  );
};
