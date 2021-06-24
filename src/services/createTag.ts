import { getCustomRepository } from "typeorm"
import {TagsRepositories} from "../repositories/TagsRepositories"

class createTag {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if (!name) {
      throw new Error("Incorrect name!")
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    })
  
    if (tagAlreadyExists) {
      throw new Error("This tag already exists!")
    }

    const tag = tagsRepositories.create({
      name
    })

    await tagsRepositories.save(tag)

    return tag
  }
}

export {createTag}