function codage(s) {
    function charToBinary(char) {
        if (char.length !== 1) {
            throw new Error('La fonction attend un seul caractère.');
        }
        let code = char.charCodeAt(0);
        let binary = code.toString(2);
        while (binary.length < 7) {
            binary = '0' + binary;
        }
        return binary;
    }

    let binaryString = s.split('').map(charToBinary).join('');
    let messageCode = '';
    let i = 0;

    while (i < binaryString.length) {
        let bit = binaryString[i];
        let typeBloc = bit === '1' ? '0' : '00';
        let compteur = 0;

        while (i < binaryString.length && binaryString[i] === bit) {
            compteur++;
            i++;
        }

        if (messageCode !== '') {
            messageCode += ' ';
        }
        messageCode += typeBloc + ' ' + '0'.repeat(compteur);
    }

    return messageCode;
}

const MESSAGE = readline();
let bin = codage(MESSAGE);
console.log(bin);
