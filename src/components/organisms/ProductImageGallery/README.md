# ProductImageGallery

Product image gallery with main image display and thumbnail navigation.

## Usage

\`\`\`tsx
import { ProductImageGallery } from '@/src/components/organisms/ProductImageGallery';

<ProductImageGallery
  images={['/image1.jpg', '/image2.jpg', '/image3.jpg']}
  productName="White Dress"
/>
\`\`\`

## Props

- `images` (string[], required): Array of image URLs
- `productName` (string, required): Product name for alt text

## Features

- Interactive thumbnail selection
- Active thumbnail highlighting
- Responsive image sizing
- Smooth transitions
