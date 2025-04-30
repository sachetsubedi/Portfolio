"use client";
import { games } from "@/lib/games";
import { FC, Usable, use, useState } from "react";

const Page: FC<{ params: Usable<{ playId: string }> }> = ({ params }) => {
  const [loaded, setLoaded] = useState(false);
  const resolvedparams = use(params);

  const gameIndex = games.findIndex(
    (game) => game.slug === resolvedparams.playId
  );

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
          src={games[gameIndex].url}
          className="w-full h-[92.7dvh] md:h-[88vh]  md:mt-0"
        ></iframe>
      }
    </div>
  );
};

export default Page;
