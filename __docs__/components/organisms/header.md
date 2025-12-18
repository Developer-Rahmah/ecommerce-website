# Header Component

The main site header with navigation, logo, and utility controls.

## Location

`src/components/organisms/Header/`

## Features

- Responsive navigation (desktop/mobile)
- Currency selector dropdown
- Language selector (English/Arabic)
- Shopping bag and search icons
- Mobile hamburger menu

## Structure

```
Header
├── Promo Bar (with discount code)
└── Main Header
    ├── Mobile Menu Toggle
    ├── Desktop Navigation
    ├── Logo (centered)
    └── Header Actions
        ├── Account Link
        ├── Search Button
        └── Shopping Bag Button
```

## Responsive Behavior

- **Mobile (< 768px)**: Shows hamburger menu, hides desktop nav
- **Tablet/Desktop (>= 768px)**: Shows full navigation

## Styling

Styles are in `Header.module.css` using CSS Modules.
