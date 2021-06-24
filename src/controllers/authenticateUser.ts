import { Request, Response } from "express";
import { authenticateUser as AuthenticateUserService} from "../services/authenticateUser";


class authenticateUser {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body
    
    const authenticateUserService = new AuthenticateUserService()

    const token = await authenticateUserService.execute({
      email,
      password
    })

    return response.json(token)
  }
}

export { authenticateUser }