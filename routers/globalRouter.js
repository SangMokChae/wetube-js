import express from "express";
import { 
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes"; // ..밖의 자료위치
const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home); // controller에 export를 해줘야 사용할 수 있는 기능이다.
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;