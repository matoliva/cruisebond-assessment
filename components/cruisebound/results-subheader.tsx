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
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <span className="font-medium">{totalResults} trips found</span>
        <Button
          variant="ghost"
          onClick={onReset}
          className="text-blue-600 h-auto p-0 hover:bg-transparent"
        >
          Reset filters
        </Button>
      </div>

      <SelectSortBy onSort={onSort} />
    </div>
  );
};
