import { ImageAsset, PortableTextBlock } from "sanity";

export interface Slug {
  _type: "slug";
  current: string;
}
export interface Team {
  _type: "team";
  _id: string;
  name: string;
  slug: Slug;
  thumbnail: ImageAsset;
  description: string;
}
export interface News {
  _type: "news";
  _id: string;
  title: string;
  slug: Slug;
  thumbnail: ImageAsset;
  content: PortableTextBlock[];
  excerpt: string;
}
