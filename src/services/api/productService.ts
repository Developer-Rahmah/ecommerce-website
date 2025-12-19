import imagesObject from "@/src/assets/images/imagesObject";
import videosObject from "@/src/assets/videos/videosObject";
import { StaticImageData } from "next/image";

export interface ProductData {
  id: string;
  name: string;
  price: number;
  currency: string;
  rating: number;
  images: Images[];
  sizes: string[];
  colors: string[];
  description: string;
  promoCode: string;
  material: {
    stretch: number;
    lining: number;
    fabricType: string;
    fabricImage: StaticImageData;
  };
  cleaning: {
    noBleach: boolean;
    ironLowTemp: boolean;
  };
  delivery: {
    locations: DeliveryLocation[];
    freeDeliveryThreshold: number;
  };
  returnPolicies: string[];
  relatedProducts: RelatedProduct[];
}

export interface DeliveryLocation {
  name: string;
  days: string;
}
export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  newArrival: boolean;
}
export interface Images {
  src: StaticImageData | string;
  type: string;
  videoSrc?: string;
}
// Simulating API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
// Mock product data
const mockProductData: ProductData = {
  id: "prod-001",
  name: "Aleena™ Silk+Bamboo Pillowcase (2 Pillowcases)",
  price: 521,
  currency: "SAR",
  rating: 521,
  promoCode: "NEW",
  images: [
    {
      src: imagesObject.aleenaSingleSilkPillowcaseMain,
      type: "video",
      videoSrc: videosObject.slik,
    },

    {
      src: imagesObject.aleenaSingleSilkPillowcase2,
      type: "image",
    },
    {
      src: imagesObject.aleenaSingleSilkPillowcase3,
      type: "image",
    },
    {
      src: imagesObject.aleenaSingleSilkPillowcase4,
      type: "image",
    },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["white", "black", "beige"],
  description:
    "Experience the ideal harmony of silk and bamboo with the Aleena™  Silk + Bamboo Pillowcase. One side features luxurious silk that helps to hydrate your skin and hair, while the other side is bamboo, known for its cooling and moisture-absorbing qualities. These pillowcases offer the ultimate comfort for a rejuvenating night’s sleep, combining elegance with sustainability.",
  material: {
    stretch: 0, // 0 = No Stretch, 50 = Medium, 100 = High
    lining: 100, // 0 = No Lining, 100 = Lined
    fabricType: "Crepe",
    fabricImage: imagesObject.aleenaSingleSilkPillowcase6,
  },
  cleaning: {
    noBleach: true,
    ironLowTemp: true,
  },
  delivery: {
    locations: [
      { name: "Riyadh", days: "1-2 " },
      { name: "Dammam", days: "2-3 " },
      { name: "Jeddah", days: "2-3 " },
      { name: "Makkah", days: "3-4 " },
      { name: "Medina", days: "3-4 " },
      { name: "Other Cities", days: "5-7 " },
    ],
    freeDeliveryThreshold: 400,
  },
  returnPolicies: [
    "You can request a free return within Saudi Arabia up to 7 days after receiving your order",
    "Free delivery for orders over 400 SAR",
    "Aleena clothing products purchased during offers and discounts are not refundable under any circumstances.",
  ],

  relatedProducts: [
    {
      id: "prod-002",
      name: "Aleena™ Silk+Bamboo Pillowcase (2 Pillowcases)",
      price: 521,
      image: imagesObject.aleenaSingleSilkPillowcaseMain,
      newArrival: true,
    },

    {
      id: "prod-003",
      name: "Aleena™ Silk+Bamboo Pillowcase (2 Pillowcases)",
      price: 521,
      image: imagesObject.aleenaSingleSilkPillowcaseMain,
      newArrival: true,
    },
    {
      id: "prod-004",
      name: "Aleena™ Silk+Bamboo Pillowcase (2 Pillowcases)",
      price: 521,
      image: imagesObject.aleenaSingleSilkPillowcaseMain,
      newArrival: true,
    },
    {
      id: "prod-005",
      name: "Aleena™ Silk+Bamboo Pillowcase (2 Pillowcases)",
      price: 521,
      image: imagesObject.aleenaSingleSilkPillowcaseMain,
      newArrival: true,
    },
    {
      id: "prod-006",
      name: "Aleena™ Silk+Bamboo Pillowcase (2 Pillowcases)",
      price: 521,
      image: imagesObject.aleenaSingleSilkPillowcaseMain,
      newArrival: true,
    },
    {
      id: "prod-007",
      name: "Aleena™ Silk+Bamboo Pillowcase (2 Pillowcases)",
      price: 521,
      image: imagesObject.aleenaSingleSilkPillowcaseMain,
      newArrival: true,
    },
    {
      id: "prod-008",
      name: "Aleena™ Silk+Bamboo Pillowcase (2 Pillowcases)",
      price: 521,
      image: imagesObject.aleenaSingleSilkPillowcaseMain,
      newArrival: true,
    },
  ],
};

// Mock API functions
export const productService = {
  // Fetch product by ID - simulates API call
  async getProductById(productId: string): Promise<ProductData> {
    console.log(" Fetching product data from API...", productId);
    await delay(500); // Simulate network delay
    console.log(" Product data received:", mockProductData);
    return mockProductData;
  },

  // Fetch related products - simulates API calldeli
  async getRelatedProducts(productId: string): Promise<RelatedProduct[]> {
    console.log(" Fetching related products from API...", productId);
    await delay(300); // Simulate network delay
    console.log(" Related products received:", mockProductData.relatedProducts);
    return mockProductData.relatedProducts;
  },
};
