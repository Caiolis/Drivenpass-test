import { userController } from "../controllers/user.controller";
import { Router } from "express";
import { validateBody } from "@/middlewares/validation.middleware";
import { signUpSchema } from "@/schemas";

export const userRouter = Router();

userRouter.post('/sign-up', validateBody(signUpSchema), userController.signUp);