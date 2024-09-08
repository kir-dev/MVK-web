import { getClient } from "@/lib/sanity.client";
import NewsCard from "./NewsCard";
import { getFirstFewNews, getNews } from "@/lib/queries/news.queries";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Card } from "../ui/card";

export default async function NewsSection() {
  const client = getClient();
  const news = await getFirstFewNews(client, 5);
  if (!news) return null;
  return (
    <div className="w-screen h-fit p-10 relative bg-[#455a64] text-white">
      <a id="news" />
      <h1 className="text-3xl">Híreink</h1>
      <div className="flex flex-row items-center  gap-4 justify-center mt-8 flex-wrap">
        {news.map((data, index) => (
          <NewsCard key={index} news={data} />
        ))}
      </div>
      <Link href="/news">
        <Card className="absolute bottom-10 right-10 flex flex-row gap-3 border-2 p-2 items-center bg-transparent text-white">
          <p>Összes hír</p>
          <FaAngleDoubleRight />
        </Card>
      </Link>
    </div>
  );
}
