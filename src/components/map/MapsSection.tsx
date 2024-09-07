import { getRaces } from "@/lib/queries/races.queries";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getClient } from "@/lib/sanity.client";
import MapsFrame from "./MapsFrame";
import Link from "next/link";

export default async function MapsSection({}) {
  const client = getClient();
  const races = await getRaces(client);
  return (
    <div className="flex flex-row justify-center max-h-[480px] gap-4 my-8">
      <MapsFrame />
      <div className="flex flex-col gap-4 overflow-scroll">
        {races &&
          races.map((race) => {
            return (
              <Card key={race._id}>
                <CardHeader title={race.title}>{race.title}</CardHeader>
                <CardContent>
                  <Link href={race.url}>
                    {race.url.slice(0, 40)}
                    {race.url.length > 40 && "..."}
                  </Link>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
