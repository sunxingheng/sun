/**
 * Created by Administrator on 2016/9/24.
 */
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

//	选择器的更多的下滑上拉效果
function showMore(href,moreDetails){
    if ($(moreDetails).css("display")=="none"){
        $(moreDetails).slideDown("fast",
            function (){
                $(href).addClass("close") ;
            }
        );
    }else{
        $(moreDetails).slideUp("fast",
            function (){
                $(href).removeClass("close");
            }
        );
    }
}
function showBrand(href,moreDetails,csss,morecss){
    if($(moreDetails).css("display")=="none"){
        $(csss).css("display", "none");
        $(morecss).css("display", "");
        $(moreDetails).slideDown(100,
            function (){
                $(href).addClass("close") ;
            }
        );
    }else{
        $(csss).css("display", "");
        $(morecss).css("display", "none");
        $(moreDetails).slideUp(100,
            function (){
                $(href).removeClass("close");
            }
        );
    }
}
//		下拉按钮：更多showLess(this,'#hidediv','.coll','.expan')
function showLess(href,moreDetails,csss,morecss){
    if($(moreDetails).css("display")=="none"){
//				下来
        $(csss).css("display", "block");
        $(morecss).css("display", "none");
        $(moreDetails).slideDown(100,
            function (){
                $(href).addClass("close") ;
            }
        );
    }else{
//		     	收起
        $(csss).css("display", "none");
        $(morecss).css("display", "block");
        $(moreDetails).slideUp(100,
            function (){
                $(href).removeClass("close");
            }
        );
    }
}




