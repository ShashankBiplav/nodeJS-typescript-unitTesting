import express from "express";
import { getUsersController, login, protectedController } from "../controllers";
import { isUser } from "../middleware/user.middleware";


const router = express.Router();

router.post("/users", getUsersController);

router.post("/auth", login);

router.put("/protected", isUser, protectedController);

export default router;