const name = document.querySelector('#name')
const email = document.querySelector('#email')
const tel = document.querySelector('#tel')
const message = document.querySelector('#text')
const btn = document.querySelector('#btn4')
btn.addEventListener("click",checking)
function checking(){


}


function checkName(){
    let val1 = name.value
    let x = val1.length
    if (x <= 5){
        return false
    }
    return true 
}

function checkMessage(){
    let val2 = message.value
    let y = val2.length
    if (y <= 50){
        return false
    }
    return true
}