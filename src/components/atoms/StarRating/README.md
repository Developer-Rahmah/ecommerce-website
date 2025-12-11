# StarRating Component

Displays star ratings for products and reviews.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| rating | number | - | Rating value (0-5) |
| totalStars | number | 5 | Total number of stars |
| size | 'small' \| 'medium' \| 'large' | 'small' | Star size |
| showNumber | boolean | false | Show numeric rating |
| className | string | '' | Additional CSS classes |

## Usage

\`\`\`tsx
import { StarRating } from '@/src/components/atoms/StarRating';

<StarRating rating={4.5} size="medium" showNumber />
