/**
 * Created by Administrator on 2016/9/19.
 */

//显示用户名
$(function (){
    // 获取到已登录的用户名
    var loginedUser = $.cookie("loginedUser");

    if(loginedUser){
        $('.dl').html("欢迎回来，" + loginedUser);
        var myA = $("<a href='login/login.html'>注销</a>");
        myA.click(function (){
            var res = $.removeCookie("loginedUser", {path : "/"});
            if(!res){
                alert("注销失败");
                return false;
            }
        });
        $('.zc').html(myA);
    } else {
        $('.dl').html("<a href='login/login.html'>亲，请登录</a>");
        $('.zc').html("<a href='register/register.html'>注册</a>");
    }


});



//轮播图
$(function(){
    var timer=0;
    var _left=0;
    var j=0;
    function lunbo(){
        window.clearTimeout(timer);
        _left=$(".lunx").position().left;
        //右边样式变换
        $(".ul li").removeClass();
        $(".ul li").eq(j).addClass("active");

        _left-=79;//必须能被图片width整除

        if(_left%237==0){
            timer=window.setTimeout(lunbo,1000);//停顿一秒
            j++;
        }else{
            timer=window.setTimeout(lunbo,100);//正常轮播
        }
        //返回开始位置轮播
        if(_left<=-1422){
            _left=0;
        }
        if(j>=6){
            j=0;
        }
        $(".lunx").css({left:_left+"px"});
    }
    lunbo();
    //鼠标滑过
    $("#banner .ul li").mouseover(function(){
        window.clearTimeout(timer);
        $("#banner .ul li").removeClass("active")
        $(this).addClass("active");
        //$("#banner .ul li").addClass("active").not($(this)).removeClass("active")
        var i=$(this).index();
        $(".lunx").css({left:-i*237+"px"});
    })
    $("#banner .ul li").mouseout(function(){
        lunbo();
    })
})


//图片抖动
$(function() {
   $.fn.shake = function (s) {
        var t = {
                rangeX: 2,
                rangeY: 2,
                rangeRot: 1,
                rumbleSpeed: 10,
                rumbleEvent: 'hover',
                posX: 'left',
                posY: 'top'
            },
            u = $.extend(t, s);
        return this.each(function () {
            var $obj = $(this),
                f,
                g = u.rangeX * 2,
                h = u.rangeY * 2,
                i = u.rangeRot * 2,
                j = u.rumbleSpeed,
                k = $obj.css('position'),
                l = u.posX,
                m = u.posY,
                n,
                o,
                p,
                q = {
                    'position': k,
                    '-webkit-transform': 'rotate(0deg)',
                    '-moz-transform': 'rotate(0deg)',
                    '-o-transform': 'rotate(0deg)',
                    'transform': 'rotate(0deg)'
                };
            if (l === 'left') {
                n = parseInt($obj.css('left'), 10)
            }
            if (l === 'right') {
                n = parseInt($obj.css('right'), 10)
            }
            if (m === 'top') {
                o = parseInt($obj.css('top'), 10)
            }
            if (m === 'bottom') {
                o = parseInt($obj.css('bottom'), 10)
            }
            function rumbler(a) {
                var b = Math.random(),
                    c = Math.floor(Math.random() * (g + 1)) - g / 2,
                    d = Math.floor(Math.random() * (h + 1)) - h / 2,
                    e = Math.floor(Math.random() * (i + 1)) - i / 2;
                if (a.css('display') === 'inline') {
                    p = true;
                    a.css('display', 'inline-block')
                }
                if (c === 0 && g !== 0) {
                    c = b < .5 ? 1 : -1;
                }
                if (d === 0 && h !== 0) {
                    d = b < .5 ? 1 : -1;
                }
                if (k === 'absolute') {
                    a.css({
                        'position': 'absolute',
                        '-webkit-transform': 'rotate(' + e + 'deg)',
                        '-moz-transform': 'rotate(' + e + 'deg)',
                        '-o-transform': 'rotate(' + e + 'deg)',
                        'transform': 'rotate(' + e + 'deg)'
                    });
                    a.css(l, n + c + 'px');
                    a.css(m, o + d + 'px')
                }
                if (k === 'fixed') {
                    a.css({
                        'position': 'fixed',
                        '-webkit-transform': 'rotate(' + e + 'deg)',
                        '-moz-transform': 'rotate(' + e + 'deg)',
                        '-o-transform': 'rotate(' + e + 'deg)',
                        'transform': 'rotate(' + e + 'deg)'
                    });
                    a.css(l, n + c + 'px');
                    a.css(m, o + d + 'px')
                }
                if (k === 'static' || k === 'relative') {
                    a.css({
                        'position': 'relative',
                        '-webkit-transform': 'rotate(' + e + 'deg)',
                        '-moz-transform': 'rotate(' + e + 'deg)',
                        '-o-transform': 'rotate(' + e + 'deg)',
                        'transform': 'rotate(' + e + 'deg)'
                    });
                    a.css(l, c + 'px');
                    a.css(m, d + 'px')
                }
            }

            if (u.rumbleEvent === 'hover') {
                $obj.hover(function () {
                        var a = $(this);
                        f = setInterval(function () {
                                rumbler(a)
                            },
                            j)
                    },
                    function () {
                        var a = $(this);
                        clearInterval(f);
                        a.css(q);
                        a.css(l, n + 'px');
                        a.css(m, o + 'px');
                        if (p === true) {
                            a.css('display', 'inline')
                        }
                    });
            }
            if (u.rumbleEvent === 'click') {
                $obj.toggle(function () {
                        var a = $(this);
                        f = setInterval(function () {
                                rumbler(a)
                            },
                            j)
                    },
                    function () {
                        var a = $(this);
                        clearInterval(f);
                        a.css(q);
                        a.css(l, n + 'px');
                        a.css(m, o + 'px');
                        if (p === true) {
                            a.css('display', 'inline')
                        }
                    });
            }
            if (u.rumbleEvent === 'mousedown') {
                $obj.bind({
                    mousedown: function () {
                        var a = $(this);
                        f = setInterval(function () {
                                rumbler(a)
                            },
                            j)
                    },
                    mouseup: function () {
                        var a = $(this);
                        clearInterval(f);
                        a.css(q);
                        a.css(l, n + 'px');
                        a.css(m, o + 'px');
                        if (p === true) {
                            a.css('display', 'inline')
                        }
                    },
                    mouseout: function () {
                        var a = $(this);
                        clearInterval(f);
                        a.css(q);
                        a.css(l, n + 'px');
                        a.css(m, o + 'px');
                        if (p === true) {
                            a.css('display', 'inline')
                        }
                    }
                });
            }
            if (u.rumbleEvent === 'constant') {
                var r = $(this);
                f = setInterval(function () {
                        rumbler(r)
                    },
                    j);
            }
        });
    }
    $(".mx li img").shake()
})

//悬浮显隐
$(function(){
    $(window).scroll(function(){
        var top=$(this).scrollTop();
        if(top>=200){
            $(".fx").show()
        }else{
            $(".fx").hide()
        }
    })
})


//下方 滚动
$(function(){
    var timer=0;
    var _left=0;
    function scroll(){
        window.clearTimeout(timer);
        _left=$(".yox").position().left;
        _left-=2;
        if(_left<=-500){
            _left=0;
        }
        $(".yox").css({left:_left+"px"});
        timer=window.setTimeout(scroll,100)
    }
    scroll();
})
