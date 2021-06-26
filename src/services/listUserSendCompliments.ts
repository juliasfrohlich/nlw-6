import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class listUserSendCompliments {

  async execute(user_id: String) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    })

    return compliments

  }

}

export { listUserSendCompliments }