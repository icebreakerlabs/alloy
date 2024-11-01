import { type ChainSlug } from '@thirdweb-dev/chains';

export type AttestationFilter =
  | 'all-receivers'
  | 'all-givers'
  | 'filtered-receivers'
  | 'filtered-givers'
  | 'receivers-by-givers'
  | 'givers-by-receivers'
  | 'receivers-by-givers-and-receivers'
  | 'givers-by-givers-and-receivers';

export type AttestationSource =
  | 'EAS'
  | 'IcebreakerEAS'
  | 'Delegate_v1'
  | 'Delegate_v2'
  | 'Farcaster'
  | 'Jomo';

export type AttestationSchema = {
  id: string;
  source: AttestationSource;
  description?: string;
  schemaId?: string;
  chain?: ChainSlug;
  schemaEncoding?: string;
  filter?: Record<string, string | boolean>;
};
