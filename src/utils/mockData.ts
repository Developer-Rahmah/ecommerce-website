// src/utils/mockData.ts
// Updated content based on Figma details
export const mockProduct = {
  id: "1",
  name: "Light Pink Long Sleeves Godet Maxi Dress",
  price: 120.0,
  oldPrice: 150.0, // Added old price for sale display
  images: [
    // Placeholder paths for the gallery
    "/images/dress-main-1.jpg",
    "/images/dress-thumb-2.jpg",
    "/images/dress-thumb-3.jpg",
    "/images/dress-thumb-4.jpg",
    // You would put these placeholder images in the public/images folder
  ],
  materialDetails: [
    "Fabric: 100% Premium Crepe",
    "Lining: Full length, soft polyester",
    "Fit: True to size, high neckline",
    "Zipper: Concealed back zipper",
  ],
  cleaningInstructions: [
    "Hand wash or machine wash cold with like colors.",
    "Do not bleach. Tumble dry low or hang to dry.",
    "Iron on low heat if needed.",
    "Dry clean recommended for first wash.",
  ],
  description:
    "A beautiful and flowy maxi dress featuring long sleeves and godet panel detailing. Perfect for special occasions or an elegant daytime look. Made with premium, soft-touch fabric for ultimate comfort.",
  availableSizes: ["S", "M", "L", "XL"],
};
