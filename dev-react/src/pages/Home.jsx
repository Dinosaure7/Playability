import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import PeriphCard from "../components/PeriphCard";

function Home() {
  const gamesData = useLoaderData();
  return (
    <>
      <section className="mb-20 shadow w-screen h-screen bg-cover flex flex-col gap-20 justify-center items-center cover-home1">
        <h1 className="text-5xl md:text-8xl text-shadow">PlayAbility</h1>
        <div className="flex flex-col gap-10">
          <p className="font-light md:text-2xl mx-20 text-shadow">
            Trouverez vous Le jeu-vidéo adapté à vous ?
          </p>
          <Link
            to="/gameList"
            className="self-center bg-[var(--primary-color)] text-[var(--white-color)] text-center font-normal w-40 md:w-64 hover:bg-[var(--primary-hover-color)] transition-all ease-in-out text-sm p-2 md:p-5 md:text-xl rounded-xl"
          >
            Découvrir notre liste
          </Link>
        </div>
        <img
          className="w-7 mt-5 self-center animate-bounce"
          src="/src/assets/arrow-bottom.svg"
          alt=""
        />
      </section>
      <h2 className="text-xl md:ml-16 md:text-4xl text-[var(--white-color)] mb-10 font-medium m-5">
        Découvrez les notes de nos experts en accessibilité et inclusivité
      </h2>
      <section className="flex flex-wrap justify-center">
        {gamesData.map((gameData) => (
          <GameCard gameData={gameData} />
        ))}
      </section>
      <Link
        to="/gameList"
        className="text-[var(--white-color)] flex gap-2 mb-12 md:mb-28 justify-end underline md:text-xl mr-10 md:mr-14 hover:text-[var(--primary-color)]"
      >
        Parcourir la liste
        <img className="w-5" src="/src/assets/arrowNext.svg" alt="" />
      </Link>
      <h2 className="mb-10 md:ml-16 text-[var(--white-color)] text-xl md:text-4xl m-5">
        Découvrez les périphériques recommandés par nos experts en accessibilité
      </h2>
      <section className="flex flex-wrap justify-center mb-10">
        <PeriphCard />
        <PeriphCard />
        <PeriphCard />
        <PeriphCard />
      </section>
      <Link
        to="/periphList"
        className="text-[var(--white-color)] flex gap-2 mb-16 md:mb-28 justify-end underline md:text-xl mr-10 md:mr-14 hover:text-[var(--primary-color)]"
      >
        Parcourir la liste
        <img className="w-5" src="/src/assets/arrowNext.svg" alt="" />
      </Link>
    </>
  );
}

export default Home;
