import { Request, Response } from "express";
import {listUsers as ListUsersService} from "../services/listUsers"

class listUsers {
  async handle(request: Request, response: Response) {

    const listUsersService = new ListUsersService()

    const users = await listUsersService.execute()

    return response.json(users)
    
  }
}

export { listUsers }