import { useParams, useNavigate } from 'react-router';
import { Logo } from '../components/Logo';
import { locations } from '../data/locations';
import { ArrowLeft, Phone, MapPin, Clock, ExternalLink, VolumeX } from 'lucide-react';

export function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const location = locations.find(loc => loc.id === id);
  
  if (!location) {
    return <div>Lokalizacja nie znaleziona</div>;
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      {/* min-h-[96px] odpowiada dokładnej wysokości Twojego komponentu Logo (64px logo + 32px paddingu) */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200 relative flex items-center px-4 min-h-[64px]">
        
        {/* Przycisk Wstecz (zawsze po lewej stronie, wyśrodkowany w pionie) */}
        <button 
          onClick={() => navigate('/discover')}
          className="relative z-20 p-2 -ml-2 text-gray-700 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        {/* Logo w 100% swoim oryginalnym rozmiarze, rzucone absolutnie na sam środek */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Logo />
        </div>

      </div>

      <div className="px-6 py-4">
        {/* Location Name */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {location.name}
        </h1>

        {/* Video Container */}
        <div className="relative w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">
                {location.type === 'hotel' && '🏨'}
                {location.type === 'restaurant' && '🍽️'}
                {location.type === 'attraction' && '🎯'}
              </div>
              <p className="text-gray-700 font-medium">Podgląd wideo</p>
            </div>
          </div>
          <button className="absolute top-3 right-3 bg-black bg-opacity-50 p-2 rounded-full">
            <VolumeX className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6">
          {location.description}
        </p>

        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Adres</p>
              <p className="text-sm text-gray-600">{location.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900">Telefon</p>
              <a href={`tel:${location.phone}`} className="text-sm text-blue-600 hover:underline">
                {location.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Category Specific Content */}
        {location.type === 'restaurant' && (
          <div className="space-y-4 border-t border-gray-200 pt-6">
            {location.hours && (
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Godziny otwarcia</p>
                  <p className="text-sm text-gray-600">{location.hours}</p>
                </div>
              </div>
            )}

            <div className="space-y-2">
              {location.websiteUrl && (
                <a
                  href={location.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-primary text-white py-3 px-4 rounded-lg transition-colors hover:opacity-90"
                >
                  <span className="font-medium">Odwiedź stronę</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              
              {location.menuUrl && (
                <a
                  href={location.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span className="font-medium">Zobacz menu</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        )}

        {location.type === 'hotel' && (
          <div className="space-y-4 border-t border-gray-200 pt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-900 mb-2">Cennik</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sezon niski:</span>
                  <span className="font-medium text-gray-900">{location.lowSeasonPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sezon wysoki:</span>
                  <span className="font-medium text-gray-900">{location.highSeasonPrice}</span>
                </div>
              </div>
            </div>

            {location.bookingUrl && (
              <a
                href={location.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-primary text-white py-3 px-4 rounded-lg transition-colors hover:opacity-90"
              >
                <span className="font-medium">Zobacz stronę pensjonatu</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}

        {location.type === 'attraction' && location.hours && (
          <div className="space-y-4 border-t border-gray-200 pt-6">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">Godziny otwarcia</p>
                <p className="text-sm text-gray-600">{location.hours}</p>
              </div>
            </div>

            {location.websiteUrl && (
              <a
                href={location.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-primary text-white py-3 px-4 rounded-lg transition-colors hover:opacity-90"
              >
                <span className="font-medium">Więcej informacji</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}

        {/* Quiz Badge */}
        {location.hasQuiz && (
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm font-medium text-yellow-900 mb-1">
              🎯 Quiz dostępny!
            </p>
            <p className="text-sm text-yellow-700">
              Zeskanuj kod QR w tym miejscu, aby rozwiązać quiz i zdobyć pieczątkę.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}