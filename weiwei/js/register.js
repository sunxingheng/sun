/**
 * Created by Administrator on 2016/9/20.
 */
/*验证用户名 4-20位字符，由数字，字母及_组成	*/
$(function(){
 var reg = /^[a-zA-Z_]\w{3,19}$/;
 $("#usn").on("focus",function(){
  $("#usn").css({"border-color":"blue"})
 });
 $("#usn").on("blur",function(){
 // console.log($("#usn").val());
  if(($("#usn").val()=="")){
   $("#usn").css({"border-color":"red"});
   $("#span1").show();
  }else if(reg.test($("#usn").val())==false){
   $("#usn").css({"border-color":"red"})
   $("#span1").show();
   $("#span1").html("4-20位字符，由数字，字母及_组成")
  }else{
   $("#span1").hide();
  }
 });
});

  /*验证密码 6-15位字符，由数字，字母及_组成	*/
  $(function () {
   var reg = /^[a-z0-9_-]{5,14}$/;
   $("#psd").on("focus",function(){
    $("#psd").css({"border-color":"blue"})
   });
   $("#psd").on("blur",function(){
    console.log($("#psd").val());
    if(($("#psd").val()=="")){
     $("#psd").css({"border-color":"red"})
     $("#span2").show();
    }else if(reg.test($("#psd").val())==false){
     $("#psd").css({"border-color":"red"})
     $("#span2").show();
     $("#span2").html("6-15位字符由数字 字母及_组成")
    }else{
     $("#span2").hide();
     var f2=1;
    }
   });
  });
/*验证密码是否相等*/
$(function () {
 $("#conpsd").on("focus",function(){
  $("#conpsd").css({"border-color":"blue"})
 });
 $("#conpsd").on("blur",function(){
  if(($("#conpsd").val()=="")){
   $("#psd").css({"border-color":"red"})
   $("#span3").show();
  }else if($("#conpsd").val()!==$("#psd").val()){
   $("#conpsd").css({"border-color":"red"})
   $("#span3").show();
   $("#span3").html("与密码不符")
  }else{
   $("#span3").hide();
   var f3=1;
  }
 });
});
/*手机*/
$(function () {
 var reg = /^1[3|5|7|8|9]\d{9}$/;
 $("#num").on("focus",function(){
  $("#num").css({"border-color":"blue"})
 });
 $("#num").on("blur",function(){
  if(($("#num").val()=="")){
   $("#num").css({"border-color":"red"})
   $("#span4").show();
  }else if(reg.test($("#num").val())==false){
   $("#num").css({"border-color":"red"})
   $("#span4").show();
   $("#span4").html("请输入正确的手机号码")
  }else{
   $("#span4").hide();
   var f4=1;
  }
 });
});

/*获取短信验证码 随机四位数*//*换一张图片*/
window.onload=function(){
 var getmes=document.getElementById('getmes');
 var change=document.getElementById('change');
 var getcon=document.getElementById('getcon');
 var mes=document.getElementById('mes');
 getmes.onclick=function(){
  var iNum=parseInt(Math.random()*10000)
  while(iNum<1000){
   iNum=parseInt(Math.random()*10000)
  }
  mes.value=iNum;
 }
 change.onclick=function(){
  var iNum1=parseInt(Math.random()*10000)
  while(iNum1<1000){
   iNum1=parseInt(Math.random()*10000)
  }
  getcon.value=iNum1;
 }

}
/*随机验证码*/
$(function () {
 $("#con").on("focus",function(){
  $("#con").css({"border-color":"blue"})
 });
 $("#con").on("blur",function(){
  if(($("#con").val()=="")){
   $("#con").css({"border-color":"red"})
   $("#span5").show();
  }else if($("#con").val()!=$("#getcon").val()){
   $("#con").css({"border-color":"red"})
   $("#span5").show();
   $("#span5").html("请输入正确的验证码")
  }else{
   $("#span5").hide();
   var f5=1;
  }
 });
});
/*手机短信验证码*/
$(function () {
 $("#mes").on("focus",function(){
  $("#mes").css({"border-color":"blue"})
 });
 $("#mes").on("blur",function(){
  if(($("#mes").val()=="")){
   $("#mes").css({"border-color":"red"})
   $("#span6").show();
  }else{
   $("#span6").hide();
   var f6=1;
  }
 });
});

/*通过cookie存储已经注册的账号*/
$(function (){
 $("#sub").click(function () {
  // 获取到用户输入的用户名和密码
   if(($("#usn").val()!=="") && ($("#psd").val()!=="") && ($("#conpsd").val()==$("#psd").val())&&
   ($("#mes").val()!=="")&&($("#con").val()!=="")){

  var usn = $('#usn').val();
  var pwd = $("#psd").val();
  var con = $("#conpsd").val();

  var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "";
  users = convertStrToObj(users);

  if (usn in users) {
   alert("用户名已经被注册");
   return;
  } else {
   users[usn] = pwd;
   usersStr = convertObjToStr(users);
   $.cookie("registerUsers", usersStr, {expires: 7, path: "/"});
   alert("注册成功");
   location.href = "login.html";
  }
 }else {
  alert("请完善注册信息");
   }
 });

 function convertObjToStr(obj){
  var res = "";
  for(var usn in obj){
   var pwd = obj[usn];
   // 看是否是第一组用户名和密码信息
   // 如果不是，先在前面添加一个:
   if(res){
    res += ":";
   }
   res += usn + "," + pwd;
  }
  return res;
 }


 function convertStrToObj(str){
  if(!str){
   return {};
  }

  var users = str.split(":");
  var res = {};
  for(var i = 0; i < users.length; i++){
   //["test1", "123"]
   var userData = users[i].split(",");
   res[userData[0]] = userData[1];
  }

  return res;
 }

});



