# CustomVideoPlayer Component

## Overview

Custom video player with play/pause controls for product videos.

## Location

`src/components/atoms/CustomVideoPlayer/`

## Files

| File | Purpose |
|------|---------|
| `CustomVideoPlayer.component.tsx` | Main component implementation |
| `CustomVideoPlayer.style.ts` | Player styling |
| `CustomVideoPlayer.types.ts` | TypeScript interfaces |
| `index.ts` | Public exports |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Video source URL |
| `poster` | `string` | - | Poster image URL |
| `autoPlay` | `boolean` | `false` | Auto-play on load |
| `loop` | `boolean` | `true` | Loop video playback |
| `muted` | `boolean` | `true` | Mute audio |

## Usage

```tsx
import { CustomVideoPlayer } from '@/components/atoms/CustomVideoPlayer';

<CustomVideoPlayer 
  src="/videos/product-demo.mp4"
  poster="/images/video-poster.jpg"
  loop
  muted
/>
```

## Features

- Custom play/pause overlay
- Poster image support
- Mobile-optimized controls
- Responsive sizing
