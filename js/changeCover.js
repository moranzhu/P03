"use strict";

document.getElementById("enroute").onmouseover = function(){
  document.getElementById("enrouteCover").style.display = "block";
  document.getElementById("aromaCover").style.display = "none";
  document.getElementById("bookCover").style.display = "none";

  var aroma = document.getElementById("aroma");
  aroma.style.color = "#B2B2B2";
  var enroute = document.getElementById("enroute");
  enroute.style.color = "#333";
  var book = document.getElementById("book");
  book.style.color = "#B2B2B2";
}
document.getElementById("aroma").onmouseover = function(){
  document.getElementById("aromaCover").style.display = "block";
  document.getElementById("enrouteCover").style.display = "none";
  document.getElementById("bookCover").style.display = "none";

  var aroma = document.getElementById("aroma");
  aroma.style.color = "#333";
  var enroute = document.getElementById("enroute");
  enroute.style.color = "#B2B2B2";
  var book = document.getElementById("book");
  book.style.color = "#B2B2B2";
}
document.getElementById("book").onmouseover = function(){
  document.getElementById("aromaCover").style.display = "none";
  document.getElementById("enrouteCover").style.display = "none";
  document.getElementById("bookCover").style.display = "block";

  var aroma = document.getElementById("aroma");
  aroma.style.color = "#B2B2B2";
  var enroute = document.getElementById("enroute");
  enroute.style.color = "#B2B2B2";
  var book = document.getElementById("book");
  book.style.color = "#333";
}
