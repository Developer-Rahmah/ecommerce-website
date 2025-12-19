# MobileSearchBanner Component

## Overview

Mobile-specific search input banner that appears below the header on small screens.

## Location

`src/components/molecules/MobileSearchBanner/`

## Files

| File | Purpose |
|------|---------|
| `MobileSearchBanner.component.tsx` | Main component implementation |
| `MobileSearchBanner.style.ts` | Search banner styling |
| `MobileSearchBanner.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | - | Input placeholder text |
| `onSearch` | `(query: string) => void` | - | Search handler |

## Usage

```tsx
import { MobileSearchBanner } from '@/components/molecules/MobileSearchBanner';

<MobileSearchBanner 
  placeholder="Search products..."
  onSearch={handleSearch}
/>
```

## Features

- Full-width search input
- Search icon button
- Mobile-only visibility (hidden on desktop)
- RTL text alignment support
