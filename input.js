let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  const handleUserInput = (connection) => {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      if (key === '\u0077'){
        connection.write("Move: up");
       // console.log("up");
      }
      if (key === '\u0061'){
        connection.write("Move: left");
       // console.log("left");
      }
      if (key === '\u0073'){
        connection.write("Move: down");
       // console.log("down");
      }
      if(key === "\u0064"){
        connection.write("Move: right");
       // console.log("right");
      }
      if (key === "z"){
        connection.write("Say: can't catch me!");
      }
      if (key === "x"){
        connection.write("Say: you're too slow!");
      }
      if (key === "c"){
        connection.write("Say: too easy");
      }
    });
  }
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  handleUserInput(connection);
  stdin.resume();
  return stdin;
};

///setupInput(connection);

module.exports =
  {
    setupInput
  };
