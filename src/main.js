$(document).ready(function () {
  console.log('sanity check');
  'use strict';


  function newCanvas() {
    for(var i = 0; i < 1890; i++ ) {
      $('#canvas').append('<div class="pixel"></div>');
      console.log("test");
    }
  }
  newCanvas();
  var color = 'orange'

  $('.pixel').on('click', function(e){

    $(this).css('backgroundColor', color)

  })
  function newPallette() {
    var colores = ['red','orange','yellow','green','blue','indigo','violet','white']
    for(var i = 0; i < colores.length; i++) {
    $('#pallette').append('<div class="styling '+colores[i]+'"></div>')
    $('.'+colores[i]).css('backgroundColor', colores[i]).width('40px').height('40px')
    }
  };
  newPallette()
  $('.styling').on('click', function(e){
    color = $(this).css('backgroundColor')
  })

  var isDown = false;   // Tracks status of mouse button

   $('#canvas > div').mousedown(function() {
      isDown = true;      // When mouse goes down, set isDown to true
    })
   $('#canvas > div').mouseup(function() {
      isDown = false;    // When mouse goes up, set isDown to false
    });

   $("#canvas > div").mouseover(function() {
     if(isDown) {        // Only change css if mouse is down
        $(this).css('background-color', color)
     }
    });
});
//branched
