import express, { Application, NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import router from './pokemons/router';

const app: Application = express();

const port = 3000;

app.use(cookieParser());

app.use('/pokemon', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(err);
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
