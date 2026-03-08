import { Link, useLocation } from 'react-router';
import { MapIcon, BookOpen, QrCode, User } from 'lucide-react';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: '/mission', label: 'Nasza misja', icon: BookOpen },
    { path: '/discover', label: 'Odkryj', icon: MapIcon },
    { path: '/quiz', label: 'Łebski quiz', icon: QrCode },
    { path: '/account', label: 'Konto', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <nav className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                isActive ? '' : 'text-gray-600'
              }`}
              style={isActive ? { color: '#2156ae' } : {}}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}