import { type ChainSlug } from './thirdweb';
import { type Address } from 'viem';

export type AttestationData = {
  id: string;
  decodedDataJson: string;
  timeCreated: string;
  attester: Address;
  recipient?: Address;
};

export type EasAttestationData = {
  attestationData: AttestationData[];
};

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
  equivalencies?: string[];
};

export type AttestationDataParams = {
  name: string;
  type: string;
  value: string | boolean | number;
};

export type EasQueryData = {
  name: string;
  value?: {
    value: string | boolean | { hex: string };
  };
};

export type EasQueryVariables = {
  recipient: Address;
  attester: Address;
  schemaId: string;
};

export type EasAllQueryVariables = {
  schemaId: string;
};
