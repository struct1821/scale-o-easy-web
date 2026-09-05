export type LangCode = "en" | "hi" | "mr" | "ta" | "te" | "bn" | "gu";

export const LANGUAGES: { code: LangCode; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
];

type Keys =
  | "tagline"
  | "heroTitle"
  | "heroSub"
  | "start"
  | "seeAddons"
  | "chooseLanguage"
  | "businessName"
  | "whatYouDo"
  | "city"
  | "phone"
  | "whatsapp"
  | "services"
  | "servicesHint"
  | "hours"
  | "about"
  | "next"
  | "back"
  | "createSite"
  | "step"
  | "of"
  | "yourSiteReady"
  | "callNow"
  | "chatWhatsapp"
  | "ourServices"
  | "visitUs"
  | "openHours"
  | "editDetails"
  | "addAddons"
  | "aboutUs"
  | "contact";

const en: Record<Keys, string> = {
  tagline: "Your shop online in 60 seconds",
  heroTitle: "Fill 6 boxes. Get a real website.",
  heroSub:
    "Scale on builds a ready-to-share website for your shop or service in your own language. No computer skills needed.",
  start: "Make my website",
  seeAddons: "See add-ons",
  chooseLanguage: "Choose your language",
  businessName: "Business name",
  whatYouDo: "What do you do?",
  city: "City or area",
  phone: "Phone number",
  whatsapp: "WhatsApp number",
  services: "Your services or items",
  servicesHint: "Write one per line",
  hours: "Opening hours",
  about: "A line about your business",
  next: "Next",
  back: "Back",
  createSite: "Create my website",
  step: "Step",
  of: "of",
  yourSiteReady: "Your website is ready",
  callNow: "Call now",
  chatWhatsapp: "Chat on WhatsApp",
  ourServices: "What we offer",
  visitUs: "Find us",
  openHours: "Open",
  editDetails: "Edit details",
  addAddons: "Add WhatsApp & marketing",
  aboutUs: "About us",
  contact: "Contact",
};

