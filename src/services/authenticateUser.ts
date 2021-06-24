import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { sign } from "jsonwebtoken"


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class authenticateUser {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)
    
    const user = await usersRepositories.findOne({
      email
    })

    if (!user) {
      throw new Error("Email or Passoword incorret. Please, try again.")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email or Passoword incorret. Please, try again.")
    }

    const token = sign({
      email: user.email
    }, "301f7faecb981252e2e85d2d47e30141", {
      subject: user.id,
      expiresIn: "1d"
    })

    return token
  }
}

export { authenticateUser }