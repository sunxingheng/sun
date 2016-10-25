/**
 * Created by Administrator on 2016/9/24.
 */
function loadCart(){
    var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
    var cartObj = convertCartStrToObj(cartStr);
    // 获取到购物车中所有商品的数量
    var total = 0;
    for(var id in cartObj){
        total += cartObj[id].num;
    }
    $("#buy").html("购物车(" + total + ")");
    if(total!=0){
        $("#goshop").html("快去购物车买单吧~");
    }
}
$(function (){
    // 加载已有的购物车信息
    loadCart();
    // 给购物车按钮添加一个点击事件
    $('#buy').click(function (){
        location.href = "buy.html";
    });
    // 改加入购物车按钮添加一个点击事件
    $(".goodInfo .join_car").click(function (e){
        // 获取商品的id（用来区分不同的商品的）
        var goodId = $(this).parent().parent().attr("data-good-id");
        // 获取商品的名称
        var goodPrice =parseFloat( $(this).parent().siblings('.shop_price').children('.mo_b').html());
        // 获取商品的价格
        var goodName = $(this).parent().siblings('.introduction').children('a').html();
        // 获取商品的图片src
        var goodSrc = $(this).parent().siblings('.shop_appearance').children('img').attr('src');
        var Price=parseFloat( $(this).parent().siblings('.shop_price').children('.seletion').html());
        var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
        var cartObj = convertCartStrToObj(cartStr);
        // 判断一下该商品是否已经在购物车中存在
        if(goodId in cartObj){
            // 如果已存在，那么该商品的数量加1
            cartObj[goodId].num += 1;
        } else {
            // 如果不存在，那么将新商品的信息存入
            cartObj[goodId] = {
                name : goodName,
                nprice : Price,
                price : goodPrice,
                num : 1,
                src : goodSrc
            };
        }
        // 将新的购物信息存回cookie
        cartStr = convertObjToCartStr(cartObj);
        $.cookie("cart", cartStr, {expires:7, path:"/"});

        // 做一个飞入购物车的效果
        var cloneImg = $(this).parent().siblings('.shop_appearance').children('img').clone().css({
            width : 50,
            height : 50
        });
        cloneImg.fly(
            {
                start : {
                    top : e.clientY,
                    left : e.clientX
                },
                end : {
                    top : $("#buy").offset().top,
                    left : $("#buy").offset().left,
                    width : 0,
                    height : 0

                },
                autoPlay : true,
                onEnd : function (){
                    $("#buy").val(function (index, v){
                        // "购物车(0)"
                        var pattern = /(\d+)/;
                        var num = parseInt(($("#buy").html()).match(pattern)[1])+1;
                           $("#buy").html("购物车(" + num + ")");
                    });
                    cloneImg.remove();
                }
            }
        );


    });
});

function convertCartStrToObj(cartStr){
    // 如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
    if(!cartStr){
        return {};
    }
    // "sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,src3"
    var goods = cartStr.split(":");
    var obj = {};
    for(var i = 0 ; i < goods.length; i++){
        var data = goods[i].split(",");
        // 以商品的id为键，商品的其他信息为值, 这个值也设计为一个对象
        obj[data[0]] = {
            name : data[1],
            nprice:parseFloat(data[2]),
            price : parseFloat(data[3]),
            num : parseInt(data[4]),
            src : data[5]
        };
    }

    return obj;
}

function convertObjToCartStr(obj){
    var cartStr = "";
    for(var id in obj){
        if(cartStr){
            cartStr += ":";
        }
        cartStr += id + "," + obj[id].name + "," + obj[id].nprice+"," + obj[id].price + ","
            + obj[id].num + "," + obj[id].src;
    }

    return cartStr;
}