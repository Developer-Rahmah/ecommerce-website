# Icon Component

Renders SVG icons from the icons object.

## Location

`src/components/atoms/Icon/`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Path to icon from iconsObject |
| `width` | `number` | `24` | Icon width |
| `height` | `number` | `24` | Icon height |
| `className` | `string` | `''` | Additional CSS classes |

## Usage

```tsx
import { Icon } from "@/src/components/atoms/Icon"
import { iconsObject } from "@/src/assets/icons/iconsObject"

<Icon name={iconsObject.search} width={20} height={20} />
```

## Available Icons

See `src/assets/icons/iconsObject.ts` for all available icons.
