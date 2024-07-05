import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function GameList() {
  const gamesData = useLoaderData();
  const gamesArray = Array.isArray(gamesData)
    ? gamesData
    : Object.values(gamesData);

  const [inputContent, setInputContent] = useState("");
  const filteredGames = gamesArray.filter((game) =>
    game.Game.toLowerCase().includes(inputContent.toLowerCase())
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(10);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Délai de 100ms
  };

  useEffect(() => {
    if (currentPage !== 1) {
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      scrollToTop();
    }
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1); // Revenir à la première page lorsque le filtre change
  }, [inputContent]);

  return (
    <main className="flex flex-col">
      <div className="flex self-center mt-10 mb-5">
        <SearchBar
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
        />
      </div>
      <section className="flex flex-wrap justify-center mb-10">
        {currentGames.map((gameData) => (
          <GameCard key={gameData.ID} gameData={gameData} />
        ))}
      </section>
      <div className="mb-10 overflow-x-scroll no-scrollbar">
        <Pagination
          totalPages={Math.ceil(filteredGames.length / gamesPerPage)}
          currentPage={currentPage}
          paginate={handleClick}
        />
      </div>
    </main>
  );
}

export default GameList;
