import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
  logger.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
} else {
  logger.debug("Using .env.example file to supply config environment variables");
  dotenv.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}

export const PORT = process.env.PORT || 3000;
export const ENV = process.env.NODE_ENV || "development";
export const SECRET_KEY = process.env.SECRET_KEY;
export const MONGODB_URI = process.env.MONGODB_URL;

if (!SECRET_KEY) {
  logger.error("No client secret. Set SECRET_KEY environment variable.");
  process.exit(1);
}

if (!MONGODB_URI) {
  logger.error("No mongo connection string. Set MONGODB_URI environment variable.");
  process.exit(1);
}
