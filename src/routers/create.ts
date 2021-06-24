import { Router } from "express";
import { createTag as CreateTagController } from "../controllers/createTag"
import { createUser as CreateUserController } from "../controllers/createUser"
import { ensureAdmin } from "../middlewares/ensureAdmin";

const router = Router();
const createTagController = new CreateTagController()
const createUserController = new CreateUserController()

router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle)

export { router }