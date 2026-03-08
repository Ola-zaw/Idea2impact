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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg font-medium transition-colors mt-6 hover:opacity-90"
                style={{ backgroundColor: '#2156ae' }}
              >
                Zaloguj się
              </button>
            </form>

            <div className="mt-6 text-center">
              <a href="#" className="text-sm hover:underline" style={{ color: '#2156ae' }}>
                Nie masz konta? Zarejestruj się
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}