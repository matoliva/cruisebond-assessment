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
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Option } from "@/types/options";
import { useSidebar } from "../ui/sidebar";

interface ComboboxFilterProps {
  options: Option[];
  currentValue: string | null;
  onSelect: (value: string) => void;
  placeholder: string;
  searchPlaceholder: string;
  emptyMessage: string;
}

/**
* ComboboxFilter Component
* 
* A reusable, accessible combobox component built with shadcn/ui that provides:
* - Searchable dropdown functionality
* - Mobile-responsive design
* - Keyboard navigation
* - Customizable placeholders and messages
* 
* Features:
* - Integration with URL-based filtering
* - Text truncation for long options
* - Automatic sidebar toggle on mobile
* - Checkmark indicators for selected options
* - Scrollable content with height limits
* - Modal behavior for better mobile UX
*/ 

export const ComboboxFilter = ({
  options,
  currentValue: currentFilter,
  onSelect,
  placeholder,
  searchPlaceholder,
  emptyMessage,
}: ComboboxFilterProps) => {
  const [open, setOpen] = useState(false);
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <Popover modal={true} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <span className="truncate">
            {currentFilter
              ? options.find((option) => option.value === currentFilter)?.label
              : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-full p-0"
        style={{ maxHeight: "calc(100vh - 300px)", overflowY: "auto" }}
      >
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <ScrollArea>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onSelect(
                      currentValue === currentFilter ? "" : currentValue
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
                      currentFilter === option.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
