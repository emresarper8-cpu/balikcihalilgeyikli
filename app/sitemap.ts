
import type { MetadataRoute } from "next";

const baseUrl = "https://balikcihalilgeyikli.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
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
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
