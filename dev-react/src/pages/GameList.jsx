import { useLoaderData } from "react-router-dom";

function GameList() {
  const games = useLoaderData;
  return (
    <main>
      <section className="flex flex-wrap justify-center mb-10">
        {games.map((game) => (
          <GameCard />
        ))}
      </section>
    </main>
  );
}

export default GameList;
