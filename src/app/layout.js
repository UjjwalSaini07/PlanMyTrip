import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PlanMyTrip: Smart AI Trip Planner",
  description:
    "Plan your perfect trip in seconds with our AI Trip Planner 🌍. Get personalized itineraries, smart recommendations, and real-time updates—effortless travel planning for any destination ✈️. Save time, explore more, and enjoy stress-free adventures!",
  applicationName: "PlanMyTrip",
  authors: [{ name: "UjjwalS" }],
  keywords: [
    "PlanMyTrip", "AI Trip Planner", "travel planning", "itineraries", "smart travel", "vacation planning",
    "trip automation", "personalized travel", "real-time updates", "travel assistant",
    "Next.js", "React.js", "TailwindCSS", "Docker", "AI travel", "travel recommendations", "travel app", "travel technology"
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  themeColor: "#000000",
  referrer: "origin-when-cross-origin",
  category: "travel",
  metadataBase: new URL("http://localhost:3000/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PlanMyTrip: Smart AI Trip Planner",
    description:
      "Discover the future of travel with PlanMyTrip 🌍 — your intelligent travel assistant. Instantly generate custom itineraries, explore smart recommendations, and get real-time updates for stress-free adventures.",
    url: "http://localhost:3000/",
    authors: [{ name: "UjjwalS" }],
    siteName: "PlanMyTrip",
    images: [
      {
        url: "/PlanMyTripLogo.png",
        width: 800,
        height: 600,
        alt: "PlanMyTrip Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlanMyTrip: Smart AI Trip Planner",
    description:
      "Plan the perfect getaway in seconds ✈️. With AI-powered itineraries, real-time updates, and personalized travel recommendations, PlanMyTrip makes your journey effortless.",
    creator: "@UjjwalSaini0007",
    site: "@PlanMyTripAI",
    images: ["/PlanMyTripLogo.png"],
  },
  other: {
    "rating": "General",
    "distribution": "Global",
    "copyright": "PlanMyTrip ©2025",
    "apple-mobile-web-app-title": "PlanMyTrip",
    "apple-mobile-web-app-capable": "yes",
    "http-equiv": "IE=edge",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastContainer position="bottom-right" autoClose={5000} />
      </body>
    </html>
  );
}
