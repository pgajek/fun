import dotenv from "dotenv";

dotenv.config();

export const config = {
  binanceApiKey: process.env.BINANCE_API_KEY,
  binanceSecret: process.env.BINANCE_API_SECRET,
  port: 3000,
};
