/**
 * Created by Administrator on 2016/9/26.
 */
function onFocus() {
    var phonenumber=$("#int_number").val();
    if(phonenumber!=""){
        $(this).addClass('focusPhone');
        $(".tips").addClass("tips_focus");
    }
    $("#int_number").focus(function () {
        $(this).addClass('focusPhone');
        $(".tips").addClass("tips_focus");
    })
    $("#int_number").blur(function () {
        phonenumber=$("#int_number").val();
        if(phonenumber==""){
            $(this).removeClass('focusPhone');
            $(".tips").removeClass('tips_focus');
        }
    })
    $("#int_yanzheng2").focus(function () {
        $(this).addClass("focusyanzheng2");
        $(".tips2").addClass("tips2_focus");
    })
    $("#int_yanzheng2").blur(function () {
        var yanzhengma=$("#int_yanzheng2").val();
        if (yanzhengma==""){
            $(this).removeClass("focusyanzheng2");
            $(".tips2").removeClass("tips2_focus");
        }
    })
}

function checkClick() {
    $(".check").click(function () {
        $(".check span").toggleClass("spancheck");
    })
    $(".zidong").mouseenter(function () {
        $(".tip").show();
    })
    $(".zidong").mouseleave(function () {
        $(".tip").hide();
    })
}

function yanzheng() {
    var _reg=/^1(3|4|5|7|8)\d{9}$/;
    $("#int_number").blur(function () {
        var phonenumber=$("#int_number").val();
            if (!phonenumber.match(_reg)) {
                $(".tip_phone").show();
            }else {
                $(".tip_phone").hide();
            }
        })
    var _reg2=/\d{6}/;
    $("#int_yanzheng2").blur(function () {
        var phoneyanzhengma=$("#int_yanzheng2").val();
        if(!phoneyanzhengma.match(_reg2)){
            $(".tip_yanzheng").show();
        }else {
            $(".tip_yanzheng").hide();
        }
    })
}

function zhuce() {
    $("#int_number").blur(function (){
        var phoneNumber=$("#int_number").val();
        var users=$.cookie("registerUsers")?$.cookie("registerUsers"): "{}";
        users = JSON.parse(users);
        if(phoneNumber in users){
            $(".guize").hide();
            $(".btn").click(function () {
                //alert(1);
               /* users[phoneNumber]=phoneNumber;
                usersStr = JSON.stringify(users);
                $.cookie("registerUsers", usersStr, {expires: 7, path: "/"});*/
                location.href = "../index.html";
            });
        }else {
            if (phoneNumber!=""){
                $(".guize").show();
                var m;
                m = parseInt(Math.random() * 10 % 6);
                $(".yzmphoto img").attr("src", "img/yanzhengma0" + m + ".jpg");
                $(".change").click(function () {
                    m = parseInt(Math.random() * 10 % 6);
                    $(".yzmphoto img").attr("src", "img/yanzhengma0" + m + ".jpg");
                })
                $("#int_yanzheng1").blur(function () {
                    var n = parseInt($("#int_yanzheng1").val());
                    if (n == 15 & m == 0 | n == 17 & m == 1 | n == 13 & m == 2 | n == 5 & m == 3 | n == 11 & m == 4 | n == 9 & m == 5) {
                        $(".xx").hide();
                        $(".btn").click(function () {
                            //alert(1);
                            users[phoneNumber]=phoneNumber;
                            usersStr = JSON.stringify(users);
                            $.cookie("registerUsers", usersStr, {expires: 7, path: "/"});
                            location.href = "../index.html";
                        });
                    } else {
                        $(".xx").show();
                    }
                })
            }
        }
    })
    /*$(".btn").click(function () {
        alert(1);
       /!* users["number"]=phoneNumber;
        usersStr = JSON.stringify(users);
        $.cookie("registerUsers", usersStr, {expires: 7, path: "/"});*!/
        window.location =url("logindenglu.html") ;
    });*/
}

function dianji() {
    $(".login_title li a").click(function () {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    })
}











$(function () {
    onFocus();
    checkClick();
    yanzheng();
    zhuce();
    dianji();
})