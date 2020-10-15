var hexlookup = {
    '0': '0000',
    '1': '0001',
    '2': '0010',
    '3': '0011',
    '4': '0100',
    '5': '0101',
    '6': '0110',
    '7': '0111',
    '8': '1000',
    '9': '1001',
    'a': '1010',
    'b': '1011',
    'c': '1100',
    'd': '1101',
    'e': '1110',
    'f': '1111',
    'A': '1010',
    'B': '1011',
    'C': '1100',
    'D': '1101',
    'E': '1110',
    'F': '1111'
  };
  
var binaryLookup = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F',
};

// DEPRECATED
export function hexToBinary(s) {
    var ret = '';
    for (var i = 0, len = s.length; i < len; i++) {
        ret += hexlookup[s[i]];
    }
    return ret;
}

// DEPRECATED
export function binToHex(s) {
    /*var ret = '';
    let lookupString = '';

    let bin = padBin(s);

    for (var i=0, len = bin.length; i < len; i += 4) {

        lookupString = [bin[i], bin[i+1], bin[i+2], bin[i+3]].join('');
           
        ret += binaryLookup[lookupString];
    }*/

    let decimalValue = parseInt(s, 2);
    return decimalValue.toString(16);
}

export function padBin(n) {
    let targetLength = 0;

    if (n.length % 4 != 0) {
        targetLength = n.length + (4 - n.length % 4);
    }
    else {
        targetLength = n.length;
    }

    n = n + '';
    return n.length == targetLength ? n : new Array(targetLength - n.length + 1).join('0') + n;
  }