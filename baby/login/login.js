/**
 * Created by Administrator on 2016/9/21.
 */
$(function(){
    $("#login").hover(
        function(){$(this).css({background:"#f00",width:"145",height:"45"})},
        function(){$(this).css({background:"#de3888",width:"140",height:"40"})}
    )
})




$(function(){
    $(".lglg").click(function(){
        location.href="../index.html"
    })
})

/*左边图片执行动画*/
$(function(){
    $(".cent img").animate({
        //display:"block",
        "margin-top":100
    },1000)
    $(".cent img").animate({
        //display:"block",
        "margin-left":100
    },1500)
})


/*登录*/
$(function (){
    $("#login").click(function (){
        // 获取用户输入的用户名和密码
        var usn = $('#username').val();
        var pwd = $("#password").val();

        // 校验用户名和密码是否正确
        var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "";
        // "test1,123:test2,abc:test3,888"
        // 方法一：
        /*
         users = users.split(":");
         for(var i = 0; i < users.length; i++){
         var data = users[i].split(",");
         if(data[0] == usn){
         if(data[1] == pwd){
         // 如果正确，则登录成功
         $.cookie("loginedUser", usn, {expires:7 , path:"/"});
         // 跳转到首页
         window.location.href = "index.html";
         return;
         }
         }
         }
         alert("用户名或密码不匹配， 请确认后重试。");
         */
        // 方法二
        /* {
         * 	 test1 : 123,
         * 	 test2 : abc,
         *   test3 : 888,
         * 	 test4 : 444
         * }
         */
        users = convertStrToObj(users);

        // users["test1"]    "123"
        if(users[usn] == pwd){
            // 如果正确，则登录成功
            // name value expires
            // 登录成功
            $.cookie("loginedUser", usn, {expires:7 , path:"/"});

            // 跳转到首页
            window.location.href = "../index.html";
        } else {
            // 登录失败
            alert("用户名或密码不匹配， 请确认后重试。");
        }
    });

    $("#goRegister").click(function (){
        location.href = "register.html";

    });

    function convertObjToStr(obj){

        // "test1,123:test2,abc:test3,888"
        var res = "";
        for(var usn in obj){
            var pwd = obj[usn];
            // 看是否是第一组用户名和密码信息
            // 如果不是，先在前面添加一个:
            if(res){
                res += ":";
            }
            res += usn + "," + pwd;
        }
        return res;
    }
    function convertStrToObj(str){
        if(!str){
            return {};
        }
        // "test1,123:test2,abc:test3,888"
        var users = str.split(":");
        var res = {};
        for(var i = 0; i < users.length; i++){
            //["test1", "123"]
            var userData = users[i].split(",");
            res[userData[0]] = userData[1];
        }

        return res;
    }
});