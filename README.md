# Alloy by Icebreaker
An [alloy](https://en.wikipedia.org/wiki/Alloy) is formed by mixing various existing materials together, often resulting in superior properties vs. the inputs alone. This sums Icebreaker's approach to identity. This repo will progressively open source key components of the Icebreaker application which promotes interoperable identity and networking.

## Viewing supported channels and credentials
All current account types ("channels") live in [src/constants/channels.ts](./src/constants/channels.ts) and all supported credentials are defined in [src/credentials/eas_schemas.ts](./src/credentials/eas_schemas.ts).

## Contributing a new channel
1. Add your channel slug to `CHANNEL_TYPES` in `src/constants/channels.ts`.
2. Add an entry in `CHANNEL_TYPE_PREFIXES` and, if needed, a new icon under `src/app/components/icons`.
3. Open a pull request; once at least three people confirm they will use the channel it can be merged.

## Contributing a new credential
1. Append a definition to the `EAS_SCHEMAS` array in `src/credentials/eas_schemas.ts`.
2. Fill in the schema details (`schemaId`, `chain`, optional filters, etc.).
3. Submit a pull request for review.

For more general integrations and additional features such as profile management, wallet logins and cross‑platform notifications, see [docs.icebreaker.xyz](https://docs.icebreaker.xyz/).
