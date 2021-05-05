const net = require("net");
const setupInput = require("./input");
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  //setupInput.setupInput;
  conn.on("connect", () => {
      console.log('Successfully connected to game server');
      conn.write('Name: BOB');
      process.stdin.on('data',(key) =>{
        //process.stdout.write('.......');
        setupInput(key);
        });
  });
  return conn;
};

//console.log("Connecting ...");
module.exports = connect;