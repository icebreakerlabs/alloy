import { type EasSchemaVariables } from ":/types/eas";

export const EAS_SCHEMAS = (
  [
    {
      id: "1",
      isEnabled: true,
      attester: "0x357458739F90461b99789350868CD7CF330Dd7EE",
      schemaId:
        "0x1801901fabd0e6189356b4fb52bb0ab855276d84f7ec140839fbd1f6801ca065",
      name: "Coinbase Verified Country",
      targetField: "verifiedCountry",
      allowRecursion: false,
      chain: "base",
    },
    {
      id: "2",
      isEnabled: true,
      attester: "0x357458739F90461b99789350868CD7CF330Dd7EE",
      schemaId:
        "0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9",
      name: "Coinbase Verified Account",
      targetField: "verifiedAccount",
      allowRecursion: false,
      isBoolean: true,
      chain: "base",
    },
    {
      id: "3",
      isEnabled: true,
      attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
      schemaId:
        "0x0f5b217904f3c65ad40b7af3db62716daddf53bb5db04b1a3ddb730fda0a474b",
      name: "Receipts All-Time Running Distance",
      targetField: "distance",
      allowRecursion: false,
      displayUnits: "mi",
      conversionMultiplier: 0.000621371,
      chain: "base",
    },
    {
      id: "4",
      isEnabled: false,
      attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
      schemaId:
        "0x0f5b217904f3c65ad40b7af3db62716daddf53bb5db04b1a3ddb730fda0a474b",
      name: "Receipts All-Time Running Moving Time",
      targetField: "moving_time",
      allowRecursion: false,
      displayUnits: "hours",
      conversionMultiplier: 0.000277778,
      chain: "base",
    },
    {
      id: "5",
      isEnabled: false,
      attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
      schemaId:
        "0x0f5b217904f3c65ad40b7af3db62716daddf53bb5db04b1a3ddb730fda0a474b",
      name: "Receipts All-Time Running Total Activities",
      targetField: "activities",
      allowRecursion: false,
      chain: "base",
    },
    {
      id: "8",
      isEnabled: true,
      attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
      schemaId:
        "0x9b4eb21617daf800381983fe3155419801755b87f2957480987008a739362644",
      name: "Receipts All-Time Cycling Distance",
      targetField: "distance",
      allowRecursion: false,
      displayUnits: "mi",
      conversionMultiplier: 0.000621371,
      chain: "base",
    },
    {
      id: "9",
      isEnabled: true,
      attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
      schemaId:
        "0x1fe27c8a9d15787187d332f2a923c65d521ea77da41948d48c1cbc4f8c47756d",
      name: "Receipts All-Time Swimming Distance",
      targetField: "distance",
      allowRecursion: false,
      displayUnits: "mi",
      conversionMultiplier: 0.000621371,
      chain: "base",
    },
    {
      id: "10",
      isEnabled: true,
      attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
      schemaId:
        "0x8e7121f63075f94e4fe0e3ee654e532febdb55d018096bc09a9032150f5bb483",
      name: "Receipts Highest Chess Rating",
      targetField: "rating",
      allowRecursion: false,
      chain: "base",
    },
    {
      id: "11",
      isEnabled: true,
      attester: "0x77a3b79a2De700AfcfC761fED837a67D7d8fAe1B",
      schemaId:
        "0x03e6a139835f6c4e8863df39079e249251db04d5114be2f6b351976ca0c2a275",
      name: "Receipts Latest Chess Rating",
      targetField: "rating",
      allowRecursion: false,
      chain: "base",
    },
    {
      id: "6",
      isEnabled: true,
      attester: "0xD1ba067be2FcbB524865c0A98d3FCC0E710738d5",
      schemaId:
        "0x2a4938b9ab8e66a2c516dadcfb496c2d6c7a09135c6a732b4ad51f891ae017da",
      name: "TallDAO Member",
      targetField: "isTall",
      allowRecursion: true,
      isBoolean: true,
      chain: "base",
    },
    {
      id: "7",
      isEnabled: true,
      attester: "0x843829986e895facd330486a61Ebee9E1f1adB1a",
      schemaId:
        "0x6ab5d34260fca0cfcf0e76e96d439cace6aa7c3c019d7c4580ed52c6845e9c89",
      name: "Gitcoin Passport Score",
      targetField: "score",
      allowRecursion: false,
      conversionMultiplierBigInt: 100000000000000000n,
      chain: "optimism",
    },
  ] as EasSchemaVariables[]
).filter((schema) => schema.isEnabled);
