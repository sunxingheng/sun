/**
 * Created by Administrator on 2016/9/19.
 */
/*nav中的nav—right的 mouseover事件*/
/*面向对象的方法 做轮播图*/
function tabPhoto() {
    var _small = document.getElementById("small");
    var _show = document.getElementById("show");
    var _container = document.getElementById("container");
    /*定时 当滑到整数倍 定时时间为2000 否则为10*/
    this.Photo = function () {
        var _timer = 0;
        var _t = 0;
        function start() {
            window.clearTimeout(_timer);
            _show.scrollLeft += 100;
            _t = 10;
            if (_show.scrollLeft % 1600 == 0) {
                _t = 1800;
            }
            if (_show.scrollLeft == 8000) {
                _show.scrollLeft = 0;
            }
            _timer = window.setTimeout(start, _t)
        }

        start();
    }
    /* 鼠标滑过事件 滑过span变色 且图片变为对应图片*/
    this.click = function () {
        for (var i = 0; i < _small.children.length; i++) {
            _small.children[i].index = i;
            _small.children[i].onmouseover = function () {
                _small.children[this.index].style.background = "#ff1a17";
                _show.scrollLeft = (this.index) * 1600;
            }
            _small.children[i].onmouseout = function () {
                _small.children[this.index].style.background = "";
            }
        }
    }

    this.span = function () {
        /*span跟随图片 定时移动*/
        var _timer = 0;
        var active = 0;
        function start2() {
            window.clearTimeout(_timer);
            active++;
            active %= _small.children.length;
            for (var key in _small.children) {
                _small.children[key].className = "";
            }
            _small.children[active].className = "active";
            _timer = window.setTimeout(start2, 2100);
        }
        start2();
    }


}

window.onload=function () {
    var obj=new tabPhoto();
    obj.Photo();
    obj.click();
    obj.span();
    /*倒计时*/
    var countList = ["l0","l1","l2","l3"];
    var countTime = ["2016/03/6 12:00:00","2016/03/6 12:00:00","2016/03/6 12:00:00","2016/03/6 12:00:00"];
    var total = countTime.length;
    for(var i = 0;i<total;i++){
        var count = new CountDownTime(countList[i],countTime[i]);
        count.show();
    }


}
/*tab淡入淡出*/
$(function () {
    var i=0;
    var _timer=0;
    function start() {
        window.clearTimeout(_timer);
        $(".f1").eq(i%3).fadeOut(2000);
        $(".f1").eq((i+1)%3).fadeIn(2000);
         i++;
        _timer=window.setTimeout(start,2000);
    }
    start();

    $(".img1").click(function () {
        var i=3;
        $(".f1").eq(i%3).fadeOut(1000);
        $(".f1").eq((i-1)%3).fadeIn(1000);
        i--;
    });

    $(".img2").click(function () {
        $(".f1").eq(i%3).fadeOut(1000);
        $(".f1").eq((i+1)%3).fadeIn(1000);
        i++;

    })
});


