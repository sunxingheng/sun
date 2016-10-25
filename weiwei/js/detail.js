/**
 * Created by Administrator on 2016/9/22.
 */

window.onload=function(){
    /*倒计时*/
    var countList = ["l0","l1","l2","l3"];
    var countTime = ["2016/03/6 12:00:00","2016/03/6 12:00:00","2016/03/6 12:00:00","2016/03/6 12:00:00"];
    var total = countTime.length;
    for(var i = 0;i<total;i++){
        var count = new CountDownTime(countList[i],countTime[i]);
        count.show();
    }
   /*结束*/
    /*商品详情图片切换*/
    /*滑过小图显示大图*/
    var _l1=document.getElementById("l1");
    var _l2=document.getElementById("l2");
    var _l3=document.getElementById("big");
    var _img=_l1.children;
    var _img2=_l2.children;
    var _img3=_l3.children;
    var _first=document.getElementById("first");
    var _last=document.getElementById("last");
    var i=0;

    var oexpend = document.getElementById("expand");
    var osmall = document.getElementById("small");
    var odf = document.getElementById("index");
    var obig = document.getElementById("big");


    for(var key in _img){
        _img[key].index=key;
        _img[key].onmouseover=function () {
            var index=this.index;
            i=index;
            for(var k in _img){
                _img[k].className=""
            }
            _img[i].className="active";

            for(var k2 in _img2){
                _img2[k2].className="";
            }
            _img2[i].className="active";


            for(var k3 in _img3){
                _img3[k3].className="";
            }
            _img3[i].className="active";

            var obigpic = obig.getElementsByTagName("img")[i];
            osmall.onmousemove = function (e) {
                var e = e || window.event;
                var left = e.clientX - osmall.offsetLeft  - odf.offsetWidth / 2;
                var top = e.clientY - osmall.offsetTop  - odf.offsetHeight / 2;
                if (left < 0) {
                    left = 0;
                } else if (left > (osmall.offsetWidth - odf.offsetWidth)) {
                    left = osmall.offsetWidth - odf.offsetWidth;
                }
                if (top < 0) {
                    top = 0;
                } else if (top > (osmall.offsetHeight - odf.offsetHeight)) {
                    top = osmall.offsetHeight - odf.offsetHeight;

                }
                odf.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
                odf.style.top = top + "px";
                var percentX = left / (osmall.offsetWidth - odf.offsetWidth);
                var percentY = top / (osmall.offsetHeight - odf.offsetHeight);
                obigpic.style.left = -percentX * (obigpic.offsetWidth - obig.offsetWidth) + "px";
                obigpic.style.top = -percentY * (obigpic.offsetHeight - obig.offsetHeight) + "px";
            }
        }

    }
/*点击左键*/
    _first.onclick=function () {
        for(var k in _img){
            _img[k].className=""
        }
        _img[i].className="active";

        for(var k2 in _img2){
            _img2[k2].className="";
        }
        _img2[i].className="active";

        for(var k3 in _img3){
            _img3[k3].className="";
        }
        _img3[i].className="active";
        var obigpic = obig.getElementsByTagName("img")[i];
        osmall.onmousemove = function (e) {
            var e = e || window.event;
            var left = e.clientX - osmall.offsetLeft  - odf.offsetWidth / 2;
            var top = e.clientY - osmall.offsetTop  - odf.offsetHeight / 2;
            if (left < 0) {
                left = 0;
            } else if (left > (osmall.offsetWidth - odf.offsetWidth)) {
                left = osmall.offsetWidth - odf.offsetWidth;
            }
            if (top < 0) {
                top = 0;
            } else if (top > (osmall.offsetHeight - odf.offsetHeight)) {
                top = osmall.offsetHeight - odf.offsetHeight;

            }
            odf.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
            odf.style.top = top + "px";
            var percentX = left / (osmall.offsetWidth - odf.offsetWidth);
            var percentY = top / (osmall.offsetHeight - odf.offsetHeight);
            obigpic.style.left = -percentX * (obigpic.offsetWidth - obig.offsetWidth) + "px";
            obigpic.style.top = -percentY * (obigpic.offsetHeight - obig.offsetHeight) + "px";
        }
        i--;
        if(i<0){
          i=2;
        }

    }
    /*点击右键*/
    _last.onclick=function () {
        for(var k in _img){
            _img[k].className=""
        }
        _img[i].className="active";

        for(var k2 in _img2){
            _img2[k2].className="";
        }
        _img2[i].className="active";

        for(var k3 in _img3){
            _img3[k3].className="";
        }
        _img3[i].className="active";
        var obigpic = obig.getElementsByTagName("img")[i];
        osmall.onmousemove = function (e) {
            var e = e || window.event;
            var left = e.clientX - osmall.offsetLeft  - odf.offsetWidth / 2;
            var top = e.clientY - osmall.offsetTop  - odf.offsetHeight / 2;
            if (left < 0) {
                left = 0;
            } else if (left > (osmall.offsetWidth - odf.offsetWidth)) {
                left = osmall.offsetWidth - odf.offsetWidth;
            }
            if (top < 0) {
                top = 0;
            } else if (top > (osmall.offsetHeight - odf.offsetHeight)) {
                top = osmall.offsetHeight - odf.offsetHeight;

            }
            odf.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
            odf.style.top = top + "px";
            var percentX = left / (osmall.offsetWidth - odf.offsetWidth);
            var percentY = top / (osmall.offsetHeight - odf.offsetHeight);
            obigpic.style.left = -percentX * (obigpic.offsetWidth - obig.offsetWidth) + "px";
            obigpic.style.top = -percentY * (obigpic.offsetHeight - obig.offsetHeight) + "px";
        }
        i++;
        if(i>2){
            i=0;
        }

    }
    /*放大镜*/

}


/*导航展开收起*/
$(function () {
    var _f=0;
    $("#ulx li").click(function () {
        var i = $(this).index();
        if(_f%2==0){
        $("#ulx li").eq(i).find(".ulx_1").show();
            _f++;
            _f=_f%2;
        }else {
            $("#ulx li").eq(i).find(".ulx_1").hide();
            _f=0;
        }
    })

})
/*详情图切换*/
$(function () {
    $("#s1").click(function () {
        $("#img1").show();
        $("#img2").hide();
        $("#img3").hide();
        $("#list2").hide();
    });
    $("#s2,#s3").click(function () {
        $("#img1").hide();
        $("#img3").hide();
        $("#list2").hide();
        $("#img2").show();
     //   alert(1);
    });
    $("#s4").click(function () {
        $("#img1").hide();
        $("#img2").hide();
        $("#list2").show();
        $("#img3").show();
    })

});
/*放大镜*/
$(function () {
    $("#small").hover(function () {
        $("#big,#index").show();
    },function () {
        $("#big,#index").hide();
    });
})




