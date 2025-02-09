"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { extractDeparturePorts } from "@/utils/filters";
import { useCruises } from "./use-cruises";
import { Option } from "@/types/options";

interface UseFilteredCruisesReturn {
  cruises: Cruise[] | undefined;
  ports: Option[];
  isLoading: boolean;
  isError: boolean;
  currentFilters: {
    port: string | null;
  };
  setPortFilter: (port: string) => void;
  resetFilters: () => void;
}

export const useFilteredCruises = (): UseFilteredCruisesReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPort = searchParams.get("port");

  const { cruises, isLoading, isError } = useCruises();

  // Filter data based on current filters
  const filteredCruises = cruises?.filter((cruise) => {
    if (currentPort && cruise.itinerary?.[0]) {
      const city = cruise.itinerary[0].split(",")[0].trim().toLowerCase();
      return city === currentPort;
    }
    return true;
  });

  // Extract ports for the combobox
  const ports = extractDeparturePorts(cruises);

  // Update port filter
  const setPortFilter = (port: string) => {
    const params = new URLSearchParams(searchParams);
    if (port) {
      params.set("port", port);
      // Reset pagination when filter changes
      params.delete("page");
    } else {
      params.delete("port");
    }
    router.push(`?${params.toString()}`);
  };

  const resetFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("port");
    params.delete("page");
    router.push(`?${params.toString()}`);
  };

  return {
    cruises: filteredCruises,
    ports,
    isLoading,
    isError,
    currentFilters: {
      port: currentPort,
    },
    setPortFilter,
    resetFilters,
  };
};
