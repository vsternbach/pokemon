import PokemonCtrl from './controller';
import { NextFunction, Request, Response, Router } from 'express';
import { ErrorCode } from '../error-codes';

const router = Router()
  .get('/', PokemonCtrl.getAll)
  .get('/:id', PokemonCtrl.getOne)
  .post('/', PokemonCtrl.create)
  .put('/:id', PokemonCtrl.update)
  .delete('/:id', PokemonCtrl.deleteOne)
  .use((err: ErrorCode, req: Request, res: Response, next: NextFunction) => {
    switch (err) {
      case ErrorCode.NotFound:
          res.status(400).send('Pokemon not found');
        break;
      default:
        throw err
    }
  });
export default router;
