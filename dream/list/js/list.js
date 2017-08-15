/**
 * Created by Administrator on 2016/9/24.
 */
//**************为列表添加hover事件*********
$(function(){
    $("#choice dl dd span").each(function(){
        this.title=$(this).text();
        $(this).hover(function(){
            $(this).css("backgroundImage","url(list/img/1.png)");
            $(this).text(".");
        },function(){
            $(this).css("backgroundImage","");
            $(this).text(this.title);
        })
    })
});

//JSON导入商品列表
/*
<div class="container">
    <a><img src="list/img/list%20(1).jpg" alt=""></a>
    <h2><span class='pirse'></span><span class='oldpirse'></span></h2>
    <h3>商品名</h3>
    <h4>商店</h4>
    <div class='buy clear'>尺码：<span>S</span>|<span>M</span>|<span class='on'>L</span>|<span>XL</span>|<span>XXL</span><span class='cart'></span></div>
</div>
*/
$(function(){
    $.getJSON("list/js/list.json",function(data){
        var Data=data;
        var _list="";
        for(var key in Data){
            _list+="<div class='container'>"+
                "<a href='details.html?"+key+"'><img src='list/"+Data[key]["src"]+"' alt=''></a>"+
                "<h2><span class='prise'>"+Data[key]["prise"]+"</span><span class='oldpirse'>"+Data[key]["oldprise"]+"</span></h2>"+
                "<h3><a href='details.html?"+key+"'>"+Data[key]["name"]+"</a></h3>"+
                "<h4><a href='details.html?"+key+"'>"+Data[key]["shop"]+"</a></h4>"+
                "<div class='buy clear'>尺码：<span>S</span>|<span>M</span>|<span class='on'>L</span>|<span>XL</span>|<span>XXL</span><span class='cart' data-id='"+[key]+"'></span></div>"+
                "</div>"
        }
        $("#listContainer").html(_list);
        //加载完成后绑定hover事件
        $("#listContainer .container").each(function(){
            $(this).hover(function(){
                $(this).find(".buy").stop().slideDown(100)
            },function(){
                $(this).find(".buy").stop().slideUp(100)
            });
            $(this).find(".buy span:not(.cart)").click(function(){
                $(this).addClass("on").siblings().removeClass("on");
            })
        });
        //绑定飞入购物车
        //cookie  {Mail1 Phone1 goodid1M*1+goodid2L*2+,password1:Mail2 Phone2,password2:Mail3 Phone3,password3}
        //{
        // Mail1:goodid1M*1+goodidM*1+;
        // Mail2:goodid1M*1+goodidM*1+;
        // }
        //{
        // Phone1:goodid1M*1+goodidM*1+;
        // Phone2:goodid1M*1+goodidM*1+;
        // }
        $("#listContainer .container").each(function(){
            $(this).find(".cart").click(function(e){
                var e=e||width.event;
                e.stopPropagation();
                var DataId=$(this).attr("data-id");
                var Size=$(this).siblings(".on").text();
                var users= $.cookie("registerUsers");
                var nowusers=StrToObj3Arr(users);
                var loginUser=$.cookie("loginUser");
                var CANI=true;
                if(/@/.test(loginUser)){
                    nowusers=nowusers[0];
                }else if(/\d{11}/.test(loginUser)){
                    nowusers=nowusers[1];
                }else {
                    alert('请登录！！');
                    CANI=false;
                }
                // 做一个飞入购物车的效果
                if(CANI) {
                    var cloneImg = $(this).parent().siblings("a").find("img").clone().css({
                        width: 69,
                        height: 93
                    });
                    cloneImg.fly(
                        {
                            start: {
                                top: e.clientY - 93,
                                left: e.clientX - 69
                            },
                            end: {
                                top: $("#sidebar #sidebarCartNumber").offset().top - $(document).scrollTop(),
                                left: $("#sidebar #sidebarCartNumber").offset().left,
                                width: 0,
                                height: 0
                            },
                            vertex_Rtop: 0,
                            autoPlay: true,
                            onEnd: function () {
                                cloneImg.remove();
                            }
                        }
                    );
                    //购物车中添加元素
                    //if(nowusers[loginUser]){////Mail1 Phone1 goodid1M*1+,
                    var reg = new RegExp(".*" + DataId + Size + ".*?\\+");
                    if (reg.test(nowusers[loginUser])) {//如果cookie中有当前商品id且尺寸相同将数字加一
                        var REGuser = new RegExp(loginUser + ".*?" + DataId + Size + ".*?\\+");
                        var GOOD = users.match(REGuser);//Mail1 Phone1 goodid1M*1+,
                        var GOODREG = new RegExp(DataId + Size + "\\*\\d+?\\+");
                        var GOODNUM = GOOD[0].match(GOODREG);//goodid1M*1+
                        GOODNUM = GOODNUM[0].split("*")[1];
                        GOODNUM = (GOODNUM.match(/\d+/))[0] * 1 + 1;
                        GOOD = GOOD[0].replace(GOODREG, DataId + Size + "*" + GOODNUM + "+");
                        users = users.replace(REGuser, GOOD);
                    } else {//如果cookie中有当前商品id但尺寸不同  或没有当前商品（作为一类处理）
                        var REG = new RegExp(loginUser + ".*?,");
                        var good = users.match(REG);    //Mail1 Phone1 ,
                        good = good[0].replace(',', DataId + Size + "*1+,"); //Mail1 Phone1 goodid1M*1+,
                        users = users.replace(REG, good);
                        $("#sidebar #Cart .container").append(
                            '<div class="goodcontainer clear" data-id="' + DataId + '" data-size="' + Size + '">' +
                            '<h2 class="over clear"><a class="left">' + Data[DataId]["shop"] + '</a><span class="right delate">删除</span></h2>' +
                            '<div class="left _left"><img src="list/' + Data[DataId]["src"] + '"></div>' +
                            '<div class="left _right">' +
                            '<p class="name over"><a href="#">' + Data[DataId]["name"] + '</a></p>' +
                            '<p class="number">' +
                            '<span class="size">' + Size + '</span>' +
                            '<span class="jian">－</span>' +
                            '<span class="num">' + 1 + '</span>' +
                            '<span class="jia">＋</span>' +
                            '<span class="prise">单:' + Data[DataId]["prise"] + '</span>' +
                            '<span class="sum">' + Data[DataId]["prise"] + '</span>' +
                            '</p>' +
                            '</div>' +
                            '</div>'
                        );
                    }
                    $.cookie("registerUsers", users, {expires: 7, path: "/"});
                    LoadCart();
                    //以上将购物车信息传入cookie（尺码，数量，商品id）
                    /*购物车中添加
                     <div class="goodcontainer clear">
                     <h2 class="over clear"><a class="left">商店</a><span class="right">删除</span></h2>
                     <div class="left _left"><img src="list/img/list1 (1).jpg"></div>
                     <div class="left _right">
                     <p class="name over"><a href="#">商品名</a></p>
                     <p class="number">
                     <span class="size">XL</span>
                     <span class="jia">－</span>
                     <span class="num">1</span>
                     <span class="jian">＋</span>
                     <span class="sum">￥0</span>
                     </p>
                     </div>
                     </div>
                     */
                }
            })
        })
    });
});