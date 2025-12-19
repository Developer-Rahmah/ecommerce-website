# ProductPageTemplate Component

## Overview

Full-page template that composes all product page sections into a complete layout.

## Location

`src/components/templates/ProductPageTemplate/`

## Files

| File | Purpose |
|------|---------|
| `ProductPageTemplate.component.tsx` | Main template implementation |
| `ProductPageTemplate.style.ts` | Template layout styling |
| `ProductPageTemplate.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Composition

```
┌─────────────────────────────────────┐
│           TopBanner                 │
├─────────────────────────────────────┤
│           Header                    │
├─────────────────────────────────────┤
│  ProductImageGallery │ ProductInfo  │
│                      │   Section    │
├─────────────────────────────────────┤
│         ProductDetails              │
├─────────────────────────────────────┤
│         RelatedProducts             │
└─────────────────────────────────────┘
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `product` | `Product` | - | Complete product data |
| `relatedProducts` | `Product[]` | - | Related products array |

## Usage

```tsx
import { ProductPageTemplate } from '@/components/templates/ProductPageTemplate';

<ProductPageTemplate 
  product={productData}
  relatedProducts={related}
/>
```

## Responsive Layout

| Breakpoint | Gallery/Info Layout |
|------------|---------------------|
| Mobile (<768px) | Stacked (vertical) |
| Desktop (≥768px) | Side-by-side (50/50) |
