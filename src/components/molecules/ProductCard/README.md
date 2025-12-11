# ProductCard

A reusable product card component displaying product image, title, price, and optional badge.

## Usage

\`\`\`tsx
import { ProductCard } from '@/src/components/molecules/ProductCard';

<ProductCard
  image="/product.jpg"
  title="White Bare Shoulder Dress"
  price={521}
  currency="SAR"
  badge="New Arrival"
/>
\`\`\`

## Props

- `image` (string, required): Product image URL
- `title` (string, required): Product title
- `price` (number, required): Product price
- `currency` (string, optional): Currency code, defaults to "SAR"
- `badge` (string, optional): Badge text to display

## Features

- Hover zoom effect on image
- Optional badge display
- Responsive aspect ratio
- Consistent styling with design system
