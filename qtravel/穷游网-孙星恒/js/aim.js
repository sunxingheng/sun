$(function() {

	//导航第八部分下拉框效果
	$(".best-li8").mouseover(function() {
		$(".best-nav-list2").stop().show(500)
	})

	$(".best-li8").mouseout(function() {
		$(".best-nav-list2").stop().hide(500);
	})

	//导航第四部分下拉效果

	$(".best-li4").hover(function() {
		$(".best-nav-list1").stop().show(500)
	}, function() {
		$(".best-nav-list1").stop().hide(500);
	})

	$(".best-nav-list1-li1").hover(function() {
		$(".best-nav-list1-li1-list").stop().show(500)
	}, function() {
		$(".best-nav-list1-li1-list").stop().hide(500);
	})

	//tip提示框  移入移出效果

	$(".tip").hover(function() {
		$(".tip .close").hide(500)
		$(".tip .open").show(500)
	}, function() {
		$(".tip .open").hide(500)
		$(".tip .close").show(500)
	});
})