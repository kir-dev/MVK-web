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
      <div className="flex flex-row justify-center max-h-[480px] gap-4 ">
        <div className="grid grid-cols-2 gap-4 overflow-scroll pr-3">
          {teams &&
            teams.map((team, index) => {
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
                  className={` text-white cursor-pointer w-32 h-32 text-center flex flex-col items-center justify-center px-4 ${index === selectedTeam ? "border-4 border-[#27aae1]" : ""}`}
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
        <div className="flex flex-col gap-4 overflow-scroll pr-3 w-1/4 h-[50vh]">
          {filteredRaces &&
            filteredRaces.map((race, index) => {
              return (
                <Card
                  key={race._id}
                  onClick={() => setSelectedRace(index)}
                  className={`cursor-pointer ${index === selectedRace ? "bg-[#455a64] text-white" : ""}`}
                >
                  <CardHeader title={race.title}>{race.title}</CardHeader>
                  <CardContent>
                    {race.url && (
                      <Link href={race.url}>
                        {race.url.slice(0, 40)}
                        {race.url.length > 40 && "..."}
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
