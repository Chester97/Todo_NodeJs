const validateAdd = (text) => {
    if(typeof text !== 'string') {
        return console.log("Wprowadzona wartość nie jest tekstem".red);
    }else if(text.length < 6) {
        return console.log("Wprowadzona wartość jest zbyt krótka".red);
    } else {
        return true;
    }
}
module.exports = {validateAdd};