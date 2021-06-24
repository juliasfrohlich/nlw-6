import { Request, Response } from "express";
import {createTag as CreateTagService} from "../services/createTag"

class createTag {
  async handle(request: Request, response: Response) {
    const { name } = request.body
    
    const createTagService = new CreateTagService()

    const tag = await createTagService.execute(name)

    return response.json(tag)
  }
}

export {createTag}