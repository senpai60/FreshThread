import User from "../models/User.js";
import { sendSuccess, sendError } from "../utils/responseHandler.js";
import { generateToken } from "../utils/generateToken.js";
import { setCookies } from "../utils/setCookies.js";
import { logger } from "../utils/logger.js";

import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  try {
    const { username, email, firstName, lastName, password, gender } = req.body;
    if (!username || !email || !firstName || !password || !gender)
      return sendError(res, 400, "please fill the required field");

    logger.warn(`username is: ${username}`);
    logger.warn(`email is: ${email}`);
    logger.warn(`firstName is: ${firstName}`);
    logger.warn(`lastName is: ${lastName}`);
    logger.warn(`password is: ${password}`);
    logger.warn(`gender is: ${gender}`);

    const existingUser = await User.findOne({ email: email });
    if (existingUser) return sendError(res, 409, "user already exist");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      firstName,
      lastName,
      password: hashedPassword,
      gender,
    });

    const token = generateToken(newUser);
    setCookies(res, token);

    sendSuccess(res, 200, "OK");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return sendError(res, 400, "please fill the required field");

    const existedUser = await User.findOne({ email: email });
    if (!existedUser)
      return sendError(
        res,
        401,
        "please check your email or password or create a new account"
      );
    const validPassword = await bcrypt.compare(password, existedUser.password);
    if (!validPassword)
      return sendError(
        res,
        401,
        "please check your email or password or create a new account"
      );

    const token = generateToken(existedUser);
    setCookies(res, token);
    sendSuccess(res, 200, "OK");
  } catch (err) {
    next(err);
  }
};



export const signout = async (req, res, next) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/'
    });
    
    sendSuccess(res, 200, "Logged out successfully");
  } catch (err) {
    next(err);
  }
};


