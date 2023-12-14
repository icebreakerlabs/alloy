import { type ChainSlug } from "@thirdweb-dev/chains";
import { Address } from "viem";

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
  isEnabled: boolean;
  attester: Address;
  schemaId: string;
  name: string;
  targetField: string;
  allowRecursion: boolean;
  displayUnits?: string;
  conversionMultiplier?: number;
  conversionMultiplierBigInt?: bigint;
  isBoolean?: boolean;
  id: string;
  chain: ChainSlug;
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
