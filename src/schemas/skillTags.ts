import { defineField, defineType } from 'sanity';
import { BsFillTagsFill } from 'react-icons/bs';
export default defineType({
  name: 'skillTags',
  title: 'Skill Tags',
  type: 'document',
  icon: BsFillTagsFill,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
