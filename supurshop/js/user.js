$(function(){
	$(".sNav>li").not(".fourst").hover(function(){
		var $index = $(this).index();
		$(".sNav li").find("div").eq($index-1).stop().slideDown();
	},function(){
//		var $index = $(this).index();
//		$(".sNav li").find("div").eq($index-1).css("display","none");
	});
	
	$(".div0").hover(function(){
		$(".div0").stop().slideDown();
	},function(){
		$(".div0").stop().slideUp();
	});
	
	$(".div1").hover(function(){
		$(".div1").stop().slideDown();
	},function(){
		$(".div1").stop().slideUp();
	});
	
	$(".div2").hover(function(){
		$(".div2").stop().slideDown();
	},function(){
		$(".div2").stop().slideUp();
	});
	
	$(".sNav>li").eq(4).hover(function(){
		$(".sNav li").find("div").eq(2).stop().slideDown();
	},function(){
//		$(".sNav li").find("div").eq(2).css("display","none");
	});
	
	$(".nav>li").not(".first").hover(function(){
		var $index = $(this).index();
		$(".nav>li>a").eq($index).css("color","#E5004A");
	},function(){
		var $index = $(this).index();
		$(".nav>li>a").eq($index).css("color","#000");
	});
	
	$(".banner_left2 li").hover(function(){
		$(this).find(".momMenu").css("display","block");
	},function(){
		$(this).find(".momMenu").css("display","none");
	});
	
	$("#hoverEvent").hover(function(){
		$(this).find(".banner_lefttest").stop().slideDown();
	},function(){
		$(this).find(".banner_lefttest").stop().slideUp();
	})
	
	//更改密码
	
	var myPwd = "myPwd";
	$(".myPwd").on("blur",function(){
		var $myPwd = $(".myPwd").val();
		if($myPwd == getCookie(myPwd)){
			$(".myPwd").css("border-color","green");
		}else{
			$(".myPwd").css("border-color","red");
		}
	});
	
	$(".newPwd").on("blur",function(){
		var $newpwd = $(".newPwd").val();
		var reg3 = /^[A-Za-z0-9]{6,16}$/;
		if(reg3.test($newpwd)&& $newpwd != getCookie(myPwd)){
			$(".newPwd").css("border-color","green");
		}else{
			$(".newPwd").css("border-color","red");
		}
	});
	
	$(".resurePwd").on("blur",function(){
		var $newpwd = $(".newPwd").val();
		var $resurePwd = $(".resurePwd").val();
		if($resurePwd == $newpwd){
			$(".resurePwd").css("border-color","green");
		}else{
			$(".resurePwd").css("border-color","red");
		}
	});
	
	$(".subBtn").on("click",function(){
		var $myPwd = $(".myPwd").val();
		var $newpwd = $(".newPwd").val();
		var $resurePwd = $(".resurePwd").val();
		if($myPwd != "" &&$newpwd != ""&& $resurePwd != ""){
			alert('修改成功！')
			updateCookie(myPwd,$newpwd,5);
		}else{
			alert("请填写内容！")
		}
	});
	
	//生成订单
	var myProductName = "myProductName";
	var myProductPrice = "myProductPrice";
	var myProductImg = "myProductImg";
	var myProductNum = "myProductNum";
	var myPayTime = "myPayTime"
	var paySuccess = "paySuccess"
	var reg = random4();
	if(checkCookie(myProductName)&&checkCookie(myProductNum)&&checkCookie(myProductPrice)&&checkCookie(myProductImg)){
		$(".newOrder").html(
			'<div class="newOrder_title">'+
				'<span>订单号：</span>'+
				'<span class="orderID">'+reg+'</span>'+
			'</div>'+
			'<div class="newOrder_content">'+
				'<img class="productImg" src="../'+getCookie(myProductImg)+'"/>'+
				'<span class="productName">'+getCookie(myProductName)+'</span>'+
				'<span class="money">￥</span>'+
				'<span class="productPirce">'+(getCookie(myProductNum)*getCookie(myProductPrice))+'</span>'+
				'<span class="productNum">'+getCookie(myProductNum)+'</span>'+
				'<span class="totalPirce">'+(getCookie(myProductNum)*getCookie(myProductPrice))+'</span>'+
				'<span class="orderTime">'+getCookie(myPayTime)+'</span>'+
				'<span class="orderState">未支付</span>'+
			'</div>'
		)
	}
	if(getCookie(paySuccess) == 1){
		$(".orderState").html("已支付")
	}
		function random4(){
   		return Math.floor(Math.random()*10000)
    }
		
		$(".leftmenu_zone").find("li").hover(function(){
			$(this).css("background","#ccc")
		},function(){
			$(this).css("background","#fff")
		})
})
