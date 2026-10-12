import axios from "axios";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router";

const ArticlesForms = () => {
  const [titre, settitre] = useState("");
  const [auteur, setauteur] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handletitre = (e) => {
    settitre(e.target.value);
  };

  const handleauteur = (e) => {
    setauteur(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const article = { titre, auteur, description };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/articles",
        article,
      );
      console.log(res);

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
      settitre("");
      setauteur("");
      setDescription("");
    }
  };

  const inputClass =
    "w-full h-[3.2rem] px-4 rounded-xl border border-gray-200 bg-gray-50 text-[0.95rem] text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#00539C] focus:bg-white focus:ring-4 focus:ring-[#00539C]/10";

  const textareaClass =
    "w-full min-h-[10rem] px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[0.95rem] text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#00539C] focus:bg-white focus:ring-4 focus:ring-[#00539C]/10 resize-y";

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* En-tête */}
      <div className="w-full max-w-2xl mb-8 text-center">
        <h1 className="text-[2rem] font-extrabold text-gray-900 tracking-tight">
          Nouvel article ✍️
        </h1>
        <p className="mt-2 text-[0.95rem] text-gray-500">
          Partagez vos idées avec la communauté
        </p>
      </div>

      <form
        className="w-full max-w-2xl flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        {/* Titre */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="titre"
            className="text-[0.9rem] font-semibold text-gray-700"
          >
            Titre de l'article
          </label>
          <input
            className={inputClass}
            type="text"
            name="titre"
            value={titre}
            id="titre"
            onChange={handletitre}
            placeholder="Ex : Les meilleures pratiques React en 2026"
          />
        </div>

        {/* Auteur */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="auteur"
            className="text-[0.9rem] font-semibold text-gray-700"
          >
            Auteur
          </label>
          <input
            className={inputClass}
            type="text"
            name="auteur"
            value={auteur}
            id="auteur"
            onChange={handleauteur}
            placeholder="Ex : John Doe"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="description"
              className="text-[0.9rem] font-semibold text-gray-700"
            >
              Description
            </label>
            <span
              className={`text-[0.75rem] font-medium transition-colors ${
                description.length > 500 ? "text-red-500" : "text-gray-400"
              }`}
            >
              {description.length} / 500
            </span>
          </div>
          <textarea
            className={textareaClass}
            name="description"
            value={description}
            id="description"
            onChange={handleDescription}
            placeholder="Rédigez le contenu de votre article ici..."
            rows={6}
          />
        </div>

        {/* Séparateur */}
        <div className="flex items-center gap-4 my-1">
          <div className="flex-1 h-px bg-gray-200"></div>
          <p className="text-[0.85rem] text-gray-400 font-medium whitespace-nowrap">
            Aperçu avant publication
          </p>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Bouton submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 py-3.5 w-full bg-[#00539C] rounded-xl text-center text-white font-bold text-[1rem] tracking-wide transition-all duration-200 hover:bg-[#00427d] hover:shadow-lg hover:shadow-[#00539C]/25 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <ClipLoader size={16} color="white" />
              <span>Publication...</span>
            </>
          ) : (
            "Publier l'article"
          )}
        </button>

        {/* Message d'erreur */}
        {error && (
          <div className="w-full px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 text-center text-[0.9rem] font-medium">
              {error}
            </p>
          </div>
        )}

        {/* Lien annuler */}
        <p className="text-center text-[0.9rem] text-gray-500 mt-2">
          Vous voulez annuler ?{" "}
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="text-[#00539C] font-semibold hover:underline"
          >
            Retour aux articles
          </button>
        </p>
      </form>
    </div>
  );
};

export default ArticlesForms;
