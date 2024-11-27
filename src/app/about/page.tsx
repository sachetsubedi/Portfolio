"use client";
import ContactCard from "@/components/about/ContactCard";
import Projects from "@/components/about/Projects";
import TabItem from "@/components/about/TabItem";
import TechStack from "@/components/about/TechStack";
import { Toaster } from "@/components/ui/sonner";
import { Tab, Tabs } from "@mui/material";
import { useTheme } from "next-themes";
import { useState } from "react";
const Page = () => {
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();

  return (
    <div className="flex justify-center">
      <div className="w-1/2">
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
            },
          }}
        >
          <Tab
            label={
              <TabItem
                icon="solar:laptop-minimalistic-bold"
                label="Tech Stack"
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
              letterSpacing: "0.05em",
            }}
          />

          <Tab
            label={
              <TabItem icon="solar:code-square-bold" label="Projects"></TabItem>
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
              letterSpacing: "0.05em",
            }}
          />

          <Tab
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
              letterSpacing: "0.05em",
            }}
          />
        </Tabs>
        <TechStack hidden={tabValue != 0}></TechStack>
        <Projects hidden={tabValue != 1}></Projects>
        <ContactCard hidden={tabValue != 2}></ContactCard>
        <Toaster position="top-center" />
      </div>
    </div>
    // </BackgroundBeamsWithCollision>
  );
};

export default Page;
