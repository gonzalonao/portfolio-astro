import { defineCollection, z } from 'astro:content';

const projectSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  summary: z.string(),
  date: z.coerce.date(),
  featured: z.boolean().default(false),
  order: z.number().default(99),
  tags: z.array(z.string()).default([]),
  githubUrl: z.string().url().optional(),
  liveDemoUrl: z.string().url().optional(),
  coverImage: z.string().optional(),
  status: z.enum(['completed', 'in-progress']),
});

const projects = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const projectsEs = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  readingMinutes: z.number().default(10),
  tags: z.array(z.string()).default([]),
  // Slug of the related project (links the article back to its case study).
  project: z.string().optional(),
  draft: z.boolean().default(false),
});

const writing = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const writingEs = defineCollection({
  type: 'content',
  schema: articleSchema,
});

export const collections = { projects, projectsEs, writing, writingEs };
