"use client";
import ContactCard from "@/components/about/ContactCard";
import Projects from "@/components/about/Projects";
import TabItem from "@/components/about/TabItem";
import TechStack from "@/components/about/TechStack";
import { Toaster } from "@/components/ui/sonner";
import { Tab, Tabs } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const Page = () => {
  const [tabValue, setTabValue] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const theme = useTheme();
  console.log(theme.resolvedTheme);

  // Set isClient to true once the component has been hydrated on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Avoid rendering if the theme is not yet resolved
  if (!isClient) {
    return null; // Or a loading spinner while the theme is being determined
  }

  return (
    <div className="flex justify-center">
      <div className=" w-full lg:w-1/2">
        <Tabs
          value={tabValue}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor:
                theme.resolvedTheme == "light" ? "black" : "white",
            },
            fontFamily: "inherit",
            marginTop: "10rem",

            "& .MuiTabs-flexContainer": {
              gap: 3,
              "@media (max-width: 600px)": {
                gap: 0, // Adjust gap for mobile
              },
            },
          }}
        >
          <Tab
            value={0}
            label={
              <TabItem
                icon="solar:laptop-minimalistic-bold"
                label="Projects"
              ></TabItem>
            }
            onClick={() => {
              setTabValue(0);
            }}
            sx={{
              textTransform: "none",
              color: "gray",
              "&.Mui-selected": {
                color: theme.resolvedTheme == "light" ? "black" : "white",
              },
              fontWeight: "bold",
              fontFamily: "inherit",
              fontSize: "1.125rem",
              "@media (max-width: 600px)": {
                fontSize: "0.8rem",
              },
              letterSpacing: "0.05em",
            }}
          />

          <Tab
            value={1}
            label={
              <TabItem
                icon="solar:code-square-bold"
                label="Tech Stack"
              ></TabItem>
            }
            onClick={() => {
              setTabValue(1);
            }}
            sx={{
              textTransform: "none",
              color: "gray",
              "&.Mui-selected": {
                color: theme.resolvedTheme == "light" ? "black" : "white",
              },
              fontWeight: "bold",
              fontFamily: "inherit",
              fontSize: "1.125rem",
              "@media (max-width: 600px)": {
                fontSize: "0.8rem",
              },
              letterSpacing: "0.05em",
            }}
          />

          <Tab
            value={2}
            label={<TabItem icon="solar:phone-bold" label="Contact"></TabItem>}
            onClick={() => {
              setTabValue(2);
            }}
            sx={{
              textTransform: "none",
              color: "gray",
              "&.Mui-selected": {
                color: theme.resolvedTheme == "light" ? "black" : "white",
              },
              fontWeight: "bold",
              fontFamily: "inherit",
              fontSize: "1.125rem",
              "@media (max-width: 600px)": {
                fontSize: "0.8rem",
              },
              letterSpacing: "0.05em",
            }}
          />
        </Tabs>
        <Projects hidden={tabValue != 0}></Projects>
        <TechStack hidden={tabValue != 1}></TechStack>
        <ContactCard hidden={tabValue != 2}></ContactCard>
        <Toaster position="top-center" />
      </div>
    </div>
    // </BackgroundBeamsWithCollision>
  );
};

export default Page;
