export const openApiDocument = {
  openapi: '3.0.3',
  info: {
    title: 'Service Template API',
    version: '0.1.0',
  },
  paths: {
    '/health': {
      get: {
        summary: 'Health endpoint',
        responses: {
          '200': {
            description: 'Service health',
          },
        },
      },
    },
  },
};
