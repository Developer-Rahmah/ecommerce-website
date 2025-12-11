// Mock API service to demonstrate API fetching capabilities
// In a real application, this would make actual HTTP requests

export interface ProductData {
  id: string;
  name: string;
  price: number;
  currency: string;
  rating: number;
  images: string[];
  sizes: string[];
  colors: string[];
  description: string;
  material: {
    stretch: number;
    lining: number;
    fabricType: string;
    fabricImage: string;
  };
  cleaning: {
    noBleach: boolean;
    ironLowTemp: boolean;
  };
  delivery: {
    locations: {
      name: string;
      days: string;
    }[];
    freeDeliveryThreshold: number;
  };
  returnPolicies: string[];
  relatedProducts: RelatedProduct[];
}

export interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  newArrival: boolean;
}

// Simulating API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock product data
const mockProductData: ProductData = {
  id: "prod-001",
  name: "White Bare Shoulder Crepe Midi Dress",
  price: 521,
  currency: "SAR",
  rating: 521,
  images: [
    "/white-elegant-midi-dress-model.jpg",
    "/white-elegant-midi-dress-model-side-view.jpg",
    "/white-elegant-midi-dress-detail-view.jpg",
    "/white-elegant-midi-dress-back-view.jpg",
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["white", "black", "beige"],
  description:
    "Indulge in luxurious elegance with our Bare shoulder Crepe Midi dress. Featuring a flattering bare shoulder design and crafted from high-quality crepe fabric, this dress exudes sophistication and exclusivity. Perfect for any occasion, it will be your go-to choice for effortless style and graceful charm.",
  material: {
    stretch: 0, // 0 = No Stretch, 50 = Medium, 100 = High
    lining: 100, // 0 = No Lining, 100 = Lined
    fabricType: "Crepe",
    fabricImage: "/white-crepe-fabric-texture-closeup.jpg",
  },
  cleaning: {
    noBleach: true,
    ironLowTemp: true,
  },
  delivery: {
    locations: [
      { name: "Riyadh", days: "1-2" },
      { name: "Dammam", days: "2-3" },
      { name: "Jeddah", days: "2-3" },
      { name: "Other Cities", days: "3-5" },
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
      name: "White Bare Shoulder Crepe Midi Dress",
      price: 521,
      image: "/white-elegant-midi-dress-model.jpg",
      newArrival: true,
    },
    {
      id: "prod-003",
      name: "White Bare Shoulder Crepe Midi Dress",
      price: 521,
      image: "/white-elegant-midi-dress-model.jpg",
      newArrival: true,
    },
    {
      id: "prod-004",
      name: "White Bare Shoulder Crepe Midi Dress",
      price: 521,
      image: "/white-elegant-midi-dress-model.jpg",
      newArrival: true,
    },
    {
      id: "prod-005",
      name: "White Bare Shoulder Crepe Midi Dress",
      price: 521,
      image: "/white-elegant-midi-dress-model.jpg",
      newArrival: true,
    },
    {
      id: "prod-006",
      name: "White Bare Shoulder Crepe Midi Dress",
      price: 521,
      image: "/white-elegant-midi-dress-model.jpg",
      newArrival: true,
    },
    {
      id: "prod-007",
      name: "White Bare Shoulder Crepe Midi Dress",
      price: 521,
      image: "/white-elegant-midi-dress-model.jpg",
      newArrival: true,
    },
    {
      id: "prod-008",
      name: "White Bare Shoulder Crepe Midi Dress",
      price: 521,
      image: "/white-elegant-midi-dress-model.jpg",
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
