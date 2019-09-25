const net = require('net');

const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    if (net.Socket) { console.log("Successfully connected to the game server"); }
    conn.write("Name: Jad");
  });
  return conn;
}


console.log('Connecting ...');
module.exports =
  {
    connect
  };
