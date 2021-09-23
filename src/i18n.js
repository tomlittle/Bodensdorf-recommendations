import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from 'i18next-xhr-backend';
import LanguageDetector from "i18next-browser-languagedetector";

// LEGEND
// o = outside
// i = inside
// small letter followed by T or Title = title in that respective section
// mo = modal for description of inside
// small letter followed by But = button in that respective section
// a = area(umgebung)
// d = directions
// b = booking
// bookMo = booking modal
// login / register / user(user profile) are relatively self explanatory
// c = calendar (bottom section with big calendar)

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          recTitle: 'Our Recommendations',
          recIntro: 'Some text about the page',
          recTab1: 'Eating out',
          recTab2: 'Shopping',
          recTab3: 'Other',
          gotoWeb: 'Visit web site',
          gotoMap: 'Go to map',
          recBahnS: '',
					recBahnT: '',
          recLandskronS: '',
					recLandskronT: '',
          recOsterwitzS: '',
					recOsterwitzT: '',
          recTennisS: '',
					recTennisT: '',
          recRoedelS: '',
					recRoedelT: '',
          recSchiffS: '',
					recSchiffT: '',
          recVillachS: '',
					recVillachT: '',
          recUrbaniS: '',
					recUrbaniT: '',
          recSchlosswirtS: '',
					recSchlosswirtT: '',
          recHexenpfandlS: '',
					recHexenpfandlT: '',
          recSeerestaurantS: '',
					recSeerestaurantT: '',
          recPavillionS: '',
					recPavillionT: '',
          recSeitnerS: '',
					recSeitnerT: '',
          recSeemandlS: '',
					recSeemandlT: '',
          recStofflwirtS: '',
					recStofflwirtT: '',
          recBillaS: '',
					recBillaT: '',
          recSparS: '',
					recSparT: '',
          recSchiederS: '',
					recSchiederT: '',
          recNockfleischS: '',
					recNockfleischT: '',
          recSalitererS: '',
					recSalitererT: '',
        }
      },
      de: {
        translations: {
          recTitle: 'Unsere Empfehlungen',
          recIntro: 'Auch wir verbringen immer wieder ein paar Wochen am Ossiacher See und das seit vielen Jahren. Wir haben hier einige Lieblingsziele gesammelt, die wir empfehlen können.',
          recTab1: 'Essen gehen',
          recTab2: 'Einkaufen',
          recTab3: 'Sonstiges',
          gotoWeb: 'Website besuchen',
          gotoMap: 'Karte ansehen',
          recBahnS: '',
					recBahnT: '',
          recLandskronS: '',
					recLandskronT: '',
          recOsterwitzS: '',
					recOsterwitzT: '',
          recTennisS: '',
					recTennisT: '',
          recRoedelS: '',
					recRoedelT: '',
          recSchiffS: '',
					recSchiffT: '',
          recVillachS: '',
					recVillachT: '',
          recUrbaniS: '',
					recUrbaniT: '',
          recSchlosswirtS: '',
					recSchlosswirtT: '',
          recHexenpfandlS: '',
					recHexenpfandlT: '',
          recSeerestaurantS: '',
					recSeerestaurantT: '',
          recPavillionS: '',
					recPavillionT: '',
          recSeitnerS: '',
					recSeitnerT: '',
          recSeemandlS: '',
					recSeemandlT: '',
          recStofflwirtS: '',
					recStofflwirtT: '',
          recBillaS: '',
					recBillaT: '',
          recSparS: '',
					recSparT: '',
          recSchiederS: '',
					recSchiederT: '',
          recNockfleischS: '',
					recNockfleischT: '',
          recSalitererS: '',
					recSalitererT: '',
        }
      }
    },
    fallbackLng: "de",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;