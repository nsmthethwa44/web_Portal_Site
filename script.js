// declare variables 
let menu = document.querySelector(".menu");
let scrollUp = document.querySelector(".scrollUp");
let closeImg = document.querySelector(".close");
let navigation = document.querySelector(".navigation");

menu.onclick = () =>{
    navigation.classList.toggle("active")
}
closeImg.onclick = () =>{
    navigation.classList.remove("active")
}

window.onscroll = () =>{
    if (window.scrollY > 120){
        scrollUp.classList.add("active");
        navigation.classList.remove("active");
    }else{
        scrollUp.classList.remove("active");
    }
}

// / when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .navigation .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .navigation .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navigation.classList.remove("active");
  }
});