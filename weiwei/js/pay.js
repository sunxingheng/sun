/**
 * Created by Administrator on 2016/9/26.
 */
$(function () {
    /*点击页面跳转*/
    $("#webBankButton").click(function () {
        // 在页面上将商品信息删除，顺便获取一下该商品的id
        var len=($(".cartList").children().length)-1;
        var id = $('.goodInfo').remove().attr("data-good-id");
        var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
        var cartObj = convertCartStrToObj(cartStr);
        delete cartObj[id];
        // 将新的商品信息放回cookie
        $(".jiage").html("");
        $(".shuliang").html("");
        $.cookie('cart', convertObjToCartStr(cartObj), {expires:7, path:"/"});
       location.href="paysuccess.html";

    })
    $("#cancelOrderButton").click(function () {
        location.href="buy.html";
    })
})

