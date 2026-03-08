const itinerary = [
  {
    date: "Thursday, May 7",
    location: "San Francisco",
    title: "Travel day",
    items: [
      { time: "9:00 AM", activity: "Leave for SFO; Waymo pick up", notes: "", kind: "event" },
      { time: "12:00 PM", activity: "Flight SFO > Haneda departs (JL 1 5UD8ZG)", notes: "", kind: "event" },
    ],
  },
  {
    date: "Friday, May 8",
    location: "Tokyo",
    title: "Landing in Tokyo: Hoshinoya Settle-In + Ginza After Dark",
    items: [
      { time: "3:10 PM", activity: "Flight SFO > Haneda Arrives", notes: "", kind: "event" },
      { time: "4:00 PM", activity: "Taxi", notes: "", kind: "event" },
      { time: "5:00 PM", activity: "Arrive at Hoshinoya Tokyo", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "Ginza exploration", notes: "", kind: "event" },
      { time: "", activity: "Dinner: Komeda-is", notes: "", kind: "event" },
      { time: "", activity: "Maybe pick up protein powder (bio-ce-bon, Ginza Six)", notes: "", kind: "event" },
      { time: "Hotel: Hoshinoya Tokyo", activity: "1-9-1 Otemachi, Chiyoda-ku, Tokyo 100-0004", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Saturday, May 9",
    location: "Tokyo",
    title: "Local Tokyo: Gotoku-ji Temple Calm, Shimokitazawa Finds, and Shibuya Energy",
    items: [
      { time: "9:30 AM", activity: "Universal Bakes and Cafe", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "Gotoku-ji", notes: "", kind: "event" },
      { time: "12:00 PM", activity: "Lunch: Vegan Sushi Tokyo (or Vegan Bistro Jangara)", notes: "", kind: "event" },
      { time: "", activity: "Photomatic, Iyoshi Cola, Square Enix?", notes: "", kind: "event" },
      { time: "", activity: "Ragtag (Harujuku and Shibuya), Snoopytown, Beams", notes: "", kind: "event" },
      { time: "3:00 PM", activity: "Go to hotel (leave for dinner at 5:00pm?)", notes: "", kind: "event" },
      { time: "5:30 PM", activity: "Dinner: Izakya Nowhere (open 5pm)", notes: "", kind: "event" },
      { time: "", activity: "Sumida River nighttime walk", notes: "", kind: "event" },
      { time: "Hotel: Hoshinoya Tokyo", activity: "1-9-1 Otemachi, Chiyoda-ku, Tokyo 100-0004", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Sunday, May 10",
    location: "Tokyo",
    title: "Indulgent Tokyo: Gardens, Shinjuku Shopping, and Aman Spa Reset",
    items: [
      { time: "", activity: "Gym", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "Shinjuku Gyoen", notes: "", kind: "event" },
      { time: "11:00 AM", activity: "Snack: marbre vegan", notes: "", kind: "event" },
      { time: "", activity: "Isetan men's, CDG", notes: "", kind: "event" },
      { time: "1:00 PM", activity: "Lunch: Ain Soph Shinjuku", notes: "", kind: "event" },
      { time: "", activity: "If time permits, cat billboard and maybe Tokyo Metropolitan Gov. Building observation deck", notes: "", kind: "event" },
      { time: "2:30 PM", activity: "head to Aman", notes: "", kind: "event" },
      { time: "3:00 PM", activity: "Aman Spa Afternoon (4pm treatment; 90min Grounding Massage Ritual)", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "Dinner: Bistro Jangara (20mins) or Ginza + 2foods, Komeda-Is (17mins) [also Ginza block on Tuesday]", notes: "", kind: "event" },
      { time: "Hotel: Hoshinoya Tokyo", activity: "1-9-1 Otemachi, Chiyoda-ku, Tokyo 100-0004", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Monday, May 11",
    location: "Tokyo",
    title: "Nikko: Mountains, Shrines, and Yuba",
    items: [
      { time: "8:00 AM", activity: "Train to Nikko Spacia X (depart from Tokyo Skytree)", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "Arrive Tobu-Nikko", notes: "", kind: "event" },
      { time: "", activity: "Shinkyo Bridge, Toshogu Shrine, Kanmangafuchi Abyss", notes: "", kind: "event" },
      { time: "", activity: "Lunch: Cafe Restaurant Bell for yuba set", notes: "", kind: "event" },
      { time: "5:45 PM", activity: "Train to Tokyo", notes: "", kind: "event" },
      { time: "7:45 PM", activity: "Back in Tokyo", notes: "", kind: "event" },
      { time: "8:00 PM", activity: "Dinner: Falafel Brothers or Izakaya Nowhere (open until 10pm)", notes: "", kind: "event" },
      { time: "Hotel: Hoshinoya Tokyo", activity: "1-9-1 Otemachi, Chiyoda-ku, Tokyo 100-0004", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Tuesday, May 12",
    location: "",
    title: "Artful Tokyo: Old Roots, Modern Design, and FARO",
    items: [
      { time: "9:00 AM", activity: "Nuts Exchange Tokyo", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "Nezu Museum", notes: "", kind: "event" },
      { time: "", activity: "Aoyama shops: CDG, Dries, Pleats Please, Sacai. Margiela + MM6", notes: "", kind: "event" },
      { time: "1:00 PM", activity: "Lunch Brown Rice Ometosando or Vegan Bistro Jangara", notes: "", kind: "event" },
      { time: "2:30 PM", activity: "Gym & onsen", notes: "", kind: "event" },
      { time: "5:00 PM", activity: "Ginza", notes: "", kind: "event" },
      { time: "6:30 PM", activity: "Dinner: FARO 1*", notes: "", kind: "event" },
      { time: "Hotel: Hoshinoya Tokyo", activity: "1-9-1 Otemachi, Chiyoda-ku, Tokyo 100-0004", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Wednesday, May 13",
    location: "Tokyo/Kamakura",
    title: "Kamakura: Temples, Sea Air, and vegan Ryokan",
    items: [
      { time: "", activity: "Send luggage to Kyoto", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "train to Kamakura", notes: "", kind: "event" },
      { time: "11:00 AM", activity: "arrive in Kamakura; drop bags at Kishi-ke Ryokan", notes: "", kind: "event" },
      { time: "", activity: "Lunch luna burger", notes: "", kind: "event" },
      { time: "", activity: "Hasedera Temple, Buddha", notes: "", kind: "event" },
      { time: "", activity: "Options if time: Zeniarai Shrine,Genjiyama Park, Tsurugaoka Shrine, Old Town", notes: "", kind: "event" },
      { time: "7:00 PM", activity: "Dinner: magokoro", notes: "", kind: "event" },
      { time: "Hotel: Kishi-ke Ryokan", activity: "21-5 Sakanoshita, Kamakura, Kanagawa 248-0021, Japan", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Thursday, May 14",
    location: "Kamakura/Kyoto",
    title: "Craft & Transition: Shojin Morning + Hanko Workshop, Then On to Kyoto",
    items: [
      { time: "9:30 AM", activity: "Shojin breakfast - hotel will provide lunchbox!", notes: "", kind: "event" },
      { time: "11:30 AM", activity: "Hanko class", notes: "", kind: "event" },
      { time: "12:30 PM", activity: "Train to Shin-Yokahama", notes: "", kind: "event" },
      { time: "2:00 PM", activity: "Train to Kyoto", notes: "", kind: "event" },
      { time: "4:00 PM", activity: "Arrive Kyoto Station", notes: "", kind: "event" },
      { time: "", activity: "Check in hotel", notes: "", kind: "event" },
      { time: "5:00 PM", activity: "Dinner: Vegan Izakaya Masaka (open at 5pm)", notes: "", kind: "event" },
      { time: "", activity: "Laundry and gym", notes: "", kind: "event" },
      { time: "8:00 PM", activity: "Sauna", notes: "", kind: "event" },
      { time: "Hotel: Tamao Kyoto", activity: "〒600-8409 Kyoto, Shimogyo Ward, Tamayacho, 519", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Friday, May 15",
    location: "Kyoto",
    title: "Kyoto at a Distance: Himeji Castles, History, and Evening Wanders",
    items: [
      { time: "8:29 AM", activity: "train to Himeji", notes: "", kind: "event" },
      { time: "9:15 AM", activity: "arrival, grab coffee", notes: "", kind: "event" },
      { time: "9:45 AM", activity: "Meet at Himeji Station JR Line (Central North Exit or Himeji Castle Exit near 7-11)", notes: "", kind: "event" },
      { time: "", activity: "Himeji Castle and Koko-en Gardens Tickets", notes: "", kind: "event" },
      { time: "", activity: "guide whatsapp +81-90-9712-1750", notes: "", kind: "event" },
      { time: "1:45 PM", activity: "Lunch: Il Riccio OR Kotonoki to go (leave at 2:45pm for train) - update guide!", notes: "", kind: "event" },
      { time: "3:11 PM", activity: "Train", notes: "", kind: "event" },
      { time: "4:00 PM", activity: "Arrive Kyoto Station", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "leave for dinner", notes: "", kind: "event" },
      { time: "6:30 PM", activity: "Dinner: Mumokuteki", notes: "", kind: "event" },
      { time: "Hotel: Tamao Kyoto", activity: "〒600-8409 Kyoto, Shimogyo Ward, Tamayacho, 519", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Saturday, May 16",
    location: "Kyoto",
    title: "Kyoto Light: Markets, Hike, and Recovery Time",
    items: [
      { time: "9:00 AM", activity: "Breakfast", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "Gym (and laundry if needed)", notes: "", kind: "event" },
      { time: "", activity: "Send luggage to Tokyo", notes: "", kind: "event" },
      { time: "12:00 PM", activity: "Lunch: Nijiya (12-3pm) or Vegginy (12-2:30pm open) or Zirael (12:30-7pm open)", notes: "", kind: "event" },
      { time: "2:00 PM", activity: "Honen-in (moss temple) and Ginkaku-ji (temple) + Mt. Daimonji-yama Climb", notes: "", kind: "event" },
      { time: "6:30 PM", activity: "leave for dinner", notes: "", kind: "event" },
      { time: "7:00 PM", activity: "Dinner: Uno Ramen Sanjo", notes: "", kind: "event" },
      { time: "Hotel: Tamao Kyoto", activity: "〒600-8409 Kyoto, Shimogyo Ward, Tamayacho, 519", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Sunday, May 17",
    location: "Kyoto/Naoshima",
    title: "Toward the Art Island: Travel South and First Naoshima Encounters",
    items: [
      { time: "8:47 AM", activity: "Train to Okayama", notes: "", kind: "event" },
      { time: "9:54 AM", activity: "Train to Uno", notes: "", kind: "event" },
      { time: "11:00 AM", activity: "Ferry (get roundtrip tix)", notes: "", kind: "event" },
      { time: "11:45 AM", activity: "Shuttle (first coffee mikauzkishoten)", notes: "", kind: "event" },
      { time: "", activity: "Dropoff at Naoshima Port", notes: "", kind: "event" },
      { time: "12:15 PM", activity: "Lunch: aisunao or apron", notes: "", kind: "event" },
      { time: "1:30 PM", activity: "Art House Project (Go'O, Haisha, Kadoya)", notes: "", kind: "event" },
      { time: "2:20 PM", activity: "Minamidera", notes: "", kind: "event" },
      { time: "2:52 PM", activity: "Bus", notes: "", kind: "event" },
      { time: "3:19 PM", activity: "Arrival", notes: "", kind: "event" },
      { time: "3:30 PM", activity: "Chichu", notes: "", kind: "event" },
      { time: "5:15 PM", activity: "Shuttle pickup at Chichu Museum", notes: "", kind: "event" },
      { time: "6:30 PM", activity: "Dinner: Kaiseki at Hotel; relax in onsen", notes: "", kind: "event" },
      { time: "Hotel: Ryokan Roka", activity: "123, Naoshima, Kagawa District, Kagawa 761-3110, Japan", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Monday, May 18",
    location: "Naoshima",
    title: "Naoshima Immersion: Chichu Light + Island Wanders",
    items: [
      { time: "9:00 AM", activity: "breakfast", notes: "", kind: "event" },
      { time: "", activity: "Bikeride", notes: "", kind: "event" },
      { time: "", activity: "Benessee House", notes: "", kind: "event" },
      { time: "", activity: "Lunch", notes: "", kind: "event" },
      { time: "", activity: "Valley Gallery", notes: "", kind: "event" },
      { time: "3:00 PM", activity: "Hiroshi Sugimoto Gallery: Time Corridors", notes: "", kind: "event" },
      { time: "6:30 PM", activity: "Dinner: Kaiseki at Hotel; relax in onsen", notes: "", kind: "event" },
      { time: "Hotel: Ryokan Roka", activity: "123, Naoshima, Kagawa District, Kagawa 761-3110, Japan", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Tuesday, May 19",
    location: "Naoshima/Tokyo",
    title: "Tokyo Return: Noeud.Tokyo and Tokyo Tower Views",
    items: [
      { time: "7:45 AM", activity: "Breakfast", notes: "", kind: "event" },
      { time: "8:30 AM", activity: "Shuttle", notes: "", kind: "event" },
      { time: "8:52 AM", activity: "Ferry Miyanoura", notes: "", kind: "event" },
      { time: "9:35 AM", activity: "Train to Okayma (grab train food)", notes: "", kind: "event" },
      { time: "10:52 AM", activity: "Train to Tokyo", notes: "", kind: "event" },
      { time: "1:57 PM", activity: "Arrive Tokyo", notes: "", kind: "event" },
      { time: "2:30 PM", activity: "Check in", notes: "", kind: "event" },
      { time: "3:00 PM", activity: "Lunch: Room service", notes: "", kind: "event" },
      { time: "", activity: "Unpack, laundry, etc", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "Dinner: Noeud.Tokyo", notes: "", kind: "event" },
      { time: "9:00 PM", activity: "Tokyo Tower View", notes: "", kind: "event" },
      { time: "Hotel: Okura Tokyo", activity: "2-10-4 Toranomon, Minato-ku", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Wednesday, May 20",
    location: "Tokyo",
    title: "Hands-On Tokyo: Chopstick Workshop, Udatsu Sushi, gay Japan",
    items: [
      { time: "10:30 AM", activity: "Chopstick workshop (90 mins)", notes: "", kind: "event" },
      { time: "12:30 PM", activity: "Lunch: Marugoto [option for Ginza on the way back]", notes: "", kind: "event" },
      { time: "2:30 PM", activity: "gym", notes: "", kind: "event" },
      { time: "5:30 PM", activity: "Leave for Udatsu", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "Dinner: Udatsu", notes: "", kind: "event" },
      { time: "9:00 PM", activity: "Ni-Chome", notes: "", kind: "event" },
      { time: "Hotel: Okura Tokyo", activity: "2-10-4 Toranomon, Minato-ku", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Thursday, May 21",
    location: "Tokyo",
    title: "Birthday and Japan Goodbye: National Diet, Birthday Lunch, and Hawai'i",
    items: [
      { time: "morning", activity: "early-ish breakfast, pack, check-out", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "Option to stop by Okura Museum or gym", notes: "", kind: "event" },
      { time: "11:20 AM", activity: "leave for lunch (10 mins)", notes: "", kind: "event" },
      { time: "11:30 AM", activity: "Lunch: Sougo + Oscar Wilde", notes: "", kind: "event" },
      { time: "1:00 PM", activity: "leave for Kokkai-gijidōmae Sta. (about 20mins)", notes: "", kind: "event" },
      { time: "1:30 PM", activity: "Tameike: Exploring the Heart of Japanese Politics Tour (3 hours)", notes: "", kind: "event" },
      { time: "4:30 PM", activity: "Tour concludes", notes: "", kind: "event" },
      { time: "4:45 PM", activity: "Option 1) Brown Rice Ometosando + any Aoyama stores; back to Okura at 6pm", notes: "", kind: "event" },
      { time: "4:55 PM", activity: "Option 2) Alchemy or Shogun Burger; walk back to Okura 6:20pm", notes: "", kind: "event" },
      { time: "6:45 PM", activity: "Take car to airport", notes: "", kind: "event" },
      { time: "7:30 PM", activity: "Arrive at Airport", notes: "", kind: "event" },
      { time: "9:55 PM", activity: "Haneda > Honolulu (JL72; 64VUHE)", notes: "", kind: "event" },
    ],
  },
  {
    date: "TIMEWARP",
    location: "",
    title: "And another one: Birthday Pt 2, jet lag recovery and massage",
    items: [
      { time: "10:20 AM", activity: "Arrive Honolulu", notes: "", kind: "event" },
      { time: "11:00 AM", activity: "Car service", notes: "", kind: "event" },
      { time: "12:00 PM", activity: "Lunch at Island Vintage or Peace Cafe (delivery possible)", notes: "", kind: "event" },
      { time: "1:00 PM", activity: "Optional: Royal Hawaiian Tour at Bakery (60 mins)", notes: "", kind: "event" },
      { time: "3:00 PM", activity: "Massage", notes: "", kind: "event" },
      { time: "5:00 PM", activity: "Dinner at Island Vintage or Floralia (no delivery)", notes: "", kind: "event" },
      { time: "", activity: "Night time beach walk with banana ice cream from banan", notes: "", kind: "event" },
      { time: "Hotel: Royal Hawaiian", activity: "2259 Kalākaua Ave, Honolulu, HI 96815", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Friday, May 22",
    location: "Honolulu",
    title: "Waikiki Living: Native Plants and Beach",
    items: [
      { time: "7:00 AM", activity: "Beach chair reservations start", notes: "", kind: "event" },
      { time: "", activity: "Gym", notes: "", kind: "event" },
      { time: "12:00 PM", activity: "Lunch at Island Vintage or Peace Cafe (delivery possible)", notes: "", kind: "event" },
      { time: "1:00 PM", activity: "Optional: Royal Hawaiian Tour at Bakery (60 mins)", notes: "", kind: "event" },
      { time: "", activity: "Beach", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "Beach chair reservations end", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "Dinner at Floralia [Island Vintage, Peace Cafe also open & delivery]", notes: "", kind: "event" },
      { time: "Hotel: Royal Hawaiian", activity: "2259 Kalākaua Ave, Honolulu, HI 96815", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Saturday, May 23",
    location: "Honolulu",
    title: "Island Adventure: eBike, Packing, and Goodbye Dinner at Tane",
    items: [
      { time: "8:00 AM", activity: "eBike Tour Honolulu Rainforest", notes: "", kind: "event" },
      { time: "", activity: "Pickup Sheraton Waikiki Beach Resort, 2255 Kalakaua Avenue, Honolulu, Oahu, HI 96815", notes: "", kind: "event" },
      { time: "11:30 AM", activity: "Bike ride ends", notes: "", kind: "event" },
      { time: "12:00 PM", activity: "Arrive hotel", notes: "", kind: "event" },
      { time: "", activity: "Lunch at Island Vintage or Peace Cafe (delivery possible)", notes: "", kind: "event" },
      { time: "", activity: "Gym and pack", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "Dinner at Tane Vegan Izakaya (delivery possible) [Peace, Floralia also open]", notes: "", kind: "event" },
      { time: "Hotel: Royal Hawaiian", activity: "2259 Kalākaua Ave, Honolulu, HI 96815", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Sunday, May 24",
    location: "Honolulu",
    title: "Back to Reality: Travel Home",
    items: [
      { time: "10:00 AM", activity: "Shuttle", notes: "", kind: "event" },
      { time: "12:30 PM", activity: "HNL > SFO flight (HA 812, FC5OWM)", notes: "", kind: "event" },
      { time: "8:30 PM", activity: "Arrive SFO", notes: "", kind: "event" },
    ],
  },
];

const state = {
  activeLocation: "All",
  highlightsOnly: false,
};

const heroStats = document.querySelector("#heroStats");
const routeRibbon = document.querySelector("#routeRibbon");
const routeCards = document.querySelector("#routeCards");
const hotelSummary = document.querySelector("#hotelSummary");
const locationFilters = document.querySelector("#locationFilters");
const timelineGrid = document.querySelector("#timelineGrid");
const resultsLabel = document.querySelector("#resultsLabel");
const focusToggle = document.querySelector("#focusToggle");
const destinationSpotlight = document.querySelector("#destinationSpotlight");
const dayCardTemplate = document.querySelector("#dayCardTemplate");
const eventTemplate = document.querySelector("#eventTemplate");

const uniqueStops = [
  "San Francisco",
  "Tokyo",
  "Kamakura",
  "Kyoto",
  "Naoshima",
  "Honolulu",
];

const routeNarrative = [
  {
    title: "Arrival arc ✈️",
    text: "San Francisco departure into a Tokyo landing stretch with neighborhood wandering, museum days, Nikko, and a Kamakura overnight. It starts with soft landings and resets: hotel check-ins, favorite vegan meals, shopping pockets, and long walks easing the trip into motion. By the time Kamakura arrives, the rhythm has shifted from arrival logistics into temple air, seaside calm, and a more intimate pace.",
  },
  {
    title: "Middle chapter ⛩️",
    text: "Kyoto anchors the cultural center of the trip, with Himeji as a side quest before shifting south to Naoshima's slower museum rhythm. This section feels more carved-out and intentional: workshops, castle history, hikes, saunas, and carefully chosen dinners. Then the trip opens up again on Naoshima, where ferries, galleries, and onsen time replace city momentum with quiet immersion.",
  },
  {
    title: "Exit glide 🌺",
    text: "Tokyo returns for the finale, then the itinerary time-shifts into Honolulu for decompression before the flight back to San Francisco. The final Tokyo days carry the celebratory core of the trip, including the May 21 birthday itself, before Honolulu turns everything looser and sunnier. It reads like a coda: beach time, massage, one more great dinner, then the transition back home.",
  },
];

const hotelImages = {
  "Hotel: Hoshinoya Tokyo":
    "https://media-cdn.tripadvisor.com/media/photo-s/1b/66/a5/ac/caption.jpg",
  "Hotel: Kishi-ke Ryokan":
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310086629.jpg?k=44d6ac190eef9c0e4774ac65659a5e84508c7304fa000ddeb2acb1749fb7db32&o=",
  "Hotel: Tamao Kyoto":
    "https://www.img-ikyu.com/contents/common/dg/image/sd/acc8/00051678/00051678a.jpg?auto=compress,format&fit=crop&h=500&lossless=0&w=750",
  "Hotel: Ryokan Roka":
    "https://www.thehotelguru.com/_images/7c/35/7c358e2b3ede5ea339300f7705cf8911/original.jpg",
  "Hotel: Okura Tokyo":
    "https://theokuratokyo.jp/wp-content/uploads/2025/03/Prestige-Lobby-Rokkaku-AutumnLeaves-Recommended_TKSN8642-625x417.jpg",
  "Hotel: Royal Hawaiian":
    "https://cache.marriott.com/content/dam/marriott-renditions/HNLLC/hnllc-building-1813-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
};

const hotelLinks = {
  "Hotel: Hoshinoya Tokyo": "https://hoshinoresorts.com/en/hotels/hoshinoyatokyo/",
  "Hotel: Kishi-ke Ryokan": "https://www.kishike.com/en/",
  "Hotel: Tamao Kyoto": "https://www.tamaokyoto.com/en/",
  "Hotel: Ryokan Roka": "https://roka.voyage/",
  "Hotel: Okura Tokyo": "https://theokuratokyo.jp/en/",
  "Hotel: Royal Hawaiian": "https://www.royal-hawaiian.com/",
};

const hotelMapLinks = {
  "Hotel: Hoshinoya Tokyo": "https://goo.gl/maps/KJ18ein5gBkHWZHq7",
  "Hotel: Kishi-ke Ryokan": "https://goo.gl/maps/urJPCZnQbwLsZSBC9",
  "Hotel: Tamao Kyoto": "https://goo.gl/maps/DS21AZ9uHJeMmVcT8",
  "Hotel: Ryokan Roka": "https://goo.gl/maps/CZ7GSizRRz8V2S3i6",
  "Hotel: Okura Tokyo": "https://maps.app.goo.gl/FrPGtMhN9fp9dZFu5",
  "Hotel: Royal Hawaiian": "https://goo.gl/maps/aU6cN71r1uoS5vqd8",
};

const destinationSpotlights = {
  All: {
    title: "The full route",
    summary:
      "This itinerary unfolds as a celebratory run through Tokyo, Kamakura, Kyoto, Naoshima, and Honolulu before returning home. It reads like a generous birthday trip at full volume: museums, temples, train rides, unforgettable meals, spa time, beach days, and the May 21 centerpiece woven through it all.",
    image:
      "https://theokuratokyo.jp/wp-content/uploads/2025/03/Prestige-Lobby-Rokkaku-AutumnLeaves-Recommended_TKSN8642-625x417.jpg",
    alt: "The Okura Tokyo lobby",
  },
  "San Francisco": {
    title: "Departure day",
    summary:
      "San Francisco is the runway rather than the destination. It is the clean handoff into the trip: pickup, airport, and the first long-haul flight that starts the birthday journey.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWC_-Z8q74e4CmusFu2jHGd9e1ER5LUlzPmA&s",
    alt: "San Francisco skyline",
  },
  Tokyo: {
    title: "Tokyo chapters",
    summary:
      "Tokyo holds the widest range of the trip: arrival energy, neighborhood wandering, museums, shopping, workout resets, milestone dinners, and the birthday day itself. It works as both launch point and finale, with each return to the city carrying a different mood.",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1b/66/a5/ac/caption.jpg",
    alt: "Hoshinoya Tokyo exterior",
  },
  Kamakura: {
    title: "Kamakura pause",
    summary:
      "Kamakura compresses the trip into something more intimate and restorative. The focus shifts to temples, sea air, a ryokan stay, and a slower overnight before the Kyoto transition.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310086629.jpg?k=44d6ac190eef9c0e4774ac65659a5e84508c7304fa000ddeb2acb1749fb7db32&o=",
    alt: "Kishi-ke Ryokan room",
  },
  Kyoto: {
    title: "Kyoto center of gravity",
    summary:
      "Kyoto carries the craft, history, and ritual core of the itinerary. It includes the transfer from Kamakura, the Himeji excursion, recovery time, hikes, dinners, and the moment where the trip feels most rooted in place.",
    image:
      "https://www.img-ikyu.com/contents/common/dg/image/sd/acc8/00051678/00051678a.jpg?auto=compress,format&fit=crop&h=500&lossless=0&w=750",
    alt: "Tamao Kyoto room",
  },
  Naoshima: {
    title: "Naoshima immersion",
    summary:
      "Naoshima is the art-island deep breath. Ferries, buses, bike rides, museums, galleries, and kaiseki dinners create a slower, more atmospheric chapter before the return to Tokyo.",
    image:
      "https://www.thehotelguru.com/_images/7c/35/7c358e2b3ede5ea339300f7705cf8911/original.jpg",
    alt: "Ryokan Roka exterior",
  },
  Honolulu: {
    title: "Honolulu coda",
    summary:
      "Honolulu acts as the warm afterglow of the trip. After the birthday flight out of Japan, the plan loosens into massage, beach time, bike touring, easier meals, and a gentler runway back into real life.",
    image:
      "https://cache.marriott.com/content/dam/marriott-renditions/HNLLC/hnllc-building-1813-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    alt: "Royal Hawaiian hotel exterior",
  },
};

const highlightMatchers = [
  "flight",
  "hotel:",
  "dinner:",
  "lunch",
  "tour",
  "spa",
  "museum",
  "train",
  "ferry",
  "massage",
  "workshop",
];

const diningPlaceLinks = {
  "Komeda-is": "https://www.google.com/maps/search/?api=1&query=KOMEDA+is+Higashi+Ginza+Tokyo",
  "Komeda-Is": "https://www.google.com/maps/search/?api=1&query=KOMEDA+is+Higashi+Ginza+Tokyo",
  "Vegan Sushi Tokyo": "https://www.google.com/maps/search/?api=1&query=Vegan+Sushi+Tokyo+Dogenzaka+Shibuya+Tokyo",
  "Vegan Bistro Jangara": "https://www.google.com/maps/search/?api=1&query=Vegan+Bistro+Jangara+Harajuku+Tokyo",
  "Bistro Jangara": "https://www.google.com/maps/search/?api=1&query=Vegan+Bistro+Jangara+Harajuku+Tokyo",
  "Izakya Nowhere": "https://www.google.com/maps/search/?api=1&query=Vegan+Izakaya+Nowhere+Mukojima+Sumida+Tokyo",
  "Izakaya Nowhere": "https://www.google.com/maps/search/?api=1&query=Vegan+Izakaya+Nowhere+Mukojima+Sumida+Tokyo",
  "Ain Soph Shinjuku": "https://www.google.com/maps/search/?api=1&query=AIN+SOPH+Journey+Shinjuku",
  "2foods": "https://www.google.com/maps/search/?api=1&query=2foods+Ginza+Tokyo",
  "Cafe Restaurant Bell": "https://www.google.com/maps/search/?api=1&query=Cafe+Restaurant+Bell+Nikko",
  "Falafel Brothers": "https://www.google.com/maps/search/?api=1&query=Falafel+Brothers+Otemachi+Tokyo",
  "Brown Rice Ometosando": "https://www.google.com/maps/search/?api=1&query=Brown+Rice+Omotesando+Tokyo",
  FARO: "https://www.google.com/maps/search/?api=1&query=FARO+Ginza+Tokyo",
  "luna burger": "https://www.google.com/maps/search/?api=1&query=Luna+Burger+Hase+Kamakura",
  magokoro: "https://www.google.com/maps/search/?api=1&query=Magokoro+Hase+Kamakura",
  "Vegan Izakaya Masaka": "https://www.google.com/maps/search/?api=1&query=Vegan+Izakaya+Masaka+Kyoto",
  "Il Riccio": "https://www.google.com/maps/search/?api=1&query=il+riccio+Himeji",
  Kotonoki: "https://www.google.com/maps/search/?api=1&query=Kotonoki+Himeji",
  Mumokuteki: "https://www.google.com/maps/search/?api=1&query=MUMOKUTEKI+CAFE+Kyoto",
  Nijiya: "https://www.google.com/maps/search/?api=1&query=Nijiya+Kyoto+vegan",
  Vegginy: "https://www.google.com/maps/search/?api=1&query=Vegginy+Kyoto",
  Zirael: "https://www.google.com/maps/search/?api=1&query=ZIRAEL+Vegan+Restaurant+Kyoto",
  "Uno Ramen Sanjo": "https://www.google.com/maps/search/?api=1&query=UNO+RAMEN+Sanjo+Kyoto",
  aisunao: "https://www.google.com/maps/search/?api=1&query=Aisunao+Naoshima",
  apron: "https://www.google.com/maps/search/?api=1&query=Apron+Cafe+Naoshima",
  "Noeud.Tokyo": "https://www.google.com/maps/search/?api=1&query=N%C5%93ud+TOKYO+Hirakawacho+Tokyo",
  Marugoto: "https://www.google.com/maps/search/?api=1&query=Marugoto+Vegan+Dining+Asakusa",
  Udatsu: "https://www.google.com/maps/search/?api=1&query=Udatsu+Sushi+Tokyo+Nakameguro",
  Sougo: "https://www.google.com/maps/search/?api=1&query=Sougo+Roppongi+Tokyo",
  "Oscar Wilde": "https://maps.app.goo.gl/uhVSaxKL7xRSX84x7",
  "Island Vintage": "https://www.google.com/maps/search/?api=1&query=Island+Vintage+Coffee+Royal+Hawaiian+Center+Waikiki",
  "Peace Cafe": "https://www.google.com/maps/search/?api=1&query=Peace+Cafe+Honolulu",
  Floralia: "https://www.google.com/maps/search/?api=1&query=Floralia+Honolulu+vegan+pizza",
  "Tane Vegan Izakaya": "https://www.google.com/maps/search/?api=1&query=Tane+Vegan+Izakaya+Honolulu",
  "Universal Bakes and Cafe": "https://www.google.com/maps/search/?api=1&query=Universal+Bakes+and+Cafe+Setagaya+Tokyo",
  "marbre vegan": "https://www.google.com/maps/search/?api=1&query=marbre+vegan+Shinjuku+Tokyo",
  "Nuts Exchange Tokyo": "https://www.google.com/maps/search/?api=1&query=Nuts+Exchange+Tokyo",
};

const activityHtmlOverrides = {
  "Universal Bakes and Cafe":
    `${linkPlace("Universal Bakes and Cafe")}`,
  "Ginza exploration":
    `${linkExternal("Ginza exploration", "https://en.wikipedia.org/wiki/Ginza")}`,
  "Gotoku-ji":
    `${linkExternal("Gotoku-ji", "https://en.wikipedia.org/wiki/G%C5%8Dtoku-ji")}`,
  "Photomatic, Iyoshi Cola, Square Enix?":
    `${linkExternal("Photomatic", "https://photomatic.jp/")}, ${linkExternal("Iyoshi Cola", "https://iyoshicola.com/en/")}, ${linkExternal("ARTNIA", "https://www.jp.square-enix.com/artnia/")}?`,
  "Ragtag (Harujuku and Shibuya), Snoopytown, Beams":
    `${linkExternal("Ragtag", "https://www.ragtag.jp/") } (${linkExternal("Harajuku", "https://en.wikipedia.org/wiki/Harajuku")} and ${linkExternal("Shibuya", "https://en.wikipedia.org/wiki/Shibuya")}), ${linkExternal("Snoopytown", "https://town.snoopy.co.jp/")}, ${linkExternal("Beams", "https://www.beams.co.jp/")}`,
  "Shinjuku Gyoen":
    `${linkExternal("Shinjuku Gyoen", "https://www.env.go.jp/garden/shinjukugyoen/english/")}`,
  "Snack: marbre vegan":
    `Snack: ${linkPlace("marbre vegan")}`,
  "Isetan men's, CDG":
    `${linkExternal("Isetan men's", "https://www.mistore.jp/store/shinjuku/shops/men.html")}, ${linkExternal("CDG", "https://www.comme-des-garcons.com/")} (${linkExternal("Shinjuku", "https://en.wikipedia.org/wiki/Shinjuku")})`,
  "Shinkyo Bridge, Toshogu Shrine, Kanmangafuchi Abyss":
    `${linkExternal("Shinkyo Bridge", "https://en.wikipedia.org/wiki/Shinky%C5%8D")}, ${linkExternal("Toshogu Shrine", "https://en.wikipedia.org/wiki/Nikk%C5%8D_T%C5%8Dsh%C5%8D-g%C5%AB")}, ${linkExternal("Kanmangafuchi Abyss", "https://www.japan-guide.com/e/e3811.html")}`,
  "Train to Nikko Spacia X (depart from Tokyo Skytree)":
    `Train to ${linkExternal("Nikko Spacia X", "https://www.tobu.co.jp/spaciax/en/en/")} (${linkExternal("Nikko", "https://en.wikipedia.org/wiki/Nikk%C5%8D")}; depart from Tokyo Skytree)`,
  "Nezu Museum":
    `${linkExternal("Nezu Museum", "https://www.nezu-muse.or.jp/en/")}`,
  "Nuts Exchange Tokyo":
    `${linkPlace("Nuts Exchange Tokyo")}`,
  "Aoyama shops: CDG, Dries, Pleats Please, Sacai. Margiela + MM6":
    `${linkExternal("Aoyama", "https://en.wikipedia.org/wiki/Aoyama")} shops: ${linkExternal("CDG", "https://www.comme-des-garcons.com/")}, ${linkExternal("Dries", "https://www.driesvannoten.com/")}, ${linkExternal("Pleats Please", "https://www.isseymiyake.com/en/brands/pleatspleaseisseymiyake")}, ${linkExternal("Sacai", "https://www.sacai.jp/en/")}. ${linkExternal("Margiela", "https://www.maisonmargiela.com/") } + ${linkExternal("MM6", "https://www.maisonmargiela.com/en-us/mm6/")}`,
  "Hasedera Temple, Buddha":
    `${linkExternal("Hasedera Temple", "https://en.wikipedia.org/wiki/Hase-dera_(Kamakura)")}, ${linkExternal("Buddha", "https://en.wikipedia.org/wiki/K%C5%8Dtoku-in")}`,
  "Options if time: Zeniarai Shrine,Genjiyama Park, Tsurugaoka Shrine, Old Town":
    `Options if time: ${linkExternal("Zeniarai Shrine", "https://en.wikipedia.org/wiki/Zeniarai_Benzaiten_Ugafuku_Shrine")}, ${linkExternal("Genjiyama Park", "https://en.wikipedia.org/wiki/Genjiyama_Park")}, ${linkExternal("Tsurugaoka Shrine", "https://en.wikipedia.org/wiki/Tsurugaoka_Hachimang%C5%AB")}, Old Town`,
  "Himeji Castle and Koko-en Gardens Tickets":
    `${linkExternal("Himeji Castle", "https://en.wikipedia.org/wiki/Himeji_Castle")} and ${linkExternal("Koko-en Gardens", "https://en.wikipedia.org/wiki/K%C5%8Dko-en")} Tickets for a 4-hour tour with a private government guide`,
  "guide whatsapp +81-90-9712-1750":
    `Guide's WhatsApp: ${linkExternal("+81-90-9712-1750", "https://wa.me/819097121750")}`,
  "Send luggage to Tokyo":
    `Send luggage to Tokyo`,
  "Art House Project (Go'O, Haisha, Kadoya)":
    `${linkExternal("Art House Project", "https://benesse-artsite.jp/en/art/arthouse.html")} (Go'O, Haisha, Kadoya)`,
  Minamidera:
    `${linkExternal("Minamidera", "https://benesse-artsite.jp/en/art/minamidera.html")}`,
  Chichu:
    `${linkExternal("Chichu Art Museum", "https://benesse-artsite.jp/en/art/chichu.html")}`,
  "Benessee House":
    `${linkExternal("Benessee House", "https://benesse-artsite.jp/en/art/benessehouse-museum.html")}`,
  "Valley Gallery":
    `${linkExternal("Valley Gallery", "https://www.wallpaper.com/architecture/valley-gallery-tadao-ando-naoshima-japan")}`,
  "Hiroshi Sugimoto Gallery: Time Corridors":
    `${linkExternal("Hiroshi Sugimoto Gallery: Time Corridors", "https://benesse-artsite.jp/en/art/timecorridors.html")}`,
  "Option to stop by Okura Museum or gym":
    `Option to stop by ${linkExternal("Okura Museum", "https://www.shukokan.org/en/")} or gym`,
  "Car service":
    `Car service`,
  "Dinner: Komeda-is":
    `Dinner: ${linkPlace("Komeda-is")}`,
  "Lunch: Vegan Sushi Tokyo (or Vegan Bistro Jangara)":
    `Lunch: ${linkPlace("Vegan Sushi Tokyo")} (or ${linkPlace("Vegan Bistro Jangara")})`,
  "Dinner: Izakya Nowhere (open 5pm)":
    `Dinner: ${linkPlace("Izakya Nowhere")} (open 5pm)`,
  "Lunch: Ain Soph Shinjuku":
    `Lunch: ${linkPlace("Ain Soph Shinjuku")}`,
  "Dinner: Bistro Jangara (20mins) or Ginza + 2foods, Komeda-Is (17mins) [also Ginza block on Tuesday]":
    `Dinner: ${linkPlace("Bistro Jangara")} (20mins) or Ginza + ${linkPlace("2foods")}, ${linkPlace("Komeda-Is")} (17mins) [also Ginza block on Tuesday]`,
  "Lunch: Cafe Restaurant Bell for yuba set":
    `Lunch: ${linkPlace("Cafe Restaurant Bell")} for yuba set`,
  "Dinner: Falafel Brothers or Izakaya Nowhere (open until 10pm)":
    `Dinner: ${linkPlace("Falafel Brothers")} or ${linkPlace("Izakaya Nowhere")} (open until 10pm)`,
  "Lunch Brown Rice Ometosando or Vegan Bistro Jangara":
    `Lunch ${linkPlace("Brown Rice Ometosando")} or ${linkPlace("Vegan Bistro Jangara")}`,
  "Dinner: FARO 1*":
    `Dinner: ${linkExternal("Faro", diningPlaceLinks.FARO)}`,
  "Lunch luna burger":
    `Lunch ${linkPlace("luna burger")}`,
  "Dinner: magokoro":
    `Dinner: ${linkPlace("magokoro")}`,
  "Dinner: Vegan Izakaya Masaka (open at 5pm)":
    `Dinner: ${linkPlace("Vegan Izakaya Masaka")} (open at 5pm)`,
  "Lunch: Il Riccio OR Kotonoki to go (leave at 2:45pm for train) - update guide!":
    `Lunch: ${linkPlace("Il Riccio")} OR ${linkPlace("Kotonoki")} to go (leave at 2:45pm for train) - update guide!`,
  "Dinner: Mumokuteki":
    `Dinner: ${linkPlace("Mumokuteki")}`,
  "Lunch: Nijiya (12-3pm) or Vegginy (12-2:30pm open) or Zirael (12:30-7pm open)":
    `Lunch: ${linkPlace("Nijiya")} (12-3pm) or ${linkPlace("Vegginy")} (12-2:30pm open) or ${linkPlace("Zirael")} (12:30-7pm open)`,
  "Honen-in (moss temple) and Ginkaku-ji (temple) + Mt. Daimonji-yama Climb":
    `${linkExternal("Honen-in", "https://en.wikipedia.org/wiki/H%C5%8Dnen-in")} (moss temple) and ${linkExternal("Ginkaku-ji", "https://www.shokoku-ji.jp/en/ginkakuji/about/")} (temple) + ${linkExternal("Mt. Daimonji-yama Climb", "http://insidekyoto.com/mt-daimonji-yama-hike-ginkaku-ji-temple")}`,
  "Dinner: Uno Ramen Sanjo":
    `Dinner: ${linkPlace("Uno Ramen Sanjo")}`,
  "Lunch: aisunao or apron":
    `Lunch: ${linkPlace("aisunao")} or ${linkPlace("apron")}`,
  "Dinner: Noeud.Tokyo":
    `Dinner: ${linkPlace("Noeud.Tokyo")}`,
  "Ginza":
    `${linkExternal("Ginza", "https://en.wikipedia.org/wiki/Ginza")}`,
  "train to Kamakura":
    `train to ${linkExternal("Kamakura", "https://en.wikipedia.org/wiki/Kamakura")}`,
  "arrive in Kamakura; drop bags at Kishi-ke Ryokan":
    `arrive in ${linkExternal("Kamakura", "https://en.wikipedia.org/wiki/Kamakura")}; drop bags at Kishi-ke Ryokan`,
  "train to Himeji":
    `train to ${linkExternal("Himeji", "https://en.wikipedia.org/wiki/Himeji")}`,
  "arrival, grab coffee":
    `arrival in ${linkExternal("Himeji", "https://en.wikipedia.org/wiki/Himeji")}, grab coffee`,
  "Dropoff at Naoshima Port":
    `Dropoff at ${linkExternal("Naoshima Port", "https://en.wikipedia.org/wiki/Naoshima,_Kagawa")}`,
  "Ni-Chome":
    `${linkExternal("Ni-Chome", "https://en.wikipedia.org/wiki/Shinjuku_Ni-ch%C5%8Dme")} 🏳️‍🌈`,
  "Lunch: Marugoto [option for Ginza on the way back]":
    `Lunch: ${linkPlace("Marugoto")} [option for Ginza on the way back]`,
  "Dinner: Udatsu":
    `Dinner: ${linkPlace("Udatsu")}`,
  "Lunch: Sougo + Oscar Wilde":
    `Lunch: ${linkPlace("Sougo")} + ${linkPlace("Oscar Wilde")}`,
  "Lunch at Island Vintage or Peace Cafe (delivery possible)":
    `Lunch at ${linkPlace("Island Vintage")} or ${linkPlace("Peace Cafe")} (delivery possible)`,
  "Dinner at Island Vintage or Floralia (no delivery)":
    `Dinner at ${linkPlace("Island Vintage")} or ${linkPlace("Floralia")} (no delivery)`,
  "Dinner at Floralia [Island Vintage, Peace Cafe also open & delivery]":
    `Dinner at ${linkPlace("Floralia")} [${linkPlace("Island Vintage")}, ${linkPlace("Peace Cafe")} also open & delivery]`,
  "Dinner at Tane Vegan Izakaya (delivery possible) [Peace, Floralia also open]":
    `Dinner at ${linkPlace("Tane Vegan Izakaya")} (delivery possible) [<a href="${diningPlaceLinks["Peace Cafe"]}" target="_blank" rel="noreferrer noopener">Peace</a>, ${linkPlace("Floralia")} also open]`,
  "Night time beach walk with banana ice cream from banan":
    `Night time beach walk with banana ice cream from ${linkExternal("banan", "https://banan.co/")}`,
  "Option 1) Brown Rice Ometosando + any Aoyama stores; back to Okura at 6pm":
    `Option 1) ${linkPlace("Brown Rice Ometosando")} + any Aoyama stores; back to Okura at 6pm`,
  "Option 2) Alchemy or Shogun Burger; walk back to Okura 6:20pm":
    `Option 2) ${linkExternal("Alchemy", "https://www.google.com/maps/search/?api=1&query=Alchemy+Honolulu+restaurant")} or ${linkExternal("Shogun Burger", "https://shogun-burger.com/")} ; walk back to Okura 6:20pm`,
  "Sumida River nighttime walk":
    `${linkExternal("Sumida River", "https://en.wikipedia.org/wiki/Sumida_River")} nighttime walk`,
  "If time permits, cat billboard and maybe Tokyo Metropolitan Gov. Building observation deck":
    `If time permits, cat billboard and maybe ${linkExternal("Tokyo Metropolitan Gov. Building observation deck", "https://www.yokoso.metro.tokyo.lg.jp/en/tenbou/index.html")}`,
  "Aman Spa Afternoon (4pm treatment; 90min Grounding Massage Ritual)":
    `${linkExternal("Aman Spa Afternoon", "https://www.aman.com/hotels/aman-tokyo/wellness/spa")} (4pm treatment; 90min Grounding Massage Ritual)`,
  "Hanko class":
    `${linkExternal("Hanko class", "https://wabunka-lux.jp/experiences/en_kamakurahanko-basic/")} 💮`,
  "Shuttle (first coffee mikauzkishoten)":
    `Shuttle (first coffee ${linkExternal("mikauzkishoten", "https://www.google.com/maps/search/?api=1&query=Mikazuki+Shoten+Naoshima")})`,
  "Chopstick workshop (90 mins)":
    `${linkExternal("Chopstick workshop", "https://wabunka-lux.jp/experiences/en_mogami-kogei/")} (90 mins)`,
  "Tokyo Tower View":
    `${linkExternal("Tokyo Tower View", "https://www.tokyotower.co.jp/en/ticket/")}`,
  "Tameike: Exploring the Heart of Japanese Politics Tour (3 hours)":
    `${linkExternal("Tameike: Exploring the Heart of Japanese Politics Tour", "https://www.getyourguide.com/tokyo-l193/tameike-exploring-the-heart-of-japanese-politics-tour-t740982/?ranking_uuid=84718a94-dad7-4a5f-9f43-e9731ef8145a")} (3 hours)`,
  "eBike Tour Honolulu Rainforest":
    `${linkExternal("eBike Tour Honolulu Rainforest", "https://www.tripadvisor.com/AttractionProductReview-g29222-d17684562-EBike_Tour_Honolulu_Rainforest-Oahu_Hawaii.html")}`,
};

const dayTitleHtmlOverrides = {
  "Birthday and Japan Goodbye: National Diet, Birthday Lunch, and Hawai'i":
    `Birthday and Japan Goodbye: ${linkExternal("National Diet", "https://en.wikipedia.org/wiki/National_Diet")}, Birthday Lunch, and Hawai'i`,
  "Naoshima Immersion: Chichu Light + Island Wanders":
    `${linkExternal("Naoshima", "https://en.wikipedia.org/wiki/Naoshima,_Kagawa")} Immersion: Chichu Light + Island Wanders`,
};

const routeStopDisplay = {
  "San Francisco": "San Francisco 🇺🇸",
  Tokyo: "Tokyo 🇯🇵",
  Kamakura: "Kamakura 🇯🇵",
  Kyoto: "Kyoto 🇯🇵",
  Naoshima: "Naoshima 🇯🇵",
  Honolulu: "Honolulu 🇺🇸",
};

function linkPlace(label) {
  return `<a href="${diningPlaceLinks[label]}" target="_blank" rel="noreferrer noopener">${label}</a>`;
}

function linkExternal(label, url) {
  return `<a href="${url}" target="_blank" rel="noreferrer noopener">${label}</a>`;
}

function normalizeLocation(location) {
  return location || "Unassigned";
}

function getDisplayLocation(day) {
  if (day.date === "TIMEWARP") {
    return "Tokyo to Honolulu";
  }

  return normalizeLocation(day.location);
}

function getDayStops(day) {
  const base = normalizeLocation(day.location)
    .split("/")
    .map((stop) => stop.trim())
    .filter(Boolean);

  if (day.date === "TIMEWARP") {
    return ["Tokyo", "Honolulu"];
  }

  if (!base.length && /Tokyo/i.test(day.title)) {
    return ["Tokyo"];
  }

  return base.length ? base : ["Unassigned"];
}

function countHotels() {
  const hotelNames = new Set();
  itinerary.forEach((day) => {
    day.items
      .filter((item) => item.kind === "hotel")
      .forEach((item) => hotelNames.add(item.time));
  });
  return hotelNames.size;
}

function countTimedEvents() {
  return itinerary.reduce(
    (sum, day) =>
      sum + day.items.filter((item) => item.kind === "event" && item.time).length,
    0
  );
}

function countHighlightEvents() {
  return itinerary.reduce(
    (sum, day) =>
      sum +
      day.items.filter((item) =>
        highlightMatchers.some((match) => `${item.time} ${item.activity}`.toLowerCase().includes(match))
      ).length,
    0
  );
}

function renderHeroStats() {
  const stats = [
    { label: "Day blocks", value: itinerary.length },
    { label: "Timed stops", value: countTimedEvents() },
    { label: "Hotels", value: countHotels() },
    { label: "Major moments", value: countHighlightEvents() },
  ];

  heroStats.innerHTML = stats
    .map(
      (stat) => `
        <div>
          <dt>${stat.label}</dt>
          <dd>${stat.value}</dd>
        </div>
      `
    )
    .join("");
}

function renderRouteRibbon() {
  routeRibbon.innerHTML = uniqueStops
    .map(
      (stop) => `
        <div class="route-stop">
          <span class="route-stop__dot" aria-hidden="true"></span>
          <span class="route-stop__label">${routeStopDisplay[stop] || stop}</span>
        </div>
      `
    )
    .join("");
}

function renderOverview() {
  routeCards.innerHTML = routeNarrative
    .map(
      (segment) => `
        <div class="route-segment">
          <div>
            <strong>${segment.title}</strong>
            <p>${segment.text}</p>
          </div>
        </div>
      `
    )
    .join("");

  const hotelMap = new Map();

  itinerary.forEach((day) => {
    day.items
      .filter((item) => item.kind === "hotel")
      .forEach((item) => {
        if (!hotelMap.has(item.time)) {
          hotelMap.set(item.time, item.activity);
        }
      });
  });

  hotelSummary.innerHTML = `
    <h3>Hotels on file</h3>
    <div class="hotel-stack">
      ${Array.from(hotelMap.entries())
        .map(
          ([name, address]) => `
            <a class="hotel-stack__item" href="${hotelLinks[name] || "#"}" target="_blank" rel="noreferrer noopener" aria-label="Open ${name.replace("Hotel: ", "")} website">
              <img class="hotel-stack__image" src="${hotelImages[name] || ""}" alt="${name.replace("Hotel: ", "")}" loading="lazy" />
              <div class="hotel-stack__body">
                <span>${address}</span>
                <strong>${name.replace("Hotel: ", "")}</strong>
              </div>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function formatDateWithSuperscript(date) {
  if (date === "TIMEWARP") {
    return date;
  }

  return date.replace(
    /\b(\d{1,2})(?=,|$)/,
    (_, day) => `${day}<sup>${getOrdinalSuffix(Number(day))}</sup>`
  );
}

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function getGoogleMapsUrl(address, label = "") {
  if (label && hotelMapLinks[`Hotel: ${label}`]) {
    return hotelMapLinks[`Hotel: ${label}`];
  }

  const query = label ? `${label}, ${address}` : address;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderFilters() {
  const buttons = ["All", ...uniqueStops];

  locationFilters.innerHTML = buttons
    .map(
      (location) => `
        <button
          class="chip ${location === state.activeLocation ? "is-active" : ""}"
          type="button"
          data-location="${location}"
        >
          ${location}
        </button>
      `
    )
    .join("");

  locationFilters.querySelectorAll("[data-location]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeLocation = button.dataset.location;
      renderFilters();
      renderSpotlight();
      renderTimeline();
    });
  });
}

function renderSpotlight() {
  const key = state.activeLocation;
  const spotlight = destinationSpotlights[key] || destinationSpotlights.All;
  const days =
    key === "All"
      ? itinerary.map((day) => day.date)
      : itinerary
          .filter((day) => getDayStops(day).includes(key))
          .map((day) => day.date);

  destinationSpotlight.innerHTML = `
    <div class="spotlight__media">
      ${
        spotlight.image
          ? `<img class="spotlight__image" src="${spotlight.image}" alt="${spotlight.alt}" loading="lazy" />`
          : `<div class="spotlight__placeholder">Image<br />placeholder</div>`
      }
    </div>
    <div class="spotlight__body">
      <p class="spotlight__kicker">${key === "All" ? "Trip summary" : key}</p>
      <h3>${spotlight.title}</h3>
      <p>${spotlight.summary}</p>
      <div class="spotlight__days">
        ${days.map((day) => `<span class="spotlight__day">${formatDateWithSuperscript(day)}</span>`).join("")}
      </div>
    </div>
  `;
}

function isHighlight(item) {
  const haystack = `${item.time} ${item.activity}`.toLowerCase();
  return highlightMatchers.some((match) => haystack.includes(match));
}

function getVisibleDays() {
  return itinerary.filter((day) => {
    const stopMatch =
      state.activeLocation === "All" ||
      getDayStops(day).includes(state.activeLocation);

    if (!stopMatch) {
      return false;
    }

    if (!state.highlightsOnly) {
      return true;
    }

    return day.items.some((item) => item.kind === "hotel" || isHighlight(item));
  });
}

function createMiniTag(text) {
  const tag = document.createElement("span");
  tag.className = "mini-tag";
  tag.textContent = text;
  return tag;
}

function renderEvent(item, list) {
  const node = eventTemplate.content.firstElementChild.cloneNode(true);
  const time = node.querySelector(".event__time");
  const kind = node.querySelector(".event__kind");
  const activity = node.querySelector(".event__activity");
  const notes = node.querySelector(".event__notes");

  node.classList.toggle("event--hotel", item.kind === "hotel");

  time.textContent = item.kind === "hotel" ? item.time.replace("Hotel: ", "") : item.time || "Flexible";
  kind.textContent = item.kind === "hotel" ? "Stay" : item.time ? "Scheduled" : "Open";
  if (item.kind === "hotel") {
    activity.innerHTML = `<a href="${getGoogleMapsUrl(item.activity, item.time.replace("Hotel: ", ""))}" target="_blank" rel="noreferrer noopener">${item.activity}</a>`;
  } else if (activityHtmlOverrides[item.activity]) {
    activity.innerHTML = activityHtmlOverrides[item.activity];
  } else {
    activity.textContent = item.activity;
  }

  if (item.notes) {
    notes.textContent = item.notes;
  } else {
    notes.remove();
  }

  if (state.highlightsOnly && item.kind !== "hotel" && !isHighlight(item)) {
    return;
  }

  list.appendChild(node);
}

function renderTimeline() {
  const visibleDays = getVisibleDays();
  const visibleEvents = visibleDays.reduce((sum, day) => {
    const items = state.highlightsOnly
      ? day.items.filter((item) => item.kind === "hotel" || isHighlight(item))
      : day.items;

    return sum + items.length;
  }, 0);

  resultsLabel.textContent = `${visibleDays.length} day blocks · ${visibleEvents} visible items`;
  timelineGrid.innerHTML = "";

  visibleDays.forEach((day, index) => {
    const card = dayCardTemplate.content.firstElementChild.cloneNode(true);
    const indexNode = card.querySelector(".day-card__index");
    const dateNode = card.querySelector(".day-card__date");
    const locationNode = card.querySelector(".day-card__location");
    const titleNode = card.querySelector(".day-card__title");
    const tagsNode = card.querySelector(".day-card__tags");
    const eventList = card.querySelector(".event-list");

    indexNode.textContent = `Day ${String(index + 1).padStart(2, "0")}`;
    dateNode.innerHTML = formatDateWithSuperscript(day.date);
    locationNode.textContent = getDisplayLocation(day);
    titleNode.innerHTML = dayTitleHtmlOverrides[day.title] || day.title;

    getDayStops(day).forEach((stop) => {
      tagsNode.appendChild(createMiniTag(stop));
    });

    const hotelCount = day.items.filter((item) => item.kind === "hotel").length;
    const timedCount = day.items.filter((item) => item.time && item.kind === "event").length;

    if (hotelCount) {
      tagsNode.appendChild(createMiniTag(`${hotelCount} stay`));
    }

    tagsNode.appendChild(createMiniTag(`${timedCount} timed`));

    day.items.forEach((item) => renderEvent(item, eventList));

    if (!eventList.children.length) {
      const empty = document.createElement("li");
      empty.className = "event";
      empty.innerHTML = `
        <div class="event__marker"></div>
        <div class="event__content">
          <div class="event__meta">
            <span class="event__time">Filtered</span>
            <span class="event__kind">Hidden</span>
          </div>
          <p class="event__activity">No highlight items remain for this day.</p>
        </div>
      `;
      eventList.appendChild(empty);
    }

    timelineGrid.appendChild(card);
  });
}

focusToggle.addEventListener("click", () => {
  state.highlightsOnly = !state.highlightsOnly;
  focusToggle.classList.toggle("is-active", state.highlightsOnly);
  focusToggle.textContent = state.highlightsOnly ? "Show full itinerary" : "Show highlights only";
  renderTimeline();
});

renderHeroStats();
renderRouteRibbon();
renderOverview();
renderFilters();
renderSpotlight();
renderTimeline();
