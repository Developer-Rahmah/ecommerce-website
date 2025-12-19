# BannerItem Component

## Overview

Individual banner card component used within the top promotional banner carousel.

## Location

`src/components/molecules/BannerItem/`

## Files

| File | Purpose |
|------|---------|
| `BannerItem.component.tsx` | Main component implementation |
| `BannerItem.style.ts` | Banner styling |
| `BannerItem.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconName` | - | Promotional icon |
| `text` | `string` | - | Banner message |
| `highlight` | `string` | - | Highlighted text portion |

## Usage

```tsx
import { BannerItem } from '@/components/molecules/BannerItem';

<BannerItem 
  icon="truck"
  text="Free shipping on orders over"
  highlight="$50"
/>
```

## Styling

- Dark background (`#212121`)
- White text with accent highlights
- Icon + text horizontal layout
