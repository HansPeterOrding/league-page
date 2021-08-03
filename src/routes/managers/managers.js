// 3 managers as an example (remove the // before each line to make it live code)
export const managers = [
  {
    "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Templer",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Rheinbreitbach",
    "bio": "Lorem ipsum...",
    "photo": "/managers/templer.jpeg", // done
    "fantasyStart": 2017, // when did the manager start playing fantasy football
    "favoriteTeam": "ari", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Mr_Automatic", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 223, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Was du nicht willst, das man dir tut, das füge einem andern zu.",
    "tradingScale": 8, // 1 - 10
    "prefferedContact": "DM", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "wainsmiley",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Ronsdorf",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Bufsol83",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "IngeMeysel",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "SG7",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "sf", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Talca",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Mr_Automatic",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Lutz1402",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "LDRams",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "HansPeterOrding",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Eifel",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2020, // when did the manager start playing fantasy football
    "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "LDRams", // Can be anything (usually your rival's name)
      link: 8, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 96, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Man fragt sich immer: Woran hat et jelejen?",
    "tradingScale": 7, // 1 - 10
    "prefferedContact": "DM", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Effzeh10",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "tb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "mcGoldyyy",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // done
    "fantasyStart": 2014, // when did the manager start playing fantasy football
    "favoriteTeam": "sea", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
]
