import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class createUser {

  async execute ({ name, email, admin, password }) {
    const usersRepository = getCustomRepository(UsersRepositories)

    if (!email) {
      throw new Error("Incorrect e-mail.")
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error("E-mail already in use!")
    }

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    })

    await usersRepository.save(user)

    return user

  }

}

export {createUser}