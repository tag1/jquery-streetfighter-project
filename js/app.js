$(document).ready(function() {
	onLoad();
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
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$("")
		$(".hadouken").finish().show()
  			.animate(
   			 {'left': '300px'},
   			 500,
   			 function() {
     		 $(this).hide();
     		 $(this).css('left', '-212px');
   			 }

  		);
})
	.mouseup(function() {
		$(".ryu-ready").show();
		$(".ryu-throwing").hide();
});
	$("html").keydown(function() {
		if (event.which==88){
			playSax();
		$(".ryu-move").hide();
		$(".ryu-cool").show();
		console.log("x has been pushed")};
})
	$("html").keyup(function() {
		if (event.which==88) {
		$(".ryu-still").show();
		$(".ryu-cool").hide();
		$("#sax")[0].pause;
		$("sax")[0].load;

		console.log("back to normal")
		};

})


});	
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
function onLoad() {
 $('#theme')[0].volume = 0.3;
 $('#theme')[0].play();
  $('.sflogo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.broughtby').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jqlogo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.instruction').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
var sax = false;
function playSax () {
  sax = !sax;
  if (playSax) {
    $('#theme')[0].pause();
    // $('#cool')[0].load()
    $('#sax')[0].volume = 0.5;
    $('#sax')[0].play();

  }
}
