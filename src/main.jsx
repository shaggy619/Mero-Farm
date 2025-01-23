import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext";
import FarmProvider from "./context/FarmContext";
import { ProfileProvider } from "./context/ProfileContext";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <ProfileProvider>
      <FarmProvider>
        <App />
      </FarmProvider>
    </ProfileProvider>
  </AppProvider>
);
