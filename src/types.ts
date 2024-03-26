import { type ChainSlug } from "@thirdweb-dev/chains";
import { type Address } from "viem";

export type EasSchemaVariables = {
  id: string;
  allowRecursion: boolean;
  attester: Address;
  chain: ChainSlug;
  isEnabled: boolean;
  name: string;
  schemaId: string;
  targetField: string;
  displayUnits?: string;
  conversionMultiplier?: number;
  conversionMultiplierBigInt?: bigint;
  isBoolean?: boolean;
  filter?: Record<string, string | boolean>;
  maxRecursion?: number;
  maxReattestations?: number;
};

// Schema for credential storage on Icebreaker
export type Credential = {
  name: string;
  source?: string;
  timestamp?: Date;
  reference?: string;
  chain?: ChainSlug;
};
export type JomoFlow = {
  flow_id: string;
  verification_type: string;
  name: string;
};
