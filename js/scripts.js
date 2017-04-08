var allowRoll=true;

//constructor
$(document).ready(function(){
	//used for scroll link smoothing
	$("#navigation a, a.scrollLink").click(function(e){ scrollToLink(e); return false;});
	$("#scrollTop").click(function(e){ scrollToTop(); return false;});
	//dice roll
	$("#die").click(function(){diceRoll();});
});
//controls the animation of logo above twitter icon
$(document).scroll(function(){
	if($(window).scrollTop()>185&&$("#scrollTop").attr("status")=="closed"){
		$("#scrollTop").attr("status","open");
		$("#scrollTop").stop();
		$("#scrollTop").clearQueue();
		$("#scrollTop").animate({height:105,marginBottom: 15},300);
	}else if($(window).scrollTop()<145&&$("#scrollTop").attr("status")=="open"){
		$("#scrollTop").attr("status","closed");
		$("#scrollTop").stop();
		$("#scrollTop").clearQueue();
		$("#scrollTop").animate({height:0,marginBottom: 0},300);
	}
});

//handles jumping to link locations
function scrollToLink(e){
	$('html,body').animate({
      scrollTop: $($(e.target).attr("href")).offset().top-75
    }, 500);
}
function scrollToTop(){
	$('html,body').animate({
      scrollTop: 0
    }, 500);
}

//rolls the die
function diceRoll(){
	if(allowRoll){
		$("#rollValue").html("--");
		allowRoll=false;
		for(var i=0; i<11; i++){
			if(i==10){
				setTimeout(function(){flipToNum(true);},i*90);
			}else{
				setTimeout(function(){flipToNum(false);},i*90);
			}
		}
	}
}
function flipToNum(last){
	var roll=Math.floor(Math.random() * 6);
	$("#face img").css("margin-left", roll*170*-1);
	if(last){
		allowRoll=true;
		$("#rollValue").html(roll+1);
	}
}