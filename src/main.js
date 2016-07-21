$(document).ready(function () {
  console.log('sanity check');
  'use strict';


  function newCanvas() {
    for(var i = 0; i < 2100; i++ ) {
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
    var colores = ['red','orange','yellow','green','blue','indigo','violet']
    for(var i = 0; i < colores.length; i++) {
    $('#pallette').append('<div class="styling '+colores[i]+'"></div>')
    $('.'+colores[i]).css('backgroundColor', colores[i]).width('40px').height('40px')
    }
  };
  newPallette()
  $('.styling').on('click', function(e){
    color = $(this).css('backgroundColor')
  })
});
