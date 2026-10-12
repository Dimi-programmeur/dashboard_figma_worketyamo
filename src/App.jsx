import { useNavigate } from "react-router";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-gray-50 to-white flex flex-col">
      {/* ============ NAVBAR ============ */}
      <nav className="w-full px-6 md:px-12 py-5 flex items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-[#00539C] flex items-center justify-center">
            <span className="text-white font-extrabold text-[1.1rem]">D</span>
          </div>
          <span className="text-[1.3rem] font-extrabold text-gray-900 tracking-tight">
            DIMITRI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-[0.95rem] font-medium text-gray-600 hover:text-[#00539C] transition-colors"
          >
            Fonctionnalités
          </a>
          <a
            href="#about"
            className="text-[0.95rem] font-medium text-gray-600 hover:text-[#00539C] transition-colors"
          >
            À propos
          </a>
          <a
            href="#contact"
            className="text-[0.95rem] font-medium text-gray-600 hover:text-[#00539C] transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2.5 text-[0.9rem] font-semibold text-gray-700 rounded-xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-[0.98]"
          >
            Connexion
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2.5 text-[0.9rem] font-semibold text-white bg-[#00539C] rounded-xl hover:bg-[#00427d] hover:shadow-lg hover:shadow-[#00539C]/25 transition-all duration-200 active:scale-[0.98]"
          >
            S'inscrire
          </button>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section className="flex-1 px-6 md:px-12 py-16 md:py-24 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-[#00539C]/10 border border-[#00539C]/20">
          <span className="w-2 h-2 rounded-full bg-[#00539C] animate-pulse"></span>
          <span className="text-[0.8rem] font-semibold text-[#00539C]">
            Nouveau · Version 1.0 disponible
          </span>
        </div>

        <h1 className="max-w-3xl text-[2.5rem] md:text-[3.5rem] font-extrabold text-gray-900 leading-tight tracking-tight">
          Gérez vos projets avec{" "}
          <span className="text-[#00539C]">simplicité</span> et{" "}
          <span className="text-[#FFA273]">élégance</span>
        </h1>

        <p className="mt-6 max-w-2xl text-[1rem] md:text-[1.1rem] text-gray-500 leading-relaxed">
          Une plateforme moderne conçue pour vous aider à organiser, collaborer
          et livrer vos idées plus rapidement. Rejoignez des milliers
          d'utilisateurs satisfaits.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3.5 text-[1rem] font-bold text-white bg-[#00539C] rounded-xl hover:bg-[#00427d] hover:shadow-lg hover:shadow-[#00539C]/25 transition-all duration-200 active:scale-[0.99]"
          >
            Commencer gratuitement
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3.5 text-[1rem] font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-[0.99]"
          >
            J'ai déjà un compte
          </button>
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 max-w-3xl w-full">
          {[
            { value: "10K+", label: "Utilisateurs actifs" },
            { value: "50K+", label: "Projets créés" },
            { value: "99.9%", label: "Disponibilité" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-[2rem] font-extrabold text-[#00539C]">
                {stat.value}
              </span>
              <span className="mt-1 text-[0.9rem] text-gray-500 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section
        id="features"
        className="px-6 md:px-12 py-16 md:py-24 bg-gray-50/50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[2rem] md:text-[2.5rem] font-extrabold text-gray-900 tracking-tight">
              Tout ce dont vous avez besoin
            </h2>
            <p className="mt-3 text-[1rem] text-gray-500 max-w-xl mx-auto">
              Des fonctionnalités puissantes pensées pour vous faire gagner du
              temps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Rapide & performant",
                desc: "Une expérience fluide grâce à une architecture optimisée.",
              },
              {
                icon: "🔒",
                title: "Sécurisé",
                desc: "Vos données sont chiffrées et protégées en permanence.",
              },
              {
                icon: "🎨",
                title: "Design soigné",
                desc: "Une interface élégante et intuitive pour tous.",
              },
              {
                icon: "☁️",
                title: "Synchronisation cloud",
                desc: "Accédez à vos projets depuis n'importe quel appareil.",
              },
              {
                icon: "👥",
                title: "Collaboration",
                desc: "Travaillez en équipe en temps réel, sans friction.",
              },
              {
                icon: "📊",
                title: "Analyses claires",
                desc: "Suivez vos performances avec des tableaux de bord.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#00539C]/30 hover:shadow-lg hover:shadow-[#00539C]/5 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00539C]/10 flex items-center justify-center text-[1.5rem] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-[1.1rem] font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[0.9rem] text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-[#00539C] to-[#003d73] shadow-xl">
          <h2 className="text-[2rem] md:text-[2.5rem] font-extrabold text-white tracking-tight">
            Prêt à démarrer ?
          </h2>
          <p className="mt-4 text-[1rem] text-white/80 max-w-xl mx-auto">
            Créez votre compte gratuitement et commencez à utiliser notre
            plateforme dès aujourd'hui.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="mt-8 px-8 py-3.5 text-[1rem] font-bold text-[#00539C] bg-white rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-200 active:scale-[0.99]"
          >
            Créer mon compte
          </button>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="px-6 md:px-12 py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#00539C] flex items-center justify-center">
              <span className="text-white font-extrabold text-[0.9rem]">D</span>
            </div>
            <span className="text-[0.9rem] font-bold text-gray-900">
              DIMITRI
            </span>
          </div>
          <p className="text-[0.85rem] text-gray-400">
            © {new Date().getFullYear()} DIMITRI . Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[0.85rem] text-gray-500 hover:text-[#00539C] transition-colors"
            >
              Confidentialité
            </a>
            <a
              href="#"
              className="text-[0.85rem] text-gray-500 hover:text-[#00539C] transition-colors"
            >
              Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
