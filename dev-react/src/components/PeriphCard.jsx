import React from "react";
import { Link } from "react-router-dom";
import truncateText from "../service/delgorithm";
// import imageController from `../assets/image-controller`;
// import "../assets/image-controller";
import img1 from "../assets/image-controller/xbox.jpg";
import img2 from "../assets/image-controller/sonyv2.png";
import img3 from "../assets/image-controller/logi.png";
import img4 from "../assets/image-controller/quadstick.png";
import img5 from "../assets/image-controller/tobii.jpg";
import img6 from "../assets/image-controller/able.jpg";
import img7 from "../assets/image-controller/hori.jpg";
import img8 from "../assets/image-controller/ben.jpg";

// Fonction pour obtenir l'image par ID
const getImageById = (id) => {
  switch (id) {
    case 1:
      return img1;
    case 2:
      return img2;
    case 3:
      return img3;
    case 4:
      return img4;
    case 5:
      return img5;
    case 6:
      return img6;
    case 7:
      return img7;
    case 8:
      return img8;
    default:
      return null; // Optionnel: Ajouter une image par défaut ici si nécessaire
  }
};
// const pathImages = "../assets/image-controller";

function PeriphCard({ controller }) {
  const scrollToTop = window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const { id, name, description, imageURL, src, imageAlt, youtubeID } =
    controller;

    // const imagePath = `${import.meta.env.VITE_API_URL}/assets/image-controller/${src}`;
    // const imagePath = require(`../assets/image-controller/${src}`).default;
    const imagePath = getImageById(id);

  const isLongName = name.length > 32;

  const maxDescriptionLength = isLongName ? 100 : 150;
  const truncatedDescription = description
    ? truncateText(description, maxDescriptionLength)
    : "";

  return (
    <div className="max-w-md md:max-w-2xl px-5 my-5">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          className="w-full h-56 md:h-auto md:w-56 object-contain shadow-right"
          src={imagePath}
          alt={imageAlt}
        />
        <div className="flex flex-col justify-between">
          <div className="p-4 md:p-5 block m-auto">
            <p className="text-gray-800 font-bold text-xl md:text-2xl">
              {name}
            </p>
            <p className="text-gray-700 md:text-lg">{truncatedDescription}</p>
          </div>
          <div className="p-4 md:p-5 shadow-top bg-gray-100">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div>
                <div className="text-lg text-gray-700">
                  <span className="text-gray-900 font-bold">
                    Overall accessibility score
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="inline-flex -mx-px">
                    <svg
                      className="w-4 h-4 mx-px fill-current text-[var(--primary-color)]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                    >
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                    </svg>
                    <svg
                      className="w-4 h-4 mx-px fill-current text-[var(--primary-color)]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                    >
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                    </svg>
                    <svg
                      className="w-4 h-4 mx-px fill-current text-[var(--primary-color)]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                    >
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                    </svg>
                    <svg
                      className="w-4 h-4 mx-px fill-current text-[var(--primary-color)]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                    >
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                    </svg>
                    <svg
                      className="w-4 h-4 mx-px fill-current text-[var(--primary-color)]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                    >
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                    28 reviews
                  </div>
                </div>
              </div>
              <Link to={`/periphList/${id}`} onClick={scrollToTop}>
                <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] font-bold text-white md:text-lg rounded-lg shadow-md">
                  See more
                </button>
              </Link>
            </div>
            <div className="mt-3 text-gray-600 text-sm md:text-base">
              {/* *Prices may vary depending on selected date. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeriphCard;
