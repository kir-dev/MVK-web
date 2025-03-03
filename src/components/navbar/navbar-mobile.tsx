"use client";

import clsx from "clsx";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import Image from "next/image";
import { NavbarItems } from "./navbar-items";
import { Team } from "@/lib/sanity.types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavbarMobile({ teams }: { teams?: Team[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const onLinkClick: MouseEventHandler = (e) => {
    if ((e.target as HTMLElement).tagName === "A") setIsOpen(false);
  };

  return (
    <nav className="md:hidden w-full">
      <div
        className="w-full sticky top-0 z-50 border bg-white px-6 py-3 text-black "
        onClick={onLinkClick}
      >
        <div id="mobile-nav-container" className={clsx("w-full p-4 bg-white")}>
          <div className="w-full flex items-center justify-between gap-5">
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
            <button onClick={toggle}>
              <TbMenu2 size={40} />
            </button>
          </div>
          {isOpen && (
            <NavigationMenu orientation="vertical" className="mt-4">
              <NavigationMenuList className="flex justify-end">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Csapatok</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavbarItems teams={teams} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/news" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
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
          )}
        </div>
      </div>
    </nav>
  );
}
