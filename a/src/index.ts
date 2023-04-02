import { getApp } from "./application";

const port = Number(process.env.PORT) || 3000;
const listener = (proto: "http" | "https") => () => {
  console.info(`Listening on ${proto}://0.0.0.0:${port}`);
};

getApp().listen(port, listener("http"));
