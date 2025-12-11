# ProductImage Component

Optimized Next.js Image component for product photos.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | - | Image source URL |
| alt | string | - | Alt text for accessibility |
| width | number | - | Image width (if not fill) |
| height | number | - | Image height (if not fill) |
| fill | boolean | false | Fill parent container |
| priority | boolean | false | Load image with priority |
| objectFit | string | 'cover' | CSS object-fit value |
| className | string | '' | Additional CSS classes |

## Usage

\`\`\`tsx
import { ProductImage } from '@/src/components/atoms/ProductImage';

<ProductImage 
  src="/product.jpg" 
  alt="Product name" 
  fill 
  priority 
/>
