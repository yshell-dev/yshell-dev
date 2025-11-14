import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
  schema: ({ image }) =>
    z.object({
      title: z
        .string()
        .max(
          60,
          'Title should be 60 characters or less for optimal Open Graph display.',
        ),
      slug: z
        .string()
        .max(
          60,
          'Title should be 60 characters or less for optimal Open Graph display.',
        ),
      description: z
        .string()
        .max(
          155,
          'Description should be 155 characters or less for optimal Open Graph display.',
        ),
      date: z.coerce.date(),
      image: image(),
      authors: z.array(z.string()),
      work: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean(),
    }),
})
const shot = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/shots' }),
  schema: ({ image }) =>
    z.object({
      title: z
        .string()
        .max(
          60,
          'Title should be 60 characters or less for optimal Open Graph display.',
        ),
      slug: z
        .string()
        .max(
          60,
          'Title should be 60 characters or less for optimal Open Graph display.',
        ),
      description: z
        .string()
        .max(
          155,
          'Description should be 155 characters or less for optimal Open Graph display.',
        ),
      date: z.coerce.date(),
      cover: image(),
      pages: z.array(image()).optional(),
      author: z.string(),
      draft: z.boolean(),
    }),
})
const mention = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/mentions' }),
  schema: z.object({
    title: z
      .string()
      .max(
        60,
        'Title should be 60 characters or less for optimal Open Graph display.',
      ),
    slug: z
      .string()
      .max(
        60,
        'Title should be 60 characters or less for optimal Open Graph display.',
      ),
    description: z
      .string()
      .max(
        155,
        'Description should be 155 characters or less for optimal Open Graph display.',
      ),
    pronouns: z.string(),
    avatar: z.string(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
  }),
})
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z
        .string()
        .max(
          60,
          'Title should be 60 characters or less for optimal Open Graph display.',
        ),
      slug: z
        .string()
        .max(
          60,
          'Title should be 60 characters or less for optimal Open Graph display.',
        ),
      description: z
        .string()
        .max(
          155,
          'Description should be 155 characters or less for optimal Open Graph display.',
        ),
      version: z.string(),
      logo: image(),
      cover: image(),
      date: z.coerce.date(),
      contributors: z.array(z.string()),
      website: z.string().url().optional(),
      github: z.string().url().optional(),
      discord: z.string().url().optional(),
      draft: z.boolean(),
    }),
})
export const collections = { blog, shot, mention, work }
