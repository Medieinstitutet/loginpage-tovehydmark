//Kalla på det vi behöver
const header = document.getElementById("header");
const main = document.getElementById("main");
let myParagraph = document.getElementsByClassName("pageParagraph")[0];



//HEADER
//Utloggad: visa ett inloggningsformulär
function showLoginForm() {
    const userName = document.createElement("input");
    header.append(userName);
    userName.setAttribute("id", "userName");
    userName.setAttribute("type", "text")

    const userPassword = document.createElement("input")
    header.append(userPassword);
    userPassword.setAttribute("id", "userPassword");
    userPassword.setAttribute("type", "password")
}
//showLoginForm();

//Inloggad: visa logga-ut knapp
function showLogoutBtn() {
    const logoutBtn = document.createElement("button");
    header.append(logoutBtn);
    logoutBtn.innerText = "log out";
}
//showLogoutBtn()



//3 STATES FOR MAIN:
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



//MAIN
//Skapa rätt sidvy med Switch



//Skapa funktioner för varje vy och kalla på dem i if-else i headern? 

// function ickeInloggad () = {
//    paragraph.innerHTML = "You are not logged in";
// }

//State för inloggad

// function inloggad () = {
//    
// }


//State för fel lösen
// function felLösen () = {
//    
// }








//FOOTER
//Samma på alla sidor. Skrive "Footer"