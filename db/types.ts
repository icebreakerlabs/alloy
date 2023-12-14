import { type ChainSlug } from "@thirdweb-dev/chains";

export type Credential = {
  name: string;
  source?: string;
  timestamp?: Date;
  reference?: string;
  chain?: ChainSlug;
};
