import { useNavigate } from 'react-router';
import { Logo } from '../components/Logo';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <Logo />
      
      <div className="text-center mt-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Strona nie znaleziona
        </h2>
        <p className="text-gray-600 mb-8">
          Przepraszamy, ale strona której szukasz nie istnieje.
        </p>
        
        <button
          onClick={() => navigate('/discover')}
          className="inline-flex items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          <Home className="w-5 h-5" />
          Wróć do strony głównej
        </button>
      </div>
    </div>
  );
}
