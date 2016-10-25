$(function() {

	//回到顶部
	$(window).scroll(function() {
		var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //兼容浏览器
		if($scrollTop > 150) { //滚动高度
			$("#body-goup").show();
		} else {
			$("#body-goup").hide();
		};
	});
	$("#goup").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

})