import { type Serialized } from '../types/core';
import { type ChainSlug } from '../types/thirdweb';
import { type Address } from 'viem';

export type JomoFlow = {
  flow_id: string;
  verification_type: string;
  name: string;
};

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
