import aleenaSingleSilkPillowcase1 from "./aleena-single-silk-pillowcase-1.png";

import aleenaSingleSilkPillowcase2 from "./aleena-single-silk-pillowcase-2.png";
import aleenaSingleSilkPillowcase3 from "./aleena-single-silk-pillowcase-3.png";
import aleenaSingleSilkPillowcase4 from "./aleena-single-silk-pillowcase-4.png";
import aleenaSingleSilkPillowcase5 from "./aleena-single-silk-pillowcase-5.png";

import aleenaSingleSilkPillowcase6 from "./aleena-single-silk-pillowcase-6.png";

const imagesObject = {
  aleenaSingleSilkPillowcaseMain: "aleena-single-silk-pillowcase-main.png",
  aleenaSingleSilkPillowcase1,
  aleenaSingleSilkPillowcase2,
  aleenaSingleSilkPillowcase3,
  aleenaSingleSilkPillowcase4,
  aleenaSingleSilkPillowcase5,
  aleenaSingleSilkPillowcase6,
} as const;

export type ImageName = keyof typeof imagesObject;

export default imagesObject;
