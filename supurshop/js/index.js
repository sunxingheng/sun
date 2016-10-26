$(function(){
// 	$("#banner").children().fadeOut(0).eq(0).fadeIn(0);
//  var i = 0;
//  setInterval(function(){
//      if($("#banner").children().length > (i+1)){
//          $("#banner").children().eq(i).fadeOut(0).next("img").fadeIn(3000);
//          i++;
//      }
//      else{
//          $("#banner").children().eq(i).fadeOut(0).siblings("img").eq(0).fadeIn(3000);
//          i = 0;
//      }
//  },3000);
    
    //抢购倒计时
		//time.Times()获取当前时间的毫秒数
		var nowTime = new Date();//获取系统当前时间		 	
    	$(".time_tip").hide();
    	$(".time_group>ul>li").hover(function(){
//  		var timeLip = $(this).find(".time_list").html();//取出html里的字符串
// 			var len = timeLip.length//html里时间字符串的长度
//  		var htmltime = timeLip.slice(0,len-3)  //取出html里时间的小时位数字  
//  		
    		$(this).find(".time_tip").slideDown();
    	},function(){
    		$(this).find(".time_tip").slideUp();
    	});
	
	
	var timeLip = $(".time_list").html();//取出html里的字符串
    var len = timeLip.length//html里时间字符串的长度
    var htmltime = timeLip.slice(0,len-3)  //取出html里时间的小时位数字  	
    	if(nowTime.getTime() == new Date("2016/03/08 08:00:00").getTime()){
    		$(".time_tip").eq(0).html('疯抢中！');
    		$(".time_list").eq(0).html(
    			'<div class="time_list_change">'+
	    			'<div class="time_item" id="l8">'+
						'<strong class="hour_show">0</strong>：'+
						'<strong class="minute_show">0</strong>：'+
						'<strong class="second_show">0</strong>'+
					'</div>'+
				'</div>'
			)
    	}else if(nowTime.getTime() == (new Date("2016/03/08 10:00:00")).getTime()){
    		$(".time_tip").eq(1).html('疯抢中！');
    		$(".time_list").eq(1).html(
    			'<div class="time_list_change">'+
	    			'<div class="time_item" id="l9">'+
						'<strong class="hour_show">0</strong>：'+
						'<strong class="minute_show">0</strong>：'+
						'<strong class="second_show">0</strong>'+
					'</div>'+
				'</div>'
			)
    	}else if(nowTime.getTime() == new Date("2016/03/08 12:00:00").getTime()){
    		$(".time_tip").eq(2).html('疯抢中！');
    		$(".time_list").eq(2).html(
    			'<div class="time_list_change">'+
	    			'<div class="time_item" id="l10">'+
						'<strong class="hour_show">0</strong>：'+
						'<strong class="minute_show">0</strong>：'+
						'<strong class="second_show">0</strong>'+
					'</div>'+
				'</div>'
			)
    	}else if(nowTime.getTime() == new Date("2016/03/08 14:00:00").getTime()){
    		$(".time_tip").eq(3).html('疯抢中！');
    		$(".time_list").eq(3).html(
    			'<div class="time_list_change">'+
	    			'<div class="time_item" id="l11">'+
						'<strong class="hour_show">0</strong>：'+
						'<strong class="minute_show">0</strong>：'+
						'<strong class="second_show">0</strong>'+
					'</div>'+
				'</div>'
			)
    	}else if(nowTime.getTime() == new Date("2016/03/08 16:00:00").getTime()){
    		$(".time_tip").eq(4).html('疯抢中！');
    		$(".time_list").eq(4).html(
    			'<div class="time_list_change">'+
	    			'<div class="time_item" id="l12">'+
						'<strong class="hour_show">0</strong>：'+
						'<strong class="minute_show">0</strong>：'+
						'<strong class="second_show">0</strong>'+
					'</div>'+
				'</div>'
			)
    	}else if(nowTime.getTime() == new Date("2016/03/08 18:00:00").getTime()){
    		$(".time_tip").eq(5).html('疯抢中！');
    		$(".time_list").eq(5).html(
    			'<div class="time_list_change">'+
	    			'<div class="time_item" id="l13">'+
						'<strong class="hour_show">0</strong>：'+
						'<strong class="minute_show">0</strong>：'+
						'<strong class="second_show">0</strong>'+
					'</div>'+
				'</div>'
			)
    	}else if(nowTime.getTime() == new Date("2016/03/08 20:00:00").getTime()){
    		$(".time_tip").eq(6).html('疯抢中！');
    		$(".time_list").eq(6).html(
    			'<div class="time_list_change">'+
	    			'<div class="time_item" id="l14">'+
						'<strong class="hour_show">0</strong>：'+
						'<strong class="minute_show">0</strong>：'+
						'<strong class="second_show">0</strong>'+
					'</div>'+
				'</div>'
			)
    	}else if(nowTime.getTime() == new Date("2016/03/08 22:00:00").getTime()){
    		$(".time_tip").eq(7).html('疯抢中！');
    		$(".time_list").eq(7).html(
    			'<div class="time_list_change">'+
	    			'<div class="time_item" id="l15">'+
						'<strong class="hour_show">0</strong>：'+
						'<strong class="minute_show">0</strong>：'+
						'<strong class="second_show">0</strong>'+
					'</div>'+
				'</div>'
			)
    	}
	
	
	
    $(".li_top").hover(function(){
    	$(this).find(".buyPic").css("display","block");
    	$(".buyBtn").animate({
    		"left":"13px",
    	});
    },function(){
    	$(this).find(".buyPic").css("display","none");
    	$(".buyBtn").animate({
    		"left":"-120px",
    	});
    });
    
    $(".shell dt").hover(function(){
    	$(this).find(".shell_ad").css({
    		"top":"234px",
    	});
    	$(this).find(".shell_ad").animate({
    		"top":"178px",
    	});
    	$(this).find("p").animate({
    		"top":"10px",
    	},500);
    },function(){
    	$(this).find(".shell_ad").animate({
    		"top":"234px",
    	});
    	$(this).find("p").animate({
    		"top":"234px",
    	},500);
    });
  
    $(".first_center").hover(function(){
    	$(".first_center img").animate({"width":"410px",
	"height":"450px"})
    },function(){
    	$(".first_center img").animate({"width":"400px",
	"height":"438px"})
    });
    
    $(".first_right1 li").not(".first_right2 li").hover(function(){
    	$(this).find("img").animate({"margin-left":"10px"});
    },function(){
    	$(this).find("img").animate({"margin-left":"15px"});
    });
    
     $(".first_right2>li").hover(function(){
    	$(this).find("img").animate({"margin-left":"45px"});
    },function(){
    	$(this).find("img").animate({"margin-left":"50px"});
    });
    
    //楼梯banner轮播
//  	$(".firstBanner>ul").fadeOut(0).eq(0).fadeIn(0);
//  	var i=0;
//  	setInterval(function(){
//  		if($(".firstBanner>ul").length>(i)){
//  			$(".firstBanner>ul").eq(i).fadeOut(0).next("ul").fadeIn(1000);
//  			i++
//  		}else{
//  			$(".firstBanner>ul").eq(i).fadeOut(0).siblings("ul").eq(0).fadeIn(1000);
//          	i = 0;
//  		}
//  	},500);
    	
    	
 
    //倒计时
    var countList = ["l0","l1","l2","l3","l4","l5","l6","l7","l8","l9","l10","l11","l12","l13","l14","l15"];
	var countTime = ["2016/03/24 12:00:00","2016/03/24 12:00:00",
					 "2016/03/24 12:00:00","2016/03/28 12:00:00",
					 "2016/03/24 12:00:00","2016/03/28 12:00:00",
					 "2016/03/28 12:00:00","2016/03/28 12:00:00",
					 "2016/03/08 09:00:00","2016/03/08 11:00:00",
					 "2016/03/08 13:00:00","2016/03/08 15:00:00",
					 "2016/03/08 17:00:00","2016/03/08 19:00:00",
					 "2016/03/08 21:00:00","2016/03/08 23:00:00",
					];
	var total = countTime.length;
	for(var i = 0;i<total;i++){
		var count = new CountDownTime(countList[i],countTime[i]);
		count.show();
	}
	
	//banner插件
	var $bannerBox = $(".banner");
	var	$bannerList = $(".bannerList li");
	var	$bannerImg = $(".bannerImg");
	var	$prevBtn = $("#prevBtn");
	var	$nextBtn = $("#nextBtn");
	var	$bubble = $(".bubble");
	var duration = 3000;
	var playTime = 200;

	$.opacityFn($bannerBox,$bannerList,$bannerImg,$prevBtn,$nextBtn,$bubble,duration,playTime);
});