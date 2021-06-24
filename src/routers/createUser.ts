import { Router } from "express";
import {createUser as CreateUserController} from "../controllers/createUser"

const router = Router();
const createUserController = new CreateUserController()

router.post("/users", createUserController.handle)

export { router }