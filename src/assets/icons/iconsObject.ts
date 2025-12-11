// Centralized icon management system
// All icons are exported from this file to maintain consistency
export const iconsObject = {
  // UI Icons
  plus: "/icons/plus.svg",
  minus: "/icons/minus.svg",
  search: "/icons/search.svg",
  user: "/icons/user.svg",
  shoppingBag: "/icons/shopping-bag.svg",
  wishlist: "/icons/wishlist.svg",
  dropdownArrow: "/icons/dropdown-arrow.svg",
  rightArrow: "/icons/right-arrow.svg",
  // Product Icons
  starFilled: "/icons/star-filled.svg",
  starOutline: "/icons/star-outline.svg",
  tag: "/icons/tag.svg",
  tagPromo: "/icons/tag-promo.svg",

  // Delivery & Shipping Icons
  deliveryTruck: "/icons/delivery-truck.svg",
  shippingTruck: "/icons/shipping-truck.svg",
  returnBox: "/icons/return-box.svg",

  // Material & Care Icons
  noBleach: "/icons/no-bleach.svg",
  iron: "/icons/iron.svg",
  fabric: "/icons/fabric.svg",

  // Status Icons
  attention: "/icons/attention.svg",

  // Currency Icons
  riyal: "/icons/riyal.svg",

  // Country Flags Icons
  sarFlag: "/icons/sar-flag.svg",
  jodFlag: "/icons/jod-flag.svg",
  usaFlag: "/icons/usa-flag.svg",
  eurFlag: "/icons/eur-flag.svg",
} as const;

export type IconName = keyof typeof iconsObject;
