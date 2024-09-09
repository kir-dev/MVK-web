import { LinkType } from "@/lib/sanity.types";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { CiLink } from "react-icons/ci";

export default function LinkCard({ link }: { link: LinkType }) {
  return (
    <Link href={link.url} target="_blank">
      <Card className="hover:bg-[#455a64] hover:text-white cursor-pointer">
        <CardHeader title={link.title}>{link.title}</CardHeader>
        <CardContent>
          <div className="flex flex-row gap-2 items-center">
            <CiLink size={15} />
            {link.url}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
