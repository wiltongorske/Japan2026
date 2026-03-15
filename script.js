const itinerary = [
  {
    date: "Thursday, May 7",
    location: "San Francisco",
    title: "Travel day",
    items: [
      { time: "9:00 AM", activity: "Leave for SFO; Waymo pick up", notes: "", kind: "event" },
      { time: "12:00 PM", activity: "Flight SFO > Haneda departs (JL1)", notes: "", kind: "event" },
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
      { time: "5:30 PM", activity: "Dinner: Izakaya Nowhere (open 5pm)", notes: "", kind: "event" },
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
      { time: "2:30 PM", activity: "Head to Aman", notes: "", kind: "event" },
      { time: "3:00 PM", activity: "Aman Spa Afternoon (4pm treatment; 90min Grounding Massage Ritual)", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "Dinner: Bistro Jangara (20mins) or Ginza + 2foods, Komeda-is (17mins) [also Ginza block on Tuesday]", notes: "", kind: "event" },
      { time: "Hotel: Hoshinoya Tokyo", activity: "1-9-1 Otemachi, Chiyoda-ku, Tokyo 100-0004", notes: "", kind: "hotel" },
    ],
  },
  {
    date: "Monday, May 11",
    location: "Tokyo/Nikko",
    title: "Nikko: Mountains, Shrines, and Yuba",
    items: [
      { time: "8:00 AM", activity: "Train to Nikko Spacia X (depart from Tokyo Skytree)", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "Arrive Tōbu-nikkō Station", notes: "", kind: "event" },
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
    location: "Tokyo",
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
      { time: "10:00 AM", activity: "Train to Kamakura", notes: "", kind: "event" },
      { time: "11:00 AM", activity: "Arrive in Kamakura; drop bags at Kishi-ke Ryokan", notes: "", kind: "event" },
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
    location: "Himeji/Kyoto",
    title: "Kyoto at a Distance: Himeji Castles, History, and Evening Wanders",
    items: [
      { time: "8:29 AM", activity: "Train to Himeji", notes: "", kind: "event" },
      { time: "9:15 AM", activity: "Arrival, grab coffee", notes: "", kind: "event" },
      { time: "9:45 AM", activity: "Meet at Himeji Station JR Line (Central North Exit or Himeji Castle Exit near 7-11)", notes: "", kind: "event" },
      { time: "", activity: "Himeji Castle and Koko-en Gardens Tickets", notes: "", kind: "event" },
      { time: "", activity: "Guide WhatsApp +81-90-9712-1750", notes: "", kind: "event" },
      { time: "1:45 PM", activity: "Lunch: Il Riccio (leave at 2:45pm for train)", notes: "", kind: "event" },
      { time: "3:11 PM", activity: "Train", notes: "", kind: "event" },
      { time: "4:00 PM", activity: "Arrive Kyoto Station", notes: "", kind: "event" },
      { time: "6:00 PM", activity: "Leave for dinner", notes: "", kind: "event" },
      { time: "7:00 PM", activity: "Dinner: Mumokuteki", notes: "", kind: "event" },
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
      { time: "6:30 PM", activity: "Leave for dinner", notes: "", kind: "event" },
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
      { time: "1:30 PM", activity: "Art House Project (Go'O, Haisha, Kadoya) (all-day tickets)", notes: "", kind: "event" },
      { time: "2:20 PM", activity: "Minamidera", notes: "", kind: "event" },
      { time: "2:52 PM", activity: "Bus", notes: "", kind: "event" },
      { time: "3:19 PM", activity: "Arrival", notes: "", kind: "event" },
      { time: "3:30 PM", activity: "Lee Ufan (all-day ticket; quick stop before Chichu)", notes: "", kind: "event" },
      { time: "3:45 PM", activity: "Chichu", notes: "", kind: "event" },
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
      { time: "9:00 AM", activity: "Breakfast", notes: "", kind: "event" },
      { time: "", activity: "Bike ride", notes: "", kind: "event" },
      { time: "", activity: "Benesse House (all-day tickets)", notes: "", kind: "event" },
      { time: "", activity: "Lunch", notes: "", kind: "event" },
      { time: "", activity: "Valley Gallery (all-day tickets)", notes: "", kind: "event" },
      { time: "2:00 PM", activity: "Hiroshi Sugimoto Gallery: Time Corridors", notes: "", kind: "event" },
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
      { time: "2:30 PM", activity: "Gym", notes: "", kind: "event" },
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
      { time: "morning", activity: "Early-ish breakfast, pack, check-out", notes: "", kind: "event" },
      { time: "10:00 AM", activity: "Option to stop by Okura Museum or gym", notes: "", kind: "event" },
      { time: "11:20 AM", activity: "Leave for lunch (10 mins)", notes: "", kind: "event" },
      { time: "11:30 AM", activity: "Lunch: Sougo + Oscar Wilde", notes: "", kind: "event" },
      { time: "1:00 PM", activity: "Leave for Kokkai-gijidōmae Sta. (about 20mins)", notes: "", kind: "event" },
      { time: "1:30 PM", activity: "Tameike: Exploring the Heart of Japanese Politics Tour (3 hours)", notes: "", kind: "event" },
      { time: "4:30 PM", activity: "Tour concludes", notes: "", kind: "event" },
      { time: "4:45 PM", activity: "Option 1) Brown Rice Ometosando + any Aoyama stores; back to Okura at 6pm", notes: "", kind: "event" },
      { time: "4:55 PM", activity: "Option 2) Alchemy or Shogun Burger; walk back to Okura 6:20pm", notes: "", kind: "event" },
      { time: "6:45 PM", activity: "Take car to airport", notes: "", kind: "event" },
      { time: "7:30 PM", activity: "Arrive at Airport", notes: "", kind: "event" },
      { time: "9:55 PM", activity: "Haneda > Honolulu (JL72)", notes: "", kind: "event" },
    ],
  },
  {
    date: "TIMEWARP",
    location: "Honolulu",
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
    title: "Waikiki Living: Beach Day Recovery",
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
      { time: "", activity: "Pickup Sheraton Waikiki Beach Resort", notes: "", kind: "event" },
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
    location: "Honolulu/San Francisco",
    title: "Back to Reality: Travel Home",
    items: [
      { time: "10:00 AM", activity: "Shuttle", notes: "", kind: "event" },
      { time: "12:30 PM", activity: "HNL > SFO flight (HA812)", notes: "", kind: "event" },
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
const destinationSpotlight = document.querySelector("#destinationSpotlight");
const dayCardTemplate = document.querySelector("#dayCardTemplate");
const eventTemplate = document.querySelector("#eventTemplate");
const todayJumpFab = document.querySelector("#todayJumpFab");
const tripYear = 2026;

const monthIndexes = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const uniqueStops = [
  "San Francisco",
  "Tokyo",
  "Nikko",
  "Kamakura",
  "Kyoto",
  "Himeji",
  "Naoshima",
  "Honolulu",
];

const filterStops = [
  "San Francisco",
  "Tokyo",
  "Nikko",
  "Kamakura",
  "Kyoto",
  "Himeji",
  "Naoshima",
  "Honolulu",
];

const imageAssets = {
  sfCableCarWeb: {
    src: "https://images.unsplash.com/photo-1770742153178-84f7b416d761?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/cable-car-on-a-street-in-san-francisco-walLgLob1YE",
    alt: "San Francisco cable car on a sunlit street",
    credit: "clement proust via Unsplash",
  },
  sfSkylineWeb: {
    src: "https://images.unsplash.com/photo-1754018111909-e5f360f6c271?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/san-francisco-skyline-with-a-bridge-and-the-bay-Ms6aT6qea9E",
    alt: "San Francisco skyline with the Bay Bridge",
    credit: "Mazin Omron via Unsplash",
  },
  sfWaterfrontWeb: {
    src: "https://images.unsplash.com/photo-1770739528974-b34aff52b730?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/san-francisco-skyline-with-buildings-and-a-beach-pY6wWJkzEvI",
    alt: "San Francisco waterfront skyline",
    credit: "clement proust via Unsplash",
  },
  sfVictorianWeb: {
    src: "https://images.unsplash.com/photo-1621606016505-f74ee91fc522?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sourceUrl: "https://unsplash.com/photos/cars-parked-in-front-of-white-concrete-building-during-daytime-zVpcLB_LBDA",
    alt: "Cars parked on a San Francisco street lined with white Victorian buildings",
    creditHtml: 'Photo by <a href="https://unsplash.com/@szamanm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer noopener">Piotr Musioł</a> on <a href="https://unsplash.com/photos/cars-parked-in-front-of-white-concrete-building-during-daytime-zVpcLB_LBDA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer noopener">Unsplash</a>',
  },
  sfSkyline: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/San_Francisco_skyline_from_Marin_Headlands.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:San_Francisco_skyline_from_Marin_Headlands.jpg",
    alt: "San Francisco skyline from Marin Headlands",
    credit: "Ryan Schwark via Wikimedia Commons, CC0 1.0",
  },
  tokyoSkyline: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo_Skyline.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tokyo_Skyline.jpg",
    alt: "Tokyo skyline",
    credit: "Ningyou via Wikimedia Commons, Public domain",
  },
  tokyoSunset: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo_-_Sunset_Skyline.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tokyo_-_Sunset_Skyline.jpg",
    alt: "Tokyo skyline at sunset with Mount Fuji in the distance",
    credit: "Fred Cherrygarden via Wikimedia Commons, CC BY-SA 4.0",
  },
  tokyoTowerWeb: {
    src: "https://images.unsplash.com/photo-1759495049794-10431ebc1898?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/tokyo-tower-illuminated-at-night-with-city-lights-wOUsihrc0Ug",
    alt: "Tokyo Tower illuminated above the city at night",
    credit: "Y S via Unsplash",
  },
  tokyoGardenWeb: {
    src: "https://images.unsplash.com/photo-1767859937364-f0449719b7f8?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/tranquil-japanese-garden-with-a-stone-bridge-and-pond-2xWtjatUGwk",
    alt: "A tranquil garden in Tokyo",
    credit: "Muhammad Irfan via Unsplash",
  },
  tokyoShinjukuWeb: {
    src: "https://images.unsplash.com/photo-1531164442814-c81a813fd9a4?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/shinjuku-tokyo-japan-d92I1Of2ofQ",
    alt: "Kabukicho gate in Shinjuku at night",
    credit: "Manuel Cosentino via Unsplash",
  },
  tokyoAsakusaTempleWeb: {
    src: "https://images.unsplash.com/photo-1716845219909-9542be627951?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/a-tall-building-with-a-tower-in-the-background-xDUNSgp5LQw",
    alt: "Senso-ji and pagoda in Asakusa",
    credit: "Frank Huang via Unsplash",
  },
  tokyoAsakusaNight: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sunset_in_Tokyo_Tower_-_panoramio.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sunset_in_Tokyo_Tower_-_panoramio.jpg",
    alt: "Sunset light over Tokyo Tower",
    credit: "Tomi M\u00e4kitalo via Wikimedia Commons, CC BY 3.0",
  },
  gotokujiTemple: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gotokuji.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gotokuji.jpg",
    alt: "Gotoku-ji temple in Tokyo",
    credit: "Akonnchiroll via Wikimedia Commons, CC BY-SA 4.0",
  },
  tokyoTowerNight: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo_Tower_at_night_-_DSC00818.JPG?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tokyo_Tower_at_night_-_DSC00818.JPG",
    alt: "Tokyo Tower lit up at night",
    credit: "Daderot via Wikimedia Commons, CC0 1.0",
  },
  shinjukuGyoen: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/At_Shinjuku_Gyoen.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:At_Shinjuku_Gyoen.jpg",
    alt: "Garden scene at Shinjuku Gyoen",
    credit: "nubobo via Wikimedia Commons, CC BY 2.0",
  },
  nezuMuseumGarden: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nezu_Museum_P5091941.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nezu_Museum_P5091941.jpg",
    alt: "Garden at Nezu Museum in Tokyo",
    credit: "Fukumoto via Wikimedia Commons, CC BY-SA 4.0",
  },
  kamakuraBuddha: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Great_Buddha_of_Kamakura%2C_Kanagawa_Prefecture%3B_May_2011_%2801%29.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Great_Buddha_of_Kamakura,_Kanagawa_Prefecture;_May_2011_(01).jpg",
    alt: "The Great Buddha of Kamakura",
    credit: "TAKA@P.P.R.S via Wikimedia Commons, CC BY-SA 2.0",
  },
  hasederaKamakura: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hase-dera_Kamakura.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hase-dera_Kamakura.jpg",
    alt: "View from Hase-dera Temple in Kamakura",
    credit: "U-Kane via Wikimedia Commons, CC BY-SA 4.0",
  },
  hasederaInteriorWeb: {
    src: "https://images.unsplash.com/photo-1723242017109-64ac2ad3babf?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/a-room-with-a-large-circular-window-and-flowers-in-a-basket-Apozpg8oXUk",
    alt: "Tatami room at Hase-dera Temple in Kamakura",
    credit: "Andrea Sun via Unsplash",
  },
  nikkoToshogu: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nikko_toshogu_shrine.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nikko_toshogu_shrine.jpg",
    alt: "Nikko Toshogu Shrine",
    credit: "Koichi Sato via Wikimedia Commons, CC BY-SA 4.0",
  },
  nikkoToshoguWeb: {
    src: "https://images.unsplash.com/photo-1735034758020-908f7783ff91?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/a-pagoda-in-the-middle-of-a-forest-C1H_w47pSN4",
    alt: "Pagoda among the trees in Nikko",
    credit: "S K via Unsplash",
  },
  kyotoKinkaku: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kinkaku-ji%2C_Kyoto.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kinkaku-ji,_Kyoto.jpg",
    alt: "Kinkaku-ji in Kyoto",
    credit: "27curlyta via Wikimedia Commons, CC0 1.0",
  },
  kyotoStreet: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_street_Kyoto.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Japanese_street_Kyoto.jpg",
    alt: "Street scene in Kyoto",
    credit: "Floodmfx via Wikimedia Commons, CC0 1.0",
  },
  ginkakuji: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ginkaku%2C_Jish%C5%8D-ji.JPG?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ginkaku,_Jish%C5%8D-ji.JPG",
    alt: "Ginkaku-ji in Kyoto",
    credit: "Kakidai via Wikimedia Commons, CC BY-SA 4.0",
  },
  kiyomizuTemple: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kiyomizu-dera_in_Kyoto-r.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kiyomizu-dera_in_Kyoto-r.jpg",
    alt: "Kiyomizu-dera in Kyoto",
    credit: "Daderot via Wikimedia Commons, CC0 1.0",
  },
  kiyomizuTempleWeb: {
    src: "https://images.unsplash.com/photo-1531408638501-77322cd8a5ed?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/green-and-orange-temples-_7RtWTAXvms",
    alt: "Kiyomizu-dera in Kyoto at golden hour",
    credit: "zhgn_ via Unsplash",
  },
  himejiCastle: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Himeji_castle_q.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Himeji_castle_q.jpg",
    alt: "Himeji Castle",
    credit: "Floodmfx via Wikimedia Commons, CC0 1.0",
  },
  himejiCastleWeb: {
    src: "https://images.unsplash.com/photo-1741044191378-340e656d453c?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/a-japanese-castle-stands-on-a-clear-bright-day-ekmIkOYrOVE",
    alt: "Himeji Castle under a bright blue sky",
    credit: "Charlie Charoenwattana via Unsplash",
  },
  naoshimaPort: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Naoshima_honmura_port_terminal.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Naoshima_honmura_port_terminal.jpg",
    alt: "Port terminal on Naoshima",
    credit: "Artandgeograph via Wikimedia Commons, CC BY-SA 4.0",
  },
  naoshimaSeaWeb: {
    src: "https://images.unsplash.com/photo-1699031847231-fda6325b2363?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/a-group-of-boats-floating-on-top-of-a-large-body-of-water-V5q7BMXfAv0",
    alt: "Boats on the water around Naoshima",
    credit: "Lee Thom via Unsplash",
  },
  naoshimaBeachWeb: {
    src: "https://images.unsplash.com/photo-1699031840949-a81e2c58ac85?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/a-body-of-water-sitting-next-to-a-sandy-beach-K3hdYC9ZK-s",
    alt: "Shoreline on Naoshima",
    credit: "Lee Thom via Unsplash",
  },
  naoshimaInteriorWeb: {
    src: "https://images.unsplash.com/photo-1753581271449-d11642a31439?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/modern-art-hangs-above-a-minimalist-table-jKO_dNtns4A",
    alt: "Interior scene from Hiroshi Sugimoto Gallery in Naoshima",
    credit: "Yanhao Fang via Unsplash",
  },
  naoshimaConcreteWeb: {
    src: "https://images.unsplash.com/photo-1747747005816-877450afb16f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    sourceUrl: "https://unsplash.com/photos/a-modern-concrete-interior-features-walls-ZqSHsj8GOUk",
    alt: "Concrete interior architecture on Naoshima",
    credit: "Alan Jiang via Unsplash",
  },
  naoshimaBenesse: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Entrance_to_the_Benesse_House_complex_on_Naoshima.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Entrance_to_the_Benesse_House_complex_on_Naoshima.jpg",
    alt: "Entrance to the Benesse House complex on Naoshima",
    credit: "Bea Phi via Wikimedia Commons, CC BY-SA 4.0",
  },
  minamidera: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Art_house_project_in_Naoshima%2C_Minami-dera%28%E5%8D%97%E5%AF%BA%E3%80%81%E7%9B%B4%E5%B3%B6_%E5%AE%B6%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%29_PC193351.JPG?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Art_house_project_in_Naoshima,_Minami-dera(%E5%8D%97%E5%AF%BA%E3%80%81%E7%9B%B4%E5%B3%B6_%E5%AE%B6%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88)_PC193351.JPG",
    alt: "Minami-dera on Naoshima",
    credit: "松岡明芳 via Wikimedia Commons, CC BY-SA 3.0",
  },
  yoiyaPumpkin: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Naoshima_Ferry_Terminal.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Naoshima_Ferry_Terminal.jpg",
    alt: "Naoshima Ferry Terminal in Miyanoura",
    credit: "Bea Phi via Wikimedia Commons, CC BY-SA 4.0",
  },
  nationalDietBuilding: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/National_Diet_Building.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:National_Diet_Building.jpg",
    alt: "National Diet Building in Tokyo",
    credit: "Kakidai via Wikimedia Commons, CC BY-SA 4.0",
  },
  shibuyaCrossing: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shibuya_crossing_%2812214%29.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shibuya_crossing_(12214).jpg",
    alt: "Shibuya Crossing in Tokyo",
    credit: "Syced via Wikimedia Commons, CC0 1.0",
  },
  shinjukuNight: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shinjuku_at_night.JPG?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shinjuku_at_night.JPG",
    alt: "Shinjuku at night",
    credit: "Masashi Hatsuka via Wikimedia Commons, CC BY-SA 4.0",
  },
  royalHawaiian: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal_Hawaiian_Hotel%2C_Kalakaua_Avenue%2C_Waikiki%2C_Honolulu%2C_HI_-_52273145256.jpg?width=1400",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Royal_Hawaiian_Hotel,_Kalakaua_Avenue,_Waikiki,_Honolulu,_HI_-_52273145256.jpg",
    alt: "Royal Hawaiian Hotel in Waikiki",
    credit: "w_lemay via Wikimedia Commons, CC BY-SA 2.0",
  },
  waikikiBeach: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hawaii_Honolulu_Waikiki_beach.JPG?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hawaii_Honolulu_Waikiki_beach.JPG",
    alt: "Waikiki Beach in Honolulu",
    credit: "小野 優太 via Wikimedia Commons, CC BY-SA 4.0",
  },
  honoluluSkylineWeb: {
    src: "https://cdn.pixabay.com/photo/2019/06/15/17/32/waikiki-4276133_1280.jpg",
    sourceUrl: "https://pixabay.com/photos/waikiki-honolulu-hawaii-skyline-4276133/",
    alt: "Honolulu skyline at night",
    credit: "Artodidact via Pixabay",
  },
  honoluluParkWeb: {
    src: "https://cdn.pixabay.com/photo/2013/08/13/11/18/beach-172136_1280.jpg",
    sourceUrl: "https://pixabay.com/photos/beach-hawaii-honolulu-ocean-sea-172136/",
    alt: "Palm-lined park by the beach in Honolulu",
    credit: "CCPAPA via Pixabay",
  },
  honoluluBeachWeb: {
    src: "https://cdn.pixabay.com/photo/2014/05/18/12/02/waikiki-beach-347018_1280.jpg",
    sourceUrl: "https://pixabay.com/photos/waikiki-beach-hawaii-holiday-347018/",
    alt: "Waikiki beach scene in Honolulu",
    credit: "stinne24 via Pixabay",
  },
  waikikiSunset: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Waikiki_Sunset.png?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Waikiki_Sunset.png",
    alt: "Sunset in Waikiki",
    credit: "Warren McKenzie via Wikimedia Commons, CC BY-SA 4.0",
  },
  diamondHead: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Oahu-DiamondHead-Punchbowl-Honolulu.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Oahu-DiamondHead-Punchbowl-Honolulu.jpg",
    alt: "Diamond Head and Honolulu skyline",
    credit: "Travis Thurston via Wikimedia Commons, CC BY-SA 3.0",
  },
  goldenGateBridge: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Gate_Bridge_01.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Golden_Gate_Bridge_01.jpg",
    alt: "Golden Gate Bridge in San Francisco",
    credit: "Jon Sullivan via Wikimedia Commons, Public domain",
  },
  sfCableCar: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/San_Francisco_Cable_Car_-_Powell_and_Market.jpg?width=1400",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:San_Francisco_Cable_Car_-_Powell_and_Market.jpg",
    alt: "San Francisco cable car at Powell and Market",
    credit: "\u00c9rico Andrei via Wikimedia Commons, CC BY 3.0",
  },
};

