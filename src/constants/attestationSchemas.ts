import { AttestationSchema } from ':/types/attestations';

export const ATTESTATION_SCHEMAS = [
  {
    id: 'colinks:endorsement:qBuilder',
    source: 'EAS',
    description: 'qBuilder endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'qBuilder' },
  },
  {
    id: 'colinks:endorsement:workedDirectlyWith',
    source: 'EAS',
    description: 'Worked Directly With endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Worked Directly With' },
  },
  {
    id: 'colinks:skill:product',
    source: 'EAS',
    description: 'Product endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Product' },
  },
  {
    id: 'recbot:endorsement:qBuilder',
    source: 'Farcaster',
    description: 'qBuilder endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:endorsement:workedDirectlyWith',
    source: 'Farcaster',
    description: 'Worked Directly With endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:product',
    source: 'Farcaster',
    description: 'Product endorsements from recbot via Farcaster',
  },
] as AttestationSchema[];
