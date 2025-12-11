# Icon Component

Displays SVG icons from the project's icon library.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | IconName | - | Icon identifier |
| size | number | 20 | Icon size in pixels |
| color | string | 'currentColor' | Icon color |
| className | string | '' | Additional CSS classes |

## Available Icons

- package
- truck  
- tag
- search
- user
- cart
- wishlist
- star
- star-filled

## Usage

\`\`\`tsx
import { Icon } from '@/src/components/atoms/Icon';

<Icon name="cart" size={24} />
