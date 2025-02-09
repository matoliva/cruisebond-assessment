"use client";

import { CruiseList } from "@/components/cruisebound/cruise-list";
import { CruiseHeader } from "@/components/cruisebound/cruise-header";
import { ResultsSubheader } from "@/components/cruisebound/results-subheader";
import { useFilteredCruises } from "@/hooks/use-filtered-cruises";
import { useSortedCruises } from "@/hooks/use-sorted-cruises";

export const CruiseContent = () => {
  const { cruises, isLoading, isError: fetchError } = useFilteredCruises();
  const {
    sortedCruises,
    currentPage,
    totalPages,
    handleSort,
    handlePageChange,
    handleReset,
  } = useSortedCruises(cruises);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (fetchError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Failed to load cruises</h2>
          <p className="text-muted-foreground">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-4 md:gap-6 min-h-screen w-full p-4">
      <CruiseHeader />
      <ResultsSubheader
        totalResults={cruises?.length ?? 0}
        onReset={handleReset}
        onSort={handleSort}
      />
      <CruiseList
        cruises={sortedCruises}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
};
