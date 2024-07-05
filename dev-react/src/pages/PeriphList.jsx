import PeriphCard from "../components/PeriphCard";
import accessibleControllers from "../data/accessible-controllers.json";

function PeriphList() {
  return (
    <>
      <h1>
        The best accessible video game peripherals recommended by our experts
      </h1>
      <section className="flex flex-wrap justify-center mb-10">
        {accessibleControllers.map((controller) => (
          <PeriphCard controller={controller} />
        ))}
      </section>
    </>
  );
}

export default PeriphList;
