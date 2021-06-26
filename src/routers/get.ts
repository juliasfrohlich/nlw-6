import { Router } from "express";
import { listUserSendCompliments as ListUserSendComplimentsController } from "../controllers/listUserSendCompliments"
import { listUserReceiveCompliments as ListUserReceiveComplimentsController } from "../controllers/listUserReceiveCompliments"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { listTags as ListTagsController } from "../controllers/listTags";
import { listUsers as ListUsersController } from "../controllers/listUsers";

const router = Router();
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)

export { router }