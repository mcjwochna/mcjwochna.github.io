import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        summary: z.string().optional(),  // ← nowe pole
        priority: z.number().default(99),
    }),
});

export const collections = {
    work: workCollection,
};