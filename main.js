const header = document.getElementById("header");

const userName = document.createElement("input");
userName.setAttribute("id", "userName");
userName.setAttribute("type", "text");
userName.setAttribute("placeholder", "Username");

const userPassword = document.createElement("input");
userPassword.setAttribute("id", "userPassword");
userPassword.setAttribute("type", "password");
userPassword.setAttribute("placeholder", "password");

const loginBtn = document.createElement("button");
loginBtn.setAttribute("id", "loginBtn");

const logoutBtn = document.createElement("button");
logoutBtn.setAttribute("id", "logoutBtn");


let userNameJanne = "janne";
let userPasswordTest = "test"

let secondUserName = "tove";
let secondUserPassword = "skoj";


const main = document.getElementById("main");

//PARAGRAPH FOR MAIN VIEV CONTENT
let myParagraph = document.getElementsByClassName("pageParagraph")[0];



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



/**Function shows the NOT logged-in main view */
function notLoggedIn() {
    myParagraph.innerHTML = "You are not logged in.";
}

/**Function shows the logged-in main view */
function loggedIn() {
    myParagraph.innerHTML = "Welcome " + localStorage.getItem("userName") + ", you are logged in!";
}

/**Function shows the wrong-password main view */
function wrongDetails() {
    myParagraph.innerHTML = "You have entered the wrong login details, please try again.";
}