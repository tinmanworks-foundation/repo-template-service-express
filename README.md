# repo-template-service-express

Generalized backend service template using Node.js, TypeScript, and Express.

## Status
- Stage: Draft
- Owner: <Owner>
- License: <License Name>
- Visibility: Public | Private | Internal
- Reason: <Why this visibility level is correct>
- Promotion criteria to Public: <What must be true before public release>

## What This Project Is
- A baseline service skeleton with health checks, structured logging, and OpenAPI output.
- Includes optional worker placeholder for asynchronous processing.

## Quickstart

### Prerequisites
- Node.js 20+
- pnpm 10+

### Install
```bash
pnpm install
```

### Run
```bash
pnpm dev
```

### Checks
```bash
pnpm lint
pnpm test
pnpm typecheck
```

## Documentation
- [Overview](docs/overview.md)
- [Architecture](docs/architecture.md)
- [ADRs](docs/adr/)
- [Doctrine Snapshot](docs/doctrine/README.md)

## Validation
```bash
bash tools/validate-template.sh core
bash tools/validate-template.sh advisory
```

## Contributing
See `CONTRIBUTING.md`.
