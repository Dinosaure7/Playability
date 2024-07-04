import { Link } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
import GameCard from "../components/GameCard";
import PeriphCard from "../components/PeriphCard";

function Home() {
  const gamesData = useLoaderData();
  console.log(gamesData);
  return (
    <>
      <h2 className="text-[var(--white-color)] text-xl md:text-4xl font-medium m-5 md:ml-16">
        Découvrez les notes de nos experts en accessibilité et inclusivité
      </h2>
      <section className="flex flex-wrap justify-center mb-10">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </section>
      <Link
        to="/gameList"
        className="text-[var(--white-color)] flex gap-2 mb-16 md:mb-28 justify-end underline md:text-xl mr-10 md:mr-14 hover:text-[var(--primary-color)]"
      >
        Parcourir la liste
        <img className="w-5" src="/src/assets/arrowNext.svg" alt="" />
      </Link>
      <h2 className="md:ml-16 text-[var(--white-color)] text-xl md:text-4xl m-5">
        Découvrez les périphériques recommandés par nos experts en accessibilité
      </h2>
      <section className="flex flex-wrap justify-center">
        <PeriphCard />
        <PeriphCard />
        <PeriphCard />
        <PeriphCard />
      </section>
      <Link
        to="/gameList"
        className="text-[var(--white-color)] flex gap-2 mb-16 md:mb-28 justify-end underline md:text-xl mr-10 md:mr-14 hover:text-[var(--primary-color)]"
      >
        Parcourir la liste
        <img className="w-5" src="/src/assets/arrowNext.svg" alt="" />
      </Link>
    </>
  );
}

export default Home;
