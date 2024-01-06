
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close =document.getElementById('close');
//opening the modal
open.addEventListener('click',()=>{
    modal_container.classList.add('show')
})
//closing the modal
close.addEventListener('click',()=>{
    modal_container.classList.remove('show')
})
//password genetor logic
const resultE1 =document.getElementById('result')
const lengthE1=document.getElementById('length')
const uppercaseE1= document.getElementById('uppercase')
const lowercaseE1=document.getElementById('lowercase')
const numbersE1=document.getElementById('numbers')
const symbolsE1=document.getElementById('symbols')
const generateE1=document.getElementById('generate')
const clipboardE1=document.getElementById('clipboard')

const randomFunc ={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol,
};
clipboardE1.addEventListener('click',()=>{
    const textarea = document.createElement('textarea');
    const password = resultE1.innerText;

    if(!password){
        return;
    }
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');

});
generateE1.addEventListener('click',()=>{
    const length =+lengthE1.value;
    const hasLower=+lowercaseE1.checked;
    const hasUpper=+uppercaseE1.checked;
    const hasNumber= +numbersE1.checked;
    const hasSymbol=+symbolsE1.checked;
    resultE1.innerHTML=generatePassword(
        hasLower,
        hasNumber,
        hasUpper,
        hasSymbol,
        length
    )

})
function generatePassword(lower,number,upper,symbol,length){

    let generatedPassword =``;
    const typesCount =lower+upper+number+symbol;
    const typesArr=[ {lower},{upper},{number},{symbol}].filter(
        (item)=>Object.values(item)[0]
    );
    
 if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

//logic for generating the random password
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}
