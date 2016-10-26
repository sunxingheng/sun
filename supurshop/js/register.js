$(function(){
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";
	//0表示未登录,1表示登录
	
	//随机生成验证码
	function random4(){
   		return Math.floor(Math.random()*10000)
    }
	function randomColor(){
		var R = Math.floor( Math.random()*256 ).toString(16);
		var G = Math.floor( Math.random()*256 ).toString(16);
		var B = Math.floor( Math.random()*256 ).toString(16);
		var color = "#"+(R.length < 2 ? "0"+R : R) + (G.length < 2 ? "0"+G : G) + (B.length < 2 ? "0"+B : B);
		return color;
	}
		color=randomColor();
		color1=randomColor();
		arg=random4();
		arg1=random4();
		$(".yzm").html(arg);
    	$(".yzm").css({"color":color,"background":color1});
	$(".yzm").on("click",function(){
		color=randomColor();
		color1=randomColor();
		arg=random4();
		$(".yzm").html(arg);
    	$(".yzm").css({"color":color,"background":color1});
	})
	
   	//验证码验证
   	$("#yzm").on("blur",function(){
   		var yzmVal = $("#yzm").val();
   		if(yzmVal == arg){
   			$("#yzm").css("border","1px solid green");
   		}else{
   			$("#yzm").css("border","1px solid red");
   		}
   	})
    
    //获取手机验证码
    $(".yzmBtn").on("click",function(){
    	arg1=random4();
    	$(".yzmBtn").html("已发送")
    	alert(arg1);
//  	return num;
    });
    
    //验证手机验证码
    $("#yzm2").on("blur",function(){
//  	var num = random4();
		var PhoneNum = $("#yzm2").val();
		if(PhoneNum == arg1){
			$("#yzm2").css("border","1px solid green");
		}else{
			$("#yzm2").css("border","1px solid red");
		}
	});
	
	//用户名验证	
	$("#userName").on("blur",function(){
		var userName = $("#userName").val();
		var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		var reg2 = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
		if(reg.test(userName) || reg2.test(userName)){
			$(".registerForm_user").css("border","1px solid green");
		}else{
			$(".registerForm_user").css("border","1px solid red");
		}
	});
	
	
	//密码验证
	$("#pwd").on("blur",function(){
		var pwd = $("#pwd").val();
		var reg3 = /^[A-Za-z0-9]{6,16}$/;
		if(reg3.test(pwd)){
			$(".registerForm_pwsd").css("border","1px solid green");
//			alert(1)
		}else{
			$(".registerForm_pwsd").css("border","1px solid red");
//			alert(0)
		}
	});
    
    //判断是否为空
	$(".login_submit").on("click",function(){
		var userName = $("#userName").val();
		var pwd = $("#pwd").val();
		var yzm = $("#yzm").val();
		var yzm2 = $("#yzm2").val();
		
	
		if(userName == ""&&pwd == ""&&yzm ==""&&yzm2 ==""){
			alert("请完善信息");
		}else{
				register(userName,pwd);
			}
	});
	
	
	
	function register(userName,pwd){
	
		if(getCookie(myUserName) == userName){
			alert("此用户已经注册，请直接登录")
		}else{
			addCookie(myUserName,userName,5);
			addCookie(myPwd,pwd,5);
			addCookie(isLogin,"0",5);
			alert("注册成功！去登陆吧！")
			window.location = "index.html";
			
		}
	}
});
