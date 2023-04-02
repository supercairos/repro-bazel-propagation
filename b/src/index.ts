import pino, { Logger } from "pino";
import pinoHttp from "pino-http";

export const Log = pino({
  level: process.env.LOG_LEVEL || "info",

  // This is the default, but it's good to be explicit
  prettyPrint: {
    colorize: true,
    translateTime: true,
  },
});
