
import type { MetadataRoute } from "next";

const baseUrl = "https://balikcihalilgeyikli.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    // TÜRKÇE SAYFALAR
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/menu",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/kesfet",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/kesfet/neandria",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kesfet/truva",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kesfet/alexandria-troas",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kesfet/apollon-smintheus",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kesfet/assos",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kesfet/kalpli-gol",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kesfet/kaz-daglari",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kesfet/kocali",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kesfet/babakale",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/kesfet/kestanbol-kaplicalari",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },

    // ENGLISH PAGES
    {
      path: "/en",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/en/menu",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/en/explore",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/en/explore/neandria",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/explore/troy",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/explore/alexandria-troas",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/explore/apollon-smintheus",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/explore/assos",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/explore/kalpli-gol",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/explore/kaz-daglari",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/explore/kocali",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/explore/babakale",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/en/explore/kestanbol-kaplicalari",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
