/*   STEP 1   */
export const leagueID = "640240064185606144"; // your league ID
export const leagueName = "RL West V Dynasty"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper

/*   STEP 2   */
export const homepageText = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#2-add-managers
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Schwaerzelmann",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "N/A",
    "bio": "N/A",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": null, // when did the manager start playing fantasy football
    "favoriteTeam": null, // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": null, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // 'Rookies' or 'Vets'
    "philosophy": "N/A",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "ksion77",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Troisdorf (NRW)",
    "bio": "Ich bin der Peter und bin 44 Jahre alt. Ich bin verheiratet aber wir haben keine Kinder. Und leben recht spießig in einem suburb Reihenhaus. Ich ha gern langweiligen Job im öffentlichen Dienst in der Verwaltung. Hobbys sind lesen, football, fantasy, Rad fahren und der FC Köln 😂. ",
    "photo": "/managers/ksion77.jpg", // done
    "fantasyStart": 2020, // when did the manager start playing fantasy football
    "favoriteTeam": "min", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "HansPeterOrding", // Can be anything (usually your rival's name)
      link: 3, // manager array number within this array, or null to link back to all managers page
      image: "/managers/hporosa.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 2350, // Randy Moss // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Hab vertrauen in Deine Evaluation",
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Sic58",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Essen",
    "bio": "Zu mir gehören meine Freundin und ihr Sohn. Ich bin Steuerfachangestellter, aber arbeite in ner Buchhaltung.",
    "photo": "/managers/sic58.jpeg", // done
    "fantasyStart": 2017, // when did the manager start playing fantasy football
    "favoriteTeam": "tb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "eve#", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": null, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Ich will gewinnen, aber bin nicht traurig wenn es nicht klappt.",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "HansPeterOrding",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Eifel",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/5397\" target=\"_blank\">HansPeterOrding</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/splatter2507\" target=\"_blank\">@splatter2507</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Frau und Kind (6)<br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Softwarearchitekt<br><br><b>Das mache ich in meiner Freizeit:</b><br>Viel zu viel auf Fantasy Nebenschauplätzen, Familie, Freunde, wandern, Badminton, lesen, Rätseln, und jede Menge mehr.<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>2 x dynasty (davon 1 mit idp), 2 x redraft (bis jetzt), zig bestball<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Deutscher (alter) Hip-Hop, (Hard-)Rock, Metal, Jazz, und einiges mehr.<br>Die üblichen Fantasy Podcasts, Lage der Nation, das Interview, sternengeschichten, a podcast of unnecessary detail, numberphile podcast, das gewünschteste Wunschkind<br>Pulp Fiction, fightclub, Big Lebowski<br>True detective, tatortreiniger, Sherlock, IT-Crowd<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Gerne aufwändig, aber leider fehlt mir die Zeit.<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Im Winter Rotwein, im Sommer Bier, immer Whiskey<br><br><b>Funfact über mich:</b><br>Ich habe mal in der zweiten Liga Tischfussball gespielt",
    "photo": "/managers/hporosa.png", // done
    "fantasyStart": 2020, // when did the manager start playing fantasy football
    "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "everyone", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 96, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Woran hat et jelejen?",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "HBau01",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "N/A",
    "bio": "N/A",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": null, // when did the manager start playing fantasy football
    "favoriteTeam": null, // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": null, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // 'Rookies' or 'Vets'
    "philosophy": "N/A",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Chiefsten",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "N/A",
    "bio": "N/A",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": null, // when did the manager start playing fantasy football
    "favoriteTeam": null, // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": null, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // 'Rookies' or 'Vets'
    "philosophy": "N/A",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "robnohood",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "N/A",
    "bio": "N/A",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": null, // when did the manager start playing fantasy football
    "favoriteTeam": null, // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": null, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // 'Rookies' or 'Vets'
    "philosophy": "N/A",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "TayksomeMore",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Mainz",
    "bio": "Guuude, ich bin ein notorisch talentbefreiter Redzone-Junky mit Hang zu lauter Musik, kühlen Getränken, flachen Wortwitzen, epischen Grundlinienduellen, verklärter Fußballromantik und einem Hauch Querulantentum.",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": 2019, // when did the manager start playing fantasy football
    "favoriteTeam": "no", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 4381, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Born to lose, live to win.",
    "tradingScale": 3, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "shootster",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "N/A",
    "bio": "N/A",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": null, // when did the manager start playing fantasy football
    "favoriteTeam": null, // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": null, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": null, // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": null, // 'Rookies' or 'Vets'
    "philosophy": "N/A",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "lambeauleague0902",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Regensburg",
    "bio": "Passionierter Serienjunkie",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": 2016, // when did the manager start playing fantasy football
    "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 96, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Teambuilding durch den Draft.",
    "tradingScale": 3, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "dayspring612",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Bad Camberg",
    "bio": "Fun fact: ich bin seit 95 Pats Fan habe aber seit 2010 meine Begeisterung ruhen lassen da ich mir sagte entweder muss Bill gehen oder Tom bevor ich wieder mitfiebere. War mir zu langweilig.",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": 2020, // when did the manager start playing fantasy football
    "favoriteTeam": "ne", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Sic58", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": null, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "TE", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "No risk it no biscuit",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "ChrisBur",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Osnabrück",
    "bio": "N/A",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": 2017, // when did the manager start playing fantasy football
    "favoriteTeam": "car", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": null, // John Lynch // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Neues Jahr, neues Glück \n",
    "tradingScale": 4, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
