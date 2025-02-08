"use client";

import { MapContainer, TileLayer, Marker, Popup,Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getTranslation } from '@/i18n';


const Map = () => {
    const { t } = getTranslation();
  const position: L.LatLngLiteral | L.LatLngTuple | undefined = [30.061623190708392, 31.33684292006811];

  const customIcon = L.icon({
    iconUrl: 'https://icon-library.com/images/google-map-location-icon/google-map-location-icon-20.jpg',
    iconSize: [40, 40],
    iconAnchor: [20, 40], 
    popupAnchor: [0, -40],
  });

  return (
    <MapContainer center={position} zoom={20} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
<Marker position={position} icon={customIcon}>
        <Tooltip className="customTooltip" permanent direction="top" offset={[0, -35]}>
            <div className="tooltipContent">
            <span className="highlight">{t('digi')} </span>
            <span className="bold">{t('fly')}</span> {t('company')} <br />
            <span className="subtitle">{t('subtitle')}</span>
          </div>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
