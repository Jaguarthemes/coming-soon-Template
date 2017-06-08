// JavaScript Document

 $(document).ready(function() {

 
  // For Preloader
  $(window).on('load', function() {
            $('.loadscreen').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
   });
  
  // For Services Cube Effect
  
   $(window).on('load', function() {
   			$('.services_cube_wrapper').on({mouseenter:function(){$(this).removeClass('show_front');
			$(this).addClass('show-bottom')},mouseleave:function(){$(this).removeClass('show-bottom');
			$(this).addClass('show_front')}});
			
  });
   
   // media queries add remove class for overlay
$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width >= 700 && width <= 1000){
       $('#bg_overlay').removeClass('overlay_bg').addClass('overlay_bg1');
   }
   else{
       $('#bg_overlay').removeClass('overlay_bg1').addClass('overlay_bg');
   }
})
.resize();//trigger the resize event on page load.
   
});


