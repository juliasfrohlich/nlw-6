import { Router } from "express";
import { authenticateUser as AuthenticateUserController } from "../controllers/authenticateUser"

const router = Router();
const authenticateUserController = new AuthenticateUserController()

router.post("/login", authenticateUserController.handle)

export { router }