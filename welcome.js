const welcome = () => {
    return console.log("--------WITAJ W APLIKACJI TODO---------"
                        +'\n'+'Jeśli chcesz dodać zadanie do listy użyj : --add="tresc zadania"'
                        +'\n'+'Jeśli chcesz usunąć zadanie do listy użyj : --remove="tresc zadania"'
                        +'\n'+'Jeśli chcesz wyświetlić wszystkie zadania użyj : --list');
}

module.exports = welcome;