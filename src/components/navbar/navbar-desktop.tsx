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
import { Team } from "@/lib/sanity.types";
import { NavbarItems } from "./navbar-items";

export default function NavbarDesktop({ teams }: { teams?: Team[] }) {
  return (
    <>
      <header className="sticky hidden md:block top-0 z-50 border bg-white px-6 py-3 text-black w-full">
        <div className="flex flex-row items-center justify-between border-t-black">
          <div className="align flex items-center">
            <Link
              href="/"
              className="flex w-fit align-middle flex-row items-center gap-3"
            >
              <Image
                src="/mvk-logo.svg"
                alt="MVK logo"
                width={100}
                height={24}
              />
              <h1 className="font-semibold">
                Műegyetemi Versenycsapat Közösség
              </h1>
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Csapatok</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavbarItems teams={teams} />
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
                  href="/#races"
                >
                  Versenyek
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </>
  );
}
