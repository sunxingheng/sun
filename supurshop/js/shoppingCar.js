$(function(){
	$(".navList>li").not(".five").hover(function(){
		
		$(this).find("div").stop().show();
		$(this).css({"border-color":"red","background":"#fff"});
		
	},function(){
		$(this).find("div").stop().hide();
		$(this).css({"border-color":"#f3f3f3","background":"#f3f3f3"});
	});
	
	$(".jiesuan").hover(function(){
		$(".jiesuan").css("background","#ff8a00");
	},function(){
		$(".jiesuan").css("background","#E4004B");
	})
	
	$("#choose_all").on("click",function(){
		alert()
		$(".kuaidi").find("input").attr("checked",true)
	})
	
	//购物车创建
	var myProductName = "myProductName";
	var myProductPrice = "myProductPrice";
	var myProductImg = "myProductImg";
	var myProductNum = "myProductNum";
	if(checkCookie(myProductImg)&&checkCookie(myProductNum)&&checkCookie(myProductPrice)&&checkCookie(myProductName)){
		$(".blank_shoppingCar").css("display","none");
		$(".newCar").html(
			'<div class="content_title">'+
				'<span></span>'+
				'<p>我的购物车</p>'+
				'<a href="../index.html">继续购物  ></a>'+
			'</div>'+
				'<div class="choose">'+
					'<span><input id="choose_all" type="checkbox"/>全选</span>'+
					'<p class="infor">商品信息</p>'+
					'<p class="pirce">单价</p>'+
					'<p class="num">数量</p>'+
					'<p class="num">小计</p>'+
					'<p class="num">操作</p>'+
				'</div>'+
				'<div class="kuaidi">'+
					'<input type="checkbox"/>&nbsp;'+
					'<b>速普自营</b>'+
				'</div>'+
				'<ul class="buyList">'+
					'<li>'+
						'<span class="buyInfor">'+
							'<input type="checkbox" />'+
							'<img src="../'+getCookie(myProductImg)+'" />'+
						'</span>'+
						'<p>'+getCookie(myProductName)+'</p>'+
						'<div class="buyPirce">￥'+getCookie(myProductPrice)+'</div>'+
						'<div class="buyNum">'+
							'<a class="buyNum1" href="javascript:void(0)">-</a>'+
							'<input class="carText" type="text" value="'+getCookie(myProductNum)+'"/>'+
							'<a class="buyNum2" href="javascript:void(0)">+</a>'+
						'</div>'+
						'<div class="buySum">￥'+getCookie(myProductPrice)*getCookie(myProductNum)+'</div>'+
						'<div class="operation">'+
							'<span class="del">删除</span>'+
							'<span class="like">收藏</span>'+
						'</div>'+
					'</li>'+
				'</ul>'+
				'<div class="buyDiv">'+
					'<div class="chooseNum">已选择'+
					'<span id="chooseNum">'+getCookie(myProductNum)+'</span>'+
					'件商品</div>'+
					'<div class="sumMoney">商品总额：'+
					'<span class="blanksum">￥</span>'+
					'<span id="sumMoney">'+getCookie(myProductPrice)*getCookie(myProductNum)+'</span>'+
					'</div>'+
					'<div class="reduceMoney">已优惠'+
					'<span>-￥0</span>'+
					'</div>'+
					'<div class=" totalPrices">合计金额：'+
					'<span class="blanksum">￥</span>'+
					'<span id="total">'+getCookie(myProductPrice)*getCookie(myProductNum)+'</span>'+
					'</div>'+
				'</div>'+
				'<div class="subBox">'+
						'<span>'+
						'</span>'+
						'<a href="#" class="shanchu">x删除选中商品</a>'+
						'<a href="#" class="qingkong">清空购物车</a>'+
						'<div class="jianshu">共计'+
						'<span class="shooppingcarNum">'+getCookie(myProductNum)+'</span>'+
						'件商品</div>'+
						'<div class="zongji">总计'+
						'<span id="totalPrice">￥'+getCookie(myProductPrice)*getCookie(myProductNum)+'</span>'+
						'</div>'+
						'<a href="confirmOrder.html" class="jiesuan">去结算></a>'+
				'</div>'
		)
							$("#totalPrice").html(getCookie(myProductPrice)*getCookie(myProductNum));
		}
	
	//购物车添加事件
	var $Num = getCookie(myProductNum);
	$(".buyNum2").on("click",function(){
		$Num++;
		$("#chooseNum").html($Num);
		$(".buySum").html($Num*getCookie(myProductPrice));
		$(".shooppingcarNum").html($Num);
		$("#total").html($Num*getCookie(myProductPrice));	
		$(".shooppingcarNum").html($Num);
		$("#totalPrice").html($Num*getCookie(myProductPrice));
		$("#sumMoney").html($Num*getCookie(myProductPrice));
		updateCookie(myProductNum,$Num);
	})
	
	$(".buyNum1").on("click",function(){
		$Num--;
		if($Num < 1){
			$(".carText").val(1);
			$Num = 1;
		}
		$("#chooseNum").html($Num);
		$(".buySum").html($Num*getCookie(myProductPrice));
		$(".shooppingcarNum").html($Num);
		$(".totalPrices").html($Num*getCookie(myProductPrice));	
		$(".shooppingcarNum").html($Num);
		$("#totalPrice").html($Num*getCookie(myProductPrice));
		$(".sumMoney").html($Num*getCookie(myProductPrice));
		updateCookie(myProductNum,$Num);
	})
	
	$(".del").on("click",function(){
		$(".newCar").css({"display":"none","height":"0"});
		$(".blank_shoppingCar").css("display","block");
		deleteCookie(myProductNum);
		deleteCookie(myProductPrice);
		deleteCookie(myProductImg);
		deleteCookie(myProductName);
	})
	
	
});
