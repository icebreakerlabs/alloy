import { type ChainSlug } from "../../types/thirdweb";
import { type Address } from "viem";
import { type Serialized } from "../../types/core";

import { CHANNEL_TYPES } from "../../constants/channelTypes";

export type ChannelType = (typeof CHANNEL_TYPES)[number];

export type Credential = {
  name: string;
  source?: string;
  reference?: string;
  chain?: ChainSlug;
  issuer?: Address;
  issueCount?: number;
  timestamp?: Date;
};

export type CredentialSerialized = Serialized<Credential>;

export type ChannelMetadata = {
  name: string;
  value: string | number;
};

export type ChannelVisibility = "public" | "private";

export type Channel = {
  type: ChannelType;
  value?: string;
  isLinked?: boolean;
  isVerified?: boolean;
  visibility?: ChannelVisibility;
  isLocked?: boolean;
  metadata?: ChannelMetadata[];
};
