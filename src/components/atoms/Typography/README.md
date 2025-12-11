# Typography Component

Flexible typography component for consistent text styling.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | TypographyVariant | 'body' | Typography style variant |
| children | ReactNode | - | Text content |
| as | string | - | HTML element to render |
| color | string | - | Custom text color |
| className | string | '' | Additional CSS classes |

## Variants

- **h1-h4**: Heading styles
- **body**: Standard body text
- **small**: Smaller body text
- **caption**: Very small text
- **label**: Uppercase labels

## Usage

\`\`\`tsx
import { Typography } from '@/src/components/atoms/Typography';

<Typography variant="h1">Product Title</Typography>
<Typography variant="body">Description text</Typography>
