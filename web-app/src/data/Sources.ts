
import Source from "@/types/source";

// Define sources with the correct type, and include an `id` for each source
const sources: Source[] = [
  {
    id: 1, // Unique identifier
    name: "AtopGames",
    lastUpdated: "12/07/2024",
    numOfGames: 547,
    description:
      "Unaltered pre-installed games sourced from multiple trustworthy names in the community.",
    link: "https://hydralinks.cloud/sources/atop-games.json",
    likes: 350,
    dislike: 25,
    comments: 120,
    games: ["Game 1", "Game 2", "Game 3", "Game 3", "Game 3", "Game 3", "Game 3", "Game 3"],
    tags: ["Official", "Popular", "Updated"],
  },
  {
    id: 2, // Unique identifier
    name: "SteamRip [SOFTWARE ONLY]",
    lastUpdated: "19/09/2024",
    numOfGames: 7,
    description:
      "Smaller version of SteamRip that only includes software such as Lossless Scaling, Wallpaper Engine and more.",
    link: "https://hydralinks.cloud/sources/steamrip-software.json",
    likes: 180,
    dislike: 10,
    comments: 55,
    games: ["Software 1", "Software 2"],
    tags: ["Official", "Software", "Lightweight"],
  },
  {
    id: 3, // Unique identifier
    name: "SteamRip [DIRECT DOWNLOAD / NO TORRENT]",
    lastUpdated: "13/11/2024",
    numOfGames: 773,
    description:
      "Pre-installed games with original content, uncompressed, and sourced reliably.",
    link: "https://hydralinks.cloud/sources/steamrip.json",
    likes: 2000,
    dislike: 150,
    comments: 500,
    games: ["Game A", "Game B", "Game C", "Game D"],
    tags: ["Official", "Direct Download", "No Torrent"],
  },
  {
    id: 4, // Unique identifier
    name: "DODI",
    lastUpdated: "03/11/2024",
    numOfGames: 2558,
    description:
      "Renowned brand in pirated video games, this repacker is among the finest in the field.",
    link: "https://hydralinks.cloud/sources/dodi.json",
    likes: 4500,
    dislike: 300,
    comments: 1200,
    games: ["Game X", "Game Y", "Game Z"],
    tags: ["Official", "Repacked", "Popular", "Reliable"],
  },
  {
    id: 5, // Unique identifier
    name: "Empress",
    lastUpdated: "01/07/2023",
    numOfGames: 40,
    description: "For games cracked by EMPRESS.",
    link: "https://hydralinks.cloud/sources/empress.json",
    likes: 1500,
    dislike: 50,
    comments: 800,
    games: ["Cracked Game 1", "Cracked Game 2"],
    tags: ["Official", "Cracked", "Elite"],
  },
  {
    id: 6, // Unique identifier
    name: "FitGirl",
    lastUpdated: "13/11/2024",
    numOfGames: 5438,
    description:
      "Home archivist to web's top game repacker: the ultimate source for trustworthy games.",
    link: "https://hydralinks.cloud/sources/fitgirl.json",
    likes: 10000,
    dislike: 500,
    comments: 3000,
    games: ["FitGirl Game 1", "FitGirl Game 2"],
    tags: ["Official", "Repacked", "Popular", "Reliable"],
  },
  {
    id: 7, // Unique identifier
    name: "Free GOG",
    lastUpdated: "11/11/2024",
    numOfGames: 5546,
    description:
      "Delivering DRM-free games that have undergone thorough vetting before their release.",
    link: "https://hydralinks.cloud/sources/gog.json",
    likes: 6000,
    dislike: 200,
    comments: 1500,
    games: ["DRM-Free Game 1", "DRM-Free Game 2"],
    tags: ["Official", "DRM-Free", "Vetted", "Indie"],
  },
  {
    id: 8, // Unique identifier
    name: "KaOsKrew",
    lastUpdated: "06/11/2024",
    numOfGames: 2761,
    description:
      "Veteran rippers who, over the past two decades, have consistently created rips and repacks.",
    link: "https://hydralinks.cloud/sources/kaoskrew.json",
    likes: 3700,
    dislike: 220,
    comments: 950,
    games: ["KaOsKrew Game 1", "KaOsKrew Game 2"],
    tags: ["Official", "Repacked", "Veteran", "Popular"],
  },
  {
    id: 9, // Unique identifier
    name: "Online-Fix",
    lastUpdated: "12/11/2024",
    numOfGames: 1483,
    description:
      "Grants online solutions to play multiplayer in specific games with others.",
    link: "https://hydralinks.cloud/sources/onlinefix.json",
    likes: 2500,
    dislike: 100,
    comments: 650,
    games: ["Online-Fix Game 1", "Online-Fix Game 2"],
    tags: ["Official", "Online", "Multiplayer"],
  },
  {
    id: 10, // Unique identifier
    name: "Tiny-Repacks",
    lastUpdated: "06/01/2024",
    numOfGames: 75,
    description: "fpkfpoekfpkfperpok eofpkerpkfpoerkkpfkerokfpoeropr",
    link: "https://hydralinks.cloud/sources/tinyrepacks.json",
    likes: 100,
    dislike: 15,
    comments: 20,
    games: ["Tiny Game 1", "Tiny Game 2"],
    tags: ["Official", "Compact", "Indie"],
  },
  {
    id: 11, // Unique identifier
    name: "ByXatab",
    lastUpdated: "12/11/2024",
    numOfGames: 6487,
    description:
      "Esteemed within the realm of pirated video games, this site stands out as a prominent figure.",
    link: "https://hydralinks.cloud/sources/xatab.json",
    likes: 8000,
    dislike: 400,
    comments: 2000,
    games: ["ByXatab Game 1", "ByXatab Game 2"],
    tags: ["Official", "Repacked", "Popular", "Veteran"],
  },
];

export default sources;