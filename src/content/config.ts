import { defineCollection, z } from 'astro:content';
import { tags } from '../data/tags';

// Create an array of valid tag slugs
const validTags = tags.map(tag => tag.slug);

// Create a union type of all valid tags
type ValidTag = typeof validTags[number];

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Anonymous'),
    tags: z.array(z.enum(validTags as [ValidTag, ...ValidTag[]])).default([]),
  }),
});

export const collections = {
  'blog': blogCollection,
};