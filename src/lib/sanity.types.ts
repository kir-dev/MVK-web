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
  description: PortableTextBlock[];
  logo: ImageAsset;
  Links: LinkType[];
  races: RaceResult[];
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
export interface LinkType {
  _key: string;
  title: string;
  url: string;
}
export interface Race {
  _type: "race";
  _id: string;
  title: string;
  url: string;
  lat: number;
  lng: number;
}
export interface RaceResult {
  _type: "raceResult";
  _id: string;
  title: string;
  logo: ImageAsset;
  description: string;
  date: string;
  image: ImageAsset;
}
interface Location {
  _type: "geopoint";
  lat: number;
  lng: number;
  alt: number;
}
