import { logger } from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode;

  if (!statusCode || (statusCode >= 200 && statusCode < 300)) statusCode = 500;

  const errorDetails = `[${req.method}] ${req.originalUrl} → ${statusCode} | ${err.message}`;
  logger.error(errorDetails);

  if (process.env.NODE_ENV !== "production" && err.stack) {
    logger.debug(err.stack);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
