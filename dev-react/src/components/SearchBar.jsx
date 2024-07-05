function SearchBar({ onChange, value }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form className="form relative">
      <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
          className="w-5 h-5 text-gray-700"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            stroke-width="1.333"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <input
        className="input rounded-full px-10 md:px-20 py-3 border-2 border-transparent focus:outline-none focus:border-[var(--primary-color)] placeholder-gray-400 transition-all duration-300 shadow-md"
        placeholder="Search..."
        required=""
        type="text"
        onChange={onChange}
        value={value}
      />
      <button
        type="reset"
        className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
