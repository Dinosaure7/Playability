function CardComment({ name, comment, accessibility, inclusivity }) {
  const globalRating = ((accessibility + inclusivity) / 2).toFixed(1);

  return (
    <section className="bg-[var(--nuance4-secondary)] flex flex-col gap-4 px-4 py-4 rounded-md">
      <h3 className="text-[var(--secondary-color)] font-bold">{name}</h3>
      <p className="italic text-[var(--white-color)] font-normal text-sm md:text-base">
        {`“${comment}”`}
      </p>
      <div className="flex gap-7 md:gap-16">
        <div className="flex gap-2 items-center">
          <p className="text-xs md:text-base text-[var(--white-color)] font-normal">
            Accessibility
          </p>
          <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1 items-center">
            {accessibility}/5
            <img className="w-3" src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-xs md:text-base text-[var(--white-color)] font-normal">
            Inclusivity
          </p>
          <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1 items-center">
            {inclusivity}/5
            <img className="w-3" src="/src/assets/Star.svg" alt="" />
          </p>
        </div>
      </div>
      <div className="flex gap-1 md:flex-none">
        <p className="text-xs md:text-base text-[var(--white-color)] font-normal">
          Global
        </p>
        <p className="text-xs md:text-base text-[var(--white-color)] flex gap-1">
          {globalRating}/5
          <img className="w-3" src="/src/assets/Star.svg" alt="" />
        </p>
      </div>
    </section>
  );
}

export default CardComment;
