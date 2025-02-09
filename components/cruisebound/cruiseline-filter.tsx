"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useSidebar } from "../ui/sidebar";
import { useCruiseFilters } from "@/hooks/use-filters";
import { Option } from "@/types/options";

export const CruiseLineFilter = () => {
  const { currentFilters, cruiseLines, setCruiseLineFilter } =
    useCruiseFilters();
  const [open, setOpen] = useState(false);
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {currentFilters.cruiseLine
            ? cruiseLines.find(
                (line: Option) => line.value === currentFilters.cruiseLine
              )?.label
            : "Any ship"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 max-h-[300px] overflow-y-auto">
        <Command>
          <CommandInput placeholder="Search cruise lines..." />
          <CommandEmpty>No cruise line found.</CommandEmpty>
          <CommandGroup>
            {cruiseLines.map((line) => (
              <CommandItem
                key={line.value}
                value={line.value}
                onSelect={(currentValue) => {
                  console.log(line.value);
                  console.log(currentValue);
                  setCruiseLineFilter(
                    currentValue === currentFilters.cruiseLine
                      ? ""
                      : currentValue
                  );
                  setOpen(false);
                  if (isMobile) {
                    toggleSidebar();
                  }
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentFilters.cruiseLine === line.value
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {line.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
