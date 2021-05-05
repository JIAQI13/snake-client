const setupInput = function (key) {
    const stdin = process.stdin;
    //console.log(stdin);
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    handleUserInput(key);
    return stdin;
};
const handleUserInput = function (key) {
    //process.stdout.write('.......');
    if (key === '\u0003') {
        //console.log('this is the if exit');
        process.exit();
    }
};
module.exports = setupInput;
