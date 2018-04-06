// "use strict";
const mq = window.matchMedia("(min-width:720px)");

var aroma = document.getElementById("aroma");
var enroute = document.getElementById("enroute");
var book = document.getElementById("book");

var enrouteCover = document.getElementById("enrouteCover");
var aromaCover = document.getElementById("aromaCover");
var bookCover = document.getElementById("bookCover");

var mouseOver = function (elementId) {

  enrouteCover.style.display = "none";
  aromaCover.style.display = "none";
  bookCover.style.display = "none";

  aroma.style.color = "#B2B2B2";
  enroute.style.color = "#B2B2B2";
  book.style.color = "#B2B2B2";

  if (elementId != null){
    document.getElementById(elementId + "Cover").style.display = "block";
    document.getElementById(elementId).style.color = "#333";
  }
}

function reset() {
    aromaCover.removeAttribute("style");
    enrouteCover.removeAttribute("style");
    bookCover.removeAttribute("style");

    aroma.removeAttribute("style");
    enroute.removeAttribute("style");
    book.removeAttribute("style");

    $("#enroute").off("mouseover");
    $("#book").off("mouseover");
    $("#aroma").off("mouseover");
}



function mouseOverChange() {

  if(mq.matches){
    /**
    * TODO: show projects-right (display: bloc)
    *       and hide project descriptions on projectCovers
    */
          $("#enroute").on("mouseover", function() {
          mouseOver("enroute");
        });
        $("#aroma").on("mouseover", function() {
          mouseOver("aroma");
        });
        $("#book").on("mouseover", function() {
          mouseOver("book");
        });
      }else{
        /**
        * TODO: show project descriptions on projectCovers
        *       and hide projects-right
        */
        reset();
      }
}

mouseOverChange();


// if(window.matchMedia("(min-width:720px)")){
//   addProject();
// }
//
// function addProject(){
//    var newP = document.createElement('div');
//    newP.className = 'projects';
//    newP.innerHTML += '<p>Hello</p>';
//    document.getElementById('fullpage').appendChild(newP);
// }
