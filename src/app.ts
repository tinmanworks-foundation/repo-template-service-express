import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { loadConfig } from './config/env.js';
import { createHttpLogger } from './logging/logger.js';
import { openApiDocument } from './openapi.js';
import type { HealthStatus } from './config/types.js';

export function buildApp() {
  const config = loadConfig();
  const app = express();

  app.use(createHttpLogger(config.logLevel));

  app.get('/health', (_req, res) => {
    const payload: HealthStatus = {
      status: 'ok',
      service: 'repo-template-service-express',
      timestamp: new Date().toISOString(),
    };
    res.json(payload);
  });

  app.get('/openapi.json', (_req, res) => {
    res.json(openApiDocument);
  });

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

  return { app, config };
}
