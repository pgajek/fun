import http from "http";
import { config } from "./config.js";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world");
});

server.listen(config.port, () => {
  console.log(`Server listening on port: ${config.port}`);
});
