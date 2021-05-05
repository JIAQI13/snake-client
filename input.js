let connection;
const setupInput = function (key,conn) {
    connection = conn;
    const stdin = process.stdin;
    //console.log(stdin);
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    handleUserInput(key,conn);
    return stdin;
};
const handleUserInput = function (key,conn) {
    //process.stdout.write('.......');
    if (key === '\u0003') {
        //console.log('this is the if exit');
        process.exit();
    }
    if (key == '\u0077') {
        conn.write('Move: up');
    }
    if (key == '\u0061') {
        conn.write('Move: left');
    }
    if (key == '\u0064') {
        conn.write('Move: right');
    }
    if (key == '\u0073') {
        conn.write('Move: down');
    }
    if (key == '\u0065') {
        conn.write('Say: pp123');
    }
};
module.exports = setupInput;
