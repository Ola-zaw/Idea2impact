import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Location, LocationType } from "../types";

// Naprawa domyślnych ikon znaczników w Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface MapViewProps {
  locations: Location[];
  onMarkerClick: (location: Location) => void;
}

// Tworzenie niestandardowych znaczników
const createCustomIcon = (
  type: LocationType,
  hasQuiz: boolean,
) => {
  const colors: Record<string, string> = {
    hotel: "#5B8DBE", // Stonowany niebieski
    restaurant: "#81C995", // Stonowany zielony
    attraction: "#F7B981", // Stonowany pomarańczowy
  };

  const color = colors[type as string] || "#6b7280";

  // Złota gwiazdka dla quizu, delikatna kropka dla reszty
  const centerContent = hasQuiz
    ? `<path d="M16 6.5 l2.2 4.5 5 .7 -3.6 3.5 .9 5 -4.5 -2.4 -4.5 2.4 .9 -5 -3.6 -3.5 5 -.7 z" fill="#F5D76E" stroke="#ffffff" stroke-width="1.5" />`
    : `<circle cx="16" cy="12" r="3.5" fill="white" opacity="0.8"/>`;

  // Jeśli wolisz "badge" w rogu zamiast gwiazdki, możesz odkomentować to:
  /*
  const badge = hasQuiz 
    ? `<circle cx="24" cy="5" r="5" fill="#fbc707" stroke="#ffffff" stroke-width="1.5"/>` 
    : '';
  */

  const svg = `
    <svg width="32" height="46" viewBox="0 0 32 46" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 2)">
        <path d="M16 0C9.373 0 4 5.373 4 12c0 9 12 28 12 28s12-19 12-28c0-6.627-5.373-12-12-12z" 
              fill="${color}" 
              stroke="rgba(0,0,0,0.15)" 
              stroke-width="1"/>
              
        ${centerContent}
        
        </g>
    </svg>
  `;

  // Dodajemy dynamiczną klasę CSS, jeśli chcielibyśmy później dodać animację
  const markerClass = hasQuiz 
    ? "custom-marker bg-transparent border-none drop-shadow-md z-10" 
    : "custom-marker bg-transparent border-none drop-shadow-sm";

  return L.divIcon({
    html: svg,
    className: markerClass,
    iconSize: [32, 46], 
    iconAnchor: [16, 42],
    popupAnchor: [0, -42],
  });
};

export function MapView({
  locations,
  onMarkerClick,
}: MapViewProps) {
  return (
    // Dodano relative oraz min-h-[500px] jako zabezpieczenie, gdyby rodzic nie miał wysokości
    <div className="w-full h-full min-h-[500px] relative z-0">
      <MapContainer
        center={[54.7558, 17.5489]} // Współrzędne Łeby
        zoom={14}
        // Pozycjonowanie absolutne wymusza dopasowanie mapy do diva okalającego
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={createCustomIcon(
              location.type,
              location.hasQuiz,
            )}
            eventHandlers={{
              click: () => onMarkerClick(location),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}