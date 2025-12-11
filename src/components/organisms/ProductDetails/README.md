# ProductDetails Component

Accordion-based product details section displaying material information, cleaning instructions, description, and return policy.

## Features

- Four accordion sections laid out horizontally
- Material Details with dual slider controls (Stretch & Lining)
- Cleaning Instructions with icon indicators
- Product Description with "Buy the whole set" CTA
- Free Replacement & Return with location toggle and delivery table
- Fully responsive (horizontal on desktop, vertical on mobile)
- Plus/minus icons for expand/collapse

## Structure

\`\`\`
ProductDetails/
├── ProductDetails.component.tsx  # Main component logic
├── ProductDetails.style.css      # Component styles
├── ProductDetails.types.ts       # TypeScript types
├── index.ts                      # Export file
└── README.md                     # Documentation
\`\`\`

## Usage

\`\`\`tsx
import { ProductDetails } from "@/src/components/organisms/ProductDetails"

<ProductDetails />
\`\`\`

## Sections

1. **Material Details**: Stretch/Lining sliders + fabric image
2. **Cleaning Instructions**: Care icons with text
3. **Description**: Product copy + related item CTA
4. **Free Replacement & Return**: Toggle switch + delivery table

## Design Tokens

- Border: `#DEDEDE`
- Divider: `#F2F2F2`
- Active: `#96ECA3`
- Toggle inactive: `#ECA396`
