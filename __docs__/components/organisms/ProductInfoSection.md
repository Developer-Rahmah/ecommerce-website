# ProductInfoSection Component

## Overview

Main product information display including title, price, description, color selection, quantity, and add-to-cart functionality.

## Location

`src/components/organisms/ProductInfoSection/`

## Files

| File | Purpose |
|------|---------|
| `ProductInfoSection.component.tsx` | Main component implementation |
| `ProductInfoSection.style.ts` | Section styling |
| `ProductInfoSection.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `product` | `Product` | - | Product data object |

## Features

- Product title and brand
- Price display with currency
- Star rating display
- Product description
- Color variant selector
- Quantity selector (+/-)
- Add to Cart button
- Wishlist button
- Share functionality

## Sub-sections

1. **Title Block**: Brand, name, rating
2. **Price Block**: Current price, original price, discount
3. **Description**: Short product description
4. **Color Selector**: Visual color swatches
5. **Quantity Selector**: Increment/decrement controls
6. **Actions**: Add to cart, wishlist, share

## Usage

```tsx
import { ProductInfoSection } from '@/components/organisms/ProductInfoSection';

<ProductInfoSection product={productData} />
