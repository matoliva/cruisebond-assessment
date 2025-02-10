# Cruisebound Frontend Challenge

A modern React application that displays and manages cruise search results, built with Next.js 15.1.6.

**Live Demo:** [cruisebound-assessment-phi.vercel.app](https://cruisebound-assessment-phi.vercel.app)

## Project Overview

This application allows users to:
- Browse cruise offerings
- Filter by Cruise Line and Departure Port
- Sort by Price, Departure Date, and Duration
- Navigate through paginated results
- Toggle dark/light mode

## Tech Stack

- Next.js 15.1.6
- TypeScript
- Tailwind CSS v4
- SWR for data fetching
- shadcn/ui components
- Prettier for code formatting

## Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── ui/                # shadcn/ui components
│   └── cruisebound/       # Domain components
├── hooks/                 # Custom hooks
├── lib/                   # Utilities
└── types/                # TypeScript types
```

## Key Features

- URL-based state management for shareable filters
- Client-side filtering and sorting
- Responsive design with mobile sidebar
- Loading states with skeletons
- Error boundaries
- Dark mode support

## Getting Started

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create a .env.local file with:
API_BASE_URL=ENDPOINT
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## API Integration

The application integrates with the Cruisebound API:
- Endpoint: `${API_BASE_URL}/ENDPOINT`
- Method: GET
- No parameters required

## State Management

- URL parameters for filters and sorting
- SWR for data fetching and caching
- Client-side filtering and pagination
- Dark mode persistence

## Component Architecture

- `AppSidebar`: Manages filters and navigation
- `CruiseContent`: Handles main content display
- `ComboboxFilter`: Reusable filter component
- Generic components from shadcn/ui

## Development Notes

- Uses SWR for efficient data fetching and caching
- Implements responsive design patterns
- Follows accessibility best practices
- Includes loading and error states

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.