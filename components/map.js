import { useWindowSize } from './useWindowSize';
import { Container, Row, Col, Badge } from "reactstrap";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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

var markerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});

const Tag = ({tag}) => <Badge className="text-white mr-1" color={"primary"} key={tag}>{tag}</Badge>

export default function ({ list }) {
  const initPosition = [49.88339002622637, -97.11515064736092];
  const size = useWindowSize();

  return (
    size ? <MapContainer
      key={size.height}
      style={{ height: size.height - 70 + "px" }}
      center={initPosition}
      zoom={5}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      {
        list.map(({ id, name, latitude, longitude, tags, imageUrl, linkedInUrl }) => {
          return <Marker key={id} position={[latitude, longitude]} icon={markerIcon} >
            <Popup>
              <img className='w-100' src={imageUrl} />
              <p><b>{name}</b>{" "}<a target={"_blank"} href={linkedInUrl}><FontAwesomeIcon icon={faLinkedin} /></a></p>
              {tags.map(tag => <Tag tag={tag} />)}
            </Popup>

            <Tooltip>
              {tags.map(tag => <Tag tag={tag} />)}
            </Tooltip>
          </Marker>
        })
      }



    </MapContainer> : null
  )
}
