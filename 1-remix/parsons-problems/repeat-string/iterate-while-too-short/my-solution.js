function repeatString(text = '', repetitions = 1) {
    let repeatedText = '';

    for (let i = 0; i < repetitions; i++) {
        // let char = text[i];

        repeatedText += text;
    }
    return repeatedText;
}

console.log(repeatString('hello ', 5));
