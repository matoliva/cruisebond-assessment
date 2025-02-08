import { Button } from "@/components/ui/button";
import { SelectSortBy } from "./select-sort-by";

interface ResultsSubheaderProps {
  totalResults: number;
  onReset: () => void;
  onSort: (value: string) => void;
}

export const ResultsSubheader = ({
  totalResults,
  onReset,
  onSort,
}: ResultsSubheaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 md:gap-4">
        <span className="text-sm font-bold text-center">
          {totalResults} trips found
        </span>
        <Button variant="outline" onClick={onReset}>
          Reset filters
        </Button>
      </div>

      <SelectSortBy onSort={onSort} />
    </div>
  );
};
