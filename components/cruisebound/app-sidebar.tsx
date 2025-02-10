"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { CompanyLogo } from "@/components/cruisebound/company-logo";
import { useCruiseFilters } from "@/hooks/useCruiseFilters";
import { ComboboxFilter } from "@/components/cruisebound/combobox-filter";
import { format } from "date-fns";
import { DatePicker } from "@/components/cruisebound/date-picker";

/**
 * AppSidebar Component
 *
 * A responsive sidebar component that manages cruise search filters:
 * - Uses shadcn/ui components for consistent UI
 * - Integrates with useCruiseFilters hook for state management
 * - Provides port, cruiseline and daparture day filtering capabilities
 * - Includes keyboard shortcut (⌘+B) for toggle
 * - Responsive design with mobile considerations
 *
 * Key Features:
 * - Reusable ComboboxFilter for both filters
 * - URL-based state management
 * - Accessible keyboard shortcuts
 */

export function AppSidebar() {
  const {
    currentFilters,
    cruiseLines,
    ports,
    setPortFilter,
    setCruiseLineFilter,
    setDepartureDayFilter,
  } = useCruiseFilters();

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDepartureDayFilter(format(selectedDate, "yyyy-MM-dd"));
    } else {
      setDepartureDayFilter("");
    }
  };
  return (
    <Sidebar className="w-64 border-r">
      <SidebarHeader className="p-4 border-b">
        <p className="text-sm text-muted-foreground text-center">
          <kbd className="px-2 py-1 text-xs rounded bg-muted">⌘</kbd> +{" "}
          <kbd className="px-2 py-1 text-xs rounded bg-muted">B</kbd> to
          show/hide sidebar
        </p>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup className="space-y-6">
          {/* Departure date Filter */}
          <div>
            <h2 className="mb-2 text-lg font-medium">Departure date</h2>
            <DatePicker
              date={
                currentFilters.departureDay
                  ? new Date(currentFilters.departureDay)
                  : null
              }
              handleDateChange={handleDateChange}
            />
          </div>
        </SidebarGroup>
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

        <SidebarGroup className="space-y-6">
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
