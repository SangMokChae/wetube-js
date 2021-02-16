const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
}

// req = request Object, res = response Object
// res.send 는 req받은 것을 화면으로 보내주는 것이다.
const handleHome = (req, res) => {
  res.send('Hello from HOME!!');
};

const handleProfile = (req, res) => {
  res.send("You are on my profile");
}

// routes
app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
// listen이 실행하라고 명령하는 방식이다.