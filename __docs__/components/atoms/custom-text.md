# CustomText Component

A typography component for consistent text rendering across the app.

## Location

`src/components/atoms/CustomText/`

## Text Variants

| Variant | Font Size | Weight | Line Height |
|---------|-----------|--------|-------------|
| `HEADING1` | 24px | Medium | 1.25 |
| `HEADING2` | 16px | Medium | 1.25 |
| `TITLE` | 14px | Medium | 1.125rem |
| `BODY` | 14px | Normal | 1.125rem |
| `CAPTION_TITLE1` | 12px | Medium | 1rem |
| `CAPTION_BODY1` | 12px | Normal | 1rem |
| `CAPTION_TITLE2` | 10px | Medium | 0.875rem |
| `CAPTION_BODY2` | 10px | Normal | 0.875rem |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `TextVariant` | `BODY` | Typography variant |
| `as` | `ElementType` | `span` | HTML element to render |
| `text` | `string` | - | Text content (alternative to children) |
| `children` | `ReactNode` | - | Text content |
| `className` | `string` | `''` | Additional CSS classes |

## Usage

```tsx
import CustomText, { TextVariant } from "@/src/components/atoms/CustomText"

<CustomText variant={TextVariant.HEADING1}>
  Product Title
</CustomText>

<CustomText variant={TextVariant.BODY} text="Product description" />
