const fs = require('fs');
const colors = require("colors");
const commandTypes = require('./commandTypes');

/**
 * @param {number} type 
 * @param {string=} title
 */
const handleData = (type, title = null) => {
    const data = fs.readFileSync('datadb.json');
    /** @type {Array} */
    let tasks = JSON.parse(data);
    const taskExists = tasks.some(task => task.title === title);

    if([commandTypes.Add, commandTypes.Remove].includes(type)) {
        if(type === commandTypes.Add && taskExists) {
            return console.log("takie zadanie juz istnieje".red.bgBlack)
        } else if(type === commandTypes.Remove && !taskExists) {
            return console.log("Nie mogę usunąć zadania, które nie istnieje".red.bgBlack)
        }
    }
    let dataJSON = "";
    switch (type) {
        case commandTypes.Add:
            const id = +(new Date());
            tasks.push({id,title});
            dataJSON = JSON.stringify(tasks);
            fs.writeFileSync('datadb.json', dataJSON);
            console.log(`dodaje zadanie ${title}`.white.bgGreen);
            break;

        case commandTypes.Remove:
            const index = tasks.findIndex(task => task.title === title);
            tasks.splice(index,1);
            // tasks = tasks.filter(task => task.title !== title);
            dataJSON = JSON.stringify(tasks);
            fs.writeFile('datadb.json', dataJSON, 'utf8', (err) => {
                if(err) throw err;
                console.log(`zadanie ${title} zostalo usuniete`.white.bgGreen);
            })
            break;

        case commandTypes.List:
            if(tasks.length) {
                console.log(`Lista zadań obejmuje ${tasks.length} pozycji. Do zrobienia masz: `);
                tasks.forEach((task,index) => {
                    return console.log(`\t ${index + 1}. ${task.title}.  \n`)
                });
            } else {
                console.log('Zrobiliśmy wszystko!');
            }
            break;
    }
}
module.exports = handleData;