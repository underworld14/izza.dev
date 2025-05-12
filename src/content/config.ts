import { defineCollection, z } from 'astro:content';

// Define the schema for the blog collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform(str => new Date(str)),
    categories: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};
