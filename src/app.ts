import express, { Application, NextFunction, Request, Response } from 'express';
import users from './users/db';
import { sign, verify } from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import router from './pokemons/router';

const app: Application = express();

const port = 3000;
const secret = 'secret';

app.use(cookieParser());

app.get('/auth', (req: Request, res: Response) => {
  const { user, password } = req.query;
  if (users.find((u) => u.user === user && u.password === password)) {
    const token = sign({ user }, secret);
    res.cookie('token', token);
    res.send('ok');
  } else {
    throw 'Invalid user';
  }
});

app.get('/protected', (req: Request, res: Response) => {
  try {
    const { token } = req.cookies;
    if (verify(token, secret)) {
      res.send('ok');
    } else {
      throw 'Unauthorized';
    }
  } catch (e) {
    throw 'Server error';
  }
});

app.use('/pokemon', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if ((err as any) === 'pokemon not found') {
    res.status(404).send(err);
  }
  res.status(500).send(err);
  // next();
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
