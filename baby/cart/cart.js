/**
 * Created by Administrator on 2016/9/27.
 */

//购物车



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