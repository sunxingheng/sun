$(function(){
	$(".mr_bottom li>div").hover(function(){
//		$(this).css("border","1px solid #e5004b");
		$(this).css("border-color","#e5004b");
		$(this).find('.Shopping_carBtn').css({"background":"#e5004b","color":"#fff"});
	},function(){
		$(this).css("border-color","#fff");
		$(this).find('.Shopping_carBtn').css({"background":"#ddd","color":"#000"});
	});
	
	$(".Shopping_carBtn").on("click",function(){
		window.location="index.html"
	})
});
