# PriceTag Component

Displays product prices with currency symbol.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| amount | number | - | Price amount |
| currency | string | 'SAR' | Currency code |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Display size |
| showCurrency | boolean | true | Show currency symbol |
| className | string | '' | Additional CSS classes |

## Usage

\`\`\`tsx
import { PriceTag } from '@/src/components/atoms/PriceTag';

<PriceTag amount={521} currency="SAR" size="large" />
