import { GrServices } from "react-icons/gr";

export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    icon: GrServices,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}