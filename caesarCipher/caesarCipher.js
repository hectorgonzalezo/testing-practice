function shiftCharBy(char, shift){
    const code = char.charCodeAt()
        // if it's lowercase
        if(code >= 97 && code <= 122){
            //wrap back if its beyond z
            return ((code - 97 + shift) % 26) + 97
        } else if ( code >= 65 && code <= 90){// If its uppercase
            return ((code - 65 + shift) % 26) + 65
        } else{
            return code
        }
}

function caesarCipher(string, shift = 3){
    const asciis = string.split('').map(letter => shiftCharBy(letter, shift))

    const encriptedString = String.fromCharCode(...asciis)
    return encriptedString
}

export default caesarCipher