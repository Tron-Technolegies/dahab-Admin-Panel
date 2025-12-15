import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";

function LazyLoadToastContainer() {
  useEffect(() => {
    import("react-toastify/dist/ReactToastify.css");
  }, []);

  return <ToastContainer position="top-center" />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <LazyLoadToastContainer />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