const hotelImages = {
  "Hotel: Hoshinoya Tokyo": {
    src: "https://media-cdn.tripadvisor.com/media/photo-s/1b/66/a5/ac/caption.jpg",
    sourceUrl: "https://hoshinoresorts.com/en/hotels/hoshinoyatokyo/",
    alt: "HOSHINOYA Tokyo exterior",
    credit: "Image courtesy of HOSHINOYA Tokyo",
  },
  "Hotel: Kishi-ke Ryokan": {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310086629.jpg?k=44d6ac190eef9c0e4774ac65659a5e84508c7304fa000ddeb2acb1749fb7db32&o=",
    sourceUrl: "https://www.kishike.com/en/",
    alt: "Kishi-ke Ryokan room",
    credit: "Image courtesy of Kishi-ke Ryokan",
  },
  "Hotel: Tamao Kyoto": {
    src: "https://www.img-ikyu.com/contents/common/dg/image/sd/acc8/00051678/00051678a.jpg?auto=compress,format&fit=crop&h=500&lossless=0&w=750",
    sourceUrl: "https://www.tamaokyoto.com/en/",
    alt: "Tamao Kyoto room",
    credit: "Image courtesy of Tamao Kyoto",
  },
  "Hotel: Ryokan Roka": {
    src: "https://www.thehotelguru.com/_images/7c/35/7c358e2b3ede5ea339300f7705cf8911/original.jpg",
    sourceUrl: "https://roka.voyage/",
    alt: "Ryokan Roka exterior",
    credit: "Image courtesy of Ryokan Roka",
  },
  "Hotel: Okura Tokyo": {
    src: "https://theokuratokyo.jp/wp-content/uploads/2025/03/Prestige-Lobby-Rokkaku-AutumnLeaves-Recommended_TKSN8642-625x417.jpg",
    sourceUrl: "https://theokuratokyo.jp/en/",
    alt: "The Okura Tokyo lobby",
    credit: "Image courtesy of The Okura Tokyo",
  },
  "Hotel: Royal Hawaiian": {
    src: "https://cache.marriott.com/content/dam/marriott-renditions/HNLLC/hnllc-building-1813-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    sourceUrl: "https://www.royal-hawaiian.com/",
    alt: "The Royal Hawaiian exterior",
    credit: "Image courtesy of The Royal Hawaiian",
  },
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
      "This itinerary unfolds as a celebratory run through Tokyo, Kamakura, Kyoto, Naoshima, and Honolulu before returning home to California: museums, temples, train rides, unforgettable meals, spa time, and beach days in paradise at the very end to top it all off and ease the transition back home.",
    imageKey: "kyotoKinkaku",
  },
  "San Francisco": {
    title: "Launch and landing",
    summary:
      "The home base. No activities! But note the timing and flight details.",
    imageKey: "sfVictorianWeb",
  },
  Tokyo: {
    title: "Tokyo chapters",
    summary:
      "Tokyo holds the widest range of the trip: arrival energy, neighborhood wandering, museums, shopping, workout resets, milestone dinners, and the birthday day itself. It works as both launch point and finale, with each return to the city carrying a different mood.",
    imageKey: "tokyoTowerWeb",
  },
  Nikko: {
    title: "Nikko day trip",
    summary:
      "Nikko reads as the mountain-and-shrine detour inside the Tokyo chapter: Toshogu, Shinkyo Bridge, the Kanmangafuchi Abyss, and a yuba lunch before returning to the city that night.",
    imageKey: "nikkoToshoguWeb",
  },
  Kamakura: {
    title: "Kamakura pause",
    summary:
      "Kamakura compresses the trip into something more intimate and restorative. The focus shifts to temples, sea air, a ryokan stay, and a slower overnight before the Kyoto transition.",
    imageKey: "kamakuraBuddha",
  },
  Kyoto: {
    title: "Kyoto center of gravity",
    summary:
      "Kyoto carries the craft, history, and ritual core of the itinerary. It includes the transfer from Kamakura, the Himeji excursion, recovery time, hikes, dinners, and the moment where the trip feels most rooted in place.",
    imageKey: "kiyomizuTemple",
  },
  Himeji: {
    title: "Himeji side quest",
    summary:
      "Himeji is a focused castle-history day trip from Kyoto, built around the guided Himeji Castle and Koko-en visit before the evening returns the trip to its Kyoto rhythm.",
    imageKey: "himejiCastleWeb",
  },
  Naoshima: {
    title: "Naoshima immersion",
    summary:
      "Naoshima is the art-island deep breath. Ferries, buses, bike rides, museums, galleries, and kaiseki dinners create a slower, more atmospheric chapter before the return to Tokyo.",
    imageKey: "naoshimaSeaWeb",
  },
  Honolulu: {
    title: "Honolulu coda",
    summary:
      "Honolulu acts as the warm afterglow of the trip. After the birthday flight out of Japan, the plan loosens into massage, beach time, bike touring, easier meals, and a gentler runway back into real life.",
    imageKey: "honoluluSkylineWeb",
  },
};

