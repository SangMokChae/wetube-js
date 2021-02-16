import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

// req = request Object, res = response Object
// res.send 는 req받은 것을 화면으로 보내주는 것이다.
const handleHome = (req, res) => res.send('Hello from ME!!');

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// routes
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter); // use는 router 안에 userRouter전부를 사용하겠다는 의미를 가진다.

export default app;
// export default 를 사용하여 다른 파일에서 이파일을 불러올때 middleware와 routes를 사용할 수 있게 해준다.