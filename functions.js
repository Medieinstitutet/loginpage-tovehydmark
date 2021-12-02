showLoginForm();
notLoggedIn()

//GET DATA FROM LS TO LOGIN
let rightLoginUser = localStorage.getItem("userName");
let rightLoginPassword = localStorage.getItem("password");

let anvandarnamn = document.getElementById("userName")
let losenord = document.getElementById("userPassword")

//CREATE CLICK EVENT FOR LOGIN BUTTON
loginBtn.addEventListener("click", function() {

    if ((anvandarnamn.value == rightLoginUser) && (losenord.value == rightLoginPassword)) {
        loggedIn();
        // + change login form to logout button

    } else if ((anvandarnamn.value != userNameJanne) || (losenord.value != rightLoginPassword)) {
        wrongDetails()
    }

});