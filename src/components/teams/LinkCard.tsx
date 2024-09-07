import { LinkType } from "@/lib/sanity.types";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default function LinkCard({ link }: { link: LinkType }) {
  return (
    <Card>
      <CardHeader title={link.title}>{link.title}</CardHeader>
      <CardContent>
        <Link
          href={link.url}
          className="flex flex-row gap-2 items-center"
          target="_blank"
        >
          <LinkIcon size={15} />
          {link.url}
        </Link>
      </CardContent>
    </Card>
  );
}
