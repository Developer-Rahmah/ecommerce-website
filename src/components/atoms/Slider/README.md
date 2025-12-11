# Slider Component

A custom slider component with visual step indicators for selecting between predefined options.

## Features

- Visual step indicators (gray circles)
- Active state indicator (green circle and fill)
- Snaps to predefined steps
- Customizable labels
- Smooth transitions
- Accessible

## Usage

\`\`\`tsx
import { Slider } from "@/src/components/atoms/Slider"

<Slider
  value={stretchValue}
  onChange={setStretchValue}
  labels={["No Stretch", "Medium Stretch", "High Stretch"]}
/>
\`\`\`

## Props

| Prop | Type | Description |
|------|------|-------------|
| value | number | Current slider value (0-100) |
| onChange | (value: number) => void | Callback when value changes |
| labels | string[] | Labels for each step |
| className | string | Optional CSS class |

## Design Tokens

- Track color: `#DEDEDE` (gray)
- Active color: `#96ECA3` (green)
- Inactive label: `#A0A0A0`
- Active label: `#212121`
