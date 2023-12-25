import { MdAssignment } from "react-icons/md";

export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    icon: MdAssignment,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
          name: 'skillTags',
          title: 'Skill Tags',
          type: 'array',
          of: [ { type: 'reference', to: { type: 'skillTags' } } ],
        }
    ]
}