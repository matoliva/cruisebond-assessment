"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Menu } from "lucide-react";

export function SidebarCustomTrigger() {
  const { state, toggleSidebar, isMobile } = useSidebar();
  const isExpanded = state === "expanded";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      aria-label={`${isExpanded ? "Collapse" : "Expand"} sidebar`}
    >
      {isMobile ? (
        <Menu className="h-4 w-4 transition-transform duration-200" />
      ) : (
        <ChevronLeft
          className="h-4 w-4 transition-transform duration-200 data-[state=closed]:rotate-180"
          data-state={isExpanded ? "open" : "closed"}
        />
      )}
    </Button>
  );
}
