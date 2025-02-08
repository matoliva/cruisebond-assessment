"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarCustomTrigger } from "@/components/ui/sidebar-trigger";

import { AppSidebar } from "@/components/ui/app-sidebar";

import { useCruises } from "@/hooks/use-cruises";
import { CruiseList } from "@/components/cruisebound/cruise-list";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { CompanyLogo } from "@/components/cruisebound/company-logo";

export default function Home() {
  const { cruises, isLoading, isError } = useCruises();
  const router = useRouter();
  const searchParams = useSearchParams();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 10;
  const totalPages = Math.ceil((cruises?.length ?? 0) / itemsPerPage);

  const paginatedCruises = cruises?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <main className="min-h-screen w-full p-4">
        <div className="flex justify-between items-center mb-4 py-4">
          <SidebarCustomTrigger />
          <div>
            <CompanyLogo />
            <h3
              className="headline-9 m-0 p-0 text-cruisebound-black-default font-bold text-2xl md:text-3.5xl"
              data-cy="cruiseboundLogoText"
            >
              Cruisebound
            </h3>
          </div>

          <ModeToggle />
        </div>
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
