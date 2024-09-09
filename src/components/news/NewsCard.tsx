import { News } from "@/lib/sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity.image";
import { Card } from "../ui/card";

export default function NewsCard({ news }: { news: News }) {
  return (
    <Link href={`/news/${news.slug.current}`}>
      <Card className="relative flex flex-row items-center justify-center bg-white max-w-xl max-h-[200px] overflow-hidden border-2">
        <Image
          src={
            news.thumbnail
              ? urlForImage(news.thumbnail)?.width(200).height(200).url() ?? ""
              : ""
          }
          alt={news.title}
          className="object-cover"
          width={200}
          height={200}
        />
        <div className="bg-transparent z-10 relative px-4 text-center text-ellipsis overflow-hidden h-full max-h-full">
          <h1 className="text-md text-black font-bold my-4">{news.title}</h1>
          {news.excerpt && (
            <p className="max-h-[60%] text-ellipsis">{news.excerpt}</p>
          )}
          <div className="w-full text-start px-4 pb-4">
            <p>{news.author}</p>
            <p>
              {new Date(news._createdAt).toLocaleDateString("hu-HU", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
