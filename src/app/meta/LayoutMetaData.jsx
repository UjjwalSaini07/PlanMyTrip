import React from "react";

const metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  httpEquiv: "IE=edge",
  description:
    "Plan your perfect trip in seconds with our AI Trip Planner 🌍. Get personalized itineraries, smart recommendations, and real-time updates—effortless travel planning for any destination ✈️. Save time, explore more, and enjoy stress-free adventures!",
  author: "UjjwalS",
  keywords:
    "PlanMyTrip, AI Trip Planner, travel planning, itineraries, smart travel, vacation planning, trip automation, personalized travel, real-time updates, travel assistant, Next.js, React.js, TailwindCSS, Docker, AI travel, travel recommendations, travel app, travel technology",
  ogTitle: "PlanMyTrip: Smart AI Trip Planner",
  ogDescription:
    "Discover the future of travel with PlanMyTrip 🌍 — your intelligent travel assistant. Instantly generate custom itineraries, explore smart recommendations, and get real-time updates for stress-free adventures.",
  ogImage: "/PlanMyTripLogo.png",
  ogUrl: "http://localhost:3000/",
  ogType: "website",
  ogLocale: "en_US",
  ogSiteName: "PlanMyTrip",
  twitterCard: "summary_large_image",
  twitterTitle: "PlanMyTrip: Smart AI Trip Planner",
  twitterDescription:
    "Plan the perfect getaway in seconds ✈️. With AI-powered itineraries, real-time updates, and personalized travel recommendations, PlanMyTrip makes your journey effortless.",
  twitterImage: "/PlanMyTripLogo.png",
  twitterSite: "@PlanMyTripAI",
  twitterCreator: "@UjjwalSaini0007",
  canonical: "http://localhost:3000/",
  robots: "index, follow",
  themeColor: "#",
  rating: "General",
  distribution: "Global",
  copyright: "PlanMyTrip ©2025",
  applicationName: "PlanMyTrip",
  appleMobileWebAppTitle: "PlanMyTrip",
  appleMobileWebAppCapable: "yes",
};

function LayoutMetaData({ children }) {
  React.useEffect(() => {
    document.title = metadata.ogTitle;

    function upsertMeta(attrName, attrValue, content) {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }

    // Basic Meta Tags
    upsertMeta("name", "viewport", metadata.viewport);
    upsertMeta("http-equiv", "X-UA-Compatible", metadata.httpEquiv);
    upsertMeta("name", "description", metadata.description);
    upsertMeta("name", "author", metadata.author);
    upsertMeta("name", "keywords", metadata.keywords);
    upsertMeta("name", "robots", metadata.robots);
    upsertMeta("name", "theme-color", metadata.themeColor);
    upsertMeta("name", "rating", metadata.rating);
    upsertMeta("name", "distribution", metadata.distribution);
    upsertMeta("name", "copyright", metadata.copyright);
    upsertMeta("name", "application-name", metadata.applicationName);
    upsertMeta("name", "apple-mobile-web-app-title", metadata.appleMobileWebAppTitle);
    upsertMeta("name", "apple-mobile-web-app-capable", metadata.appleMobileWebAppCapable);

    // Open Graph
    upsertMeta("property", "og:title", metadata.ogTitle);
    upsertMeta("property", "og:description", metadata.ogDescription);
    upsertMeta("property", "og:image", metadata.ogImage);
    upsertMeta("property", "og:url", metadata.ogUrl);
    upsertMeta("property", "og:type", metadata.ogType);
    upsertMeta("property", "og:locale", metadata.ogLocale);
    upsertMeta("property", "og:site_name", metadata.ogSiteName);

    // Twitter Cards
    upsertMeta("name", "twitter:card", metadata.twitterCard);
    upsertMeta("name", "twitter:title", metadata.twitterTitle);
    upsertMeta("name", "twitter:description", metadata.twitterDescription);
    upsertMeta("name", "twitter:image", metadata.twitterImage);
    upsertMeta("name", "twitter:site", metadata.twitterSite);
    upsertMeta("name", "twitter:creator", metadata.twitterCreator);

    // Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", metadata.canonical);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] bg-cover to-muted/80 p-2 py-10 flex flex-col justify-between">
      {children}
    </div>
  );
}

export default LayoutMetaData;
