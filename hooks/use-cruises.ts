import { useFetch } from "./use-fetch"

export function useCruises() {
    const { data, isLoading, isError, error } = useFetch<ApiResponse>('/api/cruises')
  
    return {
      cruises: data?.results ?? [],
      isLoading,
      isError,
      error,
    }
  }
  