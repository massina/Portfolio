$(document).ready(function(){
	var header = $('header');
	
	var scrollFunction = function(){
		var scrollTop = $(window).scrollTop();
		var headerHeight = header.height() + 2;
		
		console.log("scrollTop: ", scrollTop, $('#about').position().top, headerHeight);
		if(scrollTop >= $('#about').position().top - headerHeight){
			header.addClass("slideIn");
		}
		else {
			header.removeClass("slideIn");
		}

		$("div.navbar-collapse.collapse > ul > li").each(function(){
			var currLi = $(this);
			var refElement = $(currLi.find('a').attr('href'));
			if(refElement.position().top - headerHeight <= scrollTop &&
				refElement.position().top + refElement.height() > scrollTop){
				$("div.navbar-collapse.collapse > ul > li").removeClass("active");
			currLi.addClass("active");
		}
		else{
			currLi.removeClass("active");
		}
	});

	};

	scrollFunction();

	$(window).scroll(function (event) {
		scrollFunction();
	});

	$(window).resize(function(){
		scrollFunction();
	});

	$("html, body").on("click",".js-scrollable",function(e){
		console.log("e: ", e);
		e.preventDefault();
		var targetEl = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(targetEl).offset().top - header.height()
		}, 1000);
	});

	$("#contactForm").on("input",".form-group", function(e){
		$(this).toggleClass("form-item-filled",!! $(e.target).val());
	});
});