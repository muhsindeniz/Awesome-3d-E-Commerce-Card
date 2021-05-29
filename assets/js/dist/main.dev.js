"use strict";

// For Card Animation
var container = document.querySelector('.container');
var card = document.querySelector('.card'); // ITEMS

var title = document.querySelector('.card__title h1');
var image = document.querySelector('.card__pic img');
var buyButton = document.querySelector('.card__buy button');
var description = document.querySelector('.card__detail h3');
var sizes = document.querySelector('.card__size'); // ANIMATION EVENT

container.addEventListener("mousemove", function (e) {
  var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  var yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = "rotateY(".concat(xAxis, "deg) rotateX(").concat(yAxis, "deg)");
}); // ANIMATION IN

container.addEventListener("mouseenter", function (e) {
  card.style.transition = "none"; //Out

  title.style.transform = "translateZ(120px)";
  image.style.transform = "translateZ(150px) rotateZ(-25deg)";
  buyButton.style.transform = "translateZ(30px)";
  description.style.transform = "translateZ(90px)";
  sizes.style.transform = "translateZ(60px)";
}); // ANIMATION OUT

container.addEventListener("mouseleave", function (e) {
  card.style.transition = "all .5s linear";
  card.style.transform = "rotateY(0deg) rotateX(0deg)"; //back

  title.style.transform = "translateZ(0px)";
  image.style.transform = "translateZ(0px) rotateZ(0deg)";
  buyButton.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});
/*
let x = 0;
for (x; x < sizesSelect.length; x++) {
    sizesSelect[x].style.backgroundColor = "red";
}*/

$(document).ready(function () {
  $(".size").click(function () {
    $(this).toggleClass("active");
  });
});