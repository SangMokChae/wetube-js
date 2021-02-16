const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
// listen이 실행하라고 명령하는 방식이다.