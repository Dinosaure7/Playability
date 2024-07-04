import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-[#1E1E23] h-[65px]">
      <div
        className="flex flex-col relative top-6 left-6 z-10 select-none"
        id="menuToggle"
      >
        <input
          type="checkbox"
          className="absolute w-10 h-8 opacity-0 cursor-pointer z-20"
        />
        <span className="z-30 block w-7 h-0.5 mb-1.5 bg-[var(--nuance3-secondary)] rounded-[3px] origin-[5px_0px] transition-transform duration-500 ease-in-out"></span>
        <span className="z-30 block w-7 h-0.5 mb-1.5 bg-[var(--nuance3-secondary)] rounded-[3px] origin-[0%_0%] transition-transform duration-500 ease-in-out"></span>
        <span className="z-30 block w-7 h-0.5 mb-1.5 bg-[var(--nuance3-secondary)] rounded-[3px] origin-[0%_100%] transition-transform duration-500 ease-in-out"></span>
        <img
          className="w-10 absolute z-40 md:fixed right-8 md:left-8"
          src="/src/assets/logoPlayAbilityGreen.svg"
          alt=""
        />
        <ul
          id="menu"
          className="fixed top-0 left-0 w-[80%] h-full pl-5 pt-[125px] bg-[#1E1E23] text-2xl origin-[0_0] translate-x-[-100%] transition-transform duration-500 ease-in-out"
        >
          <li className="py-[10px] delay-2000">
            <Link
              href="#"
              className="no-underline text-[var(--white-color)] opacity-100 text-1.5xl font-light transition-opacity duration-200 hover:opacity-50"
            >
              Accueil
            </Link>
          </li>
          <li className="py-[10px] delay-2000">
            <Link
              href="#"
              className="no-underline text-[var(--white-color)] opacity-100 text-1.5xl font-light transition-opacity duration-200 hover:opacity-50"
            >
              Liste des jeux
            </Link>
          </li>
          <li className="py-[10px] delay-2000">
            <Link
              href="#"
              className="no-underline text-[var(--white-color)] opacity-100 text-1.5xl font-light transition-opacity duration-200 hover:opacity-50"
            >
              Liste des périphériques
            </Link>
          </li>
          <li className="py-[10px] delay-2000">
            <Link
              href="#"
              className="no-underline text-[var(--white-color)] opacity-100 font-work-sans text-1.5xl font-light transition-opacity duration-200 hover:opacity-50"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
