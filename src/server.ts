import { buildApp } from './app.js';

const { app, config } = buildApp();

app.listen(config.port, config.host, () => {
  console.log(`listening on ${config.host}:${config.port}`);
});
