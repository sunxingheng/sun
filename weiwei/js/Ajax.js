// JavaScript Document
//解决浏览器版本兼容问题

	function createXMLHttpRequest(){
		try{
			return new window.XMLHttpRequest();	
		}catch(e){
			try{
				return ActiveXObject("MSXML2.XMLHTTP.6.0");	
			}catch(e){
				try{
					return 	ActiveXObject("MSXML2.XMLHTTP.3.0");
				}catch(e){
					try{
						return 	ActiveXObject("MSXML2.XMLHTTP");	
					}catch(e){
						alert("您的浏览器版本太低");	
					}	
				}
			}	
		}	
	}
function ajaxRequest(_method,_url,_parameter,_fn,_async){
		var _ajax=createXMLHttpRequest();
		if(_ajax){
			_ajax.onreadystatechange=function(){
			if(_ajax.readyState==4){
				_fn(_ajax.responseText);	
			}	
		}
		_ajax.open(_method,_url,_async);
		_ajax.setRequestHeader("content-Type","Application/x-www-form-urlencoded;charset=utf-8");	
		_ajax.send(_parameter);
	}
}

