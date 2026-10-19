import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import LoginForms from "./composants/LoginForms.jsx";
import Home from "./Home.jsx";
import ArticlesForms from "./composants/ArticlesForms.jsx";
import SignupForms from "./composants/SignupForms.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_ID_CLIENT =
  "613211982569-chph96397j4d49jv3hgdt8ureovpsbdi.apps.googleusercontent.com";

const myRoute = createBrowserRouter([
  { path: "/login", element: <LoginForms></LoginForms> },
  { path: "/signup", element: <SignupForms /> },
  { path: "/home", element: <Home /> },
  { path: "/", element: <App /> },
  { path: "/articles", element: <ArticlesForms /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_ID_CLIENT}>
      <RouterProvider router={myRoute} />
    </GoogleOAuthProvider>
  </StrictMode>,
);
