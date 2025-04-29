import GameCard from "@/components/games/GameCard";
import { games } from "@/lib/games";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl mt-10 font-bold">Games</h2>
      <div className="p-5 flex items-center justify-center">
        {games.map((game) => {
          return <GameCard key={game.name} {...game} />;
        })}
      </div>
    </div>
  );
};

export default Page;
