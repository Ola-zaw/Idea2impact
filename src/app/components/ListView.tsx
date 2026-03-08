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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "hotel":
        return "bg-blue-100 text-blue-700";
      case "restaurant":
        return "bg-red-100 text-red-700";
      case "attraction":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
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
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                      Quiz
                    </span>
                  )}
                </div>
                <span
                  className={`inline-block text-xs px-2 py-1 rounded ${getTypeColor(location.type)}`}
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