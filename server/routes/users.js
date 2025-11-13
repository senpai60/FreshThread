import express from "express";
const router = express.Router();

import { sendError,sendSuccess } from "../utils/responseHandler.js";
import { signup,login ,signout} from "../controllers/users.controller.js";
import { verifyAuth } from "../middlewares/verifyAuth.js";

router.post("/signup", async (req, res, next) => {
  await signup(req, res, next);
});
router.post("/login", async (req, res, next) => {
  await login(req, res, next);
});

router.post('/signout',async(req,res,next)=>{
  await signout(req,res,next)
})

router.get('/verify',verifyAuth,(req,res,next)=>{
  try {
    sendSuccess(res,200,"OK")
  } catch (err) {
    next(err)
  }
})

export default router;
