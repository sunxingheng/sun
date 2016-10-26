$(function(){
	var myProductPrice = "myProductPrice";
	var myProductNum = "myProductNum";
	var mynoFp = "mynoFp";
	var myFp = "myFp";
	var myInline = "myInline";
	var goodsToPay = "goodsToPay";
	if(checkCookie(myProductPrice)&& (checkCookie(myFp)||checkCookie(mynoFp)) && (checkCookie(myInline)||checkCookie(goodsToPay))){
		$(".cartInfor_pirce3").html(getCookie(myInline)+getCookie(goodsToPay));
		$(".cartInfor_pirce4").html(getCookie(mynoFp)+getCookie(myFp));
		$(".cartInfor_pirce5").html(getCookie(myProductPrice)*getCookie(myProductNum));
	}
	
	$(".payBtn").hover(function(){
		$(".payBtn").css("background","#ff8a00");
	},function(){
		$(".payBtn").css("background","#E4004B");
	})
})
