import { groq } from 'next-sanity'
import { client } from "../lib/sanity.client";
import { Post } from '../typings';

export const postsQuery =
  groq`
*[_type == "post"]{
  _id,
  title,
  description,
  mainImage,
  publishedAt,
  slug,
  author -> {
    name,
    image
  },
  categories[] -> {
    _id,
    description,
    title
  }
} | order(_createdAt desc)
  `

export async function getAllPosts (): Promise<Post[]>
{
  if ( client )
  {
    const posts = await client.fetch( postsQuery, { cache: 'no-store' } );
    return posts || []
  }
  return []
}

export async function getPost ( querySlug: string ): Promise<Post[]>
{
  const slugPostQuery = groq`
    *[_type == "post" && slug.current == "${ querySlug }"][0]{
    _id,
    title,
    description,
    mainImage,
    publishedAt,
    slug,
    author -> {
      name,
      image
    },
    categories[] -> {
      _id,
      description,
      title
    }, 
    body
  }
    `


  if ( client )
  {
    const post = await client.fetch( slugPostQuery, { cache: 'no-store' } );
    return post || []
  }
  return []
}
