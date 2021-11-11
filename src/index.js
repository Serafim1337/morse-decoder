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
    '     ':  ' ',
};

function decode(expr) {

    let word = '';
    let arr = [];

    for(let i = 0; i < (expr.length / 10); i++) {
      arr.push(expr.substr(i*10,10));
    }
 
    for(let i = 0; i < arr.length; i++) {

      let str = arr[i].toString();
      let morse = '';
  
    for(let j = 0; j < (str.length / 2); j++) {
      
      if(str.substr(j*2,2) === '10') {
        morse += '.';
      }
      if(str.substr(j*2,2) === '11') {
        morse += '-';
      }
      if(str.substr(j*2,2) === '**') {
        morse += ' '; 
      }
  
    }
    word += MORSE_TABLE[morse];
  }

  return word;
}

module.exports = {
    decode
}