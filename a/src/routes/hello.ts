import { Application, RequestHandler } from "express";

const getHello: RequestHandler = (_, res): void => {
  res.json({ message: "Hello World!" });
};

export const registerHello = (app: Application): void => {
  app.get("/hello", getHello);
};
