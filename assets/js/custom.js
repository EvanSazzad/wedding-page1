$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$(".header").addClass("fix")
		}
		else($(".header").removeClass("fix"))
	})
});

$(document).ready(function(){
	$(".menu-toggle").click(function(){
		$(".menu-toggle").toggleClass("times")
		$(".nav").toggleClass("times")
	})
});
$(document).ready(function(){
	$(".header .nav a").click(function(){
	 	if ($(window).width() < 768) {
	 		$(".menu-toggle").toggleClass("times")
	 		$(".nav").toggleClass("times")
	 	}
	 });
})


 //slick slider
  $(document).ready(function(){
      $(".home_section").slick({
   	slidesToShow: 1,
   	infinite: true,
   	autoplay: true,
   	autoplaySpeed: 5200,
   	fade: true,
   	arrows: false,
   	pauseOnHover: false,
   });
  });


//isotop
  	 var grid = $(".gnb").isotope({
 
  itemSelector: '.item',
  percentPosition: true,
});

$('.peoples-filter').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $(".gnb").isotope({ filter: filterValue });
});

$(document).on( 'click', '.peoples-filter button', function() {
  $(this).addClass("active").siblings().removeClass("active");
});

 
 
$(document).ready(function(){
	$(".top").click(function(){
		$("html,body").animate({scrollTop:0},1000);
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if ($(document).scrollTop()>30) {
			$(".fixed").fadeIn(500);
		}
		if ($(document).scrollTop()<30) {
			$(".fixed").fadeOut(500)
		}
	})
});


  (function($){

  	   $('.image-link').magnificPopup({
  	 type:'image',
  	 gallery: {
  		enabled: true
  	}
  });

  })(jQuery);


$(function(){
  $.scrollIt();
});

