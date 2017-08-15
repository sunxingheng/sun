/**
 * Created by chao on 2016/9/28.
 */
$(function(){
    $.getJSON('clearing/js/cityName.json',function(D){
        var DATA=D['regions'];
        for(var i=0;i<DATA.length;i++){
            $('select#province').append('<option>'+DATA[i]['name']+'</option>')
        }
        $('select#province').change(function(){
            $('select#city .fis')[0].selected=true;
            $('select#county .fis')[0].selected=true;
            $('select#city option').not('.fis').each(function(){
               $(this).remove();
            });
            for(var i=0;i<DATA.length;i++){
                if(DATA[i]['name']==$('select#province').val()){
                    for(var j=0;j<DATA[i]['regions'].length;j++){
                        $('select#city').append('<option>'+DATA[i]['regions'][j]['name']+'</option>')
                    }
                    break;
                }
            }
        });
        $('select#city').change(function(){
            $('select#county .fis')[0].selected=true;
            $('select#county option').not('.fis').each(function(){
                $(this).remove();
            });
            for(var i=0;i<DATA.length;i++){
                if(DATA[i]['name']==$('select#province').val()){
                    for(var j=0;j<DATA[i]['regions'].length;j++){
                        if(DATA[i]['regions'][j]['name']==$('select#city').val()) {
                            for (var k = 0; k < DATA[i]['regions'][j]['regions'].length; k++) {
                                $('select#county').append('<option>' + DATA[i]['regions'][j]['regions'][k]['name'] + '</option>')
                            }
                            break;
                        }
                    }
                }
            }
        });
    })
});