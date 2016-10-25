/**
 * Created by Administrator on 2016/9/26.
 */
/*结算金额*/
$(function (){
    // 取出在cookie中存的购物车信息
    var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
    if(!cartStr){
        $(".blank").css({display : "block"});
    } else {
        var cartObj = convertCartStrToObj(cartStr);
        // 遍历所有的商品，生成html添加到购物车列表中去
        for(var id in cartObj){
            // 商品信息对象
            var good = cartObj[id];
            var str = '<ul class="goodInfo" data-good-id="' + id + '">' +
                '<li class="imgs"><img src="' + good.src + '"></li>' +
                '<li class="l2">' + good.name + '</li>' +
                '<li>' + good.nprice + '</li>' +'<li>' + good.price + '</li>' +'<li>' + "预订" + '</li>' +
                '<li class="num">' +
                ' <input class="number" type="text" value="' + good.num + '" /> ' +
                '</li>' +
                '<li class="total">' + good.num * good.price + '</li>' +
                '</ul>';

            // 将上面的结构添加到cartList中去
            $(str).appendTo(".cartList");
        }
        // 结算
        $(function () {
            var sum1 = 0;
            var len = ($(".cartList").children().length) - 1;
            for (var i = 0; i < len; i++) {
                var geshu2 = parseFloat($(".cartList .total").eq(i).html());
                sum1 += geshu2;
            }
            $(".jiage").html(sum1);
        });
    }
});
function convertCartStrToObj(cartStr){
    // 如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
    if(!cartStr){
        return {};
    }
    var goods = cartStr.split(":");
    var obj = {};
    for(var i = 0 ; i < goods.length; i++){
        var data = goods[i].split(",");
        console.log(data);
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
        cartStr += id + "," + obj[id].name + "," + obj[id].nprice+","+ obj[id].price + ","
            + obj[id].num + "," + obj[id].src;
    }
    return cartStr;
}