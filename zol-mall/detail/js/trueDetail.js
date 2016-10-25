$(function() {
	$("#header-contents").load("header.html");
	$("#footer-contents").load("footer.html");

	//小图与normal图还有大图的点击切换
	$(".small-pic-con li").on("click", function() {
		$(".small-pic-con li").removeClass("active");
		$(this).addClass("active");
		if ($(this).index() == 0) {
			$("#normalPic").attr("src", "img/zhengmian.jpg");
			$("#bigPic").attr("src", "img/zhengmianda.jpg");
		} else if ($(this).index() == 1) {
			$("#normalPic").attr("src", "img/houbian.jpg");
			$("#bigPic").attr("src", "img/houbianda.jpg");
		} else if ($(this).index() == 2) {
			$("#normalPic").attr("src", "img/cebian.jpg");
			$("#bigPic").attr("src", "img/cebianda.jpg");
		}
	});


	$(".share>li").hover(function() {
		$(this).find(".zhegai").hide();
	}, function() {
		$(this).find(".zhegai").show();
	});
	$("#share2").hover(function() {
		$(this).find(".img-list").show();
	}, function() {
		$(this).find(".img-list").hide();
	});

	//商品放大镜
	function getByClass(oParent, sClass)
	{
		var aEle=oParent.getElementsByTagName('*');
		var aTmp=[];
		var i=0;

		for(i=0;i<aEle.length;i++)
		{
			if(aEle[i].className==sClass)
			{
				aTmp.push(aEle[i]);
			}
		}

		return aTmp;
	}

	window.onload=function ()
	{
		var oDiv=document.getElementById('div1');
		var oMark=getByClass(oDiv, 'mark')[0];
		var oFloat=getByClass(oDiv, 'float_layer')[0];
		var oBig=getByClass(oDiv, 'big_pic')[0];
		var oSmall=getByClass(oDiv, 'small_pic')[0];
		var oImg=oBig.getElementsByTagName('img')[0];

		oMark.onmouseover=function ()
		{
			oFloat.style.display='block';
			oBig.style.display='block';
		};

		oMark.onmouseout=function ()
		{
			oFloat.style.display='none';
			oBig.style.display='none';
		};

		oMark.onmousemove=function (ev)
		{
			var oEvent=ev||event;

			var l=oEvent.clientX-oDiv.offsetLeft-oSmall.offsetLeft-oFloat.offsetWidth/2;
			var t=oEvent.clientY-oDiv.offsetTop-oSmall.offsetTop-oFloat.offsetHeight/2;

			if(l<0)
			{
				l=0;
			}
			else if(l>oMark.offsetWidth-oFloat.offsetWidth)
			{
				l=oMark.offsetWidth-oFloat.offsetWidth;
			}

			if(t<0)
			{
				t=0;
			}
			else if(t>oMark.offsetHeight-oFloat.offsetHeight)
			{
				t=oMark.offsetHeight-oFloat.offsetHeight;
			}

			oFloat.style.left=l+'px';
			oFloat.style.top=t+'px';

			var percentX=l/(oMark.offsetWidth-oFloat.offsetWidth);
			var percentY=t/(oMark.offsetHeight-oFloat.offsetHeight);

			oImg.style.left=-percentX*(oImg.offsetWidth-oBig.offsetWidth)+'px';
			oImg.style.top=-percentY*(oImg.offsetHeight-oBig.offsetHeight)+'px';
		};
	};

	$(function(){
		$(function(){
//                console.log($('#show-pic ul li'));
			$('#show-pic ul li').click(function () {
				$('#show-pic ul li').removeClass('selected');
				$(this).addClass('selected');
				//       切换图片
				var index=$(this).index();
//                        alert(index);
				$('.small_pic img').attr('src','images/small-camera'+(index+1)+'.jpg');
				$('.big_pic img').attr('src','images/small-camera'+(index+1)+'.jpg')
			})
		})


	});











	//地址栏的关闭
	$(".close").on("click", function() {
		$(this).parent().hide();
	});

	//颜色分类的选择
	$(".yanse li").on("click", function() {
		$(".yanse li").removeClass("can-buy");
		$(this).addClass("can-buy");
	});

	//商品数量的加减的实现
	$(".zs-decrease").on("click", function() {
		$_num = parseInt($("#pay-num").val()) - 1;
		if ($_num < 10) {
			$(".zs-increase").removeClass("zs-no-increase");
		}
		if ($_num > 1) {
			$("#pay-num").val($_num);
			$(this).removeClass("zs-no-decrease");
		} else if ($_num <= 1) {
			$("#pay-num").val(1);
			$(this).addClass("zs-no-decrease");
		}
	})

	$(".zs-increase").on("click", function() {
		var $num = parseInt($("#pay-num").val()) + 1;
		if ($num > 1) {
			$(".zs-decrease").removeClass("zs-no-decrease");
		}
		if ($num < 10) {
			$("#pay-num").val($num);
			$(this).removeClass("zs-no-increase");
		} else if ($num == 10) {
			$("#pay-num").val(10);
			$(this).addClass("zs-no-increase");
		}
	});

	//左侧菜单栏
	$(".zp-goods-category").each(function() {
		var time = 1;
		$(this).on("click", function() {
			time++;
			if (time % 2 == 0) {
				$(this).removeClass("fold");
				$(this).addClass("unfold");
			} else {
				$(this).removeClass("unfold");
				$(this).addClass("fold");
			}

			$(this).find("ul").slideToggle();

		})
	})

	//左侧终级菜单切换
	$("#fn1").on("mouseenter", function(){
		$(".side-tab li").removeClass("current");
		$(this).addClass("current");
		$("#sell-goods").show();
		$("#top-goods").hide();
	});
	$("#fn2").on("mouseenter", function(){
		$(".side-tab li").removeClass("current");
		$(this).addClass("current");
		$("#sell-goods").hide();
		$("#top-goods").show();
	});

	//商品评价与商品详情的切换
	$(".pro-xiangqing").on("click", function(){
		$(".pro-detail li").removeClass("on");
		$(this).addClass("on");
		$(".xiangqing").show();
		$(".pingjia").hide();
	})
	$(".pro-pingjia").on("click", function(){
		$(".pro-detail li").removeClass("on");
		$(this).addClass("on");
		$(".xiangqing").hide();
		$(".pingjia").show();
	})

	$(".checks label").on("click", function() {
		$(".checks label").removeClass("cur");
		$(this).addClass("cur");
	})

	//吸顶效果的实现
	$(window).scroll(function() {
//		console.log($('html,body').scrollTop());
		if($('html,body').scrollTop() > 1200){
			$(".xiding").fadeIn("400");
		}else {
			$(".xiding").fadeOut("400");
		}
	});

	//jump的窗口关闭
	$(".close-this").on("click", function(){
		$(this).parent().hide();
	});

	$(".add-shopcar").on("click", function(){	
		$(".jump").show();
	})


	
	//cookie的实现，对加入购物车按钮的实现
	$(".add-shopcar").on("click", function(){		
		if(getCookie("isLogin") == 1){
			var proName = $(".head-title").html();
			var proColor = $(".yanse .can-buy").html();
			var proSuit = $(".suit-content .can-buy").html();
			var proNum = $("#pay-num").val();
			var proPrice = $(".zs-price-panel .zs-price em").html();
			var proPic = "img/zhengmianxiao.jpg";
//			alert(proPic);
			addCookie("proName", proName, 5);
			addCookie("proColor", proColor, 5);
			addCookie("proSuit", proSuit, 5);
			addCookie("proNum", proNum, 5);
			addCookie("proPrice", proPrice, 5);
			addCookie("proPic", proPic, 5);
		}else {
			window.location = "login.html";
		}
	})
	
	
	





















});