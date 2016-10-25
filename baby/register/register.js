/**
 * Created by Administrator on 2016/9/21.
 */

//图片运动
$(function(){
    $(".cent img").animate({
        "margin-top":100,
        "margin-left":100
    },1500)
})


//鼠标经过
$(function(){
    $(".btn").hover(
        function(){
            $(this).css({background:"#999"})
        },
        function(){
            $(this).css({background:"#fff5ed"})
        }
    )
})

$(function(){
    $(".register").hover(
        function(){
            $(this).css({width:"145",height:"45",background:"#f00"})
        },
        function(){
            $(this).css({width:"140",height:"40",background:"#e13f90"})
        }
    )
})

//注册用户
$(function (){
    $("#goLogin").click(function (){
        location.href = "../login/login.html";

    });
    $("#register").click(function (){
        // 获取到用户输入的用户名和密码
        var usn = $('#username').val();
        var pwd = $("#password").val();
        var con = $("#conPwd").val();

        // 用户名不能为空
        if(!usn){
            alert("用户名不能为空");
            return;
        }
        //用户名不能含有非法字符
        var reg=/\W+/;
        if(reg.test(usn)){
            alert("含有非法字符！，请重新输入");
            return;
        }

        // 检测密码是否相同
        // 密码不能为空，密码至少6位
        if(pwd !== con){
            alert("两次输入的密码不相同，请重试！");
            return;
        }
        if(pwd.length<6){
            alert("至少六位，请重试！");
            return;
        }

        // 检测一下用户是否已经存在
        // "test1,123:test2,abc:test3,888"
        /* {
         * 	 test1 : 123,
         * 	 test2 : abc,
         *   test3 : 888,
         * 	 test4 : 444
         * }
         */
        var users = $.cookie("registerUsers")? $.cookie("registerUsers") : "";
        users = convertStrToObj(users);

        if(usn in users){
            alert("用户名已经被注册");
            return;
        } else {
            // 注册成功, 设置用户信息的cookie
            // test1 123  test2 abc  test3 888
            // "test1,123:test2,abc:test3,888"
            // name value expires
            // registerUsers
            // 将用户添加到已注册用户对象中
            users[usn] = pwd;
            // 将用户信息对象转化回字符串，以便于设置cookie
            usersStr = convertObjToStr(users);
            // 设置用户信息的cookie
            $.cookie("registerUsers", usersStr, {expires:7, path:"/"});
            alert("注册成功");
        }

    });

    function convertObjToStr(obj){
        /* {
         * 	 test1 : 123,
         * 	 test2 : abc,
         *   test3 : 888,
         * 	 test4 : 444
         * }
         */
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