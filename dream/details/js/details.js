/**
 * Created by Administrator on 2016/9/26.
 */
$(function(){
    $.getJSON("list/js/list.json",function(data){
        var GoodId=window.location.href.split("?")[1];
        $("title").text(data[GoodId]["name"]);
        $("#detailmain .LOADGOOD")[0].src="list/"+data[GoodId]["src"];
        $("#detailmain .Bigmirror img")[0].src="list/"+data[GoodId]["src"];
        $("#detailmain .Center h2").text(data[GoodId]["name"]);
        $("#detailmain .CenterTop h3").text(data[GoodId]["prise"]);
        $("#detailmain .CenterTop .shop").text(data[GoodId]["shop"]);
        $("#detailmain .Choose").each(function(){
            $(this).find("img")[0].src="list/"+data[GoodId]["src"];
        });
        $("#detailmain .Littleimg img").each(function(){
            this.src="list/"+data[GoodId]["src"];
            $(this).mouseenter(function(){
                $(this).addClass("on").siblings().removeClass("on")
            })
        });
    });
    $("#detailmain .GoodContainer").mousemove(function(e){
        $("#detailmain .Littlemirror").css("display","block");
        $("#detailmain .Bigmirror").css("display","block");
        var e = e || window.event;
        $("#detailmain .Littlemirror").css({
            left: e.clientX-$("#detailmain .margin")[0].offsetLeft-81,
            top: e.clientY-423+$(document).scrollTop()*1
        });
        if(parseInt($("#detailmain .Littlemirror").css('left'))<=0){$("#detailmain .Littlemirror").css('left',0)}
        if(parseInt($("#detailmain .Littlemirror").css('left'))>=268){$("#detailmain .Littlemirror").css('left',268)}
        if(parseInt($("#detailmain .Littlemirror").css('top'))<=0){$("#detailmain .Littlemirror").css('top',0)}
        if(parseInt($("#detailmain .Littlemirror").css('top'))>=362){$("#detailmain .Littlemirror").css('top',362)}
        $("#detailmain .Bigmirror img").css('left',-parseInt($("#detailmain .Littlemirror").css('left'))*4.2);
        $("#detailmain .Bigmirror img").css('top',-parseInt($("#detailmain .Littlemirror").css('top'))*4.2);
    });
    $("#detailmain .GoodContainer").mouseleave(function(){
        $("#detailmain .Littlemirror").css("display","none");
        $("#detailmain .Bigmirror").css("display","none");
    });
    $("#detailmain .Center .Choose .size").not(".first").each(function(){
        $(this).click(function(){
            $(this).addClass('on').siblings().not('.Color').removeClass('on');
        })
    });
    $("#detailmain .Center .Choose .NUM span.jia").click(function(){
        var NUMNUM=$(this).siblings(".num").text();
        NUMNUM=NUMNUM*1+1;
        $(this).siblings(".num").text(NUMNUM);
    });
    $("#detailmain .Center .Choose .NUM span.jian").click(function(){
        var NUMNUM=$(this).siblings(".num").text();
        NUMNUM=NUMNUM*1-1>0?NUMNUM*1-1:1;
        $(this).siblings(".num").text(NUMNUM)
    });
    //购物车中增添
    $("#detailmain .Center .Choose .cart").click(function(e){
        var e=e||window.event;
        e.stopPropagation();
        var This=this;
        $.getJSON("list/js/list.json",function(data) {
            console.log(This);
            var Data=data;
            var DataId = window.location.href.split("?")[1];
            var Size = $(This).siblings(".on").text();
            var users = $.cookie("registerUsers");
            var Addnum = $(This).siblings(".NUM").find(".num").text() * 1;
            var nowusers = StrToObj3Arr(users);
            var loginUser = $.cookie("loginUser");
            var CANI=true;
            if (/@/.test(loginUser)) {
                nowusers = nowusers[0];
            } else if(/\d{11}/.test(loginUser)){
                nowusers = nowusers[1];
            }else{
                alert('亲，请登录、');
                CANI=false;
            }
            if(CANI) {
                // 做一个飞入购物车的效果
                var cloneImg = $("#detailmain .LOADGOOD").clone().css({
                    width : 69,
                    height : 93
                });
                console.log()
                cloneImg.fly(
                    {
                        start : {
                            top : e.clientY-93,
                            left : e.clientX-69
                        },
                        end : {
                            top : $("#sidebar #sidebarCartNumber").offset().top-$(document).scrollTop(),
                            left : $("#sidebar #sidebarCartNumber").offset().left,
                            width : 0,
                            height : 0
                        },
                        vertex_Rtop: 0,
                        autoPlay : true,
                        onEnd : function (){
                            cloneImg.remove();
                        }
                    }
                );
                //if(nowusers[loginUser]){////Mail1 Phone1 goodid1M*1+,
                var reg = new RegExp(".*" + DataId + Size + ".*?\\+");
                if (reg.test(nowusers[loginUser])) {//如果cookie中有当前商品id且尺寸相同将数字加一
                    var REGuser = new RegExp(loginUser + ".*?" + DataId + Size + ".*?\\+");
                    var GOOD = users.match(REGuser);//Mail1 Phone1 goodid1M*1+,
                    var GOODREG = new RegExp(DataId + Size + "\\*\\d+?\\+");
                    var GOODNUM = GOOD[0].match(GOODREG);//goodid1M*1+
                    GOODNUM = GOODNUM[0].split("*")[1];
                    GOODNUM = (GOODNUM.match(/\d+/))[0] * 1 + Addnum;
                    GOOD = GOOD[0].replace(GOODREG, DataId + Size + "*" + GOODNUM + "+");
                    users = users.replace(REGuser, GOOD);
                } else {//如果cookie中有当前商品id但尺寸不同  或没有当前商品（作为一类处理）
                    var REG = new RegExp(loginUser + ".*?,");
                    var good = users.match(REG);    //Mail1 Phone1 ,
                    good = good[0].replace(',', DataId + Size + "*1+,"); //Mail1 Phone1 goodid1M*1+,
                    users = users.replace(REG, good);
                    $("#sidebar #Cart .container").append(
                        '<div class="goodcontainer clear" data-id="' + DataId + '" data-size="' + Size + '">' +
                        '<h2 class="over clear"><a class="left">' + Data[DataId]["shop"] + '</a><span class="right delate">删除</span></h2>' +
                        '<div class="left _left"><img src="list/' + Data[DataId]["src"] + '"></div>' +
                        '<div class="left _right">' +
                        '<p class="name over"><a href="#">' + Data[DataId]["name"] + '</a></p>' +
                        '<p class="number">' +
                        '<span class="size">' + Size + '</span>' +
                        '<span class="jian">－</span>' +
                        '<span class="num">' + Addnum + '</span>' +
                        '<span class="jia">＋</span>' +
                        '<span class="prise">单:' + Data[DataId]["prise"] + '</span>' +
                        '<span class="sum">' + Data[DataId]["prise"] + '</span>' +
                        '</p>' +
                        '</div>' +
                        '</div>'
                    );
                }
                $.cookie("registerUsers", users, {expires: 7, path: "/"});
                LoadCart();
            }
        })
    })
    $("#detailmain .Right .shang").click(function(){
        var TOP=$("#detailmain .Right .innerloadmorecontainer").css("top");
        TOP=parseInt(TOP)+582;
        $("#detailmain .Right .innerloadmorecontainer").animate({top:TOP},500)
        if(TOP>0){
            var t=window.setTimeout(function(){
                $("#detailmain .Right .innerloadmorecontainer").stop().animate({top:0},300)
            },400)
        }
    })
    $("#detailmain .Right .xia").click(function(){
        var TOP=$("#detailmain .Right .innerloadmorecontainer").css("top");
        TOP=parseInt(TOP)-582;
        $("#detailmain .Right .innerloadmorecontainer").animate({top:TOP})
        if(TOP<-1164){
            var t=window.setTimeout(function(){
                $("#detailmain .Right .innerloadmorecontainer").stop().animate({top:-1164},300)
            },400)
        }
    })
    $("#Detail .tabBottonContainer .tabBotton").each(function(index){
        $(this).click(function(){
            $(this).addClass('on').siblings().removeClass('on');
            $('#Detail .Right .tabMain img')[0].src='details/img/tab'+(1+index*1)+'.jpg';
        })
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>=1051){
            $('#Detail .tabBottonContainer').addClass('scroll')
        }else{
            $('#Detail .tabBottonContainer').removeClass('scroll')
        }
    })
});