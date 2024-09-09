import NewsCard from "@/components/news/NewsCard";
import { getNews } from "@/lib/queries/news.queries";
import { getClient } from "@/lib/sanity.client";

export default async function AllNewsPage() {
  const client = getClient();
  const news = await getNews(client);
  if (!news)
    return (
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Hírek</h1>
        <div className="flex flex-row flex-wrap">Még nincsenek hírek.</div>
      </div>
    );
  return (
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-bold mb-4">Hírek</h1>
      <div className="flex flex-row flex-wrap">
        {news.map((data, index) => (
          <NewsCard key={index} news={data} />
        ))}
      </div>
    </div>
  );
}
