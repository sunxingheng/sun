/**
 * Created by Administrator on 2016/9/20.
 */
//购物袋下拉框
function bag() {
    $("#bag").mouseenter(function () {
        $("#newbag").addClass("baghover");
        $("#mybag").show();
    })
    $("#bag").mouseleave(function () {
        $("#newbag").removeClass("baghover");
        $("#mybag").hide();
    })
}

//我的走秀下拉框
function myshow() {
    $("#myshow").mouseenter(function () {
        $("#myshow_nei").removeClass("hide").addClass("show hover");
        $("#my_show").show();
    })
    $("#myshow").mouseleave(function () {
        $("#myshow_nei").removeClass("show hover").addClass("hide");
        $("#my_show").hide();
    })
}

//头部导航点击的状态
function headnav() {
    $(".inhead_nav a").not(".hot").click(function () {
        $(".inhead_nav a").removeClass("navhover redhover");
        $(this).addClass("navhover");
    })
    $(".hot").click(function () {
        $(".inhead_nav a").removeClass("navhover");
        $(this).addClass("redhover");
    })
}

//bannner轮播图
function banner() {
    /*图片轮播和圆点轮播*/
    var _left=0;
    var _timer=0;
    var j=0;
        function luobo() {
            window.clearTimeout(_timer);
            $(".banner_ul").css({left:_left+"px"});
            $(".circle li").removeClass();
            $(".circle li").eq(j).addClass("black");
           if(_left%1200==0){
               _timer=window.setTimeout(luobo,2000);
               j++;
           }else {
               _timer=window.setTimeout(luobo,10);
           }
            _left-=40;
            if(_left<=-6000){
                _left=0;
            }
            if(j>=5){
                j=0;
            }
        }
        luobo();
    /*圆点点击*/
    $(".circle li").mouseenter(function () {
        window.clearTimeout(_timer);
        var index=$(this).index();
        $(".circle li").removeClass();
        $(this).addClass("black");
        $(".banner_ul").stop().animate({left:-index*1200+"px"});
        _left=-index*1200;
        j=index;
    });
    $(".circle li").mouseleave(function () {
        luobo();
    })
}

/*滚动条滚动效果*/
function gundong() {
    $(window).scroll(function () {
        var st=$(this).scrollTop();
        if(st>130){
            $("#head_hide_nav").show();
            $("#hide_nav").show();
        }else {
            $("#head_hide_nav").hide();
            $("#hide_nav").hide();
        }
    })
}



/*导航栏鼠标移入事件*/

function navmouseover() {
    $(".nav li").mouseover(function () {
        $(this).find('.nav_title').addClass("nav_hover");
        $(this).find(".nav_show_menu").show();
    })
    $(".nav li").mouseout(function () {
        $(this).find('.nav_title').removeClass("nav_hover");
        $(".nav_show_menu").hide();
    })
}


/*获取用户名*/


function yonghuming() {
    $(function (){
        // 获取到已登录的用户名
        var loginedUser = $.cookie("registerUsers");
        var name=JSON.parse(loginedUser);
        if(loginedUser){
            for(key in name){
                $("#login").html("<span>欢迎回来，" + name[key] + "</span>");
            }
            var myA = $("<a href='login/loginzhuce.html'>注销</a>");
            $("#login").append(myA);
        } else {
            $("#login").html('<a class="yonghu" href="#">登录/注册</a>');
        }
    });
}
/*分享移入事件*/

function yiru1() {
    $(".main_click a").mouseenter(function () {
        $(this).stop().animate({"left":"-15px"},300)
    })
    $(".main_click a").mouseleave(function () {
        $(this).stop().animate({"left":0},300)
    })
}


/*热荐专题移入事件*/

function yiru2() {
    $(".hot_ul li a").mouseenter(function () {
        $(this).find("img.hot").stop().animate({"width":"624px","height":"312px","left":"-1.04%","top":"-1.04%"},300);
    })
    $(".hot_ul li a ").mouseleave(function () {
        $(this).find("img.hot").stop().animate({"width":"600px","height":"300px","left":"0","top":"0"},300)
    })
}
/*精选卖场移入事件*/

function yiru3() {
    $(".choice_ul li a").mouseenter(function () {
        $(this).find("img.choice").stop().animate({"width":"420px","height":"315px","left":"-1.05%","top":"-1.05%"},300);
    })
    $(".choice_ul li a ").mouseleave(function () {
        $(this).find("img.choice").stop().animate({"width":"400px","height":"300px","left":"0","top":"0"},300)
    })
}

/*返回顶部*/

function fanhui() {
    $(".up").click(function () {
        $("html,body").animate({scrollTop:0},500)
    })
}

$(function () {
    bag();
    myshow();
    headnav();
    banner();
    gundong();
    navmouseover();
    yonghuming();
    yiru1();
    yiru2();
    yiru3();
    fanhui();
    /*导航栏json数据导入*/
    $.get("js/product.json", null, function (data){
        var show_left=$(".show_left");
        //console.log(show_left);
        var a_list='';
        for(var key in data){
            a_list+="<a class='list_title' href=\""+data[key]["url"]+"?id="+key+"\">"+data[key]["name"]+"</a>";
            for(var p in data[key]["children"]){
                a_list+="<span>";
                a_list+="<a href="+data[key]["children"][p]["url"]+"?id="+p+">"+data[key]["children"][p]["name"]+"</a>";
                a_list+="|</span>";
            }
        }
        show_left.html(function (index,originHtml) {
            return originHtml+a_list;
        })
        a_list=null;
    });
    $.get("js/product2.json", null, function (data2){
        //console.log(1)
        var show_right = $(".show_right");
        var a_list='' ;
        for (var key in data2) {
            a_list+="<span>";
            a_list += "<a href=\"" + data2[key]["url"] + "?id=" + key + "\">" + data2[key]["name"] + "</a>";
            a_list+="</span>";
        }
        show_right.html(function (index,originHtml) {
            return originHtml+a_list;
        })
        a_list = null;
    });
});































