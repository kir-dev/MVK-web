import { LinkType } from "@/lib/sanity.types";
import { Card } from "../ui/card";
import Link from "next/link";
import { CiLink } from "react-icons/ci";

export default function LinkCard({ link }: { link: LinkType }) {
  return (
    <Link href={link.url} target="_blank">
      <Card className="hover:bg-[#455a64] hover:text-white cursor-pointer flex items-center justify-center p-4">
        <CiLink size={30} />
      </Card>
    </Link>
  );
}
