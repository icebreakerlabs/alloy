import { type ChainSlug } from "@thirdweb-dev/chains";
import { type Address } from "viem";

import { CHANNEL_TYPES } from ":/constants/channelTypes";

export type ChannelType = (typeof CHANNEL_TYPES)[number];

type CredentialBase = {
  name: string;
  source?: string;
  reference?: string;
  chain?: ChainSlug;
  issuer?: Address;
  issueCount?: number;
};

export type Credential = CredentialBase & {
  timestamp?: Date;
};

export type CredentialSerialized = CredentialBase & {
  timestamp?: string;
};

export type ChannelVisibility = "public" | "private";

export type Channel = {
  type: ChannelType;
  value?: string;
  isLinked?: boolean;
  visibility?: ChannelVisibility;
  isLocked?: boolean;
};
