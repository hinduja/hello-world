function animateMap(){
	$("#mapDiv").animate({
		opacity:'1'	
	},1500,function(){
		$('#circleDiv').css('opacity',1);
		$('#circleDiv').blink();
	})
	
}
