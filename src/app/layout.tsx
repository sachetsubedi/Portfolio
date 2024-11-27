import { ModeToggle } from "@/components/landing/ThemeToggle";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProgressProvider from "@/providers/progressProvider";
import QueryProviderWrapper from "@/providers/queryProvider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sachet Subedi",
  description: "Portfolio of Sachet Subedi",
  keywords:
    "Sachet Subedi, Portfolio, Developer, Designer, Full Stack Developer, Frontend Developer, Backend Developer, UI/UX Designer, Sachet, Subedi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative">
        <QueryProviderWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ProgressProvider></ProgressProvider>
            <TooltipProvider>
              <ModeToggle></ModeToggle>
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </QueryProviderWrapper>
      </body>
    </html>
  );
}
