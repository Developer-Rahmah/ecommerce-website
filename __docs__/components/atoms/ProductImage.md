# ProductImage Component

## Overview

Optimized image component for product photos with loading states and fallbacks.

## Location

`src/components/atoms/ProductImage/`

## Files

| File | Purpose |
|------|---------|
| `ProductImage.component.tsx` | Main component implementation |
| `ProductImage.style.ts` | Image container styling |
| `ProductImage.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Alt text for accessibility |
| `aspectRatio` | `string` | `'1/1'` | CSS aspect ratio |
| `className` | `string` | - | Additional CSS classes |
| `priority` | `boolean` | `false` | Next.js priority loading |

## Usage

```tsx
import { ProductImage } from '@/components/atoms/ProductImage';

<ProductImage 
  src="/images/product.jpg" 
  alt="Silk Pillowcase"
  aspectRatio="4/3"
  priority
/>
```

## Features

- Next.js Image optimization
- Lazy loading by default
- Skeleton loading state
- Error fallback image
