var rows = 16;
var columns = 16;

var $square = $("<div class='square'></div>");

$(document).ready(function() {
  createGrid(26);
});

$(function(){
  $("#reset").click(function() {
    $(".square").css("background-color", "red");
    rows = prompt("Number of rows and columns: ");
    createGrid(rows);
  });
});

function createGrid(squaresperside)
{
  $(".square").remove();

  var squaresize = (800 / squaresperside) - 2;
  for(var i = 0; i < squaresperside; i++){
    for(var j = 0; j < squaresperside; j++){
      $("#wrapper").append($square.clone());
    }
  }
  // set the square size so the grid fits in the wrapper
  $(".square").css("height", squaresize);
  $(".square").css("width", squaresize);
  gradient();
}

function normalmode() {
  $(".square").mouseleave(function(event) {
    /* Act on the event */
    $(this).css("background-color", "green");
  });

};

function gradient() {
  $(".square").mouseleave(function(event)
    {
      var opa = $(this).css("opacity");

      if (opa < 1){
        $(this).css("opacity", opa*1.5);
    }
    
  });
}