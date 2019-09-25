const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    if(net.Socket){console.log("Successfully connected to the game server");}
    conn.write("Name: Jad");
  //  setInterval( () => { setTimeout( () => { conn.write("Move: up");}, 50);}, 51);
  });
  return conn;
}


console.log('Connecting ...');
module.exports = connect;
