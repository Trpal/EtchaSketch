var $square = $("<div class='square'></div>");

$(document).ready(function() {
  createGrid(16);

  $("#new").click(function(){
    var sidesize = prompt("Give a number of squares per side (1-50): ")
    if(sidesize > 0 && sidesize < 51){
      createGrid(sidesize);
    };  
  });

  $("#normal").click(function() {
    $(".square").unbind();
    normalmode();
  });

  $("#gradient").click(function() {
    $(".square").unbind();
    gradientmode();
  });

  $("#ghost").click(function(){
    $(".square").unbind();
    ghostmode();
  });

  $("#random").click(function(){
    $(".square").unbind();
    randomcolormode();
  })

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

}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function ghostmode() {
  $(".square").mouseenter(function(event) {
    $(this).css("opacity", 1)
  });
  $(".square").mouseleave(function(event) {
    $(this).fadeTo('slow', 0.1);
  });
}

function gradientmode() {
  $(".square").mouseenter(function(event)
    {
      var opa = $(this).css("opacity");
      if (opa < 1){
        $(this).css("opacity", opa*1.5);
    }
  });
}

function normalmode() {
  $(".square").mouseenter(function(event) {
    /* Act on the event */
    $(this).css("opacity", 1);
  });
};

function randomcolormode() {
  $(".square").mouseenter(function(event) {
    $(this).css("opacity", 1)
    $(this).css("background-color", getRandomColor());

  });
}

