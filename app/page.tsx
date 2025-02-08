"use client";

import { useCallback, useMemo } from "react";

import { useSearchParams, useRouter } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/ui/app-sidebar";

import { useCruises } from "@/hooks/use-cruises";
import { CruiseList } from "@/components/cruisebound/cruise-list";
import { CruiseHeader } from "@/components/cruisebound/cruise-header";

export default function Home() {
  const { cruises, isLoading, isError } = useCruises();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;
  const totalPages = Math.ceil((cruises?.length ?? 0) / itemsPerPage);

  // Memoize paginated cruises to prevent unnecessary recalculations
  const paginatedCruises = useMemo(() => {
    return cruises?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [cruises, currentPage, itemsPerPage]);

  // Memoize page change handler to prevent unnecessary recreations
  const handlePageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <main className="min-h-screen w-full p-4">
        <CruiseHeader />
        <CruiseList
          cruises={paginatedCruises}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </SidebarProvider>
  );
}
