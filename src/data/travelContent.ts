import destAmritsar from "@/assets/dest-amritsar.jpg";
import destAmsterdam from "@/assets/dest-amsterdam.jpg";
import destAndaman from "@/assets/dest-andaman.jpg";
import destAngkorwat from "@/assets/dest-angkorwat.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destBangkok from "@/assets/dest-bangkok.jpg";
import destBarcelona from "@/assets/dest-barcelona.jpg";
import destCapetown from "@/assets/dest-capetown.jpg";
import destCoorg from "@/assets/dest-coorg.jpg";
import destDarjeeling from "@/assets/dest-darjeeling.jpg";
import destDubai from "@/assets/dest-dubai.jpg";
import destFiji from "@/assets/dest-fiji.jpg";
import destGoa from "@/assets/dest-goa.jpg";
import destGreatwall from "@/assets/dest-greatwall.jpg";
import destHalong from "@/assets/dest-halong.jpg";
import destHampi from "@/assets/dest-hampi.jpg";
import destHavana from "@/assets/dest-havana.jpg";
import destIstanbul from "@/assets/dest-istanbul.jpg";
import destJaipur from "@/assets/dest-jaipur.jpg";
import destJodhpur from "@/assets/dest-jodhpur.jpg";
import destKerala from "@/assets/dest-kerala.jpg";
import destKyoto from "@/assets/dest-kyoto.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destLeh from "@/assets/dest-leh.jpg";
import destLondon from "@/assets/dest-london.jpg";
import destMachupicchu from "@/assets/dest-machupicchu.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";
import destMarrakech from "@/assets/dest-marrakech.jpg";
import destMeghalaya from "@/assets/dest-meghalaya.jpg";
import destMunnar from "@/assets/dest-munnar.jpg";
import destMysuru from "@/assets/dest-mysuru.jpg";
import destNewyork from "@/assets/dest-newyork.jpg";
import destNiagara from "@/assets/dest-niagara.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destPetra from "@/assets/dest-petra.jpg";
import destPondicherry from "@/assets/dest-pondicherry.jpg";
import destPrague from "@/assets/dest-prague.jpg";
import destRio from "@/assets/dest-rio.jpg";
import destRishikesh from "@/assets/dest-rishikesh.jpg";
import destRome from "@/assets/dest-rome.jpg";
import destSantorini from "@/assets/dest-santorini.jpg";
import destSeoul from "@/assets/dest-seoul.jpg";
import destSerengeti from "@/assets/dest-serengeti.jpg";
import destSingapore from "@/assets/dest-singapore.jpg";
import destSwitzerland from "@/assets/dest-switzerland.jpg";
import destSydney from "@/assets/dest-sydney.jpg";
import destTajmahal from "@/assets/dest-tajmahal.jpg";
import destTokyo from "@/assets/dest-tokyo.jpg";
import destUdaipur from "@/assets/dest-udaipur.jpg";
import destVaranasi from "@/assets/dest-varanasi.jpg";
import destVictoriafalls from "@/assets/dest-victoriafalls.jpg";

import foodBaklava from "@/assets/food-baklava.jpg";
import foodBibimbap from "@/assets/food-bibimbap.jpg";
import foodBiryani from "@/assets/food-biryani.jpg";
import foodButterChicken from "@/assets/food-butter-chicken.jpg";
import foodCeviche from "@/assets/food-ceviche.jpg";
import foodCholeBhature from "@/assets/food-cholebhature.jpg";
import foodChurrasco from "@/assets/food-churrasco.jpg";
import foodCroissant from "@/assets/food-croissant.jpg";
import foodDimsum from "@/assets/food-dimsum.jpg";
import foodDosa from "@/assets/food-dosa.jpg";
import foodEmpanadas from "@/assets/food-empanadas.jpg";
import foodFishcurry from "@/assets/food-fishcurry.jpg";
import foodGyros from "@/assets/food-gyros.jpg";
import foodInjera from "@/assets/food-injera.jpg";
import foodKoshari from "@/assets/food-koshari.jpg";
import foodMoussaka from "@/assets/food-moussaka.jpg";
import foodPadthai from "@/assets/food-padthai.jpg";
import foodPaella from "@/assets/food-paella.jpg";
import foodPanipuri from "@/assets/food-panipuri.jpg";
import foodPho from "@/assets/food-pho.jpg";
import foodPizza from "@/assets/food-pizza.jpg";
import foodRamen from "@/assets/food-ramen.jpg";
import foodSamosa from "@/assets/food-samosa.jpg";
import foodSushi from "@/assets/food-sushi.jpg";
import foodTacos from "@/assets/food-tacos.jpg";
import foodTagine from "@/assets/food-tagine.jpg";
import foodTandoori from "@/assets/food-tandoori.jpg";
import foodTiramisu from "@/assets/food-tiramisu.jpg";

