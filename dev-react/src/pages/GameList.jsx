import { useLoaderData } from "react-router-dom";
import GameCard from "../components/GameCard";

function GameList() {
  const gamesData = useLoaderData();
  const gamesArray = Array.isArray(gamesData)
    ? gamesData
    : Object.values(gamesData);

  return (
    <main>
      <section className="flex flex-wrap justify-center mb-10">
        {gamesArray.map((gameData) => (
          <GameCard gameData={gameData} />
        ))}
      </section>
    </main>
  );
}

export default GameList;
