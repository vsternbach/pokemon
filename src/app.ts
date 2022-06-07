import express, { Application, NextFunction, Request, Response } from 'express';
import users from './users/db';
import { sign, verify } from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import pokemonRouter from './pokemons/router';
import {ErrorCode} from "./error-codes";
import userMiddleware from "./users/middleware";
import userRouter from "./users/router";

const app: Application = express();
const port = 3000;

app.use(cookieParser());

app.use('/', userRouter);
app.use('/pokemon', userMiddleware, pokemonRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  switch (err as ErrorCode) {
    case ErrorCode.Unauthorized:
      res.status(403).send('User Unauthorized');
      break;
    default:
      res.status(401).send('Unexpected error');
  }
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
