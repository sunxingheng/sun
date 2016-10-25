
/*
 *
 * Created by Administrator on 2016/9/21.
 */

 $(function () {
     /*回到顶部*/
     $("#gotop").click(function () {
         $(window).scrollTop(0);
     })
     $("#abs1").hover(function () {
         $("#abs2").show();
     },function () {
         $("#abs2").hide();
     });

     /*购物车触摸效果*/
     $(".shopcar").hover(function () {
         $(this).css({background:"#fff",marginBottom:"-5px",borderBottom:"none"});
         $("#goshop").show();
     },function () {
         $(this).css({background:"#f9f9f9",marginBottom:"-5px",borderBottom:"1px solid #ddd"});
         $("#goshop").hide();
     })
 })


/*返回用户名*/
$(function (){
    // 获取到已登录的用户名
    var loginedUser = $.cookie("loginedUser");
    if(loginedUser){
      //  $('#log1').hide();
        $('#log').append("<span>欢迎回来，" + loginedUser + "</span>");
         var myA = $("<a href='login.html'>注销</a>");
        myA.click(function (){
            var res = $.removeCookie("loginedUser", {path : "/"});
            if(!res){
                alert("注销失败");
                return false;
            }
        });
        $('#log').append(myA).css({"marginRight":"5px"});
    } else {
        $('#log').append("<a href='login.html' style='color: #ffa500'>亲，请登录</a>");
    }
});

/*导入json数据*/
function obtainCatagory() {
    ajaxRequest("post", "js/menu.json", null, function (_obj) {   //请求数据
        var _data = JSON.parse(_obj);   //将str转化为相应的JSONObject对象
        dataReader(_data);
    }, true);
}
obtainCatagory();
function dataReader(_data) {
    var _li = null, nodes1 = null, _a = null;
    var i = 0;
    for (var key in _data) {
        _li = null;
        //添加一级菜单标题名
        $("<div class='name_1'>" + _data[key]["name"] + "</div>").appendTo($('#proNone .main').eq(i));
        //添加一级菜单的商品分类
        for (var k1 in _data[key]["kind"]) {
            $("<a href='#' class='a1'>" + _data[key]["kind"][k1]["name"] + "</a>").appendTo($('#proNone .main').eq(i));
        }
        //添加二级菜单的标题名   步骤
        for (var k2 in _data[key]["process"]) {
            _li = $("<li class='li1'></li>").html($("<b>" + _data[key]["process"][k2]["name"] + "</b>"));
            _li.appendTo($('#proNone .nodes1').eq(i));
            ////添加二级菜单的商品分类
            for (var k3 in _data[key]["process"][k2]["children"]) {
                _a = $("<a href='#'>" + _data[key]["process"][k2]["children"][k3]["name"] + "</a>");
                _a.appendTo(_li);
            }
        }
        //加入图片
        $("<img src=" + _data[key]['img']['src'] + ">").appendTo($('#proNone .nodes1').eq(i));
        i++;
    }
}
/*导航触摸效果*/
//alert(1);
$(function () {
    $("#fenlei").hover(function () {
        $("#proNone").show();
        $("#proNone .main").hover(function () {
           var i=$(this).index();
            $(".nodes1").eq(i).show();
        },function () {
            $(".nodes1").hide();
        })
    },function () {
        $("#proNone").hide();
    })
})

