import { PRIVATE_CHANNEL_TYPES } from ':/constants/channelTypes';
import { type Channel, type ChannelType } from ':/server/db/types';

export function channelToURL(channelType: ChannelType, value?: string) {
  if (!value) {
    return;
  }

  switch (channelType) {
    case 'bluesky': {
      // if the handle already contains a '.', then use that domain
      // otherwise, fall-back to bsky's required domain `.bsky.social`.
      const handle = value.includes('.') ? value : `${value}.bsky.social`;

      return `https://bsky.app/profile/${handle}`;
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
    case 'bluesky':
      return 'Bluesky';
    case 'calendar':
      return 'Calendar';
    case 'custom':
      return 'Link';
    case 'deca':
      return 'Deca';
    case 'discord':
      return 'Discord';
    case 'ens':
      return 'ENS';
    case 'email':
      return 'Email';
    case 'farcaster':
      return 'Farcaster';
    case 'friendtech':
      return 'Friendtech';
    case 'gallery':
      return 'Gallery';
    case 'github':
      return 'GitHub';
    case 'instagram':
      return 'Instagram';
    case 'lens':
      return 'Lens';
    case 'linkedin':
      return 'LinkedIn';
    case 'linkedin-company':
      return 'LinkedIn';
    case 'linktree':
      return 'Linktree';
    case 'medium':
      return 'Medium';
    case 'mirror':
      return 'Mirror';
    case 'nftd':
      return 'NFTD';
    case 'opensea':
      return 'OpenSea';
    case 'paragraph':
      return 'Paragraph';
    case 'phone':
      return 'Phone';
    case 'portrait':
      return 'Portrait';
    case 'readcv':
      return 'Read.CV';
    case 'researchhub':
      return 'ResearchHub';
    case 'reddit':
      return 'Reddit';
    case 'signal':
      return 'Signal';
    case 'soundcloud':
      return 'SoundCloud';
    case 'spotify':
      return 'Spotify';
    case 'steam':
      return 'Steam';
    case 'telegram':
      return 'Telegram';
    case 'tenfold':
      return 'Tenfold';
    case 'tiktok':
      return 'TikTok';
    case 'threads':
      return 'Threads';
    case 'twitch':
      return 'Twitch';
    case 'twitter':
      return 'X';
    case 'wallet':
      return 'Wallet';
    case 'whatsapp':
      return 'WhatsApp';
    case 'xmtp':
      return 'XMTP';
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

export function isPrivateChannel(channelType: ChannelType) {
  return PRIVATE_CHANNEL_TYPES.has(channelType);
}

export function isPublicChannel(channel: Channel) {
  return channel.visibility === 'public' || !isPrivateChannel(channel.type);
}
