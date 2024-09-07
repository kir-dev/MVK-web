import SerializedImage from "@/components/ui/SerializedImage";
import { PortableTextReactComponents } from "next-sanity";
import Link from "next/link";

export const commonSerializer = {
  types: {
    image: SerializedImage,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-6xl font-extrabold leading-none tracking-tight py-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-extrabold leading-none tracking-tight py-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold py-4 mt-8">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold py-4 mt-4">{children}</h4>
    ),
    normal: ({ children }) => <p className="py-2">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary border-opacity-50 pl-4 py-1 my-2">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside">{children}</ul>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const url = new URL(value?.href);
      return <Link href={value?.href}>{children}</Link>;
    },
  },
} satisfies Partial<PortableTextReactComponents>;
