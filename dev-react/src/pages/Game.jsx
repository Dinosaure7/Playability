import CardComment from "../components/CardComment";
import Return from "../components/Return";

function Game() {
  return (
    <main>
      <section className="mx-10 flex flex-col">
        <div className="absolute top-10">
          <Return link="/gameList" />
        </div>
        <img
          src="/src/assets/cover.jpg"
          alt=""
          className="w-screen mt-20 rounded-md"
        />
        <h1 className="text-[var(--white-color)] mt-4">Rainbow Six Siege</h1>
        <div className="flex gap-4 mt-2">
          <p className="text-[var(--nuance3-secondary)]">Action</p>
          <p className="text-[var(--nuance3-secondary)]">Stratégie</p>
          <p className="text-[var(--nuance3-secondary)]">FPS</p>
        </div>
        <h2 className="text-[var(--white-color)] text-xl mt-8">Description</h2>
        <p className="text-[var(--white-color)] mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore
          optio cumque corporis soluta nulla, blanditiis deleniti placeat nisi
          delectus sapiente vel doloremque culpa quas. Dolore, inventore!
          Commodi, temporibus nam?
        </p>
      </section>
      <section className="mx-10">
        <h2 className="text-[var(--white-color)] text-xl mt-8">
          Notes & avis de nos experts
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
      </div>
    </main>
  );
}

export default Game;
