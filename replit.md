# BrokerFlow AI Landing Page

## Overview

BrokerFlow AI is a React-based landing page application designed to convert visitors into users for an AI-powered real estate content generation service. The application is built using modern web technologies including React, TypeScript, TailwindCSS, and shadcn/ui components. The primary goal is to showcase the product's value proposition and drive user signups through a compelling, conversion-optimized interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with shadcn/ui component library for consistent, modern UI design
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for type-safe server development
- **Database ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Session Management**: Built-in memory storage for user sessions with PostgreSQL session store support
- **API Structure**: RESTful API endpoints with structured error handling and logging middleware

### Design System
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Theme System**: CSS custom properties with dark mode support
- **Typography**: Inter font family for modern, readable text
- **Color Scheme**: Orange to purple gradient theme (#ff6a00 → #8e2de2) optimized for conversion
- **Responsive Design**: Mobile-first approach with TailwindCSS breakpoints

### Content Strategy
The landing page implements a conversion-focused structure:
- Fixed header with clear navigation and prominent CTA
- Hero section with gradient background and compelling value proposition
- Benefits showcase with three-column layout
- Step-by-step "How it Works" process explanation
- Detailed pricing table with four subscription options
- Social proof section for testimonials
- Footer with legal and informational links

### Performance Optimizations
- **Code Splitting**: Vite-based bundle optimization
- **Font Loading**: Preconnected Google Fonts with display swap
- **Image Optimization**: Responsive images with proper aspect ratios
- **Animation**: CSS-based transitions and scroll-triggered animations
- **SEO**: Meta tags, Open Graph, and Twitter Card optimization

### Development Experience
- **Hot Reload**: Vite development server with instant updates
- **TypeScript**: Full type coverage across client and server code
- **Path Aliases**: Simplified imports using @ prefixes for components and utilities
- **Linting**: Built-in TypeScript checking and modern JavaScript standards

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database for production scalability
- **Drizzle Kit**: Database schema management and migrations

### UI and Styling
- **Radix UI**: Accessible, unstyled component primitives
- **TailwindCSS**: Utility-first CSS framework
- **Lucide Icons**: Modern icon library for consistent visual elements
- **Font Awesome**: Additional icon support for enhanced UI elements

### Development Tools
- **Vite**: Modern build tool with plugin ecosystem
- **PostCSS**: CSS processing with autoprefixer
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution for development server

### External Integrations
- **Target Application**: All CTAs redirect to `https://app.neurobroker-ai.cloud/` for user conversion
- **Google Fonts**: Inter font family for consistent typography
- **Replit Integration**: Development environment integration with banner and cartographer plugins