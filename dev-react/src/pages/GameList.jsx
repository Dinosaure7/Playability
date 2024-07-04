import { useLoaderData } from "react-router-dom";

function GameList() {
  const games = useLoaderData
  return (
<main>
<section className="flex flex-wrap justify-center mb-10">
{offers.map((offer) => (
          <GameCard />
        ))}
      </section>
</main>
  );
}

export default GameList;
