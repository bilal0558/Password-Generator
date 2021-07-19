const field = document.getElementById("password-field");
const body = document.getElementById('body');

//Creating pool of characters to be used for the password.
const capsAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const smallAlphabets = "abcdefghijklmnopqrstuvwxyz"; 
const numbers = "0123456789"; 
const specialSymbols = "!@#$%^&*_=+-/.?<>)"; 
let pool = capsAlphabets + smallAlphabets + numbers + specialSymbols;


//Minimum-Maximum letters in the password.
const min=8;
const max=15;

function generatePassword(){
    while(true){
        let password="";
        let length = Math.floor(Math.random() * (max - min + 1) + min);
        let c;
        for(let i=0; i<length;i++) 
        { 
            let pick = Math.floor(Math.random() * (pool.length - 0 + 1) + 0);
            c= pool.charAt(pick);
            password = password + c;
        }
        if(checkPassword(password)){
            field.setAttribute("value", password);
            /*if(password.length %2 == 0)
                body.setAttribute('style','background : red;');
            else
                body.setAttribute('style','background : blue;');*/
            return password;
        }
        else{
            continue;
        }
            
    }    
}


//Function to check if the generated password is valid.
function checkPassword(password){
    let checkAlpha=false, checkCapAlpha=false, checkSymbol=false, checkNumber=false;
    let ascii, i;
    
    for(i=0; i<password.length;i++){
        ascii=password.charCodeAt(i);
        if((ascii>=33 && ascii<=47)||(ascii>=58 && ascii<=64)||(ascii>=91 && ascii<=96)){
            checkSymbol=true;
            break;
        }
    }
    for(i=0; i<password.length;i++){
        ascii=password.charCodeAt(i);
        if(ascii>=48 && ascii<=57){
            checkNumber=true;
            break;
        }
    }
    for(i=0; i<password.length;i++){
        ascii=password.charCodeAt(i);
        if(ascii>=65 && ascii<=90){
            checkCapAlpha=true;
            break;
        }
    }
    for(i=0; i<password.length;i++){
        ascii=password.charCodeAt(i);
        if(ascii>=97 && ascii<=122){
            checkAlpha=true;
            break;
        }
    }
    if(checkAlpha && checkCapAlpha && checkNumber && checkSymbol){
        return true;
    }
    return false;
}
