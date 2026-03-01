import { pino } from 'pino';
import { pinoHttp } from 'pino-http';

export function createLogger(level: string) {
  return pino({ level });
}

export function createHttpLogger(level: string) {
  return pinoHttp({ logger: createLogger(level) });
}
