import { GiProgression } from "react-icons/gi";

export default {
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    icon: GiProgression,
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [{ type: 'workExperience' }]
        }
    ]
}