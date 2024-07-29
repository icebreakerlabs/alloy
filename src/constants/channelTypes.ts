export const CHANNEL_TYPES = [
  "apple",
  "behance",
  "bluesky",
  "calendar",
  "colinks",
  "custom",
  "daimo",
  "deca",
  "discord",
  "dune",
  "ens",
  "email",
  "farcards",
  "farcaster",
  "friendtech",
  "gallery",
  "github",
  "google",
  "instagram",
  "interface",
  "lens",
  "linkedin",
  "linkedin-company",
  "linktree",
  "link3",
  "luma",
  "mastodon",
  "medium",
  "mirror",
  "nftd",
  "opensea",
  "paragraph",
  "partiful",
  "phone",
  "portrait",
  "readcv",
  "reddit",
  "researchhub",
  "signal",
  "soundcloud",
  "spotify",
  "steam",
  "superrare",
  "telegram",
  "tenfold",
  "tiktok",
  "threads",
  "twitch",
  "twitter",
  "wallet",
  "whatsapp",
  "xmtp",
  "youtube",
] as const;

type ChannelType = (typeof CHANNEL_TYPES)[number];

export const EXCLUDED_CHANNEL_TYPES = [
  "apple",
  "google",
  "linkedin-company",
  "xmtp",
  "tenfold",
] as const;

export type ExcludedChannelType = (typeof EXCLUDED_CHANNEL_TYPES)[number];

export type EditableChannelType = Exclude<ChannelType, ExcludedChannelType>;

export const EDITABLE_CHANNEL_TYPES = CHANNEL_TYPES.filter(
  (contactType) =>
    !EXCLUDED_CHANNEL_TYPES.includes(contactType as ExcludedChannelType)
) as EditableChannelType[];

export const PRIVATE_CHANNEL_TYPES = [
  "apple",
  "email",
  "google",
  "phone",
  "custom",
  "calendar",
  "signal",
  "telegram",
  "whatsapp",
] as const;

export type PrivateChannelType = (typeof PRIVATE_CHANNEL_TYPES)[number];

export type PublicChannelType = Exclude<ChannelType, PrivateChannelType>;

export const PUBLIC_CHANNEL_TYPES = CHANNEL_TYPES.filter(
  (channelType) =>
    !PRIVATE_CHANNEL_TYPES.includes(channelType as PrivateChannelType)
) as PublicChannelType[];

export const VERIFIABLE_CHANNEL_TYPES = [
  "apple",
  "twitter",
  "discord",
  "email",
  "farcaster",
  "github",
  "google",
  "phone",
  "wallet",
] as const;

export type VerifiableChannelType = (typeof VERIFIABLE_CHANNEL_TYPES)[number];

export const CHANNEL_TYPE_PREFIXES: Partial<Record<ChannelType, string>> = {
  behance: "behance.net/",
  bluesky: "bsky.app/profile/",
  colinks: "colinks.coordinape.com/",
  daimo: "daimo.com/l/account/",
  deca: "deca.art/",
  dune: "dune.com/",
  ens: "app.ens.domains/",
  farcards: "far.cards/detail/",
  farcaster: "warpcast.com/",
  friendtech: "friend.tech/rooms/",
  gallery: "gallery.so/",
  github: "github.com/",
  instagram: "instagram.com/",
  interface: "app.interface.social/profile/",
  lens: "hey.xyz/u/",
  linkedin: "linkedin.com/in/",
  "linkedin-company": "linkedin.com/company/",
  linktree: "linktr.ee/",
  link3: "link3.to/",
  luma: "lu.ma/",
  mastodon: "mastodon.social/@",
  medium: "medium.com/",
  mirror: "mirror.xyz/",
  nftd: "nf.td/",
  opensea: "opensea.io/",
  paragraph: "paragraph.xyz/",
  partiful: "partiful.com/e/",
  portrait: "portrait.so/",
  readcv: "read.cv/",
  reddit: "reddit.com/u/",
  researchhub: "researchhub.com/user/",
  signal: "signal.me/#p/",
  soundcloud: "soundcloud.com/",
  spotify: "open.spotify.com/user/",
  steam: "steamcommunity.com/id/",
  superrare: "superrare.com/",
  telegram: "t.me/",
  tenfold: "tenfold.xyz/profile/",
  tiktok: "tiktok.com/@",
  threads: "threads.net/@",
  twitch: "twitch.tv/",
  twitter: "twitter.com/",
  whatsapp: "wa.me/",
  youtube: "youtube.com/@",
};
