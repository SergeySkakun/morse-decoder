const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let listOfEncodedSymbols = expr.match(/.{10}/g);
    let listOfMorseSymbols = listOfEncodedSymbols.map((element) => {
        if(element[0]=== '*') {
            return ' ';
        }

        let decodedMorseSymbol = element.match(/1\d/g).reduce((acc, element) => {
            if(element === '10') {
                return acc + '.';
            }
            else {
                return acc + '-';
            }
        }, '');

        return MORSE_TABLE[decodedMorseSymbol];
    });

    return listOfMorseSymbols.join('');
}

module.exports = {
    decode
}