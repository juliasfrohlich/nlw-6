import { Request, Response } from "express";
import { listUserSendCompliments as ListUserSendComplimentsService } from "../services/listUserSendCompliments"

class listUserSendCompliments {

  async handle(request: Request, response: Response) {

    const {user_id} = request

    const listUserSendComplimentsService = new ListUserSendComplimentsService()
    
    const compliments = await listUserSendComplimentsService.execute(user_id)

    return response.json(compliments)

  }
}

export {listUserSendCompliments}