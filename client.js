const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}


console.log('Connecting ...');
module.exports = connect;
