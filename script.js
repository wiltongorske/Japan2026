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
    title: "Kyoto Light: Markets, Hike, and Recovery Time COULD DO NARA",
    items: [
      { time: "9:00 AM", activity: "Breakfast", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "Gym (and laundry if needed)", notes: "", kind: "event" },
      { time: "", activity: "Send luggage toTokyo", notes: "", kind: "event" },
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
    title: "Hands-On Tokyo: Silversmithing, Udatsu Sushi, gay Japan",
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
      { time: "11:00 AM", activity: "Car service: https://www.toplimohawaii.com/airport-reservation-form/", notes: "", kind: "event" },
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
    title: "Arrival arc",
    text: "San Francisco departure into a Tokyo landing stretch with neighborhood wandering, museum days, Nikko, and a Kamakura overnight.",
  },
  {
    title: "Middle chapter",
    text: "Kyoto anchors the cultural center of the trip, with Himeji as a side quest before shifting south to Naoshima's slower museum rhythm.",
  },
  {
    title: "Exit glide",
    text: "Tokyo returns for the finale, then the itinerary time-shifts into Honolulu for decompression before the flight back to San Francisco.",
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
  return itinerary.reduce((sum, day) => sum + day.items.filter((item) => item.kind === "hotel").length, 0);
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
          <span class="route-stop__label">${stop}</span>
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
    <p>The stays now read more like a visual route: serene Tokyo, a Kamakura ryokan pause, Kyoto, Naoshima, a final Tokyo return, then the Royal Hawaiian landing.</p>
    <div class="hotel-stack">
      ${Array.from(hotelMap.entries())
        .map(
          ([name, address]) => `
            <div class="hotel-stack__item">
              <img class="hotel-stack__image" src="${hotelImages[name] || ""}" alt="${name.replace("Hotel: ", "")}" loading="lazy" />
              <div class="hotel-stack__body">
                <span>${name.replace("Hotel: ", "")}</span>
                <strong>${address}</strong>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
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
      renderTimeline();
    });
  });
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
  activity.textContent = item.activity;

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
    dateNode.textContent = day.date;
    locationNode.textContent = getDisplayLocation(day);
    titleNode.textContent = day.title;

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
renderTimeline();
