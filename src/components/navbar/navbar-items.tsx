import { Team } from "@/lib/sanity.types";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

export function NavbarItems({ teams }: { teams?: Team[] }) {
  console.log(teams);
  return (
    <ul className="flex flex-col gap-3 p-4">
      {teams?.map((team) => (
        <Link
          href={`/teams/${team.slug.current}`}
          key={team._id}
          style={{
            color: team.color.hex,
          }}
          className={navigationMenuTriggerStyle()}
        >
          {team.name}
        </Link>
      ))}
    </ul>
  );
}
