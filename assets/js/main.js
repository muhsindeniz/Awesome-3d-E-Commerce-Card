// For Card Animation
const container = document.querySelector('.container');
const card = document.querySelector('.card');

// ITEMS
const title = document.querySelector('.card__title h1');
const image = document.querySelector('.card__pic img');
const buyButton = document.querySelector('.card__buy button');
const description = document.querySelector('.card__detail h3');
const sizes = document.querySelector('.card__size');


// ANIMATION EVENT
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// ANIMATION IN
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Out
    title.style.transform = `translateZ(120px)`;
    image.style.transform = "translateZ(150px) rotateZ(-25deg)";
    buyButton.style.transform = "translateZ(30px)";
    description.style.transform = "translateZ(90px)";
    sizes.style.transform = "translateZ(60px)";
});

// ANIMATION OUT
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all .5s linear";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //back
    title.style.transform = `translateZ(0px)`;
    image.style.transform = `translateZ(0px) rotateZ(0deg)`;
    buyButton.style.transform = `translateZ(0px)`;
    description.style.transform = `translateZ(0px)`;
    sizes.style.transform = `translateZ(0px)`;
});


/*
let x = 0;
for (x; x < sizesSelect.length; x++) {
    sizesSelect[x].style.backgroundColor = "red";
}*/

$(document).ready(function(){
    $(".size").click(function(){
       $(this).toggleClass("active");
    });
})