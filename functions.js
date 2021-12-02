showLoginForm();
notLoggedIn()


//Sparar inloggningsuppgifterna till localStorage vid klick på logga-in-knapp
loginBtn.addEventListener("click", function() {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("password", userPassword.value);
})

//Tar bort inloggningsuppgifterna från localStorage
logoutBtn.addEventListener("click", function() {
    localStorage.clear();
});


function stayOnSite() {
    //Hämta inloggningsdetaljerna från LS
    let theUsername = localStorage.getItem("userName");
    let thePassword = localStorage.getItem("password");
    if (theUsername == "janne" && thePassword == "test") {
        loggedIn();
        showLogoutBtn();
        removeUserInput();

    } else {
        console.log("JSGAIGPAHIB")
    }
}

//SE TILL ATT KÖRA DENHÄR FUNKTIONEN I LOGGA-IN-FUNKTIONEN, SAMT NÄR SIDAN LADDAS OM!! FLER STÄLLEN??


//vid klick på logga-ut-knapp: 
//hämta värden från LS
//Clear värden från LS
//


let anvandarnamn = document.getElementById("userName").value
let losenord = document.getElementById("userPassword").value

let rightLoginUser = localStorage.getItem("userName");
let rightLoginPassword = localStorage.getItem("password");


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

stayOnSite();