import { getNewsArticle } from "@/lib/queries/news.queries";
import { getClient } from "@/lib/sanity.client";
import { newsSerializer } from "@/utils/serializers/news.serializer";
import { teamDescriptionSerializer } from "@/utils/serializers/team.description.serializer";
import { tocSerializer } from "@/utils/serializers/toc.serializer";
import { PortableText } from "next-sanity";
import { redirect } from "next/navigation";

import { notFound } from "next/navigation";

export default async function NewsPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient();
  const article = await getNewsArticle(client, params.slug);
  if (!article) return notFound();
  return (
    <div>
      <h2 className="text-4xl font-extrabold leading-none tracking-tight py-4 mt-8">
        Tartalom
      </h2>
      <ul className="mb-8 list-disc list-inside ml-2">
        <PortableText value={article.content} components={tocSerializer} />
      </ul>
      <PortableText value={article.content} components={newsSerializer} />;
    </div>
  );
}
