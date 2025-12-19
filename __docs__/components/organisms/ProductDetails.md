# ProductDetails Component

## Overview

Expandable product details section with tabs/accordions for specifications, care instructions, and shipping information.

## Location

`src/components/organisms/ProductDetails/`

## Files

| File | Purpose |
|------|---------|
| `ProductDetails.component.tsx` | Main component implementation |
| `ProductDetails.style.ts` | Details styling |
| `ProductDetails.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `details` | `ProductDetailSection[]` | - | Array of detail sections |

## Sections

- **Product Information**: Material, dimensions, features
- **Care Instructions**: Washing, drying, storage
- **Shipping & Returns**: Delivery times, return policy

## Features

- Accordion-style expandable sections
- Smooth expand/collapse animations
- Only one section open at a time
- Icon indicators for open/closed state

## Usage

```tsx
import { ProductDetails } from '@/components/organisms/ProductDetails';

<ProductDetails details={product.details} />
```

## Accessibility

- Keyboard navigable
- ARIA expanded states
- Focus management
