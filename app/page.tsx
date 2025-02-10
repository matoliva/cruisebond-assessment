/**
* Home page component that displays the cruise search interface.
* 
* Suspense is used here to handle asynchronous operations:
* - Wraps the entire content because useSearchParams() hook is used in child components
* - Required by Next.js when using client-side hooks that read URL state
* - Provides a consistent loading experience with CruiseListSkeleton as fallback
* - Prevents hydration errors from URL-based state management
* 
* Component Structure:
* - SidebarProvider: Manages sidebar state
* - AppSidebar: Filters and navigation
* - CruiseContent: Main content area with search results
*/

"use client";

import { Suspense } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/cruisebound/app-sidebar";

import { CruiseContent } from "@/components/cruisebound/cruise-content";
import { CruiseListSkeleton } from "@/components/cruisebound/cruise-card-skeleton";
import { CruiseHeader } from "@/components/cruisebound/cruise-header";

export default function Home() {
  return (
    <Suspense fallback={<CruiseListSkeleton />}>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <div className="flex flex-col gap-4 md:gap-6 min-h-screen w-full p-4">
          <CruiseHeader />
          <CruiseContent />
        </div>
      </SidebarProvider>
    </Suspense>
  );
}
