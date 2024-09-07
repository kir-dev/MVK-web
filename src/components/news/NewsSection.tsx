import { getClient } from "@/lib/sanity.client";
import NewsCard from "./NewsCard";
import { getFirstFewNews, getNews } from "@/lib/queries/news.queries";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default async function NewsSection() {
  const client = getClient();
  const news = await getFirstFewNews(client, 5);
  if (!news) return <div className="bg-fuchsia-300">Nem adta be</div>;
  return (
    <div className="w-screen h-fit  px-10 py-4 relative">
      <h1 className="text-3xl">Híreink</h1>
      <div className="flex flex-row items-center  gap-4 justify-center mt-8 flex-wrap">
        {news.map((data, index) => (
          <NewsCard key={index} news={data} />
        ))}
      </div>
      <Link
        href="/news"
        className="absolute bottom-4 right-4 flex flex-row gap-3 border-2 p-2"
      >
        <p>Összes hír</p>
        <MoveRight />
      </Link>
    </div>
  );
}
