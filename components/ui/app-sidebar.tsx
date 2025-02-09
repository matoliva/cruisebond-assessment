"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { CompanyLogo } from "@/components/cruisebound/company-logo";
import { useCruiseFilters } from "@/hooks/use-filters";
import { ComboboxFilter } from "@/components/cruisebound/combobox-filter";

export function AppSidebar() {
  const {
    currentFilters,
    cruiseLines,
    ports,
    setPortFilter,
    setCruiseLineFilter,
  } = useCruiseFilters();
  return (
    <Sidebar className="w-64 border-r">
      <SidebarHeader className="p-4 border-b">
        <p className="text-sm text-muted-foreground text-center">
          <kbd className="px-2 py-1 text-xs rounded bg-muted">⌘</kbd> +{" "}
          <kbd className="px-2 py-1 text-xs rounded bg-muted">B</kbd> to
          show/hide sidebar
        </p>
      </SidebarHeader>

      <SidebarContent className="p-6">
        <SidebarGroup className="space-y-6">
          {/* Departure Port Filter */}
          <div>
            <h2 className="mb-2 text-lg font-medium">Departure port</h2>
            <ComboboxFilter
              options={ports}
              currentValue={currentFilters.port}
              onSelect={setPortFilter}
              placeholder="Any port"
              searchPlaceholder="Search ports..."
              emptyMessage="No port found."
            />
          </div>
        </SidebarGroup>

        <SidebarGroup className="mt-6 space-y-6">
          {/* Cruiseline Filter */}
          <div>
            <h2 className="mb-2 text-lg font-medium">Cruiseline</h2>
            <ComboboxFilter
              options={cruiseLines}
              currentValue={currentFilters.cruiseLine}
              onSelect={setCruiseLineFilter}
              placeholder="Any ship"
              searchPlaceholder="Search cruise lines..."
              emptyMessage="No cruise line found."
            />
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <div
            className="flex flex-row items-center w-[43px] md:w-[48px]"
            data-cy="cruisebound-logo-svg"
          >
            <CompanyLogo />
          </div>
          <h3
            className="headline-9 m-0 p-0 text-cruisebound-black-default font-bold text-2xl md:text-3.5xl"
            data-cy="cruiseboundLogoText"
          >
            Cruisebound
          </h3>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
