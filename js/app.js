$(document).ready(function() {
	$(".ryu").mouseenter(function() {
	$(".ryu-still").hide();
	$(".ryu-ready").show();
})
	.mouseleave(function() {
	$(".ryu-ready").hide();
	$(".ryu-still").show();
})
	.mousedown(function() {
		console.log('mousedown');
		//play hadouken sound
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		// animate hadouken
})
	.mouseup(function() {
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
});



});