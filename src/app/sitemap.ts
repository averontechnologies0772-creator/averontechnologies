import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://averontechnologiesllc.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/services/it-staffing",
    "/services/contract-staffing",
    "/services/permanent-placement",
    "/expertise",
    "/clients",
    "/candidates",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const buildDate = new Date("2026-10-13T00:00:00Z");

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
