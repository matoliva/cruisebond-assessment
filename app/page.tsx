"use client";

import { Suspense } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/ui/app-sidebar";

import { CruiseContent } from "@/components/cruisebound/cruise-content";

export default function Home() {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <CruiseContent />
      </Suspense>
    </SidebarProvider>
  );
}
