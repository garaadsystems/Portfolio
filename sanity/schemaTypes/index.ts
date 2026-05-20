import { type SchemaTypeDefinition } from 'sanity'
import { article } from './article'
import { project } from './project'
import { testimonial } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, project, testimonial],
}
