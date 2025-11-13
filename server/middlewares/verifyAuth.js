import jwt from "jsonwebtoken";
import { ENV_CONFIG } from "../config/env.config.js";
import { sendError } from "../utils/responseHandler.js";

export const verifyAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return sendError(res, 401, "Access denied. No token provided");
    }

    // Verify token
    const decoded = jwt.verify(token, ENV_CONFIG.JWT_SECRET);

    req.user = {
      userId: decoded.userId,
      username: decoded.username,
      email: decoded.email,
    };

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return sendError(res, 401, "Token expired. Please login again");
    }
    if (err.name === "JsonWebTokenError") {
      return sendError(res, 401, "Invalid token");
    }
    return sendError(res, 500, "Internal server error");
  }
};
