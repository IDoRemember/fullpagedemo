$(document).ready(function() { 
	// $(".panel").css({"height":$(window).height()});
	$("nav ul li").on('click',function(){
		$("nav ul li").removeClass("active");
		$(this).addClass("active")
	})
});