
const alphabetum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function createKey(length, key){
    let keyIndex = 0;
    let result = "";
    for(let i = 0; i < length; i++){
        result += key[(keyIndex++) % key.length];   
    }
    return result;
}

function encipher(plainText, key){
    let nKey = createKey(plainText.length, key);
    let cipherText = "";
    for(let i = 0; i < plainText.length; i++){

        let k = alphabetum.indexOf(nKey[i]);
        let m = alphabetum.indexOf(plainText[i])
        let index = (k- m + 26 ) % 26;
        
        cipherText += alphabetum.charAt(index); 
    }
    return cipherText;
}

function decipher(cipherText, key){
    let nKey = createKey(cipherText.length, key);
    let plainText = "";
    for(let i = 0; i < cipherText.length; i++){

        let k = alphabetum.indexOf(nKey[i]);
        let m = alphabetum.indexOf(cipherText[i])
        let index = (k- m + 26 ) % 26;
        
        plainText += alphabetum.charAt(index); 
    }
    return plainText;
}

export {encipher, decipher}
