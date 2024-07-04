import { useLoaderData } from "react-router-dom";
import GameCard from "../components/GameCard";
import PeriphCard from "../components/PeriphCard";

function Home() {
  const gamesData = useLoaderData();
  console.log(gamesData);

  return (
    <>
      <h2 className="md:text-2xl text-[var(--white-color)] font-medium m-5">
        Découvrez les notes de nos experts en accessibilité et inclusivité
      </h2>
      <section className="flex flex-wrap justify-center">
        {gamesData.map((gameData) => (
          <GameCard gameData={gameData} />
        ))}
      </section>
      <h2 className="md:text-2xl text-[var(--white-color)] font-medium m-5">
        Découvrez les périphériques recommandés par nos experts en accessibilité
      </h2>
      <section className="flex flex-wrap justify-center">
        <PeriphCard />
        <PeriphCard />
        <PeriphCard />
        <PeriphCard />
      </section>
    </>
  );
}

export default Home;
