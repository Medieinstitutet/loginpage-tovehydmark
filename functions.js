//Display not-logged in-view
showLoginForm();
notLoggedIn()

//Saves login details to localStorage when you klick login-button
loginBtn.addEventListener("click", function() {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("password", userPassword.value);
})

//Removes login details from localStorage
logoutBtn.addEventListener("click", function() {
    localStorage.clear();
});

/**This function keeps the logged in user in the right view, even when page is updated */
function stayOnSite() {
    //Fetches the login details from localStorage
    let theUsername = localStorage.getItem("userName");
    let thePassword = localStorage.getItem("password");
    if ((theUsername == "janne") && (thePassword == "test")) {
        loggedIn();
        showLogoutBtn();
        removeUserInput();
    } else if ((theUsername == "tove") && (thePassword == "skoj")) {
        loggedIn();
        showLogoutBtn();
        removeUserInput();
    }
}

let anvandarnamn = document.getElementById("userName")
let losenord = document.getElementById("userPassword")

let rightLoginUser = localStorage.getItem("userName");
let rightLoginPassword = localStorage.getItem("password");


loginBtn.addEventListener("click", function() {

    if ((anvandarnamn.value == userNameJanne) && (losenord.value == userPasswordTest)) {

        loggedIn();
        showLogoutBtn();
        removeUserInput();

    } else if ((anvandarnamn.value == secondUserName) && (losenord.value == secondUserPassword)) {
        loggedIn();
        showLogoutBtn();
        removeUserInput();

    } else if ((anvandarnamn.value != userNameJanne) || (losenord.value != userPasswordTest)) {

        wrongDetails()
        localStorage.clear()

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



stayOnSite();