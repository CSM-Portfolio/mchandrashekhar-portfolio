import { MdContactPage } from "react-icons/md";

export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',    
    icon: MdContactPage,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text'
        }
    ]
}