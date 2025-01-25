import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const componentsContent = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs/components' }),
  schema: z.object({
    status: z.enum(['Alpha', 'New', 'Updated']).optional(),
    title: z.string(),
    description: z.string(),
    category: z.enum(['Data display', 'Inputs', 'Buttons', 'Navigation', 'Feedback', 'Overlays', 'Typography', 'Misc']),
    source: z.string().url(),
    issue: z.string().url(),
  }),
});

const componentsData = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/components' }),
  schema: z.object({
    parts: z.array(
      z.object({
        part: z.string(),
        props: z.array(
          z.object({
            prop: z.string(),
            required: z.boolean(),
            type: z.union([z.string(), z.number(), z.boolean()]),
            defaultValue: z.union([z.string(), z.number(), z.boolean(), z.null()]),
            description: z.string(),
          })
        ),
        dataAttributes: z.array(
          z.object({
            attribute: z.string(),
            values: z.string(),
          })
        ),
        CSSVariables: z.union([
          z.array(
            z.object({
              variable: z.string(),
              description: z.string(),
            })
          ),
          z.null(),
        ]),
      })
    ),
    keyboardInteractions: z.union([
      z.array(
        z.object({
          key: z.string(),
          description: z.string(),
        })
      ),
      z.null(),
    ]),
  }),
});

export const collections = { componentsContent, componentsData };
