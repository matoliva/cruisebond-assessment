/**
 * Extracts unique departure ports from cruises data
 * Returns formatted array for combobox options with just the city name
 */
export const extractDeparturePorts = (cruises: Cruise[] | undefined) => {
  if (!cruises?.length) return [];

  const uniquePorts = Array.from(
    new Set(
      cruises
        .map((cruise) => {
          const port = cruise.itinerary?.[0];
          // Get city name before the comma
          const city = port?.split(",")[0].trim();
          return city;
        })
        .filter(Boolean)
    )
  ).sort();

  return uniquePorts.map((city) => ({
    value: city.toLowerCase(),
    label: city,
  }));
};
