"use client";

import { useCallback, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export const useSortedCruises = (cruises: Cruise[] | undefined) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "price-asc";
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;
  const totalPages = Math.ceil((cruises?.length ?? 0) / itemsPerPage);

  const handleSort = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set("sort", value);
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  const sortedAndPaginatedCruises = useMemo(() => {
    if (!cruises) return [];

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

    return sorted.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [cruises, currentSort, currentPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  const handleReset = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("sort");
    params.delete("page");
    params.delete("port");
    router.push(`?${params.toString()}`);
  }, [searchParams, router]);

  return {
    sortedCruises: sortedAndPaginatedCruises,
    currentPage,
    totalPages,
    currentSort,
    handleSort,
    handlePageChange,
    handleReset,
  };
};
