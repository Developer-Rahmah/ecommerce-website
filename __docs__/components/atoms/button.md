# Button Component

A reusable button component with multiple variants.

## Location

`src/components/atoms/Button/`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'ghost'` | Button style variant |
| `className` | `string` | `''` | Additional CSS classes |
| `onClick` | `function` | - | Click handler |
| `children` | `ReactNode` | - | Button content |

## Usage

```tsx
import { Button } from "@/src/components/atoms/Button"

<Button variant="primary" onClick={handleClick}>
  Buy Now
</Button>
```

## Styling

Button styles are defined in `Button.style.ts` using CSS classes.
