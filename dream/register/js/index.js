/**
 * Created by chao on 2016/9/20.
 */
$(function(){
    var userPhone=null;
    var userMail=null;
    var uesrPas=null;
    var uesrReaPas=null;
    var rules=[{
        reg:/\d+/,
        weight:2
    },{
        reg:/[a-z]+/,
        weight:4
    },{
        reg:/[A-Z]+/,
        weight:8
    },{
        reg:/[~!@#\$%^&*\(\)\{\};,.\?\/'"]/,
        weight:16
    }];
    var strongLevel={
        '0-10':'弱',
        '10-20':'中',
        '20-30':'强'
    };
    $("#registerMail").blur(function(){
        if(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($("#registerMail").val())){
            $("#checkMail").text("");
            userMail=$("#registerMail").val();
        }else{
            $("#checkMail").text("请输入正确的邮箱格式");
        }
    });
    $("#registerPhone").blur(function(){
        if(/^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/.test($("#registerPhone").val())){
            $("#checkPhone").text("");
            userPhone=$("#registerPhone").val();
        }else{
            $("#checkPhone").text("请输入正确的手机号");
        }
    });
    $("#registerPassword").keyup(function(){
        var weight=0;
        if(/\d+/.test($("#registerPassword").val())){
            weight++;
        }
        if(/[a-z]|[A-Z]]/.test($("#registerPassword").val())){
            weight++;
        }
        if(/[~!@#\$%^&*\(\)\{\};,.\?\/'"]/.test($("#registerPassword").val())){
            weight++;
        }
        switch (weight){
            case 1:$("#checkPassword").text('弱');break;
            case 2:$("#checkPassword").text('中');break;
            case 3:$("#checkPassword").text('强');break;
        }
    });
    $("#registerPassword").blur(function(){
        if(/^.{6,20}$/.test($("#registerPassword").val())){
            $("#checkPassword").text("");
            uesrPas=$("#registerPassword").val();
        }else{
            $("#checkPassword").text("密码需在6-20位之间");
        }
    });
    $("#registerReaPassword").blur(function(){
        if($("#registerReaPassword").val() === $("#registerPassword").val()){
            uesrReaPas=$("#registerReaPassword").val();
            $("#checkReaPassword").text("");
        }else{
            $("#checkReaPassword").text("两次密码不一致");
        }
    });
    //     以上通过正则验证正确的邮箱手机号密码格式以及密码强度
    //     一下讲注册邮箱手机号密码对应储存
    //     cookie  {Mail1 Phone1 dood1*1+dood2*1+dood3*1+,password1:Mail2 Phone2 dood1*1+dood2*1+dood3*1+,password2:Mail3 Phone3,password3}
    /*
        {
            Mail1 : pwd1,
            Mail2 : pwd2
        }
        {
            phone1: pwd1,
            phone2: pwd2
        }

     */
    //$.cookie("registerUsers", "Mail1 Phone1 doods+,password1:Mail2 Phone2,password2:Mail3 Phone3,password3", {expires:7, path:"/"});
    //$.removeCookie("registerUsers",{path : "/"});
    var users= $.cookie("registerUsers")?$.cookie("registerUsers") : "";
    users=StrToObjArr(users);
    function StrToObjArr(str){
        if(!str){
            return [{},{}]
        }
        var All=str.split(":");
        var TheMail={};
        var ThePhone={};
        for(var i=0;i<All.length-1;i++){
            TheMail[All[i].split(",")[0].split(" ")[0]]=All[i].split(",")[1];
            ThePhone[All[i].split(",")[0].split(" ")[1]]=All[i].split(",")[1];
        }
        return [TheMail,ThePhone];
    }
    $("#registerMail").blur(function(){
        if($("#registerMail").val() in users[0]){
            $("#checkMail").text("此邮箱已注册");
            return;
        }
    });
    $("#registerPhone").blur(function(){
        if($("#registerPhone").val() in users[1]){
            $("#checkPhone").text("此手机号已注册");
            return;
        }
    });
    $("#registerOk").click(function(){
        $("#verifyImg img").each(function(){
            if(this.rot!=0){
                $("#checkverifyImg").text("请输入正确的验证码...");
                return false;
            }
            $("#checkverifyImg").text("");
        });
        if($("#checkverifyImg").text())return;
        if($("#checkMail").text()=="" && $("#checkPhone").text()==""
            && $("#checkPassword").text()=="" && $("#checkReaPassword").text()==""){
            if(userMail!=null&&userPhone!=null&&uesrPas!=null&&uesrReaPas!=null){
                if($("#registerAgreecheck")[0].checked){
                    users= $.cookie("registerUsers")?$.cookie("registerUsers") : "";
                    if(users){
                        users=users+userMail+" "+userPhone+" ,"+uesrPas+":";
                    }else{
                        users=userMail+" "+userPhone+" ,"+uesrPas+":";
                    }
                    $.cookie("registerUsers", users, {expires:7, path:"/"});
                    alert("注册成功，继续登录");
                    window.location.href="../login/login.html";
                }else{
                    alert("请认真阅读协议")
                }
            }
        }
    });
    //绑定密码可是按钮
    $("#main .a").mousedown(function(){
        $("#main #registerPassword")[0].type="text";
    });
    $("#main .a").mouseup(function(){
        $("#main #registerPassword")[0].type="password";
    });
    $("#main .b").mousedown(function(){
        $("#main #registerReaPassword")[0].type="text";
    });
    $("#main .b").mouseup(function(){
        $("#main #registerReaPassword")[0].type="password";
    });

    //检验图片验证码
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
                $(this).css({ 'transform':'rotate('+this.rot+'deg)','-ms-transform':'rotate('+this.rot+'deg)','-moz-transform':'rotate('+this.rot+'deg)','-o-transform':'rotate('+this.rot+'deg)'});
            }
        });
    }
    GetTest();
    $("#verify .right").click(GetTest);


});
