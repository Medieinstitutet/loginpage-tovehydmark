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

localStorage.setItem("userName", "janne");
localStorage.setItem("password", "test");

let theUsername = localStorage.getItem("userName");
let thePassword = localStorage.getItem("password");

//console.log(theUsername)
//console.log(thePassword)


/***
 * ELEMENTS NEEDED FOR MAIN
 ***/
const main = document.getElementById("main");

//PARAGRAPH WHICH I CAN USE TO CHANGE CONTENT OF MAIN VIEW
let myParagraph = document.getElementsByClassName("pageParagraph")[0];

/***
 * HEADER CONTENT
 ***/

//Utloggad: visa ett inloggningsformulär
function showLoginForm() {
    header.append(userName);
    header.append(userPassword);
    header.append(loginBtn);
    loginBtn.innerText = "log in"
}
showLoginForm();


//Inloggad: visa logga-ut knapp
function showLogoutBtn() {
    header.append(logoutBtn);
    logoutBtn.innerText = "log out";
}


/***
 * 3 STATES FOR MAIN CONTENT
 ***/

//State för ej inloggade
function notLoggedIn() {
    myParagraph.innerHTML = "You are not logged in.";
}


//State för inloggad
function loggedIn() {
    myParagraph.innerHTML = "Welcome Janne, you are logged in! This is good news for me because that means the login function is working.";
}

//State för fel lösenord
function wrongDetails() {
    myParagraph.innerHTML = "You seem to have entered the wrong login details, please try again.";
}


















//FOOTER
//Samma på alla sidor. Skrive "Footer"