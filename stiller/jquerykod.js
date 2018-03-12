$(document).ready(function(){ 

	$('.tıkla').click(function(){
		$('#gizle').slideToggle()
	});

 var lisayisi = $('#sliderim ul.carsi li').length;
      var liningenisligi = $('#sliderim').outerWidth();
      $('ul.carsi li').css('width', liningenisligi + "px");
      var ulgenisligi = lisayisi * liningenisligi + 5;
      $('ul.carsi').css('width', ulgenisligi + 'px');
      $(window).resize(function() {
          liningenisligi = $('#sliderim').outerWidth();
          $('ul.carsi li').css('width', liningenisligi + "px");
          var ulgenisligi = lisayisi * liningenisligi;
          $('ul.carsi').css('width', ulgenisligi + 'px');
          $('ul.carsi').css('margin-left', '-' + (sayac * liningenisligi) + 'px');
      });
      sayac = 0;
      $('.sonraki').click(function() {
          if (sayac < lisayisi - 1) {
              sayac++
              $('ul.carsi').animate({
                  marginLeft: "-" + (liningenisligi * sayac) + "px"
              }, 500);
          }
      });
      $('.onceki').click(function() {
          if (sayac > 0) {
              sayac--
              $('ul.carsi').animate({
                  marginLeft: "-" + (liningenisligi * sayac) + "px"
              }, 500);
          }
      });





});
