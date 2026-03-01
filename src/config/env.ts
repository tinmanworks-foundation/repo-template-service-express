import type { AppConfig } from './types.js';

export function loadConfig(): AppConfig {
  const port = Number(process.env.PORT ?? 4000);
  const host = process.env.HOST ?? '0.0.0.0';
  const logLevel = (process.env.LOG_LEVEL ?? 'info') as AppConfig['logLevel'];

  return { host, port, logLevel };
}
