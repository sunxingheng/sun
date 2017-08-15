/**
 * Created by 超 on 2016/9/28.
 */
/*
/*
 <div class="mainbody">
    <div class="mainbodyTop">
     一下商品由 <span class="shop"></span> 发货 免费配送
     </div>
    <div class="mainbodyMain clear">
        <div class="check left"><input type="checkbox" checked></div>
        <div class="img left"><img src="list/img/list1%20(1).jpg" alt=""></div>
        <div class="information left">
            <p class="name"><a href="details.html?">dasadasdasdasdasdsad</a></p>
            <p class="other">品牌:梦芭拉服饰 尺寸: <span class="size"></span> 颜色: <span class="color"></span></p>
        </div>
        <div class="prise left">51</div>
        <div class="num left clear">
            <span class="jian notChoose">-</span>
            <span class="NUM">1</span>
            <span class="jia notChoose">+</span>
        </div>
        <div class="sum left">16</div>
        <div class="delate left">
            <p class="set">修改</p>
            <p class="delate">删除</p>
        </div>
    </div>
 </div>
*/
$(function(){
    $.getJSON('list/js/list.json',function(data){
        var ALLusers= $.cookie("registerUsers");
        var NOWuser= $.cookie("loginUser");
        var LoginCookie=/@/.test(NOWuser)?StrToObj3Arr(ALLusers)[0][NOWuser]:StrToObj3Arr(ALLusers)[1][NOWuser];
        if(/[A-Z]\*\d+/.test(LoginCookie)){
            $("#main .ifNo").css("height",'0px');
            $("#main .ifNo").css("display",'none');
            var Logingoods=LoginCookie.split("+");
            var TotalPrices=0;
            var TotalNum=0;
            var _list="";
            for(var i=0;i<Logingoods.length-1;i++){
                var GoodID=Logingoods[i].match(/\d+/);
                var GoodSize=Logingoods[i].match(/[A-Z]+/);
                var GoodNum=Logingoods[i].split("*")[1];
                _list+='<div class="mainbody" data-id="'+GoodID+'" data-size="'+GoodSize+'">'+
                    '<div class="mainbodyTop">'+
                    '一下商品由 <span class="shop">'+data[GoodID]['shop']+'</span> 发货 免费配送'+
                    '</div>'+
                    '<div class="mainbodyMain clear">'+
                    '<div class="check left"><input type="checkbox" checked></div>'+
                    '<div class="img left"><img src="list/'+data[GoodID]['src']+'" alt=""></div>'+
                    '<div class="information left">'+
                    '<p class="name"><a href="details.html?'+GoodID+'">'+data[GoodID]['name']+'</a></p>'+
                    '<p class="other">品牌:梦芭拉服饰 尺寸: <span class="size">'+GoodSize+'</span> 颜色: <span class="color"></span></p>'+
                    '</div>'+
                    '<div class="prise left">'+data[GoodID]["prise"]+'</div>'+
                    '<div class="num left clear">'+
                    '<span class="jian notChoose">-</span>'+
                    '<span class="NUM">'+GoodNum+'</span>'+
                    '<span class="jia notChoose">+</span>'+
                    '</div>'+
                    '<div class="sum left">￥'+data[GoodID]["prise"].match(/\d+/)*GoodNum+'</div>'+
                    '<div class="delate left">'+
                    '<p class="set">修改</p>'+
                    '<p class="delate">删除</p>'+
                    '</div>'+
                    '</div>'+
                    '</div>';
                TotalNum+=GoodNum*1;
                TotalPrices+=data[GoodID]['prise'].match(/\d+/)*GoodNum;
            }
            $("#main .shopContainer").html(_list);
            $("#main .mainBottom .sum").text(TotalNum+'件');
            $("#main .mainBottom .totalprise").text('￥'+TotalPrices);
            AddEvents();
        }
        //一下绑定列表中各项的事件
        function AddEvents(){
            function SETCookie(ClickDataid,ClickSize,Clicknum){
                var GoodInformationRrg=new RegExp($.cookie("loginUser")+".*?"+ClickDataid+ClickSize+"\\*\\d+\\+");
                var GoodInformation=$.cookie("registerUsers").match(GoodInformationRrg);
                var NewInformation=GoodInformation[0].split(ClickDataid+ClickSize+"*")[0]+ClickDataid+ClickSize+"*"+Clicknum+"+";
                var NewregisterUsers=$.cookie("registerUsers").replace(GoodInformationRrg,NewInformation);
                $.cookie("registerUsers",NewregisterUsers,{expires:7, path:"/"})
            }
            $("#main .shopContainer .mainbody").each(function(){
                $(this).find(".jia").mousedown(function(){
                    $(this).css("background","red");
                });
                $(this).find(".jia").mouseup(function(){
                    $(this).css("background","#FFF");
                    var VAL=$(this).siblings(".NUM").text();
                    $(this).siblings(".NUM").text(VAL*1+1);
                    VAL=$(this).siblings(".NUM").text();
                    var PRISE=$(this).parents(".mainbody").find(".prise").text().match(/\d+/);
                    $(this).parent().siblings(".sum").text("￥"+VAL*PRISE);
                    $("#main .mainBottom .sum").text($("#main .mainBottom .sum").text().match(/\d+/)*1+1+"件");
                    $("#main .mainBottom .totalprise").text('￥'+($("#main .mainBottom .totalprise").text().match(/\d+/)*1+PRISE*1));
                    SETCookie($(this).parents(".mainbody").attr("data-id"),$(this).parents(".mainbody").find(".size").text(),VAL);
                });
                $(this).find(".jian").mousedown(function(){
                    $(this).css("background","red");
                });
                $(this).find(".jian").mouseup(function(){
                    $(this).css("background","#FFF");
                    var VAL=$(this).siblings(".NUM").text();
                    $(this).siblings(".NUM").text(VAL*1-1);
                    if($(this).siblings(".NUM").text()*1<=0){
                        $(this).siblings(".NUM").text(1);
                    }else{
                        VAL=$(this).siblings(".NUM").text();
                        var PRISE=$(this).parents(".mainbody").find(".prise").text().match(/\d+/);
                        $(this).parent().siblings(".sum").text("￥"+VAL*PRISE);
                        $("#main .mainBottom .sum").text($("#main .mainBottom .sum").text().match(/\d+/)*1-1+"件");
                        $("#main .mainBottom .totalprise").text('￥'+($("#main .mainBottom .totalprise").text().match(/\d+/)*1-PRISE*1));
                        SETCookie($(this).parents(".mainbody").attr("data-id"),$(this).parents(".mainbody").find(".size").text(),VAL);
                    }
                });
                $(this).find("p.delate").click(function(){
                    if(confirm("确定要删除吗？")){
                        var DelateNum=$(this).parents(".mainbody").find(".NUM").text().match(/\d+/)*1;
                        var DelateSum=$(this).parents(".mainbody").find(".sum").text().split("￥")[1]*1;
                        $("#main .mainBottom .sum").text($("#main .mainBottom .sum").text().match(/\d+/)*1-DelateNum+"件");
                        $("#main .mainBottom .totalprise").text('￥'+($("#main .mainBottom .totalprise").text().match(/\d+/)*1-DelateSum));
                        var GoodInformationRrg=new RegExp($.cookie("loginUser")+".*?"+$(this).parents(".mainbody").attr("data-id")+$(this).parents(".mainbody").attr("data-size")+"\\*\\d+\\+");
                        var GoodInformation=$.cookie("registerUsers").match(GoodInformationRrg);
                        var NewInformation=GoodInformation[0].split($(this).parents(".mainbody").attr("data-id")+$(this).parents(".mainbody").attr("data-size")+"*")[0];
                        var NewregisterUsers=$.cookie("registerUsers").replace(GoodInformationRrg,NewInformation);
                        $.cookie("registerUsers",NewregisterUsers,{expires:7, path:"/"});
                        var ALLusers= $.cookie("registerUsers");
                        var NOWuser= $.cookie("loginUser");
                        var LoginCookie=/@/.test(NOWuser)?StrToObj3Arr(ALLusers)[0][NOWuser]:StrToObj3Arr(ALLusers)[1][NOWuser];
                        if(!/[A-Z]\*\d+/.test(LoginCookie)){
                            $("#main .ifNo").css("display",'block')
                            $("#main .ifNo").animate({height:70},500)
                        }
                        $(this).parents(".mainbody").animate({height:0},500,function(){
                            $(this).remove();
                        });
                    }
                });
                $(this).find("input").change(function(){
                    $('#main .check input')[0].checked=true;
                    $(this).parents(".shopContainer").find('input').each(function(){
                        if(!this.checked){
                            $('#main .check input')[0].checked=false;
                        }
                    })
                })
            })
        }
    });
    $('#main .check input').click(function(){
        if(this.checked){
            $("#main .shopContainer .mainbody").each(function(){
                $(this).find('input')[0].checked=true;
            })
        }else{
            $("#main .shopContainer .mainbody").each(function(){
                $(this).find('input')[0].checked=false;
            })
        }
    });
    $('#main .goToShop').click(function(){
        if(/\d+/.test($("#main .mainBottom .sum").text())){
            window.location.href='clearing.html'
        }
    })
    var T=setInterval(function(){
        if(document.getElementById('top')){
            $('#top #top_nav .top_nav_Exit').css('display','none');
            clearInterval(T);
        }
    },100)
});