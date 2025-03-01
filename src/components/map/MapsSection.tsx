"use client";
import { getRaces } from "@/lib/queries/races.queries";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getClient } from "@/lib/sanity.client";
import MapsFrame from "./MapsFrame";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Race, Team } from "@/lib/sanity.types";
import { getTeam, getTeams } from "@/lib/queries/team.queries";
import { set } from "sanity";
import { SquareArrowOutUpRight } from "lucide-react";

export default function MapsSection({}) {
  const [races, setRaces] = useState<Race[]>([]);
  const [selectedRace, setSelectedRace] = useState(-1);
  const [filteredRaces, setFilteredRaces] = useState<Race[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState(-1);
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
    async function fetchRaces() {
      try {
        const data = await getRaces(client);
        if (data) {
          setRaces(data);
          setFilteredRaces(data);
        }
      } catch (error) {
        console.error("Error fetching races:", error);
      }
    }
    fetchTeams();
    fetchRaces();
  }, []);
  useEffect(() => {
    console.log(selectedTeam);
    setSelectedRace(-1);
    if (selectedTeam === -1) {
      setFilteredRaces(races);
    } else {
      setFilteredRaces(
        races.filter((race) => race.team._id === teams[selectedTeam]._id)
      );
    }
  }, [selectedTeam, races, teams]);
  return (
    <div id="races" className="w-full p-10 bg-gray-200 scroll-smooth">
      <h1 className="text-3xl mb-4 font-semibold">Versenyek</h1>
      <div className="flex lg:flex-row flex-col justify-center lg:max-h-[480px] max-h-max gap-4 ">
        <div className="grid lg:grid-cols-2 grid-cols-3 gap-4 pr-3 items-center justify-center place-items-center">
          {teams &&
            teams.map((team, index) => {
              const isLast = index === teams.length - 1;
              return (
                <Card
                  key={team._id}
                  onClick={() =>
                    selectedTeam == index
                      ? setSelectedTeam(-1)
                      : setSelectedTeam(index)
                  }
                  color={team.color.hex}
                  style={{ backgroundColor: team.color.hex }}
                  className={` text-white cursor-pointer w-32 h-32 text-center flex flex-col items-center justify-center px-4 ${index === selectedTeam ? "border-4 border-[#27aae1]" : ""}  ${isLast ? "col-span-2 justify-self-center" : ""}`}
                >
                  {team.name}
                </Card>
              );
            })}
        </div>
        <MapsFrame
          races={filteredRaces}
          selectedRace={selectedRace}
          setSelectedRace={setSelectedRace}
        />
        <div className="lg:flex lg:flex-col gap-4 overflow-y-scroll overflow-x-hidden lg:w-1/4 w-full grid grid-cols-2 h-[50vh]">
          {filteredRaces &&
            filteredRaces.map((race, index) => {
              return (
                <Card
                  key={race._id}
                  onClick={() => setSelectedRace(index)}
                  style={
                    index === selectedRace
                      ? { backgroundColor: race.team.color.hex, color: "white" }
                      : {}
                  }
                  className={`cursor-pointer`}
                >
                  <CardContent className="flex flex-row gap-2 items-center pt-6 justify-between">
                    <h1>{race.title}</h1>
                    {race.url && (
                      <Link href={race.url}>
                        <SquareArrowOutUpRight />
                        {/* {race.url.slice(0, 40)}
                        {race.url.length > 40 && "..."} */}
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
