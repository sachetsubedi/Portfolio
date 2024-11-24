import { ModeToggle } from "@/components/landing/ThemeToggle";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProgressProvider from "@/providers/progressProvider";
import QueryProviderWrapper from "@/providers/queryProvider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sachet Subedi",
  description:
    "Welcome to the portfolio of Sachet Subedi, a passionate junior full-stack developer with expertise in modern web technologies like Next.js, Tailwind CSS, Prisma, and Express. Explore innovative projects like custom UI components, payroll systems, and creative Matter.js animations. With a strong focus on scalability and unique ideas, Sachet thrives on building meaningful solutions and is always eager to learn and experiment. Dive into projects that blend creativity and functionality, showcasing a developer dedicated to crafting exceptional user experiences.",
  keywords:
    "Sachet Subedi, Portfolio, Developer, Designer, Full Stack Developer, Frontend Developer, Backend Developer, UI/UX Designer, Sachet, Subedi, Next.js Developer, Tailwind CSS Expert, Prisma Developer, Creative Animations, Matter.js Developer, Modern Web Solutions, Node.js Developer, Express.js Applications, Custom UI Components, Web Technology Projects",
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
