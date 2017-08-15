/**
 * Created by chao on 2016/9/20.
 */
$(function(){
    //以下设置验证码
    function GetTest(){
        var rotate={
            1:"rotate(0deg)",
            2:"rotate(90deg)",
            3:"rotate(180deg)",
            4:"rotate(270deg)"
        };
        var _list="";
        var Rand1=null;
        var Rand2=null;
        for(var i=1;i<=4;i++){
            Rand1=Math.floor(Math.random()*4+1);
            Rand2=Math.floor(Math.random()*23+1);
            _list+='<img src=../img/'+Rand2+'.jpg style="transform:'+rotate[Rand1]+';-ms-transform:'+rotate[Rand1]+';-moz-transform:'+rotate[Rand1]+';-o-transform:'+rotate[Rand1]+'">'
        }
        $("#verifyImg").html(_list);
        //点击图片让其旋转
        $("#verifyImg img").each(function(){
            this.rot=this.style.transform.match(/\d+/g)[0];
            this.onclick=function(){
                if(this.rot==0){this.rot=90;}
                else if(this.rot==90){this.rot=180;}
                else if(this.rot==180){this.rot=270;}
                else if(this.rot==270){this.rot=0;}
                $(this).css({ transform:'rotate('+this.rot+'deg)'});
            }
        });
    }
    GetTest();
    $("#verify .right").click(GetTest);
    //以下是校验输入用户名和密码
    $("#register").click(function(){
        $("#verifyImg img").each(function(){
            if(this.rot!=0){
                $("#checkverifyImg").text("请输入正确的验证码...");
                return false;
            }
            $("#checkverifyImg").text("");
        });
        if($("#checkverifyImg").text())return;
        var user=$("#text").val();
        var pas=$("#pas").val();
        var users= $.cookie("registerUsers");
        users=StrToObjArr(users);
        if(/^[0-9]{11}$/.test(user)){
            if(users[1][user] == pas){
                $.cookie("loginUser",user,{expires:7,path:"/"});
                window.location.href="../index.html";
            }else{
                alert("请输入正确的用户名和密码");
            }
        }else{
            if(users[0][user] == pas){
                $.cookie("loginUser",user,{expires:7,path:"/"});
                window.location.href="../index.html";
            }else{
                alert("请输入正确的用户名和密码");
            }
        }
    });
    function StrToObjArr(str){
        if(!str){
            return [{},{}]
        }
        var All=str.split(":");
        var TheMail={};
        var ThePhone={};
        for(var i=0;i<All.length;i++){
            TheMail[All[i].split(",")[0].split(" ")[0]]=All[i].split(",")[1];
            ThePhone[All[i].split(",")[0].split(" ")[1]]=All[i].split(",")[1];
        }
        return [TheMail,ThePhone];
    }
    $("#main .loginGeneral span").mousedown(function(){
        $("#main #pas")[0].type="text";
    });
    $("#main .loginGeneral span").mouseup(function(){
        $("#main #pas")[0].type="password";
    });
    console.log("asdaad(12as".match(/(\d+)/));
});