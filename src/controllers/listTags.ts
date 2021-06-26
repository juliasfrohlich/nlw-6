import { Request, Response } from "express";
import {listTags as ListTagsService} from "../services/listTags"

class listTags {
  async handle(request: Request, response: Response) {

    const listTagsService = new ListTagsService()

    const tags = await listTagsService.execute()

    return response.json(tags)
    
  }
}

export {listTags}