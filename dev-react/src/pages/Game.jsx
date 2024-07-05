import { useLoaderData } from "react-router-dom";
import { useState, useCallback } from "react";
import CardComment from "../components/CardComment";
import CardComment2 from "../components/CardComment2";
import Return from "../components/Return";
import Modal from "../components/Modal";

function Game() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleChangeModal = useCallback(() => {
    setIsVisible(true);
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsClicked(false);
    }, 1);
  }, [isVisible, isOpen]);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const handleClickModal = useCallback(() => {
    setIsClicked(!isClicked);
  }, [isClicked]);

  const isModalOpen = isOpen ? "modalOpen" : "modalNotOpen";

  const isModalVisible = isVisible ? "block" : "hidden";

  const gameData = useLoaderData();
  const moyenneAccess = Math.ceil(
    gameData.Controls + gameData.Navigation + gameData.Reading / 3
  );
  const moyenneInclude = Math.ceil(gameData.Navigation + gameData.Controls / 2);
  const moyenneGlobale = Math.ceil(moyenneAccess + moyenneInclude / 2);

  console.log(gameData);

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  return (
    <main>
      <Modal
        isModalOpen={isModalVisible}
        firstInput={firstInput}
        secondInput={secondInput}
        thirdInput={thirdInput}
        setFirstInput={(e) => setFirstInput(e.target.value)}
        setSecondInput={(e) => setSecondInput(e.target.value)}
        setThirdInput={(e) => setThirdInput(e.target.value)}
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
        <div className="flex justify-between mt-4 md:mt-8">
          <p className="text-[var(--white-color)]">Overall rating</p>
          <p className="text-[var(--white-color)] flex gap-2 md:text-xl">
            {moyenneGlobale - 0.2}/5 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2 md:mt-4">
          <p className="text-[var(--white-color)]">Accessibility note</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {moyenneAccess - 0.4}/5 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2 md:mt-4">
          <p className="text-[var(--white-color)]">Inclusivity score</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {moyenneInclude + 0.3}/5
            <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
      </section>
      <div className="mb-10 px-10 mt-10 flex gap-8 overflow-scroll no-scrollbar">
        <CardComment />
        <CardComment />
        <CardComment />
      </div>
      <div class="w-4/5 mx-auto my-4 border-t border-[var(--nuance3-secondary)]"></div>
      <section className="mx-10">
        <h2 className="text-[var(--white-color)] text-xl mt-8 inline">
          User ratings & reviews
        </h2>
        <button
          onClick={handleChangeModal}
          className="bg-[var(--primary-color)] font-medium rounded-lg hover:bg-[var(--primary-hover-color)] transition-all ease-in-out ml-10 p-2 inline text-[var(--white-color)]"
        >
          Share your opinion
        </button>
        <div className="flex justify-between mt-4">
          <p className="text-[var(--white-color)]">Overall rating</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {moyenneGlobale + 0.3}/5 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[var(--white-color)]">Accessibility note</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {moyenneAccess - 0.2}/5 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[var(--white-color)]">Inclusivity score</p>
          <p className="text-[var(--white-color)] flex gap-2">
            {moyenneInclude + 0.1}/5 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
      </section>
      <div className="mb-10 px-10 mt-10 flex gap-8 overflow-x-scroll no-scrollbar">
        <CardComment />
        <CardComment />
        <CardComment2
          firstname={firstInput}
          lastname={secondInput}
          comment={thirdInput}
        />
      </div>
    </main>
  );
}

export default Game;
