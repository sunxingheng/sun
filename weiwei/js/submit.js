/**
 * Created by Administrator on 2016/9/25.
 *
 */
/*用json数据传入地址*/
function Regions(_data){
    this.province=function(){
        var _options="";
        for(var i=0;i<_data["regions"].length;i++){
            _options+="<option id=\""+_data["regions"][i]["id"]+"\">"+_data["regions"][i]["name"]+"</option>"
        }
        $("#loc_province").html(_options);
    };
    var _p= 0,_c=0;
    $("#loc_province")[0].onchange=function(){
        var _list=this.children,_options="";
        for(var i=0;i<_list.length;i++){
            if(_list[i].selected){
                _p=i;
                for(var n=0;n<_data["regions"][_p]["regions"].length;n++){
                    _options+="<option id=\""+_data["regions"][_p]["regions"][n]["id"]+"\">"+_data["regions"][_p]["regions"][n]["name"]+"</option>"
                }
                $("#loc_city").html(_options);
                $("#loc_city")[0].onchange();
            }
        }
    }
    $("#loc_city")[0].onchange=function(){
        _list=this.children;
        _options="";
        for(var i=0;i<_list.length;i++){
            if(_list[i].selected){
                _c=i;
                for(var n=0;n<_data["regions"][_p]["regions"][_c]["regions"].length;n++){
                    _options+="<option id=\""+_data["regions"][_p]["regions"][_c]["regions"][n]["id"]+"\">"+_data["regions"][_p]["regions"][_c]["regions"][n]["name"]+"</option>"
                }
                $("#loc_town").html(_options);
            }
        }
    }
}
$(document).ready(function(){
    $.post("js/cityName.json",null,function(data,textStatus){
        if(textStatus=="success"){
            var _data=window.eval("("+data+")");
            var _regions=new Regions(_data);
            _regions.province();
        }
    },"text");
});
/*验证手机号码等*/
/*邮编*/
$(function () {
    var reg=/[1-9]\d{5}/
    $("#youzheng").on("focus",function () {
        $(this).on("blur",function () {
            if($(this).val()==""){
                $("#s1").show();
            }else if(reg.test($(this).val())==false){
               $("#s1").show().html("输入有误")
            }else{
                $("#s1").hide();
            }
        })
    })
})
/*号码/固话*/
$(function () {
    var reg=/^(\d{3,4}-)\d{7,8}$/;
    $("#phone1").on("focus",function () {
        $(this).on("blur",function () {
            if(reg.test($(this).val())==false){
                $("#s2").show();
            }else{
                $("#s2").hide();
            }
        })
    })
})
$(function () {
    var reg=/^1(3|5|7|8|9)\d{9}$/
    $("#phone2").on("focus",function () {
        $(this).on("blur",function () {
            if(reg.test($(this).val())==false){
                $("#s3").show();
            }else{
                $("#s3").hide();
            }
        })
    })
})
/*电子邮件*/
$(function () {
    var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    $("#youjian").on("focus",function () {
        $(this).on("blur",function () {
            if($(this).val()==""){
                $("#s4").show();
            }else if(reg.test($(this).val())==false){
                $("#s4").show().html("请输入正确的邮件")
            }else{
                $("#s4").hide();
            }
        })
    })
})
/*提交判断*/
$(function () {
    $("#saveBtn").click(function () {
        if($("#youjian").val()!=="" && ($("#phone1").val()!=="" || $("#phone2").val()!=="")
        && $("#youzheng").val()!==""){
            alert("保存成功");
        }else {
            alert("请完善收货人信息");
        }

    })

})
/*购物车数据*/
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

/*验证码*/
window.onload = function() {
    var verify5 = document.getElementById('verify5');
    var authCode = document.getElementById('authCode');
    verify5.onclick = function() {
        var iNum = parseInt(Math.random() * 10000)
        while (iNum < 1000) {
            iNum = parseInt(Math.random() * 10000)
        }
        authCode.value = iNum
    }
}

$(function(){
    $("#saveOrderBtn").on("click",function(){
        if($(".inp1").val()==""){
            alert("请填写收货人姓名！")
        }else if($("#msg").val()===""){
            alert("请填写地址！")
        }else if($("#authCode").val() == ""){
            $("#yanBtn").css({"display":"block"});
        }else{
            location.href="submitorder.html"
        }
    });

});






