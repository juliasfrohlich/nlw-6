import { Router } from "express";
import { listUserSendCompliments as ListUserSendComplimentsController } from "../controllers/listUserSendCompliments"
import { listUserReceiveCompliments as ListUserReceiveComplimentsController } from "../controllers/listUserReceiveCompliments"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)


export { router }