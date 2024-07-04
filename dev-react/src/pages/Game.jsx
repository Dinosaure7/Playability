import { useLoaderData, useParams } from "react-router-dom";
import CardComment from "../components/CardComment";
import Return from "../components/Return";
import { useEffect, useState } from "react";
import { fetchApi } from "../service/api.service";

function Game() {
  const gameData = useLoaderData();

  console.log(gameData);
  return (
    <main>
      <div className="my-5 ml-10">
        <Return />
      </div>
      <section className="mx-10 flex flex-col md:flex-row">
        <img
          src="/src/assets/cover.jpg"
          alt=""
          className="w-screen rounded-md md:mr-10 md:max-w-[40%]"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-[var(--white-color)] mt-4">{gameData.Game}</h1>
          <div className="flex gap-4 mt-2">
            <p className="text-[var(--nuance3-secondary)] text-xl">Action</p>
            <p className="text-[var(--nuance3-secondary)] text-xl">Stratégie</p>
            <p className="text-[var(--nuance3-secondary)] text-xl">FPS</p>
          </div>
          <h2 className="text-[var(--white-color)] text-3xl mt-8">
            Description
          </h2>
          <p className="text-[var(--white-color)] mt-4 max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            tempore optio cumque corporis soluta nulla, blanditiis deleniti
            placeat nisi delectus sapiente vel doloremque culpa quas. Dolore,
            inventore! Commodi, temporibus nam?
          </p>
        </div>
      </section>
      <section className="mx-10">
        <h2 className="text-[var(--white-color)] md:text-3xl text-xl mt-8">
          Notes & avis de nos experts
        </h2>
        <div className="flex justify-between mt-4 md:mt-8">
          <p className="text-[var(--white-color)]">Note globale</p>
          <p className="text-[var(--white-color)] flex gap-2 md:text-xl">
            8/10 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2 md:mt-4">
          <p className="text-[var(--white-color)]">Note d'accessible</p>
          <p className="text-[var(--white-color)] flex gap-2">
            8/10 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2 md:mt-4">
          <p className="text-[var(--white-color)]">Note d'inclusivité</p>
          <p className="text-[var(--white-color)] flex gap-2">
            8/10
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
        <h2 className="text-[var(--white-color)] text-xl mt-8">
          Notes & avis des utilisateurs
        </h2>
        <div className="flex justify-between mt-4">
          <p className="text-[var(--white-color)]">Note globale</p>
          <p className="text-[var(--white-color)] flex gap-2">
            8/10 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[var(--white-color)]">Note d'accessible</p>
          <p className="text-[var(--white-color)] flex gap-2">
            8/10 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[var(--white-color)]">Note d'inclusivité</p>
          <p className="text-[var(--white-color)] flex gap-2">
            8/10 <img src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
      </section>
      <div className="mb-10 px-10 mt-10 flex gap-8 overflow-x-scroll no-scrollbar">
        <CardComment />
        <CardComment />
        <CardComment />
      </div>
    </main>
  );
}

export default Game;
