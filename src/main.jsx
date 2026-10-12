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

const myRoute = createBrowserRouter([
  { path: "/login", element: <LoginForms></LoginForms> },
  { path: "/signup", element: <SignupForms /> },
  { path: "/home", element: <Home /> },
  { path: "/", element: <App /> },
  { path: "/articles", element: <ArticlesForms /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRoute} />
  </StrictMode>,
);
