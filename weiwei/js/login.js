/**
 * Created by Administrator on 2016/9/20.
 */
$(function (){
    $("#loginBtn").click(function (){
        // 获取用户输入的用户名和密码
        var usn = $('#usn').val();
        var pwd = $("#psd").val();
        // 校验用户名和密码是否正确
        var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "";
        users = convertStrToObj(users);
        // users["test1"]    "123"
        if(users[usn] == pwd){
            $.cookie("loginedUser", usn, {expires:7 , path:"/"});
            // 跳转到首页
            window.location.href = "index.html";
        } else {
            // 登录失败
            alert("用户名或密码不匹配， 请确认后重试。");
        }
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
