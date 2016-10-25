/**
 * Created by Administrator on 2016/9/26.
 */
/**
 * Created by Administrator on 2016/9/26.
 */
function onFocus() {
    var phonenumber=$("#int_number").val();
    if(phonenumber!=""){
        $(this).addClass('focusPhone');
        $(".tips1").addClass("tips1_focus");
    }
    $("#int_number").focus(function () {
        $(this).addClass('focusPhone');
        $(".tips1").addClass("tips1_focus");
    })
    $("#int_number").blur(function () {
        phonenumber=$("#int_number").val();
        if(phonenumber==""){
            $(this).removeClass('focusPhone');
            $(".tips1").removeClass('tips1_focus');
        }
    })
    $("#int_password").focus(function () {
        $(this).addClass("focusyanzheng");
        $(".tips2").addClass("tips2_focus");
    })
    $("#int_password").blur(function () {
        var yanzhengma=$("#int_password").val();
        if (yanzhengma==""){
            $(this).removeClass("focusyanzheng");
            $(".tips2").removeClass("tips2_focus");
        }
    })
    $("#int_yanzheng").focus(function () {
        $(this).addClass("focusyanzheng2");
        $(".tips3").addClass("tips3_focus");
    })
    $("#int_yanzheng").blur(function () {
        var yanzhengma=$("#int_yanzheng").val();
        if (yanzhengma==""){
            $(this).removeClass("focusyanzheng2");
            $(".tips3").removeClass("tips3_focus");
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
            $(".tip_phone2").show();
        }else {
            $(".tip_phone").hide();
            $(".tip_phone2").hide();
        }
    })
}

function denglu() {
    $("#int_number").blur(function () {
        var phoneNumber = $("#int_number").val();
        var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "{}";
        users = JSON.parse(users);
        if (phoneNumber in users) {
            $(".tip_phone").hide();
            $(".tip_phone2").hide();
            $(".yanzhengma2").hide();
            $(".btn").click(function () {
                location.href = "../index.html";
            });
        } else {
            $(".tip_phone").show();
            $(".tip_phone2").show();
            $(".yanzhengma2").show();
            var m;
            m = parseInt(Math.random() * 10 % 6);
            $(".yzmphoto img").attr("src", "img/yanzhengma0" + m + ".jpg");
            $(".change").click(function () {
                m = parseInt(Math.random() * 10 % 6);
                $(".yzmphoto img").attr("src", "img/yanzhengma0" + m + ".jpg");
            })
            $("#int_yanzheng").blur(function () {
                var n = parseInt($("#int_yanzheng").val());
                if (n == 15 & m == 0 | n == 17 & m == 1 | n == 13 & m == 2 | n == 5 & m == 3 | n == 11 & m == 4 | n == 9 & m == 5) {
                    $(".xx").hide();
                    $(".btn").click(function () {
                        location.href = "../index.html";
                    });
                } else {
                    $(".xx").show();
                }
            })
        }

    })
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
    denglu();
    dianji();
})