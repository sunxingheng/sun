$(function(){
	$(".jiesuan").on("click",function(){
		var userName = $("#consignee").val();
		var address = $("#addr_lv2").val();
		var address2 = $("#address_detail").val();
		if(userName == "" || address == "" || address2==""){
			alert("请完善信息");
		}else{
			window.location = "submitOrder.html"
		}
	})
	$(".addBtn").on("click",function(){
		$(".cart_d_fixbox").animate({
			"top":"0"
		},500)
	});
	
	$(".chooseFix").on("click",function(){
		$(".cart_d_fixinfo").css("display","block");
		$(".cart_d_cfbox").css("height","396px")
	})
	
	$(".saveBtn").hover(function(){
		$(".saveBtn").css("background","#ff8a00");
	},function(){
		$(".saveBtn").css("background","#E4004B");
	})
	
		var mynoFp = "mynoFp";
		var myFp = "myFp";
		var myInline = "myInline";
		var goodsToPay = "goodsToPay";
	$(".no_Fp").on("click",function(){
//		alert("fa")
		var noFp = $(".no_Fp").text();
		$(".no_Fp").addClass("active");
		$(".no_Fp>i").css("display","block");
		$(".no_Fp1").removeClass("active");
		$(".no_Fp1>i").css("display","none");
		addCookie(mynoFp,noFp,5);
		updateCookie(mynoFp,noFp,5);
		deleteCookie(myFp);
		
	});
		
	$(".no_Fp1").on("click",function(){
//		alert("发票")
		var Fp = $(".no_Fp1").text();
		$(".no_Fp1").addClass("active");
		$(".no_Fp1>i").addClass("bg");
		$(".no_Fp").removeClass("active");
		$(".no_Fp>i").css("display","none");
		addCookie(myFp,Fp,5);
		updateCookie(myFp,Fp,5)
		deleteCookie(mynoFp);
	});
	
	$(".no_Fp2").on("click",function(){
//		alert("在线")
		var inline = $(".no_Fp2").text();
		$(".no_Fp2").addClass("active");
		$(".no_Fp2>i").css("display","block");
		$(".no_Fp3").removeClass("active");
		$(".no_Fp3>i").css("display","none");
		addCookie(myInline,inline,5);
		updateCookie(myInline,inline,5);
		deleteCookie(goodsToPay);
	});
	

	$(".no_Fp3").on("click",function(){
//		alert("货到")
		var toPay = $(".no_Fp2").text();
		$(".no_Fp3").addClass("active");
		$(".no_Fp3>i").addClass("bg");
		$(".no_Fp2").removeClass("active");
		$(".no_Fp2>i").css("display","none");
		addCookie(goodsToPay,toPay,5);
		updateCookie(goodsToPay,toPay,5);
		deleteCookie(myInline);
	});
	
	//收货信息验证
	//手机号验证	
	$("#phone").on("blur",function(){
		var phoneNum = $("#phone").val();
		var reg = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
		if(reg.test(phoneNum)){
			$(".inputPhone").css("border-color","green");
		}else{
			$(".inputPhone").css("border-color","red");
		}
	});
	
	//判断是否为空
	var consigneeName = "consigneeName";
	var myProvince = "myProvince";
	var myCity = "myCity";
	var myCounty = "myCounty";
	var myAddress= "myAddress";
	var myPostcode = "myPostcode";
	var myPhonenum = "myPhonenum";
	var myTellphone = "myTellphone";
	$(".saveBtn").on("click",function(){
		var userName = $("#consignee").val();
		var address = $("#addr_lv2").val();
		var address2 = $("#address_detail").val();
		$("#address_box").css("display","none");
		if(userName == "" || address == "" || address2==""){
			alert("请完善信息");
		}else{
			$(".cart_d_fixbox").css("display","none");
			$(".cart_d_cfbox").css("height","205px");
			addShop();
		}	
		
		if((checkCookie(consigneeName)&&checkCookie(myProvince)&&checkCookie(myCity)&&checkCookie(myCounty)&&checkCookie(myAddress)) && (checkCookie(myPhonenum)||checkCookie(myTellphone))){
			$("#address_box3").html(
				'<div id="address_box2">'+
					'<div class="addressTitle">'+getCookie(myProvince)+getCookie(myCity)+getCookie(myCounty)+'&nbsp;&nbsp;&nbsp;('+getCookie(consigneeName) +' 收)'+'</div>'+
					'<div class="addressCenter">'+getCookie(myAddress)+'</div>'+
					'<div class="addressBottom">'+getCookie(myPostcode)+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+getCookie(myPhonenum)+getCookie(myTellphone)+'</div>'+
					'<i class="bg"></i>'+
				'</div>'
			)
			$("#address_box4").html(	
				'<div id="address_box">'+
					'<div class="addBtn">+</div>'+
				'</div>'				
			)
		}
	});	
	//保存收货地址
		function addShop(){
			var myName = $("#consignee").val();
			var Province= $("#addr_lv2").find("option:selected").text();
			var City = $("#addr_lv3").find("option:selected").text();
			var County = $("#addr_lv4").find("option:selected").text();
			var Address = $("#address_detail").val();
			var Postcode = $("#zip_code").val();
			var Phonenum = $("#phone").val();
			var Tellphone = $("#reserve_num").val();
			
					addCookie(consigneeName,myName,5);
					addCookie(myProvince,Province,5);
					addCookie(myCity,City,5);
					addCookie(myCounty,County,5);
					addCookie(myAddress,Address,5);
					addCookie(myPostcode,Postcode,5);
					addCookie(myPhonenum,Phonenum,5);
					addCookie(myTellphone,Tellphone,5);
		}	


	var myProductName = "myProductName";
	var myProductPrice = "myProductPrice";
	var myProductImg = "myProductImg";
	var myProductNum = "myProductNum";
	if(checkCookie(myProductPrice)&&checkCookie(myProductNum)&&checkCookie(myProductPrice)){
		$("#totalPrice").html(getCookie(myProductPrice)*getCookie(myProductNum));
		$("#shoopingCar").html(
				'<div class="kuaidi">'+
					'<b>速普自营</b>'+
					'<p class="pirce">单价</p>'+
					'<p class="num">数量</p>'+
					'<p class="num">小计</p>'+
				'</div>'+
				'<ul class="buyList">'+
					'<li>'+
						'<span class="buyInfor">'+
							'<img id="myProductImg" src="../'+getCookie(myProductImg)+'" />'+
						'</span>'+
						'<p id="myProductName">'+getCookie(myProductName)+'</p>'+
						'<div class="buyPirce">'+'<p>￥</p>'+'<p id="myProductPrice">'+getCookie(myProductPrice)+'</p>'+'</div>'+
						'<div class="buyNum">'+
							'<a id="myProductNum" class="buyNum1" href="javascript:void(0)">'+getCookie(myProductNum)+'</a>'+
						'</div>'+
						'<div class="buySum">'+'<p>￥</p>'+'<p id="totalPrice">'+getCookie(myProductPrice)*getCookie(myProductNum)+'</p>'+'</div>'+
					'</li>'+
				'</ul>'+
				'<div class="buyDiv">'+
					'<div class="sumMoney">商品总额：'+'<span class="sumSpan">￥</span>'+'<span id="totalPrice">'+getCookie(myProductPrice)*getCookie(myProductNum)+'</span>'+'</div>'+
					'<div class="totalPrices">应付额：<span class="sumSpan">￥</span><span>'+getCookie(myProductPrice)*getCookie(myProductNum)+'</span>'+'</div>'+
				'</div>'
		)

		}
	
	$(".navList>li").not(".five").hover(function(){
		
		$(this).find("div").stop().show();
		$(this).css({"border-color":"red","background":"#fff"});
		
	},function(){
		$(this).find("div").stop().hide();
		$(this).css({"border-color":"#f3f3f3","background":"#f3f3f3"});
	});
	
});
