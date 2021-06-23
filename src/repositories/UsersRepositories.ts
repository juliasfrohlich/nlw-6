import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UserRepositories extends Repository<User>{
  
}

export { UserRepositories }