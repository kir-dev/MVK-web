import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getNewsArticle } from "@/lib/queries/news.queries";
import { getClient } from "@/lib/sanity.client";
import { newsSerializer } from "@/utils/serializers/news.serializer";
import { teamDescriptionSerializer } from "@/utils/serializers/team.description.serializer";
import { tocSerializer } from "@/utils/serializers/toc.serializer";
import { PortableText } from "next-sanity";
import { redirect } from "next/navigation";

import { notFound } from "next/navigation";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

export default async function NewsPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient();
  const article = await getNewsArticle(client, params.slug);
  if (!article) return notFound();
  return (
    <div className="p-10 relative">
      <Card className="fixed top-24 right-8 transition-all">
        <Accordion collapsible type="single" orientation="horizontal">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-end items-center flex flex-row justify-end p-4 gap-4">
              Tartalom
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside ml-2">
                <PortableText
                  value={article.content}
                  components={tocSerializer}
                />
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="flex flex-row gap-4">
        <FaUser className="ml-0.5" />
        <h1>{article.author}</h1>
      </div>
      <div className="flex flex-row gap-4">
        <CiCalendar size={20} />
        {new Date(article._createdAt).toLocaleDateString("hu-HU", {
          minute: "numeric",
          hour: "numeric",
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}{" "}
      </div>
      <span className="flex items-center gap-2"></span>
      <span className="flex items-center gap-2"></span>
      <PortableText value={article.content} components={newsSerializer} />;
    </div>
  );
}
