/**
 * Created by chao on 2016/9/20.
 */
//-----------------JSON导入下拉菜单
$(function(){
    var Data='';
    $.getJSON("js/menu.json",function(data){
        Data=data;
        var lih2=[];
        var lih3=[];
        var licontainer=[];
        for(var key in data){
            lih2.push(key);
            lih3.push(data[key]["showMenu"]);
        }
        for(var i=0;i<lih2.length;i++){
            $("#bannernav #menu li").eq(i).find("h2").text(lih2[i]);
            var _list="";
            for(var j=0;j<lih3[i].length;j++){
                _list+='<a href="list.html">'+lih3[i][j]+'</a>';
            }
            $("#bannernav #menu li").eq(i).find("h3").html(_list);
        }
    });
    $("#bannernav #menu li").each(function(){
        $(this).hover(function(){
            $("#goodsContainer").css("display","block");
            var _listh2=[];
            var _listh3=[];
            for(var key in Data[$(this).find("h2").text()]){
                _listh2.push(key);
                _listh3.push(Data[$(this).find("h2").text()][key]);
            }
            _listh2.shift();
            _listh3.shift();
            for(var i=0;i<_listh2.length;i++){
                $("#goodsContainer li").eq(i).find("h2").text(_listh2[i]);
                var _list='';
                for(var key in _listh3[i]){
                    if(_listh3[i][key]["hot"]){
                        _list+='<a href="'+_listh3[i][key]["url"]+'" class="red">'+_listh3[i][key]["name"]+'</a>'
                    }else{
                        _list+='<a href="'+_listh3[i][key]["url"]+'">'+_listh3[i][key]["name"]+'</a>'
                    }
                }
                $("#goodsContainer li").eq(i).find("h3").html(_list)
            }

        },function(){
            $("#goodsContainer").css("display","none")
        })
    })
    $("#goodsContainer").hover(function(){
        $("#goodsContainer").css("display","block");
    },function(){
        $("#goodsContainer").css("display","none");
    })
    //动态设置几个背景
    $("#menu li").each(function(index){
        $(this).css({backgroundImage:"url(img/menu"+index+".png)",backgroundPosition:"170px center",backgroundRepeat:"no-repeat"})
    })

});
//-----------------以下是banner切换
$(function(){
    $("#banner").swBanner();
});

(function ($) {
    $.fn.swBanner=function(options){
        var defaults={
            animateTime:300,
            delayTime:5000
        };
        var setting=$.extend({},defaults,options);
        return this.each(function(){
            $obj=$(this);
            var o=setting.animateTime;
            var d=setting.delayTime;
            var $oban=$obj.find(".banList li");
            var _len=$oban.length;
            var $nav=$obj.find(".fomW a");
            var _index=0;
            var timer;
            //图片轮换
            function showImg(n){
                $oban.eq(n).addClass("active").siblings().removeClass("active");
                $nav.eq(n).addClass("current").siblings().removeClass("current");
            }
            //自动播放
            function player(){
                timer=setInterval(function(){
                    var _index=$obj.find(".fomW").find("a.current").index();
                    showImg((_index+1)%_len);
                },d)
            }
            $nav.mouseenter(function(){
                if(!($oban.is(":animated"))){
                    _index=$(this).index();
                    showImg(_index);
                }
            });
            $oban.hover(function(){
                clearInterval(timer);
            },function(){
                player();
            });
            player();
        });

    }
})(jQuery);
//---------------以下是banner图下的tab切换
$(function(){
    $("#tabTop span").each(function(index){
        $(this).mouseenter(function(){
            $("#tabbutton div").eq(index).addClass("on").siblings().removeClass("on");
            $(this).addClass("on").siblings().removeClass("on");
        })
    })
});
//---------------以下是每日新品

