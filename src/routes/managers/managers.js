/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#2-add-managers
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "IngeMeysel",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Tribolino",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "elPresidente583",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Lvkas",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Nizco",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Tousca",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Eiloj",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Tommyh09",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Horatius",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "TT12",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "PolarsXpress",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "LooneyTunes7711",
    "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": "/managers/everyone.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
]
