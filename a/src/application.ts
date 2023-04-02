import { Application } from "express";

import { createExpressApp } from "@test/c";

import { registerHello } from "./routes";

// Setup Express
export const getApp = (): Application => {
  const app = createExpressApp();
  registerHello(app);
  return app;
};
