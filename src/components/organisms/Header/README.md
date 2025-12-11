# Header Component

The main navigation header for the Aleena e-commerce website.

## Features

- Promotional top bar with code display
- Currency selector (SAR)
- Language switcher (EN/AR) with RTL support
- Desktop navigation with category links
- Mobile responsive menu
- Search and cart actions
- Sticky positioning

## Structure

\`\`\`
Header/
├── Header.component.tsx  # Main component logic
├── Header.style.css      # Component styles
├── Header.types.ts       # TypeScript types
├── index.ts              # Export file
└── README.md             # Documentation
\`\`\`

## Usage

\`\`\`tsx
import { Header } from "@/src/components/organisms/Header"

<Header />
\`\`\`

## Design Tokens

- Background: `#FFFFFF`
- Text: `#212121`
- Border: `#F2F2F2`, `#DEDEDE`
- Accent (Shop All): `#ECA396`
- Active state: `#96ECA3`

## Responsive Breakpoints

- Mobile: < 768px (hamburger menu)
- Desktop: ≥ 768px (full navigation)
