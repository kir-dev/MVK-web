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
  color: SanityColor;
}
export interface News {
  _type: "news";
  _id: string;
  title: string;
  slug: Slug;
  thumbnail: ImageAsset;
  content: PortableTextBlock[];
  excerpt: string;
  author: string;
  visible: boolean;
  _createdAt: Date;
  _updatedAt: Date;
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
  team: Team;
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
export interface SlideshowVideoData {
  _type: "video";
  title: string;
  videoId: string;
}
export interface Settings {
  _type: "document";
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  intro: string;
}

type HslaColor = {
  _type: "hslaColor";
  h: number; // Hue
  s: number; // Saturation
  l: number; // Lightness
  a: number; // Alpha
};

type HsvaColor = {
  _type: "hsvaColor";
  h: number; // Hue
  s: number; // Saturation
  v: number; // Value
  a: number; // Alpha
};

type RgbaColor = {
  _type: "rgbaColor";
  r: number; // Red
  g: number; // Green
  b: number; // Blue
  a: number; // Alpha
};

export type SanityColor = {
  _type: "color";
  hex: string; // Hexadecimal color code
  alpha: number; // Alpha value
  hsl: HslaColor; // HSLA color representation
  hsv: HsvaColor; // HSVA color representation
  rgb: RgbaColor; // RGBA color representation
};
