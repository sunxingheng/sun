/**
 * Created by Administrator on 2016/9/25.
 */
function StrToObj3Arr(str){
    var All=str.split(":");
    var TheMail={};
    var ThePhone={};
    for(var i=0;i<All.length-1;i++){
        TheMail[All[i].split(",")[0].split(" ")[0]]=All[i].split(",")[0].split(" ")[2];
        ThePhone[All[i].split(",")[0].split(" ")[1]]=All[i].split(",")[0].split(" ")[2];
    }
    return [TheMail,ThePhone];
}