import heroBeach from "@/assets/hero-beach.jpg";

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  image: string;
  description: string;
  highlights: string[];
  bestTime: string;
  avgCost: string;
  rating: number;
  lat: number;
  lng: number;
}

export interface FoodItem {
  id: string;
  name: string;
  origin: string;
  image: string;
  description: string;
  category: string;
}

export const heroImage = heroBeach;

export const destinations: Destination[] = [
  { id: "tajmahal", name: "Taj Mahal, Agra", country: "India", region: "Asia", image: destTajmahal, description: "One of the Seven Wonders of the World, this ivory-white marble mausoleum is a symbol of eternal love.", highlights: ["Sunrise views", "Mughal architecture", "Mehtab Bagh"], bestTime: "Oct - Mar", avgCost: "$30-50/day", rating: 4.9, lat: 27.1751, lng: 78.0421 },
  { id: "paris", name: "Paris", country: "France", region: "Europe", image: destParis, description: "The City of Light dazzles with iconic landmarks, world-class art, and exquisite cuisine.", highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"], bestTime: "Apr - Jun", avgCost: "$150-250/day", rating: 4.8, lat: 48.8566, lng: 2.3522 },
  { id: "bali", name: "Bali", country: "Indonesia", region: "Asia", image: destBali, description: "Island of the Gods featuring terraced rice paddies, ancient temples, and pristine beaches.", highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Kuta Beach"], bestTime: "Apr - Oct", avgCost: "$50-80/day", rating: 4.7, lat: -8.3405, lng: 115.092 },
  { id: "tokyo", name: "Tokyo", country: "Japan", region: "Asia", image: destTokyo, description: "A mesmerizing blend of ultramodern skyscrapers, historic temples, and vibrant pop culture.", highlights: ["Shibuya Crossing", "Senso-ji Temple", "Akihabara"], bestTime: "Mar - May", avgCost: "$100-180/day", rating: 4.8, lat: 35.6762, lng: 139.6503 },
  { id: "rome", name: "Rome", country: "Italy", region: "Europe", image: destRome, description: "The Eternal City where ancient ruins coexist with vibrant modern life.", highlights: ["Colosseum", "Vatican City", "Trevi Fountain"], bestTime: "Apr - Jun", avgCost: "$120-200/day", rating: 4.8, lat: 41.9028, lng: 12.4964 },
  { id: "newyork", name: "New York", country: "USA", region: "Americas", image: destNewyork, description: "The city that never sleeps — Broadway, Central Park, and infinite cultural experiences.", highlights: ["Times Square", "Central Park", "Statue of Liberty"], bestTime: "Apr - Jun", avgCost: "$200-350/day", rating: 4.7, lat: 40.7128, lng: -74.006 },
  { id: "dubai", name: "Dubai", country: "UAE", region: "Middle East", image: destDubai, description: "A futuristic metropolis rising from the desert with record-breaking architecture.", highlights: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari"], bestTime: "Nov - Mar", avgCost: "$150-300/day", rating: 4.6, lat: 25.2048, lng: 55.2708 },
  { id: "maldives", name: "Maldives", country: "Maldives", region: "Asia", image: destMaldives, description: "Paradise on Earth — crystal-clear waters, overwater villas, and coral reefs.", highlights: ["Overwater Bungalows", "Snorkeling", "Bioluminescent Beach"], bestTime: "Nov - Apr", avgCost: "$250-500/day", rating: 4.9, lat: 3.2028, lng: 73.2207 },
  { id: "barcelona", name: "Barcelona", country: "Spain", region: "Europe", image: destBarcelona, description: "Gaudí's architectural masterpieces meet Mediterranean beaches and vibrant nightlife.", highlights: ["Sagrada Família", "Park Güell", "La Rambla"], bestTime: "May - Jun", avgCost: "$100-180/day", rating: 4.7, lat: 41.3874, lng: 2.1686 },
  { id: "santorini", name: "Santorini", country: "Greece", region: "Europe", image: destSantorini, description: "Iconic white-washed buildings perched on volcanic cliffs overlooking the Aegean.", highlights: ["Oia Sunset", "Red Beach", "Caldera Views"], bestTime: "Jun - Sep", avgCost: "$120-250/day", rating: 4.8, lat: 36.3932, lng: 25.4615 },
  { id: "jaipur", name: "Jaipur", country: "India", region: "Asia", image: destJaipur, description: "The Pink City — a royal heritage of majestic forts and vibrant bazaars.", highlights: ["Hawa Mahal", "Amber Fort", "City Palace"], bestTime: "Oct - Mar", avgCost: "$25-50/day", rating: 4.6, lat: 26.9124, lng: 75.7873 },
  { id: "goa", name: "Goa", country: "India", region: "Asia", image: destGoa, description: "Sun-kissed beaches, Portuguese heritage, and legendary nightlife.", highlights: ["Baga Beach", "Old Goa Churches", "Dudhsagar Falls"], bestTime: "Nov - Feb", avgCost: "$30-60/day", rating: 4.5, lat: 15.2993, lng: 74.124 },
  { id: "kerala", name: "Kerala Backwaters", country: "India", region: "Asia", image: destKerala, description: "God's Own Country — serene backwaters, lush tea plantations, and Ayurvedic retreats.", highlights: ["Houseboat Cruise", "Munnar Tea Gardens", "Kathakali Dance"], bestTime: "Sep - Mar", avgCost: "$35-70/day", rating: 4.7, lat: 9.4981, lng: 76.3388 },
  { id: "london", name: "London", country: "UK", region: "Europe", image: destLondon, description: "A global capital of history, culture, and iconic landmarks along the Thames.", highlights: ["Big Ben", "British Museum", "Tower of London"], bestTime: "Jun - Aug", avgCost: "$150-280/day", rating: 4.7, lat: 51.5074, lng: -0.1278 },
  { id: "sydney", name: "Sydney", country: "Australia", region: "Oceania", image: destSydney, description: "Harbour city famous for its Opera House, stunning beaches, and outdoor lifestyle.", highlights: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"], bestTime: "Sep - Nov", avgCost: "$120-220/day", rating: 4.7, lat: -33.8688, lng: 151.2093 },
  { id: "istanbul", name: "Istanbul", country: "Turkey", region: "Europe", image: destIstanbul, description: "Where East meets West — domed mosques, bustling bazaars, and Bosphorus views.", highlights: ["Hagia Sophia", "Grand Bazaar", "Bosphorus Cruise"], bestTime: "Apr - May", avgCost: "$60-100/day", rating: 4.6, lat: 41.0082, lng: 28.9784 },
  { id: "kyoto", name: "Kyoto", country: "Japan", region: "Asia", image: destKyoto, description: "Ancient capital with over 2,000 temples, geisha districts, and cherry blossoms.", highlights: ["Fushimi Inari", "Arashiyama Bamboo", "Kinkaku-ji"], bestTime: "Mar - May", avgCost: "$90-150/day", rating: 4.8, lat: 35.0116, lng: 135.7681 },
  { id: "capetown", name: "Cape Town", country: "South Africa", region: "Africa", image: destCapetown, description: "Dramatic coastlines, Table Mountain, and world-renowned wine regions.", highlights: ["Table Mountain", "Cape of Good Hope", "Robben Island"], bestTime: "Nov - Mar", avgCost: "$60-120/day", rating: 4.6, lat: -33.9249, lng: 18.4241 },
  { id: "amsterdam", name: "Amsterdam", country: "Netherlands", region: "Europe", image: destAmsterdam, description: "Canal-lined city of art, cycling culture, and liberal spirit.", highlights: ["Anne Frank House", "Van Gogh Museum", "Canal Cruise"], bestTime: "Apr - May", avgCost: "$120-200/day", rating: 4.6, lat: 52.3676, lng: 4.9041 },
  { id: "singapore", name: "Singapore", country: "Singapore", region: "Asia", image: destSingapore, description: "A futuristic city-state with world-class food, gardens, and architecture.", highlights: ["Marina Bay Sands", "Gardens by the Bay", "Hawker Centers"], bestTime: "Feb - Apr", avgCost: "$100-200/day", rating: 4.7, lat: 1.3521, lng: 103.8198 },
  { id: "rio", name: "Rio de Janeiro", country: "Brazil", region: "Americas", image: destRio, description: "Carnival city with iconic Christ the Redeemer, samba beats, and stunning beaches.", highlights: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain"], bestTime: "Dec - Mar", avgCost: "$70-130/day", rating: 4.5, lat: -22.9068, lng: -43.1729 },
  { id: "machupicchu", name: "Machu Picchu", country: "Peru", region: "Americas", image: destMachupicchu, description: "Lost city of the Incas perched high in the Andes — a bucket-list wonder.", highlights: ["Inca Trail", "Sun Gate", "Huayna Picchu"], bestTime: "May - Sep", avgCost: "$60-100/day", rating: 4.9, lat: -13.1631, lng: -72.545 },
  { id: "bangkok", name: "Bangkok", country: "Thailand", region: "Asia", image: destBangkok, description: "Vibrant street life, ornate temples, and legendary street food.", highlights: ["Grand Palace", "Wat Arun", "Chatuchak Market"], bestTime: "Nov - Feb", avgCost: "$40-70/day", rating: 4.5, lat: 13.7563, lng: 100.5018 },
  { id: "havana", name: "Havana", country: "Cuba", region: "Americas", image: destHavana, description: "Time-capsule city of vintage cars, colonial architecture, and salsa music.", highlights: ["Old Havana", "Malecón", "Classic Car Tours"], bestTime: "Nov - Apr", avgCost: "$50-80/day", rating: 4.4, lat: 23.1136, lng: -82.3666 },
  { id: "prague", name: "Prague", country: "Czech Republic", region: "Europe", image: destPrague, description: "Fairy-tale city of Gothic cathedrals, cobblestone streets, and world-class beer.", highlights: ["Charles Bridge", "Prague Castle", "Old Town Square"], bestTime: "May - Sep", avgCost: "$70-120/day", rating: 4.7, lat: 50.0755, lng: 14.4378 },
  { id: "varanasi", name: "Varanasi", country: "India", region: "Asia", image: destVaranasi, description: "One of the world's oldest cities — mystical ghats, rituals, and spiritual energy.", highlights: ["Ganga Aarti", "Boat Ride at Dawn", "Sarnath"], bestTime: "Oct - Mar", avgCost: "$20-40/day", rating: 4.5, lat: 25.3176, lng: 83.0003 },
  { id: "udaipur", name: "Udaipur", country: "India", region: "Asia", image: destUdaipur, description: "City of Lakes — romantic palaces, shimmering waters, and Rajasthani grandeur.", highlights: ["Lake Pichola", "City Palace", "Jag Mandir"], bestTime: "Oct - Mar", avgCost: "$25-50/day", rating: 4.7, lat: 24.5854, lng: 73.7125 },
  { id: "coorg", name: "Coorg", country: "India", region: "Asia", image: destCoorg, description: "Scotland of India — misty hills, coffee plantations, and lush rainforests.", highlights: ["Abbey Falls", "Coffee Plantations", "Dubare Elephant Camp"], bestTime: "Oct - Mar", avgCost: "$25-45/day", rating: 4.5, lat: 12.3375, lng: 75.8069 },
  { id: "amritsar", name: "Amritsar", country: "India", region: "Asia", image: destAmritsar, description: "Home of the Golden Temple — spiritual heart of Sikhism and unforgettable food.", highlights: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"], bestTime: "Oct - Mar", avgCost: "$20-35/day", rating: 4.7, lat: 31.634, lng: 74.8723 },
  { id: "ladakh", name: "Ladakh", country: "India", region: "Asia", image: destLadakh, description: "Land of high passes — rugged Himalayan landscapes and ancient Buddhist monasteries.", highlights: ["Pangong Lake", "Nubra Valley", "Khardung La"], bestTime: "Jun - Sep", avgCost: "$40-70/day", rating: 4.8, lat: 34.1526, lng: 77.577 },
  { id: "leh", name: "Leh", country: "India", region: "Asia", image: destLeh, description: "Gateway to Ladakh with stunning mountain vistas and ancient palaces.", highlights: ["Leh Palace", "Shanti Stupa", "Magnetic Hill"], bestTime: "Jun - Sep", avgCost: "$35-60/day", rating: 4.7, lat: 34.1526, lng: 77.577 },
  { id: "darjeeling", name: "Darjeeling", country: "India", region: "Asia", image: destDarjeeling, description: "Queen of the Hills — panoramic Himalayan views, tea gardens, and toy trains.", highlights: ["Tiger Hill Sunrise", "Tea Plantations", "Darjeeling Railway"], bestTime: "Apr - Jun", avgCost: "$25-45/day", rating: 4.5, lat: 27.0361, lng: 88.2627 },
  { id: "andaman", name: "Andaman Islands", country: "India", region: "Asia", image: destAndaman, description: "Tropical paradise with turquoise waters, pristine beaches, and coral reefs.", highlights: ["Radhanagar Beach", "Scuba Diving", "Cellular Jail"], bestTime: "Nov - May", avgCost: "$50-80/day", rating: 4.6, lat: 11.7401, lng: 92.6586 },
  { id: "rishikesh", name: "Rishikesh", country: "India", region: "Asia", image: destRishikesh, description: "Yoga capital of the world set along the banks of the sacred Ganges.", highlights: ["Lakshman Jhula", "River Rafting", "Yoga Ashrams"], bestTime: "Sep - Nov", avgCost: "$15-30/day", rating: 4.5, lat: 30.0869, lng: 78.2676 },
  { id: "jodhpur", name: "Jodhpur", country: "India", region: "Asia", image: destJodhpur, description: "The Blue City — imposing Mehrangarh Fort and azure-painted old town.", highlights: ["Mehrangarh Fort", "Blue City Walk", "Umaid Bhawan Palace"], bestTime: "Oct - Mar", avgCost: "$20-40/day", rating: 4.6, lat: 26.2389, lng: 73.0243 },
  { id: "meghalaya", name: "Meghalaya", country: "India", region: "Asia", image: destMeghalaya, description: "Abode of Clouds — living root bridges, waterfalls, and pristine caves.", highlights: ["Living Root Bridges", "Nohkalikai Falls", "Dawki River"], bestTime: "Oct - May", avgCost: "$25-45/day", rating: 4.6, lat: 25.467, lng: 91.3662 },
  { id: "hampi", name: "Hampi", country: "India", region: "Asia", image: destHampi, description: "Ancient Vijayanagara ruins set among surreal boulder-strewn landscapes.", highlights: ["Virupaksha Temple", "Stone Chariot", "Sunset at Hemakuta"], bestTime: "Oct - Feb", avgCost: "$15-30/day", rating: 4.6, lat: 15.335, lng: 76.46 },
  { id: "pondicherry", name: "Pondicherry", country: "India", region: "Asia", image: destPondicherry, description: "French colonial charm meets South Indian spirituality on the Bay of Bengal.", highlights: ["Promenade Beach", "Auroville", "French Quarter"], bestTime: "Oct - Mar", avgCost: "$20-40/day", rating: 4.4, lat: 11.9416, lng: 79.8083 },
  { id: "munnar", name: "Munnar", country: "India", region: "Asia", image: destMunnar, description: "Rolling tea estates and misty peaks in Kerala's Western Ghats.", highlights: ["Tea Museum", "Eravikulam National Park", "Top Station"], bestTime: "Sep - Mar", avgCost: "$25-45/day", rating: 4.5, lat: 10.0889, lng: 77.0595 },
  { id: "mysuru", name: "Mysuru", country: "India", region: "Asia", image: destMysuru, description: "City of Palaces — royal heritage, sandalwood, and Dasara festivities.", highlights: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"], bestTime: "Oct - Feb", avgCost: "$20-40/day", rating: 4.5, lat: 12.2958, lng: 76.6394 },
  { id: "seoul", name: "Seoul", country: "South Korea", region: "Asia", image: destSeoul, description: "Dynamic capital blending ancient palaces with K-pop culture and street food.", highlights: ["Gyeongbokgung Palace", "Myeongdong", "Bukchon Hanok Village"], bestTime: "Mar - May", avgCost: "$80-140/day", rating: 4.6, lat: 37.5665, lng: 126.978 },
  { id: "marrakech", name: "Marrakech", country: "Morocco", region: "Africa", image: destMarrakech, description: "Sensory overload in the Red City — souks, riads, and the Atlas Mountains.", highlights: ["Jemaa el-Fnaa", "Majorelle Garden", "Medina Souks"], bestTime: "Mar - May", avgCost: "$40-80/day", rating: 4.5, lat: 31.6295, lng: -7.9811 },
  { id: "petra", name: "Petra", country: "Jordan", region: "Middle East", image: destPetra, description: "Rose-red city carved into ancient sandstone cliffs — a New7Wonder.", highlights: ["The Treasury", "The Siq", "Monastery"], bestTime: "Mar - May", avgCost: "$60-100/day", rating: 4.8, lat: 30.3285, lng: 35.4444 },
  { id: "angkorwat", name: "Angkor Wat", country: "Cambodia", region: "Asia", image: destAngkorwat, description: "Largest religious monument on Earth — sprawling Khmer temple complex.", highlights: ["Sunrise at Angkor Wat", "Bayon Temple", "Ta Prohm"], bestTime: "Nov - Feb", avgCost: "$30-50/day", rating: 4.8, lat: 13.4125, lng: 103.867 },
  { id: "fiji", name: "Fiji", country: "Fiji", region: "Oceania", image: destFiji, description: "Tropical archipelago of 333 islands with crystal lagoons and Fijian warmth.", highlights: ["Mamanuca Islands", "Coral Coast", "Kava Ceremony"], bestTime: "May - Oct", avgCost: "$100-200/day", rating: 4.6, lat: -17.7134, lng: 178.065 },
  { id: "serengeti", name: "Serengeti", country: "Tanzania", region: "Africa", image: destSerengeti, description: "Witness the Great Migration — endless plains teeming with wildlife.", highlights: ["Great Migration", "Big Five Safari", "Hot Air Balloon"], bestTime: "Jun - Oct", avgCost: "$150-400/day", rating: 4.9, lat: -2.3333, lng: 34.8333 },
  { id: "halong", name: "Ha Long Bay", country: "Vietnam", region: "Asia", image: destHalong, description: "Emerald waters dotted with thousands of towering limestone karsts.", highlights: ["Junk Boat Cruise", "Sung Sot Cave", "Kayaking"], bestTime: "Oct - Dec", avgCost: "$40-70/day", rating: 4.7, lat: 20.9101, lng: 107.1839 },
  { id: "switzerland", name: "Swiss Alps", country: "Switzerland", region: "Europe", image: destSwitzerland, description: "Majestic alpine peaks, pristine lakes, and charming mountain villages.", highlights: ["Jungfrau", "Lake Lucerne", "Zermatt"], bestTime: "Jun - Sep", avgCost: "$200-400/day", rating: 4.8, lat: 46.8182, lng: 8.2275 },
  { id: "greatwall", name: "Great Wall of China", country: "China", region: "Asia", image: destGreatwall, description: "Ancient fortification stretching over 13,000 miles across northern China.", highlights: ["Mutianyu Section", "Jinshanling Trek", "Great Wall at Sunset"], bestTime: "Apr - Oct", avgCost: "$50-100/day", rating: 4.8, lat: 40.4319, lng: 116.5704 },
  { id: "niagara", name: "Niagara Falls", country: "Canada/USA", region: "Americas", image: destNiagara, description: "Thundering waterfalls on the US-Canada border — pure natural power.", highlights: ["Maid of the Mist", "Journey Behind the Falls", "Illumination at Night"], bestTime: "Jun - Aug", avgCost: "$80-150/day", rating: 4.6, lat: 43.0896, lng: -79.0849 },
  { id: "victoriafalls", name: "Victoria Falls", country: "Zimbabwe/Zambia", region: "Africa", image: destVictoriafalls, description: "The Smoke That Thunders — one of the world's largest and most spectacular waterfalls.", highlights: ["Devil's Pool", "Bungee Jumping", "Sunset Cruise"], bestTime: "Feb - May", avgCost: "$80-150/day", rating: 4.7, lat: -17.9243, lng: 25.8572 },
];

export const foods: FoodItem[] = [
  { id: "butter-chicken", name: "Butter Chicken", origin: "India", image: foodButterChicken, description: "Creamy tomato-based curry with tender chicken — India's most beloved dish.", category: "Main Course" },
  { id: "biryani", name: "Hyderabadi Biryani", origin: "India", image: foodBiryani, description: "Fragrant layered rice dish with aromatic spices and tender meat.", category: "Main Course" },
  { id: "sushi", name: "Sushi Platter", origin: "Japan", image: foodSushi, description: "Artfully prepared vinegared rice with fresh seafood and vegetables.", category: "Main Course" },
  { id: "pizza", name: "Neapolitan Pizza", origin: "Italy", image: foodPizza, description: "Wood-fired perfection with San Marzano tomatoes and fresh mozzarella.", category: "Main Course" },
  { id: "tacos", name: "Tacos al Pastor", origin: "Mexico", image: foodTacos, description: "Spit-grilled pork with pineapple, cilantro, and fresh salsa verde.", category: "Street Food" },
  { id: "ramen", name: "Ramen", origin: "Japan", image: foodRamen, description: "Rich umami broth with handmade noodles, chashu pork, and soft-boiled egg.", category: "Soup" },
  { id: "croissant", name: "Croissant", origin: "France", image: foodCroissant, description: "Buttery, flaky French pastry — golden layers of pure indulgence.", category: "Pastry" },
  { id: "pad-thai", name: "Pad Thai", origin: "Thailand", image: foodPadthai, description: "Stir-fried rice noodles with shrimp, peanuts, lime, and tamarind sauce.", category: "Main Course" },
  { id: "paella", name: "Paella", origin: "Spain", image: foodPaella, description: "Saffron-infused rice with seafood, chorizo, and Mediterranean flavors.", category: "Main Course" },
  { id: "pho", name: "Pho", origin: "Vietnam", image: foodPho, description: "Aromatic beef broth with rice noodles, fresh herbs, and lime.", category: "Soup" },
  { id: "dim-sum", name: "Dim Sum", origin: "China", image: foodDimsum, description: "Bite-sized steamed dumplings filled with shrimp, pork, and vegetables.", category: "Appetizer" },
  { id: "tiramisu", name: "Tiramisu", origin: "Italy", image: foodTiramisu, description: "Layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa.", category: "Dessert" },
  { id: "samosa", name: "Samosa", origin: "India", image: foodSamosa, description: "Crispy deep-fried pastry filled with spiced potatoes and peas.", category: "Street Food" },
  { id: "dosa", name: "Masala Dosa", origin: "India", image: foodDosa, description: "Crispy rice-lentil crepe stuffed with spiced potato filling.", category: "Main Course" },
  { id: "chole-bhature", name: "Chole Bhature", origin: "India", image: foodCholeBhature, description: "Fluffy fried bread with spicy chickpea curry — a Punjabi classic.", category: "Main Course" },
  { id: "tandoori", name: "Tandoori Chicken", origin: "India", image: foodTandoori, description: "Yogurt-marinated chicken cooked in a blazing clay tandoor oven.", category: "Main Course" },
  { id: "fish-curry", name: "Kerala Fish Curry", origin: "India", image: foodFishcurry, description: "Tangy coconut-based fish curry with curry leaves and raw mango.", category: "Main Course" },
  { id: "pani-puri", name: "Pani Puri", origin: "India", image: foodPanipuri, description: "Crispy hollow balls filled with spicy tangy water and chutneys.", category: "Street Food" },
  { id: "bibimbap", name: "Bibimbap", origin: "South Korea", image: foodBibimbap, description: "Mixed rice bowl topped with vegetables, meat, egg, and gochujang.", category: "Main Course" },
  { id: "ceviche", name: "Ceviche", origin: "Peru", image: foodCeviche, description: "Fresh raw fish cured in citrus juices with onions and chili peppers.", category: "Appetizer" },
  { id: "baklava", name: "Baklava", origin: "Turkey", image: foodBaklava, description: "Sweet layered filo pastry filled with chopped nuts and honey syrup.", category: "Dessert" },
  { id: "gyros", name: "Gyros", origin: "Greece", image: foodGyros, description: "Seasoned meat wrapped in warm pita with tzatziki and fresh vegetables.", category: "Street Food" },
  { id: "empanadas", name: "Empanadas", origin: "Argentina", image: foodEmpanadas, description: "Baked pastry pockets stuffed with spiced meat and olives.", category: "Street Food" },
  { id: "churrasco", name: "Churrasco", origin: "Brazil", image: foodChurrasco, description: "Brazilian-style grilled meat carved tableside from large skewers.", category: "Main Course" },
  { id: "injera", name: "Injera Platter", origin: "Ethiopia", image: foodInjera, description: "Spongy sourdough flatbread served with stews and lentil dishes.", category: "Main Course" },
  { id: "koshari", name: "Koshari", origin: "Egypt", image: foodKoshari, description: "Egypt's national dish — rice, lentils, pasta, and spicy tomato sauce.", category: "Main Course" },
  { id: "tagine", name: "Chicken Tagine", origin: "Morocco", image: foodTagine, description: "Slow-cooked stew with preserved lemons, olives, and warming spices.", category: "Main Course" },
  { id: "moussaka", name: "Moussaka", origin: "Greece", image: foodMoussaka, description: "Layered eggplant casserole with spiced meat and béchamel sauce.", category: "Main Course" },
];

export const travelPackages = [
  { id: "golden-triangle", name: "Golden Triangle", destinations: ["Delhi", "Agra", "Jaipur"], duration: "7 Days", price: "$499", image: destTajmahal },
  { id: "european-dream", name: "European Dream", destinations: ["Paris", "Rome", "Barcelona"], duration: "14 Days", price: "$2,499", image: destParis },
  { id: "backpacker-bliss", name: "Backpacker Bliss", destinations: ["Bangkok", "Bali", "Ha Long Bay"], duration: "21 Days", price: "$1,199", image: destBali },
  { id: "luxury-maldives", name: "Luxury Maldives", destinations: ["Malé", "Ari Atoll", "Baa Atoll"], duration: "5 Days", price: "$3,999", image: destMaldives },
];
