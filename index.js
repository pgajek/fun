import http from "http";
import { config } from "./config.js";
import axios from "axios";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world");
});

const fetchHistoricalTrades = async (symbol) => {
  try {
    const timestamp = Date.now();

    const instance = axios.create({
      baseURL: `${
        config.binanceBaseUrl
      }/api/v3/historicalTrades?symbol=${symbol}&limit=${10}`,
      headers: {
        "X-MBX-APIKEY": config.binanceApiKey,
        "Content-Type": "application/json",
      },
    });

    const response = await instance.get();

    const data = await response.data;

    return data;
  } catch (err) {
    console.log("[HistoricalTradesFetch]: ", err);
  }
};

console.log(await fetchHistoricalTrades("ETHBTC"));

const analyzeTrades = async (
  trades,
  startDateMiliSeconds,
  endDateMiliSeconds
) => {
  const chosenDateRange = trades.filter(
    (trade) =>
      startDateMiliSeconds <= trade.time && trade.time >= endDateMiliSeconds
  );
};

server.listen(config.port, () => {
  console.log(`Server listening on port: ${config.port}`);
});
