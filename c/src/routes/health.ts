import { Application, RequestHandler } from 'express';

// import { DiagnosticsError, executeDiagnosis } from '@shadow/diag';

const aliveHandler: RequestHandler = (_, res) => res.status(200).send('ok');
const readyHandler: RequestHandler = (_, res) => res.status(200).send('ok');

export const registerHealthRoutes = (app: Application): void => {
  app.get('/health/alive', aliveHandler);
  app.get('/health/ready', readyHandler);
};
