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

export const collections = { projects, projectsEs };
