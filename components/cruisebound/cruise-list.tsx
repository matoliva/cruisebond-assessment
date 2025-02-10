import { SailingCard } from "./sailing-card";
import { CruisePagination } from "./cruise-pagination";
import { Cruise } from "@/types/sailings";

interface CruiseListProps {
  cruises: Cruise[];
  onPageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
}
export const CruiseList = ({
  cruises,
  onPageChange,
  currentPage,
  totalPages,
}: CruiseListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {cruises.map((cruise, index) => (
        <SailingCard key={index} cruise={cruise} />
      ))}
      <div className="p-4">
        <CruisePagination
          onPageChange={onPageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};
