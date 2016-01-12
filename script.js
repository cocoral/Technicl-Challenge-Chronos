$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
			  });
			});

$(document).ready(function(){
	$(".all").click(function(){
		$(".work .columns").hide();
		$(".work .columns").css({"float":"left","clear":"none","margin":"auto"});		
		$(".work .columns").fadeIn(600);
	})
})

$(document).ready(function(){
	$(".web").click(function(){
		$(".work .columns").hide();
		$(".webSelector").fadeIn(600);
	})
})

$(document).ready(function(){
	$(".apps").click(function(){
		$(".work .columns").hide();
		$(".appSelector").css({"float":"none","clear":"both","margin":"auto"});
		$(".appSelector").fadeIn(600);
	})
})

$(document).ready(function(){
	$(".icons").click(function(){
		$(".work .columns").hide();
		$(".iconSelector").css({"float":"none","clear":"both","margin":"auto"});
		$(".iconSelector").fadeIn(600);
	})
})