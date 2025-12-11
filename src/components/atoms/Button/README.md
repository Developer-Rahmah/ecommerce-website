# Button Component

A versatile button component that supports multiple variants, sizes, and styles.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Button content |
| variant | 'primary' \| 'secondary' \| 'outline' | 'primary' | Button style variant |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| fullWidth | boolean | false | Make button full width |
| className | string | '' | Additional CSS classes |

## Usage

\`\`\`tsx
import { Button } from '@/src/components/atoms/Button';

<Button variant="primary" size="large" fullWidth>
  Add to Cart
</Button>
\`\`\`

## Variants

- **primary**: Solid black background with white text
- **secondary**: White background with black text and border
- **outline**: Transparent background with border

## Accessibility

- Supports all standard button HTML attributes
- Keyboard accessible
- Focus states included
