import { Logo } from "../components/Logo";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router";
import { User, Award, LogOut, Settings } from "lucide-react";
import { locations } from "../data/locations";

export function AccountPage() {
  const { logout, userProgress } = useApp();
  const navigate = useNavigate();

  const totalQuizLocations = locations.filter(
    (loc) => loc.hasQuiz,
  ).length;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <Logo />

      <div className="px-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Twoje Konto
        </h1>

        {/* Profile Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">
                Jan Kowalski
              </h2>
              <p className="text-sm text-gray-600">
                jan.kowalski@email.pl
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-gray-700">
              Zdobyte pieczątki:{" "}
              <strong>
                {userProgress.stamps.length}/
                {totalQuizLocations}
              </strong>
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold mb-1 text-primary">
              {userProgress.stamps.length}
            </div>
            <div className="text-xs text-gray-600">
              Quizy ukończone
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            {/* Zastosowany nowy, dopasowany kolor zielony z Misji */}
            <div className="text-2xl font-bold mb-1 text-[#81C995]">
              {Math.floor(Math.random() * 15) + 5}
            </div>
            <div className="text-xs text-gray-600">
              Odwiedzone miejsca
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-between bg-gray-100 border border-gray-200 text-gray-700 py-3.5 px-4 rounded-lg hover:bg-gray-200 transition-colors">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-sm">
                Edytuj profil
              </span>
            </div>
            <span className="text-gray-400">›</span>
          </button>

          <button className="w-full flex items-center justify-between bg-gray-100 border border-gray-200 text-gray-700 py-3.5 px-4 rounded-lg hover:bg-gray-200 transition-colors">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-sm">
                Ustawienia
              </span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        </div>

        {/* Logout Button */}
        {/* Zastosowany pomarańczowy z Misji w tle z odpowiednim nasyceniem tekstu */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-[#F9C89B]/20 text-orange-600 border border-[#F9C89B]/50 rounded-lg hover:bg-[#F9C89B]/40 transition-colors font-medium text-sm"
        >
          <LogOut className="w-4 h-4" />
          <span>Wyloguj się</span>
        </button>

        {/* App Info */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>ŁebskiLokals v1.0</p>
          <p className="mt-1">
            © 2026 Wszystkie prawa zastrzeżone
          </p>
        </div>
      </div>
    </div>
  );
}