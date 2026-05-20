import { type SchemaTypeDefinition } from 'sanity'
import { article } from './article'
import { project } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, project],
}
