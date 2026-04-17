import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import App from "./App.tsx";
import "./index.css";

posthog.init("phc_chP3JzWbPYs8btrHx7jqbzSczwzi7oeCjtLYtRbgoeB", {
  api_host: "https://us.i.posthog.com",
  person_profiles: "identified_only",
  capture_pageview: true,
  loaded: async (ph) => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      if (res.ok) {
        const data = await res.json();
        const locationProps = {
          ip: data.ip,
          city: data.city,
          region: data.region,
          country: data.country_name,
          country_code: data.country_code,
          postal: data.postal,
          latitude: data.latitude,
          longitude: data.longitude,
          timezone: data.timezone,
          org: data.org,
        };
        ph.register(locationProps);
        ph.capture("location_detected", locationProps);
        console.log("[PostHog] Location tracked:", data.city, data.country_name);
      }
    } catch (err) {
      console.warn("[PostHog] Location lookup failed", err);
    }
    console.log("[PostHog] Initialized");
  },
});

createRoot(document.getElementById("root")!).render(<App />);
