import { useGitHubLogin } from "@react-oauth/github";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const GitHubLoginButton = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { initiateGitHubLogin, isLoading } = useGitHubLogin({
    clientId: "Ov23liEv0ObUM5nbjL6r",
    redirectUri: "http://localhost:5173/auth/github/callback", // ⚠️ Doit correspondre à ce que tu as mis dans GitHub OAuth App
    onSuccess: async (response) => {
      try {
        setIsSubmitting(true);
        const res = await axios.post("http://localhost:3000/api/auth/github", {
          code: response.code,
        });
        console.log("Connexion GitHub réussie :", res.data);

        const token = res.data.token;

        localStorage.setItem("Token", token);
        navigate("/home");

        // Ici, tu peux stocker les tokens renvoyés par ton backend
      } catch (error) {
        console.error(
          "Erreur Backend : ",
          error.response?.data || error.message,
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    onError: (error) => {
      console.error("Erreur GitHub OAuth : ", error);
    },
  });

  const isButtonDisabled = isLoading || isSubmitting;

  return (
    <button
      type="button"
      onClick={initiateGitHubLogin}
      disabled={isButtonDisabled}
      style={{
        width: "100%",
        padding: "12px 24px",
        backgroundColor: "#24292e",
        color: "white",
        border: "none",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: isButtonDisabled ? "not-allowed" : "pointer",
        fontSize: "16px",
        fontWeight: "500",
        opacity: isButtonDisabled ? 0.7 : 1,
      }}
    >
      <FaGithub size={20} />
      {isLoading
        ? "Connexion..."
        : isSubmitting
          ? "Vérification..."
          : "Se connecter avec GitHub"}
    </button>
  );
};

export default GitHubLoginButton;
