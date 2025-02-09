"use client";

import { CruiseList } from "@/components/cruisebound/cruise-list";
import { ResultsSubheader } from "@/components/cruisebound/results-subheader";
import { useCruiseFilters } from "@/hooks/use-filters";
import { CruiseListSkeleton } from "./cruise-card-skeleton";
import { FetchError } from "./fetch-error";
import { NoSailings } from "./no-sailings";

export const CruiseContent = () => {
  const {
    cruises,
    totalPages,
    currentFilters,
    isLoading,
    isError: fetchError,
    totalCount,
    setSort,
    setPage,
    resetFilters,
  } = useCruiseFilters();

  if (isLoading) {
    return <CruiseListSkeleton />;
  }

  if (fetchError) {
    return <FetchError />;
  }

  if (!cruises?.length) {
    return <NoSailings resetFilters={resetFilters} />;
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6 min-h-screen w-full p-4">
      <ResultsSubheader
        totalResults={totalCount}
        onReset={resetFilters}
        onSort={setSort}
      />
      <CruiseList
        cruises={cruises}
        currentPage={currentFilters.page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};