const dict: Record<LangCode, Record<Keys, string>> = {
  en,
  hi: {
    ...en,
    tagline: "आपकी दुकान 60 सेकंड में ऑनलाइन",
    heroTitle: "6 खाने भरें. असली वेबसाइट पाएं.",
    heroSub:
      "Scale on आपकी भाषा में आपकी दुकान या सेवा के लिए तैयार वेबसाइट बनाता है. कोई तकनीकी जानकारी नहीं चाहिए.",
    start: "मेरी वेबसाइट बनाएं",
    seeAddons: "अतिरिक्त सुविधाएं देखें",
    chooseLanguage: "अपनी भाषा चुनें",
    businessName: "व्यापार का नाम",
    whatYouDo: "आप क्या काम करते हैं?",
    city: "शहर या इलाका",
    phone: "फ़ोन नंबर",
    whatsapp: "व्हाट्सएप नंबर",
    services: "आपकी सेवाएं या सामान",
    servicesHint: "हर लाइन में एक लिखें",
    hours: "खुलने का समय",
    about: "अपने व्यापार के बारे में एक लाइन",
    next: "आगे",
    back: "पीछे",
    createSite: "मेरी वेबसाइट बनाएं",
    step: "चरण",
    of: "/",
    yourSiteReady: "आपकी वेबसाइट तैयार है",
    callNow: "अभी कॉल करें",
    chatWhatsapp: "व्हाट्सएप पर बात करें",
    ourServices: "हम क्या देते हैं",
    visitUs: "हमें ढूंढें",
    openHours: "खुला",
    editDetails: "जानकारी बदलें",
    addAddons: "व्हाट्सएप और मार्केटिंग जोड़ें",
    aboutUs: "हमारे बारे में",
    contact: "संपर्क",
  },
  mr: {
    ...en,
    tagline: "तुमचे दुकान ६० सेकंदात ऑनलाइन",
    heroTitle: "६ रकाने भरा. खरी वेबसाइट मिळवा.",
    heroSub: "Scale on तुमच्या भाषेत तुमच्या व्यवसायाची वेबसाइट तयार करते. तांत्रिक ज्ञान नको.",
    start: "माझी वेबसाइट बनवा",
    seeAddons: "जादा सुविधा पहा",
    chooseLanguage: "तुमची भाषा निवडा",
    businessName: "व्यवसायाचे नाव",
    whatYouDo: "तुम्ही काय करता?",
    city: "शहर किंवा भाग",
    phone: "फोन नंबर",
    whatsapp: "व्हॉट्सअॅप नंबर",
    services: "तुमच्या सेवा किंवा वस्तू",
    servicesHint: "प्रत्येक ओळीत एक लिहा",
    hours: "उघडण्याची वेळ",
    about: "व्यवसायाबद्दल एक ओळ",
    next: "पुढे",
    back: "मागे",
    createSite: "वेबसाइट बनवा",
    yourSiteReady: "तुमची वेबसाइट तयार आहे",
    callNow: "आता कॉल करा",
    chatWhatsapp: "व्हॉट्सअॅपवर बोला",
    ourServices: "आम्ही काय देतो",
    visitUs: "आम्हाला शोधा",
    editDetails: "माहिती बदला",
    addAddons: "व्हॉट्सअॅप आणि मार्केटिंग जोडा",
    aboutUs: "आमच्याबद्दल",
    contact: "संपर्क",
  },
  ta: {
    ...en,
    tagline: "உங்கள் கடை 60 வினாடிகளில் ஆன்லைனில்",
    heroTitle: "6 விவரங்கள். உண்மையான வலைத்தளம்.",
    heroSub: "Scale on உங்கள் மொழியில் உங்கள் கடைக்கு வலைத்தளம் உருவாக்கும். தொழில்நுட்பம் தேவையில்லை.",
    start: "எனது வலைத்தளம் உருவாக்கு",
    seeAddons: "கூடுதல் வசதிகள்",
    chooseLanguage: "உங்கள் மொழியைத் தேர்வு செய்யுங்கள்",
    businessName: "வணிகப் பெயர்",
    whatYouDo: "நீங்கள் என்ன செய்கிறீர்கள்?",
    city: "ஊர் அல்லது பகுதி",
    phone: "தொலைபேசி எண்",
    whatsapp: "வாட்ஸ்அப் எண்",
    services: "உங்கள் சேவைகள் அல்லது பொருட்கள்",
    servicesHint: "ஒரு வரிக்கு ஒன்று",
    hours: "திறக்கும் நேரம்",
    about: "வணிகம் பற்றி ஒரு வரி",
    next: "அடுத்து",
    back: "பின்",
    createSite: "வலைத்தளம் உருவாக்கு",
    yourSiteReady: "உங்கள் வலைத்தளம் தயார்",
    callNow: "இப்போது அழைக்கவும்",
    chatWhatsapp: "வாட்ஸ்அப்பில் பேசுங்கள்",
    ourServices: "நாங்கள் வழங்குவது",
    visitUs: "எங்களைக் காணுங்கள்",
    editDetails: "விவரங்களை மாற்று",
    addAddons: "வாட்ஸ்அப் & மார்க்கெட்டிங்",
    aboutUs: "எங்களைப் பற்றி",
    contact: "தொடர்பு",
  },
  te: {
    ...en,
    tagline: "మీ షాప్ 60 సెకన్లలో ఆన్‌లైన్",
    heroTitle: "6 వివరాలు. నిజమైన వెబ్‌సైట్.",
    heroSub: "Scale on మీ భాషలో మీ వ్యాపారానికి వెబ్‌సైట్ తయారు చేస్తుంది. టెక్నికల్ నాలెడ్జ్ అవసరం లేదు.",
    start: "నా వెబ్‌సైట్ చేయండి",
    seeAddons: "అదనపు సేవలు",
    chooseLanguage: "మీ భాషను ఎంచుకోండి",
    businessName: "వ్యాపారం పేరు",
    whatYouDo: "మీరు ఏమి చేస్తారు?",
    city: "ఊరు లేదా ప్రాంతం",
    phone: "ఫోన్ నంబర్",
    whatsapp: "వాట్సాప్ నంబర్",
    services: "మీ సేవలు లేదా వస్తువులు",
    servicesHint: "ఒక లైన్‌కి ఒకటి",
    hours: "తెరిచే సమయం",
    about: "వ్యాపారం గురించి ఒక లైన్",
    next: "తర్వాత",
    back: "వెనుక",
    createSite: "వెబ్‌సైట్ తయారు చేయండి",
    yourSiteReady: "మీ వెబ్‌సైట్ సిద్ధం",
    callNow: "ఇప్పుడే కాల్ చేయండి",
    chatWhatsapp: "వాట్సాప్‌లో మాట్లాడండి",
    ourServices: "మేము అందించేవి",
    visitUs: "మమ్మల్ని కలవండి",
    editDetails: "వివరాలు మార్చండి",
    addAddons: "వాట్సాప్ & మార్కెటింగ్",
    aboutUs: "మా గురించి",
    contact: "సంప్రదించండి",
  },
  bn: {
    ...en,
    tagline: "আপনার দোকান ৬০ সেকেন্ডে অনলাইনে",
    heroTitle: "৬টি তথ্য। আসল ওয়েবসাইট।",
    heroSub: "Scale on আপনার ভাষায় আপনার ব্যবসার ওয়েবসাইট তৈরি করে। কোনো টেকনিক্যাল জ্ঞান লাগে না।",
    start: "আমার ওয়েবসাইট বানান",
    seeAddons: "অতিরিক্ত সুবিধা",
    chooseLanguage: "আপনার ভাষা বাছুন",
    businessName: "ব্যবসার নাম",
    whatYouDo: "আপনি কী করেন?",
    city: "শহর বা এলাকা",
    phone: "ফোন নম্বর",
    whatsapp: "হোয়াটসঅ্যাপ নম্বর",
    services: "আপনার সেবা বা জিনিস",
    servicesHint: "প্রতি লাইনে একটি",
    hours: "খোলার সময়",
    about: "ব্যবসা সম্পর্কে এক লাইন",
    next: "পরে",
    back: "পিছনে",
    createSite: "ওয়েবসাইট বানান",
    yourSiteReady: "আপনার ওয়েবসাইট তৈরি",
    callNow: "এখনই কল করুন",
    chatWhatsapp: "হোয়াটসঅ্যাপে কথা বলুন",
    ourServices: "আমরা যা দিই",
    visitUs: "আমাদের খুঁজুন",
    editDetails: "তথ্য বদলান",
    addAddons: "হোয়াটসঅ্যাপ ও মার্কেটিং",
    aboutUs: "আমাদের কথা",
    contact: "যোগাযোগ",
  },
  gu: {
    ...en,
    tagline: "તમારી દુકાન ૬૦ સેકંડમાં ઓનલાઈન",
    heroTitle: "૬ વિગતો. સાચી વેબસાઈટ.",
    heroSub: "Scale on તમારી ભાષામાં તમારા ધંધાની વેબસાઈટ બનાવે છે. કોઈ ટેકનિકલ જ્ઞાન જરૂરી નથી.",
    start: "મારી વેબસાઈટ બનાવો",
    seeAddons: "વધારાની સુવિધા",
    chooseLanguage: "તમારી ભાષા પસંદ કરો",
    businessName: "ધંધાનું નામ",
    whatYouDo: "તમે શું કરો છો?",
    city: "શહેર કે વિસ્તાર",
    phone: "ફોન નંબર",
    whatsapp: "વોટ્સએપ નંબર",
    services: "તમારી સેવા કે વસ્તુઓ",
    servicesHint: "એક લાઈનમાં એક",
    hours: "ખૂલવાનો સમય",
    about: "ધંધા વિશે એક લાઈન",
    next: "આગળ",
    back: "પાછળ",
    createSite: "વેબસાઈટ બનાવો",
    yourSiteReady: "તમારી વેબસાઈટ તૈયાર છે",
    callNow: "હમણાં કૉલ કરો",
    chatWhatsapp: "વોટ્સએપ પર વાત કરો",
    ourServices: "અમે શું આપીએ",
    visitUs: "અમને શોધો",
    editDetails: "વિગત બદલો",
    addAddons: "વોટ્સએપ અને માર્કેટિંગ",
    aboutUs: "અમારા વિશે",
    contact: "સંપર્ક",
  },
};

export function t(lang: LangCode, key: Keys): string {
  return dict[lang]?.[key] ?? en[key];
}
