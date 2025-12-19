# CustomText Component

## Overview

A typography component that provides consistent text styling with predefined variants.

## Location

`src/components/atoms/CustomText/`

## Files

| File | Purpose |
|------|---------|
| `CustomText.component.tsx` | Main component implementation |
| `CustomText.style.ts` | Typography class definitions |
| `CustomText.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Text content to display |
| `textType` | `TextType` | `'body'` | Typography variant |
| `className` | `string` | - | Additional CSS classes |

## Text Types

- **heading-lg**: Large headings (32px)
- **heading-md**: Medium headings (24px)
- **heading-sm**: Small headings (20px)
- **body**: Regular body text (16px)
- **body-sm**: Small body text (14px)
- **caption**: Caption text (12px)

## Usage

```tsx
import { CustomText } from '@/components/atoms/CustomText';

<CustomText text="Product Title" textType="heading-lg" />
<CustomText text="Description here" textType="body" />
<CustomText text="$99.00" textType="heading-md" className="text-primary" />
```

## Font Family

Uses the project's custom fonts:
- **English**: Poppins
- **Arabic**: Cairo
