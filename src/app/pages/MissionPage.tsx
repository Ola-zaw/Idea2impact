import { Logo } from "../components/Logo";
import { Target, Users, Heart, Award } from "lucide-react";

export function MissionPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Logo />

      <div className="px-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Nasza misja
        </h1>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Target
                className="w-6 h-6 text-primary"
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">
                Cel
              </h2>
              <p className="text-gray-600 text-sm">
                Promujemy przedsiębiorstwa prowadzone przez
                lokalsów Łeby, bo to oni tworzą duszę tego
                miasta. Chcemy, abyś zamiast sieciówek wybierał
                miejsca z historią, pasją i prawdziwym,
                nadmorskim charakterem.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(129, 201, 149, 0.25)' }}>
              <Users
                className="w-6 h-6"
                style={{ color: "#81C995" }}
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">
                Społeczność
              </h2>
              <p className="text-gray-600 text-sm">
                Wspieramy tych, którzy są tu przez cały rok, nie
                tylko w sezonie. Wybierając lokalne firmy,
                chronisz autentyczny klimat Łeby przed zalewem
                masowości i sprawiasz, że nasze miasto zachowuje
                swoją unikalną tożsamość.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "rgba(249, 200, 155, 0.25)",
              }}
            >
              <Heart
                className="w-6 h-6"
                style={{ color: "#F9C89B" }}
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">
                Pasja
              </h2>
              <p className="text-gray-600 text-sm">
                Kochamy Łebę i chcemy chronić jej unikalność.
                Wierzymy, że najpiękniejsze wspomnienia buduje
                się tam, gdzie właściciel wita Cię uśmiechem, a
                każdy produkt jest owocem lokalnej pracy i
                miłości do tego regionu.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-accent/25"
            >
              <Award
                className="w-6 h-6 text-accent"
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">
                Gra i nagrody
              </h2>
              <p className="text-gray-600 text-sm">
                Zbieraj pieczątki, odpowiadając na quizy w
                punktach prowadzonych przez lokalsów. Odkrywaj
                ukryte perełki naszego miasta i zdobywaj
                wyjątkowe pocztówki od lokalnych artystów, które
                są prawdziwą pamiątką z serca Łeby.
              </p>
            </div>
          </div>
        </div>

        {/* --- PRZENIESIONY OBRAZEK --- */}
        <div className="my-10 flex justify-center">
          <img
            src="https://www.pomorskidom.com/logo_text_secondary.png"
            alt="Pomorski Dom"
            className="w-full max-h-32 object-contain"
          />
        </div>
        {/* ---------------------- */}

        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">
            Dołącz do nas!
          </h3>
          <p className="text-sm text-gray-600">
            Rozpocznij swoją przygodę z Łebski Lokals już dziś i
            poznaj Łebę jak lokalny mieszkaniec.
          </p>
        </div>
      </div>
    </div>
  );
}