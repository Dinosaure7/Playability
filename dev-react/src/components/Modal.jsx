function Modal({
  setFirstInput,
  setSecondInput,
  setThirdInput,
  firstInput,
  secondInput,
  thirdInput,
  isModalVisible,
  handleChangeModal,
  isModalOpen,
}) {
  return (
    <section
      className={`${isModalVisible} ${isModalOpen} flex flex-col items-center`}
    >
      <section className="absolute z-50 mx-4 rounded-lg flex flex-col gap-10 px-32 py-12 bg-[var(--white-color)]">
        <h2 className="text-3xl font-medium self-center text-[var(--primary-color)]">
          Send your comment !
        </h2>
        <div className="flex gap-10">
          <p className="text-[var(--secondary-color)] self-center">Firstname</p>
          <input
            onChange={setFirstInput}
            value={firstInput}
            className="pl-4 min-w-72 min-h-10 outline-[var(--nuance3-secondary)] rounded-md focus-visible:outline-[var(--nuance3-secondary)] bg-slate-300"
            type="text"
          />
        </div>
        <div className="flex gap-10">
          <p className="text-[var(--secondary-color)] self-center">Lastname</p>
          <input
            onChange={setSecondInput}
            value={secondInput}
            className="pl-4 min-w-72 min-h-10 outline-[var(--nuance3-secondary)] rounded-md focus-visible:outline-[var(--nuance3-secondary)] bg-slate-300"
            type="text"
          />
        </div>
        <div className="flex gap-10">
          <p className="text-[var(--secondary-color)] self-start">Comment</p>
          <textarea
            onChange={setThirdInput}
            value={thirdInput}
            className="pl-4 pt-2 align-middle pb-56 w-72 outline-[var(--nuance3-secondary)] rounded-md focus-visible:outline-[var(--nuance3-secondary)] bg-slate-300"
            type="text"
          />
        </div>
        <div className="flex gap-5 mt-10">
          <p className="self-center text-[var(--secondary-color)]">
            Accessibility rate
          </p>
          <div class="rating">
            <input
              value="5"
              name="rating"
              id="star5"
              type="radio"
              class="hidden"
            />
            <label
              for="star5"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>

            <input
              value="4"
              name="rating"
              id="star4"
              type="radio"
              class="hidden"
            />
            <label
              for="star4"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>

            <input
              value="3"
              name="rating"
              id="star3"
              type="radio"
              class="hidden"
            />
            <label
              for="star3"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>
            <input
              value="2"
              name="rating"
              id="star2"
              type="radio"
              class="hidden"
            />
            <label
              for="star2"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>

            <input
              value="1"
              name="rating"
              id="star1"
              type="radio"
              class="hidden"
            />
            <label
              for="star1"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>
          </div>
          <p className=" ml-5 self-center text-[var(--secondary-color)]">
            Inclusion rate
          </p>
          <div class="rating">
            <input
              value="5"
              name="rating"
              id="star5"
              type="radio"
              class="hidden"
            />
            <label
              for="star5"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>

            <input
              value="4"
              name="rating"
              id="star4"
              type="radio"
              class="hidden"
            />
            <label
              for="star4"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>

            <input
              value="3"
              name="rating"
              id="star3"
              type="radio"
              class="hidden"
            />
            <label
              for="star3"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>
            <input
              value="2"
              name="rating"
              id="star2"
              type="radio"
              class="hidden"
            />
            <label
              for="star2"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>

            <input
              value="1"
              name="rating"
              id="star1"
              type="radio"
              class="hidden"
            />
            <label
              for="star1"
              class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
            ></label>
          </div>
        </div>
        <button
          onClick={handleChangeModal}
          className="bg-[var(--primary-color)] w-24 h-10 rounded-md text-[var(--white-color)] self-center"
        >
          Publish
        </button>
      </section>
    </section>
  );
}

export default Modal;
