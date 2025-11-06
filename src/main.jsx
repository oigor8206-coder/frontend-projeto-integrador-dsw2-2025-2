// src/main.jsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import EncomendasIndex from "./pages/encomendas/EncomendasIndex.jsx";
import EncomendasCreate from "./pages/encomendas/EncomendasCreate.jsx";
import EncomendasShow from "./pages/encomendas/EncomendasShow.jsx";
import EncomendasEdit from "./pages/encomendas/EncomendasEdit.jsx";



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/sobre", element: <Sobre /> },
    { path: "/contato", element: <Contato /> },
    { path: "/encomendas", element: <EncomendasIndex /> },
    { path: "/encomendas/create", element: <EncomendasCreate /> },
    { path: "/encomendas/:id", element: <EncomendasShow /> },
    { path: "/encomendas/:id/edit", element: <EncomendasEdit /> },

]);
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);