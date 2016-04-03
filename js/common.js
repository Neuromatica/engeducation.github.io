// initialization
var width = $(window).width();
var header_h = ((width)*0.10748)*0.86
$('header .container-fluid').css('height', header_h+'px');
$('header .row').css('margin-top', header_h*0.2+'px');

$(window).resize(function(e){
  var width = $(window).width()
  var header_h = ((width)*0.10748)*0.86
  $('header .container-fluid').css('height', header_h+'px');
  $('header .row').css('margin-top', header_h*0.2+'px');
});
