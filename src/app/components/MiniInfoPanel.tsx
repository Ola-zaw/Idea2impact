import { Location } from "../types";
import { X, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface MiniInfoPanelProps {
  location: Location | null;
  onClose: () => void;
  onMoreClick: () => void;
}

export function MiniInfoPanel({
  location,
  onClose,
  onMoreClick,
}: MiniInfoPanelProps) {
  if (!location) return null;

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

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
      }}
      className="fixed bottom-16 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-40 max-w-md mx-auto"
    >
      <div className="p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 pr-8">
            {location.name}
          </h3>
          <span className="text-sm text-gray-600">
            {getTypeLabel(location.type)}
          </span>
        </div>

        <button
          onClick={onMoreClick}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 hover:opacity-90"
        >
          Więcej
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}