"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectSortByProps {
  onSort: (value: string) => void;
}

export const SelectSortBy = ({ onSort }: SelectSortByProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:inline gap-1 text-sm text-muted-foreground">
        <span className=" text-sm font-medium">Sort by</span>
      </div>
      <div>
        <Select onValueChange={onSort} defaultValue="price-asc">
          <SelectTrigger className="">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price (Lowest first)</SelectItem>
            <SelectItem value="price-desc">Price (Highest first)</SelectItem>
            <SelectItem value="date-asc">Departure (Earliest)</SelectItem>
            <SelectItem value="date-desc">Departure (Latest)</SelectItem>
            <SelectItem value="duration-asc">Duration (Shortest)</SelectItem>
            <SelectItem value="duration-desc">Duration (Longest)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
