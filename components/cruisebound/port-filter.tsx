"use client";

import { useState } from "react";
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

import { useFilteredCruises } from "@/hooks/use-filtered-cruises";
import { PortOption } from "@/types/port";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export const PortFilter = () => {
  const { ports, currentFilters, setPortFilter } = useFilteredCruises();
  const [open, setOpen] = useState(false);

  return (
    <Popover modal={true} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {currentFilters.port
            ? ports.find(
                (port: PortOption) => port.value === currentFilters.port
              )?.label
            : "Any port"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full p-0"
        style={{ maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}
      >
        <Command>
          <CommandInput placeholder="Search ports..." />
          <ScrollArea>
            <CommandEmpty>No port found.</CommandEmpty>
            <CommandGroup>
              {ports.map((port) => (
                <CommandItem
                  key={port.value}
                  value={port.value}
                  onSelect={(currentValue) => {
                    setPortFilter(
                      currentValue === currentFilters.port ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      currentFilters.port === port.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {port.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
