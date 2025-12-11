# ProductInfoSection

Product information section with size selection, purchase buttons, and delivery info.

## Usage

\`\`\`tsx
import { ProductInfoSection } from '@/src/components/organisms/ProductInfoSection';

<ProductInfoSection
  productName="White Bare Shoulder Dress"
  price={521}
  currency="SAR"
  rating={521}
/>
\`\`\`

## Props

- `productName` (string, required): Product name
- `price` (number, required): Product price
- `currency` (string, optional): Currency code, defaults to "SAR"
- `rating` (number, optional): Product rating count

## Features

- Size selection
- City-based delivery info
- Promo code display
- Buy now and Add to cart buttons
