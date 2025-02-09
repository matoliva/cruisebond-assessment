"use client";

import { Suspense } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/ui/app-sidebar";

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
