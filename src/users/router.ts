import { NextFunction, Request, Response, Router } from 'express';
import { ErrorCode } from '../error-codes';
import UserCtrl from "./controller";

const router = Router()
  .get('/auth', UserCtrl.auth)
  .use((err: ErrorCode, req: Request, res: Response, next: NextFunction) => {
    switch (err) {
      case ErrorCode.NotFound:
          res.status(401).send('Bad User');
        break;
      default:
        throw err
    }
  });
export default router;
