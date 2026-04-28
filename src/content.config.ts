import { defineCollection, getCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/projects',
    }),

    schema: z.object({
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()).default([]),
        order: z.number().default(999),
        showInMenu: z.boolean().default(false)
    }),
});

export const collections = {
    projects,

}