const dayImages = {
  "Thursday, May 7": "sfWaterfrontWeb",
  "Friday, May 8": "tokyoSunset",
  "Saturday, May 9": "gotokujiTemple",
  "Sunday, May 10": "tokyoGardenWeb",
  "Monday, May 11": "nikkoToshogu",
  "Tuesday, May 12": "nezuMuseumGarden",
  "Wednesday, May 13": "hasederaInteriorWeb",
  "Thursday, May 14": "kyotoStreet",
  "Friday, May 15": "himejiCastle",
  "Saturday, May 16": "kiyomizuTempleWeb",
  "Sunday, May 17": "naoshimaBeachWeb",
  "Monday, May 18": "naoshimaConcreteWeb",
  "Tuesday, May 19": "tokyoTowerNight",
  "Wednesday, May 20": "shibuyaCrossing",
  "Thursday, May 21": "tokyoAsakusaTempleWeb",
  TIMEWARP: "honoluluParkWeb",
  "Friday, May 22": "waikikiBeach",
  "Saturday, May 23": "waikikiSunset",
  "Sunday, May 24": "goldenGateBridge",
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
  "Vegan Sushi Tokyo": "https://www.google.com/maps/search/?api=1&query=Vegan+Sushi+Tokyo+Dogenzaka+Shibuya+Tokyo",
  "Vegan Bistro Jangara": "https://maps.app.goo.gl/kx6zzjLH7zho86AQ8",
  "Bistro Jangara": "https://www.google.com/maps/search/?api=1&query=Vegan+Bistro+Jangara+Harajuku+Tokyo",
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
  "Maybe pick up protein powder (bio-ce-bon, Ginza Six)":
    `Maybe pick up protein powder (${linkExternal("Bio c' Bon GINZA SIX Store", "https://maps.app.goo.gl/j4YbxRsgskJ5VgBK8")})`,
  "Ginza exploration":
    `${linkExternal("Ginza exploration", "https://en.wikipedia.org/wiki/Ginza")}`,
  "Gotoku-ji":
    `${linkExternal("Gotoku-ji", "https://en.wikipedia.org/wiki/G%C5%8Dtoku-ji")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/VxmWY4fsTyNW2y1K8")}`,
  "Photomatic, Iyoshi Cola, Square Enix?":
    `${linkExternal("Photomatic", "https://maps.app.goo.gl/TBm7zZ1yEjorGVEYA")}, ${linkExternal("Iyoshi Cola", "https://maps.app.goo.gl/jCmG2q2Rv4h5aCwz6")}, ${linkExternal("ARTNIA Square Enix", "https://maps.app.goo.gl/ndJ7jYrryREBe8AV7")}?`,
  "Ragtag (Harujuku and Shibuya), Snoopytown, Beams":
    `${linkExternal("Ragtag", "https://www.ragtag.jp/")} (${linkExternal("Harajuku", "https://maps.app.goo.gl/6cEtTpRSWtoww3TJ8")} and ${linkExternal("Shibuya", "https://maps.app.goo.gl/dnfgEdQizpB1Jn6D8")} / ${linkExternal("GTD", "https://maps.app.goo.gl/QmFrjZXDeXgrFnNUA")}), ${linkExternal("Snoopytown", "https://maps.app.goo.gl/h4qe3SZuuDkgaeaM7")}, ${linkExternal("Beams", "https://maps.app.goo.gl/PzvdSwAhePdpvup17")}, ${linkExternal("Kuon", "https://maps.app.goo.gl/Hy4wSyCJxrPNnYta9")}`,
  "Shinjuku Gyoen":
    `${linkExternal("Shinjuku Gyoen", "https://www.env.go.jp/garden/shinjukugyoen/english/")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/9qPiV5y3H4pRZyax9")}`,
  "Snack: marbre vegan":
    `Snack: ${linkPlace("marbre vegan")}`,
  "Isetan men's, CDG":
    `${linkExternal("Isetan men's", "https://maps.app.goo.gl/JVHhKk6LszfwECn99")}, ${linkExternal("CDG", "https://maps.app.goo.gl/QGURcHoyJ5cPK1pn7")} (${linkExternal("Shinjuku", "https://en.wikipedia.org/wiki/Shinjuku")})`,
  "Shinkyo Bridge, Toshogu Shrine, Kanmangafuchi Abyss":
    `${linkExternal("Shinkyo Bridge", "https://en.wikipedia.org/wiki/Futarasan_shrine#Sacred_Bridge")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/YS6ZPGHuCm3sj41z5")}, ${linkExternal("Toshogu Shrine", "https://en.wikipedia.org/wiki/Nikk%C5%8D_T%C5%8Dsh%C5%8D-g%C5%AB")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/UgYmyeR8Akg6d7T3A")}, ${linkExternal("Kanmangafuchi Abyss", "https://www.japan-guide.com/e/e3810.html")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/3cfjZHXUjc7NwpoF8")}`,
  "Train to Nikko Spacia X (depart from Tokyo Skytree)":
    `Train to ${linkExternal("Nikko Spacia X", "https://www.tobu.co.jp/spaciax/en/en/")} (${linkExternal("Nikko", "https://en.wikipedia.org/wiki/Nikk%C5%8D")}; depart from ${linkExternal("Tokyo Skytree", "https://maps.app.goo.gl/hLFVa4QCF7LwdBsV6")})`,
  "Arrive Tōbu-nikkō Station":
    `Arrive ${linkExternal("Tōbu-nikkō Station", "https://maps.app.goo.gl/9Q9sHZKJQzcHEVku6")}`,
  "Nezu Museum":
    `${linkExternal("Nezu Museum", "https://www.nezu-muse.or.jp/en/")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/wTB6WCmoPZuTCrFf9")}`,
  "Nuts Exchange Tokyo":
    `${linkPlace("Nuts Exchange Tokyo")}`,
  "Aoyama shops: CDG, Dries, Pleats Please, Sacai. Margiela + MM6":
    `${linkExternal("Aoyama", "https://maps.app.goo.gl/nkdrt2ZRzCARQSgc7")} shops: ${[
      linkExternal("CDG", "https://maps.app.goo.gl/dzp277KYXCXbcjaU8"),
      linkExternal("Dries", "https://maps.app.goo.gl/Pmki6RmKHj17zZmJA"),
      linkExternal("Pleats Please", "https://maps.app.goo.gl/dMytKeuNE8jgDd15A"),
      linkExternal("Sacai", "https://maps.app.goo.gl/rFmTgKg6QJsaiaxr7"),
    ].join(", ")}. ${linkExternal("Margiela", "https://maps.app.goo.gl/NHN7QbRNtNDwqTNZ9")} + ${linkExternal("MM6", "https://maps.app.goo.gl/aSwUq3fEQcEDQMVC6")}`,
  "Hasedera Temple, Buddha":
    `${linkExternal("Hasedera Temple", "https://en.wikipedia.org/wiki/Hase-dera_(Kamakura)")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/Y2MWc9ZEu2Ty3qc4A")}, ${linkExternal("Kōtoku-in Buddha", "https://en.wikipedia.org/wiki/K%C5%8Dtoku-in")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/e4QWpKzUfsvb6oWs6")}`,
  "Options if time: Zeniarai Shrine,Genjiyama Park, Tsurugaoka Shrine, Old Town":
    `Options if time: ${linkExternal("Zeniarai Shrine", "https://en.wikipedia.org/wiki/Zeniarai_Benzaiten_Ugafuku_Shrine")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/EWkBeB2oZD6hmTdf9")}, ${linkExternal("Genjiyama Park", "https://www.japan-guide.com/e/e3113.html")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/xUDgGewmwMJZTEy48")}, ${linkExternal("Tsurugaoka Shrine", "https://en.wikipedia.org/wiki/Tsurugaoka_Hachimang%C5%AB")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/cZ5uAXx7KCDUwgbH7")}, ${linkExternal("Old Town", "https://maps.app.goo.gl/FxHuQR8z5zcMu8xa7")}`,
  "Himeji Castle and Koko-en Gardens Tickets":
    `${linkExternal("Himeji Castle", "https://en.wikipedia.org/wiki/Himeji_Castle")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/aqnP9pAX3sK1Qjq96")} and ${linkExternal("Koko-en Gardens", "https://en.wikipedia.org/wiki/K%C5%8Dko-en")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/wii6SnqYEf61dLLK9")} Tickets for a 4-hour tour with a private government guide`,
  "Guide WhatsApp +81-90-9712-1750":
    `Guide's WhatsApp: ${linkExternal("+81-90-9712-1750", "https://wa.me/819097121750")}`,
  "Send luggage to Tokyo":
    `Send luggage to Tokyo`,
  "Art House Project (Go'O, Haisha, Kadoya) (all-day tickets)":
    `${linkExternal("Art House Project", "https://benesse-artsite.jp/en/art/arthouse.html")} (${linkExternal("Go'O", "https://maps.app.goo.gl/sy9hSXtvAd3Yx9mk9")}, ${linkExternal("Haisha", "https://maps.app.goo.gl/jT59XxJ3HnxAC3VP8")}, ${linkExternal("Kadoya", "https://maps.app.goo.gl/xaq9XpMTUBDLFsHv7")}) (all-day tickets)`,
  Minamidera:
    `${linkExternal("Minamidera", "https://benesse-artsite.jp/en/art/arthouse.html")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/k3WZw2UNrJL3LpgY6")}`,
  "Lee Ufan (all-day ticket; quick stop before Chichu)":
    `${linkExternal("Lee Ufan Museum", "https://benesse-artsite.jp/en/art/lee-ufan.html")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/XVj5M4GmM32t1Ju56")} all-day ticket; quick stop before Chichu`,
  Chichu:
    `${linkExternal("Chichu Art Museum", "https://benesse-artsite.jp/en/art/chichu.html")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/y3PTV7kbCMKY3DEV8")}`,
  "Benesse House (all-day tickets)":
    `${linkExternal("Benesse House", "https://benesse-artsite.jp/en/art/benessehouse-museum.html")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/rwSUGJnAMMbiiy9m9")} (all-day tickets)`,
  "Valley Gallery (all-day tickets)":
    `${linkExternal("Valley Gallery", "https://www.wallpaper.com/architecture/valley-gallery-tadao-ando-naoshima-japan")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/g9Tfmpo5UGgjy5Mr7")} (all-day tickets)`,
  "Hiroshi Sugimoto Gallery: Time Corridors":
    `${linkExternal("Hiroshi Sugimoto Gallery: Time Corridors", "https://benesse-artsite.jp/en/art/sugimoto-gallery.html")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/wb3YADNXhidbBGETA")}`,
  "Option to stop by Okura Museum or gym":
    `Option to stop by ${linkExternal("Okura Museum", "https://theokuratokyo.jp/en/experiences-and-activities/the-okura-museum-of-art/")} or gym`,
  "Car service":
    `Car service`,
  "Dinner: Komeda-is":
    `Dinner: ${linkPlace("Komeda-is")}`,
  "Lunch: Vegan Sushi Tokyo (or Vegan Bistro Jangara)":
    `Lunch: ${linkPlace("Vegan Sushi Tokyo")} (or ${linkPlace("Vegan Bistro Jangara")})`,
  "Dinner: Izakaya Nowhere (open 5pm)":
    `Dinner: ${linkPlace("Izakaya Nowhere")} (open 5pm)`,
  "Lunch: Ain Soph Shinjuku":
    `Lunch: ${linkPlace("Ain Soph Shinjuku")}`,
  "Dinner: Bistro Jangara (20mins) or Ginza + 2foods, Komeda-is (17mins) [also Ginza block on Tuesday]":
    `Dinner: ${linkPlace("Bistro Jangara")} (20mins) or Ginza + ${linkPlace("2foods")}, ${linkPlace("Komeda-is")} (17mins) [also Ginza block on Tuesday]`,
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
  "Lunch: Il Riccio (leave at 2:45pm for train)":
    `Lunch: ${linkPlace("Il Riccio")} (leave at 2:45pm for train)`,
  "Dinner: Mumokuteki":
    `Dinner: ${linkPlace("Mumokuteki")}`,
  "Lunch: Nijiya (12-3pm) or Vegginy (12-2:30pm open) or Zirael (12:30-7pm open)":
    `Lunch: ${linkPlace("Nijiya")} (12-3pm) or ${linkPlace("Vegginy")} (12-2:30pm open) or ${linkPlace("Zirael")} (12:30-7pm open)`,
  "Honen-in (moss temple) and Ginkaku-ji (temple) + Mt. Daimonji-yama Climb":
    `${linkExternal("Honen-in", "https://en.wikipedia.org/wiki/H%C5%8Dnen-in")} (moss temple—${linkMeta("map", "https://maps.app.goo.gl/WRyj1i4rcixLUEn29")}) and ${linkExternal("Ginkaku-ji", "https://en.wikipedia.org/wiki/Ginkaku-ji")} (Zen temple—${linkMeta("map", "https://maps.app.goo.gl/jjUQ9Jzske99u4Uw8")}) + ${linkExternal("Mt. Daimonji-yama Climb", "http://insidekyoto.com/mt-daimonji-yama-hike-ginkaku-ji-temple")} (hike)`,
  "Dinner: Uno Ramen Sanjo":
    `Dinner: ${linkPlace("Uno Ramen Sanjo")}`,
  "Lunch: aisunao or apron":
    `Lunch: ${linkPlace("aisunao")} or ${linkPlace("apron")}`,
  "Dinner: Noeud.Tokyo":
    `Dinner: ${linkPlace("Noeud.Tokyo")}`,
  "Ginza":
    `${linkExternal("Ginza", "https://en.wikipedia.org/wiki/Ginza")}`,
  "Train to Shin-Yokahama":
    `Train to ${linkExternal("Shin-Yokahama", "https://en.wikipedia.org/wiki/Shin-Yokohama_Station")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/g7MmoVLbji6QwpCu5")}`,
  "Train to Kamakura":
    `Train to ${linkExternal("Kamakura", "https://en.wikipedia.org/wiki/Kamakura")}`,
  "Arrive in Kamakura; drop bags at Kishi-ke Ryokan":
    `Arrive in ${linkExternal("Kamakura", "https://en.wikipedia.org/wiki/Kamakura")}; drop bags at ${linkExternal("Kishi-ke Ryokan", "https://maps.app.goo.gl/MVXJoTwxnbahj8uRA")}`,
  "Train to Himeji":
    `Train to ${linkExternal("Himeji", "https://en.wikipedia.org/wiki/Himeji")} ${linkMetaWrapped("station map", "https://maps.app.goo.gl/7rwwLQmFq4dmTPmc6")}`,
  "Arrival, grab coffee":
    `Arrival in ${linkExternal("Himeji", "https://en.wikipedia.org/wiki/Himeji")} ${linkMetaWrapped("station map", "https://maps.app.goo.gl/7rwwLQmFq4dmTPmc6")}, grab coffee`,
  "Dropoff at Naoshima Port":
    `Dropoff at ${linkExternal("Naoshima Port", "https://en.wikipedia.org/wiki/Naoshima,_Kagawa")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/mGeTGPJWf4kSvAST9")}`,
  "Ni-Chome":
    `${linkExternal("Ni-Chome", "https://en.wikipedia.org/wiki/Shinjuku_Ni-ch%C5%8Dme")} 🏳️‍🌈 ${linkMetaWrapped("map", "https://maps.app.goo.gl/x6RgxKpGzDvJZLYQ6")}`,
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
    `Night time beach walk with banana ice cream from ${linkExternal("banan", "https://banan.co/")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/iV9Yb2vhP6FrLNSi9")}`,
  "Option 1) Brown Rice Ometosando + any Aoyama stores; back to Okura at 6pm":
    `Option 1) ${linkPlace("Brown Rice Ometosando")} + any Aoyama stores; back to Okura at 6pm`,
  "Option 2) Alchemy or Shogun Burger; walk back to Okura 6:20pm":
    `Option 2) ${linkExternal("Alchemy", "https://maps.app.goo.gl/5EysXKRcBkP7cNS86")} or ${linkExternal("Shogun Burger", "https://maps.app.goo.gl/66GZ5aEHWmV2SyXk6")} ; walk back to Okura 6:20pm`,
  "Sumida River nighttime walk":
    `${linkExternal("Sumida River", "https://en.wikipedia.org/wiki/Sumida_River")} nighttime walk`,
  "If time permits, cat billboard and maybe Tokyo Metropolitan Gov. Building observation deck":
    `If time permits, ${linkExternal("cat billboard", "https://maps.app.goo.gl/mfoGWjSedo7kciyEA")} and maybe ${linkExternal("Tokyo Metropolitan Gov. Building observation deck", "https://maps.app.goo.gl/9Ax4JnrNnsCdjkVD7")}`,
  "Head to Aman":
    `Head to ${linkExternal("Aman", "https://maps.app.goo.gl/pJDERJZ4QXGzurYR9")}`,
  "Aman Spa Afternoon (4pm treatment; 90min Grounding Massage Ritual)":
    `${linkExternal("Aman Spa Afternoon", "https://www.aman.com/hotels/aman-tokyo/wellness/spa")} (4pm treatment; 90min Grounding Massage Ritual)`,
  "Optional: Royal Hawaiian Tour at Bakery (60 mins)":
    `Optional: ${linkExternal("Royal Hawaiian Tour at Bakery", "https://www.royal-hawaiian.com/events/")} (60 mins)`,
  "Hanko class":
    `${linkExternal("Hanko class", "https://wabunka-lux.jp/experiences/en_kamakurahanko-basic/")} 💮 ${linkMetaWrapped("map", "https://maps.app.goo.gl/XYYQ9LXeu3eUtwhP7")}`,
  "Shuttle (first coffee mikauzkishoten)":
    `Shuttle (first coffee ${linkExternal("mikauzkishoten", "https://www.google.com/maps/search/?api=1&query=Mikazuki+Shoten+Naoshima")})`,
  "Chopstick workshop (90 mins)":
    `${linkExternal("Chopstick workshop", "https://wabunka-lux.jp/experiences/en_mogami-kogei/")} (90 mins—${linkMeta("map", "https://maps.app.goo.gl/totZ3EwxMpBxGyCw7")})`,
  "Tokyo Tower View":
    `${linkExternal("Tokyo Tower View", "https://maps.app.goo.gl/VVXsC18jGQMDWvS76")}`,
  "Tameike: Exploring the Heart of Japanese Politics Tour (3 hours)":
    `${linkExternal("Tameike: Exploring the Heart of Japanese Politics Tour", "https://www.getyourguide.com/tokyo-l193/tameike-exploring-the-heart-of-japanese-politics-tour-t740982/?ranking_uuid=84718a94-dad7-4a5f-9f43-e9731ef8145a")} (3 hours—${linkMeta("map", "https://maps.app.goo.gl/62EZ3m1KtWmafME28")})`,
  "eBike Tour Honolulu Rainforest":
    `${linkExternal("eBike Tour Honolulu Rainforest", "https://www.tripadvisor.com/AttractionProductReview-g29222-d17684562-EBike_Tour_Honolulu_Rainforest-Oahu_Hawaii.html")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/yHcJ3L7t5JpaGWtv9")}`,
  "Bike ride":
    `${linkExternal("Bike ride", "https://roka.voyage/news-en/bicycle-rental-information-2/")}`,
  "Train to Okayama":
    `Train to ${linkExternal("Okayama", "https://maps.app.goo.gl/4gpD1uShsE2A8vt7A")}`,
  "Train to Uno":
    `Train to ${linkExternal("Uno", "https://maps.app.goo.gl/vpkVLX6gTvW2febEA")}`,
  "Ferry (get roundtrip tix)":
    `${linkExternal("Ferry", "https://maps.app.goo.gl/iL5TzVz19UFUsrDh8")} (get roundtrip tix)`,
  "Ferry Miyanoura":
    `${linkExternal("Ferry Miyanoura", "https://maps.app.goo.gl/scL5bMbvZdrvDNeF6")}`,
  "Train to Okayma (grab train food)":
    `Train to ${linkExternal("Okayma", "https://maps.app.goo.gl/FGapm1YgJTLsRExE9")} (grab train food)`,
  "Leave for Kokkai-gijidōmae Sta. (about 20mins)":
    `Leave for ${linkExternal("Kokkai-gijidōmae Sta.", "https://maps.app.goo.gl/fwvtdbkrT5R3a9XW9")} (about 20mins)`,
  "Pickup Sheraton Waikiki Beach Resort":
    `${linkExternal("Pickup Sheraton Waikiki Beach Resort", "https://maps.app.goo.gl/5PTHRqhqwwCxgD1x6")}`,
  "Arrive Kyoto Station":
    `Arrive ${linkExternal("Kyoto Station", "https://maps.app.goo.gl/PX2N9Rxr7H7LBtJe6")} ${linkMetaWrapped("map", "https://maps.app.goo.gl/PX2N9Rxr7H7LBtJe6")}`,
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
  Nikko: "Nikko 🇯🇵",
  Kamakura: "Kamakura 🇯🇵",
  Kyoto: "Kyoto 🇯🇵",
  Himeji: "Himeji 🇯🇵",
  Naoshima: "Naoshima 🇯🇵",
  Honolulu: "Honolulu 🇺🇸",
};

