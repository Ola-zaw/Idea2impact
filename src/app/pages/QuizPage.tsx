import { useState } from "react";
import { Logo } from "../components/Logo";
import { QRScannerModal } from "../components/QRScannerModal";
import { QuizModal } from "../components/QuizModal";
import { useApp } from "../context/AppContext";
import { quizQuestions } from "../data/locations";
import { QrCode, Award, Trophy } from "lucide-react";

export function QuizPage() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<
    (typeof quizQuestions)[0] | null
  >(null);
  const { userProgress, addStamp, resetStamps } = useApp();

  const maxStamps = 5;
  const stampCount = userProgress.stamps.length;
  const hasAllStamps = stampCount >= maxStamps;

  const handleScan = (locationId: string) => {
    setIsScannerOpen(false);

    // Check if already completed
    if (userProgress.stamps.includes(locationId)) {
      alert("Już ukończyłeś quiz w tej lokalizacji!");
      return;
    }

    // Find question for this location
    const question = quizQuestions.find(
      (q) => q.locationId === locationId,
    );

    if (question) {
      setCurrentQuestion(question);
    } else {
      alert("Brak quizu dla tej lokalizacji");
    }
  };

  const handleCorrectAnswer = (locationId: string) => {
    addStamp(locationId);
    setCurrentQuestion(null);
  };

  const handleClaimReward = () => {
    if (
      confirm(
        "Gratulacje! Ukończyłeś wszystkie quizy. Czy chcesz odebrać nagrodę i rozpocząć od nowa?",
      )
    ) {
      resetStamps();
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <Logo />

      <div className="px-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Łebski Quiz
        </h1>

        {/* QR Scanner Button */}
        <button
          onClick={() => setIsScannerOpen(true)}
          className="w-full bg-primary text-white py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-3 mb-6 shadow-sm"
        >
          <QrCode className="w-5 h-5" />
          Skanuj kod QR
        </button>

        {/* Progress Bar */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-900">
              Twój postęp
            </h2>
            <span className="text-sm font-medium text-gray-600">
              {stampCount} / {maxStamps}
            </span>
          </div>

          <div className="flex gap-3 justify-center mb-6">
            {Array.from({ length: maxStamps }).map(
              (_, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    index < stampCount
                      ? "bg-primary scale-110 shadow-md"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                >
                  {index < stampCount ? (
                    <Award className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-gray-400 text-sm font-medium">
                      {index + 1}
                    </span>
                  )}
                </div>
              ),
            )}
          </div>

          {hasAllStamps ? (
            <button
              onClick={handleClaimReward}
              className="w-full flex items-center justify-center gap-3 p-3.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors shadow-sm font-medium"
            >
              <Trophy className="w-5 h-5" />
              Odbierz nagrodę!
            </button>
          ) : (
            stampCount === maxStamps && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-sm font-medium text-green-800">
                  🎉 Gratulacje! Zdobyłeś wszystkie pieczątki!
                </p>
              </div>
            )
          )}
        </div>

        {/* Rules Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-4">
            Zasady udziału
          </h2>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex gap-3">
              <span className="font-bold text-primary flex-shrink-0">
                1.
              </span>
              <p>
                Odwiedź lokalizacje oznaczone na mapie jako
                dostępne do quizu (pogrubione znaczniki).
              </p>
            </div>

            <div className="flex gap-3">
              <span className="font-bold text-primary flex-shrink-0">
                2.
              </span>
              <p>
                W każdej lokalizacji znajdź kod QR i zeskanuj go
                za pomocą aplikacji.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="font-bold text-primary flex-shrink-0">
                3.
              </span>
              <p>
                Odpowiedz poprawnie na pytanie związane z danym
                miejscem, aby zdobyć pieczątkę.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="font-bold text-primary flex-shrink-0">
                4.
              </span>
              <p>
                Zbierz wszystkie 5 pieczątek i odbierz nagrodę w
                jednym z naszych punktów partnerskich!
              </p>
            </div>
          </div>

          <div className="mt-6 p-3 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-xs text-gray-700">
              <strong className="font-semibold text-primary">Wskazówka:</strong> Kody QR znajdziesz
              przy wejściu lub w widocznym miejscu wewnątrz
              lokalizacji.
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <QRScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onScan={handleScan}
      />

      <QuizModal
        question={currentQuestion}
        onClose={() => setCurrentQuestion(null)}
        onCorrectAnswer={handleCorrectAnswer}
      />
    </div>
  );
}