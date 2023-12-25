import {defineField, defineType} from 'sanity'
import { BsFillBookmarksFill } from "react-icons/bs";
export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BsFillBookmarksFill,
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
})
