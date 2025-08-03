import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedTime: z.date(),
      modifiedTime: z.date().optional(),
      author: z.string(),
      section: z.string(),
      tags: z.array(z.string()),
      image: image().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
