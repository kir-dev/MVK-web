import { PortableTextReactComponents } from "@portabletext/react";
import Link from "next/link";

export const tocSerializer = {
  types: {
    block: ({ value }) => {
      const { style, _key, children } = value;
      return /^h\d/.test(style ?? "normal") ? (
        <li className="my-2">
          <Link href={`#h${_key}`}>
            {children.map((child: any) => child.text).join("")}
          </Link>
        </li>
      ) : null;
    },

    // ignore other block types
    code: () => null,
    image: () => null,
    actionButton: () => null,
    youtubeEmbed: () => null,
  },
  list: () => null,
  marks: {},
} satisfies Partial<PortableTextReactComponents>;
