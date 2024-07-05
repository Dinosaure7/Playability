import { useCallback, useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleChangeModal = useCallback(() => {
    setIsVisible(true);
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsClicked(false);
    }, 1);
  }, [isVisible, isOpen]);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const handleClickModal = useCallback(() => {
    setIsClicked(!isClicked);
  }, [isClicked]);

  const isModalOpen = isOpen ? "modalOpen" : "modalNotOpen";

  const isModalVisible = isVisible ? "block" : "hidden";

  return (
    <section className="absolute z-50 mx-4 h-72 px-4 bg-[var(--white-color)]">
      <input
        className="min-w-56 min-h-10 outline-[var(--nuance3-secondary)] focus-visible:outline-[var(--nuance3-secondary)] bg-slate-100"
        type="text"
      />
      <input
        className="min-w-56 min-h-10 outline-[var(--nuance3-secondary)] focus-visible:outline-[var(--nuance3-secondary)]"
        type="text"
      />
      <input
        className="min-w-56 min-h-10 outline-[var(--nuance3-secondary)] focus-visible:outline-[var(--nuance3-secondary)]"
        type="text"
      />
      <div class="rating">
        <input value="5" name="rating" id="star5" type="radio" class="hidden" />
        <label
          for="star5"
          class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
        ></label>

        <input value="4" name="rating" id="star4" type="radio" class="hidden" />
        <label
          for="star4"
          class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
        ></label>

        <input value="3" name="rating" id="star3" type="radio" class="hidden" />
        <label
          for="star3"
          class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
        ></label>

        <input value="2" name="rating" id="star2" type="radio" class="hidden" />
        <label
          for="star2"
          class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
        ></label>

        <input value="1" name="rating" id="star1" type="radio" class="hidden" />
        <label
          for="star1"
          class="star cursor-pointer float-right text-gray-300 transition duration-300 ease-in-out"
        ></label>
      </div>
    </section>
  );
}

export default Modal;
