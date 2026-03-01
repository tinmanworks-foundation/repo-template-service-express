export type AppConfig = {
  host: string;
  port: number;
  logLevel: 'debug' | 'info' | 'warn' | 'error';
};

export type HealthStatus = {
  status: 'ok';
  service: string;
  timestamp: string;
};

export type JobEnvelope = {
  id: string;
  type: string;
  payload: Record<string, unknown>;
};
