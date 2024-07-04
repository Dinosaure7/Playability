import React from "react";
import { Link } from "react-router-dom";

function PeriphCard() {
  return (
    <div className="max-w-md md:max-w-2xl px-5 my-5">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          className="w-full h-56 md:h-auto md:w-56 object-contain md:object-cover shadow-right"
          src="https://media.direct.playstation.com/is/image/psdglobal/Access-Controller-Front-Right-Hero-1"
        />
        <div className="flex flex-col justify-between">
          <div className="p-4 md:p-5 block m-auto">
            <p className="text-gray-800 font-bold text-xl md:text-2xl">Manette Access</p>
            <p className="text-gray-700 md:text-lg">
              Créez de nouvelles façons jouer avec un kit pour manette
              PlayStation®5 hautement personnalisable, conçu pour aider...
            </p>
          </div>
          <div className="p-4 md:p-5 shadow-top bg-gray-100">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div>
                <div className="text-lg text-gray-700">
                  <span className="text-gray-900 font-bold">
                    Note globale d'accessibilité
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="inline-flex -mx-px">
                    {/* Les étoiles */}
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
                    28 notes
                  </div>
                </div>
              </div>
              <Link to="/periphList/:id">
                <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-[var(--primary-color)] hover:bg-[var(--primary-hover-color)] font-bold text-white md:text-lg rounded-lg shadow-md">
                  Voir plus
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
