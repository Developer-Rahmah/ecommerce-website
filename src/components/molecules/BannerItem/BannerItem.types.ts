import iconsObject from "@/src/assets/icons/iconsObject";

export interface BannerItemProps {
  iconName: keyof typeof iconsObject;
  text: string;
  className?: string;
}
