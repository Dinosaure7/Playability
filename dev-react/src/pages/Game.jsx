import { useLoaderData } from "react-router-dom";
import { useState, useCallback } from "react";
import CardComment from "../components/CardComment";
import { reviewsUser, expertReviews } from "../service/review";
import { useEffect } from "react";
import GameCard from "../components/GameCard";
import Return from "../components/Return";
import Modal from "../components/Modal";
import CardComment2 from "../components/CardComment2";

function Game() {
  const { gameData, gameRecommendations } = useLoaderData();

  const moyenneAccess = Math.ceil(
    gameData.Controls + gameData.Navigation + gameData.Reading / 3
  );
  const moyenneInclude = Math.ceil(gameData.Navigation + gameData.Controls / 2);
  const moyenneGlobale = Math.ceil(moyenneAccess + moyenneInclude / 2);

  console.log(gameData);

  const [recommendedGames, setRecommendedGames] = useState([]);

  useEffect(() => {
    const fetchRecommendedGames = async () => {
      try {
        const gameIdsObject =
          typeof gameRecommendations === "string"
            ? JSON.parse(gameRecommendations)
            : gameRecommendations;

        const gameIds = Object.values(gameIdsObject);
        console.log(gameIds);

        const fetchPromises = gameIds.map((id) =>
          fetch(`${import.meta.env.VITE_API_URL}/game/${id}`, {
            mode: "cors",
          }).then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to fetch game with ID: ${id}`);
            }
            return response.json();
          })
        );

        const games = await Promise.all(fetchPromises);

        setRecommendedGames(games);
      } catch (error) {
        console.error("Error fetching recommended games:", error);
      }
    };

    fetchRecommendedGames();
  }, []);

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeModal = useCallback(() => {
    setIsVisible(!isVisible);
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1);
  }, [isVisible, isOpen]);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const isModalOpen = isOpen ? "modalOpen" : "modalNotOpen";

  const isModalVisible = isVisible ? "block" : "hidden";

  return (
    <main>
      <Modal
        firstInput={firstInput}
        secondInput={secondInput}
        thirdInput={thirdInput}
        setFirstInput={(e) => setFirstInput(e.target.value)}
        setSecondInput={(e) => setSecondInput(e.target.value)}
        setThirdInput={(e) => setThirdInput(e.target.value)}
        isModalOpen={isModalOpen}
        isModalVisible={isModalVisible}
        handleChangeModal={handleChangeModal}
      />
      <div className="my-5 ml-10">
        <Return />
      </div>
      <section className="mx-10 flex flex-col md:flex-row">
        <img
          src={gameData.Cover}
          alt=""
          className="w-screen rounded-md md:mr-10 md:max-w-[40%]"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-[var(--white-color)] mt-4">{gameData.Game}</h1>
          <div className="flex gap-4 mt-2">
            <p className="text-[var(--nuance3-secondary)] text-xl">
              {gameData.Genres}
            </p>
          </div>
          <h2 className="text-[var(--white-color)] text-3xl mt-8">Summary</h2>
          <p className="text-[var(--white-color)] mt-4 max-w-prose">
            {gameData.Summary}
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="mt-10 md:text-3xl text-2xl">Plateforms</h2>
            <p className="text-[var(--nuance3-secondary)] mb-5">
              {gameData.Platforms}
            </p>
          </div>
        </div>
      </section>
      <section className="mx-10">
        <h2 className="text-[var(--white-color)] md:text-3xl text-xl mt-8">
          Our expert's ratings & reviews
        </h2>
        <div className="flex justify-between mt-2 md:mt-4">
          <p className="text-[var(--white-color)]">Accessibility rating</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {gameData["Getting Started"]}/5{" "}
            <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2 md:mt-4">
          <p className="text-[var(--white-color)]">Inclusivity rating</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {gameData.Navigation}/5
            <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-4 md:mt-8">
          <p className="text-[var(--white-color)]">Overall rating</p>
          <p className="text-[var(--white-color)] flex gap-2 md:text-xl">
            {((gameData["Getting Started"] + gameData.Navigation) / 2).toFixed(
              2
            )}
            /5 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
      </section>
      <div className="mb-10 px-10 mt-10 flex gap-8 overflow-scroll no-scrollbar">
        {expertReviews.map((review, index) => (
          <CardComment
            key={index}
            name={review.name}
            comment={review.comment}
            accessibility={review.accessibility}
            inclusivity={review.inclusivity}
          />
        ))}
      </div>
      <div class="w-4/5 mx-auto my-4 border-t border-[var(--nuance3-secondary)]"></div>
      <section className="mx-10">
        <h2 className="text-[var(--white-color)] text-xl mt-8 inline">
          User ratings & reviews
        </h2>
        <button
          className="md:ml-10 mt-4 md:mt-0 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] transition-all ease-in-out px-4 py-2 rounded-lg text-[var(--white-color)]"
          onClick={handleChangeModal}
        >
          Comment
        </button>
        <div className="flex justify-between mt-2">
          <p className="text-[var(--white-color)]">Accessibility rating</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {gameData.Reading}/5 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[var(--white-color)]">Inclusivity rating</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {gameData.Audio}/5 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-[var(--white-color)]">Overall rating</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {((gameData.Audio + gameData.Reading) / 2).toFixed(2)}/5{" "}
            <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
      </section>
      <div className="mb-10 px-10 mt-10 flex gap-8 overflow-x-scroll no-scrollbar">
        {reviewsUser.slice(7, 12).map((review, index) => (
          <CardComment
            key={index}
            name={review.name}
            comment={review.comment}
            accessibility={review.accessibility}
            inclusivity={review.inclusivity}
          />
        ))}
        <CardComment2
          firstname={firstInput}
          lastname={secondInput}
          comment={thirdInput}
        />
      </div>
      <div className="mb-2 px-10 mt-2 gap-8">
        <h2 className="text-[var(--white-color)] md:text-xl text-l font-medium">
          Similar games
        </h2>
      </div>
      <section className="flex flex-wrap justify-center overflow-x-scroll no-scrollbar">
        {recommendedGames.map((gameData) => (
          <GameCard gameData={gameData} />
        ))}
      </section>
    </main>
  );
}

export default Game;
