import { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      const Token = localStorage.getItem("Token");

      try {
        const res = await axios.get("http://localhost:3000/api/articles", {
          headers: { Authorization: `Bearer ${Token}` },
        });
        // console.log(res);

        setArticles(res.data.articles);
      } catch (error) {
        // console.error(error.response?.data);
        setError(error.response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticle();
  }, []);

  // Formate la date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Tronque la description
  const truncate = (text, max = 140) => {
    if (!text) return "";
    return text.length > max ? text.slice(0, max).trim() + "..." : text;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-gray-50 to-white px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-gray-900 tracking-tight">
              Bonjour 👋
            </h1>
            <p className="mt-2 text-[1rem] text-gray-500">
              Découvrez les derniers articles publiés par la communauté
            </p>
          </div>

          <button
            onClick={() => navigate("/articles")}
            className="self-start md:self-auto px-6 py-3 text-[0.95rem] font-bold text-white bg-[#00539C] rounded-xl hover:bg-[#00427d] hover:shadow-lg hover:shadow-[#00539C]/25 transition-all duration-200 active:scale-[0.98] flex items-center gap-2"
          >
            <span className="text-[1.2rem] leading-none">+</span>
            Nouvel article
          </button>
        </div>

        {/* Error*/}
        {error && (
          <div className="w-full px-4 py-3 mb-6 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 text-center text-[0.9rem] font-medium">
              {error}
            </p>
          </div>
        )}

        {/* Loading*/}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <ClipLoader size={40} color="#00539C" />
            <p className="text-[0.9rem] text-gray-500 font-medium">
              Chargement des articles...
            </p>
          </div>
        )}

        {/* Aucun Articles */}
        {!isLoading && !error && articles.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-2xl bg-[#00539C]/10 flex items-center justify-center text-[2.5rem] mb-6">
              📝
            </div>
            <h3 className="text-[1.3rem] font-bold text-gray-900 mb-2">
              Aucun article pour le moment
            </h3>
            <p className="text-[0.95rem] text-gray-500 max-w-md mb-6">
              Soyez le premier à partager vos idées avec la communauté.
            </p>
            <button
              onClick={() => navigate("/articles")}
              className="px-6 py-3 text-[0.95rem] font-bold text-white bg-[#00539C] rounded-xl hover:bg-[#00427d] hover:shadow-lg hover:shadow-[#00539C]/25 transition-all duration-200 active:scale-[0.98]"
            >
              Créer le premier article
            </button>
          </div>
        )}

        {/* Articles */}
        {!isLoading && articles.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-[0.9rem] text-gray-500 font-medium">
                {articles.length} article{articles.length > 1 ? "s" : ""}{" "}
                disponible{articles.length > 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <article
                  key={article.id || index}
                  className="group flex flex-col p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#00539C]/30 hover:shadow-lg hover:shadow-[#00539C]/5 transition-all duration-200 cursor-pointer"
                  onClick={() => navigate(`/home`)}
                >
                  {/* auteur */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#00539C]/10 flex items-center justify-center">
                      <span className="text-[0.8rem] font-bold text-[#00539C]">
                        {article.auteur?.charAt(0)?.toUpperCase() || "?"}
                      </span>
                    </div>
                    <span className="text-[0.85rem] font-medium text-gray-600">
                      {article.auteur}
                    </span>
                  </div>

                  {/* Titre */}
                  <h2 className="text-[1.15rem] font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#00539C] transition-colors">
                    {article.titre}
                  </h2>

                  {/* Description */}
                  <p className="text-[0.9rem] text-gray-500 leading-relaxed flex-1 line-clamp-3">
                    {truncate(article.description, 140)}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                    <span className="text-[0.8rem] text-gray-400">
                      {formatDate(article.createdAt || article.date)}
                    </span>
                    <span className="text-[0.85rem] font-semibold text-[#00539C] group-hover:translate-x-1 transition-transform">
                      Lire →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
