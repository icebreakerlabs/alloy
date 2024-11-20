import { type AttestationSchema } from ':/types/attestations';

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
    id: 'colinks:skill:design',
    source: 'EAS',
    description: 'Design endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Design' },
  },
  {
    id: 'colinks:skill:engineering',
    source: 'EAS',
    description: 'Engineering endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Engineering' },
  },
  {
    id: 'colinks:skill:marketing',
    source: 'EAS',
    description: 'Marketing endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Marketing' },
  },
  {
    id: 'colinks:skill:legal',
    source: 'EAS',
    description: 'Legal endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Legal' },
  },
  {
    id: 'colinks:skill:finance',
    source: 'EAS',
    description: 'Finance endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Finance' },
  },
  {
    id: 'colinks:skill:operations',
    source: 'EAS',
    description: 'Operations endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Operations' },
  },
  {
    id: 'colinks:skill:sales',
    source: 'EAS',
    description: 'Sales endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Sales' },
  },
  {
    id: 'colinks:skill:support',
    source: 'EAS',
    description: 'Support endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Support' },
  },
  {
    id: 'colinks:skill:talent',
    source: 'EAS',
    description: 'Talent endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Talent' },
  },
  {
    id: 'colinks:skill:data',
    source: 'EAS',
    description: 'Data endorsements from colinks via EAS',
    schemaId:
      '0x82c2ec8ec89cf1d13022ff0867744f1cecf932faa4fe334aa1bb443edbfee3fa',
    chain: 'base',
    schemaEncoding:
      'address from,uint16 amount,string platform,string url,string context,string skill,string tag,string note,uint16 weight',
    filter: { skill: 'Data' },
  },
  {
    id: 'recbot:endorsement:bro',
    source: 'Farcaster',
    description: 'Bro endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:endorsement:featherIce',
    source: 'Farcaster',
    description: 'Feather Ice endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:endorsement:human',
    source: 'Farcaster',
    description: 'Human endorsements from recbot via Farcaster',
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
  {
    id: 'recbot:skill:design',
    source: 'Farcaster',
    description: 'Design endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:engineering',
    source: 'Farcaster',
    description: 'Engineering endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:marketing',
    source: 'Farcaster',
    description: 'Marketing endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:legal',
    source: 'Farcaster',
    description: 'Legal endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:finance',
    source: 'Farcaster',
    description: 'Finance endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:operations',
    source: 'Farcaster',
    description: 'Operations endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:sales',
    source: 'Farcaster',
    description: 'Sales endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:support',
    source: 'Farcaster',
    description: 'Support endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:talent',
    source: 'Farcaster',
    description: 'Talent endorsements from recbot via Farcaster',
  },
  {
    id: 'recbot:skill:data',
    source: 'Farcaster',
    description: 'Data endorsements from recbot via Farcaster',
  },
] as AttestationSchema[];
