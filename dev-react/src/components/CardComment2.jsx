function CardComment({ firstname, lastname, comment }) {
  return (
    <section className="bg-[var(--nuance4-secondary)] flex flex-col gap-4 px-4 py-4 rounded-md">
      <h3 className="text-[var(--secondary-color)] font-bold">
        {firstname} | {lastname}
      </h3>
      <p className="text-xs md:text-base text-[var(--white-color)] font-normal italic">
        "{comment}"
      </p>
      <div className="flex gap-7 md:gap-16">
        <div className="flex gap-2 items-center">
          <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1 items-center">
            Accessibilité
          </p>
          <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1 items-center">
            3/5
            <img className="w-3" src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-xs md:text-base text-[var(--white-color)] font-normal">
            Inclusivité
          </p>
          <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1 items-center">
            4/5
            <img className="w-3" src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
      </div>
      <div className="flex gap-1 md:flex-none">
        <p className="text-xs md:text-base text-[var(--white-color)] font-normal">
          Globale
        </p>
        <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1">
          3.5/5
          <img className="w-3" src="/src/assets/Star.svg" alt="" />
        </p>
      </div>
    </section>
  );
}

export default CardComment;
