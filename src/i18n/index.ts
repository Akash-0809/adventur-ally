import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.itinerary": "Itinerary",
      "nav.diary": "Diary",
      "nav.expenses": "Expenses",
      "nav.gamification": "Achievements",
      "nav.ar": "Explore",
      "nav.safety": "Safety",
      
      // Hero Section
      "hero.title": "Your Perfect Travel Companion",
      "hero.subtitle": "Plan, track, and explore your journeys with smart tools and local insights",
      "hero.cta": "Start Your Adventure",
      
      // Itinerary
      "itinerary.title": "Travel Itinerary",
      "itinerary.description": "Plan your day-wise activities with smart tips",
      "itinerary.addActivity": "Add Activity",
      "itinerary.day": "Day {{number}}",
      "itinerary.time": "Time",
      "itinerary.activity": "Activity",
      "itinerary.tips": "Tips",
      
      // Diary
      "diary.title": "Travel Diary",
      "diary.description": "Capture your travel memories and stories",
      "diary.write": "Write Your Story",
      "diary.save": "Save Entry",
      "diary.placeholder": "Share your travel experiences...",
      
      // Expenses
      "expenses.title": "Expense Tracker",
      "expenses.description": "Manage your travel budget efficiently",
      "expenses.budget": "Budget",
      "expenses.spent": "Spent",
      "expenses.remaining": "Remaining",
      "expenses.addExpense": "Add Expense",
      "expenses.category.accommodation": "Accommodation",
      "expenses.category.food": "Food & Dining",
      "expenses.category.transport": "Transport",
      "expenses.category.activities": "Activities",
      "expenses.category.shopping": "Shopping",
      "expenses.category.other": "Other",
      
      // Gamification
      "gamification.title": "Travel Achievements",
      "gamification.description": "Unlock badges and earn points on your journey",
      "gamification.points": "Points",
      "gamification.badges": "Badges",
      "gamification.leaderboard": "Leaderboard",
      
      // Safety
      "safety.title": "Safety Suite",
      "safety.description": "Stay safe with emergency alerts and tips",
      "safety.sos": "Emergency SOS",
      "safety.weather": "Weather Alert",
      "safety.tips": "Safety Tips"
    }
  },
  hi: {
    translation: {
      // Navigation
      "nav.itinerary": "यात्रा कार्यक्रम",
      "nav.diary": "डायरी",
      "nav.expenses": "खर्च",
      "nav.gamification": "उपलब्धियां",
      "nav.ar": "खोजें",
      "nav.safety": "सुरक्षा",
      
      // Hero Section
      "hero.title": "आपका सही यात्रा साथी",
      "hero.subtitle": "स्मार्ट टूल्स और स्थानीय जानकारी के साथ अपनी यात्राओं की योजना बनाएं, ट्रैक करें और एक्सप्लोर करें",
      "hero.cta": "अपना एडवेंचर शुरू करें",
      
      // Itinerary
      "itinerary.title": "यात्रा कार्यक्रम",
      "itinerary.description": "स्मार्ट टिप्स के साथ अपनी दैनिक गतिविधियों की योजना बनाएं",
      "itinerary.addActivity": "गतिविधि जोड़ें",
      "itinerary.day": "दिन {{number}}",
      "itinerary.time": "समय",
      "itinerary.activity": "गतिविधि",
      "itinerary.tips": "सुझाव",
      
      // Diary
      "diary.title": "यात्रा डायरी",
      "diary.description": "अपनी यात्रा की यादों और कहानियों को कैप्चर करें",
      "diary.write": "अपनी कहानी लिखें",
      "diary.save": "एंट्री सेव करें",
      "diary.placeholder": "अपने यात्रा अनुभव साझा करें...",
      
      // Expenses
      "expenses.title": "खर्च ट्रैकर",
      "expenses.description": "अपने यात्रा बजट को कुशलता से प्रबंधित करें",
      "expenses.budget": "बजट",
      "expenses.spent": "खर्च किया गया",
      "expenses.remaining": "बचा हुआ",
      "expenses.addExpense": "खर्च जोड़ें",
      "expenses.category.accommodation": "आवास",
      "expenses.category.food": "भोजन और डाइनिंग",
      "expenses.category.transport": "परिवहन",
      "expenses.category.activities": "गतिविधियां",
      "expenses.category.shopping": "शॉपिंग",
      "expenses.category.other": "अन्य",
      
      // Gamification
      "gamification.title": "यात्रा उपलब्धियां",
      "gamification.description": "अपनी यात्रा पर बैज अनलॉक करें और पॉइंट्स कमाएं",
      "gamification.points": "पॉइंट्स",
      "gamification.badges": "बैज",
      "gamification.leaderboard": "लीडरबोर्ड",
      
      // Safety
      "safety.title": "सुरक्षा सूट",
      "safety.description": "आपातकालीन अलर्ट और टिप्स के साथ सुरक्षित रहें",
      "safety.sos": "आपातकालीन SOS",
      "safety.weather": "मौसम अलर्ट",
      "safety.tips": "सुरक्षा सुझाव"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;