"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { extractDeparturePorts } from "@/utils/filters";
import { useCruises } from "./use-cruises";
import { PortOption } from "@/types/port";

interface UseCruiseFiltersReturn {
  cruises: Cruise[];
  ports: PortOption[];
  isLoading: boolean;
  isError: boolean;
  totalPages: number;
  currentFilters: {
    port: string | null;
    sort: string;
    page: number;
  };
  setPortFilter: (port: string) => void;
  setSort: (sort: string) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;
}

export const useCruiseFilters = (): UseCruiseFiltersReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPort = searchParams.get("port") || null;
  const currentSort = searchParams.get("sort") || "price-asc";
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;

  const { cruises, isLoading, isError } = useCruises();

  // Apply filtering
  const filteredCruises = useMemo(() => {
    if (!cruises) return [];

    return cruises.filter((cruise) => {
      if (currentPort && cruise.itinerary?.[0]) {
        const city = cruise.itinerary[0].split(",")[0].trim().toLowerCase();
        return city === currentPort;
      }
      return true;
    });
  }, [cruises, currentPort]);

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

  const totalPages = Math.ceil(filteredCruises.length / itemsPerPage);

  // Update filters in URL
  const setFilterParam = useCallback(
    (key: string, value: string | number | null) => {
      const params = new URLSearchParams(searchParams);
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value.toString());
      }
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  const setPortFilter = (port: string) => setFilterParam("port", port);
  const setSort = (sort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);
    params.delete("page"); // Reset pagination when sorting changes
    router.push(`?${params.toString()}`);
  };

  const setPage = (page: number) => setFilterParam("page", page);
  const resetFilters = () => router.push("?");

  return {
    cruises: sortedAndPaginatedCruises,
    ports: extractDeparturePorts(cruises),
    isLoading,
    isError,
    totalPages,
    currentFilters: { port: currentPort, sort: currentSort, page: currentPage },
    setPortFilter,
    setSort,
    setPage,
    resetFilters,
  };
};
