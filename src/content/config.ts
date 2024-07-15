import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Anonymous'),
    tags: z.array(z.string()).default([]),
    // Remove the slug field from here if it exists
  }),
});

export const collections = {
  'blog': blogCollection,
};