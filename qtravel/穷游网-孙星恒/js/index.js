window.onload = function() {
	//:hover出现白条
	$('#best-nav best-li').mousemove(function() {
		$('best-best-li .ddd').eq($(this).index()).css('display', 'block')

	});
	$('#best-nav best-li').mouseout(function() {
		$('best-li span').css('display', 'none')
	});

	//小点animate运动
	$(document).ready(function() {
		$(".li1").click(function() {
			$(".sss").animate({
				left: "75px"
			});
		});
		$(".li2").click(function() {
			$(".sss").animate({
				left: "225px"
			});
		});
		$(".li3").click(function() {
			$(".sss").animate({
				left: "375px"
			});
		});
		$(".li4").click(function() {
			$(".sss").animate({
				left: "525px"
			});
		});
	});
	//	下拉选择框
	$('.kuang_1 input').focus(function() {
		$('.sousuo').show(500)
		$('.sousuo div').text("热门城市")
	});
	$('.kuang_1 input').blur(function() {
		$('.sousuo').hide(500)
	});

	$('.kuang_3 input').focus(function() {
		$('.sousuo2').show(500);
	});
	$('.kuang_3 input').blur(function() {
		$('.sousuo2').hide(500)
	});

	$('.kuang_4 input').focus(function() {
		$('.sousuo').show(500);
		$('.sousuo div').text("热门搜索")
	});
	$('.kuang_4 input').blur(function() {
		$('.sousuo').hide(500)
	});

	//首页轮播图
	var _banner = document.getElementById("banner");
	var _img = _banner.getElementsByTagName("img")[0];
	var _p = _banner.getElementsByTagName("p");
	var _num = _p[0].getElementsByTagName("num");
	var _arr = [
		'【约旦游记攻略】战火包围下的一片“静土”-约旦。',
		'【美国游记攻略】欢乐游美帝 交通玩乐全攻略',
		'【意大利游记攻略】去意大利感受文艺复兴',
		'丹麦不仅有童话和乐高，更有壮观的白崖、古老的教堂和无数精彩。',
		'爪哇岛传统文化艺术的中心，前往婆罗浮屠与普兰巴南的门户'
	]
	var _arr2 = ['1', '2', '3', '4', '5', ]
	var _arr3 = ['moonyyang', 'Phoebe-JIA', '爱溜达的猫', '穷游锦囊 | 丹麦', ' 穷游锦囊 | 日惹', ]
	var i = 1;

	function Change() {

		_img.src = "img/index/banner/2_" + i + ".jpg"
		_num[0].innerHTML = _arr2[i - 1];
		_p[1].innerHTML = _arr[i - 1];
		_p[2].innerHTML = _arr3[i - 1];
		i++;
		if(i == 6) {
			i = 1
		}
	}
	Change();
	setInterval(Change, 3000);

	//teb切换
	$('.choose li').click(function() {
		$('.choose li').css('background-position', '-999px')
		$('.choose li').eq($(this).index()).css('background-position', '35px')
		$('.kuang li').hide(500)
		$('.kuang li').eq($(this).index()).show(500)

	});

	//	图片滚动代码
	var _scro_1 = document.getElementById("scro_1");
	var _scro_1_li = _scro_1.getElementsByTagName("li");
	_scro_1.innerHTML += _scro_1.innerHTML;
	var timer = null;
	_scro_1.style.width = _scro_1_li.length * _scro_1_li[0].offsetWidth + 140 + "px";
	var speed = -2; //设定一个时间
	function move() {
		_scro_1.style.left = _scro_1.offsetLeft + speed + "px";
		if(_scro_1.offsetLeft < -_scro_1.offsetWidth / 2) {
			_scro_1.style.left = "0"
		} else if(_scro_1.offsetLeft > 0) {
			_scro_1.style.left = -_scro_1.offsetWidth / 2 + "px";
		}
	}
	timer = setInterval(move, 30);

	_scro_1.onmouseover = function() {
		clearInterval(timer)
	};
	_scro_1.onmouseout = function() {
		timer = setInterval(move, 30);
	};

	//限制字符串长度，超出部分出校省略号
	(function() {
		var o = document.getElementsByClassName("txt");
		var j = 0
		for(j = 0; j < o.length; j++) {
			var s = o[j].innerText;
			var p = s.substring(0, 30);
			o[j].innerHTML = p + "…" + "<a href=''>全文</a>";
		}
	})();

	//侧边提示框

	$(".body-right-tips").click(function() {
		$(".body-right").animate({
			right: "0"
		});
		$(".body-right-tips2").css('display', 'block');
		$(".body-right-tips").css('display', 'none');

	});
	$(".body-right-tips2").click(function() {
		$(".body-right").animate({
			right: "-266px"
		});
		$(".body-right-tips").css('display', 'block');
		$(".body-right-tips2").css('display', 'none');

	});

}