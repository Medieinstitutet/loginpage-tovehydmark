//ELEMENTS NEEDED FOR HEADER
const header = document.getElementById("header");
//USER NAME INPUT
const userName = document.createElement("input");
userName.setAttribute("id", "userName");
userName.setAttribute("type", "text")

//PASSWORD INPUT
const userPassword = document.createElement("input")
userPassword.setAttribute("id", "userPassword");
userPassword.setAttribute("type", "password")

//LOGOUT BUTTON
const logoutBtn = document.createElement("button");


//ELEMENTS NEEDED FOR MAIN
const main = document.getElementById("main");
//PARAGRAPH WHIC I CAN CHANGE CONTENT OF
let myParagraph = document.getElementsByClassName("pageParagraph")[0];


//HEADER
//Utloggad: visa ett inloggningsformulär
function showLoginForm() {
    header.append(userName);
    header.append(userPassword);
}
showLoginForm();


//Inloggad: visa logga-ut knapp
function showLogoutBtn() {
    header.append(logoutBtn);
    logoutBtn.innerText = "log out";
}
//showLogoutBtn()

//3 STATES FOR MAIN:
//State för ej inloggade
function notLoggedIn() {
    myParagraph.innerHTML = "You are not logged in.";
}
notLoggedIn()

//State för inloggad
function loggedIn() {
    myParagraph.innerHTML = "Welcome Janne, you are logged in! This is good news for me because that means the login function is working.";
}
//loggedIn()

//State för fel lösenord
function wrongDetails() {
    myParagraph.innerHTML = "You seem to have entered the wrong login details, please try again.";
}
//wrongDetails()

















//FOOTER
//Samma på alla sidor. Skrive "Footer"