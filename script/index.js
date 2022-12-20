const hiddenBtn = document.querySelector(".show-btn"); 
const navBar = document.querySelector(".nav-bar");
const closeBtn = document.querySelector(".close-btn"); 

hiddenBtn.onclick = function (ev){
    ev.preventDefault();
    navBar.style.width = "80%";
}

closeBtn.onclick = function (ev){
    ev.preventDefault();
    navBar.style.width = "0"
}