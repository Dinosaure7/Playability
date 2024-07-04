function CardComment() {
  return (
    <section className="bg-[var(--nuance3-secondary)] flex flex-col gap-4 px-4 py-4 rounded-md">
      <h3 className="text-[var(--primary-color)] opacity-80">
        Félicien | Expert Testeur
      </h3>
      <p className="italic text-[var(--white-color)] font-light text-sm md:text-base">
        “Jeu vidéo très accessible et inclusif, peut convenir selon moi à tous
        les publics”
      </p>
      <div className="flex gap-7 md:gap-16">
        <div className="flex gap-2 items-center">
          <p className="text-xs md:text-base text-[var(--white-color)] font-light">
            Accessibilité
          </p>
          <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1 items-center">
            7/10
            <img className="w-3" src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-xs md:text-base text-[var(--white-color)] font-light">
            Inclusivité
          </p>
          <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1 items-center">
            7/10
            <img className="w-3" src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
      </div>
      <div className="flex gap-1 md:flex-none">
        <p className="text-xs md:text-base text-[var(--white-color)] font-light">
          Globale
        </p>
        <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1">
          7/10
          <img className="w-3" src="/src/assets/Star.svg" alt="" />
        </p>
      </div>
    </section>
  );
}

export default CardComment;
