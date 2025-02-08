"use client";

import { useCallback, useMemo } from "react";

import { useSearchParams, useRouter } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/ui/app-sidebar";

import { useCruises } from "@/hooks/use-cruises";
import { CruiseList } from "@/components/cruisebound/cruise-list";
import { CruiseHeader } from "@/components/cruisebound/cruise-header";
import { ResultsSubheader } from "@/components/cruisebound/results-subheader";

export default function Home() {
  const { cruises, isLoading, isError } = useCruises();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "price-asc";

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;
  const totalPages = Math.ceil((cruises?.length ?? 0) / itemsPerPage);

  // Sort handler
  const handleSort = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set("sort", value);
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  // Memoized sorted and paginated cruises
  const sortedAndPaginatedCruises = useMemo(() => {
    if (!cruises) return [];

    // Sort cruises
    const sorted = [...cruises].sort((a, b) => {
      switch (currentSort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "date-asc":
          return (
            new Date(a.departureDate).getTime() -
            new Date(b.departureDate).getTime()
          );
        case "date-desc":
          return (
            new Date(b.departureDate).getTime() -
            new Date(a.departureDate).getTime()
          );
        case "duration-asc":
          return a.duration - b.duration;
        case "duration-desc":
          return b.duration - a.duration;
        default:
          return 0;
      }
    });

    // Then paginate
    const itemsPerPage = 10;
    return sorted.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [cruises, currentSort, currentPage]);

  // Memoize paginated cruises to prevent unnecessary recalculations
  // const paginatedCruises = useMemo(() => {
  //   return cruises?.slice(
  //     (currentPage - 1) * itemsPerPage,
  //     currentPage * itemsPerPage
  //   );
  // }, [cruises, currentPage, itemsPerPage]);

  // Memoize page change handler to prevent unnecessary recreations
  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  const handleReset = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    params.delete("sort")
    params.delete("page")
    router.push(`?${params.toString()}`)
  }, [searchParams, router])

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <main className="flex flex-col gap-4 md:gap-6 min-h-screen w-full p-4">
        <CruiseHeader />
        <ResultsSubheader
          totalResults={cruises?.length ?? 0}
          onReset={handleReset}
          onSort={handleSort}
        />
        <CruiseList
          cruises={sortedAndPaginatedCruises}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </SidebarProvider>
  );
}
