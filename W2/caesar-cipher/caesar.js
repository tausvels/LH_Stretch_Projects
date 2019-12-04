// console.clear();
// const input = 'hello world';
// const input2 = 'abcdefg';

const encrypt = function(plaintext, key) {
    let ascNum, chrBack, chrCode, state = Boolean; 
    let ascNumArr = []; 
    const plaintextArr = plaintext.split("");
    if(plaintextArr.length < 2){ // single character
        if(plaintextArr[0] === plaintextArr[0].toLowerCase()){
            ascNum = plaintextArr[0].charCodeAt();
            state = true;
        }else{
            ascNum = (plaintextArr[0].toLowerCase()).charCodeAt(); // changing it to lowerCase
            state = false;
        }
        if(key < 0){
            chrCode = (ascNum + key) + 26;
            (chrCode > 123) ? chrCode = chrCode - 26 : chrCode;
            chrBack = String.fromCharCode(chrCode);
            (state) ? chrBack : chrBack.toUpperCase()
        }else{
            chrCode = ascNum + key;
            (chrCode > 123) ? chrCode = chrCode - 26 : chrCode;
            chrBack = String.fromCharCode(chrCode);
            if(state){return chrBack} else{return chrBack.toUpperCase()}
        }
        return chrBack;
    }else{
        plaintextArr.forEach((char) =>{
            if(char !== " "){
                let charNumAfterKey = char.charCodeAt() + key; //console.log(charNumAfterKey + ' ==> ' + String.fromCharCode(charNumAfterKey));
                if(charNumAfterKey > 123) {
                    charNumAfterKey = (charNumAfterKey -26); //console.log('IMPORTANT!! ==> ' + charNumAfterKey)
                    ascNumArr.push(String.fromCharCode(charNumAfterKey));    
                }
                else{
                    charNumAfterKey + key;
                    ascNumArr.push(String.fromCharCode(charNumAfterKey));
                }
            }else{
                ascNumArr.push(" ")
            }
        })
        //console.log(ascNumArr)
        //console.log(ascNumArr.join(""));
    }
    return ascNumArr.join("");
};
//console.log(encrypt(input, 5))

module.exports = encrypt;