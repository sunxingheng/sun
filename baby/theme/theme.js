/**
 * Created by Administrator on 2016/9/26.
 */
//e二级菜单
$(function() {
    $(".top span").mouseover(function () {
        var i = $(this).index();
        //
        $(".uu ul").eq(i).toggle();
    })

})

//ajax获取数据
$(function(){
	$.get("tsconfig.json",null,function(data,text,xhr){
	    	for(k in data){
	    		//console.log(data[k].yi);先用for in解析data，获取data里的yi对应的值必须用data[k].yi格式
	    		var t="<li>"+data[k].yi+"</li>"
                var t1="<li>"+data[k].er+"</li>"
	    		//console.log(t);
	    		$(t).appendTo($("ul.zt1x"));//直接用$（t）直接获得
                $(t1).appendTo($(".zt4x"))
	    	}
        deng();//等ajax加载完json数据再加载事件--必须写在，该方法之中，才生效
    	}, "json").error(function (){});
})

//加事件
function deng(){
    console.log()
	$("ul.zt1x li").eq(1).mouseover(function(){
            $(".zt4x").css({display:"block"})
	})

    $("ul.zt1x li").eq(1).mouseout(function(){

        /*$(".zt4x").mouseover(function(){
            $(".zt4x").css({display:"block"})
        })
        $(".zt4x").mouseout(function(){
            $(".zt4x").css({display:"none"})
        })*/
        $(".zt4x").css({display:"none"})
    })

    //经过变色
    $("ul.zt1x li").mouseover(function() {
        $(this).css({background: "#fcc"}).siblings().css({background: "#fee"})
    })
}

//该页面所有动画效果
$(function(){
    $(window).scroll(function(){
        var wtop=$(this).scrollTop();
        if(wtop>300){
            $(".s1").animate({
                "opacity":1
            },1500)
        }
    })

    $(window).scroll(function(){
        var wtop=$(this).scrollTop();
        if(wtop>1300){
            $(".s2").animate({
                "margin-left":100
            },2000)
        }
    })

    $(window).scroll(function(){
        var wtop=$(this).scrollTop();
        if(wtop>2700){
            $(".s3").animate({
                "margin-left":100
            },2000)
        }
    })

})


//table选项卡
$(function(){
    $(".ul1 li").mouseover(function(){
        var i=$(this).index();
        $(".ul1 li").removeClass("active").eq(i).addClass("active");
        $(".ul2 li").removeClass("active").eq(i).addClass("active");
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
