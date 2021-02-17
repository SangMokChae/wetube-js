import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

import routes from "./routes";

const app = express();

app.set('view engine', "pug");

// middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
// export default 를 사용하여 다른 파일에서 이파일을 불러올때 middleware와 routes를 사용할 수 있게 해준다.