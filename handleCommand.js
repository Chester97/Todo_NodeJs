const { validateAdd } = require("./form/validators");
const handleData = require("./handleData");
const welcome = require("./welcome");
const parseArgs = require('minimist');
const command = parseArgs(process.argv.slice(2,3));
delete command._
const commandTypes = require('./commandTypes')

const handleCommand = ({add, remove, list}) => {
    if(add) {
        if(validateAdd(add)) {
            handleData(commandTypes.Add, add);
        }
    } else if(remove) {
        if(validateAdd(remove)) {
            handleData(commandTypes.Remove,remove);
        }
    } else if(list || list === "") {
        handleData(commandTypes.List);
    } else if(Object.entries(command).length === 0 && command.constructor === Object){
        return welcome();
    }else {
        return console.log("NIE ROZUMIEM POLECENIA".red.bgBlack)
    }
}
module.exports = handleCommand;