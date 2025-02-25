import { LinkType, SanityColor } from "@/lib/sanity.types";
import { Card } from "../ui/card";
import Link from "next/link";
import { CiLink } from "react-icons/ci";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { getLinkIcon } from "@/utils/getLinkIcon";

export default function LinkCard({
  link,
  color,
}: {
  link: LinkType;
  color: SanityColor;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={link.url} target="_blank">
            <Card
              className="cursor-pointer flex items-center justify-center p-4 text-white"
              style={{ backgroundColor: color.hex }}
            >
              {getLinkIcon(link.url)}
            </Card>
          </Link>
        </TooltipTrigger>
        <TooltipContent>{link.title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
