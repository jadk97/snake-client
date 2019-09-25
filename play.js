
const connect = require("./client");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  const handleUserInput = () => {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    });
  }
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  handleUserInput();
  stdin.resume();
  return stdin;
};



setupInput();