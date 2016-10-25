/**
 * Created by Administrator on 2016/9/27.
 */
function loadCart(){
    var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
    //console.log(cartStr);
    var cartObj = convertCartStrToObj(cartStr);
    // 获取到购物车中所有商品的数量
    var total = 0;
        total += cartObj.num;
    if(cartStr==""){
        $(".bag_number").text(0);
        $("#num").text(parseInt($(".bag_number").text()));
    }else{
        $(".bag_number").text(total);
        $("#num").text(parseInt($(".bag_number").text()));
    }
}
$(function (){
    // 加载已有的购物车信息
    loadCart();
    // 给购物车按钮添加一个点击事件
    $('.right_bag').click(function (){
        location.href = "../cart/cartindex.html";
    });
    // 改加入购物车按钮添加一个点击事件
    $(".buy_bag").click(function (e){
        // 获取商品的名称
        var goodName1 = $(".englishName").html();

        var goodName2 = $(".p_title").html();
        // 获取商品的价格
        var goodPrice =$(".priceNum").html();
        // 获取商品的图片src
        var goodSrc = $(".changeimg").attr('src');
        // 获取商品的尺寸
        var goodSize= $(".selected2 span").html();
        // 获取商品的颜色
        var goodColor=$(".selected1 span").html();
        //console.log(goodColor);
        // 存到购物车中去, 商品信息统一可以放在cookie当中
        // "name1.name2,"颜色",“尺码”，price,num,src"
        /*  设计以下结构的对象来处理商品信息，
         {
         name1 : data[0],
         name2 : data[1],
         "颜色" : data[2],
         "尺码" : data[3],
         price : parseInt(data[4]),
         num : parseInt(data[5]),
         src : data[6]
         }
         */
        var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
        var cartObj = convertCartStrToObj(cartStr);
        // 判断一下该商品是否已经在购物车中存在
        if(goodName1 in cartObj){
            // 如果已存在，那么该商品的数量加1
            cartObj.num += 1;
        } else {
            // 如果不存在，那么将新商品的信息存入
            cartObj = {
                name1 : goodName1,
                name2 : goodName2,
                "颜色" : goodColor,
                "尺码" : goodSize,
                price : goodPrice,
                num : 1,
                src : goodSrc
            };
        }

        // 将新的购物信息存回cookie
        console.log(cartObj);
        cartStr = convertObjToCartStr(cartObj);
        console.log(cartStr);
        $.cookie("cart", cartStr, {expires:7, path:"/"});

        // 做一个飞入购物车的效果
        var cloneImg = $(".changeimg").clone().css({
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
                    top : $(".right_bag").offset().top,
                    left : $(".right_bag").offset().left,
                    width : 0,
                    height : 0
                },
                autoPlay : true,
                onEnd : function (){
                    $(".bag_number").text(function (index, v){
                        // "购物车(0)"
                        var pattern = /(\d+)/;
                        var num = parseInt(v.match(pattern)[1]);
                        return num + 1;
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
    // "name1.name2,"颜色",“尺码”，price,num,src"
        var obj = {};
        var data = cartStr.split(",");
        //console.log(data[0]);
        obj = {
            name1 : data[0],
            name2 : data[1],
            "颜色" : data[2],
            "尺码" : data[3],
            price : parseInt(data[4]),
            num : parseInt(data[5]),
            src : data[6]
        };
        //console.log(obj);
    return obj;
}

function convertObjToCartStr(obj){
     /*{
         name1 : data[0],
         name2 : data[1],
         "颜色" : data[2],
         "尺码" : data[3],
         price : parseInt(data[4]),
         num : parseInt(data[5]),
         src : data[6]
     }
     */
     //console.log(obj);
    var cartStr = "";
        cartStr= obj.name1 + "," + obj.name2 + "," + obj["颜色"] + "," + obj["尺码"] + "," + obj.price + "," + obj.num + "," + obj.src;
    return cartStr;
}

































