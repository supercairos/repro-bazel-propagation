import express, { Application } from "express";

import { registerHealthRoutes } from "./routes";

export const createExpressApp = (): Application => {
  const app = express();
  app.set("trust proxy", true);

  registerHealthRoutes(app);
  return app;
};
