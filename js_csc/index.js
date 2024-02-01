function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    var s1 = document.querySelector("div.shoot");
    var d1 = document.querySelector("div.dream_card");
    var d2 = document.querySelector("div.dream_card2");
    var d3 = document.querySelector("div.dream_card3");
    header.classList.toggle("sticky", window.scrollY > 0);
    s1.classList.toggle("appear1", window.scrollY > 1700);
    d1.classList.toggle("appear2", window.scrollY > 2200);
    d2.classList.toggle("appear3", window.scrollY > 2700);
    d3.classList.toggle("appear4", window.scrollY > 3200);
})
