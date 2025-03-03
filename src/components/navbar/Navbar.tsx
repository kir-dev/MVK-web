import { getTeams } from "@/lib/queries/team.queries";
import { getClient } from "@/lib/sanity.client";
import NavbarDesktop from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";

export default async function Navbar() {
  const client = getClient();
  let teams = await getTeams(client);
  if (!teams) return null;
  return (
    <>
      <NavbarDesktop teams={teams} />
      <NavbarMobile teams={teams} />
    </>
  );
}
