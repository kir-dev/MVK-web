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
              ? urlForImage(news.thumbnail)?.width(200).height(200).url() ??
                "/images/card-example-2.jpeg"
              : "/images/card-example-2.jpeg"
          }
          alt={news.title}
          className="object-cover"
          width={200}
          height={200}
        />
        <div className="bg-transparent z-10 relative px-4 text-center text-ellipsis overflow-hidden h-full max-h-full">
          <h1 className="text-md text-black font-bold mb-4">{news.title}</h1>
          {news.excerpt && (
            <p className="max-h-[60%] text-ellipsis">{news.excerpt}</p>
          )}
        </div>
      </Card>
    </Link>
  );
}
