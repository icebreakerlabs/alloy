import { type ChainSlug } from "@thirdweb-dev/chains";
import { type Address } from "viem";

export type EasSchemaVariables = {
  id: string;
  chain: ChainSlug;
  attester: Address;
  schemaId: string;
  name: string;
  targetField: string;
  allowRecursion?: boolean;
  displayUnits?: string;
  conversionMultiplier?: number;
  conversionMultiplierBigInt?: bigint;
  isBoolean?: boolean;
  filter?: Record<string, string | boolean>;
};

export type Credential = {
  name: string;
  source?: string;
  timestamp?: Date;
  reference?: string;
  chain?: ChainSlug;
};
