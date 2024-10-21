import {
  CHANNEL_TYPE_PREFIXES,
  PRIVATE_CHANNEL_TYPES,
  type Channel,
  type ChannelType,
  type PrivateChannelType,
} from '../constants/channels';

const PROTOCOL_MATCHER = /(^\w+:|^)\/\//;

export function channelToURL(channelType: ChannelType, value?: string) {
  if (!value) {
    return;
  }

  switch (channelType) {
    case 'bluesky': {
      // if the handle already contains a '.', then use that domain
      // otherwise, fall-back to bsky's required domain `.bsky.social`.
      const handle = value.includes('.') ? value : `${value}.bsky.social`;

      return `https://${CHANNEL_TYPE_PREFIXES[channelType]}${handle}${handle}`;
    }
    case 'deca':
      return `https://deca.art/${value}`;
    case 'email':
      return `mailto:${value}`;
    case 'calendar':
      return value;
    case 'custom':
      return value;
    case 'discord':
      return `https://discordapp.com/users/${value}`;
    case 'ens':
      return `https://app.ens.domains/${value}`;
    case 'farcaster':
      return `https://warpcast.com/${value}`;
    case 'friendtech':
      return `https://friend.tech/rooms/${value}`;
    case 'gallery':
      return `https://gallery.so/${value}`;
    case 'github':
      return `https://github.com/${value}`;
    case 'instagram':
      return `https://instagram.com/${value}`;
    case 'lens':
      return `https://hey.xyz/u/${value}`;
    case 'linkedin':
      return `https://linkedin.com/in/${value}`;
    case 'linkedin-company':
      return `https://linkedin.com/company/${value}`;
    case 'linktree':
      return `https://linktr.ee/${value}`;
    case 'medium':
      return `https://medium.com/${value}`;
    case 'mirror':
      return `https://mirror.xyz/${value}`;
    case 'nftd':
      return `https://nf.td/${value}`;
    case 'opensea':
      return `https://opensea.io/${value}`;
    case 'paragraph':
      return `https://paragraph.xyz/${value}`;
    case 'phone':
      return `tel:${value}`;
    case 'portrait':
      return `https://portrait.so/${value}`;
    case 'readcv':
      return `https://read.cv/${value}`;
    case 'reddit':
      return `https://reddit.com/u/${value}`;
    case 'researchhub':
      return `https://researchhub.com/user/${value}`;
    case 'signal':
      return `https://signal.me/#p/${value}`;
    case 'soundcloud':
      return `https://soundcloud.com/${value}`;
    case 'spotify':
      return `https://open.spotify.com/user/${value}`;
    case 'steam':
      return `https://steamcommunity.com/id/${value}`;
    case 'telegram':
      return `https://t.me/${value}`;
    case 'tenfold':
      return `https://tenfold.xyz/profile/${value}`;
    case 'tiktok':
      return `https://tiktok.com/${value}`;
    case 'threads':
      return `https://www.threads.net/${value}`;
    case 'twitch':
      return `https://twitch.tv/${value}`;
    case 'twitter':
      return `https://twitter.com/${value}`;
    case 'wallet':
      return `https://etherscan.io/address/${value}`;
    case 'whatsapp':
      return `https://wa.me/${value}`;
    case 'xmtp':
      return `https://xmtp.chat/dm/${value}`;
  }
}

export function channelTypeToText(channelType: ChannelType) {
  switch (channelType) {
    case 'apple':
    case 'google':
      return 'Email';
    case 'basename':
      return 'Base Name';
    case 'colinks':
      return 'CoLinks';
    case 'custom':
      return 'Link';
    case 'ens':
    case 'nftd':
    case 'xmtp':
      return channelType.toUpperCase();
    case 'github':
      return 'GitHub';
    case 'linkedin':
    case 'linkedin-company':
      return 'LinkedIn';
    case 'opensea':
      return 'OpenSea';
    case 'researchhub':
      return 'ResearchHub';
    case 'soundcloud':
      return 'SoundCloud';
    case 'tiktok':
      return 'TikTok';
    case 'twitter':
      return 'X';
    case 'whatsapp':
      return 'WhatsApp';
    default:
      return channelType.charAt(0).toUpperCase() + channelType.slice(1);
  }
}

export function channelDisplayValue(channelType: ChannelType, value?: string) {
  switch (channelType) {
    case 'calendar':
      return 'Book Time';
    case 'custom':
      return value && new URL(value).hostname;
    default:
      return channelTypeToText(channelType);
  }
}

export function channelTypeToPlaceholder(channelType: ChannelType) {
  switch (channelType) {
    case 'apple':
      return 'Apple ID email address';
    case 'calendar':
      return 'Full URL calendar link';
    case 'custom':
      return 'Full URL custom link';
    case 'ens':
      return 'ENS name';
    case 'google':
    case 'email':
      return 'Full email address';
    case 'friendtech':
      return 'Friendtech address';
    case 'linkedin-company':
      return 'Username after linkedin.com/company/';
    case 'phone':
    case 'signal':
    case 'whatsapp':
      return 'phone number +1234567890';
    case 'wallet':
    case 'xmtp':
      return 'Web3 address';
    default:
      return 'Username or handle';
  }
}

export function isPrivateChannel(channelType: ChannelType) {
  return PRIVATE_CHANNEL_TYPES.includes(channelType as PrivateChannelType);
}

export function isPublicChannel(channel: Channel | ChannelType) {
  if (typeof channel === 'string') {
    return !isPrivateChannel(channel);
  }
  return channel.visibility === 'public' || !isPrivateChannel(channel.type);
}
