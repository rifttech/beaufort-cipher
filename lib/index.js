
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
    return transform(plainText, key);
}

function decipher(cipherText, key){
    return transform(cipherText,key);
}

function transform(text, key){
    let nKey = createKey(text.length, key);
    let result = "";
    for(let i = 0; i < text.length; i++){

        let k = alphabetum.indexOf(nKey[i]);
        let m = alphabetum.indexOf(text[i]);
        let index = (k- m + 26 ) % 26;
        
        result += alphabetum.charAt(index); 
    }
    return result;
}

export {encipher, decipher}
