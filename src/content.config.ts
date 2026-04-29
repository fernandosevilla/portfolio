import { defineCollection, getCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/projects',
	}),

	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			description: z.string(),
			menuDescription: z.string().optional(),
			technologies: z.array(z.string()).default([]),
			order: z.number().default(999),
			showInMenu: z.boolean().default(false),
			featured: z.boolean().default(true),
			repositoryUrl: z.httpUrl().optional(),
			demoUrl: z.httpUrl().optional(),
			cover: image().optional(),
			coverAlt: z.string().optional(),
		}),
});

const experiences = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/experiences',
    }),

    schema: z.object({
        period: z.string(),
		role: z.string(),
		company: z.string(),
		location: z.string(),
		description: z.string(),
		items: z.array(z.string()).default([]),
		technologies: z.array(z.string()).default([]),
		order: z.number().default(999),
    }),
});

export const collections = {
    projects,
    experiences,
};
