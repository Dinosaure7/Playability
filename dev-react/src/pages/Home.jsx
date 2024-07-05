import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import PeriphCard from "../components/PeriphCard";

function Home() {
  const scrollToTop = window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const gamesData = useLoaderData();
  return (
    <>
      <section className="mb-20 shadow w-full h-full bg-cover cover-home1">
        <div className="backdrop-blur-sm flex flex-col gap-20 justify-center items-center w-screen h-screen">
          <h1 className="text-5xl md:text-8xl text-shadow">PlayAbility</h1>
          <div className="flex flex-col gap-10">
            <p className="font-normal md:text-2xl mx-20 drop-shadow-[0px_0px_3px_var(--secondary-color)] text-[var(--white-color)]">
              Will you find The right video game for you ?
            </p>
            <Link
              to="/gameList"
              onClick={scrollToTop}
              className="self-center bg-[var(--primary-color)] text-[var(--white-color)] text-center font-normal w-46 md:w-72 hover:bg-[var(--primary-hover-color)] transition-all ease-in-out text-sm p-4 md:p-5 md:text-xl rounded-xl"
            >
              Discover accessible games
            </Link>
          </div>
          <img
            className="w-7 mt-5 self-center animate-bounce"
            src="/src/assets/arrow-bottom.svg"
            alt=""
          />
        </div>
      </section>
      <h2 className="text-xl md:ml-16 md:text-4xl text-[var(--white-color)] mb-10 font-medium m-5">
        Discover our accessibility and inclusiveness expert's notes
      </h2>
      <section className="flex flex-wrap justify-center">
        {gamesData.map((gameData) => (
          <GameCard gameData={gameData} />
        ))}
      </section>
      <Link
        onClick={scrollToTop}
        to="/gameList"
        className="text-[var(--white-color)] flex gap-2 mb-12 md:mb-28 justify-end underline md:text-xl mr-10 md:mr-14 hover:text-[var(--primary-color)]"
      >
        Browse list
        <img className="w-5" src="/src/assets/arrowNext.svg" alt="" />
      </Link>
      <h2 className="mb-10 md:ml-16 text-[var(--white-color)] text-xl md:text-4xl m-5">
        Discover the peripherals recommended by our accessibility experts
      </h2>
      <section className="flex flex-wrap justify-center mb-10">
        <PeriphCard />
        <PeriphCard />
        <PeriphCard />
        <PeriphCard />
      </section>
      <Link
        onClick={scrollToTop}
        to="/periphList"
        className="text-[var(--white-color)] flex gap-2 mb-16 md:mb-28 justify-end underline md:text-xl mr-10 md:mr-14 hover:text-[var(--primary-color)]"
      >
        Browse list
        <img className="w-5" src="/src/assets/arrowNext.svg" alt="" />
      </Link>
    </>
  );
}

export default Home;