function linkPlace(label) {
  return `<a href="${diningPlaceLinks[label]}" target="_blank" rel="noreferrer noopener">${label}</a>`;
}

function linkExternal(label, url) {
  return `<a href="${url}" target="_blank" rel="noreferrer noopener">${label}</a>`;
}

function linkMeta(label, url) {
  return `<a class="link-meta" href="${url}" target="_blank" rel="noreferrer noopener">${label}</a>`;
}

function linkMetaWrapped(label, url) {
  return `<span class="link-meta-group">(${linkMeta(label, url)})</span>`;
}

function renderFlightActivity(activity) {
  const flightCodePattern = /\b([A-Z]{2})\s?(\d{1,4})\b/g;

  if (!flightCodePattern.test(activity)) {
    return null;
  }

  return activity.replace(flightCodePattern, (_, airline, number) => {
    const code = `${airline}${number}`;
    return linkExternal(code, `https://www.google.com/search?q=${code}`);
  });
}

function getDayAnchorId(date) {
  return `day-${date.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function parseItineraryDate(dateLabel) {
  if (dateLabel === "TIMEWARP") {
    return null;
  }

  const parts = dateLabel.match(/^[A-Za-z]+,\s+([A-Za-z]+)\s+(\d{1,2})$/);
  if (!parts) {
    return null;
  }

  const [, monthName, dayNumber] = parts;
  const monthIndex = monthIndexes[monthName];
  if (monthIndex === undefined) {
    return null;
  }

  return new Date(tripYear, monthIndex, Number(dayNumber));
}

function isSameCalendarDay(firstDate, secondDate) {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
}

function normalizeLocation(location) {
  return location || "Unassigned";
}

function emphasizeCities(text) {
  return text.replace(
    /\b(San Francisco|Tokyo|Kamakura|Kyoto|Himeji|Naoshima|Honolulu)\b/g,
    "<strong>$1</strong>"
  );
}

function superscriptMonthDays(text) {
  return text.replace(/\b(May) (\d{1,2})(?!<)/g, (_, month, dayText) => {
    const day = Number(dayText);
    return `${month} ${day}<sup>${getOrdinalSuffix(day)}</sup>`;
  });
}

function renderImageCredit(image, { prefix = "Image: " } = {}) {
  if (!image) {
    return "";
  }

  if (image.creditHtml) {
    return image.creditHtml;
  }

  return `<a href="${image.sourceUrl}" target="_blank" rel="noreferrer noopener">${prefix}${image.credit}</a>`;
}

function getDisplayLocation(day) {
  if (!day.location) {
    return getDayStops(day)
      .filter((stop) => stop !== "Unassigned")
      .join(" / ");
  }

  return normalizeLocation(day.location);
}

function getDayStops(day) {
  const base = normalizeLocation(day.location)
    .split("/")
    .map((stop) => stop.trim())
    .filter(Boolean);

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

function countRestaurantStops() {
  return itinerary.reduce(
    (sum, day) =>
      sum +
      day.items.filter((item) => item.kind === "event" && getCuisineTypes(item.activity).length).length,
    0
  );
}

function countActivities() {
  return itinerary.reduce(
    (sum, day) =>
      sum +
      day.items.filter((item) => item.kind === "event" && !getCuisineTypes(item.activity).length).length,
    0
  );
}

function renderHeroStats() {
  const stats = [
    { label: "Days", value: itinerary.length },
    { label: "Restaurants", value: countRestaurantStops() },
    { label: "Hotels", value: countHotels() },
    { label: "Activities", value: countActivities() },
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
  routeCards.innerHTML = `
    <div class="overview-index" id="route-index">
      <div class="overview-index__intro">
        <h3>High-level day index</h3>
      </div>
      <div class="overview-index__table" role="list">
        ${itinerary
          .map(
            (day, index) => `
              <a
                class="overview-index__row"
                href="#${getDayAnchorId(day.date)}"
                data-day-anchor="${getDayAnchorId(day.date)}"
                role="listitem"
                aria-label="Jump to ${day.date}"
              >
                <span class="overview-index__day">Day ${String(index + 1).padStart(2, "0")}</span>
                <span class="overview-index__date">${formatDateWithSuperscript(day.date)}</span>
                <span class="overview-index__place">${getDisplayLocation(day)}</span>
                <span class="overview-index__summary">${day.title}</span>
              </a>
            `
          )
          .join("")}
      </div>
    </div>
  `;

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
          ([name, address]) => {
            const image = hotelImages[name];
            return `
            <article class="hotel-stack__item" data-href="${hotelLinks[name] || "#"}" tabindex="0" role="link" aria-label="Open ${name.replace("Hotel: ", "")} website">
              <img class="hotel-stack__image" src="${image?.src || ""}" alt="${image?.alt || name.replace("Hotel: ", "")}" loading="lazy" />
              ${
                image
                  ? `<p class="hotel-stack__credit">${renderImageCredit(image, { prefix: "" })}</p>`
                  : ""
              }
              <div class="hotel-stack__body">
                <span>${address}</span>
                <strong>${name.replace("Hotel: ", "")}</strong>
              </div>
            </article>
          `;
          }
        )
        .join("")}
    </div>
  `;

  hotelSummary.querySelectorAll(".hotel-stack__item[data-href]").forEach((card) => {
    const openCard = () => {
      window.open(card.dataset.href, "_blank", "noopener,noreferrer");
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        return;
      }
      openCard();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCard();
      }
    });
  });

  routeCards.querySelectorAll("[data-day-anchor]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      jumpToDay(link.dataset.dayAnchor);
    });
  });
}

