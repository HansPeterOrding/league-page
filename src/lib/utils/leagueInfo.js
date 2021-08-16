/*   STEP 1   */
export const leagueID = "695913371186307072"; // your league ID
export const leagueName = "12 Men in the Cuddle"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper

/*   STEP 2   */
export const homepageText = `
  <p>Ihr wisst Bescheid!</p>
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
    "name": "Templer",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Rheinbreitbach, RLP, Germany, Europe, Earth\n", // (optional)
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/9856\" target=\"_blank\">Templer</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/ChristianLohr9\" target=\"_blank\">@ChristianLohr9</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Antonio Gibson<br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Controlling und Data Analytics<br><br><b>Das mache ich in meiner Freizeit:</b><br>Upside und Flag Football<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Analytics Dynasty & Redraft, Keeper, Dynasty, Redraft, Salary Cap, Vampire, Bestball, DFS.<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Steine<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Thai<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>folgen meistens drölf andere.<br><br><b>Funfact über mich:<b><br>Hätte ich mein Abi nicht verkackt, hätte ich Chemie studiert.",
    "photo": "/managers/templer.png", // square ratio recommended (no larger than 500x500)
    "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ari", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now' or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Mr_Automatic", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/mrautomatic.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 7956, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Ein schlechter Rostermove ist besser als gar kein Rostermove.",
    "tradingScale": 9, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone' and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "wainsmiley",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Wuppertal",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/0548\" target=\"_blank\">Wainsmiley</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/wainsmiley\" target=\"_blank\">@wainsmiley</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Family<br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Wissenschaftsgedöns<br><br><b>Das mache ich in meiner Freizeit:</b><br>Entschleunigen<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Ein paar sind es schon... <br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Musik mit Gitarre (Foo Fighters, Furt u.a.)<br>Podcasts mit Tiefgang (z. B. LdN, Wdr5 Politikum)<br>Filme in meinem Kinozimmer (wirklich querbeet von Hitchcock bis MCU, The Big Lebowski bis Raid usw. usw.)<br>Serien mit möglichst wenig Logiklöchern (aktuell z. B. Dark, The Boys, The Expanse) <br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Ich koche tatsächlich gerne, wenn ich Zeit habe und probiere mich an allem aus... Am liebsten esse ich Abwechslungsreich (Antipasti, Sushi, Pasta...) <br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Bleibt es selten bei einem...<br><br><b>Funfact über mich:<b><br>Ich gehe zum Lachen in den Keller... Weil da mein Hobbyraum ist! ",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": 2018, // when did the manager start playing fantasy football
    "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 333, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Qualität setzt sich am Ende immer durch!",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Bufsol83",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Bei meiner Frau und meinen Kindern,egal wo wir sind (Homebase: Braunschweig)",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/5203\" target=\"_blank\">Bufsol83</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/bufsol\" target=\"_blank\">@bufsol</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Meine Frau und meine beiden Kinder (7 J und 3 J) sowie meine Beagledame Emmi (12 J)<br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Meinen Kollegen erklären, warum sie zwar super Ideen haben, dass aber aus Gründen nicht geht…und ihnen sagen,wie’s ginge (was sie in der Regel blöd finden weil zu teuer/zu aufwendig/whatever) (= Syndikusrechtsanwalt)<br><br><b>Das mache ich in meiner Freizeit:</b><br>Laufen, Lesen und Fantasy Football … ansonsten etwas mit den Kindern machen <br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Z. Zt. noch 47 andere Ligen,darunter einige BestBall, einige Redraft und besondere Formate (Devy, 32er Salary Cap, College Pipeline, Vampire, Guillotine, nur IDP…)<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Musik/ Podcasts: Nas, Absolute Beginner, Such A Surge; „Alles gesagt“, Zeit Verbrechen, Lage der Nation, Sportradio 360, Rasenfunk, Around the NFL, eigentlich alles vom „Ringer Network“ von Bill Simmons, The Athletic Football Show, Mina Kimes Show, Bill Barnwell Show, Down Set Talk, Upside, Got Nexxt, Lauschangriff, ... und viele mehr, insg so 60-80 Podcasts in meiner Rotation <br>Top 3 Filme/ Serien: Love & Basketball, Cool Runnings, Garden State; Friends, Prince of Bel Air, Boston Legal (und “Bosch” sowie “HTGAWM” auf den Plätzen...)<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>…am liebsten für und mit Freunden … Lieblingsgerichte sind Spinat mit Spiegelei und Kartoffeln sowie Nudeln mit Salsiccia und weißen Bohnen <br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Dann ist das wenn es kein Feierabend-Wolters ist ein Whisky oder ein italienischer Rotwein<br><br><b>Funfact über mich:<b><br>Ich kann keinen Purzelbaum…",
    "photo": "/managers/bufsol.jpeg", // done
    "fantasyStart": 2019, // when did the manager start playing fantasy football
    "favoriteTeam": "chi", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "everyone", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 5892, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Ein schlechter Move ist nur der Move, den man nicht gemacht hat - warum auch immer.\n",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "IngeMeysel",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Kaufungen",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/6398\" target=\"_blank\">IngeMeysel</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/derdomenic\" target=\"_blank\">@derdomenic</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Die beste Frau auf der Welt. <br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Wahrscheinlich habe ich noch nie wirklich gearbeitet🙈😂<br><br><b>Das mache ich in meiner Freizeit:</b><br>Vieles. Unter anderem: Zeit mit Freunden verbringen, Gesellschaftsspiele, Sport jeglicher Art, usw. <br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Zu viele. <br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Kann Allem etwas abgewinnen. <br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Pizza<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Alles was flüssig ist. <br><br><b>Funfact über mich:<b><br>Das sollen andere beurteilen. ",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": 2017, // when did the manager start playing fantasy football
    "favoriteTeam": "atl", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 6823, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "TE", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Hau weg!",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "SG7",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Lutter am Barenberge (Landkreis Goslar)\n",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/7631\" target=\"_blank\">SG7</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/SG7_49er\" target=\"_blank\">@SG7_49er</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Meine Freundin Anka und Tochter Leni (1)<br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Quality Engineer<br><br><b>Das mache ich in meiner Freizeit:</b><br>Fußball, laufen, rätseln, Motorrad fahren, Fahrrad fahren, Freunde treffen<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>3x Redraft, 5x Dynasty, 1x DFS, 2x Keeper, 8x (+10) BestBall<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Broilers / Beatsteaks / Rise Against / Deutscher HipHop - Upside / DST/ Niners Huddle / Zeit Verbrechen / Mordlust / Lage der Nation - 4 Blocks, Prison Break / The Blacklist<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Indisch und Italienisch<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Wein, Gin Tonic<br><br><b>Funfact über mich:<b><br>Ich packe meinen Koffer und nehme mit: Mein Kopfkissen!",
    "photo": "/managers/sg7.jpeg", // done
    "fantasyStart": 2020, // when did the manager start playing fantasy football
    "favoriteTeam": "sf", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 4217, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Ich bin immer im „Win now“ Modus!",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Talca",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Regensburg",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/1747\" target=\"_blank\">Talca</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/Talca20\" target=\"_blank\">@Talca20</a><br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Studieren<br><br><b>Das mache ich in meiner Freizeit:</b><br>Sport, Familie, Freunde<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Zu viele<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Kann mich für fast alles begeistern<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Am liebsten 3x am Tag Pizza<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Bevorzugt Bier. Donst gerne Whisky oder Gin<br><br><b>Funfact über mich:<b><br>Ich habe noch nie Live Football gesehen.",
    "photo": "/managers/question.jpg", // done
    "fantasyStart": 2017, // when did the manager start playing fantasy football
    "favoriteTeam": "hou", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "everyone", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 4046, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Cam the MF'ing Ram!",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Mr_Automatic",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Unkel",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/5059\" target=\"_blank\">Mr. Automatic</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/Mr_automaticcc\" target=\"_blank\">@Mr_automaticcc</a><br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Unternehmensberater, Thekensportler und Flag Footballer<br><br><b>Das mache ich in meiner Freizeit:</b><br>Hobby-Möchtegern-Biersommelier, Flag Football & Fußball<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Illegal Formation (Keeper-Home League mit Auf- und Abstieg), Salary Cap Dynasty, Pipeline Dynasty, Upside Bowl, diverse Best Ball & eine behinderte Keeper-Home League :D<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Hardcore (hoffentlich nächstes Jahr mal wieder ein Festival), unter der Woche gerne mal Serien-/Filmabend mit der Freundin, Männertouren<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Hähnchen-/Gemüsecurry, Wraps, Summerrolls, Fisch/Meeresfrüchte, Rinderfilet medium rare<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Gin Tonic, wenn Hochpro, ansonsten gerne Weißwein (vorzugsweise Grüner Veltliner) oder ein Starkbier",
    "photo": "/managers/mrautomatic.jpg", // done
    "fantasyStart": 2016, // when did the manager start playing fantasy football
    "favoriteTeam": "ne", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "nobody", // Can be anything (usually your rival's name)
      link: null, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1479, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Mit Kaltschnäuzigkeit zur Championship!",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Lutz1402",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Datteln",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/4138\" target=\"_blank\">Lutz</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/lutz1904\" target=\"_blank\">@lutz1904</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Meine Familie<br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Leiter Rechnungswesen und Controlling<br><br><b>Das mache ich in meiner Freizeit:</b><br>Fantasy Football<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Ja, noch 19<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Upside Fantasy<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Indisch<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Bier<br><br><b>Funfact über mich:<b><br>Ich bin eine Valentina",
    "photo": "/managers/lutz.jpeg", // done
    "fantasyStart": 2015, // when did the manager start playing fantasy football
    "favoriteTeam": "cin", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Rebuild", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "IngeMeysel", // Can be anything (usually your rival's name)
      link: 3, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 6770, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Eine Liga geht noch\n",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "LDRams",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Landau in der Pfalz",
    "bio": "<b>Discord:</b> <a href=\"https://discordapp.com/users/9921\" target=\"_blank\">LDRams</a><br><br><b>Twitter:</b><a href=\"https://twitter.com/LD_Rams\" target=\"_blank\">@LD_Rams</a><br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Unterrichten<br><br><b>Das mache ich in meiner Freizeit:</b><br>Tiefe Löcher und Gräben auf Spielplätzen ausheben.<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Die legendäre Down, Set, Dynasty und ein paar andere.<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>meine Ruhe, vor allem nachts.<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Obst und Gemüse<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Vanilla Coke eiskalt<br><br><b>Funfact über mich:<b><br>Bis ich 14 war, hatte ich nur Joggingshosen an.",
    "photo": "/managers/ldrams.png", // done
    "fantasyStart": 2017, // when did the manager start playing fantasy football
    "favoriteTeam": "lar", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Hans Peter Ording <3", // Can be anything (usually your rival's name)
      link: 9, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 947, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Darauf habe ich keine Antwort.",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "HansPeterOrding",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Eifel",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/5397\" target=\"_blank\">HansPeterOrding</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/splatter2507\" target=\"_blank\">@splatter2507</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Frau und Kind (6)<br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Softwarearchitekt<br><br><b>Das mache ich in meiner Freizeit:</b><br>Viel zu viel auf Fantasy Nebenschauplätzen, Familie, Freunde, wandern, Badminton, lesen, Rätseln, und jede Menge mehr.<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>2 x dynasty (davon 1 mit idp), 2 x redraft (bis jetzt), zig bestball<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Deutscher (alter) Hip-Hop, (Hard-)Rock, Metal, Jazz, und einiges mehr.<br>Die üblichen Fantasy Podcasts, Lage der Nation, das Interview, sternengeschichten, a podcast of unnecessary detail, numberphile podcast, das gewünschteste Wunschkind<br>Pulp Fiction, fightclub, Big Lebowski<br>True detective, tatortreiniger, Sherlock, IT-Crowd<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Gerne aufwändig, aber leider fehlt mir die Zeit.<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Im Winter Rotwein, im Sommer Bier, immer Whiskey<br><br><b>Funfact über mich:<b><br>Ich habe mal in der zweiten Liga Tischfussball gespielt",
    "photo": "/managers/hporosa.png", // done
    "fantasyStart": 2020, // when did the manager start playing fantasy football
    "favoriteTeam": "gb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "LDRams", // Can be anything (usually your rival's name)
      link: 8, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 96, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Man fragt sich immer: Woran hat et jelejen?",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "Effzeh10",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Niederkassel",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/1129\" target=\"_blank\">Effzeh10</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Effzeh<br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Anti-Financial Crime<br><br><b>Das mache ich in meiner Freizeit:</b><br>Sport, Effzeh, Frau, Hund<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Illegal Formation, Salary Cap League<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Mucke aller Art, Fußball<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Pizza<b>Wenn ich mir einen Drink gönne …:</b><br>Gin Tonic<br><br><b>Funfact über mich:<b><br>Ich verkacke chronisch in Start-Up Drafts",
    "photo": "/managers/effzeh10.png", // done
    "fantasyStart": 2019, // when did the manager start playing fantasy football
    "favoriteTeam": "tb", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "Templer", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 2133, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
    "philosophy": "Lieber ein schlechter Trade als gar kein Trade",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "name": "mcGoldyyy",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Remscheid",
    "bio": "<br><b>Discord:</b> <a href=\"https://discordapp.com/users/1133\" target=\"_blank\">mcGoldyyy</a><br><br><b>Twitter:</b> <a href=\"https://twitter.com/mcGoldyyy\" target=\"_blank\">@mcGoldyyy</a><br><br><b>Wer zu mir gehört wie mein Name an der Tür?</b><br>Meine Freundin + unsere 2 Norwegischen Waldkatzen<br><br><b>Das mache ich beruflich, wenn ich nicht gerade mit FF beschäftigt bin:</b><br>Selbstständig im Bereich Zerspanungswerkzeuge ( www.Goldmaier-GmbH.de )<br><br><b>Das mache ich in meiner Freizeit:</b><br>Fußball und Counter-Strike spielen/gucken, weitere Sportarten ausüben und gucken, Essen gehen, Kino, Shisha mit Freunden knallen, Städte-Trips und natürlich Fantasy Football<br><br><b>Außerdem spiele ich noch andere Ligen:</b><br>Viele weitere: u.a. Gründungsdynasty von upside / MBSL / EFFC3 / Upsidebowl und Upside-Bestball-Dynasty / DST Fantasy Liga<br><br><b>Ich mag (Musik, Podcasts, Filme, Serien, ...):</b><br>Musik: Travis Scott/Migos/Shindy/J.Cole/Kendrick Lamar<br><br>Podcasts: Upside/TheFantasyFootballers/TheAthleticFantasyPodcadt/DynastyNerds/DLFDynastyPodcast/HLTVconfirmed/OvertimeOnInferno/EineStundeHistory<br><br>Filme: Sin City/The Dark Knight/Matrix/Tenet<br><br>Serien: Game of Thrones/Last Chance U/Himym/Breaking Bad/Simpsons<br><br><b>Ich koche … / ich esse am liebsten …:</b><br>Ich koche am liebsten: Nudeln an Speck und Ei<br>Ich esse am liebsten: Roastbeef/Steak/Doublesteakhouseburger (BK)/Spare Ribs/Mac‘n‘Cheese<br><br><b>Wenn ich mir einen Drink gönne …:</b><br>Gin Mule<br><br><b>Funfact über mich:<b><br>Ich hasse Streit und möchte immer, dass es allen um mich herum gut geht, selbst wenn ich es nicht beeinflussen kann.",
    "photo": "/managers/mcgoldyyy.jpeg", // done
    "fantasyStart": 2018, // when did the manager start playing fantasy football
    "favoriteTeam": "sea", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // 'Win Now' or 'Rebuild'
    "rival": {
      name: "wainsmiley", // Can be anything (usually your rival's name)
      link: 1, // manager array number within this array, or null to link back to all managers page
      image: "/managers/question.jpg", // either a specific manager photo or 'everyone' or 'question'
    },
    "favoritePlayer": 1234, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
    "philosophy": "Fantasy Football is life.",
    "tradingScale": 5, // 1 - 10
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
