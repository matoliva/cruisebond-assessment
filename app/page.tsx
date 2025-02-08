"use client";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarCustomTrigger } from "@/components/ui/sidebar-trigger";


export default function Home() {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <main className="min-h-screen">
        <SidebarCustomTrigger />
        
      </main>
    </SidebarProvider>
  );
}
