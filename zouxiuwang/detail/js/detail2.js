/**
 * Created by Administrator on 2016/9/22.
 */
/*放大镜效果*/
/*点击小图片更换大图跟最大的图*/
/*鼠标移入小图事件*/
/*加个边框*/
function smallMouseover() {
   $(".photo_small_ul li").mouseenter(function () {
       var index=$(this).index();
       $(".photo_small_ul li").removeClass();
       $(this).addClass('change');
       $(".bigImg").attr("src","img/bigphoto"+(index+1)+".jpg");
       $(".hugeImg").attr("src","img/hugephoto"+(index+1)+".jpg");
   })
}

/*鼠标进入大图片*/

function mouseMove() {
    $(".photo_big").mousemove(function (e) {
        /*小方块出现并移动*/
        $(".mouseMove").show();
        $(".photo_huge").show();
        var _left=e.pageX-$(".photo_big").offset().left-$(".mouseMove").width()/2;
        var _top=e.pageY-$(".photo_big").offset().top-$(".mouseMove").height()/2;
        if(_left<0){
            _left=0;
        }else if(_left>$(".photo_big").width()-$(".mouseMove").width()){
            _left=$(".photo_big").width()-$(".mouseMove").width();
        }
        if(_top<0){
            _top=0;
        }else if(_top>$(".photo_big").height()-$(".mouseMove").height()){
            _top=$(".photo_big").height()-$(".mouseMove").height();
        }
        $(".mouseMove").css({left:_left+"px",top:_top+"px"});
        /*右边大图位置发生变化*/
        var _leftHuge=_left/($(".photo_big").width()-$(".mouseMove").width());
        var _topHuge=_top/($(".photo_big").height()-$(".mouseMove").height());
        var _hugeLeft=-_leftHuge*($(".hugeImg").width()-$(".photo_huge").width());
        var _hugeTop=-_topHuge*($(".hugeImg").height()-$(".photo_huge").height());
        $(".hugeImg").css({left:_hugeLeft+"px",top:_hugeTop+"px"});
    })
    $(".photo_big").mouseout(function () {
        $(".mouseMove").hide();
        $(".photo_huge").hide();
    })
}

/*查看流程*/

function chakan() {
    $(".chaKan").mouseover(function () {
        $(".liuChen").show();
    })
    $(".chaKan").mouseout(function () {
        $(".liuChen").hide();
    })
}

/*选择尺码*/

function xuanzechima() {
    $(".style_size .color_list li").click(function () {
        $(".style_size .color_list li").removeClass("selected2");
        $(this).addClass("selected2");
    })
}

/*倒计时*/
function timer(){
    var _time=parseInt(80000);
    window.setInterval(function(){
        var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值
        if(_time > 0){
            day = Math.floor(_time / (60 * 60 * 24));
            hour = Math.floor(_time / (60 * 60)) - (day * 24);
            minute = Math.floor(_time / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(_time) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (minute <= 9) {
            minute = '0' + minute;
        }
        if (second <= 9) {
            second = '0' + second;
        }
        $('#day_show').html(day+"天");
        $('#hour_show').html(hour+'时');
        $('#minute_show').html(minute+'分');
        $('#second_show').html(second+'秒');
        _time--;
    }, 1000);
}

/*点击详情页导航分页*/

function navFenye() {
    $(".detail_box_ul li").click(function () {
        var index=$(this).index();
        $(this).addClass('on').siblings().removeClass();
        $(".container_left").find(".container_left_"+(index+1)).not(".container_left_1 .container_left_2").show().siblings().hide();
        $("html,body").animate({scrollTop:880},500)
    })
}

/*跟随窗口的导航栏*/

function fllow() {
    $(window).scroll(function () {
        var st=$(this).scrollTop();
        if(st>900){
            $(".detail_nav").css({position:"fixed",top:0,zIndex:100});
            $(".erweima").show();
        }else{
            $(".detail_nav").css({position:"static",top:"900px"});
            $(".erweima").hide();
        }
    })
}

/*右侧菜单效果*/

function youMenu() {
    $(".close").click(function () {
        $(".right_menu").hide();
    })
    $(".dingbu").click(function () {
        $("html,body").animate({scrollTop:0},500)
    })
}





$(function () {
    smallMouseover();
    mouseMove();
    chakan();
    xuanzechima();
    navFenye();
    fllow();
    youMenu();
    timer();
})



























