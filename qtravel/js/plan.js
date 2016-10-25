$(function() {
	$(".box dt").mouseover(function() {
		$(".box dd").css('display', 'block')
	})
	$(".box dt").mouseout(function() {
		$(".box dd").css('display', 'none')
	})
	$(".box dd").mouseover(function() {
		$(".box dd").css('display', 'block')
	})
	$(".box dd").mouseout(function() {
		$(".box dd").css('display', 'none')
	})

});


