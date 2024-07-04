import { useLoaderData } from "react-router-dom";
import GameCard from "../components/GameCard";

function GameList() {
  const gamesData = useLoaderData();
  console.log(gamesData);
  return (
    <main>
      <section className="flex flex-wrap justify-center mb-10">
        {gamesData.map((gameData) => (
          <GameCard gameData={gameData} />
        ))}
      </section>
    </main>
  );
}

export default GameList;
