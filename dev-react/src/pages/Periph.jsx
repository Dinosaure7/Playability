import { useParams } from "react-router-dom";
import CardComment from "../components/CardComment";
import Return from "../components/Return";
import accessibleControllers from "../data/accessible-controllers.json";
import { reviewsUser } from "../service/review";

function Periph() {
  const { id } = useParams();
  const periphData = accessibleControllers[id - 1];

  return (
    <main>
      <div className="my-5 ml-10">
        <Return />
      </div>
      <iframe
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${periphData.youtubeID}?autoplay=0`}
        style={{ width: "100%", height: "500px" }}
      />
      <div className="flex flex-col gap-4 p-7">
        <h1 className="text-[var(--white-color)] mt-4">{periphData.name}</h1>
        <h2 className="text-[var(--white-color)] text-3xl mt-8">Summary</h2>
        <p className="text-[var(--white-color)] mt-4">
          {periphData.description}
        </p>
        <div className="flex flex-col gap-4">
          <h2 className="mt-10 md:text-3xl text-2xl">Plateforms</h2>
          <p className="text-[var(--nuance3-secondary)] mb-5">
            {periphData.compatibility}
          </p>
        </div>
      </div>
      <div className="mb-10 px-10 mt-10 flex gap-8 overflow-x-scroll no-scrollbar">
        {reviewsUser.slice(-5).map((review, index) => (
          <CardComment
            key={index}
            name={review.name}
            comment={review.comment}
            accessibility={review.accessibility}
            inclusivity={review.inclusivity}
          />
        ))}
      </div>
    </main>
  );
}

export default Periph;
