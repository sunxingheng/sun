/**
 * Created by Administrator on 2016/9/22.
 */


//放大镜
window.onload = function () {

    var objfang = document.getElementById("fang");
    var objxiao = document.getElementById("xiao");
    var objMark = document.getElementById("p");
    var objFloatBox = document.getElementById("qqq");
    var objBigBox = document.getElementById("da");
    var objBigBoxImage = objBigBox.getElementsByTagName("img")[0];

    objMark.onmouseover = function () {
        objFloatBox.style.display = "block"
        objBigBox.style.display = "block"
    }

    objMark.onmouseout = function () {
        objFloatBox.style.display = "none"
        objBigBox.style.display = "none"

    }

    objMark.onmousemove = function (e) {

        var _event = e || window.event;

        var left = _event.pageX - objfang.offsetLeft - objxiao.offsetLeft - objFloatBox.offsetWidth / 2;
        var top = _event.pageY - objfang.offsetTop - objxiao.offsetTop - objFloatBox.offsetHeight / 2;

        if (left < 0) {
            left = 0;
        } else if (left > (objMark.offsetWidth - objFloatBox.offsetWidth)) {
            left = objMark.offsetWidth - objFloatBox.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (objMark.offsetHeight - objFloatBox.offsetHeight)) {
            top = objMark.offsetHeight - objFloatBox.offsetHeight;

        }

        objFloatBox.style.left = left + "px";
        objFloatBox.style.top = top + "px";
        var percentX = left / (objMark.offsetWidth - objFloatBox.offsetWidth);
        var percentY = top / (objMark.offsetHeight - objFloatBox.offsetHeight);
        objBigBoxImage.style.left = -percentX * (objBigBoxImage.offsetWidth - objBigBox.offsetWidth) + "px";
        objBigBoxImage.style.top = -percentY * (objBigBoxImage.offsetHeight - objBigBox.offsetHeight) + "px";
    }
}


//选中物品
$(function(){
    $(".dian").click(function(){
        $(this).css({background:"#e5e5e5",border:"1px solid #f99"})
    })
})


//加减物品
$(function(){
//加
     var n=1;
    $(".jia").click(function(){
        n++;
        if(n>=9){
            n=9;
            $(".shu").html(n);
            alert("库存仅剩9件")
        }else{
            $(".shu").html(n);
        }
    })

//减
    $(".jian").click(function(){
        n--;
        if(n<0){
            n=0;
            $(".shu").html(n);

        }else{
            $(".shu").html(n);
        }
    })
})


//点击购买弹窗
$(function(){
  $(".anniu").click(function(){
      $(".father").css({display:"block"})
  })
  $(".cha").click(function(){
      $(".father").css({display:"none"})
  })

})


//楼梯效果
$(function(){
    //悬浮导航栏
    $(window).scroll(function(){
        var stop=$(this).scrollTop();
        if(stop>910){
            $(".lou").css({position:"fixed",top:0,width:1000});//nav固定在页面上方
        }else{
            $(".lou").css({position:"relative"})//nav回到原位置
        }
        //导航栏跟随页面滚动自动到相应位置
        $(".lout .zi").each(function(){
            var mytop=$(this).offset().top-180;
            //如果滚动条top值大于该楼层top值 则与之对应的楼梯加入active样式
            if(stop>mytop){
                var i=$(this).index();
                $(".lou-top li").removeClass("active").eq(i).addClass("active");
            }
        });

    })
    //点击定位
    $(".lou-top li").click(function(){
        var i=$(this).index();
        $(this).removeClass("active").eq(i).addClass("active");//点击是获得active样式

        $("html,body").animate({//对页面执行滚动动画
            scrollTop:$(".lout .zi").eq(i).offset().top-50//滚动条的top值等于点击楼层的top值
        },1000)
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