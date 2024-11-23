"use client";
import Projects from "@/components/about/Projects";
import TechStack from "@/components/about/TechStack";
import { Tab, Tabs } from "@mui/material";
import { useTheme } from "next-themes";
import { useState } from "react";
const Page = () => {
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();

  return (
    // <BackgroundBeamsWithCollision className="block -z-50 pointer-events-none">
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
            label="Tech Stack"
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
            label="Projects"
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
        </Tabs>
        <TechStack hidden={tabValue != 0}></TechStack>
        <Projects hidden={tabValue != 1}></Projects>
      </div>
    </div>
    // </BackgroundBeamsWithCollision>
  );
};

export default Page;
