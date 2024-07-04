function NavBar() {
  return (
    <nav class="bg-[#1E1E23] h-[65px]">
      <div
        class="flex flex-col relative top-6 left-6 z-10 select-none"
        id="menuToggle"
      >
        <input
          type="checkbox"
          class="absolute w-10 h-8 opacity-0 cursor-pointer z-20"
        />
        <span class="z-30 block w-7 h-0.5 mb-1.5 bg-[var(--nuance3-secondary)] rounded-[3px] origin-[5px_0px] transition-transform duration-500 ease-in-out"></span>
        <span class="z-30 block w-7 h-0.5 mb-1.5 bg-[var(--nuance3-secondary)] rounded-[3px] origin-[0%_0%] transition-transform duration-500 ease-in-out"></span>
        <span class="z-30 block w-7 h-0.5 mb-1.5 bg-[var(--nuance3-secondary)] rounded-[3px] origin-[0%_100%] transition-transform duration-500 ease-in-out"></span>
        <ul
          id="menu"
          class="fixed top-0 left-0 w-[80%] h-full p-[50px] pt-[125px] bg-[#1E1E23] text-2xl origin-[0_0] translate-x-[-100%] transition-transform duration-500 ease-in-out"
        >
          <li class="py-[10px] delay-2000">
            <a
              href="#"
              class="no-underline text-[var(--white-color)] opacity-100 text-1.5xl font-light transition-opacity duration-200 hover:opacity-50"
            >
              Accueil
            </a>
          </li>
          <li class="py-[10px] delay-2000">
            <a
              href="#"
              class="no-underline text-[var(--white-color)] opacity-100 text-1.5xl font-light transition-opacity duration-200 hover:opacity-50"
            >
              Liste des jeux
            </a>
          </li>
          <li class="py-[10px] delay-2000">
            <a
              href="#"
              class="no-underline text-[var(--white-color)] opacity-100 text-1.5xl font-light transition-opacity duration-200 hover:opacity-50"
            >
              Liste des périphériques
            </a>
          </li>
          <li class="py-[10px] delay-2000">
            <a
              href="#"
              class="no-underline text-[var(--white-color)] opacity-100 font-work-sans text-1.5xl font-light transition-opacity duration-200 hover:opacity-50"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
