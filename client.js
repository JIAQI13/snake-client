const net = require("net");
const setupInput = require("./input");
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //setupInput.setupInput;
  conn.on("connect", () => {
      console.log('Successfully connected to game server');
      conn.write('Name: BOB');
      process.stdin.on('data',(key) =>{
        //process.stdout.write('.......');
        setupInput(key,conn);
        });
  });
  return conn;
};

//console.log("Connecting ...");
module.exports = connect;