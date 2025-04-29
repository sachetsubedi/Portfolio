"use client";
import { games } from "@/lib/games";
import { useState } from "react";

const Page = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="p-0 md:p-5 flex items-center justify-center relative">
      {!loaded && (
        <div className="absolute  flex-row top-0 left-0 text-center w-full mt-10">
          <div className="flex items-center justify-center gap-5">
            <div className="loader h-5"></div>
          </div>
        </div>
      )}
      {
        <iframe
          onLoad={() => {
            setLoaded(true);
          }}
          src={games[0].url}
          className="w-full h-[92.7dvh] md:h-[88vh]  md:mt-0"
        ></iframe>
      }
    </div>
  );
};

export default Page;
