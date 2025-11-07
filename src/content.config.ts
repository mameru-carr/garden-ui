import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),

	schema: ({ image }) =>
		z.object({
			// NOTE: For Date values the format is 'Nov 05 2025'

			// Mandatory
			title: z.string(),
			subTitle: z.string(),
			createdAt: z.coerce.date(),	// Transform string to Date object

			// Optional
			slug: z.string().optional(),
			// pubDate: z.coerce.date().optional(),
			// updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			readingTime: z.string().optional(),
		}),
});

const essays = defineCollection({

	loader: glob({ base: './src/content/essays', pattern: '**/*.{md,mdx}' }),

	schema: ({ image }) =>
		z.object({
			// NOTE: For Date values the format is 'Nov 05 2025'

			// Mandatory
			title: z.string(),
			subTitle: z.string(),
			createdAt: z.coerce.date(),	// Transform string to Date object
			status: z.string(),

			// Optional
			slug: z.string().optional(),
			pubDate: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			readingTime: z.string().optional(),
		}),
});

const devLogs = defineCollection({

	loader: glob({ base: './src/content/', pattern: '**/dev-logs.json' }),

	schema: () =>
		z.array(
			z.object({
				// Mandatory
				date: z.coerce.date(),
				note: z.string(),
			})
		),
});

const quotes = defineCollection({
	loader: glob({ base: './src/content/', pattern: '**/quotes.json' }),

	schema: () =>
		z.array(
			z.object({
				// Mandatory
				quote: z.string(),
				author: z.string(),

				// Optional
				ref: z.string().optional(),
				source: z.string().optional(),
				linkTo: z.string().optional(),
			})
		)
});

export const collections = { blog, essays, quotes, devLogs };