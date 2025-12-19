# TopBanner Component

## Overview

Promotional banner carousel displayed at the top of the page with rotating messages.

## Location

`src/components/organisms/TopBanner/`

## Files

| File | Purpose |
|------|---------|
| `TopBanner.component.tsx` | Main component implementation |
| `TopBanner.style.ts` | Banner styling |
| `TopBanner.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Features

- Auto-rotating promotional messages
- Icon + text format
- Dark theme styling
- Responsive text sizing

## Usage

```tsx
import { TopBanner } from '@/components/organisms/TopBanner';

<TopBanner />
```

## Banner Content

Content is managed through localization files:
- `src/localization/en.ts`
- `src/localization/ar.ts`

## Styling

- Background: `#212121`
- Text: White
- Height: Fixed compact height
- Full viewport width
