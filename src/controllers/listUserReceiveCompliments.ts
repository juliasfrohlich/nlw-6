import { Request, Response } from "express";
import { listUserReceiveCompliments as ListUserReceiveComplimentsService } from "../services/listUserReceiveCompliments"

class listUserReceiveCompliments {

  async handle(request: Request, response: Response) {

    const {user_id} = request

    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService()
    
    const compliments = await listUserReceiveComplimentsService.execute(user_id)

    return response.json(compliments)

  }
}

export {listUserReceiveCompliments}