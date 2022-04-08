import { useWindowSize } from './useWindowSize';
import { Container, Row, Col } from "reactstrap";
import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  Tooltip,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { LatLngTuple, LatLng } from "leaflet";
import L from "leaflet";

export default function () {
  const initPosition = [50.012551077226085, 22.926438847190745];
  const size = useWindowSize();

  return (
    size ? <MapContainer
      key={size.height}
      style={{ height: size.height - 70 + "px" }}
      center={initPosition}
      zoom={8}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    </MapContainer>: null
  )
}
