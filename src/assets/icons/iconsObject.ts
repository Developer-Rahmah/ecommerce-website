// Centralized icon management system
// All icons are exported from this file to maintain consistency

// UI Icons
import plus from "./plus.svg";
import minus from "./minus.svg";
import search from "./search.svg";
import user from "./user.svg";
import shoppingBag from "./shopping-bag.svg";
import wishlist from "./wishlist.svg";
import dropdownArrow from "./dropdown-arrow.svg";
import rightArrow from "./right-arrow.svg";
import topArrow from "./top-arrow.svg";
import freeReturn from "./free-return.svg";
import freeDelivery from "./free-delivery.svg";
import thumbsUp from "./thumbs-up.svg";
import placeholder from "./placeholder.svg";
import sale from "./sale.svg";
import filledArrowDown from "./filled-arrow-down.svg";
import userAvatar from "./user-avatar.svg";
// Product Icons
import starFilled from "./star-filled.svg";
import starOutline from "./star-outline.svg";
import tag from "./tag.svg";

// Delivery & Shipping Icons
import shippingTruck from "./shipping-truck.svg";
import returnBox from "./return-box.svg";

// Material & Care Icons
import noBleach from "./no-bleach.svg";
import iron from "./iron.svg";

// Currency Icons
import riyal from "./riyal.svg";

// Country Flags Icons
import sarFlag from "./sar-flag.svg";
import jodFlag from "./jod-flag.svg";
import usaFlag from "./usa-flag.svg";
import eurFlag from "./eur-flag.svg";
import play from "./play.svg";
import pause from "./pause.svg";
import next from "./next.svg";
import previous from "./previous.svg";

const iconsObject = {
  // UI Icons
  plus,
  minus,
  search,
  user,
  shoppingBag,
  wishlist,
  dropdownArrow,
  rightArrow,
  topArrow,
  freeReturn,
  freeDelivery,
  thumbsUp,
  placeholder,
  sale,
  filledArrowDown,
  userAvatar,
  // Product Icons
  starFilled,
  starOutline,
  tag,
  play,
  pause,
  next,
  previous,
  // Delivery & Shipping Icons
  shippingTruck,
  returnBox,

  // Material & Care Icons
  noBleach,
  iron,

  // Currency Icons
  riyal,

  // Country Flags Icons
  sarFlag,
  jodFlag,
  usaFlag,
  eurFlag,
} as const;

export type IconName = keyof typeof iconsObject;

export default iconsObject;
