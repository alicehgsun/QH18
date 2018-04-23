
var QH = {};
QH.language = function(){

	var english = true;

	$(".en-option").click(function(){

		if(!english){
			TweenMax.to($(".kor"), 0.5, {autoAlpha: 0})
			TweenMax.set($(".kor"), {display: "none"})
			TweenMax.set($(".en"), {display: "block", autoAlpha: 0})
			TweenMax.to($(".en"), 0.5, {autoAlpha: 1, delay: 0.5})

		}
		english = true;
	})

	$(".kor-option").click(function(){

		if(english){
			TweenMax.to($(".en"), 0.5, {autoAlpha: 0})
			TweenMax.set($(".en"), {display: "none"})
			TweenMax.set($(".kor"), {display: "block", autoAlpha: 0})
			TweenMax.to($(".kor"), 0.5, {autoAlpha: 1, delay: 0.5})
		}
		english = false;
	})
}

QH.menuFunction = function(){
	console.log("menu")

	var menuStatus = false;

	//open and close

	$(".menu-icon").click(function(){
		if(!menuStatus){
			menuStatus = true;

			var menuWidth = $(".menu-contents").outerWidth() + 50

			TweenMax.to($(".background"), 0.5, {css:{marginLeft: menuWidth + 'px'}, ease: Power4.easeIn})
			TweenMax.to($(".wrapper"), 0.5, {css:{marginLeft: menuWidth + 'px'}, ease: Power4.easeIn})
			TweenMax.to($(".menu-icon"), 0.5, {x: menuWidth, ease: Power4.easeIn})
			TweenMax.set($(this), {width: "100vw", height: "100vh"})

			if($(".multilingual").length > 0){
				TweenMax.to($(".multilingual"), 0.5, {css:{marginRight: (-1 * menuWidth) + 'px'}, ease: Power4.easeIn})
			}


		}else{
			menuStatus = false;
			TweenMax.to($(".background"), 0.5, {css:{marginLeft:'0px'}, ease: Power4.easeIn})
			TweenMax.to($(".wrapper"), 0.5, {css:{marginLeft:'0px'}, ease: Power4.easeIn})
			TweenMax.to($(".menu-icon"), 0.5, {x: 0, ease: Power4.easeIn})
			TweenMax.set($(this), {width: "auto", height: "auto"})


			if($(".multilingual").length > 0){
				TweenMax.to($(".multilingual"), 0.5, {css:{marginRight: '0px'}, ease: Power4.easeIn})
			}
		}
	})

	//click on link + scroll to
	$(".menu-links").click(function(event){

		var target = $(this).attr("href");
		//close menu
		menuStatus = false;
		TweenMax.to($(".background"), 0.5, {css:{marginLeft:'0px'}, ease: Power4.easeIn})
		TweenMax.to($(".wrapper"), 0.5, {css:{marginLeft:'0px'}, ease: Power4.easeIn})
		TweenMax.to($(".menu-icon"), 0.5, {x: 0, ease: Power4.easeIn})
		TweenMax.set($(".menu-icon"), {width: "auto", height: "auto"})

		if($(".multilingual").length > 0){
			TweenMax.to($(".multilingual"), 0.5, {css:{marginRight: '0px'}, ease: Power4.easeIn})
		}


		var distanceScroll = $(".wrapper").scrollTop() + $(target).offset().top - 100;

		//control animated scroll to
	    $('.wrapper').animate({
	        scrollTop: distanceScroll
	    }, 0, function(){
	    	TweenMax.fromTo($('.content'), 0.5, {opacity: 0}, {opacity: 1, delay: 0.5, ease: Power4.easeIn})

	    	console.log($(".wrapper").scrollTop())
	    });

	    event.preventDefault();
	})
}


/* init */
$(document).ready(function(){
	QH.menuFunction()
	QH.language()
})
