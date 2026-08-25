import type { MetadataRoute } from "next";

const baseUrl = "https://emkurutemizleme.com";

const services = [
  "kuru-temizleme",
  "utuleme",
  "ev-tekstili",
  "hali-yikama",
  "lostra",
  "canta-temizleme",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },

    ...services.map((slug) => ({
      url: `${baseUrl}/hizmetler/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}