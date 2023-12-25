import { IoBusiness } from "react-icons/io5";

export default {
    name: 'brands',
    title: 'Brands',
    type: 'document',
    icon: IoBusiness,
    fields: [
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        }
    ]
}