import React from "react";

const Pagination = ({ totalPages, currentPage, paginate }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevious = () => {
    if (!isFirstPage) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      paginate(currentPage + 1);
    }
  };

  return (
    <nav className="flex justify-center items-center mt-4">
      <ul className="flex space-x-2 items-center">
        <li>
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 rounded-md font-medium ${
              isFirstPage
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            disabled={isFirstPage}
          >
            Previous
          </button>
        </li>
        <li>
          <span className="px-4 py-2 text-[var(--white-color)] font-medium md:max-lg:text-xl flex justify-center items-center p-2 md:text-xl md:m-4">
            Page {currentPage} of {totalPages}
          </span>
        </li>
        <li>
          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded-md font-medium ${
              isLastPage
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            disabled={isLastPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
