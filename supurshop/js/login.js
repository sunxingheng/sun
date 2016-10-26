//登录验证
$(function(){
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";

	$(".login_submit").on("click",function(){
			var userName = $("#userName").val();
		var pwd = $("#pwd").val();
		if(userName == ""&&pwd == ""){
			$(".loginForm_user").css("border","1px solid blue");
			$(".loginForm_pwsd").css("border","1px solid red");
			$(".Form_icon").css("background-position","13px 13px");
			$(".Form_icon1").css("background-position","14px -45px");
		}else{
			login(userName,pwd);
		}
	});
//	$("#drag").drag();
	var isDrag = false;
	function login(userName,pwd){
		var myUserName = "myUserName";
		var myPwd = "myPwd";
		if(getCookie(myUserName) != userName){
			alert("此用户不存在")
		}else{
			if(getCookie(myPwd) != pwd){
				alert("密码不正确")
			}else{
				if(isDrag){
					isDrag = true;
					updateCookie(isLogin,"1");
					window.location = "index.html";
				}else{
					if($('#drag').drag() == true){
						
					}else{
						alert("请滑动滑块验证")
					}
					isDrag = true;
				}
				
				
			}
		}
	}
	
});
