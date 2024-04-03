console.log("is running")
const form = document.getElementById('form');

form.addEventListener("submit",  function(event) {
    event.preventDefault()
    const email = document.getElementById("email")
    const user = document.getElementById("username")
    const pass = document.getElementById("password")

    emailInput = email.value
    userInput = user.value
    passInput = pass.value
    
    if (checkEmail(emailInput) && checkPass(passInput) && checkUser(userInput)){
        window.alert("Thank you for signing up");
    }
    if(!(checkEmail(emailInput))){
        window.alert("This is an invalid email");
    }
    if(!(checkPass(passInput))){
        window.alert("This is an invalid password");
    }
    if(!(checkUser(userInput))){
        window.alert("This is an invalid username");
    }

})






function checkEmail(address){
    if (address.match(
/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
{
    return true
}
else{
    return false
    }}

function checkUser(username){
    if (username.length >= 6){
        return true
    }
    else{
        return false
    }}

function checkPass(password){
    if (password.match(/^(?=.*[A-Z])(?=.*\d).{8,}$/))
        {
            return true
        }
        else{
            return false
            }}
