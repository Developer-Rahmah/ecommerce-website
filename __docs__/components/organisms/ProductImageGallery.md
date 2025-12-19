# ProductImageGallery Component

## Overview

Product image gallery with main image display, thumbnail navigation, and video support.

## Location

`src/components/organisms/ProductImageGallery/`

## Files

| File | Purpose |
|------|---------|
| `ProductImageGallery.component.tsx` | Main component implementation |
| `ProductImageGallery.style.ts` | Gallery styling |
| `ProductImageGallery.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `ProductImage[]` | - | Array of product images |
| `video` | `ProductVideo` | - | Optional product video |

## Features

- Large main image display
- Thumbnail strip navigation
- Video thumbnail with play indicator
- Image zoom on hover (desktop)
- Swipe navigation (mobile)
- Keyboard navigation support

## Usage

```tsx
import { ProductImageGallery } from '@/components/organisms/ProductImageGallery';

<ProductImageGallery 
  images={product.images}
  video={product.video}
/>
```

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile | Full-width slider with dots |
| Desktop | Main image + vertical thumbnails |
