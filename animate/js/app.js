$(document).ready(function(){
	$('.bunny').mousedown(function(){
		$('.still').hide();
		$('.move').show();
	})
	.mouseup(function() {
		$('.move').hide();
		$('.still').show();
	})
	.bind( "touchstart", function(e){
		$('.still').hide();
		$('.move').show();
	})
	.bind( "touchend", function(e) {
		$('.move').hide();
		$('.still').show();
	});
});