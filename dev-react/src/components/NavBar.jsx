import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleCheckboxChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav class="bg-[#1E1E23] h-[65px]">
      <div
        class="flex flex-col relative top-6 z-10 select-none"
        id="menuToggle"
      >
        <input
          type="checkbox"
          checked={isOpen}
          onClick={handleCheckboxChange}
          class="md:hidden absolute w-10 ml-5 h-8 opacity-0 cursor-pointer z-20"
        />
        <span class="md:hidden ml-5 z-30 block w-7 h-0.5 mb-1.5 bg-[var(--nuance3-secondary)] rounded-[3px] origin-[5px_0px] transition-transform duration-500 ease-in-out"></span>
        <span class="md:hidden ml-5 z-30 block w-7 h-0.5 mb-1.5 bg-[var(--nuance3-secondary)] rounded-[3px] origin-[0%_0%] transition-transform duration-500 ease-in-out"></span>
        <span class="md:hidden ml-5 z-30 block w-7 h-0.5 mb-1.5 bg-[var(--nuance3-secondary)] rounded-[3px] origin-[0%_100%] transition-transform duration-500 ease-in-out"></span>
        <img
          className="w-10 absolute z-40 md:fixed right-8 md:left-8"
          src="/src/assets/logoPlayAbilityGreen.svg"
          alt=""
        />
        <ul
          id="menu"
          class="fixed top-0 left-0 w-[80%] h-full pl-5 pt-[125px] bg-[#1E1E23] text-2xl origin-[0_0] translate-x-[-100%] md:translate-x-0 md:w-full md:h-[65px] md:pt-0 md:pl-0 md:flex-row md:flex md:items-center md:justify-end md:pr-10 md:gap-10 transition-transform duration-500 ease-in-out"
        >
          <li class="py-[10px] delay-2000">
            <Link
              onClick={handleLinkClick}
              to="/"
              class="no-underline text-[var(--white-color)] opacity-100 text-1.5xl md:text-lg font-light md:font-normal transition-text duration-200 hover:text-[var(--primary-color)]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link  to="/scan"           class="no-underline text-[var(--white-color)] opacity-100 text-1.5xl md:text-lg font-light md:font-normal transition-text duration-200 hover:text-[var(--primary-color)]"
>Scanner</Link>
          </li>
          <li class="py-[10px] delay-2000">
            <Link
              to="/gameList"
              onClick={handleLinkClick}
              class="no-underline text-[var(--white-color)] opacity-100 text-1.5xl md:text-lg font-light md:font-normal transition-text duration-200 hover:text-[var(--primary-color)]"
            >
              Game list
            </Link>
          </li>
          <li class="py-[10px] delay-2000">
            <Link
              to="/periphList"
              onClick={handleLinkClick}
              class="no-underline text-[var(--white-color)] opacity-100 text-1.5xl md:text-lg font-light md:font-normal transition-text duration-200 hover:text-[var(--primary-color)]"
            >
              Peripherals list
            </Link>
          </li>
          <li class="py-[10px] delay-2000">
            <Link
              to="/Contact"
              onClick={handleLinkClick}
              class="no-underline text-[var(--white-color)] opacity-100 md:text-lg text-1.5xl font-light md:font-normal transition-text duration-200 hover:text-[var(--primary-color)]"
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
