import type { Metadata } from "next";

import { themeScript } from "@/lib/theme-script";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Cruisebound Assessment",
  description:
    "A NextJS application that displays and manages cruise search results, built as part of the Cruisebound Frontend Engineering Assessment.",
};

/*
Hydration Error with Dark Mode:
The issue occurs due to a mismatch between server and client rendering of the theme.
- Server doesn't know user's theme preference during SSR
- Client checks localStorage/system preferences after hydration
- This mismatch causes React to throw a hydration error

Solution:
1. Add script that runs before React hydration to set the correct theme
2. Use suppressHydrationWarning to handle intentional mismatch
3. Set theme based on localStorage or system preference
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Prevents React hydration mismatch warnings for theme switching
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Executes theme script before React hydration to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
