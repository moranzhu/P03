"use strict";

document.getElementById("enroute").onmouseover = function(){
  document.getElementById("cover").src="img/enrouteCover.png";

  var aroma = document.getElementById("aroma");
  aroma.style.color = "#B2B2B2";
  var enroute = document.getElementById("enroute");
  enroute.style.color = "#333";
  var book = document.getElementById("book");
  book.style.color = "#B2B2B2";
}
document.getElementById("aroma").onmouseover = function(){
  document.getElementById("cover").src="img/aromaCover.png";

  var aroma = document.getElementById("aroma");
  aroma.style.color = "#333";
  var enroute = document.getElementById("enroute");
  enroute.style.color = "#B2B2B2";
  var book = document.getElementById("book");
  book.style.color = "#B2B2B2";
}
document.getElementById("book").onmouseover = function(){
  document.getElementById("cover").src="img/bookCover.png";

  var aroma = document.getElementById("aroma");
  aroma.style.color = "#B2B2B2";
  var enroute = document.getElementById("enroute");
  enroute.style.color = "#B2B2B2";
  var book = document.getElementById("book");
  book.style.color = "#333";
}
