# Slider Component

A custom slider component for material properties display.

## Location

`src/components/atoms/Slider/`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current value (0-100) |
| `onChange` | `(value: number) => void` | - | Value change handler |
| `labels` | `string[]` | `[]` | Labels for slider positions |
| `title` | `string` | - | Optional title above slider |

## Usage

```tsx
import { Slider } from "@/src/components/atoms/Slider"

<Slider
  value={50}
  onChange={setValue}
  labels={["No Stretch", "Medium", "High"]}
  title="Stretch"
/>
