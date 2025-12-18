# ProductDetails Component

Accordion-style product information sections.

## Location

`src/components/organisms/ProductDetails/`

## Sections

1. **Material Details** - Stretch slider, lining slider, fabric info
2. **Cleaning Instructions** - Care icons and instructions
3. **Description** - Product description and "Buy the Set" feature
4. **Free Replacement & Return** - Shipping info and policies

## Mobile vs Desktop Order

**Desktop**: Material, Cleaning, Description, Return (3-column grid)
**Mobile**: Material, Cleaning, Return, Description (single column)

## Props

| Prop | Type | Description |
|------|------|-------------|
| `productData` | `ProductData` | Product information object |
| `className` | `string` | Additional CSS classes |

## Usage

```tsx
import { ProductDetails } from "@/src/components/organisms/ProductDetails"

<ProductDetails productData={product} />
