"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = () => {
  return (
    <>
      <ProgressBar
        height="4px"
        color={"gray"}
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressProvider;
