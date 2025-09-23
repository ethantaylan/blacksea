export function Hero() {
  return (
    <div className="hero min-h-[70vh]">
      <div className="hero-content max-w-full">
        <div>
          <h1 className="text-6xl font-bold">Construisez, avec nous</h1>
          <p className="py-6 w-7/12 text-neutral-500 text-2xl">
            Blacksea est une agence web qui crée des sites modernes et de haute
            qualité pour les entreprises souhaitant se démarquer en ligne.
          </p>
          <h2 className="text-2xl">Débloquez votre potentiel dès maintenant</h2>

          <div className="flex gap-3">
            <button className="btn w-56 btn-lg btn-primary rounded-full mt-8">
              Contact
            </button>
            <button className="btn w-56 btn-lg rounded-full mt-8">
              Réalisations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
