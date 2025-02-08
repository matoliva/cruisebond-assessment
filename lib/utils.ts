import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date range into a more readable format
 * Input: departureDate: "2022-11-23", returnDate: "2022-11-30"
 * Output: "Nov 23-30, 2022"
 */
export const formatDateRange = (departureDate: string, returnDate: string) => {
  const start = new Date(departureDate);
  const end = new Date(returnDate);

  return `${start.toLocaleString("en-US", {
    month: "short",
  })} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`;
};
