# RelatedProducts

Related products carousel/grid displaying similar items with responsive layout.

## Usage

\`\`\`tsx
import { RelatedProducts } from '@/src/components/organisms/RelatedProducts';

<RelatedProducts products={relatedProductsArray} />
\`\`\`

## Props

- `products` (RelatedProduct[], optional): Array of related products

## Features

- Desktop grid layout (3-7 columns based on screen size)
- Mobile carousel with navigation arrows
- Dot indicators for carousel navigation
- Product cards with hover effects
- Optional badge display
