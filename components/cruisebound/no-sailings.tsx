import { Button } from "../ui/button";
import { MessageContainer } from "./message-container";

interface NoSailingsProps {
  resetFilters: () => void;
}

export const NoSailings = ({ resetFilters }: NoSailingsProps) => {
  return (
    <MessageContainer>
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">No cruises found</h2>
        <p className="text-muted-foreground mb-4">
          Try adjusting your filters or check back later
        </p>
        <Button onClick={resetFilters} className="mt-8">
          Reset Filters
        </Button>
      </div>
    </MessageContainer>
  );
};
