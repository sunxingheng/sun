$(function(){
	$(".goodsImgSmall>ul>li").hover(function(){
		var $index = $(this).index();
		$(this).css("border-color","#0000FF");
		if($index == 0){
			$(".imgSrc").attr("src","img/34d49892-f5f0-46cd-bbef-6fd3b9c4046a.jpg")
		}else{
			$(".imgSrc").attr("src","img/8b29b297-3343-451f-851b-9ea0d0676906.png")
		}
	},function(){
		$(this).css("border-color","#ccc");
	});
	
	$(".changeColor").on("click",function(){
		$(".goodsInfor").css("display","block");
		$(".changeColor").css({"background":"#fff","color":"#e#E5004B"});
		$(".changeColor").siblings().css({"background":"#eaeaea","color":"#000"});
	});
	$(".goods_nav2").on("click",function(){
		$(".goodsInfor").css("display","none");
		$(".goodsPingjia").css("display","block");
		$(".goodsQuestion").css("display","none");
		$(".goods_nav2").not(".goodsPingjia").css({"background":"#fff","color":"#E5004B"});
		$(".goods_nav2").siblings().css({"background":"#eaeaea","color":"#000"});
	});
//	$(".goods_nav3").on("click",function(){
//		$(".goodsInfor").css("display","none");
//		$(".goodsPingjia").css("display","none");
//		$(".goodsQuestion").css({"display":"block","z-index":"999"});
//		$(".goods_nav3").not(".goodsQuestion").css({"background":"#fff","color":"#E5004B"});
//		$(".goods_nav3").siblings().css({"background":"#eaeaea","color":"#000"});
//	});
	
	
	var $Val = $("#goods_text").val();
	$("#add").on("click",function(){
		$Val++;
		$("#goods_text").val($Val);	
	})
	$("#reduce").on("click",function(){
		$Val--;
		if($Val < 1){
			$("#goods_text").val(1);
			$Val = 1;
		}else{
			$("#goods_text").val($Val);	
		}
	})
	//放大镜效果
//	$(".goodsImg").mouseenter(function(){
//		$("#bigCursor").show()
//	})
	//放大镜跟随移动代码
//	var _left = e.pageX - $div.offset().left;//鼠标X坐标 - 小图容器left值
//	var _top = e.pageY - $div.offset().top;//鼠标Y坐标 - 小图容器top值
//	var $left,$top;//$left放大镜的left值，$top放大镜的top值
//	move(_left,_top);
//
//	function move(left,top) {//放大镜跟随移动函数
//		if (left <= $smallMagWidth / 2) { //$smallMagWidth放大镜的宽度
//			$left = 0; //防止放大镜从左边框移出
//		} else if (left >= ($previewWidth - $smallMagWidth / 2)) {//$previewWidth小图容器的宽度
//			$left = $previewWidth - $smallMagWidth;//防止放大镜从右边移出
//		} else {
//			$left = left - $smallMagWidth / 2;
//		}
//		if (top <= $smallMagHeight / 2) {
//			$top = 0;//防止放大镜从上边框移出
//		} else if (top > ($previewHeight - $smallMagHeight / 2)) {
//			$top = $previewHeight - $smallMagHeight;//防止放大镜从下边框移出
//		} else {
//			$top = top - $smallMagHeight / 2;
//		}
//		return [$left, $top];//返回放大镜的left值和top值组成的数组，第1个元素是放大镜的left值，第二个元素是放大镜的top值
//	}


//添加购物车
	var myProductName = "myProductName";
	var myProductPrice = "myProductPrice";
	var myProductImg = "myProductImg";
	var myProductNum = "myProductNum";
	var myOrderState = "myOrderState";
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	$("#addShop").click(function(){
		if(getCookie(myUserName) == "" &&getCookie(myPwd) == ""){
			alert("你还没有登录！")
		}else{
			addShop();
		}		
	})
		function addShop(){
			var productName = $(".productName").html();
			var productPrice = $(".productPrice").html();
			var productImg = $(".imgSrc").attr("src");
			var productNum = $("#goods_text").val();
			/*var jsonStr = "[{'pId':'" + pId + "',"+
			"'productName':'" + productName + "',"+
			"'productPrice':'" + productPrice + "',"+
			"'productImg':'" + productImg + "',"+
			"'productNum':'" + productNum + "',"+
			"'productColor':'" + productColor + "',"+
			"'productSize':'" + productSize +"'}]";*/
					alert("准备加入购物车");
					addCookie(myProductName,productName,5);
					addCookie(myProductPrice,productPrice,5);
					addCookie(myProductImg,productImg,5);
					addCookie(myProductNum,productNum,5);
					addCookie(myOrderState,"0",5);
					window.location = "buy/shopCar.html";
		}
});
