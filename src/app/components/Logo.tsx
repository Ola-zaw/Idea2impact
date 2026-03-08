import { MapPin } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <MapPin className="w-6 h-6 text-blue-600" />
      <span className="text-xl font-bold text-gray-900">ŁebskiLokals</span>
    </div>
  );
}
