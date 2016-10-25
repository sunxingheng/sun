/**
 * Created by Administrator on 2016/9/25.
 */
/*返回用户名*/
$(function (){
    // 获取到已登录的用户名
    var loginedUser = $.cookie("loginedUser");
    if(loginedUser){
         $('#log1').hide();
        $('#log').append("<span>欢迎回来，" + loginedUser + "</span>");
        var myA = $("<a href='login.html'>注销</a>");
        myA.click(function (){
            var res = $.removeCookie("loginedUser", {path : "/"});
            if(!res){
                alert("注销失败");
                return false;
            }
        });
        $('#log').append(myA).css({"marginRight":"5px"});
    } else {
        $('#log').append("<a href='login.html' style='color: #ffa500'>亲，请登录</a>");
    }
});

 //	吸顶效果
$(function () {
    var $Theight = $('#daohang').offset().top;
    $(window).scroll(function() {
        var $Th = $(this).scrollTop();
        if ($Th > $Theight) {
            $('#daohang').css({
                'position': 'fixed',
                'top': '0'
            });
        } else {
            $('#daohang').css({
                'position': 'static',
                'top': '0'
            });
        }
    });

})
