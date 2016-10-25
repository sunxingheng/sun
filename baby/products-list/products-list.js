/**
 * Created by Administrator on 2016/9/23.
 */

//商品列表
$(function(){
    $(".k a").mouseover(function(){
        var i=$(this).index();
        $(".table2 td").removeClass("active").eq(i).addClass("active");
    });
})

//商品的具体的显示
$(function(){
    $(".main li").hover(function(){
      $(this).children().eq(0).removeClass("active")
      $(this).children().eq(1).addClass("active")

    },function(){
      $(this).children().eq(1).removeClass("active")
      $(this).children().eq(0).addClass("active")

    })
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
