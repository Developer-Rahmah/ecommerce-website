# RelatedProducts Component

## Overview

Horizontal scrollable carousel displaying related or recommended products.

## Location

`src/components/organisms/RelatedProducts/`

## Files

| File | Purpose |
|------|---------|
| `RelatedProducts.component.tsx` | Main component implementation |
| `RelatedProducts.style.ts` | Carousel styling |
| `RelatedProducts.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `products` | `Product[]` | - | Array of related products |
| `title` | `string` | - | Section heading |

## Features

- Section title
- Horizontal scroll carousel
- Product cards with image, title, price
- Navigation arrows (desktop)
- Touch/swipe support (mobile)
- "View All" link option

## Usage

```tsx
import { RelatedProducts } from '@/components/organisms/RelatedProducts';

<RelatedProducts 
  title="You May Also Like"
  products={relatedProducts}
/>
```

## Product Card Contents

- Product image thumbnail
- Product name
- Price
- Quick add to cart (optional)
