import { Location, QuizQuestion } from "../types";

// Łeba coordinates: approximately 54.7558° N, 17.5489° E
export const locations: Location[] = [
  {
    id: "hotel-1",
    name: "Hotel Neptun",
    type: "hotel",
    coordinates: [54.7568, 17.5489],
    hasQuiz: false,
    description:
      "Nowoczesny hotel z widokiem na morze, idealny dla rodzin.",
    address: "ul. Nadmorska 12, 84-360 Łeba",
    phone: "+48 59 866 1234",
    bookingUrl: "https://booking.com",
    lowSeasonPrice: "280 zł/noc",
    highSeasonPrice: "520 zł/noc",
  },
  {
    id: "hotel-2",
    name: "Willa Morska",
    type: "hotel",
    coordinates: [54.7548, 17.552],
    hasQuiz: false,
    description:
      "Przytulna willa w spokojnej okolicy, blisko plaży.",
    address: "ul. Spacerowa 8, 84-360 Łeba",
    phone: "+48 59 866 2345",
    bookingUrl: "https://booking.com",
    lowSeasonPrice: "195 zł/noc",
    highSeasonPrice: "390 zł/noc",
  },
  {
    id: "restaurant-1",
    name: "Restauracja Czarny Młyn",
    type: "restaurant",
    coordinates: [54.7558, 17.547],
    hasQuiz: true,
    description:
      "Tradycyjna kuchnia kaszubska w stylowym wnętrzu.",
    address: "ul. Kościuszki 15, 84-360 Łeba",
    phone: "+48 59 866 3456",
    hours: "Pn-Nd: 12:00-22:00",
    websiteUrl: "https://czarnymlynleba.pl",
    menuUrl: "https://czarnymlynleba.pl/menu",
  },
  {
    id: "restaurant-2",
    name: "Bar Rybny Szkuner",
    type: "restaurant",
    coordinates: [54.7548, 17.55],
    hasQuiz: false,
    description: "Świeże ryby i owoce morza prosto z kutru.",
    address: "ul. Port 3, 84-360 Łeba",
    phone: "+48 59 866 4567",
    hours: "Pn-Nd: 10:00-20:00",
    websiteUrl: "https://szkuner.pl",
  },
  {
    id: "restaurant-3",
    name: "Pizzeria Bella Vista",
    type: "restaurant",
    coordinates: [54.7538, 17.548],
    hasQuiz: true,
    description: "Włoska pizza w sercu Łeby.",
    address: "ul. Turystyczna 22, 84-360 Łeba",
    phone: "+48 59 866 5678",
    hours: "Pn-Nd: 11:00-23:00",
    websiteUrl: "https://bellavista.pl",
  },
  {
    id: "attraction-1",
    name: "Park Dinozaurów",
    type: "attraction",
    coordinates: [54.7578, 17.551],
    hasQuiz: true,
    description:
      "Największy park dinozaurów w Polsce dla całej rodziny.",
    address: "ul. Dinozaurów 1, 84-360 Łeba",
    phone: "+48 59 866 6789",
    hours: "Pn-Nd: 9:00-19:00",
    websiteUrl: "https://parkdinozaurow.pl",
  },
  {
    id: "attraction-2",
    name: "Ruchome Wydmy",
    type: "attraction",
    coordinates: [54.7588, 17.56],
    hasQuiz: false,
    description:
      "Unikalne zjawisko naturalne - piaszczyste wydmy warte zobaczenia.",
    address: "Słowiński Park Narodowy, 84-360 Łeba",
    phone: "+48 59 866 7890",
    hours: "Pn-Nd: 7:00-20:00",
    websiteUrl: "https://slowinskipn.pl",
  },
  {
    id: "attraction-3",
    name: "Latarnia Morska",
    type: "attraction",
    coordinates: [54.7598, 17.553],
    hasQuiz: true,
    description:
      "Zabytkowa latarnia z piękną panoramą wybrzeża.",
    address: "ul. Latarniowa 1, 84-360 Łeba",
    phone: "+48 59 866 8901",
    hours: "Pn-Nd: 10:00-18:00",
    websiteUrl: "https://latarnia-leba.pl",
  },

  {
    id: "muzeum-1",
    name: "Muzeum Bursztynu w Łebie",
    type: "attraction",
    coordinates: [54.765450288087955, 17.5593083260014],
    hasQuiz: true,
    description:
      "Przybliżenie wiedzy na temat bursztynu bałtyckiego od lokalnych pasjonatów.",
    address: "ul. Nadmorska 3b, 84-360 Łeba",
    phone: "+48 59 866 8901",
    hours: "Pn-Nd: 10:00-18:00",
    websiteUrl:
      "https://www.google.com/maps/place/Muzeum+Bursztynu+w+%C5%81ebie/@54.765342,17.5567227,17z/data=!4m15!1m8!3m7!1s0x46fe7834676d348b:0xc7be0342dc42461!2sMuzeum+Bursztynu+w+%C5%81ebie!8m2!3d54.7653389!4d17.5592976!10e1!16s%2Fg%2F11dz_n3fbw!3m5!1s0x46fe7834676d348b:0xc7be0342dc42461!8m2!3d54.7653389!4d17.5592976!16s%2Fg%2F11dz_n3fbw?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D",
  },

  {
    id: "restaurant-4",
    name: "Lody u Pani Jagody",
    type: "restaurant",
    coordinates: [54.76236152319402, 17.555935884193328],
    hasQuiz: true,
    description: "Lody tworzone z miłością od pokoleń.",
    address: "ul. aleja Brzozowa, 84-360 Łeba",
    phone: "+48 29 766 5698",
    hours: "Pn-Nd: 10:00-18:00",
    websiteUrl: "https://UJagody.pl",
  },

  {
    id: "restaurant-5",
    name: "Gofry",
    type: "restaurant",
    coordinates: [54.76025597826055, 17.55438332731552],
    hasQuiz: true,
    description: "Gofry z tajemniczej receptury.",
    address: "ul. Tadeusza Kościuszki 28, 84-360 Łeba",
    phone: "+48 59 866 5678",
    hours: "Pn-Nd: 10:00-20:00",
    websiteUrl: "https://gofry.pl",
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    locationId: "hotel-1",
    question: "W którym roku powstał Hotel Neptun?",
    answer: "1995",
  },
  {
    locationId: "restaurant-4",
    question: "W którym roku zostały sprzedane pierwsze lody?",
    answer: "1976",
  },
  {
    locationId: "restaurant-5",
    question: "Jaki jest sekretny składnik gofrów?",
    answer: "cynamon",
  },
  {
    locationId: "restaurant-3",
    question:
      "Z jakiego regionu Włoch pochodzi nasz szef kuchni?",
    answer: "Neapol",
  },
  {
    locationId: "attraction-1",
    question: "Ile dinozaurów znajduje się w naszym parku?",
    answer: "70",
  },
  {
    locationId: "attraction-3",
    question: "Jaka jest wysokość latarni morskiej w Łebie?",
    answer: "32",
  },
  {
    locationId: "muzeum-1",
    question: "Ile waży największy bursztyn w kolekcji?",
    answer: "45",
  },
];