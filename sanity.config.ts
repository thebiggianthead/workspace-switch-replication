'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, defineType, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import { schema } from './src/sanity/schema'

const schemaTypes = [
  defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      defineField({name: 'title', type: 'string'}),
      defineField({name: 'body', type: 'array', of: [{ type: 'block' }]}),
    ],
  }),
]

export default defineConfig([{
  name: 'client1',
  title: 'Client 1',
  basePath: '/studio/client1',

  projectId,
  dataset: 'client-1',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
},
{
  name: 'client2',
  title: 'Client 2',
  basePath: '/studio/client2',

  projectId,
  dataset: 'client-2',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
}])
