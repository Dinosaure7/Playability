const Pagination = ({ totalPages, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`${
                currentPage === number
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-200 text-gray-800"
              } px-4 py-2 mx-1 rounded-md`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
