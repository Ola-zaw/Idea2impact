import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Logo } from '../components/Logo';
import { MapView } from '../components/MapView';
import { ListView } from '../components/ListView';
import { MiniInfoPanel } from '../components/MiniInfoPanel';
import { locations } from '../data/locations';
import { Location, LocationType } from '../types';
import { Map, List, Filter, X } from 'lucide-react';

export function DiscoverPage() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<(LocationType | 'quiz')[]>([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const navigate = useNavigate();

  const filteredLocations = locations.filter(
    loc => {
      if (selectedFilters.length === 0) return true;
      
      return selectedFilters.some(filter => {
        if (filter === 'quiz') return loc.hasQuiz;
        return loc.type === filter;
      });
    }
  );

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleMoreClick = () => {
    if (selectedLocation) {
      navigate(`/details/${selectedLocation.id}`);
    }
  };

  const toggleFilter = (filter: LocationType | 'quiz') => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const filterOptions = [
    { value: 'hotel' as const, label: 'Hotele' },
    { value: 'restaurant' as const, label: 'Restauracje' },
    { value: 'attraction' as const, label: 'Atrakcje' },
    { value: 'quiz' as const, label: 'Z quizem' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      <Logo />
      
      {/* Top Controls */}
      <div className="px-4 pb-3 space-y-3">
        {/* View Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('map')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
              viewMode === 'map' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Map className="w-4 h-4" />
            Mapa
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
              viewMode === 'list' 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <List className="w-4 h-4" />
            Lista
          </button>
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setShowFilterMenu(!showFilterMenu)}
          className="w-full flex items-center justify-between bg-gray-100 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="font-medium text-sm">
              {selectedFilters.length === 0 
                ? 'Wszystkie kategorie' 
                : `Wybrane filtry (${selectedFilters.length})`}
            </span>
          </div>
          <svg 
            className={`h-4 w-4 text-gray-500 transition-transform ${showFilterMenu ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Filter Menu */}
        {showFilterMenu && (
          <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-900">Filtruj według kategorii</span>
              {selectedFilters.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  Wyczyść wszystkie
                </button>
              )}
            </div>
            <div className="space-y-2">
              {filterOptions.map(option => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(option.value)}
                    onChange={() => toggleFilter(option.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Active Filters Pills */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map(filter => {
              const option = filterOptions.find(opt => opt.value === filter);
              return (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors"
                >
                  {option?.label}
                  <X className="w-3 h-3" />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 relative">
        {viewMode === 'map' ? (
          <MapView 
            locations={filteredLocations} 
            onMarkerClick={handleMarkerClick}
          />
        ) : (
          <ListView 
            locations={filteredLocations}
            onLocationClick={handleMarkerClick}
          />
        )}
      </div>

      {/* Mini Info Panel */}
      <MiniInfoPanel
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
        onMoreClick={handleMoreClick}
      />
    </div>
  );
}