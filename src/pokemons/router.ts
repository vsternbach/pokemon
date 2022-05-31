import pokemonCtrl from './controller';
import { Router } from 'express';

const router = Router();

export default router
  // get all
  .get('/', pokemonCtrl.getAll)
  // get by id
  .get('/:id', pokemonCtrl.getOne);
// // create
// .post("/api/pokemons", create)
// // update
// .put("/api/pokemons/:id", update)
// // delete
// .delete("/api/pokemons/:id", deleteOne);
