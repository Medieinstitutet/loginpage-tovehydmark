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
        showLogoutBtn();
        removeUserInput();

    } else if ((anvandarnamn.value != userNameJanne) || (losenord.value != rightLoginPassword)) {

        wrongDetails()

    } else {

        notLoggedIn()
    }

});

logoutBtn.addEventListener("click", function() {
    //Show "not logged in"-view
    notLoggedIn();
    showLoginForm();

    //Hide logout button
    const removeLogoutBtn = document.getElementById("logoutBtn");
    removeLogoutBtn.remove();

    //Clear login form
    document.getElementById("userName").value = "";
    document.getElementById("userPassword").value = "";

});

/**Function hides the login form */
function removeUserInput() {
    const removeUserNameInput = document.getElementById("userName");
    removeUserNameInput.remove();

    const removeUserPassword = document.getElementById("userPassword");
    removeUserPassword.remove();

    const removeLoginBtn = document.getElementById("loginBtn");
    removeLoginBtn.remove();
}