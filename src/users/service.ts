import users from './db';
import {sign} from "jsonwebtoken";
import {secret} from "./middleware";
import {ErrorCode} from "../error-codes";

export default class UserService {
  static auth(user: string, password: string) {
    if (users.find((u) => u.user === user && u.password === password)) {
      const token = sign({ user }, secret);
      return token;
    } else {
      throw ErrorCode.NotFound
    }
  }
}
