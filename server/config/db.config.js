import mongoose from "mongoose";
import { ENV_CONFIG } from "./env.config.js";
import { logger } from "../utils/logger.js";

export const connectDB = async () => {
  // Add event listeners BEFORE connecting
  mongoose.connection.on("connecting", () => {
    logger.info("🔄 Connecting to MongoDB...");
  });

  mongoose.connection.on("connected", () => {
    logger.info("✅ MongoDB connected!");
  });

  mongoose.connection.on("error", (err) => {
    logger.error("❌ MongoDB connection error:", err);
  });

  try {
    logger.info("Attempting to connect to:", ENV_CONFIG.MONGODB_URI);
    await mongoose.connect(ENV_CONFIG.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of hanging
    });
    logger.info("🥬MONGODB CONNECTED SUCCESSFULLY🥬");
  } catch (err) {
    logger.info("Connection failed:", err.message);
  }
};
