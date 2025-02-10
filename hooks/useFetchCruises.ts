import { ApiResponse } from "@/types/sailings"
import { useFetch } from "./useFetch"

export const useFetchCruises = () => {
    const { data, isLoading, isError, error } = useFetch<ApiResponse>('/api/cruises')
  
    return {
      cruises: data?.results ?? [],
      isLoading,
      isError,
      error,
    }
  }
  