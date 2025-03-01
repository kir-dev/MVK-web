import { newsSerializer } from "@/utils/serializers/news.serializer";
import { PortableText } from "next-sanity";
import { CiCalendar } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { News } from "@/lib/sanity.types";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const NewsModal = ({ article }: { article: News }) => {
  return (
    <DialogContent className="p-10 max-w-fit">
      <DialogHeader>
        <DialogTitle>{article.title}</DialogTitle>
        <DialogDescription>
          {article.author && (
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row gap-2 items-center">
                <FaUser className="ml-0.5" />
                <h1>{article.author}</h1>
              </div>
              <div className="flex flex-row gap-2 items-center  ">
                <CiCalendar size={20} />
                {new Date(article._createdAt).toLocaleDateString("hu-HU", {
                  minute: "numeric",
                  hour: "numeric",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </div>
          )}
          <div className="flex flex-row gap-4"></div>
        </DialogDescription>
      </DialogHeader>
      <div className=" max-h-[70dvh] overflow-scroll">
        <PortableText value={article.content} components={newsSerializer} />
      </div>
    </DialogContent>
  );
};
