# Utility Functions

## Location

`src/utils/helpers.ts`

## Available Functions

### cn(...classes)

Combines class names using clsx and tailwind-merge.

```tsx
import { cn } from "@/src/utils/helpers"

<div className={cn("base-class", isActive && "active-class", className)} />
```

## Design Tokens

All design tokens are centralized in `app/globals.css`:

### Colors
- `--color-primary`: #212121
- `--color-secondary`: #ffffff
- `--color-text-primary`: #212121
- `--color-text-secondary`: #a0a0a0
- `--color-border`: #dedede
- `--color-border-light`: #f2f2f2
- `--color-error`: #eca396
- `--color-accent`: #96eca3

### Spacing Scale
- `--spacing-xs`: 0.25rem (4px)
- `--spacing-sm`: 0.5rem (8px)
- `--spacing-md`: 0.75rem (12px)
- `--spacing-base`: 1rem (16px)
- `--spacing-lg`: 1.25rem (20px)
- `--spacing-xl`: 1.5rem (24px)
- `--spacing-2xl`: 1.75rem (28px)
- `--spacing-3xl`: 2rem (32px)
- `--spacing-4xl`: 2.5rem (40px)

### Font Weights
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700
