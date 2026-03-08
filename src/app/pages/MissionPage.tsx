import { Logo } from '../components/Logo';
import { Target, Users, Heart, Award } from 'lucide-react';

export function MissionPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Logo />
      
      <div className="px-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Nasza Misja</h1>
        
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1612277210710-5bd6476ebca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZWJhJTIwUG9sYW5kJTIwYmVhY2h8ZW58MXx8fHwxNzcyOTI2NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Łeba"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6" style={{ color: '#2156ae' }} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">Cel</h2>
              <p className="text-gray-600 text-sm">
                Promujemy przedsiębiorstwa prowadzone przez lokalsów Łeby.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6" style={{ color: '#07a761' }} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">Społeczność</h2>
              <p className="text-gray-600 text-sm">
                Wspieramy lokalne firmy i łączymy turystów z autentycznymi doświadczeniami.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249, 165, 29, 0.2)' }}>
              <Heart className="w-6 h-6" style={{ color: '#f9a51d' }} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">Pasja</h2>
              <p className="text-gray-600 text-sm">
                Kochamy Łebę i chcemy, aby każdy turysta zakochał się w naszym mieście tak jak my.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(251, 199, 7, 0.2)' }}>
              <Award className="w-6 h-6" style={{ color: '#fbc707' }} />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">Gra i nagrody</h2>
              <p className="text-gray-600 text-sm">
                Zbieraj pieczątki odpowiadając na quizy w różnych lokalizacjach i zdobywaj wyjątkowe pamiątki od lo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Dołącz do nas!</h3>
          <p className="text-sm text-gray-600">
            Rozpocznij swoją przygodę z ŁebskiLokals już dziś i odkryj Łebę jak lokalny mieszkaniec.
          </p>
        </div>
      </div>
    </div>
  );
}