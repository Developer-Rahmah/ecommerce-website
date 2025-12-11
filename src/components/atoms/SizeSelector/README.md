# SizeSelector Component

Interactive size selection buttons for product pages.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| sizes | string[] | - | Available sizes |
| selectedSize | string | - | Currently selected size |
| onSizeChange | (size: string) => void | - | Size change callback |
| disabled | boolean | false | Disable all buttons |

## Usage

\`\`\`tsx
import { SizeSelector } from '@/src/components/atoms/SizeSelector';

const [size, setSize] = useState('M');

<SizeSelector 
  sizes={['XS', 'S', 'M', 'L', 'XL']} 
  selectedSize={size}
  onSizeChange={setSize}
/>
