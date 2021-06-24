import { Router } from "express";
import { createTag as CreateTagController } from "../controllers/createTag"
import { createUser as CreateUserController } from "../controllers/createUser"
import { createCompliment as CreateComplimentController } from "../controllers/createCompliment"
import { ensureAdmin } from "../middlewares/ensureAdmin";

const router = Router();
const createTagController = new CreateTagController()
const createUserController = new CreateUserController()
const createComplimentController = new CreateComplimentController()

router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle)
router.post("/compliments", createComplimentController.handle)

export { router }