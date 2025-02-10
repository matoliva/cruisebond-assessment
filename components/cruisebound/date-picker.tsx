"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSidebar } from "../ui/sidebar";

interface DatePickerProps {
  date: Date | null;
  handleDateChange: (selectedDate: Date | undefined) => void;
}

export function DatePicker({ date, handleDateChange }: DatePickerProps) {
  const { toggleSidebar, isMobile } = useSidebar();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : "Select a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date || undefined}
          onSelect={(e) => {
            handleDateChange(e);
            if (isMobile) {
              toggleSidebar();
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
