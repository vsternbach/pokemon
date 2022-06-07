import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { ErrorCode } from '../error-codes';

export const secret = 'secret';

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;
    if (verify(token, secret)) {
      next();
    }
  } catch (e) {
    throw ErrorCode.Unauthorized;
  }
};
