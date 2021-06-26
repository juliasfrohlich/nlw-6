import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  
  const { user_id } = request

  const usersRepositories = getCustomRepository(UsersRepositories)

  const { admin } = await usersRepositories.findOne(user_id)


  if (admin) {
    return next()
  }

  return response.status(403).json({
    error: " Unauthorized. You don't have acess to this feature."
  })
}