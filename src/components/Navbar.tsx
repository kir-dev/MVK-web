"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getTeams } from "@/lib/queries/team.queries";
import { getClient } from "@/lib/sanity.client";
import { useEffect, useState } from "react";
import { Team } from "@/lib/sanity.types";

export default function Navbar() {
  const [teams, setTeams] = useState<Team[]>([]);
  useEffect(() => {
    const client = getClient();
    async function fetchTeams() {
      try {
        const data = await getTeams(client);
        if (data) {
          setTeams(data);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    }

    fetchTeams();
  }, []);
  return (
    <header className="sticky top-0 z-50 border bg-white px-6 py-3 text-black w-screen">
      <div className="flex flex-row items-center justify-between border-t-black">
        <div className="align flex items-center">
          <Link
            href="/"
            className="flex w-fit align-middle flex-row items-center gap-3"
          >
            <Image src="/mvk-logo.svg" alt="MVK logo" width={100} height={24} />
            <h1 className="font-semibold">Műegyetemi Versenycsapat Közösség</h1>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Csapatok</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-4">
                  {teams.map((team) => (
                    <Link
                      href={`/teams/${team.slug.current}`}
                      key={team._id}
                      className={navigationMenuTriggerStyle()}
                    >
                      {team.name}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/news" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Hírek
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onClick={() => {
                  const section = document.getElementById("races");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Versenyek
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
