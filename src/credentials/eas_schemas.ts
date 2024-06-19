import { type EasSchemaVariables } from "./types";

export const EAS_URL = "https://easscan.org";

export const EAS_LOGO_URL = `${EAS_URL}/logo2.png`;

export const ENABLED_P2P_ATTESTATION_IDS = [
  "6",
  "20",
  "12",
  "16",
  "26",
  "28",
  "30",
  "31",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "56",
  "60",
  "62",
  "64",
];

export const EAS_SCHEMAS = [
  {
    id: "1",
    isEnabled: true,
    attester: "0x357458739F90461b99789350868CD7CF330Dd7EE",
    chain: "base",
    schemaEncoding: "",
    schemaId:
      "0x1801901fabd0e6189356b4fb52bb0ab855276d84f7ec140839fbd1f6801ca065",
    name: "Coinbase Verified Country",
    targetField: "verifiedCountry",
    allowRecursion: false,
    verb: "Verifies",
    description: "People who verified their country with Coinbase",
    acquisitionText: "Visit Coinbase to receive verification",
    acquisitionUrl: "https://www.coinbase.com/onchain-verify",
  },
  {
    id: "2",
    isEnabled: true,
    attester: "0x357458739F90461b99789350868CD7CF330Dd7EE",
    chain: "base",
    schemaEncoding: "",
    schemaId:
      "0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9",
    name: "Coinbase Verified Account",
    targetField: "verifiedAccount",
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: "People who verified their account with Coinbase",
    acquisitionText: "Visit Coinbase to receive verification",
    acquisitionUrl: "https://www.coinbase.com/onchain-verify",
  },
  {
    id: "3",
    isEnabled: true,
    attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
    chain: "base",
    schemaEncoding: "",
    schemaId:
      "0x0f5b217904f3c65ad40b7af3db62716daddf53bb5db04b1a3ddb730fda0a474b",
    name: "Receipts All-Time Running Distance",
    targetField: "distance",
    allowRecursion: false,
    displayUnits: "mi",
    conversionMultiplier: 0.000621371,
    verb: "Verifies",
    description:
      "People who verified their all-time running distance with Receipts",
    acquisitionText: "Visit Receipts to receive verification",
    acquisitionUrl: "https://www.receipts.xyz/",
  },
  {
    id: "4",
    isEnabled: false,
    attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
    chain: "base",
    schemaEncoding: "",
    schemaId:
      "0x0f5b217904f3c65ad40b7af3db62716daddf53bb5db04b1a3ddb730fda0a474b",
    name: "Receipts All-Time Running Moving Time",
    targetField: "moving_time",
    allowRecursion: false,
    displayUnits: "hours",
    conversionMultiplier: 0.000277778,
    verb: "Verifies",
    description:
      "People who verified their all-time running moving time with Receipts",
    acquisitionText: "Visit Receipts to receive verification",
    acquisitionUrl: "https://www.receipts.xyz/",
  },
  {
    id: "5",
    isEnabled: false,
    attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
    chain: "base",
    schemaEncoding: "",
    schemaId:
      "0x0f5b217904f3c65ad40b7af3db62716daddf53bb5db04b1a3ddb730fda0a474b",
    name: "Receipts All-Time Running Total Activities",
    targetField: "activities",
    allowRecursion: false,
    verb: "Verifies",
    description:
      "People who verified their all-time running total activities with Receipts",
    acquisitionText: "Visit Receipts to receive verification",
    acquisitionUrl: "https://www.receipts.xyz/",
  },
  {
    id: "8",
    isEnabled: true,
    attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
    chain: "base",
    schemaEncoding: "",
    schemaId:
      "0x9b4eb21617daf800381983fe3155419801755b87f2957480987008a739362644",
    name: "Receipts All-Time Cycling Distance",
    targetField: "distance",
    allowRecursion: false,
    displayUnits: "mi",
    conversionMultiplier: 0.000621371,
    verb: "Verifies",
    description:
      "People who verified their all-time cycling distance with Receipts",
    acquisitionText: "Visit Receipts to receive verification",
    acquisitionUrl: "https://www.receipts.xyz/",
  },
  {
    id: "9",
    isEnabled: true,
    attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
    chain: "base",
    schemaEncoding: "",
    schemaId:
      "0x1fe27c8a9d15787187d332f2a923c65d521ea77da41948d48c1cbc4f8c47756d",
    name: "Receipts All-Time Swimming Distance",
    targetField: "distance",
    allowRecursion: false,
    displayUnits: "mi",
    conversionMultiplier: 0.000621371,
    verb: "Verifies",
    description:
      "People who verified their all-time swimming distance with Receipts",
    acquisitionText: "Visit Receipts to receive verification",
    acquisitionUrl: "https://www.receipts.xyz/",
  },
  {
    id: "10",
    isEnabled: true,
    attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
    schemaEncoding: "",
    schemaId:
      "0x8e7121f63075f94e4fe0e3ee654e532febdb55d018096bc09a9032150f5bb483",
    name: "Receipts Highest Chess Rating",
    targetField: "rating",
    allowRecursion: false,
    chain: "base",
    verb: "Verifies",
    description:
      "People who verified their all-time highest chess rating with Receipts",
    acquisitionText: "Visit Receipts to receive verification",
    acquisitionUrl: "https://www.receipts.xyz/",
  },
  {
    id: "11",
    isEnabled: true,
    attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
    chain: "base",
    schemaEncoding: "",
    schemaId:
      "0x03e6a139835f6c4e8863df39079e249251db04d5114be2f6b351976ca0c2a275",
    name: "Receipts Latest Chess Rating",
    targetField: "rating",
    allowRecursion: false,
    verb: "Verifies",
    description: "People who verified their latest chess rating with Receipts",
    acquisitionText: "Visit Receipts to receive verification",
    acquisitionUrl: "https://www.receipts.xyz/",
  },
  {
    id: "6",
    isEnabled: true,
    attester: "0xD1ba067be2FcbB524865c0A98d3FCC0E710738d5",
    chain: "base",
    schemaEncoding: "bool isTall",
    schemaId:
      "0x2a4938b9ab8e66a2c516dadcfb496c2d6c7a09135c6a732b4ad51f891ae017da",
    name: "TallDAO Member",
    targetField: "isTall",
    allowRecursion: true,
    isBoolean: true,
    verb: "Verifies",
    description: `DAO of Tall people. Men must be at least 6'3" / 190cm and women must be at least 5'10" / 178cm`,
    acquisitionText:
      "Any member of this group can immediately verify a new member",
  },
  {
    id: "7",
    isEnabled: true,
    attester: "0x843829986e895facd330486a61Ebee9E1f1adB1a",
    chain: "optimism",
    schemaEncoding: "",
    schemaId:
      "0x6ab5d34260fca0cfcf0e76e96d439cace6aa7c3c019d7c4580ed52c6845e9c89",
    name: "Gitcoin Passport Score",
    targetField: "score",
    allowRecursion: false,
    conversionMultiplierBigInt: 100000000000000000n,
    verb: "Verifies",
    description: "People who verified their Passport Score with Gitcoin",
    acquisitionText: "Visit Gitcoin Passport to receive verification",
    acquisitionUrl: "https://passport.gitcoin.co/",
  },
  {
    id: "12",
    isEnabled: true,
    attester: "0xD1ba067be2FcbB524865c0A98d3FCC0E710738d5",
    chain: "ethereum",
    name: "Farcaster qDAU",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "isEndorsement",
    filter: { name: "qDAU", domain: "Farcaster" },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    verb: "Endorses",
    description: `People who received a Farcaster qDAU (quality daily active user) endorsement from another member, with a traceable lineage back to the group creators`,
    acquisitionText:
      "Any member of this group can immediately endorse a new member",
  },
  {
    id: "13",
    isEnabled: false,
    attester: "0xD1ba067be2FcbB524865c0A98d3FCC0E710738d5",
    chain: "ethereum",
    name: "TEST Expert Product",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "isEndorsement",
    filter: { name: "Expert", domain: "Product" },
    allowRecursion: true,
    isBoolean: true,
  },
  {
    id: "14",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Attended: ETHDenver 2024",
    schemaEncoding:
      "bool hasAttended, string name, string role, string context",
    schemaId:
      "0xd100943957d0f72cf5f93d55bea0dda8083817cd20af71863fe7efbb88eeb1ba",
    targetField: "hasAttended",
    filter: { name: "ETHDenver 2024" },
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: `People who attended ETHDenver 2024`,
    acquisitionText:
      "Check in with a Friend of Icebreaker at ETHDenver. Membership closed",
  },
  {
    id: "15",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Attended",
    schemaEncoding:
      "bool hasAttended, string name, string role, string context",
    schemaId:
      "0xd100943957d0f72cf5f93d55bea0dda8083817cd20af71863fe7efbb88eeb1ba",
    targetField: "name",
    filter: { hasAttended: true },
    allowRecursion: false,
    isBoolean: false,
    verb: "Verifies",
    description: `People who attended an event`,
    acquisitionText: `Attend an event that's affiliated with Icebreaker or uses a supported partner`,
  },
  {
    id: "16",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Proof of Buidl",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "isEndorsement",
    filter: { name: "qBuilder", isEndorsement: true },
    allowRecursion: true,
    maxRecursion: 1,
    maxReattestations: 1,
    isBoolean: true,
    description:
      "People who received a qBuilder recommendation from another member, with a specific traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group within 2 degrees of Icebreaker can immediately recommend up to 1 new member",
  },
  {
    id: "17",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Black Ice",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "isMember",
    filter: { name: "Black Ice" },
    allowRecursion: false,
    isBoolean: true,
    verb: "Endorses",
    description: "People who are members of Black Ice. Membership is private",
    acquisitionText: "By invitation",
  },
  {
    id: "18",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Icebreaker Metal",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "isMember",
    filter: { name: "Icebreaker Metal" },
    allowRecursion: false,
    isBoolean: true,
    verb: "Endorses",
    description: "People who possess an Icebreaker Metal card",
    acquisitionText: "By invitation",
  },
  {
    id: "19",
    isEnabled: false,
    attester: "0xD1ba067be2FcbB524865c0A98d3FCC0E710738d5",
    chain: "ethereum",
    name: "Regiftable Gift Box",
    schemaEncoding: "bool isWinner,string name,string rank,string context",
    schemaId:
      "0xa4d2a6534317f4c06fa59e7021d75342165ba0cfac3672645a8660368a1a342c",
    targetField: "rank",
    filter: { name: "Icebreaker x Base Regiftable Gift Box 2023" },
    allowRecursion: false,
    isBoolean: false,
    verb: "Verifies",
    description:
      "Winners of Icebreaker x Base Regiftable Gift Box 2023 contest",
    acquisitionText:
      "Participation in Icebreaker x Base Regiftable Gift Box 2023 contest. Membership closed",
  },
  {
    id: "20",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "qBuilder",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "isEndorsement",
    filter: { name: "qBuilder" },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    verb: "Recommends",
    description:
      "People who received a qBuilder (quality builder) recommendation with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "21",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Works at",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "name",
    allowRecursion: false,
  },
  {
    id: "22",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Works at",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "name",
    allowRecursion: false,
    allowMultiple: true,
  },
  {
    id: "23",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Crypto: The Game",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    filter: { name: "Crypto: The Game" },
    targetField: "role",
    allowRecursion: false,
    verb: "Verifies",
    description: "People who participated in Crypto: The Game, Season 1",
    acquisitionText:
      "Participation in Crypto: The Game, Season 1. Membership closed",
  },
  {
    id: "24",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Crypto: The Game: Finalist",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    filter: { name: "Crypto: The Game", context: "Finalist" },
    targetField: "isMember",
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: "People who were finalists in Crypto: The Game, Season 1",
    acquisitionText:
      "Finalist in Crypto: The Game, Season 1. Membership closed",
  },
  {
    id: "25",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Crypto: The Game | Participant",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    filter: { name: "Crypto: The Game" },
    targetField: "isMember",
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: "People who participated in Crypto: The Game, Season 1",
    acquisitionText:
      "Participation in Crypto: The Game, Season 1. Membership closed",
  },
  {
    id: "26",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Human",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "isEndorsement",
    filter: { name: "Human" },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    verb: "Endorses",
    description:
      "People who received a Human endorsement from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately endorse a new member",
  },
  {
    id: "27",
    isEnabled: true,
    attester: "0x62Ba98a99D5de850A8ab6e2450a8808355F46c03",
    chain: "base",
    name: "EAS Fellowship",
    schemaEncoding: "string communityRole",
    schemaId:
      "0x686175e3c180cda35478470612a3718f610a238d9b7c7d2fd9beb946ef0dd99d",
    targetField: "communityRole",
    allowRecursion: false,
    isBoolean: false,
    verb: "Verifies",
    description:
      "People who received an Ethereum Attestation Service Fellowship verification",
    acquisitionText:
      "Apply and be accepted to the Ethereum Attestation Service Fellowship",
    acquisitionUrl: "https://attest.org/fellowship",
  },
  {
    id: "28",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "UC Faculty/Staff",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "isEndorsement",
    filter: { name: "Faculty/Staff", domain: "University of Cincinnati" },
    allowRecursion: true,
    isBoolean: true,
    verb: "Verifies",
    description:
      "People who received a UC Faculty/Staff verification from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately verify a new member",
    acquisitionUrl: "https://www.uc.edu/",
  },
  {
    id: "29",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Verified",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "name",
    filter: { isMember: true },
    allowRecursion: false,
    isBoolean: false,
    verb: "Verifies",
    description:
      "People who verified ownership of an email address. Membership is private.",
    acquisitionText: "Link a work email address to Icebreaker",
  },
  {
    id: "30",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "bro",
    schemaEncoding: "bool bro,string context",
    schemaId:
      "0xd6a2e6384c332928b36723b8f4bf0debf4d7cd6745256d58334c4932f43ba846",
    targetField: "bro",
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    verb: "Endorses",
    description:
      "People who received a bro endorsement from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "31",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "New Yorker",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "isMember",
    filter: { name: "New Yorker", isMember: true },
    allowRecursion: true,
    isBoolean: true,
    verb: "Endorses",
    description:
      "People who received a New Yorker endorsement from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately endorse a new member",
  },
  {
    id: "32",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "FarCon 2024 Pass",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "name",
    filter: { name: "FarCon 2024 Pass", isMember: true },
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: "People who held FarCon 2024 tickets",
    acquisitionText:
      "Hold an Unlock ticket NFT as of FarCon 2024. Membership closed",
  },
  {
    id: "33",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Attended: FarCon 1",
    schemaEncoding:
      "bool hasAttended, string name, string role, string context",
    schemaId:
      "0xd100943957d0f72cf5f93d55bea0dda8083817cd20af71863fe7efbb88eeb1ba",
    targetField: "hasAttended",
    filter: { name: "FarCon 1", hasAttended: true },
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: "People who attended FarCon 1",
    acquisitionText: "Attend FarCon 1. Membership closed",
  },
  {
    id: "34",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Attended: FarCon 2024",
    schemaEncoding:
      "bool hasAttended, string name, string role, string context",
    schemaId:
      "0xd100943957d0f72cf5f93d55bea0dda8083817cd20af71863fe7efbb88eeb1ba",
    targetField: "hasAttended",
    filter: { name: "FarCon 2024", hasAttended: true },
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: "People who attended FarCon 2024",
    acquisitionText:
      "Check in with your Unlock ticket at FarCon 2024. Membership closed",
  },
  {
    id: "35",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Channel Host",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "name",
    filter: { isMember: true, role: "Channel Host", context: "Farcaster" },
    allowRecursion: false,
    isBoolean: false,
    verb: "Verifies",
    description: "People who are Farcaster Channel Hosts",
    acquisitionText: "Tag Icebreaker on Farcaster as a Channel Host",
  },
  {
    id: "36",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Worked directly with",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "name",
    filter: {
      isEndorsement: true,
      name: "Worked directly with",
    },
    allowRecursion: true,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    verb: "Worked directly with",
    description: 'People who received a "Worked directly with" verification',
    acquisitionText: `Anyone can give a "Worked directly with" to anyone else. Mutual verifications will be displayed`,
  },
  {
    id: "37",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Product",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Product",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Product recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "38",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Design",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Design",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Design recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "39",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Engineering",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Engineering",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Engineering recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "40",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Marketing",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Marketing",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Marketing recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "41",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Legal",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Legal",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Legal recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "42",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Finance",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Finance",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Finance recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "43",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Operations",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Operations",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Operations recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "44",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Sales",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Sales",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Sales recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "45",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Support",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Support",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Support recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "46",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Talent",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Talent",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Talent recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "47",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Data",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Data",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Data recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "48",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Expert: Venture Capital",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Expert",
      domain: "Venture Capital",
    },
    allowRecursion: true,
    isBoolean: true,
    allowMultiple: true,
    description:
      "People who received an Expert: Venture Capital recommendation from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately recommend a new member",
  },
  {
    id: "49",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Won",
    schemaEncoding: "bool isWinner,string name,string rank,string context",
    schemaId:
      "0xa4d2a6534317f4c06fa59e7021d75342165ba0cfac3672645a8660368a1a342c",
    targetField: "name",
    filter: { isWinner: true },
    allowRecursion: false,
    isBoolean: false,
    verb: "Verifies",
    description: "People who won a contest",
    acquisitionText: `Win a contest that's affiliated with Icebreaker or uses a supported partner`,
  },
  {
    id: "50",
    isEnabled: true,
    attester: "0x2A2EA826102c067ECE82Bc6E2B7cf38D7EbB1B82",
    chain: "base",
    name: "Cyber ID Verified",
    schemaEncoding:
      "string cyberID,string twitterHandle,string profileLink,address issuer",
    schemaId:
      "0xcfcf329b79035809704e8d33780714ddf7815a06490a94d57fac562937edbcef",
    targetField: "cyberID",
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: "People who verified their account with CyberID",
    acquisitionText: "Visit CyberID to receive verification",
    acquisitionUrl: "https://wallet.cyber.co/",
  },
  {
    id: "51",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "FarCon 2024 Community Pass",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "name",
    filter: { name: "FarCon 2024 Community Pass", isMember: true },
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: "People who held FarCon 2024 Community Pass tickets",
    acquisitionText:
      "Hold an Unlock ticket NFT as of FarCon 2024. Membership closed",
  },
  {
    id: "52",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "FarCon 2024 Summit Pass",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "name",
    filter: { name: "FarCon 2024 Summit Pass", isMember: true },
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: "People who held FarCon 2024 Summit Pass tickets",
    acquisitionText:
      "Hold an Unlock ticket NFT as of FarCon 2024. Membership closed",
  },
  {
    id: "53",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Attended: New Internet City 002",
    schemaEncoding:
      "bool hasAttended, string name, string role, string context",
    schemaId:
      "0xd100943957d0f72cf5f93d55bea0dda8083817cd20af71863fe7efbb88eeb1ba",
    targetField: "hasAttended",
    filter: { name: "New Internet City 002", hasAttended: true },
    allowRecursion: false,
    isBoolean: true,
    verb: "Verifies",
    description: `People who attended New Internet City 002`,
    acquisitionText: `Check in with a Friend of Icebreaker at New Internet City 002. Membership closed`,
  },
  {
    id: "54",
    isEnabled: true,
    attester: "0xdc81d807f0e1a638ddd5cbf37f1320d86d0de30c",
    chain: "optimism",
    name: "ENS Delegate",
    schemaEncoding: "bool isEnsDelegate",
    schemaId:
      "0x640fbe0854497111367645de93b34b4ff946d9ab500668e997903913b0199316",
    targetField: "isEnsDelegate",
    filter: { isEnsDelegate: true },
    isBoolean: true,
    verb: "Verifies",
    description: "People who are ENS Delegates with CATTS",
    acquisitionText: "Visit CATTS to receive verification",
    acquisitionUrl: "https://catts.run/",
  },
  {
    id: "56",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Icy",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "isEndorsement",
    filter: { name: "Icy" },
    allowRecursion: true,
    isBoolean: true,
    verb: "Endorses",
    description:
      "People who received a Icy endorsement from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately endorse a new member",
  },
  {
    id: "57",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Blue Ice",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "isEndorsement",
    filter: { name: "Blue Ice" },
    allowRecursion: false,
    isBoolean: true,
    verb: "Endorses",
    description:
      "People who received a Blue Ice endorsement from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately endorse a new member",
  },
  {
    id: "58",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
    },
    isBoolean: false,
    isOpen: true,
    allowMultiple: true,
  },
  {
    id: "59",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Icebreaker",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "role",
    filter: { name: "Icebreaker", isMember: true },
    allowRecursion: false,
    isBoolean: false,
  },
  {
    id: "60",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "base",
    name: "Higher",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "isEndorsement",
    filter: { name: "Higher" },
    allowRecursion: true,
    isBoolean: true,
    verb: "Endorses",
    description:
      "People who received a Higher endorsement from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately endorse a new member",
  },
  {
    id: "61",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Lounge",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "role",
    filter: { name: "Lounge", isMember: true },
    allowRecursion: false,
    isBoolean: false,
    verb: "Verifies",
    description: "People who participated in Lounge",
    acquisitionText: "Participate in a Lounge season as a contributor",
    acquisitionUrl: "https://warpcast.com/~/channel/lounge",
  },
  {
    id: "62",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "optimism",
    name: "BuildCity Member",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "isMember",
    filter: { name: "BuildCity", isMember: true },
    allowRecursion: true,
    isBoolean: true,
    maxReattestations: 2,
    verb: "Endorses",
    description:
      "People who received a BuildCity Member endorsement from another member, with a traceable lineage back to the group creators",
    acquisitionText:
      "Any member of this group can immediately endorse up to 2 new members. Founding members can endorse unlimited members",
  },
  {
    id: "63",
    isEnabled: true,
    attester: "0x7e823AE179592525301ceb33b3eC479f8c66ecB9",
    chain: "base",
    name: "Coordinape Skill",
    schemaEncoding:
      "address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight",
    schemaId:
      "0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa",
    targetField: "skill",
    isBoolean: false,
    description:
      "People who received a Coordinape Skill recommendation from another member",
    acquisitionText: "Visit CoLinks to receive a recommendation",
    acquisitionUrl: "https://colinks.coordinape.com/",
  },
  {
    id: "64",
    isEnabled: true,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Worked with",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "name",
    filter: {
      isEndorsement: true,
      name: "Worked with",
    },
    allowRecursion: true,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    verb: "Worked with",
    description: 'People who received a "Worked with" verification',
    acquisitionText: `Anyone can give a "Worked with" to anyone else. Mutual verifications will be displayed`,
  },
  {
    id: "65",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Product",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Product",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received a Product recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "66",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Design",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Design",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received a Design recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "67",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Engineering",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Engineering",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received an Engineering recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "68",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Marketing",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Marketing",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received a Marketing recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "69",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Legal",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Legal",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received a Legal recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "70",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Finance",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Finance",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received a Finance recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "71",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Operations",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Operations",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received an Operations recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "72",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Sales",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Sales",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received a Sales recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "73",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Support",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Support",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received a Support recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "74",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Talent",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Talent",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received a Talent recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "75",
    isEnabled: false,
    attester: "0x1CB34c1eC454708e7C849975E8e545B54417CdFf",
    chain: "ethereum",
    name: "Skill: Data",
    schemaEncoding:
      "bool isEndorsement,string name,string domain,string context",
    schemaId:
      "0xa76299ae6a66b66ff48344f36c0fa657a0a9eeb6721248311df9cf25748e4405",
    targetField: "domain",
    filter: {
      isEndorsement: true,
      name: "Skill",
      domain: "Data",
    },
    allowRecursion: false,
    isBoolean: true,
    isOpen: true,
    allowMultiple: true,
    description:
      "People who received a Data recommendation from another member",
    acquisitionText: `Anyone can give a recommendation to anyone else`,
  },
  {
    id: "76",
    isEnabled: false,
    attester: "0x78a42a84bfe3e173c3a9246b3f5f1c5aa8bbae72",
    chain: "optimism",
    name: "The Arena Builder",
    schemaEncoding: "bool isMember,string name,string role,string context",
    schemaId:
      "0x9de0a92bb14e92843a7403687baeadddef1cc34a477dd22a88c71c0be71a173d",
    targetField: "isMember",
    filter: { name: "The Arena", isMember: true },
    allowRecursion: true,
    allowMultiple: true,
    isBoolean: true,
    maxReattestations: 2,
    isRecommendation: true,
    verb: "Endorses",
    description:
      "Builders who received a The Arena endorsement from another member, with a traceable lineage back to the group creator",
    acquisitionText:
      "Any member of this group can immediately endorse up to 2 new members. The group creator can endorse unlimited members",
    acquisitionUrl: "https://warpcast.com/~/channel/the-arena",
  },
] as EasSchemaVariables[];
