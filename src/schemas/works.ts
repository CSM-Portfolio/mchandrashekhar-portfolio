import { defineField, defineType } from 'sanity'
import { MdWork } from "react-icons/md";
import { SlugInput } from 'sanity-plugin-prefixed-slug'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  icon: MdWork,
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'projectName',
        maxLength: 300,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    }),
    defineField({
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectTags',
      title: 'Project Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'projectTags' } }],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'technology' } }],
    }),
    defineField({
      name: 'architectureDiagram',
      title: 'Architecture Diagram',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'architectureDescription',
      title: 'Architecture Description',
      type: 'string',
    }),
  ],
});