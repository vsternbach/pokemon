import pokemonCtrl from './controller';
import { Router } from 'express';

const router = Router();

export default router
  // get all
  .get('/', pokemonCtrl.getAll)
  // get by id
  .get('/:id', pokemonCtrl.getOne)
  // create
  .post('/', pokemonCtrl.create)
  // update
  .put('/:id', pokemonCtrl.update)
  // delete
  .delete('/:id', pokemonCtrl.deleteOne);
