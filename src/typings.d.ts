import { Reference } from "sanity";

interface Base
{
    _createdAt?: string;
    _id?: string;
    _rev?: string;
    _type?: string;
    _updatedAt?: string
}

interface Span
{
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Block
{
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface Image
{
    _type: "image";
    asset: Reference;
}

interface Slug
{
    _type: "slug";
    current: string;
}

interface Category extends Base
{
    description: string;
    title: string;
}

interface ProjectTag extends Base {
  description: string;
  title: string;
}

interface SkillTag extends Base {
  description: string;
  title: string;
}

interface Post extends Base
{
    title?: string;
    description?: string;
    mainImage?: Image;
    publishedAt?: string;
    slug?: Slug;
    author?: Author;
    categories?: Category[];
    body?: Block[];
}

interface Author extends Base
{
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;
}

interface MainImage
{
    _type: "image";
    asset: Reference;
}

interface Title
{
    _type: "string";
    current: string;
}

interface Reference
{
    _ref: string;
    _type: "reference";
}

interface Skill extends Base {
  skillTags: any;
  name: string;
  bgColor: string;
  icon: Image;
}

interface Tag extends Base
{
    description: string;
    title: string;
}

interface Technology extends Base
{
    description: string;
    title: string;
}


interface Work extends Base {
  projectName: string;
  slug?: Slug;
  description: Block[];
  projectLink: string;
  codeLink: string;
  mainImage: Image;
  technologies?: Technology[];
  projectTags?: Tag[];
  architectureDiagram: Image;
  architectureDescription: string;
}