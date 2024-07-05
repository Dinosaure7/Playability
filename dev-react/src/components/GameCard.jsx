import React from "react";
import { Link } from "react-router-dom";
import truncateText from "../service/delgorithm";

function GameCard({ gameData }) {
  const { ID, Game, Cover, Summary, Total } = gameData;

  // Vérifier si l'image de couverture existe
  if (!Cover) {
    return null; // Ne rien rendre si Cover n'est pas défini
  }

  // Vérifier la longueur du titre du jeu
  const isLongTitle = Game.length > 30;

  // Limiter le résumé à 150 caractères ou 100 caractères selon la longueur du titre
  const maxSummaryLength = isLongTitle ? 100 : 150;
  const truncatedSummary = Summary
    ? truncateText(Summary, maxSummaryLength)
    : "";

  // Calculer le nombre d'étoiles en couleur primaire
  const rating = Math.ceil(Total);

  // Générer un nombre aléatoire entre 1 et 100 pour chaque carte
  const [randomNumber] = React.useState(
    () => Math.floor(Math.random() * 100) + 1
  );

  const scrollToTop = window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="max-w-md md:max-w-2xl px-5 my-5">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          className="w-full h-56 md:h-auto md:w-56 object-contain md:object-cover"
          src={`https:${Cover}`}
          alt={`${Game} Cover`}
        />
        <div className="flex flex-col justify-between w-full">
          <div className="p-4 md:p-5">
            <p className="text-gray-800 font-bold text-xl md:text-2xl">
              {Game}
            </p>
            <p className="text-gray-700 md:text-lg">{truncatedSummary}</p>
          </div>
          <div className="p-4 md:p-5 shadow-top bg-gray-100">
            <div className="sm:flex sm:justify-between sm:items-center">
              <Rating total={rating} randomNumber={randomNumber} />
              <Link to={`/gameList/${ID}`} onClick={scrollToTop}>
                <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-[var(--primary-color)] transition-all ease-in-out hover:bg-[var(--primary-hover-color)] font-bold text-white md:text-lg rounded-lg shadow-md">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant pour afficher les étoiles de notation
function Rating({ total, randomNumber }) {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 mx-px fill-current ${
          i <= total
            ? "text-[var(--primary-color)]"
            : "text-[var(--black-color)]"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
      </svg>
    );
  }

  return (
    <div>
      <div className="text-lg text-gray-700">
        <span className="text-gray-900 font-bold">
          Overall accessibility score
        </span>
      </div>
      <div className="flex items-center">
        <div className="inline-flex -mx-px">{stars}</div>
        <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
          {randomNumber} reviews
        </div>
      </div>
    </div>
  );
}

export default GameCard;
