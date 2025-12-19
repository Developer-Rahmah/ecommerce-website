# Product Service

## Location

`src/services/api/productService.ts`

## Overview

API service layer for fetching product data. Currently uses mock data but structured for easy API integration.

## Functions

### `getProduct(id: string): Promise<Product>`

Fetches a single product by ID.

**Parameters:**
- `id` - Product identifier

**Returns:** Promise resolving to Product object

**Usage:**
```tsx
import { getProduct } from '@/services/api/productService';

const product = await getProduct('silk-pillowcase-001');
```

---

### `getRelatedProducts(productId: string): Promise<Product[]>`

Fetches related products for a given product.

**Parameters:**
- `productId` - Source product identifier

**Returns:** Promise resolving to array of related Products

**Usage:**
```tsx
import { getRelatedProducts } from '@/services/api/productService';

const related = await getRelatedProducts('silk-pillowcase-001');
```

## Types

```typescript
interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  currency: string;
  description: string;
  rating: number;
  reviewCount: number;
  images: ProductImage[];
  video?: ProductVideo;
  colors: ProductColor[];
  details: ProductDetailSection[];
}

interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

interface ProductVideo {
  src: string;
  poster: string;
}

interface ProductColor {
  id: string;
  name: string;
  hex: string;
}
```

## Mock Data Location

`src/data/mockProduct.ts`
