const words = [
  {
    "word": "easy",
    "time": 3
  },
  {
    "word": "prey",
    "time": 4
  },
  {
  "word": "hard",
  "time": 3
  },
  {
  "word": "longing",
  "time": 4
  },
  {
  "word": "difficult",
  "time": 5
  },
  {
  "word": "philanthropy",
  "time": 6
  },
  {
  "word": "brainstorm",
  "time": 5
  },
  {
  "word": "paradigm",
  "time": 4
  },
  {
  "word": "yorker",
  "time": 5
  },
  {
  "word": "abstain",
  "time": 4
  },
  {
    "word": "harmony",
    "time": 4
  },
  {
    "word": "abstract",
    "time": 4
  },
  {
    "word": "sincere",
    "time": 5
  },
  {
    "word": "heinous",
    "time": 4
  },
  {
    "word": "infection",
    "time": 4
  },
  {
    "word": "dangerous",
    "time": 4
  },
  {
    "word": "ambitious",
    "time": 5
  },
  {
    "word": "ugly",
    "time": 3
  },
  {
    "word": "harm",
    "time": 3
  },
  {
    "word": "waste",
    "time": 3
  },
  {
    "word": "reincarnation",
    "time": 6
  },
  {
    "word": "passion",
    "time": 4
  },
  {
    "word": "hobby",
    "time": 3
  },
  {
    "word": "quarantine",
    "time": 5
  },
  {
    "word": "homebound",
    "time": 5
  },
  {
    "word": "hike",
    "time": 3
  },
  {
    "word": "negotiation",
    "time": 5
  },
  {
    "word": "gurgle",
    "time": 4
  },
  {
    "word": "wash",
    "time": 3
  },
  {
    "word": "software",
    "time": 4
  },
  {
    "word": "engineer",
    "time": 5
  },
  {
    "word": "doctor",
    "time": 4
  },
  {
    "word": "graduate",
    "time": 4
  },
  {
    "word": "risk",
    "time": 3
  },
  {
    "word": "averse",
    "time": 4
  },
  {
    "word": "infection",
    "time": 4
  },
  {
    "word": "keyboard",
    "time": 5
  },
  {
    "word": "pollution",
    "time": 5
  },
  {
    "word": "yawn",
    "time": 3
  },
  {
    "word": "snore",
    "time": 3
  },
  {
    "word": "sleep",
    "time": 3
  },
  {
    "word": "pizza",
    "time": 3
  },
  {
    "word": "love",
    "time": 3
  },
  {
    "word": "humble",
    "time": 3
  },
  {
    "word": "hustle",
    "time": 3
  },
  {
    "word": "loyalty",
    "time": 4
  },
  {
    "word": "respect",
    "time": 4
  },
  {
    "word": "inundated",
    "time": 4
  },
  {
    "word": "overwhelm",
    "time": 5
  },
  {
    "word": "overwhelm",
    "time": 5
  },
  {
    "word": "powerful",
    "time": 5
  },
  {
    "word": "message",
    "time": 4
  },
  {
    "word": "army",
    "time": 3
  },
  {
    "word": "pedestrian",
    "time": 6
  },
  {
    "word": "dyslexia",
    "time": 4
  },
  {
    "word": "amnesia",
    "time": 4
  },
  {
    "word": "hypothermia",
    "time": 5
  },
  {
    "word": "diarrhoea",
    "time": 5
  },
  {
    "word": "intelligence",
    "time": 5
  },
  {
    "word": "humour",
    "time": 5
  },
  {
    "word": "pronunciation",
    "time": 6
  },
  {
    "word": "pronounce",
    "time": 4
  },
  {
    "word": "weird",
    "time": 3
  },
  {
    "word": "perplex",
    "time": 4
  },
  {
    "word": "remember",
    "time": 4
  },
  {
    "word": "psychology",
    "time": 5
  },
  {
    "word": "trauma",
    "time": 3
  },
  {
    "word": "trauma",
    "time": 3
  },
  {
    "word": "traumatized",
    "time": 4
  },
  {
    "word": "generosity",
    "time": 4
  },
  {
    "word": "actuation",
    "time": 4
  },
  {
    "word": "thermometer",
    "time": 4
  },
  {
    "word": "rickshaw",
    "time": 4
  },
  {
    "word": "car",
    "time": 2
  },
  {
    "word": "motorcycle",
    "time": 4
  },
  {
    "word": "truck",
    "time": 3
  },
  {
    "word": "bag",
    "time": 2
  },
  {
    "word": "luggage",
    "time": 4
  },
  {
    "word": "challenge",
    "time": 3
  },
  {
    "word": "carpenter",
    "time": 4
  },
  {
    "word": "ambiguous",
    "time": 5
  },
  {
    "word": "cardiologist",
    "time": 4
  },
  {
    "word": "neurology",
    "time": 3
  },
  {
    "word": "anthropology",
    "time": 4
  },
  {
    "word": "sexist",
    "time": 3
  },
  {
    "word": "hormone",
    "time": 3
  },
  {
    "word": "phobia",
    "time": 3
  },
  {
    "word": "symptoms",
    "time": 4
  },
  {
    "word": "patient",
    "time": 3
  },
  {
    "word": "treatment",
    "time": 4
  },
  {
    "word": "excessive",
    "time": 4
  },
  {
    "word": "swimming",
    "time": 3
  },
  {
    "word": "cycling",
    "time": 3
  },
  {
    "word": "oxygen",
    "time": 3
  },
  {
    "word": "water",
    "time": 3
  },
  {
    "word": "fire",
    "time": 2
  },
  {
    "word": "ice",
    "time": 2
  },
  {
    "word": "carbon",
    "time": 3
  },
  {
    "word": "chlorine",
    "time": 4
  },
  {
    "word": "dehydrated",
    "time": 4
  },
  {
    "word": "unhealthy",
    "time": 4
  },
  {
    "word": "charger",
    "time": 3
  },
  {
    "word": "battery",
    "time": 3
  },
  {
    "word": "sketch",
    "time": 3
  },
  {
    "word": "paint",
    "time": 2
  },
  {
    "word": "maternal",
    "time": 3
  },
  {
    "word": "paternal",
    "time": 3
  },
  {
    "word": "grandmother",
    "time": 4
  },
  {
    "word": "grandfather",
    "time": 4
  },
  {
    "word": "cousin",
    "time": 3
  },
  {
    "word": "nephew",
    "time": 3
  },
  {
    "word": "niece",
    "time": 3
  },
  {
    "word": "derive",
    "time": 3
  },
  {
    "word": "discussion",
    "time": 4
  },
  {
    "word": "development",
    "time": 4
  },
  {
    "word": "testing",
    "time": 3
  },
  {
    "word": "automation",
    "time": 4
  },
  {
    "word": "artifical",
    "time": 4
  },
  {
    "word": "lamp",
    "time": 3
  },
  {
    "word": "television",
    "time": 3
  }
]
export default words;