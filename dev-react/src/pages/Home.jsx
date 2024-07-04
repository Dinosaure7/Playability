function Home() {
      return (
    <main>
      <h1 className="text-center text-2x1 text-[var(--white-color)] font-bold lg:text-6xl" aria-label="Playability">Playability</h1>
      <section className="flex flex-col text-[var(--white-color)] text-sm 
    gap-11 lg:text-4xl lg:gap-32" aria-label="Playability Mission Statement">
        <article className="bg-[var(--primary-color-opacity)] min-h-32 p-12 rounded-xl mt-4 mr-10 ml-10 lg:mt-11 lg:mr-32 lg:ml-32 lg:min-h-44" aria-labelledby="Le jeu vidéo est une expérience universelle">
        <p>Chez Playability, nous croyons que le jeu vidéo doit être une expérience universelle, accessible à tous, quels que soient les défis ou les handicaps que chacun peut rencontrer. </p>
        </article>
        <article className="flex items-center bg-[var(--nuance3-secondary-opacity)] min-h-32 p-12 rounded-xl mr-10 ml-10  lg:mt-11 lg:mr-32 lg:ml-32 lg:min-h-44"aria-labelledby="statistiques">
          <h2 className="text-6xl lg:text-8x1" aria-label="Pourcentage de personnes avec un handicap freinés dans l'accès au jeu">91%</h2>
          <p className="ml-3 lg:ml-6">C’est le taux de personnes en situation de handicap qui sont freinées ou bloquées dans leur accès aux jeux vidéo.</p>
        </article>
        <article className="bg-[var(--nuance2-secondary-opacity)] min-h-32 p-12 rounded-xl mb-14 mr-10 ml-10 lg:mt-11 lg:mr-32 lg:ml-32 lg:min-h-44">
          <p>Notre mission est de sensibiliser, évaluer et promouvoir l'accessibilité dans le monde du jeu vidéo pour que chaque joueur puisse profiter pleinement de cette forme d'art et de divertissement.</p>
        </article>
      </section>
      </main>
        );
    }
    
    export default Home;
    