//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(string) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        const character = string[i];

        if (character !== '!') {
            newString += character;
        }
    }
    return newString;
}

console.log(removeExclamationMarks('Hello! World!'));
console.log(removeExclamationMarks('!!!aaaaa!!!!'));
