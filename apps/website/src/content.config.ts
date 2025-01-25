import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

export const collections = { componentsData };
