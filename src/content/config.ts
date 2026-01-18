import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        // Core metadata
        title: z.string(),
        summary: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        priority: z.number().default(99),
        
        // Case study structure
        context: z.string(),
        problem: z.string(),
        constraints: z.array(z.string()),
        decisions: z.array(z.object({
            title: z.string(),
            description: z.string(),
        })),
        outcome: z.array(z.string()),
        lessons: z.string().optional(),
        
        // Power BI embed
        embedUrl: z.string().optional(),
    }),
});

export const collections = {
    work: workCollection,
};