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
  },
  ml: {
    translation: {
      // Navigation
      "nav.itinerary": "യാത്രാ പരിപാടി",
      "nav.diary": "ഡയറി",
      "nav.expenses": "ചെലവുകൾ",
      "nav.gamification": "നേട്ടങ്ങൾ",
      "nav.ar": "അന്വേഷിക്കുക",
      "nav.safety": "സുരക്ഷ",
      
      // Hero Section
      "hero.title": "നിങ്ങളുടെ പെർഫെക്റ്റ് യാത്രാ സഹയാത്രി",
      "hero.subtitle": "സ്മാർട്ട് ടൂളുകളും പ്രാദേശിക വിവരങ്ങളും ഉപയോഗിച്ച് നിങ്ങളുടെ യാത്രകൾ ആസൂത്രണം ചെയ്യുക, ട്രാക്ക് ചെയ്യുക, അന്വേഷിക്കുക",
      "hero.cta": "നിങ്ങളുടെ സാഹസികത ആരംഭിക്കുക",
      
      // Itinerary
      "itinerary.title": "യാത്രാ പരിപാടി",
      "itinerary.description": "സ്മാർട്ട് ടിപ്പുകളോടൊപ്പം നിങ്ങളുടെ ദൈനംദിന പ്രവർത്തനങ്ങൾ ആസൂത്രണം ചെയ്യുക",
      "itinerary.addActivity": "പ്രവർത്തനം ചേർക്കുക",
      "itinerary.day": "ദിവസം {{number}}",
      "itinerary.time": "സമയം",
      "itinerary.activity": "പ്രവർത്തനം",
      "itinerary.tips": "നുറുങ്ങുകൾ",
      
      // Diary
      "diary.title": "യാത്രാ ഡയറി",
      "diary.description": "നിങ്ങളുടെ യാത്രാ ഓർമ്മകളും കഥകളും പകർത്തുക",
      "diary.write": "നിങ്ങളുടെ കഥ എഴുതുക",
      "diary.save": "എൻട്രി സേവ് ചെയ്യുക",
      "diary.placeholder": "നിങ്ങളുടെ യാത്രാ അനുഭവങ്ങൾ പങ്കുവെക്കുക...",
      
      // Expenses
      "expenses.title": "ചെലവ് ട്രാക്കർ",
      "expenses.description": "നിങ്ങളുടെ യാത്രാ ബജറ്റ് കാര്യക്ഷമമായി കൈകാര്യം ചെയ്യുക",
      "expenses.budget": "ബജറ്റ്",
      "expenses.spent": "ചെലവഴിച്ചത്",
      "expenses.remaining": "ബാക്കിയുള്ളത്",
      "expenses.addExpense": "ചെലവ് ചേർക്കുക",
      "expenses.category.accommodation": "താമസം",
      "expenses.category.food": "ഭക്ഷണവും ഡൈനിംഗും",
      "expenses.category.transport": "ഗതാഗതം",
      "expenses.category.activities": "പ്രവർത്തനങ്ങൾ",
      "expenses.category.shopping": "ഷോപ്പിംഗ്",
      "expenses.category.other": "മറ്റുള്ളവ",
      
      // Gamification
      "gamification.title": "യാത്രാ നേട്ടങ്ങൾ",
      "gamification.description": "നിങ്ങളുടെ യാത്രയിൽ ബാഡ്ജുകൾ അൺലോക്ക് ചെയ്യുകയും പോയിന്റുകൾ നേടുകയും ചെയ്യുക",
      "gamification.points": "പോയിന്റുകൾ",
      "gamification.badges": "ബാഡ്ജുകൾ",
      "gamification.leaderboard": "ലീഡർബോർഡ്",
      
      // Safety
      "safety.title": "സുരക്ഷാ സ്യൂട്ട്",
      "safety.description": "അടിയന്തിര അലേർട്ടുകളും നുറുങ്ങുകളും ഉപയോഗിച്ച് സുരക്ഷിതരായിരിക്കുക",
      "safety.sos": "അടിയന്തിര SOS",
      "safety.weather": "കാലാവസ്ഥാ അലേർട്ട്",
      "safety.tips": "സുരക്ഷാ നുറുങ്ങുകൾ"
    }
  },
  ta: {
    translation: {
      // Navigation
      "nav.itinerary": "பயணத் திட்டம்",
      "nav.diary": "நாட்குறிப்பு",
      "nav.expenses": "செலவுகள்",
      "nav.gamification": "சாதனைகள்",
      "nav.ar": "ஆராயுங்கள்",
      "nav.safety": "பாதுகாப்பு",
      
      // Hero Section
      "hero.title": "உங்கள் சரியான பயணத் துணை",
      "hero.subtitle": "ஸ்மார்ட் கருவிகள் மற்றும் உள்ளூர் தகவல்களுடன் உங்கள் பயணங்களைத் திட்டமிடுங்கள், கண்காணியுங்கள் மற்றும் ஆராயுங்கள்",
      "hero.cta": "உங்கள் சாகசத்தைத் தொடங்குங்கள்",
      
      // Itinerary
      "itinerary.title": "பயணத் திட்டம்",
      "itinerary.description": "ஸ்மார்ட் குறிப்புகளுடன் உங்கள் தினசரி செயல்பாடுகளைத் திட்டமிடுங்கள்",
      "itinerary.addActivity": "செயல்பாட்டைச் சேர்க்கவும்",
      "itinerary.day": "நாள் {{number}}",
      "itinerary.time": "நேரம்",
      "itinerary.activity": "செயல்பாடு",
      "itinerary.tips": "குறிப்புகள்",
      
      // Diary
      "diary.title": "பயண நாட்குறிப்பு",
      "diary.description": "உங்கள் பயண நினைவுகள் மற்றும் கதைகளைப் பதிவு செய்யுங்கள்",
      "diary.write": "உங்கள் கதையை எழுதுங்கள்",
      "diary.save": "பதிவைச் சேமிக்கவும்",
      "diary.placeholder": "உங்கள் பயண அனுபவங்களைப் பகிருங்கள்...",
      
      // Expenses
      "expenses.title": "செலவு கண்காணிப்பான்",
      "expenses.description": "உங்கள் பயண பட்ஜெட்டை திறமையாக நிர்வகிக்கவும்",
      "expenses.budget": "பட்ஜெட்",
      "expenses.spent": "செலவழித்தது",
      "expenses.remaining": "மீதமுள்ளது",
      "expenses.addExpense": "செலவைச் சேர்க்கவும்",
      "expenses.category.accommodation": "தங்குமிடம்",
      "expenses.category.food": "உணவு மற்றும் உணவருந்துதல்",
      "expenses.category.transport": "போக்குவரத்து",
      "expenses.category.activities": "செயல்பாடுகள்",
      "expenses.category.shopping": "ஷோப்பிங்",
      "expenses.category.other": "மற்றவை",
      
      // Gamification
      "gamification.title": "பயண சாதனைகள்",
      "gamification.description": "உங்கள் பயணத்தில் பேட்ஜ்களை அன்லாக் செய்து புள்ளிகளைப் பெறுங்கள்",
      "gamification.points": "புள்ளிகள்",
      "gamification.badges": "பேட்ஜ்கள்",
      "gamification.leaderboard": "லீடர்போர்டு",
      
      // Safety
      "safety.title": "பாதுகாப்பு தொகுப்பு",
      "safety.description": "அவசர எச்சரிக்கைகள் மற்றும் குறிப்புகளுடன் பாதுகாப்பாக இருங்கள்",
      "safety.sos": "அவசர SOS",
      "safety.weather": "வானிலை எச்சரிக்கை",
      "safety.tips": "பாதுகாப்பு குறிப்புகள்"
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