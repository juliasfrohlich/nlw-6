import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).end()
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, "301f7faecb981252e2e85d2d47e30141") as IPayload
    
    request.user_id = sub

    return next()

  } catch (err) {
      return response.status(401).end()
  }

  
  
}