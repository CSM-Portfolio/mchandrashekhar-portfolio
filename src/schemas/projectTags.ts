import { defineField, defineType } from 'sanity'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
export default defineType( {
    name: 'projectTags',
    title: 'Project Tags',
    type: 'document',
    icon: BsFillBookmarkCheckFill,
    fields: [
        defineField( {
            name: 'title',
            title: 'Title',
            type: 'string',
        } ),
        defineField( {
            name: 'description',
            title: 'Description',
            type: 'text',
        } ),
    ],
} )
