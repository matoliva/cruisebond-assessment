"use client";

import { CruiseList } from "@/components/cruisebound/cruise-list";
import { CruiseHeader } from "@/components/cruisebound/cruise-header";
import { ResultsSubheader } from "@/components/cruisebound/results-subheader";
import { useCruiseFilters } from "@/hooks/use-filters";

export const CruiseContent = () => {
  const {
    cruises,
    totalPages,
    currentFilters,
    isLoading,
    isError: fetchError,
    setSort,
    setPage,
    resetFilters,
  } = useCruiseFilters();

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
        onReset={resetFilters}
        onSort={setSort}
      />
      <CruiseList
        cruises={cruises}
        currentPage={currentFilters.page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </main>
  );
};
