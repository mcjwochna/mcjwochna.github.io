import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        summary: z.string(),
        tags: z.array(z.string()),
        image: image(),
        imageAlt: z.string(),
        priority: z.number().default(99),

        context: z.string(),
        problem: z.string(),
        constraints: z.array(z.string()),
        decisions: z.array(z.object({
            title: z.string(),
            description: z.string(),
        })),
        outcome: z.array(z.string()),
        lessons: z.string().optional(),

        embedUrl: z.url().optional(),
    }),
});

export const collections = { work };
