import { type ChainSlug } from '../types/thirdweb';
import { type Address } from 'viem';

export type EasSchemaVariables = {
  id: string;
  allowRecursion: boolean;
  attester: Address;
  chain: ChainSlug;
  isEnabled: boolean;
  name: string;
  schemaId: string;
  schemaEncoding: string;
  targetField: string;
  displayUnits?: string;
  conversionMultiplier?: number;
  conversionMultiplierBigInt?: bigint;
  isBoolean?: boolean;
  filter?: Record<string, string | boolean>;
  maxRecursion?: number;
  maxReattestations?: number;
  isOpen?: boolean;
  allowMultiple?: boolean;
  isRecommendation?: boolean;
  isBidirectional?: boolean;
  verb?: string;
  description?: string;
  acquisitionText?: string;
  acquisitionUrl?: string;
  isRevocable?: boolean;
};

export type JomoFlow = {
  flow_id: string;
  verification_type: string;
  name: string;
};
