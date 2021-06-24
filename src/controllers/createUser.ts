import { Request, Response } from "express";
import { createUser as CreateUserService } from "../services/createUser"

class createUser {

  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body 

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, email, admin })
    
    return response.json(user)
  }

}

export { createUser}