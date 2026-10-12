import github from "../assets/github-logo.png";
import google from "../assets/Frame 22.png";
import axios from "axios";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router";

const SignupForms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const users = { name, email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        users,
      );
      console.log(res);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
      setName("");
      setPassword("");
      setEmail("");
    }
  };

  const inputClass =
    "w-full h-[3.2rem] px-4 rounded-xl border border-gray-200 bg-gray-50 text-[0.95rem] text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#00539C] focus:bg-white focus:ring-4 focus:ring-[#00539C]/10";

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* En-tête */}
      <div className="w-full max-w-md mb-8 text-center">
        <h1 className="text-[2rem] font-extrabold text-gray-900 tracking-tight">
          Créer un compte
        </h1>
        <p className="mt-2 text-[0.95rem] text-gray-500">
          Rejoignez-nous en quelques secondes
        </p>
      </div>

      <form
        className="w-full max-w-md flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-[0.9rem] font-semibold text-gray-700"
          >
            Nom complet
          </label>
          <input
            className={inputClass}
            type="text"
            name="name"
            value={name}
            id="name"
            onChange={handleName}
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-[0.9rem] font-semibold text-gray-700"
          >
            Adresse email
          </label>
          <input
            className={inputClass}
            type="email"
            value={email}
            onChange={handleEmail}
            name="email"
            id="email"
            placeholder="abc@example.com"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-[0.9rem] font-semibold text-gray-700"
          >
            Mot de passe
          </label>
          <input
            className={inputClass}
            type="password"
            value={password}
            onChange={handlePassword}
            name="password"
            id="password"
            placeholder="••••••••••"
          />
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex-1 h-[0.35rem] bg-[#FFA273] rounded-full"></div>
          <div className="flex-1 h-[0.35rem] bg-[#E4E4E7] rounded-full"></div>
          <div className="flex-1 h-[0.35rem] bg-[#E4E4E7] rounded-full"></div>
          <div className="flex-1 h-[0.35rem] bg-[#E4E4E7] rounded-full"></div>
        </div>

        <div className="flex items-center gap-4 my-1">
          <div className="flex-1 h-px bg-gray-200"></div>
          <p className="text-[0.85rem] text-gray-400 font-medium whitespace-nowrap">
            Ou avec
          </p>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="flex gap-3 w-full">
          <button
            type="button"
            className="flex-1 py-3 text-[0.95rem] font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl flex gap-2 items-center justify-center transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm active:scale-[0.98]"
          >
            <img src={github} alt="github" className="w-5 h-5" />
            <span>GitHub</span>
          </button>
          <button
            type="button"
            className="flex-1 py-3 text-[0.95rem] font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl flex gap-2 items-center justify-center transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm active:scale-[0.98]"
          >
            <img src={google} alt="google" className="w-5 h-5" />
            <span>Google</span>
          </button>
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
              <span>Chargement...</span>
            </>
          ) : (
            "Créer le compte"
          )}
        </button>

        {error && (
          <div className="w-full px-4 py-3 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 text-center text-[0.9rem] font-medium">
              {error}
            </p>
          </div>
        )}

        <p className="text-center text-[0.9rem] text-gray-500 mt-2">
          Vous avez déjà un compte ?{" "}
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="text-[#00539C] font-semibold hover:underline"
          >
            Se connecter
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignupForms;
