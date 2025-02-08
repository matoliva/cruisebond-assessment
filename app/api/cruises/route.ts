import { NextResponse } from "next/server";

/**
 * Using Next.js API route as proxy to handle CORS:
 * Browser security blocks direct API calls to different domains.
 * The server-side route (/api/cruises) forwards requests to the 
 * Cruisebound API, avoiding CORS restrictions.
 */

export async function GET() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/sailings`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching cruises:', error);
    return NextResponse.json(
      { error: "Failed to fetch cruises" },
      { status: 500 }
    );
  }
}
