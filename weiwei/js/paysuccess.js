/**
 * Created by Administrator on 2016/9/26.
 */
/*倒计时*/
window.onload=function(){
    var mill=document.getElementById('timer');
    var top=document.getElementById('countDown');
    var count=5;
    setInterval(function(){
        count--;
        mill.innerHTML=count;
        if(count===1){
            location.href="index.html"
        }
    },1000)
}
