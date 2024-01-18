import { groq } from 'next-sanity';
import { client } from '../lib/sanity.client';
import { Skill, Work, ProjectTag, SkillTag } from '../typings';

export const skillsQuery = groq`
    *[_type == "skills"] | order(_createdAt)  {
      ...
     }
`;

export const worksQuery = groq`
    *[_type == "works"] | order(_createdAt) {
      ...
     }
`;

export const projectTagsQuery = groq`
    *[_type == "projectTag"]  | order(_createdAt) {
      ...
     }
`;

export const skillTagsQuery = groq`
    *[_type == "skillTag"]  | order(_createdAt) {
      ...
     }
`;

export async function getAllSkills(): Promise<Skill[]> {
  if (client) {
    const skills = await client.fetch(skillsQuery, { cache: 'no-store' });
    return skills || [];
  }
  return [];
}

export async function getAllskillTags(): Promise<SkillTag[]> {
  if (client) {
    const skillTags = await client.fetch(skillTagsQuery, { cache: 'no-store' });
    return skillTags || [];
  }
  return [];
}

export async function getAllWorks(): Promise<Work[]> {
  if (client) {
    const works = await client.fetch(worksQuery, { cache: 'no-store' });
    return works || [];
  }
  return [];
}

export async function getAllprojectTags(): Promise<ProjectTag[]> {
  if (client) {
    const projectTags = await client.fetch(projectTagsQuery, {
      cache: 'no-store',
    });
    return projectTags || [];
  }
  return [];
}

export async function getWorkBySlug(querySlug: string) {
  const slugWorkQuery = groq`
    *[_type == "works" && slug.current == "${querySlug}"][0]{
      _id,
      slug,
      projectName,
      description,
      mainImage,
      architectureDiagram,
      architectureDescription,
      projectLink,
      codeLink,
      projectTags[] -> {
        _id,
        title
      },
      technologies[] -> {
        _id,
        title
      }
     }
    `;
  const work = await client.fetch(slugWorkQuery, { cache: 'no-store' });
  return work;
}