var ImgMap=function (){
    clearTimeout(_timer);
    $("#DataNew .Icon span").eq(_Img).addClass("on").siblings().removeClass("on");
    $("#DataNew .ImgMap img").eq(_Img).addClass("on").siblings().removeClass("on");
    $("#DataNew .ImgMap img").eq(_Img).animate({
        opacity:1,
        left:"0px"
    },1000,function(){
        $("#DataNew .ImgMap img").eq(_Img).siblings().each(function(){$(this).css("opacity","0")});
    });
    _timer=setTimeout(function(){
        _Img++;
        if(_Img==8){_Img=0};
        ImgMap();
    },4000)
};
var _timer;
var _Img=0;
$(function(){
    ImgMap();
    $("#DataNew .ImgMap").mouseenter(function(){
        clearTimeout(_timer);
    })
    $("#DataNew .ImgMap").mouseleave(function(){
        ImgMap();
    });
    //-----------以下设置左右点击按钮
    $("#DataNew .Left img").click(function(){
        _Img--;
        if(_Img==-1){_Img=7};
        $("#DataNew .Icon span").eq(_Img).addClass("on").siblings().removeClass("on");
        $("#DataNew .ImgMap img").eq(_Img).addClass("on").siblings().removeClass("on");
        $("#DataNew .ImgMap img").eq(_Img).animate({
            opacity:1,
            left:0
        },1000,function(){
            $("#DataNew .ImgMap img").eq(_Img).siblings().each(function(){$(this).css({
                opacity:0,
                left:30
            })});
        });
    });
    $("#DataNew .Right img").click(function(){
        _Img++;
        if(_Img==8){_Img=0};
        $("#DataNew .Icon span").eq(_Img).addClass("on").siblings().removeClass("on");
        $("#DataNew .ImgMap img").eq(_Img).addClass("on").siblings().removeClass("on");
        $("#DataNew .ImgMap img").eq(_Img).animate({
            opacity:1,
            left:0
        },1000,function(){
            $("#DataNew .ImgMap img").eq(_Img).siblings().each(function(){$(this).css({
                opacity:0,
                left:30
            })});
        });
    });
    //------------以下设置滑动切换按钮
    $("#DataNew .Icon span").each(function(index){
        $(this).mouseenter(function(){
            clearTimeout(_timer);
            _Img=index;
            $(this).addClass("on").siblings().removeClass("on");
            $("#DataNew .ImgMap img").eq(index).addClass("on").siblings().removeClass("on");
            $("#DataNew .ImgMap img").eq(index).animate({
                opacity:1,
                left:"0px"
            },1000,function(){
                $("#DataNew .ImgMap img").eq(index).siblings().each(function(){$(this).css("opacity","0")});
            })
        });
    })
});

/*---------------动态导入商品列表
<div>
    <a href='list/list.html'><img src="img/goods/list-1 (1).jpg" alt=""></a>
    <p>*************</p>
    <span class="new">dsadas</span><span class="old">sd</span>
</div>
*/
$(function(){
    for(var i=1;i<=19;i++){
        $("#good1 .container").append(
        "<div>"+
            "<a href='list.html'><img src='img/goods/list-1 ("+i+").jpg' alt=''></a>"+
            "<p>*************</p>"+
            "<span class='new'>￥199</span><span class='old'>￥299</span>"+
        "</div>"
        )
    }
    for(var i=1;i<=26;i++){
        $("#good2 .container").append(
            "<div>"+
            "<a href='list.html'><img src='img/goods/list-2 ("+i+").jpg' alt=''></a>"+
            "<p>*************</p>"+
            "<span class='new'>￥199</span><span class='old'>￥299</span>"+
            "</div>"
        )
    }
    for(var i=1;i<=14;i++){
        $("#good3 .container").append(
            "<div>"+
            "<a href='list.html'><img src='img/goods/list-3 ("+i+").jpg' alt=''></a>"+
            "<p>*************</p>"+
            "<span class='new'>￥199</span><span class='old'>￥299</span>"+
            "</div>"
        )
    }
    for(var i=1;i<=10;i++){
        $("#good4 .container").append(
            "<div>"+
            "<a href='list.html'><img src='img/goods/list-4 ("+i+").jpg' alt=''></a></a>"+
            "<p>*************</p>"+
            "<span class='new'>￥199</span><span class='old'>￥299</span>"+
            "</div>"
        )
    }
});



















