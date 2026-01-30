# Sculptique - Lymphatic Drainage Landing Page

A modern, responsive landing page for Sculptique, a comprehensive lymphatic drainage supplement formula. Built with React, TypeScript, Vite, and Tailwind CSS.

## About Sculptique

Sculptique is a clinically-researched formula designed to address all 6 mechanisms of lymphatic dysfunction simultaneously—featuring therapeutic amounts of evidence-based ingredients for complete lymphatic restoration.

## Tech Stack

- **React** 19 - UI library
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** 4 - Utility-first styling
- **shadcn/ui & Base UI** - Component libraries
- **Embla Carousel** - Carousel functionality
- **Lucide React & React Icons** - Icon libraries
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components (Button, Card, Container, etc.)
│   ├── section/         # Page sections
│   │   ├── hero/        # Hero section with product showcase
│   │   ├── ingredients/ # Ingredients overview
│   │   ├── reviews/     # Customer reviews & ratings
│   │   ├── drainage-system/ # Lymphatic system explanation
│   │   ├── connection/  # Benefits & connections
│   │   ├── missing-piece/ # Product benefits highlight
│   │   ├── commitment/  # Brand commitment section
│   │   ├── advice/      # Expert advice section
│   │   ├── stories/     # Customer stories
│   │   ├── questions/   # FAQ section
│   │   ├── mission/     # Mission statement
│   │   ├── action/      # Call-to-action section
│   │   └── ...          # Additional sections
│   └── ui/              # Shadcn/ui components (Accordion, Dialog, etc.)
├── hooks/               # Custom React hooks
├── icons/               # Custom SVG icons
├── types/               # TypeScript type definitions
├── lib/                 # Utility functions
└── mock/                # Mock data
```

## Key Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Product Showcase** - Interactive carousel for product images
- **Reviews System** - Customer testimonials and star ratings
- **FAQ Section** - Common questions about the product
- **Ingredient Breakdown** - Detailed information on active components
- **Accessibility** - Built with accessible UI components

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm preview
```

### Linting

```bash
npm run lint
```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Customization

### Fonts

The project uses custom Google Fonts:

- **Inter Variable** - Primary font
- **Montserrat** - Secondary font
- **Lora** - Serif alternative
- **Nunito** - Additional option

### Styling

Tailwind CSS is configured with Vite integration. Modify `tailwind.config.js` to customize colors, spacing, and other design tokens.

### Path Alias

TypeScript paths are aliased for cleaner imports:

- `@/*` → `./src/*`

## License

Private project.
