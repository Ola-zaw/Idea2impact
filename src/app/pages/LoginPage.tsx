import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Logo } from '../components/Logo';
import { Mail, Lock } from 'lucide-react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/discover');
  };

  return (
    // Zmieniono tło z gradientu na czyste białe (bg-white)
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 pb-20">
        <div className="max-w-md mx-auto w-full">
          <Logo />
          
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
              Witamy w Łebie!
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Zaloguj się, aby odkrywać lokalne skarby
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="twoj@email.pl"
                    // Zmiana focus:ring na primary
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Hasło
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    // Zmiana focus:ring na primary
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Użyto bg-primary zamiast wpisanego na sztywno HEXa */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-medium transition-opacity mt-6 hover:opacity-90 shadow-sm"
              >
                Zaloguj się
              </button>
            </form>

            <div className="mt-6 text-center">
              {/* Użyto text-primary zamiast wpisanego na sztywno HEXa */}
              <a href="#" className="text-sm text-primary hover:underline font-medium">
                Nie masz konta? Zarejestruj się
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}