function formatDateWithSuperscript(date) {
  if (date === "TIMEWARP") {
    return "May 21<sup>st</sup> TimeWarp";
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
  const buttons = ["All", ...filterStops];

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
  const spotlightImage = spotlight.imageKey ? imageAssets[spotlight.imageKey] : null;
  const days =
    key === "All"
      ? itinerary.map((day) => day.date)
      : itinerary
          .filter((day) => getDayStops(day).includes(key))
          .map((day) => day.date);

  destinationSpotlight.innerHTML = `
    <div class="spotlight__media">
      ${
        spotlightImage
          ? `
            <a class="spotlight__image-link" href="${spotlightImage.sourceUrl}" target="_blank" rel="noreferrer noopener" aria-label="Open image source for ${spotlight.title}">
              <img class="spotlight__image" src="${spotlightImage.src}" alt="${spotlightImage.alt}" loading="lazy" />
            </a>
            <p class="spotlight__credit">
              ${renderImageCredit(spotlightImage)}
            </p>
          `
          : spotlight.image
          ? `<img class="spotlight__image" src="${spotlight.image}" alt="${spotlight.alt}" loading="lazy" />`
          : `<div class="spotlight__placeholder">Image<br />placeholder</div>`
      }
    </div>
    <div class="spotlight__body">
      <p class="spotlight__kicker">${key === "All" ? "Trip summary" : key}</p>
      <h3>${spotlight.title}</h3>
      <p>${superscriptMonthDays(spotlight.summary)}</p>
      <div class="spotlight__days">
        ${days
          .map(
            (day) =>
              `<a class="spotlight__day" href="#${getDayAnchorId(day)}">${formatDateWithSuperscript(day)}</a>`
          )
          .join("")}
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

const placeCuisineTypes = {
  "Komeda-is": ["Cafe"],
  "Vegan Sushi Tokyo": ["Sushi"],
  "Vegan Bistro Jangara": ["Bistro"],
  "Bistro Jangara": ["Bistro"],
  "Izakaya Nowhere": ["Izakaya"],
  "Ain Soph Shinjuku": ["Cafe"],
  "2foods": ["Cafe"],
  "Cafe Restaurant Bell": ["Set Meal"],
  "Falafel Brothers": ["Falafel"],
  "Brown Rice Ometosando": ["Set Meal"],
  FARO: ["Fine Dining"],
  "luna burger": ["Burger"],
  magokoro: ["Set Meal"],
  "Vegan Izakaya Masaka": ["Izakaya"],
  "Il Riccio": ["Fine Dining"],
  Kotonoki: ["Set Meal"],
  Mumokuteki: ["Cafe"],
  Nijiya: ["Set Meal"],
  Vegginy: ["Bistro"],
  Zirael: ["Bistro"],
  "Uno Ramen Sanjo": ["Ramen"],
  aisunao: ["Set Meal"],
  apron: ["Cafe"],
  "Noeud.Tokyo": ["Fine Dining"],
  Marugoto: ["Set Meal"],
  Udatsu: ["Sushi"],
  Sougo: ["Fine Dining"],
  "Oscar Wilde": ["Fine Dining"],
  "Island Vintage": ["Cafe"],
  "Peace Cafe": ["Cafe"],
  Floralia: ["Pizza"],
  "Tane Vegan Izakaya": ["Izakaya"],
  "Universal Bakes and Cafe": ["Cafe"],
  "marbre vegan": ["Cafe"],
  "Nuts Exchange Tokyo": ["Food"],
};

function getCuisineTypes(activity) {
  const value = activity.toLowerCase();
  const types = new Set();

  Object.entries(placeCuisineTypes).forEach(([place, cuisineTypes]) => {
    if (value.includes(place.toLowerCase())) {
      cuisineTypes.forEach((type) => types.add(type));
    }
  });

  if (/\bizakaya\b/.test(value)) types.add("Izakaya");
  if (/\bkaiseki\b/.test(value)) types.add("Kaiseki");
  if (/\bsushi\b/.test(value)) types.add("Sushi");
  if (/\bramen\b/.test(value)) types.add("Ramen");
  if (/\bburger\b/.test(value)) types.add("Burger");
  if (/\bcafe\b|\bcoffee\b|\bbakery\b|\bsnack\b/.test(value)) types.add("Cafe");
  if (/\bshojin\b/.test(value)) types.add("Shojin");
  if (/\bfalafel\b/.test(value)) types.add("Falafel");
  if (/\bfine dining\b|\b1\*\b|\bnoeud\b|\bfaro\b/.test(value)) types.add("Fine Dining");
  if (/\bbistro\b/.test(value)) types.add("Bistro");
  if (/\bpizza\b/.test(value)) types.add("Pizza");
  if (/\byuba set\b|\bset\b/.test(value)) types.add("Set Meal");

  if (types.size) {
    return Array.from(types);
  }

  if (/\bbreakfast\b|\blunch\b|\bdinner\b/.test(value)) {
    return ["Food"];
  }

  return [];
}

function getEventCategory(item) {
  if (item.kind === "hotel") {
    return { label: "Stay", modifier: "event--hotel" };
  }

  const activity = item.activity.toLowerCase();
  const cuisineTypes = getCuisineTypes(item.activity);

  if (cuisineTypes.length) {
    const label = cuisineTypes.join(" / ");
    return {
      label,
      modifier: "event--meal",
    };
  }

  if (
    /\b(flight|train|taxi|shuttle|ferry|bus|airport|car service|waymo|leave for|depart|pickup|dropoff|send luggage)\b/.test(activity) ||
    /\b(arrive|arrival|back in)\b/.test(activity) ||
    /\b[a-z]{2,}\b\s*>\s*\b[a-z]{2,}\b/.test(activity)
  ) {
    return { label: "Travel", modifier: "event--travel" };
  }

  if (
    /\b(museum|gallery|art house|chichu|minamidera|benessee|benesse|sugimoto)\b/.test(activity)
  ) {
    return { label: "Museum", modifier: "event--museum" };
  }

  if (
    /\b(shop|shops|store|stores|ragtag|beams|snoopytown|isetan|cdg|dries|pleats please|sacai|margiela|mm6|pick up protein powder)\b/.test(activity)
  ) {
    return { label: "Shopping", modifier: "event--shopping" };
  }

  if (
    /\b(temple|shrine|bridge|park|garden|gardens|observation|walk|exploration|exploring|tour|castle|beach|tower|buddha|old town|ginza|view|climb)\b/.test(activity)
  ) {
    return { label: "Sightseeing", modifier: "event--sightseeing" };
  }

  return { label: "Activity", modifier: "event--activity" };
}

function renderEvent(item, list) {
  const node = eventTemplate.content.firstElementChild.cloneNode(true);
  const time = node.querySelector(".event__time");
  const kind = node.querySelector(".event__kind");
  const activity = node.querySelector(".event__activity");
  const notes = node.querySelector(".event__notes");
  const category = getEventCategory(item);
  const flightActivityHtml = renderFlightActivity(item.activity);

  node.classList.add(category.modifier);

  time.textContent = item.kind === "hotel" ? item.time.replace("Hotel: ", "") : item.time || "Flexible";
  kind.textContent = category.label;
  if (item.kind === "hotel") {
    activity.innerHTML = `<a href="${getGoogleMapsUrl(item.activity, item.time.replace("Hotel: ", ""))}" target="_blank" rel="noreferrer noopener">${item.activity}</a>`;
  } else if (activityHtmlOverrides[item.activity]) {
    activity.innerHTML = activityHtmlOverrides[item.activity];
  } else if (flightActivityHtml) {
    activity.innerHTML = flightActivityHtml;
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
  resultsLabel.textContent = `${visibleDays.length} ${visibleDays.length === 1 ? "day" : "days"}`;
  timelineGrid.innerHTML = "";

  visibleDays.forEach((day, index) => {
    const card = dayCardTemplate.content.firstElementChild.cloneNode(true);
    const indexNode = card.querySelector(".day-card__index");
    const dateNode = card.querySelector(".day-card__date");
    const locationNode = card.querySelector(".day-card__location");
    const titleNode = card.querySelector(".day-card__title");
    const tagsNode = card.querySelector(".day-card__tags");
    const eventList = card.querySelector(".event-list");
    const imageLink = card.querySelector(".day-card__image-link");
    const imageNode = card.querySelector(".day-card__image");
    const creditNode = card.querySelector(".day-card__credit");
    const dayImage = imageAssets[dayImages[day.date]];

    card.id = getDayAnchorId(day.date);
    indexNode.textContent = `Day ${String(index + 1).padStart(2, "0")}`;
    dateNode.innerHTML = formatDateWithSuperscript(day.date);
    locationNode.textContent = getDisplayLocation(day);
    titleNode.innerHTML = dayTitleHtmlOverrides[day.title] || day.title;

    if (dayImage) {
      imageLink.href = dayImage.sourceUrl;
      imageLink.setAttribute("aria-label", `Open image source for ${day.date}`);
      imageNode.src = dayImage.src;
      imageNode.alt = dayImage.alt;
      creditNode.innerHTML = renderImageCredit(dayImage);
    } else {
      imageLink.remove();
      creditNode.remove();
    }

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

function jumpToDay(anchorId) {
  const target = document.getElementById(anchorId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  state.activeLocation = "All";
  renderFilters();
  renderSpotlight();
  renderTimeline();

  window.requestAnimationFrame(() => {
    document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function getTripDateMatch(now = new Date()) {
  const localToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const matchingDay = itinerary.find((day) => {
    const itineraryDate = parseItineraryDate(day.date);
    return itineraryDate ? isSameCalendarDay(itineraryDate, localToday) : false;
  });

  if (!matchingDay) {
    return null;
  }

  return {
    anchorId: getDayAnchorId(matchingDay.date),
    label: matchingDay.date,
  };
}

function setupFloatingNav() {
  if (!todayJumpFab) {
    return;
  }

  const todayMatch = getTripDateMatch();
  if (!todayMatch) {
    todayJumpFab.hidden = true;
    todayJumpFab.removeAttribute("href");
    return;
  }

  todayJumpFab.hidden = false;
  todayJumpFab.href = `#${todayMatch.anchorId}`;
  todayJumpFab.setAttribute("aria-label", `Jump to ${todayMatch.label}`);
  todayJumpFab.onclick = (event) => {
    event.preventDefault();
    jumpToDay(todayMatch.anchorId);
  };
}

renderHeroStats();
renderRouteRibbon();
renderOverview();
renderFilters();
renderSpotlight();
renderTimeline();
setupFloatingNav();
