function Home() {
      return (
    <main>
      <h1 className="text-center text-2x1 text-[var(--white-color)] font-bold lg:text-4xl">Playability</h1>
      <section className="flex flex-col text-[var(--white-color)] text-sm gap-11">
        <article className="bg-[var(--primary-color-opacity)]  min-h-32  p-10 rounded-xl mr-10 ml-10">
        <p>Chez Playability, nous croyons que le jeu vidéo doit être une expérience universelle, accessible à tous, quels que soient les défis ou les handicaps que chacun peut rencontrer. </p>
        </article>
        <article className="flex items-center bg-[var(--nuance3-secondary-opacity)] min-h-32 p-7 rounded-xl mr-10 ml-10">
          <h2 className="text-6xl">91%</h2>
          <p className="ml-3">C’est le taux de personnes en situation de handicap qui sont freinées ou bloquées dans leur accès aux jeux vidéo.</p>
        </article>
        <article className="bg-[var(--nuance2-secondary-opacity)] min-h-32 p-7 rounded-xl mb-10 mr-10 ml-10">
          <p>Notre mission est de sensibiliser, évaluer et promouvoir l'accessibilité dans le monde du jeu vidéo pour que chaque joueur puisse profiter pleinement de cette forme d'art et de divertissement.</p>
        </article>
      </section>
      </main>
        );
    }
    
    export default Home;
    
    