$(function(){
	var myProductName = "myProductName";
	var myProductPrice = "myProductPrice";
	$(".pirce").html(getCookie(myProductName)*getCookie(myProductPrice));
	
	$(".hoverChange").hover(function(){
		$(this).find("a").first().css("color","red");
		$(this).css("border-color","red");
	},function(){
		$(this).find("a").first().css("color","#666");
		$(this).css("border-color","#ccc");
	});
	
	var bodyHeight = $("html,body").height();
	$(".onlinePay").on("click",function(){
		$(".modal").show();
		$("html,body").css({"height":"100%","overflow":"hidden"})
	})
		
	$(".close,#cancel").on("click",function(){
		$(".modal").hide();
		$("html,body").css({"height":bodyHeight,"overflow":"none"})
	})
		
	$(".modal").on("click",function(){
		$(".modal").hide();
		$("html,body").css({"height":bodyHeight,"overflow":"none"})
	});
	$(".modalDialog").on("click",function(){
		return false;
	});
	
	var myPayTime = "myPayTime"
	var paySuccess = "paySuccess"
	$("#login").on("click",function(){
		var $blankId = $("#userName").val();
		var $blankpwd = $("#pwd").val();
		if($blankId != "" && $blankpwd != ""){
			var nowTime = new Date();
			var year = new Date().getFullYear();
			var months = (new Date().getMonth())+1;
			var day = new Date().getDate();
			var hours = new Date().getHours();
			var minutes = new Date().getMinutes();
			var seconds = new Date().getSeconds();
			var payTime = year+"/"+months+"/"+day+" "+hours+":"+minutes+":"+seconds;
			var isPay = 1;
//			console.log(payTime)
			alert("付款成功！");
			addCookie(myPayTime,payTime,5)
			addCookie(paySuccess,isPay,5)
			window.location ="../index.html"
		}else{
			var isPay = 0;
			alert("请填写信息！");
			setTimeout(function(){
				$("#cancel").click();
			},3000);	
	}
		})
	
});	