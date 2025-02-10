"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { extractDeparturePorts, extractCruiseLines } from "@/utils/filters";
import { useFetchCruises } from "./useFetchCruises";
import { Option } from "@/types/options";
import { Cruise } from "@/types/sailings";

interface UseCruiseFiltersReturn {
  cruises: any[];
  ports: Option[];
  cruiseLines: Option[];
  isLoading: boolean;
  isError: boolean;
  totalPages: number;
  totalCount: number;
  currentFilters: {
    port: string | null;
    cruiseLine: string | null;
    sort: string;
    page: number;
  };
  setPortFilter: (port: string) => void;
  setCruiseLineFilter: (line: string) => void;
  setSort: (sort: string) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;
}

/**
 * Custom hook for managing cruise search filters and pagination through URL state.
 *
 * This hook provides a centralized way to:
 * - Manage filter state (ports, cruise lines) in URL parameters
 * - Handle sorting and pagination
 * - Calculate filtered and total results
 * - Keep UI state in sync with URL
 *
 * Benefits of URL-based state:
 * - Shareable filtered/sorted results
 * - Browser history support
 * - Bookmarkable searches
 * - SEO-friendly URLs
 *
 * @returns {UseCruiseFiltersReturn} Object containing:
 * - Filtered and paginated cruises
 * - Available filter options
 * - Current filter states
 * - Methods to update filters
 * - Loading and error states
 */

export const useCruiseFilters = (): UseCruiseFiltersReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPort = searchParams.get("port") || null;
  const currentCruiseLine = searchParams.get("cruiseline") || null;
  const currentSort = searchParams.get("sort") || "price-asc";
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;

  const { cruises, isLoading, isError } = useFetchCruises();

  // Get all cruises length (total count)
  const totalCruises = cruises?.length ?? 0;

  // Apply filtering
  const filteredCruises = useMemo(() => {
    if (!cruises) return [];

    return cruises.filter((cruise: Cruise) => {
      if (currentPort && cruise.itinerary?.[0]) {
        const city = cruise.itinerary[0].split(",")[0].trim().toLowerCase();
        if (city !== currentPort) return false;
      }

      if (currentCruiseLine && cruise.ship?.line?.name) {
        const line = cruise.ship.line.name.toLowerCase();
        if (line !== currentCruiseLine) return false;
      }

      return true;
    });
  }, [cruises, currentPort, currentCruiseLine]);

  // Get filtered count before pagination
  const filteredCount = filteredCruises.length;

  // Apply sorting & pagination
  const sortedAndPaginatedCruises = useMemo(() => {
    if (!filteredCruises) return [];

    const sorted = [...filteredCruises].sort((a, b) => {
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

    return sorted.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredCruises, currentSort, currentPage]);

  const totalPages = Math.ceil(filteredCount / itemsPerPage);

  // Update filters in URL
  const setFilterParam = useCallback(
    (key: string, value: string | number | null) => {
      const params = new URLSearchParams(searchParams);
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value.toString());
      }
      params.delete("page"); // Reset pagination when filters change
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  const setPortFilter = useCallback(
    (port: string) => setFilterParam("port", port || null),
    [setFilterParam]
  );

  const setCruiseLineFilter = useCallback(
    (line: string) => setFilterParam("cruiseline", line || null),
    [setFilterParam]
  );

  const setSort = useCallback(
    (sort: string) => setFilterParam("sort", sort),
    [setFilterParam]
  );

  const setPage = useCallback(
    (page: number) => setFilterParam("page", page),
    [setFilterParam]
  );

  const resetFilters = useCallback(() => router.push("?"), [router]);

  // Use filteredCount when filters are active, otherwise use total
  const displayCount =
    currentPort || currentCruiseLine ? filteredCount : totalCruises;

  return {
    cruises: sortedAndPaginatedCruises,
    ports: extractDeparturePorts(cruises),
    cruiseLines: extractCruiseLines(cruises),
    isLoading,
    isError,
    totalPages,
    totalCount: displayCount,
    currentFilters: {
      port: currentPort,
      cruiseLine: currentCruiseLine,
      sort: currentSort,
      page: currentPage,
    },
    setPortFilter,
    setCruiseLineFilter,
    setSort,
    setPage,
    resetFilters,
  };
};
