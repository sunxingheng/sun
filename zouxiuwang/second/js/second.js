/**
 * Created by Administrator on 2016/9/28.
 */

/*鼠标移入事件*/

function yiru() {
    $(".shangping li").mouseenter(function () {
        $(this).addClass("liHover").siblings().removeClass("liHover")
    })
    $(".shangping li").mouseleave(function () {
        $(".shangping li").removeClass("liHover")
    })
}

/*楼梯效果*/

function scrollTop() {
    $(window).scroll(function () {
        var _st=$(this).scrollTop();
        if(_st>5080){
            $(".nav_div").css({"position":"fixed","top":0,"left":""});
            var i=Math.floor((_st-5080)/1621);
            //console.log(i);
            $(".nav_div li a").removeClass("checked").parent().eq(i).find("a").addClass("checked");
        }else{
            $(".nav_div").css({"position":"relative"})
        }
    })

    $(".nav_div li").click(function(){
        var index=$(this).index();
        $("html,body").animate({scrollTop:index*1621+5080},500)
    });
}

/*右侧跟随菜单*/

function youMenu() {
    $(".close").click(function () {
        $(".right_menu").hide();
    })
    $(".dingbu").click(function () {
        $("html,body").animate({scrollTop:0},500)
    })
}




$(function () {
    yiru();
    scrollTop();
    youMenu();
})
























