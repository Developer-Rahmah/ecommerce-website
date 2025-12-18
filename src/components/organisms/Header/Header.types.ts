import { IconName } from "@/src/assets/icons/iconsObject";

export interface HeaderProps {
  className?: string;
}

export interface MobileMenuState {
  isOpen: boolean;
}
export type Currency = {
  code: string;
  symbol: string;
  countryFlag: IconName;
};
