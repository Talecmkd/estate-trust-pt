# EstateTrust - Real Estate Verification Platform

A modern, trust-focused real estate verification platform built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Trust-First Design**: Professional, calm UX optimized for YMYL (Your Money Your Life) content
- **SEO Optimized**: Built with Google Search 2025 and AI Overviews in mind
- **Accessibility**: WCAG 2.2 AA compliant
- **Performance**: Optimized for Core Web Vitals
- **Responsive**: Mobile-first design that works on all devices
- **Modern Stack**: Next.js 15 App Router, TypeScript, Tailwind CSS

## Project Structure

```
estate-trust-pt/
├── app/
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main entry point with state management
├── components/
│   ├── Navigation.tsx       # Sticky navigation header
│   ├── Hero.tsx            # Hero section with search and marquee
│   ├── Benefits.tsx        # Benefits section
│   ├── HowWeVerify.tsx     # Verification process section
│   ├── ListedPros.tsx      # Professional types section
│   ├── Pricing.tsx         # Pricing plans with selection
│   ├── VerificationForm.tsx # Multi-step verification form
│   └── Footer.tsx          # Footer with links and contact
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd estate-trust-pt
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Navigation
Sticky header with smooth scrolling navigation and call-to-action buttons.

### Hero Section
Eye-catching hero with search interface, trust badges, and animated marquee of verified partners.

### Benefits
Grid layout showcasing the key benefits of verification.

### How We Verify
Step-by-step visualization of the verification process.

### Listed Professionals
Statistics and categories of verified professionals.

### Pricing
Three-tier pricing structure with plan selection that navigates to the verification form.

### Verification Form
Comprehensive form with order summary sidebar and success state.

### Footer
Full-featured footer with navigation, resources, contact information, and social links.

## Design Features

- **Brand Colors**: Green (#009966) for trust, Navy (#1c1c3c) for professionalism
- **Typography**: Inter font family for clean, professional look
- **Animations**: Subtle fade-ins, hover effects, and marquee scroll
- **Patterns**: Hero pattern background for visual interest
- **Shadows**: Layered shadows for depth and hierarchy

## Customization

### Colors
Edit brand colors in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  brand: {
    light: '#00b67a',
    DEFAULT: '#009966',
    dark: '#006644',
    navy: '#1c1c3c'
  }
}
```

### Content
All content is embedded in components for easy editing. Update text, pricing, and features directly in the component files.

## SEO & Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for images (when added)
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Optimized metadata in layout.tsx

## Performance Optimizations

- Next.js 15 App Router for optimal performance
- Image optimization with next/image (ready to use)
- Font optimization with next/font
- Code splitting and lazy loading
- Minimal JavaScript for fast initial load

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Support

For questions or support, contact: support@estatetrust.com
