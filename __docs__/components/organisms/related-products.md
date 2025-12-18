# RelatedProducts Component

"You May Also Like" product carousel/grid.

## Location

`src/components/organisms/RelatedProducts/`

## Features

- Desktop: 7-column grid layout
- Mobile: Horizontal scroll with dot indicators
- Product cards with image, title, price, and badge

## Props

| Prop | Type | Description |
|------|------|-------------|
| `products` | `RelatedProduct[]` | Array of related products |

## Responsive Behavior

- **Mobile**: Horizontal swipeable carousel with dot navigation
- **Tablet**: 3-4 column grid
- **Desktop**: 7 column grid

## Usage

```tsx
import { RelatedProducts } from "@/src/components/organisms/RelatedProducts"

<RelatedProducts products={relatedProducts} />
