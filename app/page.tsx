"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarCustomTrigger } from "@/components/ui/sidebar-trigger";

import {SailingCard} from "@/components/cruisebound/sailing-card/sailing-card";
import { AppSidebar } from "@/components/ui/app-sidebar";

import { useCruises } from "@/hooks/use-cruises";


export default function Home() {
  const { cruises, isLoading, isError } = useCruises();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <main className="min-h-screen w-full p-4">
        <SidebarCustomTrigger />
        <SailingCard cruise={cruises[0]} />
      </main>
    </SidebarProvider>
  );
}
