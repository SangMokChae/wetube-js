import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

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

app.listen(PORT, handleListening);
// listen이 실행하라고 명령하는 방식이다.