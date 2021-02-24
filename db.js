import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/we-tube",
  {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
  } //새로운 버전이 포함하고 있는 기능들을 사용하지 않기 위해서 사용
);
// 'mongodb://localhost: portnumber(default: 27017) /db name '

const db = mongoose.connection;

const handleOpen = () => console.log("✔ Connected to DB");
const handleError = (error) => console.log(`❌ Error on DB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
// once()한번만 실행되는 함수
// db를 init에 연결해준다.