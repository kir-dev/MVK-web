import { LatLngLiteral } from "google-maps-react-markers";
import React from "react";
import { FaMapPin } from "react-icons/fa6";

interface MarkerProps {
  className?: string;
  draggable: boolean;
  lat: number;
  lng: number;
  markerId: string;
  selected?: boolean;
  onClick?: (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    props: { lat: number; lng: number; markerId: string; raceId: number }
  ) => void;
  onDrag?: (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    props: { latLng: LatLngLiteral }
  ) => void;
  onDragEnd?: (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    props: { latLng: LatLngLiteral }
  ) => void;
  onDragStart?: (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    props: { latLng: LatLngLiteral }
  ) => void;
  raceId: number;
}

const Marker = ({
  className,
  lat,
  lng,
  markerId,
  raceId,
  onClick,
  draggable,
  onDrag,
  onDragEnd,
  onDragStart,
  ...props
}: MarkerProps) =>
  lat && lng ? (
    <FaMapPin
      className={className}
      // lat={lat}
      // lng={lng}
      onClick={(e) =>
        onClick ? onClick(e, { raceId: raceId, lat, lng, markerId }) : null
      }
      style={{ fontSize: 40 }}
      width={35}
      height={35}
      color={props.selected ? "red" : "black"}
      {...props}
    />
  ) : null;

export default Marker;
