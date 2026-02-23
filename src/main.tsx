import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import App from "./App.tsx";
import "./index.css";

posthog.init("phc_chP3JzWbPYs8btrHx7jqbzSczwzi7oeCjtLYtRbgoeB", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only",
});

createRoot(document.getElementById("root")!).render(<App />);
