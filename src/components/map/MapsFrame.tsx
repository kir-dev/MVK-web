"use client";
import GoogleMap from "google-maps-react-markers";
import { useEffect, useRef, useState } from "react";
import Marker from "./marker";
import { Race } from "@/lib/sanity.types";

const mapOptions = {
  maxZoom: 50,
  minZoom: 2,
  mapTypeId: "roadmap",
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  fullscreenControl: true,
};

export default function MapsFrame({
  races,
  selectedRace,
  setSelectedRace,
}: {
  races: Race[];
  selectedRace: number;
  setSelectedRace: (index: number) => void;
}) {
  // return (
  //   <iframe
  //     src="https://www.google.com/maps/d/u/0/embed?mid=1iNvcnTJ6r82cBEyaLJYwWxDjzVAtqvc&ehbc=2E312F&noprof=1"
  //     width="640"
  //     height="480"
  //   ></iframe>
  // );
  const mapRef = useRef<any>(null);
  const [mapReady, setMapReady] = useState(false);

  const onGoogleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    mapRef.current = map;
    setMapReady(true);
  };
  useEffect(() => {
    if (mapRef.current !== null && mapReady) {
      /* eslint-disable-next-line no-alert */
      mapRef.current.panTo({
        lat: races[selectedRace].lat,
        lng: races[selectedRace].lng,
      });
    }
  }, [selectedRace]);

  const onMarkerClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    { raceId, lat, lng }: { raceId: number; lat: number; lng: number }
  ) => {
    mapRef.current?.panTo({ lat, lng });
    setSelectedRace(raceId);
    // ref. https://developers.google.com/maps/documentation/javascript/reference?hl=it
  };
  return (
    <div className="h-[50vh] flex-1">
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
        defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
        defaultZoom={5}
        options={mapOptions}
        mapMinHeight="50vh"
        onGoogleApiLoaded={onGoogleApiLoaded}
      >
        {races.map((race, index) => (
          <Marker
            key={`${race._id}_pin`}
            lat={race.lat}
            lng={race.lng}
            markerId={race.title}
            raceId={index}
            onClick={onMarkerClick}
            draggable={false}
            selected={selectedRace === index}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
