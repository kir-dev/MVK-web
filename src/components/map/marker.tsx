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
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    props: { lat: number; lng: number; markerId: string; raceId: number }
  ) => void;
  onDrag?: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    props: { latLng: LatLngLiteral }
  ) => void;
  onDragEnd?: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    props: { latLng: LatLngLiteral }
  ) => void;
  onDragStart?: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    props: { latLng: LatLngLiteral }
  ) => void;
  raceId: number;
}

const Marker = ({
  className,
  lat,
  lng,
  markerId,
  onClick,
  draggable,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDrag,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDragEnd,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDragStart,
  ...props
}: MarkerProps) =>
  lat && lng ? (
    <FaMapPin
      className={className}
      // lat={lat}
      // lng={lng}
      onClick={(e) =>
        onClick ? onClick(e, { raceId: props.raceId, lat, lng }) : null
      }
      style={{ fontSize: 40 }}
      width={35}
      height={35}
      color={props.selected ? "red" : "black"}
      {...props}
    />
  ) : null;

export default Marker;
