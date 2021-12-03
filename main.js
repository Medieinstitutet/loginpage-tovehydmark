/***
 * ELEMENTS NEEDED FOR HEADER
 ***/
const header = document.getElementById("header");
//USER NAME INPUT
const userName = document.createElement("input");
userName.setAttribute("id", "userName");
userName.setAttribute("type", "text");
userName.setAttribute("placeholder", "Username");

//PASSWORD INPUT
const userPassword = document.createElement("input");
userPassword.setAttribute("id", "userPassword");
userPassword.setAttribute("type", "password");
userPassword.setAttribute("placeholder", "password");

//LOGIN BUTTON
const loginBtn = document.createElement("button");
loginBtn.setAttribute("id", "loginBtn");

//LOGOUT BUTTON
const logoutBtn = document.createElement("button");
logoutBtn.setAttribute("id", "logoutBtn");


/***
 * LOGIN DETAILS + DETAILS SAVED TO LOCALSTORAGE
 ***/
let userNameJanne = "janne";
let userPasswordTest = "test"

let secondUserName = "tove";
let secondUserPassword = "skoj";

/***
 * ELEMENTS NEEDED FOR MAIN
 ***/
const main = document.getElementById("main");

//PARAGRAPH WHICH I CAN USE TO CHANGE CONTENT OF MAIN VIEW
let myParagraph = document.getElementsByClassName("pageParagraph")[0];

/***
 * HEADER CONTENT
 ***/

/**Function shows the login form */
function showLoginForm() {
    header.append(userName);
    header.append(userPassword);
    header.append(loginBtn);
    loginBtn.innerText = "log in"
}
showLoginForm();


/**Function shows the log-out button */
function showLogoutBtn() {
    header.append(logoutBtn);
    logoutBtn.innerText = "log out";
}


/***
 * 3 STATES FOR MAIN CONTENT
 ***/

/**Function shows the NOT logged-in main view */
function notLoggedIn() {
    myParagraph.innerHTML = "You are not logged in.";
}


/**Function shows the logged-in main view */
function loggedIn() {
    myParagraph.innerHTML = "Welcome " + anvandarnamn.value + ", you are logged in!";
}

/**Function shows the wrong-password main view */
function wrongDetails() {
    myParagraph.innerHTML = "You have entered the wrong login details, please try again.";
}