
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const tel = document.querySelector('#tel')
const message = document.querySelector('#text')
const btn = document.querySelector('#btn4')
btn.addEventListener("click",checking)


// initializing a function to check for any inconvenience
function checking(){


}


// initializing a function to check the length of a name
function checkName(){
    let val1 = name.value
    let x = val1.length
    // checking if the length of name is less than or equal to 5
    if (x <= 5){
        return false
    }
    return true 
}

// initializing a function to check the length of a message
function checkMessage(){
    let val2 = message.value
    let y = val2.length
    // checking if length of message is less than or equal to 100
    if (y < 100){
        return false
    }
    return true
}


// initializing a function to check the length of an email
function checkEmail(){
    let val3 = email.value
    let result = val3.includes("@")
    if (result =true){
        // check elements before the @
    }
    else{return result}
}