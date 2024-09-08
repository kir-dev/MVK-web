"use client";
import { getRaces } from "@/lib/queries/races.queries";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getClient } from "@/lib/sanity.client";
import MapsFrame from "./MapsFrame";
import Link from "next/link";
import { useClient } from "sanity";
import { useEffect, useState } from "react";
import { Race } from "@/lib/sanity.types";

export default function MapsSection({}) {
  const [races, setRaces] = useState<Race[]>([]);
  const [selectedRace, setSelectedRace] = useState(-1);
  useEffect(() => {
    const client = getClient();
    async function fetchTeams() {
      try {
        const data = await getRaces(client);
        console.log(data);
        if (data) {
          setRaces(data);
        }
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    }

    fetchTeams();
  }, []);
  return (
    <div id="races" className="w-full p-10 bg-gray-200 scroll-smooth">
      <div className="flex flex-row justify-center max-h-[480px] gap-4 ">
        <MapsFrame
          races={races}
          selectedRace={selectedRace}
          setSelectedRace={setSelectedRace}
        />
        <div className="flex flex-col gap-4 overflow-scroll pr-3">
          {races &&
            races.map((race, index) => {
              return (
                <Card
                  key={race._id}
                  onClick={() => setSelectedRace(index)}
                  className={`cursor-pointer ${index === selectedRace ? "bg-[#455a64] text-white" : ""}`}
                >
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
    </div>
  );
}
