import { X } from "lucide-react";
import { motion } from "motion/react";

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (result: string) => void;
}

export function QRScannerModal({
  isOpen,
  onClose,
  onScan,
}: QRScannerModalProps) {
  if (!isOpen) return null;

  // Mock QR scanner - in production would use real QR scanner library
  const handleMockScan = () => {
    // Simulate scanning a QR code for a location
    const mockLocationIds = [
      "hotel-1",
      "restaurant-4",
      "restaurant-3",
      "restaurant-5",
      "attraction-1",
      "attraction-3",
      "muzeum-1",
    ];
    const randomId =
      mockLocationIds[
        Math.floor(Math.random() * mockLocationIds.length)
      ];
    onScan(randomId);
  };

  return (
    // Zmienione bg-opacity-50 na nowocześniejsze bg-black/50
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl max-w-md w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Skanuj kod QR
        </h2>

        <div className="aspect-square bg-gray-900 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
          {/* Mock camera view */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

          {/* Scanning frame - zmienione border-blue-500 na border-primary */}
          <div className="relative z-10 w-64 h-64 border-4 border-white/20 rounded-lg">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary"></div>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center mb-4">
          Skieruj aparat na kod QR znajdujący się w lokalizacji
        </p>

        {/* Mock scan button for demo - zmienione bg-blue-600 na bg-primary */}
        <button
          onClick={handleMockScan}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-sm"
        >
          Symuluj skan (demo)
        </button>
      </motion.div>
    </div>
  );
}