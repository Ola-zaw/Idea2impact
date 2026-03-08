import { Location } from "../types";
import { MapPin, Clock, ExternalLink } from "lucide-react";

interface ListViewProps {
  locations: Location[];
  onLocationClick: (location: Location) => void;
}

export function ListView({
  locations,
  onLocationClick,
}: ListViewProps) {
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "hotel":
        return "Nocleg";
      case "restaurant":
        return "Restauracja";
      case "attraction":
        return "Inne wyjątkowe miejsce";
      default:
        return type;
    }
  };

  const getTypeStyle = (type: string) => {
    switch (type) {
      case "hotel":
        // Tło bez zmian, tekst to teraz głęboki granat
        return { backgroundColor: 'rgba(91, 141, 190, 0.15)', color: '#2C5A86' };
      case "restaurant":
        // Tło bez zmian, tekst to mocna, leśna zieleń
        return { backgroundColor: 'rgba(129, 201, 149, 0.15)', color: '#27703D' };
      case "attraction":
        // Tło bez zmian, tekst to mocny, rdzawy pomarańcz
        return { backgroundColor: 'rgba(249, 200, 155, 0.15)', color: '#B35900' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#374151' };
    }
  };

  return (
    <div className="overflow-y-auto h-full">
      <div className="space-y-3 p-4">
        {locations.map((location) => (
          <div
            key={location.id}
            onClick={() => onLocationClick(location)}
            className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">
                    {location.name}
                  </h3>
                  {location.hasQuiz && (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">
                      Quiz
                    </span>
                  )}
                </div>
                {/* Etykiety kategorii dostaną teraz nowy, czytelny styl */}
                <span
                  className="inline-block text-xs px-2 py-1 rounded font-medium"
                  style={getTypeStyle(location.type)}
                >
                  {getTypeLabel(location.type)}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              {location.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>{location.address}</span>
            </div>

            {location.hours && (
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <Clock className="w-3 h-3" />
                <span>{location.hours}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}