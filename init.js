import dotenv from 'dotenv';
import "./db";
import app from "./app";

dotenv.config();
// env를 사용해서 오픈하고 싶지 않은 키를 숨길 수 있다.

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () => 
  console.log(`✔ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);