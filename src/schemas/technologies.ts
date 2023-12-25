import { defineField, defineType } from 'sanity'
import { BsFillTerminalFill } from "react-icons/bs";
export default defineType( {
    name: 'technology',
    title: 'Technology',
    type: 'document',
    icon: BsFillTerminalFill,
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
