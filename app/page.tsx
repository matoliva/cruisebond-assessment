"use client";

import { Suspense } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/ui/app-sidebar";

import { CruiseContent } from "@/components/cruisebound/cruise-content";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SidebarProvider defaultOpen>
        <AppSidebar />
        <CruiseContent />
      </SidebarProvider>
    </Suspense>
  );
}
