import type { JobEnvelope } from '../config/types.js';

export async function processJob(job: JobEnvelope): Promise<void> {
  console.log(`processing job ${job.id} (${job.type})`);
}
