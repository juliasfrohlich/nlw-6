import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class createUser {

  async execute ({ name, email, admin, password }) {
    const usersRepository = getCustomRepository(UserRepositories)

    if (!email) {
      throw new Error("Incorrect e-mail.")
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error("User already exists!")
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
      password
    })

    await usersRepository.save(user)

    return user

  }

}

export {createUser}