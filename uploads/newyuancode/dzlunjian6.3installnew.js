console.log("自动执行托管任务时间是" + tuoguanh + "时" + tuoguanm + "分" + "--非授权用户请忽略本条提示");
$('title').html("道长论剑:" + window.location.href.split("&")[2].split("=")[1]);
if (window.location.href.indexOf("name=") != -1) {
	var userid = "u" + window.location.href.split("&")[1].split("=")[1],
		userqu = window.location.href.split("&")[4].split("=")[1]
} else if (window.location.href.indexOf("name=") == -1) {
	var userid = "u" + window.location.href.split("?")[1].split("&")[0].split("=")[1],
		userqu = window.location.href.split("direct")[1].split(".")[0]
}
function checkpifu() {
	if (typeof pifu == "undefined" || typeof skillset3 == "undefined") {
		pifu = 0;
		setTimeout(function() {
			g_gmain.notify_fail(HIR + "当前脚本不是最新版" + NOR)
		}, 1000)
	}
}
checkpifu();
var buttonTop = 280;

function IsPC() {
	var a = navigator.userAgent;
	var b = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	var c = true;
	for (var v = 0; v < b.length; v++) {
		if (a.indexOf(b[v]) > 0) {
			c = false;
			break
		}
	}
	if (buju == "auto" && c == false) {
		console.log("你的当前设备为移动端，已为你优化默认布局");
		buju = 330
	} else if (buju == "auto") {
		if (window.screen.height == 1080) {
			buju = 625;
			buttonTop = 540
		} else if (window.screen.height == 1050) {
			buju = 575;
			buttonTop = 490
		} else if (window.screen.height == 900) {
			buju = 485;
			buttonTop = 340
		} else if (window.screen.height == 768) {
			buju = 400;
			buttonTop = 280
		} else if (window.screen.height == 720) {
			buju = 365;
			buttonTop = 250
		} else if (window.screen.height < 720) {
			buju = 300;
			buttonTop = 60
		} else if (window.screen.height > 1080) {
			buju = 750;
			buttonTop = 530
		} else {
			buju = 480
		}
		console.log("功能按钮布局已自动优化为" + buju + '(' + window.screen.height + 'p)')
	}
}
IsPC();
var kfql_flag = 0,
	auto_fight, walk_delay = 100,
	xl_delay = 0,
	myFS, owNum, opNum, yxer = "柳淳风",
	yxadd = "雪亭镇",
	act, npc, thing, ad1, ad2, nowjob, btnList = {},
	paddingLeft = '0px',
	paddingRight = '0px',
	clrs1 = 'color',
	clrs2 = 'ground',
	color0 = '#ffffff',
	ground0 = '#00BFFF',
	color1 = '#ffffff',
	ground1 = '#1ba9f5',
	color2 = '#E0EEEE',
	ground2 = '#9370DB',
	color3 = '#ffffff',
	ground3 = '#78C300',
	color4 = '#BFEFFF',
	ground4 = '#BDB76B',
	color5 = '#ffffff',
	ground5 = '#ff0000',
	color6 = '#E0EEE0',
	ground6 = '#CD661D',
	color7 = '#FFFAFA',
	ground7 = '#FFB6C1',
	color8 = '#ffffff',
	ground8 = '#000000',
	color9 = null,
	ground9 = null,
	color = eval(clrs1 + pifu),
	ground = eval(clrs2 + pifu),
	buttonWidth = '70px',
	buttonHeight = '20px',
	currentPos = 2,
	delta = 22,
	hongbao_flag = 0,
	nowversion = "6.3.2",
	database = window.sessionStorage,
	database_all = window.localStorage;
var btnBox1 = document.createElement('div');
btnBox1.style.position = 'absolute';
btnBox1.style.top = buttonTop + 'px';
btnBox1.style.left = 280 + buju + 'px';
btnBox1.style.width = buttonWidth;
document.body.appendChild(btnBox1);
var btnBox2 = document.createElement('div');
btnBox2.style.position = 'absolute';
btnBox2.style.top = buttonTop + 'px';
btnBox2.style.left = 210 + buju + 'px';
btnBox2.style.width = buttonWidth;
document.body.appendChild(btnBox2);
var btnBox3 = document.createElement('div');
btnBox3.style.position = 'absolute';
btnBox3.style.top = buttonTop + 'px';
btnBox3.style.left = 140 + buju + 'px';
btnBox3.style.width = buttonWidth;
document.body.appendChild(btnBox3);
var btnBox4 = document.createElement('div');
btnBox4.style.position = 'absolute';
btnBox4.style.top = buttonTop + 'px';
btnBox4.style.left = 70 + buju + 'px';
btnBox4.style.width = buttonWidth;
document.body.appendChild(btnBox4);
var btnBox5 = document.createElement('div');
btnBox5.style.position = 'absolute';
btnBox5.style.top = buttonTop + 'px';
btnBox5.style.left = 0 + buju + 'px';
btnBox5.style.width = buttonWidth;
document.body.appendChild(btnBox5);

function createButton(a, b, c) {
	btnList[a] = document.createElement('button');
	var d = btnList[a];
	d.innerText = a;
	d.style.marginTop = currentPos + "px";
	d.style.color = color;
	d.style.background = ground;
	d.style.paddingLeft = paddingLeft;
	d.style.paddingRight = paddingRight;
	d.style.width = '100%';
	d.style.height = buttonHeight;
	d.addEventListener('click', c);
	b.appendChild(d)
}
var popbk = {},
	popList = {};

function createPop(a) {
	popbk[a] = document.createElement("div");
	var b = popbk[a];
	b.style.position = 'absolute';
	b.style.top = (buttonTop - 280) + 'px';
	b.style.width = '100%';
	b.style.height = '100%';
	b.style.zIndex = '100';
	b.style.display = 'none';
	document.body.appendChild(b);
	var c = document.createElement('div');
	c.style.position = 'absolute';
	c.style.top = '0';
	c.style.width = '100%';
	c.style.height = '100%';
	b.appendChild(c);
	c.addEventListener('click', closepop);

	function closepop() {
		b.style.display = 'none'
	}
	popList[a] = document.createElement('div');
	d = popList[a];
	d.style.position = 'absolute';
	d.style.top = '0px';
	d.style.left = 200 + buju + 'px';
	d.style.width = '400px';
	d.style.padding = '10px 5px 10px 0px';
	d.style.marginLeft = '-132px';
	d.style.background = '#B2DFEE';
	d.style.color = 'green';
	d.style.textAlign = 'center';
	d.style.border = '2px solid #ccc';
	b.appendChild(d);
	return b
}
function createPopButton(e, g, q) {
	btnList[e] = document.createElement("button");
	var k = btnList[e];
	k.innerText = e;
	k.style.padding = "0";
	k.style.margin = "2px 0 0 5px";
	k.style.width = "60px";
	k.style.height = "20px";
	k.style.height = buttonHeight;
	k.style.color = color;
	k.style.background = ground;
	k.addEventListener("click", q);
	popList[g].appendChild(k);
	k.onmouseup = function() {
		popbk[g].style.display = "none"
	}
}
var html580ads = {
	init: function(a, c) {
		a = '<h2  id="outle" style="height: 40px; top:-15px; line-height: 30px; padding-left: 5px; font-size: 20px;text-align:center; color:' + color + ";background:" + ground + ';border-bottom: 1px solid #aaaaaa; position: relative; "><b>' + a + '</b><span style="width: 21px; height: 20px;position: absolute; top: 1px; right:30px;"><a id="btn_min" href="javascript:void(0); ">一</a>&nbsp&nbsp<a id="btn_close" href="javascript:void(0);" >X</a></span></h2><div id="mainoutle" style="height:150px; width:300px; overflow: hidden; font-size: 18px; line-height: 18px;text-decoration:underline; color:rgb(195, 66, 255);"><div style="padding:2px;"><b>' + c + "</b></div></div>";
		var b = this;
		c = document.body;
		b.oDiv = document.createElement("div");
		b.oDiv.id = "miaov_float_layer";
		b.oDiv.style.cssText = "border: 1px solid #aaaaaa; display:none;width:300px;";
		c.appendChild(b.oDiv);
		b.oDiv.innerHTML = a;
		var d = document.getElementById("btn_min");
		a = document.getElementById("btn_close");
		b.oDivContent = b.oDiv.getElementsByTagName("div")[0];
		var e = 0;
		c = window.navigator.userAgent.match(/MSIE 6/ig) && !window.navigator.userAgent.match(/MSIE 7|8/ig);
		b.oDiv.style.display = "block";
		e = b.oDivContent.offsetHeight;
		c ? (b.oDiv.style.position = "absolute", b.repositionAbsolute(), window.attachEvent("onscroll", function() {
			b.repositionAbsolute()
		}), window.attachEvent("onresize", function() {
			b.repositionAbsolute()
		})) : (b.oDiv.style.position = "fixed", b.repositionFixed());
		d.timer = null;
		d.isMax = !0;
		d.onclick = function() {
			b.startMove(b.oDivContent, (this.isMax = !this.isMax) ? e : 0, function() {
				d.className = "min" == d.className ? "max" : "min"
			})
		};
		a.onclick = function() {
			b.oDiv.remove()
		}
	},
	startMove: function(a, c, b) {
		a.timer && clearInterval(a.timer);
		var d = this;
		a.timer = setInterval(function() {
			d.doMove(a, c, b)
		}, 30)
	},
	doMove: function(a, c, b) {
		var d = (c - a.offsetHeight) / 8;
		a.offsetHeight == c ? (clearInterval(a.timer), a.timer = null, b && b()) : (d = 0 < d ? Math.ceil(d) : Math.floor(d), a.style.height = a.offsetHeight + d + "px", window.navigator.userAgent.match(/MSIE 6/ig) && 2 == window.navigator.userAgent.match(/MSIE 6/ig).length ? this.repositionAbsolute() : this.repositionFixed())
	},
	repositionFixed: function() {
		this.oDiv.style.right = 0;
		this.oDiv.style.bottom = 0
	},
	repositionAbsolute: function() {
		var a = document.body.scrollTop || document.documentElement.scrollTop,
			c = document.documentElement.clientHeight;
		this.oDiv.style.left = (document.body.scrollLeft || document.documentElement.scrollLeft) + document.documentElement.clientWidth - this.oDiv.offsetWidth + "px";
		this.oDiv.style.top = a + c - this.oDiv.offsetHeight + "px"
	},
	changemsgcss: function() {
		document.getElementById("outle").style.color = color;
		document.getElementById("outle").style.background = ground
	}
};

function alertmsg(a, c) {
	1 == database.alert_flag ? (document.getElementById("btn_close") && html580ads.oDiv.remove(), html580ads.init(a, c)) : console.log("你有一条弹窗消息待显示，可弹窗功能未开启")
}
function mainoutle(a, c) {
	document.getElementById("mainoutle").style.height = a + "px";
	document.getElementById("mainoutle").style.width = c + "px";
	html580ads.oDiv.style.width = c + "px"
};
(function() {
	var e, isInitialized = false,
		_console = {};

	function createElement(a, b) {
		var c = document.createElement(a);
		c.style.cssText = b;
		return c
	}
	function createPanel(a) {
		a.bgColor = a.bgColor || ground;
		a.color = a.color || color;
		a.css = a.css || '';
		a.freeConsole = false;
		var b = createElement('div', 'font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:bold;padding:5px;text-align:left;opacity:0.8;position:fixed;left:300px;top:288px;min-width:200px;max-height:285px;overflow:auto;background:' + a.bgColor + ';color:' + a.color + ';' + a.css);
		b.style.left = 350 + buju + 'px';
		b.style.top = buttonTop + 3 + 'px';
		return b
	}
	function log() {
		var c = createElement('div', 'line-height:18px;background:' + (e.children.length % 2 ? 'rgba(255,255,255,0.2)' : ''));
		var d = [].slice.call(arguments).reduce(function(a, b) {
			return a + ' ' + b
		}, '');
		c.textContent = d;
		e.appendChild(c);
		e.scrollTop = e.scrollHeight - e.clientHeight
	}
	function clear() {
		e.innerHTML = ''
	}
	function init(a) {
		if (isInitialized) {
			return
		}
		isInitialized = true;
		a = a || {};
		e = createPanel(a);
		document.body.appendChild(e);
		if (!a.freeConsole) {
			_console.log = console.log;
			_console.clear = console.clear;
			console.log = originalFnCallDecorator(log, 'log');
			console.clear = originalFnCallDecorator(clear, 'clear')
		}
	}
	function destroy() {
		isInitialized = false;
		console.log = _console.log;
		console.clear = _console.clear;
		e.remove()
	}
	function hidelog() {
		e.style.visibility = "hidden"
	}
	function showlog() {
		e.style.visibility = "visible"
	}
	function changecss() {
		e.style.color = color;
		e.style.background = ground
	}
	function checkInitialized() {
		if (!isInitialized) {
			throw 'You need to call `screenLog.init()` first.';
		}
	}
	function checkInitDecorator(a) {
		return function() {
			checkInitialized();
			return a.apply(this, arguments)
		}
	}
	function originalFnCallDecorator(a, b) {
		return function() {
			a.apply(this, arguments);
			if (typeof _console[b] === 'function') {
				_console[b].apply(console, arguments)
			}
		}
	}
	window.screenLog = {
		init: init,
		log: originalFnCallDecorator(checkInitDecorator(log), 'log'),
		clear: originalFnCallDecorator(checkInitDecorator(clear), 'clear'),
		destroy: checkInitDecorator(destroy),
		hidelog: checkInitDecorator(hidelog),
		showlog: checkInitDecorator(showlog),
		changecss: checkInitDecorator(changecss)
	}
})();
var skillnames = {
	"帝王剑法": 'king-sword',
	"真武七截剑": 'zhenwu-jian',
	"玄铁剑法": 'iron-sword',
	"降龙十八掌": 'xianglong-zhang',
	"黯然销魂掌": 'anran-zhang',
	"六脉神剑": 'liumai-shenjian',
	"易筋经神功": 'yijinjing',
	"八荒功": 'bahuang-gong',
	"茅山道术": 'necromancy',
	"九阳至圣功": 'jiuyang-zhisheng',
	"无相金刚掌": 'wuxiang-jingang-quan',
	"天师灭神剑": 'tao-mieshen-sword',
	"辟邪剑法": 'pixie-sword',
	"独孤九剑": 'dugu-jiujian',
	"乾坤大挪移": 'qiankun-danuoyi',
	"凌波微步": 'lingboweibu',
	"屠龙刀法": 'tulong-blade',
	"飞刀绝技": 'feidao',
	"天羽奇剑": 'tianyu-qijian',
	"九阳神功": 'jiuyang-shengong',
	"太极神功": 'taiji-shengong',
	"金刚不坏功": 'jin-gang',
	"北冥神功": 'beiming-shengong',
	"葵花宝典": 'kuihua-shengong',
	"九阴白骨爪": 'jiuyin-baiguzhao',
	"九阴噬骨刀": 'jiuyin-blade',
	"九阴真经": 'jiuyin',
	"无影毒阵": 'wuying-dugong',
	"道种心魔经": 'dzxinmojing',
	"排云掌法": 'paiyun-zhang',
	"覆雨剑法": 'fuyu-sword',
	"雪饮狂刀": 'xueyin-blade',
	"九天龙吟剑法": 'jiutian-sword',
	"如来神掌": 'rulai-zhang',
	"孔雀翎": 'kongqueling',
	"万流归一": 'wanliuguiyi',
	"幽影幻虚步": 'yyhuanxubu',
	"翻云刀法": 'fanyun-blade',
	"不动明王诀": 'budongmwj',
	"九妙飞天术": 'jiumiaofts',
	"十阳灭冥箭": 'shiyangjian',
	"万象流云刀法": 'wanxianglyd',
	"碧海潮生剑": 'bihai-sword',
	"倚天剑法": 'yitian-sword',
	"七星夺魄剑": 'sevenstar-sword-plus',
	"七星剑法": 'qixing-sword',
	"连珠腐尸功": 'lianzhu-fushi',
	"暴雨梨花针": 'baoyu-lihua',
	"春风快意刀法": 'spring-blade',
	"生生造化功": "sszaohuagong",
	"织冰剑法": "binggong-jianfa",
	"烈血十式": "lxss",
	"镇国龙枪": "zglq",
	"神箭飞刀": "sjfd",
	"杨门枪法": "ymqf",
	"碧血心法": "bxxf",
	'天波九转': 'tbjz',
	"九溪断月枪": "jxdyq",
	"霜寒十四棍": "shshisigun",
	"斗战棍典": "douzhangundian",
	"龙渊玉英杖": "tongshouzhang",
	"十二都天神杖": "tianshenzhang",
	"燎原百破": "lybp",
	"碎岳锤法": "sycf",
	"玄胤天雷": "xytl",
	"坠云落星锤": "zylxc",
	"天火飞锤": "thfc",
	"玄天杖法": "xtzf",
	"千影百伤棍": "qybsg",
	"破军棍诀": "pjgj",
	"拈花解语鞭": "zhjyb",
	"十怒绞龙索": "snjls",
	"无归鞭法": "huimengwuheng",
	"捆仙鞭法": "kunxianbianfa",
},
	wuqinames = {
		"九天龙吟剑": "weapon_sb_sword10",
		"飞宇天怒刀": "weapon_sb_blade10",
		"天罡掌套": "weapon_sb_unarmed10",
		"斩龙鎏金枪": "weapon_sb_spear10",
		"开天宝棍": "weapon_sb_stick10",
		"小李飞刀": "weapon_sb_throwing10",
		"乌金玄火鞭": "weapon_sb_whip10",
		"达摩杖": "weapon_sb_staff10",
		"天雷断龙斧": "weapon_sb_axe10",
		"烛幽鬼煞锤": "weapon_moke_hammer10",
		"轩辕剑": "weapon_sb_sword11",
		"破岳掌套": "weapon_sb_unarmed11",
		"雷霆诛神刀": "weapon_sb_blade11",
		"玄冰凝魄枪": "weapon_sb_spear11",
		"擎天圣棍": "weapon_sb_stick11",
		"九天灭世锤": "weapon_sb_hammer11",
	},
	qixiaqinmi = {
		"玄月研": 40000,
		"王蓉": 25000,
		"狼居胥": 40000,
		"庞统": 25000,
		"烈九州": 40000,
		"步惊鸿": 25000,
		"穆妙羽": 40000,
		"宇文无敌": 40000,
		"李玄霸": 40000,
		"护竺": 35000,
		"八部龙将": 40000,
		"风无痕": 40000,
		"浪唤雨": 25000,
		"李宇飞": 25000,
		"风行骓": 40000,
		"郭济": 25000,
		"吴缜": 40000,
		"风南": 25000,
		"火云邪神": 25000,
		"逆风舞": 25000,
		"狐苍雁": 35000,
		"厉沧若": 40000,
		"夏岳卿": 40000,
		"妙无心": 40000,
		"巫夜姬": 40000
	},
	xueting_ss = 'jh 1;e;s;w;w;e;s;n;e;e;ne;ne;sw;sw;n;w;n;w;e;e;e;n;s;e;e;n;s;s;n;e;w;w;w;w;w;n;w;e;n;w;e;e;e;w;w;n;e;w;w;e;n;s;s;s;s;s;w;inn_op1;w;e;n;s;e',
	luoyang_ss = 'jh 2;n;n;e;s;luoyang317_op1;n;n;w;n;w;putuan;n;e;e;s;n;w;n;w;s;w;e;n;event_1_98995501;n;w;e;n;e;w;s;s;s;e;e;s;n;w;n;w;n;n;w;e;s;s;s;luoyang111_op1;e;n;w;n;w;get_silver;s;e;n;n;e;get_silver;n;w;s;s;s;e;e;e;n;op1;s;s;e;n;n;w;e;e;n;s;w;n;w;e;n;e;w;n;w;e;get_silver;w;s;s;s;s;s;w;w;n;w;e;e;n;s;w;n;e;w;n;w;luoyang14_op1;n;e;e;w;n;e;n;n;s;s;w;n;n;n;n;n;n',
	huashancun_ss = 'jh 3;n;e;w;s;w;n;s;event_1_59520311;n;n;w;e;n;n;e;w;n;e;w;s;s;s;s;s;e;e;s;e;n;s;w;s;e;w;w;n;s;e;s;s;w;n;s;get_silver;n;e;huashancun15_op1;w;s;e;w;nw;n;n;e;get_silver;s;w;n;w;e;n;n;e;w;w;e;n',
	huashan_ss = 'jh 4;n;n;w;e;n;e;w;n;n;n;n;event_1_91604710;s;s;s;w;e;s;e;w;n;n;n;n;nw;s;s;w;n;n;w;s;n;w;e;e;n;e;n;n;w;e;n;e;w;n;e;w;n;s;s;s;s;s;w;n;n;n;w;e;e;s;s;n;n;n;n;s;s;w;n;get_silver;s;s;s;s;w;event_1_30014247;s;w;e;s;e;w;s;s;s;e',
	yangzhou_ss = 'jh 5;n;e;w;w;w;n;s;e;e;n;w;e;e;w;n;w;e;event_1_8220256;n;w;e;n;e;w;w;n;get_silver;s;s;e;e;get_silver;n;w;n;e;w;n;s;s;s;s;w;n;w;yangzhou16_op1;e;e;n;w;w;s;s;n;n;n;n;w;n;n;n;s;s;s;e;e;w;n;get_silver;s;s;s;s;e;e;n;w;e;e;n;n;w;e;e;w;n;n;s;s;s;s;w;n;w;e;e;get_silver;s;w;n;w;w;n;get_silver;s;s;e;e;n;n;s;e;s;e;s;s;s;n;n;n;w;n;w;w;w;n;w;e;e;w;n;n;e;s;n;w;n;s;w;n;jh 5;n;n;n;n;n;e;n;n;n;s;s;w;n;e;n;n;s;s;w;n;n;e;n;n;s;s;e;s;s;s',
	gaibang_ss = 'jh 6;event_1_98623439;s;w;e;n;ne;ne;ne;sw;sw;n;ne;ne;ne;event_1_97428251',
	qiaoyinxian_ss = 'jh 7;s;s;s;w;s;w;w;w;e;e;e;e;event_1_65599392;n;s;w;e;ne;s;s;e;n;n;e;w;s;s;w;s;w;w;w;n;s;s;e;n;s;e;ne;s;e;n;e;s;e',
	emeishan_ss = 'jh 8;w;nw;n;n;n;n;w;e;se;nw;e;n;s;e;n;n;e;fight emei_shoushan;n;n;n;n;e;e;w;w;w;n;n;n;e;e;e;e;w;w;s;w;e;e;w;s;w;e;e;w;n;n;n;w;e;e;w;n;w;e;e;w;n;e;e;w;w;w;w;w;w;w;w;w;n;n;n;s;s;s;e;e;e;s;w;e;e;w;s;w;e;e;w;s;w;w;sw;ne;n;s;e;e;s;w;e;e;w;s;w;e;e;w;n;n;e;e;n;n;n;n;w;w;e;n;s;s;n;e;n;n;n;n;s;s;nw;nw;n;n;s;s;se;sw;w;nw;w;e;se;e;ne;se;ne;se;s;se;nw;n;nw;ne;n;s;se;e',
	hengshan_ss = 'jh 9;n;w;e;n;e;w;n;w;e;n;e;w;henshan15_op1;e;n;event_1_85624865;n;e;w;w;e;n;n;n;s;s;s;s;w;n;n;w;n;s;s;n;e;e;n;s;e;w;w;n;n;w;n;e;henshan_qinqitai23_op1;s;w;n;n;n;s;w;get_silver',
	wudangshan_ss = 'jh 10;w;n;n;w;w;w;n;n;n;n;n;w;n;s;e;n;n;n;n;s;s;s;s;e;e;s;n;e;w;w;w;s;e;e;e;e;s;e;s;e;n;s;s;n;e;e;n;s;e;w;s;s',
	wanyuezhuang_ss = 'jh 11;e;n;s;n;s;e;s;n;nw;w;nw;e;e;e;n;w;e;s;w;w;w;se;e;se;s;sw;se;s;s;s;w;s;s;se;e;n;s;se;s;n;ne;n;nw;w;n;n;n;w;n;s;w;n;w;e;s;w;w;e;s;n;e;s;w;e;s;e;e;e;w;w;w;w;w;s;n;n;s;e;e',
	shuiyange_ss = 'jh 12;n;n;n;n;s;e;e;w;n;n;s;ne;w;w;se;s;n;n;e',
	shaolinsi_ss = 'jh 13;e;s;s;w;w;e;e;n;n;w;n;w;w;n;shaolin012_op1;s;s;e;e;n;w;e;e;w;n;n;w;e;e;w;n;n;w;e;e;w;n;shaolin27_op1;event_1_34680156;s;w;n;w;e;e;w;n;shaolin25_op1;w;n;n;e;w;w;e;n;w;n;get_silver;s;s;e;s;s;e;s;s;s;s;s;s;s;s;n;n;n;n;n;n;n;n;w;w;s;s;s;s;s;s;s;s',
	tangmen_ss = 'jh 14;w;n;n;n;n;s;w;n;s;s;n;w;n;s;s;n;w;n;s;s;n;w;e;e;e;e;e;s;n;e;n;e;w;n;n;s;ask tangmen_tangmei;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;n;s;w;e;s;e;n;w;n;n',
	qingchengshan_ss = 'jh 15;s;s;e;w;w;n;s;e;s;e;w;w;w;n;s;s;s;n;n;w;w;w;w;e;n;s;e;e;e;e;e;s;e;w;w;e;s;e;w;s;w;s;jh 15;n;nw;w;nw;w;s;s;s;w;w;n;e;w;w;e;n;w;s;s;s;n;w;n',
	xiaoyaolin_ss = 'jh 16;s;s;s;s;e;e;s;s;w;n;s;s;s;n;n;w;n;n;s;s;s;s;n;n;w;w;n;s;s;n;w;jh 16;s;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376;n;n;w;w;e;n;s;e;e;e;n;n;w;n;e;w;s;e;s;s;w;n;event_1_88625473;event_1_82116250;event_1_90680562;event_1_38586637',
	kaifeng_ss = 'jh 17;e;s;s;s;e;kaifeng_yuwangtai23_op1;s;w;s;s;w;jh 17;n;e;s;n;w;w;e;n;w;n;n;s;s;e;e;e;n;n;s;get_silver;e;s;s;n;w;s;s;s;w;e;s;w;e;n;e;n;s;s;n;e;jh 17;n;n;n;e;w;n;w;e;e;w;n;e;n;n;n;event_1_27702191;jh 17;event_1_97081006;s;s;s;e;kaifeng_yezhulin23_op1;n;w;s;s;w;kaifeng_yezhulin05_op1;s;w',
	mingjiao_ss = 'jh 18;e;w;w;n;s;e;n;nw;n;n;w;e;n;n;n;ne;n;n;w;e;e;w;n;w;e;e;w;n;n;w;w;s;n;n;n;n;e;nw;nw;se;se;e;s;w;e;e;w;s;e;w;s;w;e;e;w;s;e;e;se;se;e;w;nw;nw;n;n;ne;e;w;nw;w;w;n;n;n;w;e;n;event_1_90080676;event_1_56007071;e;w;ne;n;nw',
	quanzhenjiao_ss = 'jh 19;s;s;s;sw;s;e;n;nw;n;n;n;n;w;e;e;w;n;w;w;w;s;n;w;s;n;e;e;e;e;e;n;s;e;e;w;n;n;s;s;w;w;n;n;w;w;s;s;n;n;w;s;s;n;n;w;n;n;n;n;n;n;e;n;e;e;n;n;s;s;e;e;e;e;s;e;s;s;s;n;w;s;s;s;w;s;n;w;w;e;n;e;n;n;n;s;w;n;n;s;s;s;n;w;n;s;s;s;w;n;n;n',
	gumu_ss = 'jh 20;s;s;n;n;w;w;s;e;s;s;w;s;s;s;sw;sw;s;e;se;nw;w;s;w;e;e;w;s;s;w;w;e;s;sw;ne;e;s;s;w;w;e;e;s;n;e;e;e;e;s;e;w;n;w;n;e;w;n;s;w;s;n;n;w;e;e;w;n;n;s;s;event_1_3723773;se;n;e;n;s;e;w;s;w;e;s;e',
	baituoshan_ss = 'jh 21;nw;ne;ne;sw;n;n;ne;w;e;n;n;w;w;jh 21;nw;s;n;w;n;s;w;nw;e;w;nw;nw;n;w;sw;ne;e;s;se;se;n;n;n;w;e;n;n;w;n;s;s;n;w;w;n;n;n;n;s;s;s;s;e;e;e;e;e;w;ne;sw;n;n;w;e;e;e;w;w;n;nw;se;ne;w;e;e;w;n',
	songshan_ss = 'jh 22;n;n;w;w;s;s;e;w;s;s;w;e;s;jh 22;n;n;w;n;n;n;n;n;e;e;w;n;n;w;n;s;e;n;n;n;e;songshan33_op1;n;w;w;w;e;n;w;e;n;s;s;e;n;e;w;n;e;w;n',
	hanmeizhuang_ss = 'jh 23;n;n;e;w;n;n;n;n;n;e;s;n;w;w;w;e;e;n;e;n;s;w;w;n;s;w;e;e;n;n;e;w;w;n;s;e;event_1_8188693;n;n;w;e;n;n;s;e;n',
	taishan_ss = 'jh 24;n;n;n;n;w;e;e;s;n;e;w;w;n;n;w;e;e;w;n;e;w;n;w;n;n;n;w;n;s;e;n;n;s;s;s;s;s;e;n;e;w;n;w;e;n;n;w;n;e;w;n;w;e;n;n;e;w;s;s;s;s;e;e;s;n;e;n;e;w;n;w;e;e;w;n;n;s;s;s;s;s;w;w;n;n;w;e;e;w;n;n;w;e;e;w;n',
	daqimen_ss = 'jh 25;w;e;e;e;e;e;s',
	dazhaosi_ss = 'jh 26;w;w;w;w;w;n;s;w;n;n;e;w;w;w;w;w;s;s;s;s;s;e;s;n;e;e;e;n;e;w;w;e;n;w;w;n;e;w;w;e;s;w;n;s;s;n;w',
	mojiao_ss = 'jh 27',
	xingxiuhai_ss = 'jh 28',
	maoshan_ss = 'jh 29',
	ss_ar = [xueting_ss, luoyang_ss, huashancun_ss, huashan_ss, yangzhou_ss, gaibang_ss, qiaoyinxian_ss, hengshan_ss, wudangshan_ss, wanyuezhuang_ss, shuiyange_ss, shaolinsi_ss, tangmen_ss, qingchengshan_ss, xiaoyaolin_ss, kaifeng_ss, mingjiao_ss, quanzhenjiao_ss, gumu_ss, baituoshan_ss, songshan_ss, hanmeizhuang_ss, taishan_ss, daqimen_ss, dazhaosi_ss, mojiao_ss, xingxiuhai_ss, maoshan_ss],
	mjmap = {
		"沙丘小洞": "丐帮",
		"小洞天": "泰山",
		"戈壁": "白驮山",
		"潭畔草地": "华山",
		"长空栈道": "华山",
		"青云坪": "少林寺",
		"九老洞": "峨眉山",
		"天梯": "泰山",
		"湖边": "逍遥林",
		"山溪畔": "嵩山",
		"碧水寒潭": "明教",
		"卢崖瀑布": "嵩山",
		"悬松根": "恒山",
		"玉壁瀑布": "逍遥林",
		"启母石": "嵩山",
		"奇槐坡": "寒梅庄",
		"草原": "大昭寺",
		"悬崖": "古墓",
		"云步桥": "泰山",
		"寒水潭": "古墓",
		"危崖前": "大旗门",
		"千尺幢": "华山",
		"猢狲愁": "华山",
		"玉女峰": "华山",
		"桃花泉": "华山村",
		"无名山峡谷": "茅山",
		"观景台": "泰山",
		"临渊石台": "华山",
		"无极老姆洞": "嵩山",
		"夕阳岭": "恒山",
		"山坳": "雪亭镇",
		"悬根松": "恒山"
	},
	getthings = {
		'匕首': 'jh 1;buy /obj/example/dagger from snow_waiter',
		'包子2': 'jh 1;buy /obj/example/dumpling from snow_waiter',
		'烤鸡腿': 'jh 1;buy /obj/example/chicken_leg from snow_waiter',
		'布衣': 'jh 1;e;n;n;kill snow_drunk',
		'牛皮酒袋': 'jh 1;buy /obj/example/wineskin from snow_waiter',
		'王铁匠_单刀': 'jh 1;e;n;n;w;buy /obj/weapon/blade from snow_smith',
		'王铁匠_长剑': 'jh 1;e;n;n;w;buy /obj/weapon/changjian from snow_smith',
		'王铁匠_皮鞭': 'jh 1;e;n;n;w;buy /obj/weapon/whip from snow_smith',
		'王铁匠_木棍': 'jh 1;e;n;n;w;buy /obj/weapon/stick from snow_smith',
		'王铁匠_匕首': 'jh 1;e;n;n;w;buy /obj/weapon/dagger from snow_smith',
		'王铁匠_飞镖': 'jh 1;e;n;n;w;buy /obj/weapon/dart from snow_smith',
		'草鞋': 'jh 1;e;s;w;kill snow_farmer',
		'钢剑': 'jh 3;s;e;n;kill taohua_fengmof',
		'蓑衣': 'jh 1;e;s;w;kill snow_farmer',
		'草帽': 'jh 1;e;s;w;kill snow_old_farmer',
		'布鞋': 'jh 1;e;s;w;s;kill snow_teacher',
		'旧书2': 'jh 1;e;n;n;kill snow_scavenger',
		'论语': 'jh 1;e;s;w;s;buy /obj/book/lunyu from snow_teacher',
		'三字经': 'jh 1;e;s;w;s;buy /obj/book/sanzijing from snow_teacher',
		'铁手镯': 'jh 1;e;n;n;n;n;e;kill snow_chefu',
		'铁戒': 'jh 1;e;n;n;n;n;w;kill snow_post_officer',
		'铁项链': 'jh 1;e;n;n;n;w;kill snow_herbalist',
		'铁斧': 'jh 1;e;n;n;n;w;kill snow_woodcutter',
		'人参': 'jh 1;e;n;n;n;w;buy /map/snow/npc/obj/ginseng from snow_herbalist',
		'灵芝': 'jh 1;e;n;n;n;w;buy /map/snow/npc/obj/agaric from snow_herbalist',
		'千年灵芝': 'jh 1;e;n;n;n;w;buy /map/snow/npc/obj/qiannianlingzhi from snow_herbalist',
		'雪莲': 'jh 1;e;n;n;n;w;buy /map/snow/npc/obj/ice_lotus from snow_herbalist',
		'金疮药': 'jh 1;e;n;n;n;w;buy /obj/food/medicine from snow_herbalist',
		'铁锤': 'jh 1;e;n;n;w;buy /obj/weapon/hammer from snow_smith',
		'长枪': 'jh 1;e;n;n;w;buy /obj/weapon/spear from snow_smith',
		'木杖': 'jh 1;e;n;n;w;buy /obj/weapon/staff from snow_smith',
		'丝绸马褂': 'jh 1;e;n;e;e;e;kill swordsman_master',
		'玄苏剑': 'jh 1;e;n;e;e;e;kill swordsman_master',
		'白缨冠': 'jh 1;e;n;e;e;e;kill swordsman_master',
		'狼皮雪靴': 'jh 1;e;n;e;e;e;kill swordsman_master',
		'细剑': 'jh 1;e;n;e;e;e;e;n;kill snow_girl',
		'粉红绸衫': 'jh 1;e;n;e;e;e;e;n;kill snow_girl',
		'绣花小鞋': 'jh 1;e;n;e;e;e;e;n;kill snow_girl',
		'猪骨头': 'jh 2;n;n;n;n;e;s;buy /map/luoyang/obj/zhugutou from luoyang_luoyang14',
		'猪上肉': 'jh 2;n;n;n;n;e;s;buy /map/luoyang/obj/zhushangrou from luoyang_luoyang14',
		'猪耳': 'jh 2;n;n;n;n;e;s;buy /map/luoyang/obj/zhuerduo from luoyang_luoyang14',
		'猪排骨': 'jh 2;n;n;n;n;e;s;buy /map/luoyang/obj/zhupaigu from luoyang_luoyang14',
		'木棍': 'jh 2;n;n;n;kill luoyang_luoyang24',
		'绣鞋': 'jh 2;n;n;n;n;w;s;kill luoyang_hongniang',
		'紫玫瑰': 'jh 2;n;n;n;n;n;n;n;buy /map/luoyang/obj/zimeigui from luoyang_luoyang3',
		'黑玫瑰': 'jh 2;n;n;n;n;n;n;n;buy /map/luoyang/obj/heimeigui from luoyang_luoyang3',
		'黄玫瑰': 'jh 2;n;n;n;n;n;n;n;buy /map/luoyang/obj/huangmeigui from luoyang_luoyang3',
		'蓝玫瑰': 'jh 2;n;n;n;n;n;n;n;buy /map/luoyang/obj/lanmeigui from luoyang_luoyang3',
		'红玫瑰': 'jh 2;n;n;n;n;n;n;n;buy /map/luoyang/obj/hongmeigui from luoyang_luoyang3',
		'皮帽': 'jh 2;n;n;e;kill luoyang_luoyang13',
		'丝绸衣': 'jh 2;n;n;n;n;n;e;e;n;n;w;kill luoyang_luoyang_fb7',
		'兽皮鞋': 'jh 2;n;n;n;n;n;w;w;n;w;get_silver;kill luoyang_zhangxiaolin',
		'守园老人_铁棍': 'jh 2;n;n;n;n;n;w;s;kill luoyang_luoyang7',
		'单刀': 'jh 2;n;n;n;n;n;n;n;n;w;kill?守城武将',
		'铁棍': 'jh 2;n;n;n;n;n;w;s;kill luoyang_luoyang7',
		'银戒': 'jh 2;n;n;n;n;n;w;w;n;n;n;e;kill luoyang_luoyang_fb5',
		'银手镯': 'jh 2;n;n;n;n;n;n;n;n;w;luoyang14_op1;kill luoyang_luoyang23',
		'鬼头刀': 'jh 2;n;n;n;e;s;kill luoyang_luoyang16',
		'黑狗血': 'jh 3;s;s;s;kill huashancun_heigou',
		'钢丝甲衣': 'jh 3;w;event_1_59520311;n;n;n;n;n;kill huashancun_huashancun_fb5',
		'银丝鞋': 'jh 3;s;s;s;s;w;get_silver;kill huashancun_huashancun5',
		'银丝帽': 'jh 3;s;e;kill huashancun_huashancun18',
		'金项链': 'jh 3;s;s;s;s;w;n;kill huashancun_huashancun4',
		'金手镯': 'jh 3;s;s;s;s;huashancun15_op1;kill huashancun_huashancun20',
		'拆招基础': 'jh 3;w;n;kill huashancun_huashancun13',
		'闪避基础': 'jh 3;w;event_1_59520311;n;kill huashancun_huashancun_fb2',
		'弯月刀': 'jh 3;s;s;s;s;s;nw;n;n;n;n;n;n;kill huashancun_huashancun_fb12',
		'精铁棒': 'jh 3;s;s;s;s;s;nw;n;n;n;w;kill huashancun_huashancun_fb9',
		'长虹剑': 'jh 3;s;s;s;s;s;e;kill huashancun_huashancun8',
		'白金项链': 'jh 4;n;n;n;e;kill huashan_huashan4',
		'金丝鞋': 'jh 4;n;n;n;n;n;n;n;event_1_91604710;s;s;kill huashan_huashan_fb5',
		'白色长衫': 'jh 4;n;n;n;n;n;n;n;event_1_91604710;s;s;s;kill huashan_chengbuyou',
		'绿色长裙': 'jh 4;n;n;n;n;n;n;n;n;w;s;kill huashan_yueling',
		'撕毁的紫霞秘笈': 'jh 4;n;n;n;n;n;n;n;n;w;w;kill huashan_dayou',
		'灰色长衫': 'jh 4;n;n;n;n;n;n;n;n;w;w;kill huashan_dayou',
		'青色长衫': 'jh 4;n;n;n;n;n;n;n;n;w;w;n;kill huashan_linghu',
		'紫色长衫': 'jh 4;n;n;n;n;n;n;n;n;n;n;n;n;n;get_silver;kill huashan_ning',
		'闪避进阶': 'jh 4;n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;kill huashan_huashan_fb1',
		'刀法进阶': 'jh 4;n;n;n;n;n;n;n;n;n;e;kill huashan_huashan_fb8',
		'拆招进阶': 'jh 4;n;n;n;n;n;n;n;n;n;e;n;n;kill huashan_huashan_fb10',
		'白金戒指': 'jh 4;n;n;n;n;n;n;n;n;n;e;n;n;n;n;kill huashan_huashan_fb12',
		'白金手镯': 'jh 4;n;n;n;n;n;n;n;n;n;e;n;n;n;n;e;kill huashan_huashan_fb13',
		'金丝帽': 'jh 4;n;n;n;n;n;n;n;n;n;n;n;n;e;s;kill huashan_huashan21',
		'庄子': 'jh 5;n;n;n;n;n;e;n;n;n;buy /obj/book/zhuangzi from yangzhou_yangzhou17',
		'老子': 'jh 5;n;n;n;n;n;e;n;n;n;buy /obj/book/laozi from yangzhou_yangzhou17',
		'尚书': 'jh 5;n;n;n;n;n;e;n;n;n;buy /obj/book/shangshu from yangzhou_yangzhou17',
		'银丝衣': 'jh 5;n;n;n;event_1_8220256;n;n;n;e;kill yangzhou_yangzhou_fb7',
		'冰魄银针': 'jh 5;n;n;n;n;n;w;kill gumu_limochou',
		'拂尘': 'jh 5;n;n;n;n;n;w;kill gumu_limochou',
		'青色道袍': 'jh 5;n;n;n;n;n;w;kill gumu_limochou',
		'疾风剑': 'jh 5;n;n;n;n;n;w;w;s;s;kill yangzhou_yangzhou14',
		'割鹿刀': 'jh 5;n;n;n;n;n;w;w;n;n;n;kill yangzhou_yangzhou_fb18',
		'追风棍': 'jh 5;n;n;n;n;n;n;e;n;n;n;n;kill yangzhou_yangzhou_fb9',
		'大环刀': 'jh 6;event_1_98623439;ne;n;ne;ne;kill gaibang_he-bj',
		'宝玉帽': 'jh 6;event_1_98623439;ne;n;ne;ne;ne;kill gaibang_ma-jw',
		'竹杖': 'jh 6;event_1_98623439;kill gaibang_liang',
		'制服': 'jh 7;kill choyin_cityguard',
		'包子': 'jh 7;s;s;s;buy /obj/example/dumpling from choyin_dumpling_seller',
		'大饼': 'jh 7;s;buy /map/choyin/npc/obj/cake from choyin_cake_vendor',
		'黑水伏蛟': 'jh 7;s;kill beggar_master',
		'「寒士列传」': 'jh 7;s;s;s;s;s;s;s;s;e;kill choyin_scholar',
		'红龟□': 'jh 7;s;s;s;s;s;s;s;sw;w;buy /map/choyin/npc/obj/red_guay from choyin_crone',
		'平安符': 'jh 7;s;s;s;s;s;s;s;sw;w;buy /map/choyin/npc/obj/amulet from choyin_crone',
		'新鲜狗血': 'jh 7;s;s;s;s;s;s;s;sw;w;buy /obj/magic/dog_blood from choyin_crone',
		'银簪': 'jh 7;s;s;s;s;s;s;s;sw;w;n;kill choyin_lady',
		'轻罗绸衫': 'jh 7;s;s;s;s;s;s;s;sw;w;n;kill choyin_lady',
		'铁甲': 'jh 8;w;nw;n;n;n;n;e;e;n;n;e;fight emei_shoushan|n;fight emei_wenyue|n;n;n;w;buy /map/emei/npc/obj/tiejia from emei_xiao-fan',
		'绣花小鞋2': 'jh 8;w;nw;n;n;n;n;e;e;n;n;e;fight emei_shoushan|n;fight emei_wenyue|n;n;n;w;buy /map/emei/npc/obj/flower_shoe from emei_xiao-fan',
		'豆腐': 'jh 8;w;nw;n;n;n;n;e;e;n;n;e;fight emei_shoushan|n;fight emei_wenyue|n;n;n;w;buy /map/emei/npc/obj/doufu from emei_xiao-fan',
		'金戒指': 'jh 8;w;nw;n;n;n;n;e;e;n;n;e;fight emei_shoushan|n;fight emei_wenyue|n;n;n;w;buy /map/emei/npc/obj/goldring from emei_xiao-fan',
		'葫芦': 'jh 8;w;nw;n;n;n;n;e;e;n;n;e;fight emei_shoushan|n;fight emei_wenyue|n;n;n;w;buy /map/emei/npc/obj/hulu from emei_xiao-fan',
		'包子3': 'jh 8;w;nw;n;n;n;n;e;e;n;n;e;fight emei_shoushan|n;fight emei_wenyue|n;n;n;w;buy /map/emei/npc/obj/baozi from emei_xiao-fan',
		'馒头': 'jh 8;w;nw;n;n;n;n;e;e;n;n;e;fight emei_shoushan|n;fight emei_wenyue|n;n;n;w;buy /map/emei/npc/obj/mantou from emei_xiao-fan',
		'皮背心': 'jh 8;w;nw;n;n;n;n;e;e;n;n;e;fight emei_shoushan|n;fight emei_wenyue|n;n;n;w;buy /map/emei/npc/obj/beixin from emei_xiao-fan',
		'鸡叫草': 'jh 9;n;n;n;w',
		'钻石项链': 'jh 9;n;n;e;kill henshan_henshan4',
		'钻石戒指': 'jh 9;n;n;n;n;n;n;n;n;n;w;n;n;n;n;kill henshan_henshan_fb8',
		'钻石手镯': 'jh 9;n;n;n;n;n;event_1_85624865;n;n;n;n;kill henshan_henshan_fb5',
		'灰色道袍': 'jh 10;w;n;n;w;w;w;n;n;n;n;kill wudang_daotong',
		'真武剑': 'jh 10;w;n;n;w;w;w;n;n;n;n;n;n;n;n;n;n;kill wudang_zhang',
		'香茶': 'jh 10;w;n;n;w;w;w;n;n;n;n;n;e;e;s',
		'水蜜桃': 'jh 10;w;n;n;w;w;w;n;n;n;n;n;e;e;s',
		'道德经「上卷」': 'jh 10;w;n;n;w;w;w;n;n;n;n;n;w;n',
		'道德经「第一章」': 'jh 10;w;n;n;w;w;w;n;n;n;n;n;w;n',
		'竹子': 'jh 11;e',
		'黄布袈裟': 'jh 13;n;kill shaolin_xu-ming',
		'灰布镶边袈裟': 'jh 13;n;w;kill shaolin_dao-pin',
		'戒刀': 'jh 13;n;w;kill shaolin_dao-pin',
		'护法袈裟': 'jh 13;n;n;n;kill shaolin_xuan-tong',
		'青布镶边袈裟': 'jh 13;n;n;kill shaolin_hui-ru',
		'青布僧衣': 'jh 13;n;n;n;n;n;n;kill shaolin_tuoboseng',
		'白布黑边袈裟': 'jh 13;n;n;n;n;n;n;n;kill shaolin_qing-xiao',
		'搏蛟拳套': 'jh 13;n;n;n;n;n;n;n;n;n;kill shaolin_xuan-ci',
		'宝玉鞋': 'jh 13;n;n;n;n;n;n;n;n;n;n;e;kill shaolin_cheng-guan',
		'金边黑布袈裟': 'jh 13;n;n;n;n;n;n;n;n;n;n;w;kill shaolin_cheng-xin',
		'断水剑': 'jh 13;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s;s;s;s;s;kill shaolin_cheng-shang',
		'齐眉棍': 'jh 13;n;n;n;n;n;n;n;n;n;n;n;kill shaolin_hui-xu',
		'禅杖': 'jh 13;n;n;n;n;n;n;n;n;n;n;n;n;kill shaolin_hui-xiu',
		'金刚罩': 'jh 13;n;n;n;n;n;n;n;n;n;n;n;n;w;n;get_silver;kill shaolin_dmlzh',
		'暗器手法': 'jh 14;w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e',
		'暗器手法(下册)': 'jh 14;w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e;n;w;n',
		'漫天花雨匕': 'jh 14;w;n;n;kill tangmen_tangfeng',
		'锦衣': 'jh 14;w;n;n;n;w;w;s;kill tangmen_tangbai',
		'银丝链甲衣': 'jh 14;w;n;n;n;w;w;w;n;kill tangmen_tangfang',
		'丝衣': 'jh 14;w;n;n;n;e;e;n;n;kill tangmen_tangmei',
		'毒蒺藜': 'jh 14;w;n;n;n;e;e;n;e;kill tangmen_tanghong',
		'周易': 'jh 15;s;s;s;s;e;buy /obj/book/zhouyi from qingcheng_teacher',
		'春秋': 'jh 15;s;s;s;s;e;buy /obj/book/chunqiu from qingcheng_teacher',
		'山猪肉': 'jh 15;s;s;e;buy /map/qingcheng/npc/obj/pork from qingcheng_tufu',
		'大补丸': 'jh 15;n;buy /map/qingcheng/npc/obj/spile from qingcheng_doctor',
		'伤药': 'jh 15;n;buy /map/qingcheng/npc/obj/medicine from qingcheng_doctor',
		'白茶花': 'jh 15;s;s;s;e;buy /map/qingcheng/npc/obj/wflower from qingcheng_flowboss',
		'蓝天鹅': 'jh 15;s;s;s;e;buy /map/qingcheng/npc/obj/blueflow from qingcheng_flowboss',
		'红玫瑰2': 'jh 15;s;s;s;e;buy /map/qingcheng/npc/obj/rflower from qingcheng_flowboss',
		'黄玫瑰2': 'jh 15;s;s;s;e;buy /map/qingcheng/npc/obj/yflower from qingcheng_flowboss',
		'紫罗兰': 'jh 15;s;s;s;e;buy /map/qingcheng/npc/obj/pflower from qingcheng_flowboss',
		'满天星': 'jh 15;s;s;s;e;buy /map/qingcheng/npc/obj/skyflow from qingcheng_flowboss',
		'勿忘我': 'jh 15;s;s;s;e;buy /map/qingcheng/npc/obj/wuwangwo from qingcheng_flowboss',
		'兵器贩子_牛皮盾': 'jh 15;s;s;s;s;w;buy /obj/weapon/shield from qingcheng_weaponor',
		'兵器贩子_皮鞭': 'jh 15;s;s;s;s;w;buy /obj/weapon/whip from qingcheng_weaponor',
		'兵器贩子_长剑': 'jh 15;s;s;s;s;w;buy /obj/weapon/longsword from qingcheng_weaponor',
		'兵器贩子_匕首': 'jh 15;s;s;s;s;w;buy /obj/weapon/dagger.c from qingcheng_weaponor',
		'兵器贩子_飞镖': 'jh 15;s;s;s;s;w;buy /obj/weapon/dart from qingcheng_weaponor',
		'黄色劲服': 'jh 15;s;s;s;w;w;s;s;kill qingcheng_biaoshi3',
		'白色劲服': 'jh 15;s;s;s;w;w;s;s;kill qingcheng_biaoshi2',
		'红色劲服': 'jh 15;s;s;s;w;w;s;s;kill qingcheng_biaoshi1',
		'水密桃': 'jh 15;n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;n;e',
		'茶壶': 'jh 15;n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;n;w',
		'小蒲团': 'jh 16;s;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376;n;n;w;w',
		'羽衣霓裳': 'jh 16;s;s;s;s;e;n;e;event_1_5221690;s;w',
		'步步生莲': 'jh 16;s;s;s;s;e;n;e;event_1_5221690;s;w',
		'踏云棍': 'jh 17;e;s;s;s;s;s;kill kaifeng_kaifeng_fb9',
		'绿色圣衣': 'jh 18;n;nw;n;n;n;n;n;kill mingjiao_xiaotong',
		'棕色长衫': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;kill mingjiao_wencangsong',
		'青色长衫2': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;kill mingjiao_weiyixiao',
		'白色圣衣': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;kill mingjiao_pengyingyu',
		'兰色长衫': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;kill mingjiao_tangyang',
		'白色圣衣2': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;n;kill mingjiao_zhoudian',
		'青锋宝刀': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;n;kill mingjiao_zhoudian',
		'金色长衫': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;n;n;kill mingjiao_zhuangzheng',
		'黄色长衫': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;w;w;n;n;kill mingjiao_yanyuan',
		'银色长衫': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;kill mingjiao_yingwang',
		'红色长衫': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;kill mingjiao_dizi',
		'紫色华服': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;w;kill mingjiao_longwang',
		'黑色长衫': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;e;kill mingjiao_shiwang',
		'圣火令': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n;kill mingjiao_zhang',
		'青色长衫3': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n;n;kill mingjiao_fanyao',
		'麻辣豆腐': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;w;nw',
		'珊瑚白菜': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;w;nw',
		'清水葫芦': 'jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;w;nw',
		'大剪刀': 'jh 19;s;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n;kill quanzhen_laozhe',
		'道德经': 'jh 19;s;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;e;s',
		'玉蜂蜜': 'jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;s',
		'玉蜂浆': 'jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;s',
		'蜂浆瓶': 'jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;s;s;e;e;e;e;s;e;s;e',
		'银钥匙': 'jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;event_1_3723773',
		'白色长袍': 'jh 21;nw;w;kill baituo_snaker',
		'柴': 'jh 21;nw;w;w;nw;nw;nw;kill baituo_qiaofu',
		'柴刀': 'jh 21;nw;w;w;nw;nw;nw;kill baituo_qiaofu',
		'草莓': 'jh 21;nw;w;w;nw;nw;nw;n;w;sw',
		'蛇杖': 'jh 21;nw;w;w;nw;n;n;n;w',
		'钢杖': 'jh 21;nw;w;w;nw;n;n;n;w',
		'青色丝袍': 'jh 21;nw;w;w;nw;n;n;n;n;n;w;s;kill baituo_xiaoqing',
		'兔肉': 'jh 21;nw;w;w;kill baituo_cungu',
		'蛋糕': 'jh 21;nw;w;w;nw;n;n;n;n;n;n;n;e',
		'豆浆': 'jh 21;nw;w;w;nw;n;n;n;n;n;n;n;e',
		'火折': 'jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s;s;s;nw;w;buy /map/xingxiu/npc/obj/fire from xingxiu_maimaiti',
		'马奶酒壶': 'jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s;s;s;nw;w;buy /map/xingxiu/npc/obj/hu from xingxiu_maimaiti',
		'馕': 'jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s;s;s;nw;w;buy /map/xingxiu/npc/obj/nang from xingxiu_maimaiti',
		'哈密瓜': 'jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s;s;s;nw;w;buy /map/xingxiu/npc/obj/hamigua from xingxiu_maimaiti',
		'冬不拉': 'jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s;s;s;nw;w;buy /map/xingxiu/npc/obj/dongbula from xingxiu_maimaiti',
		'羊肉串': 'jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s;s;w;n;n;n',
		'天山雪莲': 'jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s;s;w;w',
		'天寒帽': 'jh 22;n;n;w;n;n;n;n;event_1_88705407;s;s;s;s;kill songshan_songshan_fb2',
		'天寒项链': 'jh 22;n;n;w;w;s;s;s;s;s;kill songshan_songshan_fb6',
		'地牢钥匙': 'jh 23;n;n;n;n;n;n;n;n;n;n;w;n;kill meizhuang_meizhuang10',
		'天寒手镯': 'jh 23;n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n;n;n;kill meizhuang_meizhuang_fb23',
		'飞羽剑': 'jh 24;n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;n;n;n;n;kill taishan_taishan_fb50',
		'软甲衣': 'jh 24;n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;n;n;n;kill taishan_taishan_fb56',
		'斩空刀': 'jh 24;n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;n;n;n;kill taishan_taishan_fb56',
		'铜哨': 'jh 25;e;e;e;e;s',
		'羊皮酒袋': 'jh 26;w;w;w;w;w;w;s;e;buy /map/guanwai/obj/wineskin from guanwai_waiter',
		'烤羊腿': 'jh 26;w;w;w;w;w;w;s;e;buy /map/guanwai/obj/sheep_leg from guanwai_waiter',
		'玉戒指': 'jh 26;w;w;w;w;w;w;s;e;buy /map/guanwai/obj/jade3 from guanwai_waiter',
		'蛇药': 'jh 26;w;w;w;w;w;w;s;e;buy /map/guanwai/obj/snake_drug from guanwai_waiter',
		'布袋': 'jh 26;w;w;w;w;w;w;s;e;buy /obj/example/bag from guanwai_waiter',
		'破弯刀': 'jh 26;w;w;w;w;w;w;s;s;w;w;w;w',
		'垃圾': 'jh 26;w;w;w;w;w;w;s;s;w;w;w;w',
		'破剑': 'jh 26;w;w;w;w;w;w;s;s;w;w;w;w',
		'木禅杖': 'jh 26;w;w;w;w;w;w;s;s;w;w;w;w',
		'银子': 'jh 26;w;w;w;w;w;w;s;s;w;w;w;w',
		'舍利子': 'jh 26;w;w;w;w;w;w;s;s;w;w;w;w',
		'旧书': 'jh 26;w;w;w;w;w;w;n;n;w;kill guanwai_beggar',
		'日月神教腰牌': 'jh 27;ne;nw;w;nw;w;w;kill heimuya_shaogong',
		'玉箫': 'jh 30;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e',
		'怒火浪心剑': 'jh 30;n;n;n;n;n;n;kill taohua_huashao',
		'竹刀': 'jh 31;n;n;n;w;w;w;w;n;n;n;n;w',
		'白棋子': 'jh 31;n;n;n;w;w;w;w;n;n;n;n;w',
		'内功心法秘籍': 'jh 31;n;n;n;w;w;w;w;n;n;n;n;e',
		'茶壶2': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;w',
		'山茶花': 'jh 33;sw;sw;s;s;s;s;e;e',
		'纺纱机': 'jh 33;sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s;e;n;e;n',
		'大理雪梨': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;w',
		'落第秀才': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e',
		'八仙过海': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;se',
		'红妆素裹': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;se;ne',
		'抓破美人脸': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;se;ne',
		'倚栏娇': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;se;ne',
		'八宝妆': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;ne',
		'眼儿媚': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;ne',
		'满月': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;ne',
		'七仙女': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;ne;n',
		'二乔': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;ne;n;n;n',
		'十三太保': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;ne;n;n;e',
		'风尘三侠': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;ne;n;n;e',
		'十八学士': 'jh 33;sw;sw;s;s;s;s;s;e;n;se;e;e;e;e;ne;n;n;e',
	},
	xuetingzhen_m = {
		'饮风客栈': '',
		'城隍庙内室': 'find_task_road snow_smith',
		'店小二': '',
		'逄义': '',
		'广场': 'e',
		'苦力': 'e',
		'饮风客栈二楼': 'inn_op1',
		'雪亭镇街口': 'e;s',
		'黎老八': 'e;s',
		'安记钱庄': 'e;n;w',
		'安惜迩': 'e;n;w',
		'打铁铺子': 'e;n;n;w',
		'王铁匠': 'e;n;n;w',
		'桑邻药铺': 'e;n;n;n;w',
		'杨掌柜': 'e;n;n;n;w',
		'樵夫': 'e;n;n;n;w',
		'丰登当铺': 'e;n;n;n;e',
		'储藏室': 'e;n;n;n;e;e',
		'雪亭驿': 'e;n;n;n;n;w',
		'杜宽': 'e;n;n;n;n;w',
		'山坳': 'e;n;n;n;n;n',
		'木屋': 'e;n;n;n;n;e',
		'花不为': 'e;n;n;n;n;e',
		'青石官道': 'e;s;w;w',
		'疯狗': 'e;s;w;w',
		'书院': 'e;s;w;s',
		'魏无极': 'e;s;w;s',
		'雪亭镇街道': '+雪亭镇-雪亭镇街道',
		'农夫': 'e;s;w',
		'老农夫': 'e;s;w',
		'雪亭镇街道2': 'e;n;n',
		'收破烂的': 'e;n;n',
		'醉汉': 'e;n;n',
		'城隍庙': 'e;e',
		'庙祝': 'e;e',
		'黄土小径': 'e;s;e;ne;+黄土小径',
		'黄土小径2': 'e;s;e;ne;ne;+黄土小径',
		'山路': 'e;s;e;ne;ne;ne',
		'野狗': 'e;s;e;ne',
		'淳风武馆大门': 'e;n;e',
		'刘安禄': 'e;n;e',
		'淳风武馆教练场': 'e;n;e;e',
		'武馆弟子': 'e;n;e;e',
		'李火狮': 'e;n;e;e',
		'兵器储藏室': 'e;n;e;e;n',
		'竹剑': 'e;n;e;e;n',
		'淳风武馆大厅': 'e;n;e;e;e',
		'柳淳风': 'e;n;e;e;e',
		'书房': 'e;n;e;e;e;e;n',
		'柳绘心': 'e;n;e;e;e;e;n',
		'天井': 'e;n;e;e;e;e',
		'武馆内院': 'e;n;e;e;e;e;e',
	},
	luoyang_m = {
		'南门': 'n;n',
		'守城士兵': 'n;n',
		'南郊小路': 'n',
		'农夫': 'n',
		'南市': 'n;n;e',
		'客商': 'n;n;e',
		'洛水渡口': 'n;n;e;s',
		'船坞': 'n;n;e;s;luoyang317_op1',
		'蓑衣男子': 'n;n;e;s;luoyang317_op1',
		'南大街': 'n;n;n',
		'乞丐': 'n;n;n',
		'金刀门': 'n;n;n;e',
		'金刀门弟子': 'n;n;n;e',
		'练武场': 'n;n;n;e;s',
		'王霸天': 'n;n;n;e;s',
		'中心鼓楼': 'n;n;n;n;n',
		'中州街': 'n;n;n;n;n;n',
		'当铺': 'n;n;n;n;n;n;w',
		'青石街': 'n;n;n;n;n;n;e',
		'陈扒皮': 'n;n;n;n;n;n;w',
		'鲁长老': 'n;n;n;n;n;n;e',
		'酒肆2': 'n;n;n;n;n;n;e;n',
		'赌坊大门': 'n;n;n;n;n;w;w',
		'黑衣打手': 'n;n;n;n;n;w;w',
		'赌坊大厅': 'n;n;n;n;n;w;w;n',
		'赌坊后门': 'n;n;n;n;n;w;w;n;w',
		'暗道': 'n;n;n;n;n;w;w;n;w;get_silver',
		'张逍林': 'n;n;n;n;n;w;w;n;w;get_silver',
		'小偷': 'n;n;n;n;n;w;w;n',
		'金谷街': 'n;n;n;n;n;e',
		'富家公子': 'n;n;n;n;n;e;n',
		'富人庄院': 'n;n;n;n;n;e;n',
		'储藏室': 'n;n;n;n;n;e;n;op1',
		'洪帮主': 'n;n;n;n;n;e;n;op1',
		'观景台': 'n;n;n;n;n;e;e;n;n;w',
		'护卫': 'n;n;n;n;n;e;e;n;n;w',
		'林间石阶': 'n;n;n;n;n;e;e;n;n;n',
		'山贼': 'n;n;n;n;n;e;e;n;n;n',
		'听伊亭': 'n;n;n;n;n;e;e;n;n;n;w',
		'白面书生': 'n;n;n;n;n;e;e;n;n;n;w',
		'登山小径': 'n;n;n;n;n;e;e;n;n;n;n',
		'守墓人': 'n;n;n;n;n;e;e;n;n;n;n',
		'松风亭': 'n;n;n;n;n;e;e;n;n;n;n;e',
		'白公墓': 'n;n;n;n;n;e;e;n;n;n;n;n',
		'盗墓贼': 'n;n;n;n;n;e;e;n;n;n;n;n',
		'冬青': 'n;n;n;n;n;e;e;n;n;n;n;n',
		'水榭': 'n;n;n;n;n;e;e;n',
		'游客': 'n;n;n;n;n;e;e;n',
		'草屋': 'n;n;n;n;n;e;e;n;n;e;n',
		'绿袍老者': 'n;n;n;n;n;e;e;n;n;e;n',
		'墓道': 'n;n;n;n;n;e;e;n;n;n;n;n;get_silver',
		'黑衣女子': 'n;n;n;n;n;e;e;n;n;n;n;n;get_silver',
		'北大街': 'n;n;n;n;n;n;n',
		'卖花姑娘': 'n;n;n;n;n;n;n',
		'钱庄': 'n;n;n;n;n;n;n;e',
		'刘守财': 'n;n;n;n;n;n;n;e',
		'北门': 'n;n;n;n;n;n;n;n',
		'守城武将': 'n;n;n;n;n;n;n;n',
		'北郊小路': 'n;n;n;n;n;n;n;n;n',
		'疯狗': 'n;n;n;n;n;n;n;n;n',
		'城楼': 'n;n;n;n;n;n;n;n;w',
		'城楼密室': 'n;n;n;n;n;n;n;n;w;luoyang14_op1',
		'李元帅': 'n;n;n;n;n;n;n;n;w;luoyang14_op1',
		'城墙': 'n;n;n;n;n;n;n;n;e',
		'绿竹林': 'n;n;n;n;n;n;n;n;n;e',
		'青竹蛇': 'n;n;n;n;n;n;n;n;n;e',
		'绿竹雅舍': 'n;n;n;n;n;n;n;n;n;e;n',
		'布衣老翁': 'n;n;n;n;n;n;n;n;n;e;n',
		'清响斋': 'n;n;n;n;n;n;n;n;n;e;n;n',
		'萧问天': 'n;n;n;n;n;n;n;n;n;e;n;n',
		'洛川街': 'n;n;n;n',
		'地痞': 'n;n;n;n',
		'集市': 'n;n;n;n;e',
		'小贩': 'n;n;n;n;e',
		'猪肉摊': 'n;n;n;n;e;s',
		'郑屠夫': 'n;n;n;n;e;s',
		'铜驼巷': 'n;n;n;n;w',
		'背阴巷口': 'n;n;n;n;w;event_1_98995501',
		'石街': 'n;n;n;n;w;event_1_98995501;n',
		'无赖': 'n;n;n;n;w;event_1_98995501;n',
		'破烂小院': 'n;n;n;n;w;event_1_98995501;n;w',
		'酒肆': 'n;n;n;n;w;event_1_98995501;n;n;e',
		'甄大海': 'n;n;n;n;w;event_1_98995501;n;n;e',
		'桃花别院': 'n;n;n;n;w;s',
		'红娘': 'n;n;n;n;w;s',
		'绣楼': 'n;n;n;n;w;s;w',
		'柳小花': 'n;n;n;n;w;s;w',
		'洛神庙': 'n;n;n;w',
		'庙祝': 'n;n;n;w',
		'地道': 'n;n;n;w;putuan',
		'问鼎街': 'n;n;n;n;n;w',
		'客栈大门': 'n;n;n;n;n;w;n',
		'大院': 'n;n;n;n;n;w;n;n',
		'马厩': 'n;n;n;n;n;w;n;n;w',
		'马倌': 'n;n;n;n;n;w;n;n;w',
		'牡丹园': 'n;n;n;n;n;w;s',
		'守园老人': 'n;n;n;n;n;w;s',
		'牡丹亭': 'n;n;n;n;n;w;s;luoyang111_op1',
		'赛牡丹': 'n;n;n;n;n;w;s;luoyang111_op1',
		'雅舍': 'n;n;n;n;n;w;w;n;n;n;e',
		'玉娘': 'n;n;n;n;n;w;w;n;n;n;e',
		'瓮城': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'胡商': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'明德门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'安化门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w',
		'紫衣追影': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w',
		'七星角楼': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w',
		'城楼禁卫': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w',
		'禁卫统领': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w',
		'天狼阁': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;e;e',
		'江湖大盗': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;e;e',
		'城门卫兵': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'承天门大街': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'巡城武官': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'六扇门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e',
		'捕快': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e',
		'云远寺大门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'刀僧卫': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'魔武剑阵': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s',
		'魔武剑僧': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s',
		'魔武刀阵': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s',
		'魔武刀僧': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s',
		'魔武拳阵': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s',
		'魔武拳僧': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s',
		'梵武堂': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s',
		'护法血僧': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s',
		'招魂台': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s;w',
		'招魂师': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s;w',
		'诛心楼': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s;s',
		'镇魂使': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s;s',
		'落魄池': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s;e',
		'护国公府大门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'护国军卫': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'观海庄大门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e',
		'白衣剑客': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e',
		'门厅': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;n',
		'聚贤厅': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;n;n',
		'雪初晴': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;n;n',
		'云观海': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;n;n',
		'荷花池': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;n;n;n;w',
		'老仆': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;n;n;n;w',
		'承天门广场': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'独孤须臾': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'门阀侍卫': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'游记货栈': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;w',
		'游四海': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;w',
		'糖人张': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;w',
		'老高铁铺': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;e',
		'高铁匠': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;e',
		'哥舒翰': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;e',
		'红云布庄': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;w',
		'玉门客栈': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;e',
		'若羌巨商': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;e',
		'樊天纵': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;e',
		'风花酒馆': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;w',
		'方秀珣': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;w',
		'卫青': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;w',
		'老孙肉铺': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;e',
		'孙三娘': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;e',
		'山海古玩店': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;w',
		'仇老板': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;w',
		'富贵银庄': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;e',
		'苗一郎': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;e',
		'天和当铺': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;n;w',
		'朱掌柜': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;n;w',
		'珍玉斋': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;n;e',
		'董老板': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;n;e',
		'锦官绣院': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;n;n;w',
		'龟兹舞女': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;n;n;w',
		'卓小妹': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;n;n;w',
		'羽霓坊': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;n;n;e',
		'上官小婉': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;n;n;n;e',
		'承天门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'皇宫主道': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'大内侍卫': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'岳阳伯': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'钟楼大街': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w',
		'大宛使者': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w',
		'马夫': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w',
		'天策大道': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n',
		'白衣少侠': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n',
		'天策府大门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n',
		'玄甲卫士': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n',
		'照壁': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n',
		'天策府一进': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n',
		'府记室': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;w',
		'房玄龄': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;w',
		'主簿室': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;e',
		'杜如晦': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;e',
		'议事厅': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;n;n',
		'秦王': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;n;n',
		'参谋室': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;n;n;w',
		'程知节': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;n;n;w',
		'军机室': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;n;n;e',
		'翼国公': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;n;n;e',
		'尉迟敬德': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;n;n;n;n;n;n;n;e',
		'金光门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w',
		'血手天魔': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w',
		'开远门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w;n;n',
		'先锋大将': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w;n;n',
		'狼居胥楼': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w;n;n;n;n;n;n;n',
		'霍骠姚': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w;n;n;n;n;n;n;n',
		'芳林门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;e;e',
		'凌烟阁': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;e;e;n;n;n;n;n;n;n',
		'李贺': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;e;e;n;n;n;n;n;n;n',
		'凌烟阁顶': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;e;e;n;n;n;n;n;n;n;event_1_95312623',
		'云梦璃': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e;e;e;e;n;n;n;n;n;n;n;event_1_95312623',
	},
	huashancun_m = {
		'神女冢': 'n;e',
		'野兔': 'n;e',
		'松林小径': 'n',
		'松鼠': 'n',
		'杏林': 'w',
		'小男孩': 'w',
		'土地庙门口': 'w;event_1_59520311',
		'村中地痞': 'w;event_1_59520311',
		'庙堂': 'w;event_1_59520311;n',
		'抠脚大汉': 'w;event_1_59520311;n',
		'地道入口': 'w;event_1_59520311;n;n',
		'黑狗': 'w;event_1_59520311;n;n;+黑狗',
		'楼梯': 'w;event_1_59520311;n;n;n',
		'青衣守卫': 'w;event_1_59520311;n;n;n',
		'通道': 'w;event_1_59520311;n;n;n;n',
		'大厅': 'w;event_1_59520311;n;n;n;n;n',
		'葛不光': 'w;event_1_59520311;n;n;n;n;n',
		'茶棚': 'w;n',
		'王老二': 'w;n',
		'青石街': 's',
		'华山村村口': '',
		'泼皮': '',
		'泼皮头子': 's',
		'碎石路': 's;e',
		'采花贼': 's;e',
		'打铁铺': 's;e;n',
		'冯铁匠': 's;e;n',
		'银杏广场': 's;s',
		'村民': 's;s',
		'杂货铺': 's;s;e',
		'方老板': 's;s;e',
		'后院': 's;s;e;s',
		'跛脚汉子': 's;s;e;s',
		'车厢': 's;s;e;s;huashancun24_op2',
		'云含笑': 's;s;e;s;huashancun24_op2',
		'祠堂大门': 's;s;w',
		'朱老伯': 's;s;w',
		'厅堂': 's;s;w;n',
		'方寡妇': 's;s;w;n',
		'石板桥': 's;s;s',
		'黑狗': 's;s;s;+黑狗',
		'英白罗': 's;s;s',
		'田间小路': 's;s;s;s',
		'竹篱小院': 's;s;s;s;w',
		'厢房': 's;s;s;s;w;get_silver',
		'受伤的曲右使': 's;s;s;s;w;get_silver',
		'小厅': 's;s;s;s;w;n',
		'曲姑娘': 's;s;s;s;w;n',
		'刘三': 's;s;s;s',
		'油菜花地': 's;s;s;s;huashancun15_op1',
		'血尸': 's;s;s;s;huashancun15_op1',
		'杂草小路': 's;s;s;s;s',
		'小茅屋': 's;s;s;s;s;e',
		'丐帮长老': 's;s;s;s;s;e',
		'毒蛇': 's;s;s;s;s',
		'山脚': 's;s;s;s;s;nw',
		'小狼': 's;s;s;s;s;nw',
		'蜿蜒山径': 's;s;s;s;s;nw;n',
		'老狼': 's;s;s;s;s;nw;n',
		'清风寨大门': 's;s;s;s;s;nw;n;n',
		'桃花泉': 's;s;s;s;s;nw;n;n;e',
		'花房': 's;s;s;s;s;nw;n;n;e;get_silver',
		'玉牡丹': 's;s;s;s;s;nw;n;n;e;get_silver',
		'土匪': 's;s;s;s;s;nw;n;n',
		'练武场': 's;s;s;s;s;nw;n;n;n;w',
		'土匪头目': 's;s;s;s;s;nw;n;n;n;w',
		'议事厅': 's;s;s;s;s;nw;n;n;n;n',
		'刘龟仙': 's;s;s;s;s;nw;n;n;n;n',
		'后院2': 's;s;s;s;s;nw;n;n;n;n;n',
		'萧独眼': 's;s;s;s;s;nw;n;n;n;n;n',
		'卧房': 's;s;s;s;s;nw;n;n;n;n;n;n',
		'刘寨主': 's;s;s;s;s;nw;n;n;n;n;n;n',
	},
	huashan_m = {
		'华山山脚': '',
		'孙驼子': '',
		'莎萝坪': 'n',
		'吕子弦': 'n',
		'云门': 'n;n',
		'女弟子': 'n;n',
		'青柯坪': 'n;n;n',
		'游客': 'n;n;n',
		'回心石': 'n;n;n;e',
		'公平子': 'n;n;n;e',
		'观瀑台': 'n;n;w',
		'豪客': 'n;n;w',
		'千尺幢': 'n;n;n;n',
		'蜿蜒山路': 'n;n;n;n;n;n',
		'白二': 'n;n;n;n;n;n',
		'山贼': 'n;n;n;n;n',
		'百尺峡': 'n;n;n;n;n',
		'上天梯': 'n;n;n;n;n;n;n',
		'群仙观': 'n;n;n;n;n;n;e',
		'老君沟': 'n;n;n;n;n;n;e;n',
		'猿猴': 'n;n;n;n;n;n;n',
		'李铁嘴': 'n;n;n;n;n;n;e',
		'赵辅德': 'n;n;n;n;n;n;e;n',
		'猢狲愁': 'n;n;n;n;n;n;e;n;n',
		'松林石径': 'n;n;n;n;n;n;n;n',
		'玉女峰': 'n;n;n;n;n;n;n;n;w',
		'玉女祠': 'n;n;n;n;n;n;n;n;w;s',
		'岳师妹': 'n;n;n;n;n;n;n;n;w;s',
		'思过崖': 'n;n;n;n;n;n;n;n;w;w',
		'朝阳峰山道': 'n;n;n;n;n;n;n;n;n',
		'大松鼠': 'n;n;n;n;n;n;n;n',
		'蛇胆草': 'n;n;n;n;n;n;n;n;w',
		'六猴儿': 'n;n;n;n;n;n;n;n;w;w',
		'山洞': 'n;n;n;n;n;n;n;n;w;w;n',
		'令狐大师哥': 'n;n;n;n;n;n;n;n;w;w;n',
		'英黑罗': 'n;n;n;n;n;n;n;n;n',
		'长空栈道': 'n;n;n;n;n;n;n;n;n;e',
		'临渊石台': 'n;n;n;n;n;n;n;n;n;e;n',
		'草丛小路': 'n;n;n;n;n;n;n;n;n;e;n;n',
		'竹林': 'n;n;n;n;n;n;n;n;n;e;n;n;n',
		'空地': 'n;n;n;n;n;n;n;n;n;e;n;n;n;n',
		'小木屋': 'n;n;n;n;n;n;n;n;n;e;n;n;n;n;e',
		'魔教喽喽': 'n;n;n;n;n;n;n;n;n;e',
		'卢大哥': 'n;n;n;n;n;n;n;n;n;e;n',
		'史老三': 'n;n;n;n;n;n;n;n;n;e;n;n',
		'闵老二': 'n;n;n;n;n;n;n;n;n;e;n;n;n',
		'戚老四': 'n;n;n;n;n;n;n;n;n;e;n;n;n;n',
		'葛长老': 'n;n;n;n;n;n;n;n;n;e;n;n;n;n;e',
		'崎岖山路': 'n;n;n;n;n;n;n;event_1_91604710',
		'剑宗弟子': 'n;n;n;n;n;n;n;event_1_91604710',
		'峡谷入口': 'n;n;n;n;n;n;n;event_1_91604710;s',
		'狭长通道': 'n;n;n;n;n;n;n;event_1_91604710;s;s',
		'潭畔草地': 'n;n;n;n;n;n;n;event_1_91604710;s;s;s',
		'丛云弃': 'n;n;n;n;n;n;n;event_1_91604710;s;s',
		'尘无剑': 'n;n;n;n;n;n;n;event_1_91604710;s;s;s',
		'遒劲古松': 'n;n;n;n;n;n;n;event_1_91604710;s;s;s;w',
		'树叉': 'n;n;n;n;n;n;n;event_1_91604710;s;s;s;w;get_silver',
		'石壁小路': 'n;n;n;n;n;n;n;event_1_91604710;s;s;s;s',
		'悬崖石洞': 'n;n;n;n;n;n;n;event_1_91604710;s;s;s;s;e',
		'封剑羽': 'n;n;n;n;n;n;n;event_1_91604710;s;s;s;s;e',
		'前院': 'n;n;n;n;n;n;n;n;n;n',
		'正气堂': 'n;n;n;n;n;n;n;n;n;n;n',
		'岳掌门': 'n;n;n;n;n;n;n;n;n;n;n',
		'高算盘': 'n;n;n;n;n;n;n;n;n;n',
		'练武场': 'n;n;n;n;n;n;n;n;n;n;w',
		'施剑客': 'n;n;n;n;n;n;n;n;n;n;w',
		'后院': 'n;n;n;n;n;n;n;n;n;n;n;n',
		'厨房': 'n;n;n;n;n;n;n;n;n;n;n;n;w',
		'舒奇': 'n;n;n;n;n;n;n;n;n;n;n;n',
		'小猴': 'n;n;n;n;n;n;n;n;n;n;n;n;w',
		'劳师兄': 'n;n;n;n;n;n;n;n;n;n;n;n;n',
		'凛然轩': 'n;n;n;n;n;n;n;n;n;n;n;n;n',
		'寝室': 'n;n;n;n;n;n;n;n;n;n;n;n;n;get_silver',
		'宁女侠': 'n;n;n;n;n;n;n;n;n;n;n;n;n;get_silver',
		'花园': 'n;n;n;n;n;n;n;n;n;n;n;n;e',
		'小桥': 'n;n;n;n;n;n;n;n;n;n;n;n;e;n',
		'长廊': 'n;n;n;n;n;n;n;n;n;n;n;n;e;s',
		'梁师兄': 'n;n;n;n;n;n;n;n;n;n;n;n;e',
		'林师弟': 'n;n;n;n;n;n;n;n;n;n;n;n;e;s',
		'卧房': 'n;n;n;n;n;n;n;n;n;n;n;n;e;s;s',
		'小尼姑': 'n;n;n;n;n;n;n;n;n;n;n;n;e;s;s',
		'书房': 'n;n;n;n;n;n;n;n;n;n;n;n;e;n;n',
		'陶钧': 'n;n;n;n;n;n;n;n;n;n;n;n;e;n;n',
		'库房入口': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247',
		'华山弟子': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247',
		'库房通道1': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;s',
		'库房通道2': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;s;s',
		'库房': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;s;s;s',
		'地道入口': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;s;s;s;s',
		'秘道1': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;s;w',
		'秘道2': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;s;s;e',
		'蒙面剑客': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;s;s;s;s',
		'密室': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;s;s;s;s;s;e',
		'黑衣人': 'n;n;n;n;n;n;n;n;n;n;w;event_1_30014247;s;s;s;s;s;e',
	},
	yangzhou_m = {
		'安定门': '',
		'官兵': '',
		'南门大街': 'n',
		'小东门桥': 'n;e',
		'太平桥': 'n;w',
		'草河南街': 'n;w;w',
		'花店': 'n;w;w;n',
		'花店伙计': 'n;w;w;n',
		'十里长街3': 'n;n',
		'大黑马': 'n;n',
		'铁匠铺': 'n;n;w',
		'小宝斋': 'n;n;e',
		'铁匠': 'n;n;w',
		'双儿': 'n;n;e',
		'十里长街2': 'n;n;n',
		'黑狗子': 'n;n;n',
		'武馆大门': 'n;n;n;event_1_8220256',
		'武馆护卫': 'n;n;n;event_1_8220256',
		'武馆大院': 'n;n;n;event_1_8220256;n',
		'武馆弟子': 'n;n;n;event_1_8220256;n',
		'武馆大厅': 'n;n;n;event_1_8220256;n;n',
		'方不为': 'n;n;n;event_1_8220256;n;n',
		'练武场': 'n;n;n;event_1_8220256;n;w',
		'王教头': 'n;n;n;event_1_8220256;n;w',
		'松林石径': 'n;n;n;event_1_8220256;n;e',
		'竹林石径': 'n;n;n;event_1_8220256;n;w',
		'习武堂': 'n;n;n;event_1_8220256;n;w;n',
		'长廊': 'n;n;n;event_1_8220256;n;n;n',
		'范先生': 'n;n;n;event_1_8220256;n;n;n',
		'卧室': 'n;n;n;event_1_8220256;n;n;n;n',
		'陈有德': 'n;n;n;event_1_8220256;n;n;n;n',
		'书房': 'n;n;n;event_1_8220256;n;n;n;e',
		'古三通': 'n;n;n;event_1_8220256;n;n;n;e',
		'黄记杂货': 'n;n;n;w',
		'黄掌柜': 'n;n;n;w',
		'十里长街1': 'n;n;n;n',
		'彦明钱庄': 'n;n;n;n;w',
		'游客': 'n;n;n;n',
		'账房先生': 'n;n;n;n;w',
		'小飞贼': 'n;n;n;n;w',
		'飞贼': 'n;n;n;n;w;yangzhou16_op1',
		'银库': 'n;n;n;n;w;yangzhou16_op1',
		'中央广场': 'n;n;n;n;n',
		'艺人': 'n;n;n;n;n',
		'空空儿': 'n;n;n;n;n',
		'十里长街4': 'n;n;n;n;n;n',
		'马夫人': 'n;n;n;n;n;n',
		'润玉': 'n;n;n;n;n;n',
		'流氓': 'n;n;n;n;n;n',
		'武庙': 'n;n;n;n;n;n;w',
		'十里长街5': 'n;n;n;n;n;n;n',
		'刘步飞': 'n;n;n;n;n;n;w',
		'马员外': 'n;n;n;n;n;n;n',
		'十里长街6': 'n;n;n;n;n;n;n;n',
		'毒蛇': 'n;n;n;n;n;n;n;n',
		'北门大街': 'n;n;n;n;n;n;n;n;n',
		'东关街': 'n;n;n;n;n;n;n;n;n;e',
		'门庭': 'n;n;n;n;n;n;n;n;n;e;s',
		'穿廊': 'n;n;n;n;n;n;n;n;n;e;s;e',
		'梅船轩': 'n;n;n;n;n;n;n;n;n;e;s;e;s',
		'湖石山子': 'n;n;n;n;n;n;n;n;n;e;s;e;s;s',
		'疏峰馆': 'n;n;n;n;n;n;n;n;n;e;s;e;s;s;s',
		'琼花街': 'n;n;n;n;n;n;n;n;n;w',
		'月明桥': 'n;n;n;n;n;n;n;n;n;w;w',
		'禅智寺山门': 'n;n;n;n;n;n;n;n;n;w;w;n',
		'竹西亭': 'n;n;n;n;n;n;n;n;n;w;w;n;w',
		'昆丘台': 'n;n;n;n;n;n;n;n;n;w;w;n;e',
		'扫地僧': 'n;n;n;n;n;n;n;n;n;w;w;n',
		'柳碧荷': 'n;n;n;n;n;n;n;n;n;w;w;n;w',
		'张三': 'n;n;n;n;n;n;n;n;n;w;w;n;e',
		'青石阶梯': 'n;n;n;n;n;n;n;n;n;w;w;n;n',
		'月台': 'n;n;n;n;n;n;n;n;n;w;w;n;n;n',
		'芍药圃': 'n;n;n;n;n;n;n;n;n;w;w;n;n;n;w',
		'蜀井': 'n;n;n;n;n;n;n;n;n;w;w;n;n;n;w;n',
		'芍药坛': 'n;n;n;n;n;n;n;n;n;w;w;n;n;n;w;w',
		'大殿': 'n;n;n;n;n;n;n;n;n;w;w;n;n;n;n',
		'吕祖照面池': 'n;n;n;n;n;n;n;n;n;w;w;n;n;n;e',
		'火工僧': 'n;n;n;n;n;n;n;n;n;w;w;n;n;n;e',
		'三绝碑': 'n;n;n;n;n;n;n;n;n;w;w;n;n;n;e;s',
		'镇淮门': 'n;n;n;n;n;n;n;n;n;n',
		'虹桥': 'n;n;n;n;n;n;n;n;w',
		'草河北街': 'n;n;n;n;n;n;n;n;w;w',
		'魁星阁': 'n;n;n;n;n;n;n;n;w;w;n',
		'阁楼': 'n;n;n;n;n;n;n;n;w;w;n;get_silver',
		'顽童': 'n;n;n;n;n;n;n;n;w;w',
		'书生': 'n;n;n;n;n;n;n;n;w;w;n',
		'李丽君': 'n;n;n;n;n;n;n;n;w;w;n;get_silver',
		'广陵当铺': 'n;n;n;n;n;n;n;w',
		'小混混': 'n;n;n;n;n;n;n;n;n;e',
		'北城门士兵': 'n;n;n;n;n;n;n;n;n;n',
		'恶丐': 'n;n;n;n;n;n;n;n;w',
		'唐老板': 'n;n;n;n;n;n;n;w',
		'富春茶社': 'n;n;n;n;n;n;n;e',
		'云九天': 'n;n;n;n;n;n;n;e',
		'雅社': 'n;n;n;n;n;n;n;e;get_silver',
		'柳文君': 'n;n;n;n;n;n;n;e;get_silver',
		'茶社伙计': 'n;n;n;n;n;n;n;e',
		'醉仙楼大厅': 'n;n;n;n;n;n;e',
		'醉仙楼伙计': 'n;n;n;n;n;n;e',
		'楼梯': 'n;n;n;n;n;n;e;n',
		'丰不为': 'n;n;n;n;n;n;e;n',
		'张总管': 'n;n;n;n;n;n;e;n;n',
		'二楼大厅': 'n;n;n;n;n;n;e;n;n',
		'芙蓉宴厅': 'n;n;n;n;n;n;e;n;n;w',
		'计无施': 'n;n;n;n;n;n;e;n;n;w',
		'夹层': 'n;n;n;n;n;n;e;n;n;w;get_silver',
		'芍药宴厅': 'n;n;n;n;n;n;e;n;n;e',
		'胡神医': 'n;n;n;n;n;n;e;n;n;e',
		'牡丹宴厅': 'n;n;n;n;n;n;e;n;n;n',
		'胖商人': 'n;n;n;n;n;n;e;n;n;n',
		'观景台': 'n;n;n;n;n;n;e;n;n;n;n',
		'冼老板': 'n;n;n;n;n;n;e;n;n;n;n',
		'通泗桥': 'n;n;n;n;n;w',
		'赤练仙子': 'n;n;n;n;n;w',
		'通泗街': 'n;n;n;n;n;w;w',
		'芍药巷': 'n;n;n;n;n;w;w;s',
		'玉器店': 'n;n;n;n;n;w;w;s;s',
		'白老板': 'n;n;n;n;n;w;w;s;s',
		'衙门大门': 'n;n;n;n;n;w;w;n',
		'衙役': 'n;n;n;n;n;w;w;n',
		'衙门大院': 'n;n;n;n;n;w;w;n;n',
		'签押房': 'n;n;n;n;n;w;w;n;n;e',
		'天井': 'n;n;n;n;n;w;w;n;n;w',
		'公孙岚': 'n;n;n;n;n;w;w;n;n;w',
		'湖石山洞': 'n;n;n;n;n;w;w;n;n;w;n',
		'露桥': 'n;n;n;n;n;w;w;n;n;w;n;n',
		'琴室': 'n;n;n;n;n;w;w;n;n;w;n;n;n',
		'正堂': 'n;n;n;n;n;w;w;n;n;n',
		'内室': 'n;n;n;n;n;w;w;n;n;n;get_silver',
		'程大人': 'n;n;n;n;n;w;w;n;n;n',
		'楚雄霸': 'n;n;n;n;n;w;w;n;n;n;get_silver',
		'甘泉街': 'n;n;n;n;n;e',
		'书院回廊': 'n;n;n;n;n;e;n',
		'庭院': 'n;n;n;n;n;e;n;n',
		'至止堂': 'n;n;n;n;n;e;n;n;n',
		'朱先生': 'n;n;n;n;n;e;n;n;n',
		'西面回廊1': 'n;n;n;n;n;e;n;w',
		'东面回廊1': 'n;n;n;n;n;e;n;e',
		'月亮门1': 'n;n;n;n;n;e;n;w;n',
		'月亮门11': 'n;n;n;n;n;e;n;w;n;e',
		'飘雪小径': 'n;n;n;n;n;e;n;w;n;e;n',
		'飞雪堂': 'n;n;n;n;n;e;n;w;n;e;n;n',
		'书生2': 'n;n;n;n;n;e;n;w;n;e;n;n',
		'月亮门2': 'n;n;n;n;n;e;n;e;n',
		'西面回廊2': 'n;n;n;n;n;e;n;w;n;n',
		'东面回廊2': 'n;n;n;n;n;e;n;e;n;n',
		'宝瓶门1': 'n;n;n;n;n;e;n;w;n;n;n',
		'宝瓶门2': 'n;n;n;n;n;e;n;e;n;n;n',
		'南面回廊3': 'n;n;n;n;n;e;n;w;n;n;n;e',
		'园林小径': 'n;n;n;n;n;e;n;w;n;n;n;e;n',
		'致远斋': 'n;n;n;n;n;e;n;w;n;n;n;e;n;n',
		'雅舍': '+雅舍'
	},
	gaibang_m = {
		'树洞下': 'event_1_98623439',
		'梁长老': 'event_1_98623439',
		'树洞内部': '',
		'左全': '',
		'裘万家': '',
		'储藏室': 'event_1_98623439;s',
		'暗道': 'event_1_98623439;ne;ne',
		'破庙密室': 'event_1_98623439;ne;ne;ne',
		'屋角边': 'event_1_98623439;ne;n;ne;ne',
		'谷场槐树边': 'event_1_98623439;ne;n;ne;ne;ne',
		'沙丘小洞': 'event_1_98623439;ne;n;ne;ne;ne;event_1_97428251',
		'何一河': 'event_1_98623439;s',
		'密室': 'event_1_98623439;s;w',
		'莫不收': 'event_1_98623439;ne;ne',
		'何不净': 'event_1_98623439;ne;n;ne;ne',
		'马俱为': 'event_1_98623439;ne;n;ne;ne;ne',
		'余洪兴': 'event_1_98623439;ne;n;ne;ne;ne;event_1_97428251',
	},
	qiaoyinxian_m = {
		'乔阴县城北门': '',
		'守城官兵': '',
		'福林大街': 's',
		'卖饼大叔': 's',
		'陆得财': 's',
		'福林大街2': 's;s;s',
		'卖包子的': 's;s;s',
		'树王坟': 's;s;s;s',
		'石板空地': 's;s;s;w',
		'西大街': 's;s;s;s;w',
		'西大街2': 's;s;s;s;w;w',
		'西大街3': 's;s;s;s;w;w;w',
		'乔阴县城西门': 's;s;s;s;w;w;w;w',
		'福林酒楼': 's;s;s;s;s;s;e',
		'武官': 's;s;s;s;s;s;e',
		'汤掌柜': 's;s;s;s;s;s;e',
		'福林酒楼2': 's;s;s;s;s;s;e;n',
		'家丁': 's;s;s;s;s;s;e;n',
		'贵公子': 's;s;s;s;s;s;e;n',
		'福林酒楼3': 's;s;s;s;s;s;e;n;n',
		'酒楼守卫': 's;s;s;s;s;s;e;n;n',
		'休息室': 's;s;s;s;s;s;e;n;n;e',
		'南门广场': 's;s;s;s;s;s;s',
		'承安街': 's;s;s;s;s;s;s;w',
		'承安街2': 's;s;s;s;s;s;s;w;w',
		'十字路口': 's;s;s;s;s;s;s;w;w;w',
		'县府衙门': 's;s;s;s;s;s;s;w;w;w;n',
		'曲桥': 's;s;s;s;s;s;s;s;e',
		'书生': 's;s;s;s;s;s;s;s;e',
		'曲桥2': 's;s;s;s;s;s;s;s;e;n;e',
		'丫鬟': 's;s;s;s;s;s;s;s;e;n;e',
		'官家小姐': 's;s;s;s;s;s;s;s;e;n;e',
		'火龙将军庙': 's;s;s;s;s;s;s;sw;w',
		'乾瘪老太婆': 's;s;s;s;s;s;s;sw;w',
		'妇人': 's;s;s;s;s;s;s;sw;w;n',
		'乔阴县城南门': 's;s;s;s;s;s;s;sw;w;w',
		'树王坟内部': 's;s;s;s;event_1_65599392;n',
		'曼雲台': 's;s;s;s;s;s;s;s;e;n;e;s;e',
		'骆云舟': 's;s;s;s;s;s;s;s;e;n;e;s;e',
	},
	emeishan_m = {
		'十二盘': '',
		'解剑碑': 'w;nw;n;n',
		'大广场': 'w;nw;n;n;n',
		'报国寺山门': 'w;nw;n;n;n;n',
		'眺望台': 'w;nw;n;n;n;n;w',
		'白猿': 'w;nw;n;n;n;n;w',
		'伏虎寺': 'w;nw;n;n;n;n;e',
		'冷杉林': 'w;nw;n;n;n;n;e;n',
		'报国寺大殿': 'w;nw;n;n;n;n;se',
		'解脱坡': 'w;nw;n;n;n;n;e;e',
		'石碑': 'w;nw;n;n;n;n;e;e;n',
		'玉女峰': 'w;nw;n;n;n;n;e;e;n;n',
		'峨眉山门': 'w;nw;n;n;n;n;e;e;n;n;e',
		'文虚师太': 'w;nw;n;n;n;n;e;e;n;n;e',
		'看山弟子': 'w;nw;n;n;n;n;e;e;n;n;e',
	},
	emeishan_m1 = {
		'山门广场': '',
		'文寒师太': '',
		'文玉师太': '',
		'巡山弟子': 'n',
		'神水庵': 'n;n',
		'清音阁': 'n;n;n',
		'万年庵': 'n;n;n;e',
		'尾房': 'n;n;n;e;e',
		'青书少侠': 'n;n;n;e;e',
		'千佛庵大门': 'n;n;n;w',
		'小女孩': 'n;n;n;w',
		'小贩': 'n;n;n;w',
		'毗卢殿': 'n;n;n;w;n',
		'文殊殿': 'n;n;n;w;n;n',
		'静洪师太': 'n;n;n;w;n',
		'静雨师太': 'n;n;n;w;n;n',
		'千佛庵大殿': 'n;n;n;w;n;n;n',
		'东长廊': 'n;n;n;w;n;n;n;e;e',
		'东门': 'n;n;n;w;n;n;n;e;e;e',
		'归云阁': 'n;n;n;w;n;n;n;e;e;e;e',
		'西长廊': 'n;n;n;w;n;n;n;w;w',
		'西门': 'n;n;n;w;n;n;n;w;w;w',
		'小路': 'n;n;n;w;n;n;n;w;w;w;w',
		'风动坡': 'n;n;n;w;n;n;n;w;w;w;w;n',
		'女孩': 'n;n;n;w;n;n;n;w;w;w;w;n',
		'尼姑': 'n;n;n;w;n;n;n;w;w;w;w;n',
		'雷动坪': 'n;n;n;w;n;n;n;w;w;w;w;sw',
		'小尼姑': 'n;n;n;w;n;n;n;w;w;w;w;sw',
		'打坐室': 'n;n;n;w;n;n;n;w;w;n;n;w',
		'静玄师太': 'n;n;n;w;n;n;n;w;w;n;n;w',
		'北长廊': 'n;n;n;w;n;n;n;w;w;n;n;n',
		'北侧门': 'n;n;n;w;n;n;n;w;w;n;n;n;w',
		'蛇窟入口': 'n;n;n;w;n;n;n;w;w;n;n;n;w;w;w;n',
		'阴暗蛇窟': 'n;n;n;w;n;n;n;w;w;n;n;n;w;w;w;n',
		'蛇窟尽头': 'n;n;n;w;n;n;n;w;w;n;n;n;w;w;w;n',
		'俗家弟子房': 'n;n;n;w;n;n;n;e;e;n;n;e',
		'贝锦瑟': 'n;n;n;w;n;n;n;e;e;n;n;e',
		'北廊': 'n;n;n;w;n;n;n;e;e;n;n;n',
		'饭堂': 'n;n;n;w;n;n;n;e;e;n;n;n;e',
		'峨眉伙房': 'n;n;n;w;n;n;n;e;e;n;n;n;e;e',
		'接引殿': 'n;n;n;w;n;n;n;n',
		'后殿': 'n;n;n;w;n;n;n;n;n',
		'神龙阁': 'n;n;n;w;n;n;n;n;n;n',
		'千佛庵后园': 'n;n;n;w;n;n;n;n;n;n;n',
		'千佛庵后门': 'n;n;n;w;n;n;n;n;n;n;n;n',
		'狭窄山路': 'n;n;n;w;n;n;n;n;n;n;n;n;n',
		'峨眉后山': 'n;n;n;w;n;n;n;n;n;n;n;n;n;n',
		'毒蛇': 'n;n;n;w;n;n;n;n;n;n;n;n;n;n;n;n',
		'云海内': 'n;n;n;w;n;n;n;n;n;n;n;n;n;nw;nw;',
		'云海外': 'n;n;n;w;n;n;n;n;n;n;n;n;n;nw;nw;n',
		'金顶': 'n;n;n;w;n;n;n;n;n;n;n;n;n;nw;nw;n;n',
		'弯曲小径': 'n;n;n;w;n;n;n;n;n;n;n;n;n;nw;sw',
		'小径': 'n;n;n;w;n;n;n;n;n;n;n;n;n;nw;sw;w',
		'九老洞': 'n;n;n;w;n;n;n;n;n;n;n;n;n;nw;sw;w;nw;w',
		'护法弟子': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne',
		'山溪': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne;se',
		'大瀑布': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne;se;s;se',
		'狭窄山道': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne;ne',
		'护法大弟子': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne;ne',
		'九王洞': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne;ne;se;e',
		'静慈师太	': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne;ne;se;e',
		'静修后殿': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne;ne;n',
		'灭绝掌门': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne;ne;n',
		'方碧翠': 'n;n;n;w;n;n;n;n;n;n;n;n;n;ne;ne;n',
	},
	hengshan_m = {
		'大字岭': '',
		'山盗': '',
		'虎风口': 'n',
		'悬根松': 'n;w',
		'果老岭': 'n;n',
		'夕阳岭': 'n;n;e',
		'北岳庙': 'n;n;n',
		'鸡叫石': 'n;n;n;w',
		'北岳殿': 'n;n;n;n',
		'秘道': 'n;n;n;n;henshan15_op1',
		'秦卷帘': 'n',
		'九戒大师': 'n;w',
		'郑婉儿': 'n;n',
		'哑太婆': 'n;n;e',
		'云问天': 'n;n;n',
		'柳云烟': 'n;n;n;w',
		'石高达': 'n;n;n;n',
		'不可不戒': 'n;n;n;n;henshan15_op1',
		'玉羊游云': 'n;n;n;n;e',
		'公孙浩': 'n;n;n;n;e',
		'见性峰山道': 'n;n;n;n;n',
		'山蛇': 'n;n;n;n;n',
		'见性峰广场': 'n;n;n;n;n;n',
		'白云庵': 'n;n;n;n;n;n;n',
		'定云师太': 'n;n;n;n;n;n;n',
		'白云庵西廊': 'n;n;n;n;n;n;n;w',
		'斋堂': 'n;n;n;n;n;n;n;w;n',
		'休息室': 'n;n;n;n;n;n;n;w;s',
		'小师太': 'n;n;n;n;n;n;n;w;n',
		'白云庵东廊': 'n;n;n;n;n;n;n;e',
		'练武房': 'n;n;n;n;n;n;n;e;n',
		'藏经阁': 'n;n;n;n;n;n;n;e;e',
		'仪容': 'n;n;n;n;n;n;n;e;n',
		'仪雨': 'n;n;n;n;n;n;n;e;e',
		'长廊': 'n;n;n;n;n;n;n;n',
		'吸血蝙蝠': 'n;n;n;n;n;n;n;n',
		'白云庵后殿': 'n;n;n;n;n;n;n;n;n',
		'定安师太': 'n;n;n;n;n;n;n;n;n',
		'悬空栈道': 'n;n;n;n;n;n;n;n;n;w',
		'神教杀手': 'n;n;n;n;n;n;n;n;n;w',
		'松树林': 'n;n;n;n;n;n;n;n;n;w;n',
		'空地': 'n;n;n;n;n;n;n;n;n;w;n;e',
		'小茅屋': 'n;n;n;n;n;n;n;n;n;w;n;e;henshan_qinqitai23_op1',
		'魔教杀手': 'n;n;n;n;n;n;n;n;n;w;n;e;henshan_qinqitai23_op1',
		'石缝': 'n;n;n;n;n;n;n;n;n;w;n;n',
		'石阶': 'n;n;n;n;n;n;n;n;n;w;n;n;n',
		'隐蔽小路': 'n;n;n;n;n;n;n;n;n;w;n;n;n;w',
		'聆瀑亭': 'n;n;n;n;n;n;n;n;n;w;n;n;n;w;get_silver',
		'琴棋台': 'n;n;n;n;n;n;n;n;n;w;n;n;n;n',
		'魔教头目': 'n;n;n;n;n;n;n;n;n;w;n;n;n;n',
	},
	wudangshan_m = {
		'林中小路': '',
		'土匪': '',
		'黄土路': 'w;n;n;w',
		'野兔': 'w;n;n;w',
		'武当牌坊': 'w;n;n;w;w',
		'进香客': 'w;n;n;w;w',
		'青书少侠': 'w;n;n;w;w',
		'石阶': 'w;n;n;w;w;w;n',
		'三清殿': 'w;n;n;w;w;w;n;n;n',
		'知客道长': 'w;n;n;w;w;w;n;n;n',
		'武当广场': 'w;n;n;w;w;w;n;n;n;n',
		'道童': 'w;n;n;w;w;w;n;n;n;n',
		'三清殿2': 'w;n;n;w;w;w;n;n;n;n;n',
		'清虚道长': 'w;n;n;w;w;w;n;n;n;n;n',
		'宋首侠': 'w;n;n;w;w;w;n;n;n;n;n',
		'藏经阁': 'w;n;n;w;w;w;n;n;n;n;n;w;n',
		'后院': 'w;n;n;w;w;w;n;n;n;n;n;n',
		'俞莲舟': 'w;n;n;w;w;w;n;n;n;n;n;n',
		'后山小院': 'w;n;n;w;w;w;n;n;n;n;n;n;n;n;n',
		'张三丰': 'w;n;n;w;w;w;n;n;n;n;n;n;n;n;n',
		'东厢走廊': 'w;n;n;w;w;w;n;n;n;n;n;e',
		'张松溪': 'w;n;n;w;w;w;n;n;n;n;n;e',
		'茶室': 'w;n;n;w;w;w;n;n;n;n;n;e;e;s',
		'小翠': 'w;n;n;w;w;w;n;n;n;n;n;e;e;s',
		'练功房': 'w;n;n;w;w;w;n;n;n;n;n;e;e;e',
		'竹剑': 'w;n;n;w;w;w;n;n;n;n;n;e;e;e',
		'千斤顶': 'w;n;n;w;w;w;n;n;n;n;n;e;e;e',
		'比武房': 'w;n;n;w;w;w;n;n;n;n;n;e;e;e;e',
		'俞二侠': 'w;n;n;w;w;w;n;n;n;n;n;e;e;e;e',
		'崎岖山路': 'w;n;n;w;w;w;n;n;n;n;e;e;e;e;',
		'桃园小路': 'w;n;n;w;w;w;n;n;n;n;e;e;e;e;s;e;s;e;n',
		'蜜蜂': 'w;n;n;w;w;w;n;n;n;n;e;e;e;e;s;e;s;e;n',
		'小蜜蜂': 'w;n;n;w;w;w;n;n;n;n;e;e;e;e;s;e;s;e;n',
		'桃园小路2': 'w;n;n;w;w;w;n;n;n;n;e;e;e;e;s;e;s;e;s',
		'猴子': 'w;n;n;w;w;w;n;n;n;n;e;e;e;e;s;e;s;e;s',
	},
	wanyuezhuang_m = {
		'竹林': 'e',
		'蜿蜒小径': 'e;e;s',
		'蝴蝶': 'e;e;s',
		'小径': 'e;e;s;n',
		'晚月庄大门': 'e;e;s;sw',
		'晚月庄大厅': 'e;e;s;sw;se;w',
		'彩衣少女': 'e;e;s;sw',
		'蓝止萍': 'e;e;s;sw;se;w',
		'婢女': 'e;e;s;sw;se;w',
		'傍厅': 'e;e;s;sw;se;w;n',
		'蓝雨梅': 'e;e;s;sw;se;w;n',
		'大厅后院': 'e;e;s;sw;se;w;w',
		'后院走道': 'e;e;s;sw;se;w;w;w',
		'后院走道2': 'e;e;s;sw;se;w;w;n',
		'禁闭房': 'e;e;s;sw;se;w;w;n;w',
		'芳绫': 'e;e;s;sw;se;w;w;n;w',
		'后院书房': 'e;e;s;sw;se;w;w;w;w',
		'昭仪': 'e;e;s;sw;se;w;w;w;w',
		'内厅穿堂': 'e;e;s;sw;se;w;w;s',
		'仪门': 'e;e;s;sw;se;w;w;s;s',
		'内厅': 'e;e;s;sw;se;w;w;s;w',
		'昭蓉': 'e;e;s;sw;se;w;w;s;w',
		'东厢房': 'e;e;s;sw;se;w;w;s;s;s;e;s;s;e',
		'瑷伦': 'e;e;s;sw;se;w;w;s;s;s;e;s;s;e',
	},
	shuiyange_m = {
		'青石官道': '',
		'白石阶梯': 'n',
		'水烟阁前': 'n;n',
		'水烟阁正门': 'n;n;n',
		'天邪虎': 'n;n;n',
		'水烟阁武士': 'n;n;n',
		'水烟阁正厅': 'n;n;n;n',
		'潘军禅': 'n;n;n;n',
		'萧辟尘': 'n;n;n;n',
		'水烟阁东侧花厅': 'n;n;n;e',
		'休息室': 'n;n;n;e;e',
		'东侧厅': 'n;n;n;e;n;ne',
		'厨房': 'n;n;n;e;n;n',
		'水烟阁红衣武士': 'n;n;n;e;n;ne',
		'水烟阁西侧花厅': 'n;n;n;w',
		'西侧厅': 'n;n;n;w;n;nw',
		'柴房': 'n;n;n;w;n;n',
		'仆役卧室': 'n;n;n;w;n;n;e',
		'聆啸厅': 'n;n;n;w;n;nw;e',
		'水烟阁司事': 'n;n;n;w;n;nw;e',
		'春秋水色斋': 'n;n;n;w;n;nw;e;n',
		'於兰天武': 'n;n;n;w;n;nw;e;n',
	},
	shaolinsi_m = {
		'丛林山径': '',
		'山猪': '',
		'虚通': '',
		'虚明': 'n',
		'僧人': 'n',
		'少林寺山门': 'n',
		'土路': 'n;w',
		'田鼠': 'n;w',
		'道品禅师': 'n;w',
		'小院': 'n;w;w',
		'小孩': 'n;w;w',
		'小木屋': 'n;w;w;n',
		'乔三槐': 'n;w;w;n',
		'卧室': 'n;w;w;n;shaolin012_op1',
		'道果禅师': 'n;w;w;n;shaolin012_op1',
		'道觉禅师': 'n;w;w',
		'甬道': 'n;n',
		'扫地和尚': 'n;n',
		'慧色尊者': 'n;n',
		'慧如尊者': 'n;n',
		'西碑林': 'n;n;w',
		'道成禅师': 'n;n;w',
		'挑水僧': 'n;n;w',
		'东碑林': 'n;n;e',
		'洒水僧': 'n;n;e',
		'天王殿': 'n;n;n',
		'玄痛大师': 'n;n;n',
		'小北': 'n;n;n',
		'广场': 'n;n;n;n',
		'进香客': 'n;n;n;n',
		'慧名尊者': 'n;n;n;n',
		'慧空尊者': 'n;n;n;n',
		'鼓楼': 'n;n;n;n;w',
		'狱卒': 'n;n;n;n;w',
		'道尘禅师': 'n;n;n;n;w',
		'钟楼': 'n;n;n;n;e',
		'行者': 'n;n;n;n;e',
		'扫地僧': 'n;n;n;n;e',
		'大雄宝殿': 'n;n;n;n;n',
		'道象禅师': 'n;n;n;n;n',
		'小南': 'n;n;n;n;n',
		'月台': 'n;n;n;n;n;n',
		'托钵僧': 'n;n;n;n;n;n',
		'巡寺僧人': 'n;n;n;n;n;n',
		'西禅房': 'n;n;n;n;n;n;w',
		'盈盈': 'n;n;n;n;n;n;w',
		'东禅房': 'n;n;n;n;n;n;e',
		'打坐僧人': 'n;n;n;n;n;n;e',
		'藏经阁': 'n;n;n;n;n;n;n',
		'黑衣大汉': 'n;n;n;n;n;n;n',
		'清缘比丘': 'n;n;n;n;n;n;n',
		'清晓比丘': 'n;n;n;n;n;n;n',
		'藏经阁二楼': 'n;n;n;n;n;n;n;shaolin27_op1',
		'灰衣僧': 'n;n;n;n;n;n;n;shaolin27_op1',
		'藏经阁三楼': 'n;n;n;n;n;n;n;shaolin27_op1;event_1_34680156',
		'守经僧人': 'n;n;n;n;n;n;n;shaolin27_op1;event_1_34680156',
		'方丈院': 'n;n;n;n;n;n;n;n',
		'小沙弥': 'n;n;n;n;n;n;n;n',
		'清为比丘': 'n;n;n;n;n;n;n;n',
		'清闻比丘': 'n;n;n;n;n;n;n;n',
		'清无比丘': 'n;n;n;n;n;n;n;n',
		'西厢房': 'n;n;n;n;n;n;n;n;w',
		'慧洁尊者': 'n;n;n;n;n;n;n;n;w',
		'慧合尊者': 'n;n;n;n;n;n;n;n;w',
		'玄苦大师': 'n;n;n;n;n;n;n;n;w',
		'东厢房': 'n;n;n;n;n;n;n;n;e',
		'玄悲大师': 'n;n;n;n;n;n;n;n;e',
		'方丈室': 'n;n;n;n;n;n;n;n;n',
		'清乐比丘': 'n;n;n;n;n;n;n;n;n',
		'玄慈大师': 'n;n;n;n;n;n;n;n;n',
		'清善比丘': 'n;n;n;n;n;n;n;n;n',
		'茶室': 'n;n;n;n;n;n;n;n;n;shaolin25_op1',
		'叶十二娘': 'n;n;n;n;n;n;n;n;n;shaolin25_op1',
		'立雪亭': 'n;n;n;n;n;n;n;n;n;n',
		'清观比丘': 'n;n;n;n;n;n;n;n;n;n',
		'清法比丘': 'n;n;n;n;n;n;n;n;n;n',
		'白眉老僧': 'n;n;n;n;n;n;n;n;n;n',
		'院落': 'n;n;n;n;n;n;n;n;n;n;n',
		'慧真尊者': 'n;n;n;n;n;n;n;n;n;n;n',
		'慧虚尊者': 'n;n;n;n;n;n;n;n;n;n;n',
		'青松': 'n;n;n;n;n;n;n;n;n;n;n',
		'地藏殿': 'n;n;n;n;n;n;n;n;n;n;n;w',
		'道一禅师': 'n;n;n;n;n;n;n;n;n;n;n;w',
		'道正禅师': 'n;n;n;n;n;n;n;n;n;n;n;w',
		'玄难大师': 'n;n;n;n;n;n;n;n;n;n;n;w',
		'白衣殿': 'n;n;n;n;n;n;n;n;n;n;n;e',
		'冷幽兰': 'n;n;n;n;n;n;n;n;n;n;n;e',
		'千佛殿': 'n;n;n;n;n;n;n;n;n;n;n;n',
		'慧轮': 'n;n;n;n;n;n;n;n;n;n;n;n',
		'慧修尊者': 'n;n;n;n;n;n;n;n;n;n;n;n',
		'树林': 'n;n;n;n;n;n;n;n;n;n;n;n;w',
		'砍柴僧': 'n;n;n;n;n;n;n;n;n;n;n;n;w',
		'道相禅师': 'n;n;n;n;n;n;n;n;n;n;n;n;w',
		'达摩洞': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n',
		'火龙洞': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n;get_silver',
		'达摩老祖': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n;get_silver',
		'松树林': 'e;s;s',
		'青云坪': 'e;s;s;w;w',
		'金刚伏魔圈': 'e;s;s;w;w;w',
		'渡雨': 'e;s;s;w;w;w',
		'渡云': 'e;s;s;w;w;w',
		'渡风': 'e;s;s;w;w;w',
	},
	tangmen_m = {
		'蜀道': '',
		'唐门牌坊': 'w;n',
		'唐门弟子': 'w;n',
		'唐门前院': 'w;n;n',
		'唐风': 'w;n;n',
		'狭长小道': 'w;n;n;n',
		'唐看': 'w;n;n;n',
		'西边长廊': 'w;n;n;n;w',
		'侧房': 'w;n;n;n;w;n',
		'东侧房': 'w;n;n;n;w;s',
		'西边长廊2': 'w;n;n;n;w;w',
		'唐健卧室': 'w;n;n;n;w;w;n',
		'唐镖卧室': 'w;n;n;n;w;w;s',
		'唐镖': 'w;n;n;n;w;w;s',
		'西边长廊3': 'w;n;n;n;w;w;w',
		'唐芳卧室': 'w;n;n;n;w;w;w;n',
		'唐缘卧室': 'w;n;n;n;w;w;w;s',
		'唐芳': 'w;n;n;n;w;w;w;n',
		'唐缘': 'w;n;n;n;w;w;w;s',
		'客房': 'w;n;n;n;w;w;w;w',
		'会客室': 'w;n;n;n;n',
		'方媃': 'w;n;n;n;n',
		'唐怒': 'w;n;n;n;n',
		'东边长廊': 'w;n;n;n;e',
		'唐门厨房': 'w;n;n;n;e;s',
		'练武广场': 'w;n;n;n;e;e;n',
		'唐健': 'w;n;n;n;e;e;n',
		'后院': 'w;n;n;n;e;e;n;n',
		'唐情': 'w;n;n;n;e;e;n;n',
		'唐刚': 'w;n;n;n;e;e;n;n',
		'竹屋': 'w;n;n;n;e;e;n;n;n',
		'拜箭亭': 'w;n;n;n;e;e;n;n;e',
		'授艺亭': 'w;n;n;n;e;e;n;e',
		'铁栅栏': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183',
		'地下通道1': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240',
		'地下通道2': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e',
		'地下通道3': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s',
		'地下通道': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e',
		'地下通道4': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e;n',
		'地下通道5': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;n;s',
		'兵器室': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e;n;w',
		'石室': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e;n;w;n',
		'地室': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e;n;w;n;n',
		'欧阳敏': 'w;n;n;n;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e;n;w;n;n',
		'浣花剑碑': 'sw;s;e;s;s;sw;sw;w;w;s;s;e',
		'浣花剑池入口': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e',
		'程倾城': 'sw;s;e;s;s;sw;sw;w;w;s;s;e',
		'无名剑客': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e',
		'瑶光池': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e',
		'默剑客': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e',
		'破军剑阁': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n',
		'竺霁庵': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n',
		'武曲剑阁': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne',
		'甄不恶': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne',
		'廉贞剑阁': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e',
		'素厉铭': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e',
		'七杀剑阁': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se',
		'骆祺樱': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se',
		'玉衡池': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s',
		'谢麟玄': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s;se',
		'天梁剑阁': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s;se',
		'巨门剑阁': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s;se;e',
		'祝公博': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s;se;e',
		'紫薇池': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s;se;e;ne',
		'黄衫少女': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s;se;e;ne',
		'贪狼剑阁': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s;se;e;ne;n',
		'鹿熙吟': 'sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s;se;e;ne;n',
	},
	qingchengshan_m = {
		'北郊': '',
		'海公公': '',
		'小径': 'n',
		'游方郎中': 'n',
		'官道': 'n;nw',
		'官道2': 'n;nw;w',
		'都江堰': 'n;nw;w;nw',
		'山道': 'n;nw;w;nw;w',
		'山道2': 'n;nw;w;nw;w;s',
		'青城大门': 'n;nw;w;nw;w;s;s',
		'青城派弟子': 'n;nw;w;nw;w;s;s',
		'青城弟子': 'n;nw;w;nw;w;s;s',
		'候老大': 'n;nw;w;nw;w;s;s',
		'解剑石': 'n;nw;w;nw;w;s;s;s',
		'罗老四': 'n;nw;w;nw;w;s;s;s',
		'青石台阶': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on',
		'演武堂': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w',
		'吉人英': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w',
		'小室': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;n',
		'贾老二': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;n',
		'西侧房': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;n;e',
		'侧房': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;n;w',
		'弯曲小路': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;n;n',
		'藏经楼': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;n;n;w',
		'松风观': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;w',
		'余大掌门': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;w',
		'掌门书房': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;w;s',
		'青城走廊': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;w;n',
		'青袍老道': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;w;n',
		'黄袍老道': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;w;n',
		'青城山走廊': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;w;n;w',
		'于老三': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;w;n;w',
		'大菜园': 'n;nw;w;nw;w;s;s;s;auto_equip off;w;auto_equip on;w;w;w',
		'福州北门': 's',
		'福州大街': 's;s',
		'仆人': 's;s',
		'恶少': 's;s',
		'小肉铺': 's;s;e',
		'屠夫': 's;s;e',
		'四季花店': 's;s;s;e',
		'小甜': 's;s;s;e',
		'书院': 's;s;s;s;e',
		'读千里': 's;s;s;s;e',
		'福州南门': 's;s;s;s;s;s',
		'福州官衙': 's;s;s;s;s;e',
		'福州府尹': 's;s;s;s;s;e',
		'无醉酒家': 's;s;w',
		'店小二': 's;s;w',
		'酒店老板': 's;s;w',
		'酒家二楼': 's;s;w;n',
		'酒店女老板': 's;s;w;n',
		'女侍': 's;s;w;n',
		'镖局大门': 's;s;s;w',
		'福威镖局正厅': 's;s;s;w;w',
		'镖局货仓': 's;s;s;w;w;s',
		'镖局过道': 's;s;s;w;w;w',
		'福威镖局后院': 's;s;s;w;w;w;w;w',
		'内宅': 's;s;s;w;w;w;w;w;n',
		'林府后门': 's;s;s;w;w;w;w;w;w',
		'镖局车站': 's;s;s;w;w;n',
		'练武场': 's;s;s;w;w;s;s',
		'武器店': 's;s;s;s;w',
		'小河边': 's;s;s;s;s;s;w',
		'阿美': 's;s;s;w;w;n',
		'镖局弟子': 's;s;s;w;w;s;s',
		'兵器贩子': 's;s;s;s;w',
		'木道神': 's;s;s;s;s;s;w',
		'石拱桥': 's;s;s;s;s;s;sw',
	},
	xiaoyaolin_m = {
		'青石大道': '',
		'树林': 's;s;s;s;e;e',
		'林间小道0': 's;s;s;s;e;e;s;w',
		'无量山脚': 's;s;s;s;e;n',
		'玉璧瀑布': 's;s;s;s;e;n;e',
		'玉壁瀑布': 's;s;s;s;e;n;e',
		'岩缝': 's;s;s;s;e;n;e;event_1_5221690',
		'谷底': 's;s;s;s;e;n;e;event_1_5221690;s',
		'湖边': 's;s;s;s;e;n;e;event_1_5221690;s;w',
		'羽衣霓裳': 's;s;s;s;e;n;e;event_1_5221690;s;w',
		'步步生莲': 's;s;s;s;e;n;e;event_1_5221690;s;w',
		'岩洞': 's;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376',
		'石室大门': 's;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376;n',
		'圆形石室': 's;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376;n;n',
		'石级': 's;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376;n;n;e',
		'石室': 's;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376;n;n;w;w',
		'小蒲团': 's;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376;n;n;w;w',
		'房间': 's;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376;n;n;w;w',
		'天山姥姥': 's;s;s;s;e;n;e;event_1_5221690;s;w;event_1_57688376;n;n;e;n;event_1_88625473;event_1_82116250;event_1_90680562;event_1_38586637',
		'吴统领': 's;s;s;s;e;e;s;w',
		'蒙面人': 's;s;s;s;e;e;s;w',
		'石屋': 's;s;s;s;e;e;s;w;n',
		'范棋痴': 's;s;s;s;e;e;s;w;n',
		'木板路': 's;s;s;s;e;e;s;w;s',
		'工匠屋': 's;s;s;s;e;e;s;w;s;s',
		'冯巧匠': 's;s;s;s;e;e;s;w;s;s',
		'青草坪': 's;s;s;s;e;e;s;w;w',
		'苏先生': 's;s;s;s;e;e;s;w;w',
		'林间小道': 's;s;s;s;e;e;s;w;w;n',
		'石师妹': 's;s;s;s;e;e;s;w;w;n',
		'小木屋': 's;s;s;s;e;e;s;w;w;n;n',
		'薛神医': 's;s;s;s;e;e;s;w;w;n;n',
		'木屋': 's;s;s;s;e;e;s;w;w;s;s',
		'康琴癫': 's;s;s;s;e;e;s;w;w;s;s',
		'林间小道1': 's;s;s;s;e;e;s;w;w;w',
		'苟书痴': 's;s;s;s;e;e;s;w;w;w',
		'打铁屋': 's;s;s;s;e;e;s;w;w;w;w;n',
		'林间小道2': 's;s;s;s;e;e;s;w;w;w;w',
		'酒家': 's;s;s;s;e;e;s;w;w;w;w;s',
		'李唱戏': 's;s;s;s;e;e;s;w;w;w;w;s',
		'小屋': 's;s;s;s;e;e;s;w;w;w;w;w',
	},
	kaifeng_m = {
		'朱雀门': '',
		'骆驼': '',
		'羊肠小道': 'event_1_97081006',
		'毒蛇': 'event_1_97081006',
		'野猪林入口': 'event_1_97081006;s',
		'野猪': 'event_1_97081006;s',
		'野猪林密径1': 'event_1_97081006;s;s',
		'野猪林密径2': 'event_1_97081006;s;s;s',
		'古松树': 'event_1_97081006;s;s;s;e',
		'青石板': 'event_1_97081006;s;s;s;e;kaifeng_yezhulin23_op1',
		'荆棘丛': 'event_1_97081006;s;s;s;s',
		'黑鬃野猪': 'event_1_97081006;s;s;s;s',
		'野猪窝': 'event_1_97081006;s;s;s;s;s',
		'野猪王': 'event_1_97081006;s;s;s;s;s',
		'杂草小路': 'event_1_97081006;s;s;s;s;s;w',
		'破烂小屋': 'event_1_97081006;s;s;s;s;s;w;kaifeng_yezhulin05_op1',
		'白面人': 'event_1_97081006;s;s;s;s;s;w;kaifeng_yezhulin05_op1',
		'木屋据点': 'event_1_97081006;s;s;s;s;s;w;kaifeng_yezhulin05_op1;w',
		'鹤发老人': 'event_1_97081006;s;s;s;s;s;w;kaifeng_yezhulin05_op1;w',
		'鹿杖老人': 'event_1_97081006;s;s;s;s;s;w;kaifeng_yezhulin05_op1;w',
		'御街南': 'n',
		'灯笼小贩': 'n',
		'药铺': 'n;w',
		'赵大夫': 'n;w',
		'开封府': 'n;e',
		'欧阳春': 'n;e',
		'展昭': 'n;e',
		'开封府大堂': 'n;e;s',
		'包拯': 'n;e;s',
		'州桥': 'n;n',
		'皮货商': 'n;n',
		'汴河大街西': 'n;n;w',
		'新郎官': 'n;n;w',
		'混混张三': 'n;n;w;n',
		'稻香居': 'n;n;w;n',
		'稻香居二楼': 'n;n;w;n;n',
		'刘财主': 'n;n;w;n;n',
		'铁翼': 'n;n;w;n;n',
		'御街北': 'n;n;n',
		'李四': 'n;n;n',
		'贡院': 'n;n;n;e',
		'陈举人': 'n;n;n;e',
		'西角楼大街': 'n;n;n;n',
		'流浪汉': 'n;n;n;n',
		'天波府': 'n;n;n;n;w',
		'雅瓷轩': 'n;n;n;n;e',
		'富家弟子': 'n;n;n;n;e',
		'天波门': 'n;n;n;n;n',
		'赵虎': 'n;n;n;n;n',
		'溪边小路': 'n;n;n;n;n;e',
		'踏青妇人': 'n;n;n;n;n;e',
		'小院': 'n;n;n;n;n;e;n',
		'瓦屋': 'n;n;n;n;n;e;n;n',
		'平夫人': 'n;n;n;n;n;e;n;n',
		'柳树林': 'n;n;n;n;n;e;n;n;n',
		'恶狗': 'n;n;n;n;n;e;n;n;n',
		'炼药房': 'n;n;n;n;n;e;n;n;n;event_1_27702191',
		'平怪医': 'n;n;n;n;n;e;n;n;n;event_1_27702191',
		'官道': 'e',
		'官兵': 'e',
		'树林': 'e;s',
		'七煞堂弟子': 'e;s',
		'菜园小径': 'e;s;s',
		'禹王台': 'e;s;s;s',
		'前院': 'e;s;s;s;s',
		'禹王庙': 'e;s;s;s;s;s',
		'七煞堂打手': 'e;s;s',
		'七煞堂护卫': 'e;s;s;s;s',
		'七煞堂堂主': 'e;s;s;s;s;s',
		'汴河大街东': 'n;n;e',
		'武官': 'n;n;e',
		'石拱门': 'n;n;e;s',
		'高衙内': 'n;n;e;s',
		'八宝琉璃殿': 'n;n;e;s;s',
		'护寺僧人': 'n;n;e;s;s',
		'后院': 'n;n;e;s;s;s',
		'烧香老太': 'n;n;e;s;s;s',
		'素斋厨': 'n;n;e;s;s;s;w',
		'素斋师傅': 'n;n;e;s;s;s;w',
		'明廊': 'n;n;e;s;s;s;e',
		'泼皮': 'n;n;e;s;s;s;e',
		'菜地': 'n;n;e;s;s;s;e;e',
		'老僧人': 'n;n;e;s;s;s;e;e',
		'柴房': 'n;n;e;s;s;s;e;s',
		'烧火僧人': 'n;n;e;s;s;s;e;s',
		'茅房': 'n;n;e;s;s;s;e;n',
		'竹林小径': 'n;n;e;s;s;s;s',
		'张龙': 'n;n;e;s;s;s;s',
		'放生池': 'n;n;e;s;s;s;s;w',
		'孔大官人': 'n;n;e;s;s;s;s;w',
		'沿河大街': 'n;n;e;e',
		'菜贩子': 'n;n;e;e',
		'王家纸马店': 'n;n;e;e;s',
		'王老板': 'n;n;e;e;s',
		'汴河码头': 'n;n;e;e;n',
		'码头工人': 'n;n;e;e;n',
		'货运栈': 'n;n;e;e;n;n',
		'船老大': 'n;n;e;e;n;n',
		'客船': 'n;n;e;e;n;get_silver',
		'落魄书生': 'n;n;e;e;n;get_silver',
	},
	mingjiao_m = {
		'小村': '',
		'村民': '',
		'屋子': 'e',
		'沧桑老人': 'e',
		'民居': 'w',
		'村妇': 'w',
		'卧房': 'w;n',
		'老太婆': 'w;n',
		'小男孩': 'w;n',
		'上山小路': 'n',
		'上山小路2': 'n;nw',
		'上山小路3': 'n;nw;n',
		'半山牌坊': 'n;nw;n;n',
		'崎岖山路': 'n;nw;n;n;n',
		'观景台': 'n;nw;n;n;w',
		'巨石': 'n;nw;n;n;n;n;n',
		'明教小圣使': 'n;nw;n;n;n;n;n',
		'天路': 'n;nw;n;n;n;n;n;ne',
		'过道': 'n;nw;n;n;n;n;n;ne;n',
		'明教饭堂': 'n;nw;n;n;n;n;n;ne;n;n',
		'布道房': 'n;nw;n;n;n;n;n;ne;n;n;w',
		'客房': 'n;nw;n;n;n;n;n;ne;n;n;e',
		'巨木旗大厅': 'n;nw;n;n;n;n;n;ne;n;n;n',
		'闻旗使': 'n;nw;n;n;n;n;n;ne;n;n;n',
		'砂石地': 'n;nw;n;n;n;n;n;ne;n;n;n;e',
		'韦蝠王': 'n;nw;n;n;n;n;n;ne;n;n;n;n',
		'明教': 'n;nw;n;n;n;n;n;ne;n;n;n;n',
		'大空地': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n',
		'彭散玉': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n',
		'铁木长廊': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e',
		'洪水旗大厅': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e',
		'索道': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;se',
		'唐旗使': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e',
		'周散仙': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;n',
		'锐金旗': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;n;n',
		'庄旗使': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;n;n',
		'侧堂': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;n;n;ne',
		'黑屋': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;n;n;ne;e',
		'烈火旗大厅': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;w;w',
		'布袋大师': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;w;w;n',
		'厚土旗大厅': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;w;w;n;n',
		'颜旗使': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;w;w;n;n',
		'辛旗使': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;w;w',
		'习武堂': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;w;w;s',
		'明教前殿': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n',
		'冷步水': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n',
		'遇水堂': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;e',
		'张散仙': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;e',
		'碧水寒潭': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;se;se;e',
		'打坐室': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;e',
		'风暴堂': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;w',
		'列英堂': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n',
		'殷鹰王': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n',
		'明教教众': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n',
		'小饭厅': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;w;nw',
		'悬天室': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;w;nw;nw',
		'龙王殿': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;w',
		'狮王殿': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;e',
		'明教大殿': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n',
		'黛龙王': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;w',
		'谢狮王': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;e',
		'张教主': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n',
		'圣火桥': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n;n',
		'范右使': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n;n',
		'黑金桥': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n;n;n',
		'小昭': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n;n;n',
		'黑金桥尾': 'n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n;n;n;w',
	},
	quanzhenjiao_m = {
		'终南山路': '',
		'碎石阶': 's;s',
		'终南石阶': 's;s;s;sw;s',
		'终南山游客': 's;s;s;sw;s;e',
		'终南石阶2': 's;s;s;sw;s;e;n;nw',
		'终南石阶3': 's;s;s;sw;s;e;n;nw;n',
		'男童': 's;s;s;sw;s;e;n;nw',
		'全真女弟子': 's;s;s;sw;s;e;n;nw;n',
		'全真教大门': 's;s;s;sw;s;e;n;nw;n;n;n',
		'万物堂': 's;s;s;sw;s;e;n;nw;n;n;n;n',
		'武场': 's;s;s;sw;s;e;n;nw;n;n;n;n;e',
		'事为室': 's;s;s;sw;s;e;n;nw;n;n;n;n;w',
		'天心殿': 's;s;s;sw;s;e;n;nw;n;n;n;n;n',
		'迎客道长': 's;s;s;sw;s;e;n;nw;n;n;n',
		'程遥伽': 's;s;s;sw;s;e;n;nw;n;n;n;n',
		'练功弟子': 's;s;s;sw;s;e;n;nw;n;n;n;n;n',
		'尹志平': 's;s;s;sw;s;e;n;nw;n;n;n;n;n',
		'马厩': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;w;w;w;s',
		'健马': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;w;w;w;s',
		'李四': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;w;w;w;s',
		'大堂三进': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;w;w;w;w;s',
		'后堂三进': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;e;e;e',
		'孙不二': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;e;e;e',
		'访真桥': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;e;e;n',
		'柴房': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;e;e;n;n',
		'柴火道士': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;e;e;n;n',
		'静修室': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n',
		'小花园': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n',
		'马钰': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n',
		'丘处机': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n',
		'乃容殿': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;w',
		'偏殿': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;w;w',
		'王处一': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n',
		'老君殿': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;e;n',
		'鹿道清': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;e',
		'后堂一进': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;w;w;w;s',
		'小道童': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;w;w;w;s',
		'大禅房': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;w;w;w;w;n;n;n',
		'存道塔': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;w;w;w;s;s',
		'天尊殿': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;w;w;s',
		'郝大通': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;w;w;w;w;n;n;n',
		'重阳祖师': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;w;w;s',
		'授经楼': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;e;s',
		'勤习堂': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;e',
		'藏经殿': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;w',
		'老道长': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;e',
		'会真堂': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;w',
		'观想兽': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;w',
		'元始殿': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;w;n',
		'赵师兄': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;w;n',
		'侧堂': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;w;n;n',
		'休息室': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;w;n;n;n',
		'药剂室': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;w;w;n',
		'容物堂': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;e',
		'狭长廊桥': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'过真殿': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;e;e',
		'通天殿': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;e;e;n',
		'大堂一进': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;e;e;e;n',
		'厨房': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;e;e;e;',
		'后堂二进': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;e;e;e;s',
		'老顽童': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;w;w;n',
		'谭处端': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;e',
		'刘处玄': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;e;e',
		'小麻雀': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;e;e;e;n',
		'肥料房': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'老人': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'清净居': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'清池': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w',
		'青草坡': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e',
		'小溪流': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e',
		'后花园': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;e;e',
		'树林': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;n',
		'蜜蜂': 's;s;s;sw;s;e;n;nw;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;n',
	},
	gumu_m = {
		'山路': '',
		'白马潭': 's;s',
		'终南山主峰': 'w;w;s;e',
		'空地': 'w;w;s;e;s;s',
		'草地': 'w;w;s;e;s;s;s;s;s;sw;sw;s',
		'寒水潭': 'w;w;s;e;s;s;s;s;s;sw;sw;s;e;se',
		'小树林': 'w;w;s;e;s;s;s;s;s;sw',
		'墓门': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s',
		'黄沙岭': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;w',
		'悬崖': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;e',
		'玉蜂': '+玉蜂',
		'墓道': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;e',
		'前厅': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s',
		'休息室': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;w;w',
		'练功室': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;w;sw',
		'小屋': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;s',
		'小厅': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;s;s;e;e',
		'中厅': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e',
		'龙儿': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e',
		'匾后': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;event_1_3723773',
		'银钥匙': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;event_1_3723773',
		'密室': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;event_1_3723773;se;n;e;s;e;s;e',
		'林祖师': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;event_1_3723773;se;n;e;s;e;s;e',
		'石室': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;s;e;n',
		'储藏室': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;s;s;w;w',
		'药房': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;s;s;s',
		'蜂屋': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;s;s;e;e;e;e;s;e',
		'孙婆婆': 'w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;s;s;s;e;e;e;e;s;e',
	},
	baituoshan_m = {
		'戈壁': '',
		'东街': 'nw',
		'花花公子': 'nw',
		'坟地': 'nw;ne;ne',
		'寡妇': 'nw;ne;ne',
		'小路': 'nw;ne;n;n',
		'小山贼': 'nw;ne;n;n',
		'洞口': 'nw;ne;n;n;ne;n',
		'山贼': 'nw;ne;n;n;ne;n',
		'杖场': 'nw;ne;n;n;ne;w',
		'侍杖': 'nw;ne;n;n;ne;w',
		'洞内': 'nw;ne;n;n;ne;n;n',
		'雷横天': 'nw;ne;n;n;ne;n;n',
		'侧洞': 'nw;ne;n;n;ne;n;n;w',
		'金花': 'nw;ne;n;n;ne;n;n;w',
		'打铁铺': 'nw;s',
		'铁匠': 'nw;s',
		'西街': 'nw;w',
		'农民': 'nw;w',
		'舞蛇人': 'nw;w',
		'酒店': 'nw;w;n',
		'店小二': 'nw;w;n',
		'小桥': 'nw;w;w',
		'村姑': 'nw;w;w',
		'广场': 'nw;w;w;nw',
		'小孩': 'nw;w;w;nw',
		'农舍': 'nw;w;w;nw;e',
		'农家妇女': 'nw;w;w;nw;e',
		'山路': 'nw;w;w;nw;nw;nw',
		'樵夫': 'nw;w;w;nw;nw;nw',
		'草莓地': 'nw;w;w;nw;nw;nw;n;w;sw',
		'石阶': 'nw;w;w;nw;n',
		'草坪': 'nw;w;w;nw;n;e',
		'大门': 'nw;w;w;nw;n;n',
		'门卫': 'nw;w;w;nw;n;n',
		'院子': 'nw;w;w;nw;n;n;n',
		'武器库': 'nw;w;w;nw;n;n;n;w',
		'仕卫': 'nw;w;w;nw;n;n;n;w',
		'蛇杖': 'nw;w;w;nw;n;n;n;w',
		'钢杖': 'nw;w;w;nw;n;n;n;w',
		'大厅': 'nw;w;w;nw;n;n;n;n',
		'丫环': 'nw;w;w;nw;n;n;n;n',
		'欧阳少主': 'nw;w;w;nw;n;n;n;n',
		'练功场': 'nw;w;w;nw;n;n;n;n;n',
		'李教头': 'nw;w;w;nw;n;n;n;n;n',
		'长廊': 'nw;w;w;nw;n;n;n;n;n;w',
		'休息室': 'nw;w;w;nw;n;n;n;n;n;w;n',
		'药房': 'nw;w;w;nw;n;n;n;n;n;w;s',
		'小青': 'nw;w;w;nw;n;n;n;n;n;w;s',
		'草丛': 'nw;w;w;nw;n;n;n;n;n;w;w;w;n',
		'黑冠巨蟒': 'nw;w;w;nw;n;n;n;n;n;w;w;w;n',
		'竹林': 'nw;w;w;nw;n;n;n;n;n;w;w;w;n;n',
		'岩洞': 'nw;w;w;nw;n;n;n;n;n;w;w;w;n;n;n',
		'蟒蛇': 'nw;w;w;nw;n;n;n;n;n;w;w;w;n;n;n',
		'岩洞内': 'nw;w;w;nw;n;n;n;n;n;w;w;w;n;n;n;n',
		'练功房': 'nw;w;w;nw;n;n;n;n;n;e',
		'教练': 'nw;w;w;nw;n;n;n;n;n;e',
		'小宅落': 'nw;w;w;nw;n;n;n;n;n;e;e',
		'练功室': 'nw;w;w;nw;n;n;n;n;n;e;ne',
		'陪练童子': 'nw;w;w;nw;n;n;n;n;n;e;ne',
		'门廊': 'nw;w;w;nw;n;n;n;n;n;n',
		'管家': 'nw;w;w;nw;n;n;n;n;n;n',
		'花园': 'nw;w;w;nw;n;n;n;n;n;n;n',
		'白衣少女': 'nw;w;w;nw;n;n;n;n;n;n;n',
		'老毒物': 'nw;w;w;nw;n;n;n;n;n;n;n',
		'内室': 'nw;w;w;nw;n;n;n;n;n;n;n;w',
		'厨房': 'nw;w;w;nw;n;n;n;n;n;n;n;e',
		'肥肥': 'nw;w;w;nw;n;n;n;n;n;n;n;e',
		'柴房': 'nw;w;w;nw;n;n;n;n;n;n;n;e;e',
		'老材': 'nw;w;w;nw;n;n;n;n;n;n;n;e;e',
		'竹园': 'nw;w;w;nw;n;n;n;n;n;n;n;n',
		'后院': 'nw;w;w;nw;n;n;n;n;n;n;n;n;nw',
		'张妈': 'nw;w;w;nw;n;n;n;n;n;n;n;n;nw',
		'兔苑': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne',
		'白兔': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne',
		'兽舍': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne;w',
		'狐狸': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne;w',
		'老虎': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne;w',
		'野狼': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne;w',
		'雄狮': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne;w',
		'蛇园': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne;e',
		'竹叶青蛇': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne;e',
		'金环蛇': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne;e',
		'后门': 'nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n',
	},
	songshan_m = {
		'太室阙': '',
		'脚夫': '',
		'青石大道': 'n',
		'秋半仙': 'n',
		'风骚少妇': 'n',
		'中岳庙': 'n;n',
		'锦袍老人': 'n;n',
		'启母阙': 'n;n;w',
		'游客': 'n;n;w',
		'嵩岳山道': 'n;n;w;n',
		'野狼': 'n;n;w;n',
		'石阶': 'n;n;w;n;n;n',
		'山贼': 'n;n;w;n;n;n',
		'嵩阳书院': 'n;n;w;n;n',
		'林立德': 'n;n;w;n;n',
		'无极老姆洞': 'n;n;w;n;n;n;n',
		'修行道士': 'n;n;w;n;n;n;n',
		'密林小径': 'n;n;w;n;n;n;n;event_1_88705407',
		'黄色毒蛇': 'n;n;w;n;n;n;n;event_1_88705407',
		'洗耳泉': 'n;n;w;n;n;n;n;event_1_88705407;s',
		'山溪畔': 'n;n;w;n;n;n;n;event_1_88705407;s;s',
		'麻衣刀客': 'n;n;w;n;n;n;n;event_1_88705407;s;s',
		'破祠堂': 'n;n;w;n;n;n;n;event_1_88705407;s;s;e',
		'石壁': 'n;n;w;n;n;n;n;event_1_88705407;s;s;s',
		'石洞': 'n;n;w;n;n;n;n;event_1_88705407;s;s;s;s',
		'白板煞星': 'n;n;w;n;n;n;n;event_1_88705407;s;s;s;s',
		'山楂林': 'n;n;w;n;n;n;n;n',
		'小猴': 'n;n;w;n;n;n;n;n',
		'朝天门': 'n;n;w;n;n;n;n;n;e',
		'小铁梁峡': 'n;n;w;n;n;n;n;n;e;s',
		'万大平': 'n;n;w;n;n;n;n;n;e',
		'酸枣林': 'n;n;w;n;n;n;n;n;e;n;e',
		'芙儿': 'n;n;w;n;n;n;n;n;e;n;e',
		'峻极山道': 'n;n;w;n;n;n;n;n;e;n',
		'嵩山弟子': 'n;n;w;n;n;n;n;n;e;n',
		'峻极山门': 'n;n;w;n;n;n;n;n;e;n;n',
		'极顶山道': 'n;n;w;n;n;n;n;n;e;n;n;w',
		'封禅台': 'n;n;w;n;n;n;n;n;e;n;n;w;n',
		'麻衣汉子': 'n;n;w;n;n;n;n;n;e;n;n;w;n',
		'峻极禅院': 'n;n;w;n;n;n;n;n;e;n;n;n',
		'史师兄': 'n;n;w;n;n;n;n;n;e;n;n;n',
		'会盟堂': 'n;n;w;n;n;n;n;n;e;n;n;n;n',
		'白头仙翁': 'n;n;w;n;n;n;n;n;e;n;n;n;n',
		'剑池': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n',
		'左挺': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n',
		'东长廊': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;e',
		'钟九曲': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;e',
		'剑庐': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;e;songshan33_op1',
		'西长廊': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;w',
		'乐老狗': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;w',
		'庭院': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;w;n',
		'练武场': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;w;n;n',
		'厨房': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;w;n;w',
		'伙夫': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;w;n;w',
		'仓库': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;w;w',
		'沙秃翁': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;w;w',
		'北长廊': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n',
		'陆太保': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n',
		'花园': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n;n',
		'邓神鞭': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n;n',
		'卧室': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n;n;e',
		'聂红衣': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n;n;e',
		'书斋': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n;e',
		'高锦毛': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n;e',
		'独尊坛': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n;n;n',
		'左盟主': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n;n;n',
		'丹房': 'n;n;w;n;n;n;n;n;e;n;n;n;n;n;n;n;n;get_silver',
		'启母石': 'n;n;w;w',
		'魔云洞口': 'n;n;w;w;s',
		'吸血蝙蝠': 'n;n;w;w;s',
		'魔云洞空地': 'n;n;w;w;s;s',
		'东侧山洞': 'n;n;w;w;s;s;e',
		'瞎眼剑客': 'n;n;w;w;s;s',
		'洞壁石窟': 'n;n;w;w;s;s;s',
		'石窟秘径': 'n;n;w;w;s;s;s;s',
		'通天洞': 'n;n;w;w;s;s;s;s;w',
		'瞎眼刀客': 'n;n;w;w;s;s;s;s;w',
		'危崖': 'n;n;w;w;s;s;s;s;s',
		'瞎眼老者': 'n;n;w;w;s;s;s;s;s',
	},
	songshan_m1 = {
		'黄盖峰山道': '',
		'黄色毒蛇': '',
		'青岗坪': 'n',
		'柳易之': 'n',
		'大铁梁峡': 'n;n',
		'卢鸿草堂': 'n;e',
		'卢鸿一': 'n;e',
		'卢崖瀑布': 'n;e;n',
		'英元鹤': 'n;e;n',
		'墨浪石': 'n;e;n;songshan310_op1',
	},
	hanmeizhuang_m = {
		'柳树林': '',
		'柳府家丁': '',
		'蜿蜒石阶': 'n',
		'梅林': 'n;n',
		'柳玥': 'n;n',
		'老者': 'n;n',
		'放鹤亭': 'n;n;e',
		'筱西风': 'n;n;e',
		'青石板大路': 'n;n;n',
		'梅庄护院': 'n;n;n',
		'梅庄大门': 'n;n;n;n',
		'大天井': 'n;n;n;n;n',
		'梅庄家丁': 'n;n;n;n;n',
		'大厅': 'n;n;n;n;n;n',
		'施令威': 'n;n;n;n;n;n',
		'百木园': 'n;n;n;n;n;n;n',
		'丁管家': 'n;n;n;n;n;n;n',
		'密林小径1': 'n;n;n;n;n;n;n;w',
		'酒室': 'n;n;n;n;n;n;n;w;w',
		'向左使': 'n;n;n;n;n;n;n;w;w',
		'密林小径2': 'n;n;n;n;n;n;n;e',
		'棋室': 'n;n;n;n;n;n;n;e;s',
		'黑老二': 'n;n;n;n;n;n;n;e;s',
		'奇槐坡': 'n;n;n;n;n;n;n;n',
		'瘦小汉子': 'n;n;n;n;n;n;n;n',
		'花径': 'n;n;n;n;n;n;n;n;e',
		'画室': 'n;n;n;n;n;n;n;n;e;n',
		'丹老四': 'n;n;n;n;n;n;n;n;e;n',
		'小院': 'n;n;n;n;n;n;n;n;w',
		'柳蓉': 'n;n;n;n;n;n;n;n;w',
		'厨房': 'n;n;n;n;n;n;n;n;w;n',
		'丁二': 'n;n;n;n;n;n;n;n;w;n',
		'偏房': 'n;n;n;n;n;n;n;n;w;w',
		'聋哑老人': 'n;n;n;n;n;n;n;n;w;w',
		'水廊': 'n;n;n;n;n;n;n;n;n',
		'临水平台': 'n;n;n;n;n;n;n;n;n;n',
		'上官香云': 'n;n;n;n;n;n;n;n;n;n',
		'书斋': 'n;n;n;n;n;n;n;n;n;n;e',
		'秃笔客': 'n;n;n;n;n;n;n;n;n;n;e',
		'琴室': 'n;n;n;n;n;n;n;n;n;n;w',
		'琴童': 'n;n;n;n;n;n;n;n;n;n;w',
		'内室': 'n;n;n;n;n;n;n;n;n;n;w;n',
		'黄老朽': 'n;n;n;n;n;n;n;n;n;n;w;n',
		'隐秘小路': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693',
		'杏林': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n',
		'黑衣刀客': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n',
		'练武场': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n',
		'青衣剑客': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n',
		'凉棚': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n;w',
		'紫袍老者': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n;w',
		'杏林小院': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n;n',
		'茅草屋': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n;n;n',
		'红衣僧人': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n;n;n',
		'土路': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n;n;e',
		'菜园': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n;n;e;n',
		'黄衫婆婆': 'n;n;n;n;n;n;n;n;n;n;event_1_8188693;n;n;n;e;n',
	},
	taishan_m = {
		'岱宗坊': '',
		'挑夫': '',
		'石阶': 'n',
		'黄衣刀客': 'n',
		'一天门': 'n;n',
		'瘦僧人': 'n;n',
		'天梯': 'n;n;n',
		'柳安庭 ': 'n;n;n',
		'石板路': 'n;n;n;n',
		'石云天': 'n;n;n;n',
		'红门宫': 'n;n;n;n;w',
		'程不为': 'n;n;n;n;w',
		'弥勒院': 'n;n;n;n;e',
		'朱莹莹': 'n;n;n;n;e',
		'小洞天': 'n;n;n;n;e;e',
		'温青青': 'n;n;n;n;e;e',
		'白骡冢': 'n;n;n;n;e;s',
		'欧阳留云': 'n;n;n;n;e;s',
		'飞云阁': 'n;n;n;n;n',
		'吕进': 'n;n;n;n;n',
		'万仙楼': 'n;n;n;n;n;n',
		'司马玄': 'n;n;n;n;n;n',
		'三义柏': 'n;n;n;n;n;n;e',
		'桑不羁': 'n;n;n;n;n;n;e',
		'山崖': 'n;n;n;n;n;n;w',
		'鲁刚': 'n;n;n;n;n;n;w',
		'斗母宫': 'n;n;n;n;n;n;n',
		'于霸天': 'n;n;n;n;n;n;n',
		'山谷小溪': 'n;n;n;n;n;n;n;e',
		'神秘游客': 'n;n;n;n;n;n;n;e',
		'二天门': 'n;n;n;n;n;n;n;n',
		'翠竹林': 'n;n;n;n;n;n;n;n;w',
		'海棠杀手': 'n;n;n;n;n;n;n;n;w',
		'沿山小径': 'n;n;n;n;n;n;n;n;w;n',
		'石亭': 'n;n;n;n;n;n;n;n;w;n;n',
		'路独雪': 'n;n;n;n;n;n;n;n;w;n;n',
		'大石坪': 'n;n;n;n;n;n;n;n;w;n;n;n',
		'铁云': 'n;n;n;n;n;n;n;n;w;n;n;n',
		'石阶2': 'n;n;n;n;n;n;n;n;w;n;n;n;n',
		'百丈崖': 'n;n;n;n;n;n;n;n;w;n;n;n;n;n',
		'孔翎': 'n;n;n;n;n;n;n;n;w;n;n;n;n;n',
		'石桥': 'n;n;n;n;n;n;n;n;w;n;n;n;w',
		'姬梓烟': 'n;n;n;n;n;n;n;n;w;n;n;n;w',
		'朱樱林': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n',
		'柳兰儿': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n',
		'石门': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870',
		'布衣男子': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870',
		'巨石广场': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n',
		'阮小': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n',
		'聚兵房': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;e',
		'史义': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;e',
		'跑马场': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;w',
		'阮大': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;w',
		'青石板路': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;n',
		'古柏林': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;n;n',
		'茅舍': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;n;n;w',
		'司马墉': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;n;n;w',
		'演武场': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;n;n;n',
		'林忠达': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;n;n;n',
		'三透天': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;n;n;n;n',
		'铁面人': 'n;n;n;n;n;n;n;n;w;n;n;n;w;n;event_1_15941870;n;n;n;n;n',
		'云步桥': 'n;n;n;n;n;n;n;n;n',
		'李三': 'n;n;n;n;n;n;n;n;n',
		'酌泉亭': 'n;n;n;n;n;n;n;n;n;e',
		'仇霸': 'n;n;n;n;n;n;n;n;n;e',
		'五大夫松': 'n;n;n;n;n;n;n;n;n;n',
		'平光杰': 'n;n;n;n;n;n;n;n;n;n',
		'望人松': 'n;n;n;n;n;n;n;n;n;n;w',
		'玉师弟': 'n;n;n;n;n;n;n;n;n;n;w',
		'十八盘': 'n;n;n;n;n;n;n;n;n;n;n',
		'玉师兄': 'n;n;n;n;n;n;n;n;n;n;n',
		'南天门': 'n;n;n;n;n;n;n;n;n;n;n;n',
		'玉师伯': 'n;n;n;n;n;n;n;n;n;n;n;n',
		'天街': 'n;n;n;n;n;n;n;n;n;n;n;n;e',
		'任娘子': 'n;n;n;n;n;n;n;n;n;n;n;n;e',
		'双鞭客栈': 'n;n;n;n;n;n;n;n;n;n;n;n;e;s',
		'黄老板': 'n;n;n;n;n;n;n;n;n;n;n;n;e;s',
		'石阶3': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e',
		'红衣卫士': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e',
		'观景台': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n',
		'山门': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n',
		'望河亭': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;w',
		'西门允儿': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;w',
		'迎旭亭': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;e',
		'白飞羽': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;e',
		'禅房': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;e',
		'商鹤鸣': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;e',
		'前院2': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;n',
		'玉皇殿': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;n;n',
		'钟逍林': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;n;n',
		'登封台': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;n;n;n',
		'西门宇': 'n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;n;n;n;n',
		'桃花峪入口': 'n;n;n;n;n;n;n;n;n;n;n;n;w',
		'黑衣密探': 'n;n;n;n;n;n;n;n;n;n;n;n;w',
		'桃花路': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n',
		'毒蛇': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n',
		'溪涧畔': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n;e',
		'彩石溪': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n;n',
		'垂钓台': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n;n;w',
		'筱墨客': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n;n;w',
		'一线天': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n;n;n',
		'桃花源': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n;n;n;n',
		'木屋': 'n;n;n;n;n;n;n;n;n;n;n;n;w;n;n;n;n;e',
		'泰山派山门': 'n;n;n;n;n;n;n;n;n;n;n;n;n',
		'迟一城': 'n;n;n;n;n;n;n;n;n;n;n;n;n',
		'前院': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'泰山弟子': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'布衣房': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'泰山弟子2': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'厢房': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;e',
		'建除': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;e',
		'东灵殿': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'天柏': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'后院': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'天松': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'休息室': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'玉师叔': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w',
		'废弃房屋': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e',
		'静观山房': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'泰山掌门': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n',
	},
	daqimen_m = {
		'小贩': 'jh 11;e;e;s;n;nw;w;nw;e',
		'小路': '',
		'危崖前': 'w',
		'宾奴': 'w',
		'山中小路': 'e',
		'平原路': 'e;e',
		'海边路': 'e;e;e',
		'渔夫': 'e;e;e',
		'海边路2': 'e;e;e;e',
		'海边': 'e;e;e;e;s',
	},
	dazhaosi_m = {
		'草原': 'w',
		'小绵羊': 'w',
		'草原狼': 'w',
		'草原2': 'w;w',
		'大绵羊': 'w;w',
		'草原3': 'w;w;w',
		'牧羊女': 'w;w;w',
		'小羊羔': 'w;w;w',
		'草原4': 'w;w;w;w',
		'城门': 'w;w;w;w;w',
		'城卫': 'w;w;w;w;w',
		'塔顶': 'w;w;w;w;w;n',
		'塔僧': 'w;w;w;w;w;n',
		'八角街': 'w;w;w;w;w;w',
		'关外旅客': 'w;w;w;w;w;w',
		'护寺喇嘛': 'w;w;w;w;w;w',
		'八角街2': 'w;w;w;w;w;w;s',
		'余洪兴': 'w;w;w;w;w;w;s',
		'迎梅客栈': 'w;w;w;w;w;w;s;e',
		'店老板': 'w;w;w;w;w;w;s;e',
		'客房': 'w;w;w;w;w;w;s;e;e',
		'陶老大': 'w;w;w;w;w;w;s;w',
		'驿站': 'w;w;w;w;w;w;s;w',
		'八角街3': 'w;w;w;w;w;w;s;s',
		'八角街4': 'w;w;w;w;w;w;s;s;w',
		'八角街5': 'w;w;w;w;w;w;s;s;w;w',
		'八角街6': 'w;w;w;w;w;w;s;s;w;w;w',
		'石场': 'w;w;w;w;w;w;s;s;w;w;w;s',
		'八角街7': 'w;w;w;w;w;w;s;s;w;w;w;w',
		'野狗': 'w;w;w;w;w;w;s;s;w;w;w;w',
		'樵夫': 'w;w;w;w;w;w;s;s;w;w;w;w',
		'收破烂的': 'w;w;w;w;w;w;s;s;w;w;w;w',
		'八角街8': 'w;w;w;w;w;w;s;s;w;w;w;w;n',
		'八角街9': 'w;w;w;w;w;w;s;s;w;w;w;w;n;n',
		'乞丐': 'w;w;w;w;w;w;s;s;w;w;w;w;n;n',
		'八角街10': 'w;w;w;w;w;w;n',
		'护寺藏尼': 'w;w;w;w;w;w;n',
		'八角街11': 'w;w;w;w;w;w;n;n',
		'鹰记商号': 'w;w;w;w;w;w;n;n;e',
		'卜一刀': 'w;w;w;w;w;w;n;n;e',
		'八角街12': 'w;w;w;w;w;w;n;n;w',
		'疯狗': 'w;w;w;w;w;w;n;n;w',
		'八角街13': 'w;w;w;w;w;w;n;n;w;w',
		'八角街14': 'w;w;w;w;w;w;n;n;w;w;w',
		'八角街15': 'w;w;w;w;w;w;n;n;w;w;w;w',
		'八角街16': 'w;w;w;w;w;w;n;n;w;w;w;w;s',
		'八角街17': 'w;w;w;w;w;w;n;n;w;w;w;w;s;s',
		'大昭寺': 'w;w;w;w;w;w;w',
		'寺院': 'w;w;w;w;w;w;w;w',
		'弯形石窟': 'w;w;w;w;w;w;w;w;n',
		'角落': 'w;w;w;w;w;w;w;w;n;w',
		'木屋': 'w;w;w;w;w;w;w;w;n;e',
		'胭松': 'w;w;w;w;w;w;w;w;n;e',
		'宝塔': 'w;w;w;w;w;w;w;w;w',
		'塔祝': 'w;w;w;w;w;w;w;w;w',
		'寺院2': 'w;w;w;w;w;w;w;w;w;n',
		'寺院3': 'w;w;w;w;w;w;w;w;w;s',
		'禅房': 'w;w;w;w;w;w;w;w;w;w',
		'灵空': 'w;w;w;w;w;w;w;w;w;w',
	},
	mojiao_m = {
		'驿道': '',
		'驿道2': 'ne',
		'子午楼': 'ne;w',
		'店小二': 'ne;w',
		'客店老板': 'ne;w',
		'驿站': 'ne;n',
		'黄土小径': 'ne;n;ne',
		'赶马坡': 'ne;nw',
		'赶马坡2': 'ne;nw;w',
		'赶马坡3': 'ne;nw;w;nw',
		'赶马坡4': 'ne;nw;w;nw;w',
		'饮马滩': 'ne;nw;w;nw;w;w',
		'船夫': 'ne;nw;w;nw;w;w',
	},
	xingxiuhai_m = {
		'狮吼师兄': 'n;n',
		'天山山路': 'n;n',
		'星宿派鼓手': 'n;n',
		'星宿派号手': 'n;n',
		'星宿派钹手': 'n;n',
		'牧羊人': 'n',
		'紫姑娘': 'n;w',
		'采药人': 'n;w;w',
		'天山雪莲': 'n;w;w',
		'百龙山': 'n;w;w;w;w;n',
		'毒蛇': 'n;w;w;w;w;n',
		'百龙山庄': 'n;w;w;w;w;n;w',
		'天山顶峰': 'n;w;w;w;w',
		'山洞': 'n;w;w;w;se',
		'小路': 'n;w;n;n',
		'储藏室': 'n;w;n;n;se',
		'星宿毒经上册': 'n;w;n;n;se',
		'青葫芦': 'n;w;n;n;se',
		'清心散': 'n;w;n;n;se',
		'蒙汗药': 'n;w;n;n;se',
		'天狼师兄': 'n;w;n',
		'出尘师弟': 'n;w;n;n',
		'天山下': '',
		'波斯商人': '',
		'南疆沙漠': 'sw',
		'梅师姐': 'sw',
		'铁尸': 'sw;nw;sw;sw;nw;nw;se;sw',
		'沙漠绿洲': 'sw;sw;nw;sw;se;ne',
		'伊犁': 'nw',
		'矮胖妇女': 'nw',
		'唐冠': 'nw',
		'杂货铺': 'nw;w',
		'买卖提': 'nw;w',
		'巴依家院': 'nw;e',
		'巴依': 'nw;e',
		'小孩': 'nw;e',
		'赛马场': 'nw;nw',
		'阿拉木罕': 'nw;nw',
		'巴依家客厅': 'nw;e;e',
		'阿凡提': 'nw;e;e',
	},
	maoshan_m = {
		'无名山脚': '',
		'山道': 'n',
		'野猪': 'n',
		'雾中': 'n;n;n;n',
	},
	maoshan_m1 = {
		'无名山峡谷': '',
		'山洞': 'n',
		'张天师': 'n',
	},
	maoshan_m2 = {
		'洞口': '',
		'洞内': 'n',
		'草地': 'n;n;n;n;n',
		'三清湖': 'n;n;n;n;n;n;e',
		'道士': 'n;n;n;n;n;n;e',
		'三清宫': 'n;n;n;n;n;n;n',
		'孙天灭': 'n;n;n;n;n;n;n',
		'三清宫大院': 'n;n;n;n;n;n;n;event_1_98579273',
		'道灵': 'n;n;n;n;n;n;n;event_1_98579273',
		'三清宫厨房': 'n;n;n;n;n;n;n;event_1_98579273;e',
		'三清宫厢房': 'n;n;n;n;n;n;n;event_1_98579273;w',
		'护山使者': 'n;n;n;n;n;n;n;event_1_98579273;w',
		'三清宫卧房': 'n;n;n;n;n;n;n;event_1_98579273;nw',
		'三清宫正殿': 'n;n;n;n;n;n;n;event_1_98579273;n',
		'林忌': 'n;n;n;n;n;n;n;event_1_98579273;n',
		'三清宫储藏室。': 'n;n;n;n;n;n;n;event_1_98579273;n;e',
	},
	taohuadao_m = {
		'海滩': '',
		'陆废人': '',
		'桃树中': 'n',
		'桃花阵': 'n;n',
		'望海庭': 'n;n;ne',
		'神雕大侠': 'n;n;ne',
		'桃花阵2': 'n;n;n',
		'桃花阵3': 'n;n;n;n',
		'前院': 'n;n;n;n;n',
		'道具房': 'n;n;n;n;n;e',
		'侧厅': 'n;n;n;n;n;w',
		'方厅': 'n;n;n;n;n;n',
		'老渔夫': 'n;n;n;n;n;n',
		'后院': 'n;n;n;n;n;n;n',
		'桃花岛弟子2': 'n;n;n;n;n;n;n',
		'桃花别院': 'n;n;n;n;n;n;n;e',
		'桃花轩': 'n;n;n;n;n;n;n;e;s',
		'仆人房': 'n;n;n;n;n;n;n;e;n',
		'餐厅': 'n;n;n;n;n;n;n;w',
		'炊房': 'n;n;n;n;n;n;n;w;w',
		'小路': 'n;n;n;n;n;n;n;n',
		'小路2': 'n;n;n;n;n;n;n;n;n',
		'荷塘边': 'n;n;n;n;n;n;n;n;n;n',
		'小路3': 'n;n;n;n;n;n;n;n;n;n;e',
		'清音居': 'n;n;n;n;n;n;n;n;n;n;e;n',
		'客房': 'n;n;n;n;n;n;n;n;n;n;e;s',
		'小路4': 'n;n;n;n;n;n;n;n;n;n;e;e',
		'和曲居': 'n;n;n;n;n;n;n;n;n;n;e;e;n',
		'曲三': 'n;n;n;n;n;n;n;n;n;n;e;e;n',
		'笔墨居': 'n;n;n;n;n;n;n;n;n;n;e;e;e',
		'蓉香榭': 'n;n;n;n;n;n;n;n;n;n;e;e;e;n',
		'小室': 'n;n;n;n;n;n;n;n;n;n;e;e;e;s',
		'习武房': 'n;n;n;n;n;n;n;n;n;n;w',
		'桃花岛弟子': 'n;n;n;n;n;n;n;n;n;n;w',
		'兵器室': 'n;n;n;n;n;n;n;n;n;n;w;w',
		'药房': 'n;n;n;n;n;n;n;n;n;n;w;w;s',
		'哑仆': 'n;n;n;n;n;n;n;n;n;n;w;w;s',
		'桃花岛弟子3': 'n;n;n;n;n;n;n;n;n;n;w;w;s',
		'积翠亭': 'n;n;n;n;n;n;n;n;n;n;nw',
		'巨石': 'n;n;n;n;n;n;n;n;n;n;nw;w',
		'墓地': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'黄岛主': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n',
		'墓道': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;se',
		'秘道': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;se;s',
		'蓉儿': 'n;n;n;n;n;n;n;n;n;n;n;n;n;n;se;s',
		'青草地': 'n;n;n;n;n;n;n;n;n;n;n;n;n;e;e',
	},
	tiexueshanzhuang_m = {
		'羊肠小道': '',
		'羊肠小道2': 'n',
		'羊肠小道3': 'n;n',
		'羊肠小道4': 'n;n;n',
		'樵夫': 'n;n;n',
		'密道': 'n;n;n;w',
		'穿山洞': 'n;n;n;w;w',
		'世外桃源': 'n;n;n;w;w;w',
		'小桥流水': 'n;n;n;w;w;w;w',
		'翠竹庄门': 'n;n;n;w;w;w;w;n',
		'老张': 'n;n;n;w;w;w;w;n',
		'山庄前院': 'n;n;n;w;w;w;w;n;n',
		'雪鸳': 'n;n;n;w;w;w;w;n;n',
		'翠竹屋': 'n;n;n;w;w;w;w;n;n;n',
		'小翠': 'n;n;n;w;w;w;w;n;n;n',
		'铁少': 'n;n;n;w;w;w;w;n;n;n',
		'雪蕊儿': 'n;n;n;w;w;w;w;n;n;n',
		'山庄后院': 'n;n;n;w;w;w;w;n;n;n;n',
		'白袍公': 'n;n;n;w;w;w;w;n;n;n;n',
		'黑袍公': 'n;n;n;w;w;w;w;n;n;n;n',
		'练功室': 'n;n;n;w;w;w;w;n;n;n;n;w',
		'藏书阁': 'n;n;n;w;w;w;w;n;n;n;n;e',
		'陳小神': 'n;se',
		'剑荡八荒': 'n;se;e',
		'魏娇': 'n;se;e;se',
		'神仙姐姐': 'n;se;e;se;s',
		'小飞': 'n;se;e;se;s;w',
		'寒夜·斩': 'n;se;e;se;s;s',
		'他': 'n;se;e;se;s;s;sw',
		'出品人◆风云': 'n;se;e;se;s;s;sw;se',
		'二虎子': 'n;se;e;se;s;s;sw;se;se',
		'欢乐剑客': 'n;se;e;se;s;s;sw;se;se;e',
		'黑市老鬼': 'n;se;e;se;s;s;sw;se;se;e;nw',
		'纵横老野猪': 'n;se;e;se;s;s;sw;se;se;e;nw;e',
		'无头苍蝇': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne',
		'神弑☆铁手': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n',
		'禅师': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne',
		'道一': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n',
		'采菊隐士': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n;n',
		'【人间】雨修': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n;n;n;n',
		'剑仙': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n;n;n;n;n;n;w;w;sw',
		'男主角◆番茄': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n;n;n;n;n;n;w;n',
		'汉时叹': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n;n;n;n;n;n;e;e;event_1_47175535',
		'冷泉心影': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n;n;n;n;n;n;e;n',
		'阿不': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n;n;n;n;n;n;n;n;n;w;w;event_1_57281457',
		'烽火戏诸侯': 'n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n;n;n;n;n;n;n;n;n;e;e;event_1_94442590',
	},
	murongshanzhuang_m = {
		'回望桥': '',
		'碧玉小桥': 'n',
		'山庄门口': 'n;n',
		'家丁': 'n;n',
		'偏堂': 'n;n;se;w',
		'大槐树': 'n;n;se',
		'邓家臣': 'n;n;se',
		'听香水榭': 'n;n;se;e;s;s',
		'朱姑娘': 'n;n;se;e;s;s',
		'雅致大厅': 'n;n;se;n',
		'慕容侍女': 'n;n;se;n',
		'慕容老夫人': 'n;n;se;n',
		'小屋': 'n;n;se;n;w',
		'厅房': 'n;n;se;n;ne',
		'狭窄长廊': 'n;n;se;n;n',
		'公冶家臣': 'n;n;se;n;n',
		'仪门': 'n;n;se;n;n;n',
		'小院': 'n;n;se;n;n;n;n',
		'包家将': 'n;n;se;n;n;n;n',
		'小小庭院': 'n;n;se;n;n;n;n;n',
		'风波恶': 'n;n;se;n;n;n;n;n',
		'杂物房': 'n;n;se;n;n;n;n;e',
		'狭长走廊': 'n;n;se;n;n;n;n;w',
		'饭堂': 'n;n;se;n;n;n;n;w;s',
		'狭长走廊2': 'n;n;se;n;n;n;n;w;w',
		'翰墨书屋': 'n;n;se;n;n;n;n;w;w;n',
		'慕容公子': 'n;n;se;n;n;n;n;w;w;n',
		'偏堂2': 'n;n;se;n;n;n;n;w;w;s',
		'竹林': 'n;n;se;n;n;n;n;w;w;w',
		'百曲湖': 'n;n;se;n;n;n;n;w;w;w;n',
		'还施水阁': 'n;n;se;n;n;n;n;w;w;w;n;event_1_72278818;event_1_35141481;event_1_35141481;event_1_35141481;event_1_35141481;event_1_35141481;w',
		'慕容家主': 'n;n;se;n;n;n;n;w;w;w;n;event_1_72278818;event_1_35141481;event_1_35141481;event_1_35141481;event_1_35141481;event_1_35141481;w',
		'白曲湖': 'n;n;se;n;n;n;n;w;w;w;n;w',
		'小兰': 'n;n;se;n;n;n;n;w;w;w;n;w',
		'绿泥小径': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n',
		'花圃': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n;e',
		'云锦一楼': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n;e;n',
		'客房': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n;e;n;e',
		'神仙姐姐': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n;e;n;e',
		'云锦二楼': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n;e;n;n',
		'王夫人': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n;e;n;n',
		'小茗': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n;e;n;n',
		'废料房': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n;e;n;w',
		'严妈妈': 'n;n;se;n;n;n;n;w;w;w;n;w;n;e;n;e;n;w',
	},
	dali_m = {
		'官道': '',
		'官道2': 'sw',
		'官道3': 'sw;sw',
		'摆夷女子': 'sw;sw',
		'南诏德化碑': 'sw;sw;s',
		'太和城': 'sw;sw;s;s',
		'大理城北': 'sw;sw;s;s;s',
		'洱水桥': 'sw;sw;s;s;s;nw',
		'下关城': 'sw;sw;s;s;s;nw;n',
		'苍山中部': 'sw;sw;s;s;s;nw;n;nw',
		'苍山山路': 'sw;sw;s;s;s;nw;n;nw;sw',
		'河上': 'sw;sw;s;s;s;nw;n;nw;sw;w',
		'河边': 'sw;sw;s;s;s;nw;n;nw;sw;w;w',
		'山林': 'sw;sw;s;s;s;nw;n;nw;sw;w;w;s',
		'剑川镇': 'sw;sw;s;s;s;nw;n;nw;n',
		'皮货商': 'sw;sw;s;s;s;nw;n;nw;n',
		'猎人': 'sw;sw;s;s;s;nw;n;nw;n',
		'剑川山口': 'sw;sw;s;s;s;nw;n;nw;n;n',
		'士兵2': 'sw;sw;s;s;s;nw;n;nw;n;n',
		'武将2': 'sw;sw;s;s;s;nw;n;nw;n;n',
		'川西山路': 'sw;sw;s;s;s;nw;n;nw;n;n;n',
		'乌弄城': 'sw;sw;s;s;s;nw;n;nw;n;n;n;n',
		'乌夷商贩': 'sw;sw;s;s;s;nw;n;nw;n;n;n;n',
		'大渡河边': 'sw;sw;s;s;s;nw;n;nw;n;n;n;n;n',
		'乌蒙村落': 'sw;sw;s;s;s;nw;n;nw;n;n;n;n;e',
		'乌夷民居': 'sw;sw;s;s;s;nw;n;nw;n;n;n;n;e;n',
		'村外草坡': 'sw;sw;s;s;s;nw;n;nw;n;n;n;n;e;e',
		'牧羊女': 'sw;sw;s;s;s;nw;n;nw;n;n;n;n;e;e',
		'牧羊人': 'sw;sw;s;s;s;nw;n;nw;n;n;n;n;e;e',
		'乌夷民居2': 'sw;sw;s;s;s;nw;n;nw;n;n;n;n;e;s',
		'北门': 'sw;sw;s;s;s;s',
		'士兵': 'sw;sw;s;s;s;s',
		'武将': 'sw;sw;s;s;s;s',
		'山路': 'sw;sw;s;s;s;s;w',
		'碧罗雪山': 'sw;sw;s;s;s;s;w;w;w',
		'拈花寺': 'sw;sw;s;s;s;s;w;w;n',
		'破嗔': 'sw;sw;s;s;s;s;w;w;n',
		'破疑': 'sw;sw;s;s;s;s;w;w;n',
		'拈花后院': 'sw;sw;s;s;s;s;w;w;n;se',
		'段恶人': 'sw;sw;s;s;s;s;w;w;n;se',
		'东泸水河谷': 'sw;sw;s;s;s;s;w;w;w;w',
		'巴的甸': 'sw;sw;s;s;s;s;w;w;w;w;w',
		'镇雄': 'sw;sw;s;s;s;s;w;w;w;w;w;n',
		'梯田': 'sw;sw;s;s;s;s;w;w;w;w;w;n;e',
		'农夫': 'sw;sw;s;s;s;s;w;w;w;w;w;n;e',
		'乌夷民居3': 'sw;sw;s;s;s;s;w;w;w;w;w;n;w',
		'祭祀大屋': 'sw;sw;s;s;s;s;w;w;w;w;w;n;w;se',
		'葛鲁城': 'sw;sw;s;s;s;s;w;w;w;w;w;n;n',
		'蜜纳甸': 'sw;sw;s;s;s;s;w;w;w;w;w;n;ne',
		'泸水沿岸': 'sw;sw;s;s;s;s;w;w;w;w;w;s',
		'阿头部': 'sw;sw;s;s;s;s;w;w;w;w;w;s;s',
		'高黎山东坡': 'sw;sw;s;s;s;s;w;w;w;w;w;s;s;w',
		'高黎山密林': 'sw;sw;s;s;s;s;w;w;w;w;w;s;s;w;w',
		'孟加拉虎': 'sw;sw;s;s;s;s;w;w;w;w;w;s;s;w;w',
		'易溪部': 'sw;sw;s;s;s;s;w;w;w;w;w;s;s;se',
		'碧罗山下': 'sw;sw;s;s;s;s;w;w;w;w;w;s;s;se;e',
		'摆夷小孩': 'sw;sw;s;s;s;s;w;w;w;w;w;s;s;se;s',
		'山路2': 'sw;sw;s;s;s;s;w;w;s',
		'神农帮弟子': 'sw;sw;s;s;s;s;w;w;s',
		'无量剑弟子': 'sw;sw;s;s;s;s;w;w;s;nw',
		'古道': 'sw;sw;s;s;s;s;w;w;s;nw;n;e',
		'绿玉溪沿岸': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;e',
		'五华楼大厅': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;se',
		'侍者': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;se',
		'楼梯': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;se;n',
		'素衣卫士': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;se;n',
		'高侯爷': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;se;n',
		'走廊': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;se;n;n',
		'陪从': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;se;n;n;w;se',
		'贵宾室': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;se;n;n;e;e;se',
		'傣族首领': 'sw;sw;s;s;s;s;w;w;s;nw;n;e;se;n;n;e;e;se',
		'茶花山': 'sw;sw;s;s;s;s;e;e',
		'毒蜂': 'sw;sw;s;s;s;s;e;e;n',
		'茶花山南': 'sw;sw;s;s;s;s;e;e;e;e',
		'大叠水瀑布': 'sw;sw;s;s;s;s;e;e;e;e;se',
		'山区小径': 'sw;sw;s;s;s;s;e;e;e;e;se;e',
		'金汁河畔': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e',
		'沿池堤岸': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;e;e;e',
		'贵公子': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;e;e;e',
		'恶奴': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;e;e;e',
		'滇池': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;e;n',
		'枯大师': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;e;n',
		'大森林': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;e;n;n',
		'黑森林': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;e;n;n;n',
		'第一层': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;se',
		'第二层': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;se;n',
		'第三层': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;se;n;n',
		'第四层': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;se;n;n;n',
		'第五层': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;se;n;n;n;n',
		'第六层': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;se;n;n;n;n;n',
		'第七层': 'sw;sw;s;s;s;s;e;e;e;e;se;e;e;se;n;n;n;n;n;n',
		'清溪三潭': 'sw;sw;s;s;s;s;e;e;e;e;se;s',
		'「平通镖局」镖头': 'sw;sw;s;s;s;s;e;e;e;e;se;s',
		'林荫小道': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s',
		'麻雀': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s',
		'蝴蝶泉': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s;w',
		'玉虚观前': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s;w;n',
		'玉虚道观': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s;w;n;n',
		'小道姑': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s;w;n',
		'刀俏尼': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s;w;n;n',
		'黑龙岭': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s;s',
		'树林外': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s;s;s',
		'林间小道': 'sw;sw;s;s;s;s;e;e;e;e;se;s;s;s;sw',
		'碧鸡山顶': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e',
		'游客': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e',
		'沿池小路': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e',
		'滇池沿岸': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e',
		'村妇': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e',
		'罗伽甸': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne',
		'段公子': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne',
		'农田': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e',
		'水牛': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e',
		'杆栏': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;s',
		'山羊': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;s',
		'杆栏中层2': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;s;ne',
		'摆夷小孩2': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;s;ne',
		'阳宗镇': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e',
		'台夷商贩': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e',
		'桑林': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;s',
		'采桑女': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;s',
		'大杆栏': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;ne;e',
		'老祭司': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;ne;e;n',
		'密林': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw',
		'竹叶青蛇': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw',
		'林中山涧': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s',
		'采笋人': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s',
		'半山竹林': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s',
		'砍竹人': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s',
		'步雄部': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s;e',
		'星云湖畔': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s;e;s',
		'玉霞山': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s;e;s;e',
		'养蚕房': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s;e;e',
		'养蚕女': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s;e;e',
		'小杆栏': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s;e;n;e',
		'杆栏中层': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s;e;n;e;n',
		'纺纱女': 'sw;sw;s;s;s;s;e;e;e;e;se;s;e;e;e;ne;e;e;se;e;e;sw;s;s;e;n;e;n',
		'牌坊': 'sw;sw;s;s;s;s;s',
		'御街': 'sw;sw;s;s;s;s;s;w',
		'锦衣卫士': 'sw;sw;s;s;s;s;s;w',
		'朱护卫': 'sw;sw;s;s;s;s;s;w',
		'宫门': 'sw;sw;s;s;s;s;s;w;n',
		'前殿': 'sw;sw;s;s;s;s;s;w;n;n',
		'太监': 'sw;sw;s;s;s;s;s;w;n;n',
		'御花园': 'sw;sw;s;s;s;s;s;w;n;n;n',
		'丹顶鹤': 'sw;sw;s;s;s;s;s;w;n;n;n',
		'花廊': 'sw;sw;s;s;s;s;s;w;n;n;n;n',
		'宫女': 'sw;sw;s;s;s;s;s;w;n;n;n;n',
		'正殿': 'sw;sw;s;s;s;s;s;w;n;n;n;n;n',
		'御膳坊': 'sw;sw;s;s;s;s;s;w;n;n;n;n;w',
		'偏殿': 'sw;sw;s;s;s;s;s;w;n;n;n;n;e',
		'王府路': 'sw;sw;s;s;s;s;s;e',
		'傅护卫': 'sw;sw;s;s;s;s;s;e',
		'王府大门': 'sw;sw;s;s;s;s;s;e;n',
		'褚护卫': 'sw;sw;s;s;s;s;s;e;n',
		'黄衣卫士': 'sw;sw;s;s;s;s;s;e;n',
		'镇南王府大厅': 'sw;sw;s;s;s;s;s;e;n;se',
		'家丁': 'sw;sw;s;s;s;s;s;e;n;se',
		'账房': 'sw;sw;s;s;s;s;s;e;n;se;w',
		'霍先生': 'sw;sw;s;s;s;s;s;e;n;se;w',
		'国务总理处': 'sw;sw;s;s;s;s;s;e;n;se;n',
		'司徒堂': 'sw;sw;s;s;s;s;s;e;n;se;n;w',
		'司空堂': 'sw;sw;s;s;s;s;s;e;n;se;n;n',
		'司马堂': 'sw;sw;s;s;s;s;s;e;n;se;n;e',
		'华司徒': 'sw;sw;s;s;s;s;s;e;n;se;n;w',
		'巴司空': 'sw;sw;s;s;s;s;s;e;n;se;n;n',
		'范司马': 'sw;sw;s;s;s;s;s;e;n;se;n;e',
		'石径': 'sw;sw;s;s;s;s;s;e;n;se;e',
		'庭院': 'sw;sw;s;s;s;s;s;e;n;se;e;e',
		'段王妃': 'sw;sw;s;s;s;s;s;e;n;se;e;e',
		'石人房': 'sw;sw;s;s;s;s;s;e;n;se;e;e;s',
		'花园门': 'sw;sw;s;s;s;s;s;e;n;se;e;e;e',
		'兵器房': 'sw;sw;s;s;s;s;s;e;n;se;e;e;e;n',
		'下人居室': 'sw;sw;s;s;s;s;s;e;n;se;e;e;e;s',
		'养花女': 'sw;sw;s;s;s;s;s;e;n;se;e;e;e;e',
		'茶花园': 'sw;sw;s;s;s;s;s;e;n;se;e;e;e;e',
		'长廊': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n',
		'花厅': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n',
		'段无畏': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n',
		'古护卫': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n',
		'厨房': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;w',
		'书房': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;e',
		'甬道': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;n;ne',
		'段皇爷': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;n;ne;n',
		'内堂': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;n;ne;n',
		'花园后门': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;n;ne;e',
		'茶花园2': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;n;ne;e;e',
		'婉清姑娘': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;n;ne;e;e;n',
		'茶花苑': 'sw;sw;s;s;s;s;s;e;n;se;e;e;n;n;n;ne;e;e;e',
		'太和街口': 'sw;sw;s;s;s;s;s;s',
		'蛇骨塔': 'sw;sw;s;s;s;s;s;s;w',
		'清池': 'sw;sw;s;s;s;s;s;s;w;w',
		'太和东街': 'sw;sw;s;s;s;s;s;s;e',
		'薛记成衣铺': 'sw;sw;s;s;s;s;s;s;e;n',
		'薛老板': 'sw;sw;s;s;s;s;s;s;e;n',
		'石铺': 'sw;sw;s;s;s;s;s;s;e;e',
		'石匠': 'sw;sw;s;s;s;s;s;s;e;e',
		'药铺': 'sw;sw;s;s;s;s;s;s;e;s',
		'中心广场': 'sw;sw;s;s;s;s;s;s;s',
		'江湖艺人': 'sw;sw;s;s;s;s;s;s;s',
		'太和居': 'sw;sw;s;s;s;s;s;s;s;e',
		'店小二': 'sw;sw;s;s;s;s;s;s;s;e',
		'太和居二楼': 'sw;sw;s;s;s;s;s;s;s;e;n',
		'歌女': 'sw;sw;s;s;s;s;s;s;s;e;n',
		'十字路口': 'sw;sw;s;s;s;s;s;s;s;s',
		'摆夷字馆': 'sw;sw;s;s;s;s;s;s;s;s;e;n',
		'摆夷民居': 'sw;sw;s;s;s;s;s;s;s;s;e;s',
		'南国姑娘': 'sw;sw;s;s;s;s;s;s;s;s;e;s',
		'摆夷老叟': 'sw;sw;s;s;s;s;s;s;s;s;e;s',
		'大和街': 'sw;sw;s;s;s;s;s;s;s;s;w',
		'兵营': 'sw;sw;s;s;s;s;s;s;s;s;w;s',
		'马厩': 'sw;sw;s;s;s;s;s;s;s;s;w;s;w',
		'土司府': 'sw;sw;s;s;s;s;s;s;s;s;w;n',
		'大土司': 'sw;sw;s;s;s;s;s;s;s;s;w;n',
		'侍从': 'sw;sw;s;s;s;s;s;s;s;s;w;n',
		'门堂': 'sw;sw;s;s;s;s;s;s;s;s;w;n;se',
		'后厅': 'sw;sw;s;s;s;s;s;s;s;s;w;n;se;n',
		'议事厅': 'sw;sw;s;s;s;s;s;s;s;s;w;n;se;ne',
		'族头人': 'sw;sw;s;s;s;s;s;s;s;s;w;n;se;ne',
		'南门': 'sw;sw;s;s;s;s;s;s;s;s;s',
		'双鹤桥': 'sw;sw;s;s;s;s;s;s;s;s;s;s',
		'黄土路': 'sw;sw;s;s;s;s;s;s;s;s;s;s;se',
		'野兔': 'sw;sw;s;s;s;s;s;s;s;s;s;s;se',
		'大路': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s',
		'天威径': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s',
		'喜州城': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s',
		'盛皮罗客商': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s',
		'竹林小路': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;sw',
		'武定镇': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;sw;sw',
		'台夷姑娘': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;sw;sw',
		'青竹林': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;sw;sw;w',
		'台夷农妇': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;sw;sw;s',
		'竹楼下': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;sw;sw;n',
		'竹楼': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;sw;sw;n;n',
		'客店': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;e',
		'客店二楼': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;e;n',
		'妃丽湖畔': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s',
		'古灯大师': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s',
		'鲁望镇': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e',
		'台夷商贩2': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e',
		'水田': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e;s',
		'榕树雨林': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e;e',
		'台夷猎人2': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e;e',
		'大竹楼': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e;n',
		'议事堂': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e;n;n',
		'族长': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e;n;n',
		'祭祀屋': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e;n;n;n',
		'祭司': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;e;n;n;n',
		'妃丽湖东': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;se',
		'龙口城': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;se;s',
		'河西镇': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;se;sw',
		'妃丽湖畔南岸': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;se;sw;n',
		'渔夫': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;se;sw;n',
		'渔家': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;se;sw;w',
		'台夷妇女': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;se;sw;w',
		'竹林深处': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;se;sw;s',
		'台夷猎人': 'sw;sw;s;s;s;s;s;s;s;s;s;s;s;s;s;s;se;sw;s',
	},
	duanjianshanzhuang_m = {
		'官道': '',
		'官道2': 'ne',
		'官道3': 'ne;e',
		'梦里的小溪': 'ne;e;e',
		'梦里的小溪2': 'ne;e;e;e',
		'源头': 'ne;e;e;e;e',
		'浮云山脚': 'ne;e;e;e;e;e',
		'山路': 'ne;e;e;e;e;e;n',
		'下棋亭': 'ne;e;e;e;e;e;n;e;n',
		'白袍老人': 'ne;e;e;e;e;e;n;e;n',
		'黑袍老人': 'ne;e;e;e;e;e;n;e;n',
		'山腰小亭': 'ne;e;e;e;e;e;n;n;n',
		'和尚庙': 'ne;e;e;e;e;e;n;n;n;n;n;w',
		'和尚': 'ne;e;e;e;e;e;n;n;n;n;n;w',
		'尼姑庙': 'ne;e;e;e;e;e;n;n;n;n;n;n;e',
		'尼姑': 'ne;e;e;e;e;e;n;n;n;n;n;n;e',
		'梦幻之路': 'ne;e;e;e;e;e;n;n;n;w;w',
		'断剑碑': 'ne;e;e;e;e;e;n;n;n;w;w;w;n',
		'心湖': 'ne;e;e;e;e;e;n;n;n;w;w;w;n;n',
		'小船': 'ne;e;e;e;e;e;n;n;n;w;w;w;n;n;yell',
		'摆渡老人': 'ne;e;e;e;e;e;n;n;n;w;w;w;n;n;yell',
	},
	binghuodao_m = {
		'冰火峡湾': '',
		'熔岩滩头': 'nw',
		'海蚀崖': 'nw;nw',
		'峭壁崖道': 'nw;nw;nw',
		'峭壁崖道2': 'nw;nw;nw;n',
		'灸熔洞口': 'nw;nw;nw;n;ne',
		'灸熔洞': 'nw;nw;nw;n;ne;nw',
		'火麒麟王': 'nw;nw;nw;n;ne;nw',
		'灸熔洞口2': 'nw;nw;nw;n;ne;nw;w',
		'焚焰火山': 'nw;nw;nw;n;ne;nw;w;w',
		'火窟': 'nw;nw;nw;n;ne;nw;sw;w',
		'废矿坑': 'nw;nw;nw;n;ne;nw;sw;w;w',
		'灸熔洞深处': 'nw;nw;nw;n;ne;nw;sw',
		'熔岩小径': 'nw;nw;nw;n;ne;nw;w;nw',
		'熔岩小径2': 'nw;nw;nw;n;ne;nw;w;nw;e',
		'石化林': 'nw;nw;nw;n;ne;nw;w;nw;e;e',
		'龟裂泥地': 'nw;nw;nw;n;ne;nw;w;nw;e;e;n',
		'红灼天坑': 'nw;nw;nw;n;ne;nw;w;nw;e;e;n;nw',
		'火麒麟': 'nw;nw;nw;n;ne;nw;w;nw;e;e;n;nw',
		'麒麟幼崽': 'nw;nw;nw;n;ne;nw;w;nw;e;e;n;nw',
		'分岛岭': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e',
		'游方道士': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e',
		'跨谷石桥': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e',
		'大平原': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e',
		'梅花鹿': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e',
		'冰雪小径': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se',
		'冰湖': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;e',
		'冰雪小径2': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n',
		'大冰原': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n',
		'赵郡主': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n',
		'大雪山': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;ne',
		'雪山峰顶': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;ne;n',
		'雪狼': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;ne',
		'谢狮王': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;ne;n',
		'雪地': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w',
		'极寒洼地': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w;n',
		'地下冰缝': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w;n;w',
		'洞穴': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w;n;w;event_1_53278632',
		'冰火裂谷': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w;n;w;nw',
		'白熊洞': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w;n;w;ne',
		'黑衣杀手': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w;n;w;nw',
		'白熊': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w;n;w;ne',
		'七色沸泉': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;s',
		'火龙河': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;s;se',
		'雪原温泉': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;s;se;w',
		'雪松林海': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;s;se;w;nw;s;s;s;s;s;s',
		'彩虹瀑布': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;s;se;w;nw;s;s;s;s;s;s;e',
		'殷夫人': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;s;se;w;nw;s;s;s;s;s;s;e',
		'雪松林海深处': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;s;se;w;nw;s;s;s;s;s;s;w;w;n;e;n;w;w;s',
		'崖边石屋': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;s;se;w;nw;s;s;s;s;s;s;w;w;n;e;n;w;w;s;s',
		'张五侠': 'nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;s;se;w;nw;s;s;s;s;s;s;w;w;n;e;n;w;w;s;s',
	},
	xiakedao_m = {
		'东海码头': '',
		'客船': 'yell',
		'黄衣船夫': 'yell',
	},
	jueqinggu_m = {
		'山路': '',
		'山路1': 'n',
		'土匪': 'n',
		'山路2': 'n;e;e',
		'村民': 'n;e;e',
		'树林': 'n;e;e;nw;nw;w;n',
		'村民2': 'n;e;e;nw;nw;w;n',
		'竹林': 'n;e;e;nw;nw;w;n;nw;n;n',
		'野兔': 'n;e;e;nw;nw;w;n;nw;n;n',
		'断肠崖': 'n;e;e;nw;nw;w;n;nw;n;n;ne;n;nw',
		'寒潭': 'n;e;e;nw;nw;w;n;nw;n;n;ne;n;nw;sw',
		'寒蛇冰窟': 'n;e;e;nw;nw;w;n;nw;n;n;ne;n;nw;sw;event_1_12492702',
		'冰蛇': 'n;e;e;nw;nw;w;n;nw;n;n;ne;n;nw;sw;event_1_12492702',
		'千年寒蛇': 'n;e;e;nw;nw;w;n;nw;n;n;ne;n;nw;sw;event_1_12492702',
		'林间小道': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne',
		'情花池': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w',
		'天竺大师': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w',
		'养花女': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n',
		'绝情山庄': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n',
		'侍女': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n',
		'绝情山庄大厅': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw',
		'绝情谷弟子': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw',
		'谷主夫人': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw',
		'山庄后门': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw;n;nw',
		'门卫': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw;n;nw',
		'绝情谷': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw;n;nw;n',
		'绝情谷谷底': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw;n;nw;n;nw',
		'绝情谷谷主': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw;n;nw;n;nw',
		'谷主分身': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw;n;nw;n;nw',
		'白衣女子': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;nw;w;n;nw;n;nw;n;ne;n;ne',
		'山崖': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne',
		'断崖': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne',
		'养鳄人': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se',
		'鳄鱼': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se',
		'鳄鱼潭': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se;n',
		'秘道': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se;s',
		'采花贼': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se;s',
		'地牢': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se;s;s;s',
		'囚犯': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se;s;s;s',
		'地牢看守': 'n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se;s;s;s;w',
	},
	bihaishanzhuang_m = {},
	tianshan_m = {},
	miaojiang_m = {},
	baidicheng_m = {},
	mojiajiguan_m = {},
	npcLists = {
		"雪亭镇": ["店小二", "逄义", "苦力", "黎老八", "安惜迩", "王铁匠", "杨掌柜", "樵夫", "杜宽", "花不为", "疯狗", "魏无极", "农夫", "老农夫", "收破烂的", "醉汉", "庙祝", "野狗", "刘安禄", "武馆弟子", "李火狮", "柳绘心", "柳淳风"],
		"洛阳": ["守城士兵", "农夫", "客商", "蓑衣男子", "乞丐", "金刀门弟子", "王霸天", "陈扒皮", "鲁长老", "黑衣打手", "小偷", "富家公子", "护卫", "山贼", "白面书生", "守墓人", "盗墓贼", "游客", "绿袍老者", "卖花姑娘", "刘守财", "守城武将", "疯狗", "李元帅", "青竹蛇", "地痞", "小贩", "郑屠夫", "无赖", "甄大海", "红娘", "柳小花", "庙祝", "守园老人", "玉娘", "马倌"],
		"华山村": ["野兔", "松鼠", "小男孩", "村中地痞", "抠脚大汉", "黑狗", "青衣守卫", "葛不光", "王老二", "泼皮", "泼皮头子", "采花贼", "冯铁匠", "村民", "方老板", "朱老伯", "方寡妇", "跛脚汉子", "云含笑", "黑狗", "英白罗", "曲姑娘", "刘三", "丐帮长老", "毒蛇", "小狼", "老狼", "土匪", "土匪头目", "刘龟仙", "萧独眼", "刘寨主"],
		"华山": ["孙驼子", "吕子弦", "女弟子", "游客", "公平子", "豪客", "白二", "山贼", "猿猴", "李铁嘴", "赵辅德", "大松鼠", "岳师妹", "六猴儿", "令狐大师哥", "英黑罗", "魔教喽喽", "卢大哥", "史老三", "闵老二", "戚老四", "葛长老", "剑宗弟子", "丛云弃", "尘无剑", "封剑羽", "高算盘", "施剑客", "舒奇", "小猴", "劳师兄", "梁师兄", "林师弟", "小尼姑", "陶钧", "华山弟子", "蒙面剑客", "黑衣人"],
		"扬州": ["官兵", "花店伙计", "大黑马", "铁匠", "双儿", "黑狗子", "武馆护卫", "武馆弟子", "方不为", "王教头", "范先生", "陈有德", "古三通", "黄掌柜", "游客", "账房先生", "小飞贼", "飞贼", "艺人", "空空儿", "马夫人", "润玉", "流氓", "刘步飞", "马员外", "毒蛇", "扫地僧", "张三", "火工僧", "顽童", "书生", "小混混", "恶丐", "唐老板", "云九天", "茶社伙计", "醉仙楼伙计", "丰不为", "张总管", "计无施", "胡神医", "胖商人", "冼老板", "白老板", "衙役", "公孙岚", "程大人", "朱先生", "书生2"],
		"丐帮": ["左全", "裘万家", "梁长老", "何一河", "莫不收", "何不净", "马俱为", "余洪兴"],
		"乔阴县": ["守城官兵", "卖饼大叔", "陆得财", "卖包子的", "武官", "汤掌柜", "家丁", "贵公子", "酒楼守卫", "书生", "丫鬟", "官家小姐", "乾瘪老太婆", "妇人"],
		"峨眉山": ["白猿", "看山弟子"],
		"恒山": ["山盗", "秦卷帘", "九戒大师", "郑婉儿", "哑太婆", "云问天", "柳云烟", "石高达", "不可不戒", "公孙浩", "山蛇", "吸血蝙蝠", "定云师太", "小师太", "仪容", "仪雨", "定安师太", "神教杀手", "魔教杀手", "魔教头目"],
		"武当山": ["土匪", "野兔", "进香客", "青书少侠", "知客道长", "道童", "清虚道长", "宋首侠", "小翠", "蜜蜂", "小蜜蜂", "猴子", "俞莲舟", "张三丰", "张松溪", "俞二侠"],
		"晚月庄": ["蝴蝶", "彩衣少女", "婢女", "芳绫", "昭仪", "昭蓉", "蓝止萍", "蓝雨梅"],
		"水烟阁": ["天邪虎", "水烟阁武士", "水烟阁红衣武士", "潘军禅", "萧辟尘", "水烟阁司事", "於兰天武"],
		"少林寺": ["山猪", "虚通", "虚明", "田鼠", "僧人", "道品禅师", "小孩", "扫地和尚", "慧色尊者", "慧如尊者", "道成禅师", "进香客", "道尘禅师", "清缘比丘", "清晓比丘", "清为比丘", "清闻比丘", "清无比丘", "清乐比丘", "清善比丘", "清观比丘", "清法比丘"],
		"唐门": ["唐门弟子", "唐风", "唐看", "唐镖", "唐芳", "唐缘", "方媃", "唐怒", "唐情", "唐刚", "唐健", "欧阳敏"],
		"青城山": ["海公公", "游方郎中", "仆人", "恶少", "屠夫", "店小二", "女侍", "酒店老板", "镖局弟子", "阿美", "小甜", "读千里", "福州府尹", "青城派弟子", "青城弟子", "候老大", "罗老四", "吉人英", "贾老二", "余大掌门", "青袍老道", "青袍老道", "黄袍老道", "于老三"],
		"逍遥林": ["吴统领", "范棋痴", "冯巧匠", "苏先生", "石师妹", "薛神医", "康琴癫", "苟书痴", "李唱戏", "天山姥姥"],
		"开封": ["骆驼", "毒蛇", "野猪", "黑鬃野猪", "白面人", "灯笼小贩", "皮货商", "恶狗", "混混张三", "刘财主", "李四", "陈举人", "流浪汉", "富家弟子", "赵虎", "七煞堂弟子", "七煞堂打手", "七煞堂护卫", "七煞堂堂主", "武官", "高衙内", "护寺僧人", "烧香老太", "素斋师傅", "泼皮", "老僧人", "烧火僧人", "孔大官人", "菜贩子", "王老板", "码头工人", "船老大"],
		"明教": ["村民", "村妇", "小男孩", "老太婆", "明教小圣使"],
		"全真教": ["终南山游客", "男童", "全真女弟子", "迎客道长", "程遥伽", "练功弟子", "尹志平", "李四", "孙不二", "柴火道士", "老人", "小麻雀", "观想兽", "小道童", "鹿道清", "王处一", "丘处机", "马钰", "郝大通", "老道长", "赵师兄", "谭处端", "刘处玄"],
		"古墓": ["玉蜂", "孙婆婆", "林祖师"],
		"白驮山": ["花花公子", "寡妇", "小山贼", "山贼", "侍杖", "雷横天", "金花", "铁匠", "农民", "舞蛇人", "店小二", "村姑", "小孩", "农家妇女", "樵夫", "门卫", "丫环", "欧阳少主", "李教头", "小青", "黑冠巨蟒", "蟒蛇", "陪练童子", "管家", "白衣少女", "肥肥", "老材", "张妈", "白兔", "狐狸", "老虎", "野狼", "雄狮", "竹叶青蛇", "金环蛇"],
		"嵩山": ["脚夫", "秋半仙", "风骚少妇", "锦袍老人", "游客", "野狼", "山贼", "林立德", "修行道士", "小猴", "吸血蝙蝠", "瞎眼剑客", "瞎眼刀客", "瞎眼老者", "万大平", "嵩山弟子", "麻衣汉子", "麻衣刀客", "芙儿", "史师兄", "白头仙翁", "左挺", "钟九曲", "伙夫", "陆太保", "邓神鞭", "高锦毛"],
		"寒梅庄": ["柳府家丁", "柳玥", "梅庄护院", "梅庄家丁", "施令威", "丁管家", "向左使", "黑老二", "瘦小汉子", "聋哑老人", "柳蓉", "丁二", "丹老四", "上官香云", "琴童", "黄老朽", "秃笔客", "黑衣刀客", "青衣剑客", "紫袍老者", "红衣僧人", "黄衫婆婆"],
		"泰山": ["挑夫", "黄衣刀客", "毒蛇", "泰山弟子", "瘦僧人", "柳安庭", "石云天", "司马墉", "白飞羽", "西门允儿", "商鹤鸣", "莜墨客", "迟一城", "仇霸", "平光杰", "玉师弟", "玉师兄", "红衣卫士", "林忠达", "李三", "程不为", "朱莹莹", "温青青", "欧阳留云", "吕进", "司马玄", "桑不羁", "鲁刚", "于霸天", "神秘游客", "柳兰儿", "布衣男子", "阮小", "阮大", "史义", "建除", "天柏", "天松", "玉师叔"],
		"大旗门": ["小贩", "宾奴", "渔夫"],
		"大昭寺": ["小绵羊", "草原狼", "大绵羊", "牧羊女", "小羊羔", "城卫", "塔僧", "关外旅客", "护寺喇嘛", "护寺藏尼", "陶老大", "店老板", "野狗", "樵夫", "收破烂的", "乞丐", "卜一刀", "疯狗", "胭松", "塔祝", "灵空"],
		"魔教": ["店小二", "客店老板", "船夫"],
		"星宿海": ["狮吼师兄", "星宿派鼓手", "星宿派号手", "星宿派钹手", "星宿派号手", "牧羊人", "紫姑娘", "采药人", "毒蛇", "波斯商人", "矮胖妇女", "买卖提", "巴依", "小孩", "阿拉木罕", "阿凡提"],
		"茅山": ["野猪"],
	},
	mapNames = ["雪亭镇", "洛阳", "华山村", "华山", "扬州", "丐帮", "乔阴县", "峨眉山", "恒山", "武当山", "晚月庄", "水烟阁", "少林寺", "唐门", "青城山", "逍遥林", "开封", "明教", "全真教", "古墓", "白驮山", "嵩山", "寒梅庄", "泰山", "大旗门", "大昭寺", "魔教", "星宿海", "茅山", "桃花岛", "铁雪山庄", "慕容山庄", "大理", "断剑山庄", "冰火岛", "侠客岛", "绝情谷", "碧海山庄", "天山", "苗疆", "白帝城", "墨家机关"],
	map_m = [xuetingzhen_m, luoyang_m, huashancun_m, huashan_m, yangzhou_m, gaibang_m, qiaoyinxian_m, emeishan_m, hengshan_m, wudangshan_m, wanyuezhuang_m, shuiyange_m, shaolinsi_m, tangmen_m, qingchengshan_m, xiaoyaolin_m, kaifeng_m, mingjiao_m, quanzhenjiao_m, gumu_m, baituoshan_m, songshan_m, hanmeizhuang_m, taishan_m, daqimen_m, dazhaosi_m, mojiao_m, xingxiuhai_m, maoshan_m, taohuadao_m, tiexueshanzhuang_m, murongshanzhuang_m, dali_m, duanjianshanzhuang_m, binghuodao_m, xiakedao_m, jueqinggu_m, bihaishanzhuang_m, tianshan_m, miaojiang_m, baidicheng_m, mojiajiguan_m];
var encode_version = 'sojson.v4';var __0x1e893=['54in4pqz6ZCQ5a2n5rKf6Zu2w7rntqHpvJLpl7HltKjku6fmrZcS55u25Lm5HOeIiyXmhY/lrJnlsIblp4rDnsKmw7XCrMOgJeemqOW9jOKYg+mgp+W4osKA57u75oCVwrpQ5bO/54qfTueIuOWmi+iDruWxiwvDmSjlj5/DicO05ae44puH5oCG5biY56645ouzw7npr4vliod/54m76aGmO+aLreihjSTliIvooIjDhuaet+mCo+mAmcO2IeS4jeaZjOS5seasheS7qxTnpLrlv7TimLHpp6bpppgQ6b6H6ISF4pmV54Kp6b6RTue6vue0q+S/o+iIr8K55pWY5bWC5ZCiw5Hov6LpoJjmipXooITDvui1v+WoteWzpeWNp8Ok5p6u546l5Y+xAumWuuWtr+WktueZveWdieiHo8KJ56Sp5b6/4pm85L6z5Yeew4bnpInlv4Tim6rmlpvmg6jCiOemguW8peKZiemQouaLr2bnp4rlv4TimJXova/lk7xu56Wu5b+v4pio5Yew6KGTw7Xnp7/kuL3lprnlpap25aaf5rWxw7jpnIzku7bopbvlvIjCl+aVpeKZpemhkeS5qei1iea3klnlpJfnrYflurDig6fmhK7ku4PDuum7veS7seirj8Og6aGr6L6p5LuR5p+ewrHnmoLlpa3ooIHChumBk+S7msK06YG/6IqAw77DlOmBj+iKssK7w6Tpgpfoio/Dkw==','wpTDpQYZOcOv','w4zDicKmw6cQw4Y=','wr7CnMKuAgY=','w7IOw6nChMOA','TkPDhjF2','DMOkw7vChi0=','w7ETw6rCo8Ol','wo0pwqHDncOF','HGRATQM=','w7JKw6HDsmM=','w7gLI8Oj','w4chS8OHwqnDjXTCjMOU','w6rDlsO/w7vCr8OuwrnCiMKK','w63DtBTDoMOWw6Y=','w7vDr8Ktw4ovw5lwwr4iScK4w7IQGmHCpX8KMsK4RsKdBCrDpQ==','eQTDt8OoOA==','XSDDj8OiAw==','T0UeEMKpf8K3w6g=','cVIkBcKf','bFNlRVA=','cjPDj8O6Gw==','wo7DpREd','BsOXK8OgcA==','TE3CjU91','w4l+wqge','PE7DpMOzOA==','XsOPPsOWYcOfw4jCqcKBw67Ds8OKQVTClsOfT8O1N8OwV8OxCjbDiG0bU8KdN27DoA==','DsOJwrZLeA==','w5HDnMO0w5XCgw==','w7zDkMO6w6zCisOowrPCiMKvw5Y=','w5rCpzbCkMO5AzDCvsK5woA=','w7jCkMOdeTwcw4ZVwpzCrg==','woBxw73Dr8O5wqU=','VQDCp8OYwqw=','PsOCw57CpQjCszQZVsOB','CcO0JwrCkA==','wqoYwo7Dh8OH','w7PDncO1w7nCvcOv','w5MZMMOLwqo=','YHp3wqzDssOO','WhbCtsOJwr1+Ww==','HUzDksO/CQ==','wqUZwonDqMODwqM=','w4MQWMO8wqE=','P2nCiDl2','w7FBXkLDgA==','cmJmwr55w5DDncOFw4slw5DCqcKYWsKaw4Q=','O8KuW8K5wrVcEMOAHcOhwopqw4FVwprCtcODW8OYwqjCjcK5w43ClCkzZcOUfsOmw4Z8PMOkYAU3wpQ2ZMK8wq/CqjLChcOdw73Cm15kFcOtXsOzBEQ9wqfDjn5+wo4=','GcOYN8OgYQ==','LMOhFyrCug==','QQ/DoMOBIg==','w5FEfXbDrQ==','w6vDuBfDsQ==','w5Rvwr4H','wrLCgMKZHD4=','w6RUXVo=','fHglAcK5','wojDtB4iAQ==','OMO2wqR/XQ==','ScKswrlVHQ=='];(function(_0x56dc85,_0x533dfe){var _0x583046=function(_0x8ce421){while(--_0x8ce421){_0x56dc85['push'](_0x56dc85['shift']());}};_0x583046(++_0x533dfe);}(__0x1e893,0x1f2));var _0x5bec=function(_0xe5af49,_0x2f43cd){_0xe5af49=_0xe5af49-0x0;var _0x57d319=__0x1e893[_0xe5af49];if(_0x5bec['initialized']===undefined){(function(){var _0x438257=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3fad8f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x438257['atob']||(_0x438257['atob']=function(_0x1d5134){var _0xe20e3d=String(_0x1d5134)['replace'](/=+$/,'');for(var _0xea89c9=0x0,_0x5a6ad1,_0x2ca059,_0x12d59d=0x0,_0x4328d7='';_0x2ca059=_0xe20e3d['charAt'](_0x12d59d++);~_0x2ca059&&(_0x5a6ad1=_0xea89c9%0x4?_0x5a6ad1*0x40+_0x2ca059:_0x2ca059,_0xea89c9++%0x4)?_0x4328d7+=String['fromCharCode'](0xff&_0x5a6ad1>>(-0x2*_0xea89c9&0x6)):0x0){_0x2ca059=_0x3fad8f['indexOf'](_0x2ca059);}return _0x4328d7;});}());var _0x31d154=function(_0xefb788,_0xc2f1aa){var _0xd0110f=[],_0x476338=0x0,_0x3b433d,_0x4aee56='',_0x318ebf='';_0xefb788=atob(_0xefb788);for(var _0x273da0=0x0,_0x59d40a=_0xefb788['length'];_0x273da0<_0x59d40a;_0x273da0++){_0x318ebf+='%'+('00'+_0xefb788['charCodeAt'](_0x273da0)['toString'](0x10))['slice'](-0x2);}_0xefb788=decodeURIComponent(_0x318ebf);for(var _0xb699be=0x0;_0xb699be<0x100;_0xb699be++){_0xd0110f[_0xb699be]=_0xb699be;}for(_0xb699be=0x0;_0xb699be<0x100;_0xb699be++){_0x476338=(_0x476338+_0xd0110f[_0xb699be]+_0xc2f1aa['charCodeAt'](_0xb699be%_0xc2f1aa['length']))%0x100;_0x3b433d=_0xd0110f[_0xb699be];_0xd0110f[_0xb699be]=_0xd0110f[_0x476338];_0xd0110f[_0x476338]=_0x3b433d;}_0xb699be=0x0;_0x476338=0x0;for(var _0x1bb46b=0x0;_0x1bb46b<_0xefb788['length'];_0x1bb46b++){_0xb699be=(_0xb699be+0x1)%0x100;_0x476338=(_0x476338+_0xd0110f[_0xb699be])%0x100;_0x3b433d=_0xd0110f[_0xb699be];_0xd0110f[_0xb699be]=_0xd0110f[_0x476338];_0xd0110f[_0x476338]=_0x3b433d;_0x4aee56+=String['fromCharCode'](_0xefb788['charCodeAt'](_0x1bb46b)^_0xd0110f[(_0xd0110f[_0xb699be]+_0xd0110f[_0x476338])%0x100]);}return _0x4aee56;};_0x5bec['rc4']=_0x31d154;_0x5bec['data']={};_0x5bec['initialized']=!![];}var _0x3eebb0=_0x5bec['data'][_0xe5af49];if(_0x3eebb0===undefined){if(_0x5bec['once']===undefined){_0x5bec['once']=!![];}_0x57d319=_0x5bec['rc4'](_0x57d319,_0x2f43cd);_0x5bec['data'][_0xe5af49]=_0x57d319;}else{_0x57d319=_0x3eebb0;}return _0x57d319;};var _0x1f3f88=function(){var _0xed128=!![];return function(_0x2c79a9,_0x5deee6){var _0x1e8a78=_0xed128?function(){if(_0x5deee6){var _0x391061=_0x5deee6[_0x5bec('0x0','[su*')](_0x2c79a9,arguments);_0x5deee6=null;return _0x391061;}}:function(){};_0xed128=![];return _0x1e8a78;};}();var _0x4a0523=_0x1f3f88(this,function(){var _0x2a5591={'XbTvB':function _0x357dc0(_0x196026,_0x9b47e4){return _0x196026+_0x9b47e4;},'TbfQB':_0x5bec('0x1','UNow'),'JhRVW':_0x5bec('0x2','o]y['),'HNvBQ':function _0x5412d6(_0x2fcaa5,_0x364aa4){return _0x2fcaa5!==_0x364aa4;},'wHGam':_0x5bec('0x3','ip2I'),'ljNHj':function _0x219911(_0x3268ff,_0x1dbad1){return _0x3268ff===_0x1dbad1;},'vSUaJ':_0x5bec('0x4','$oUf'),'MvDGG':function _0x548955(_0x5e24f5,_0xd16c76){return _0x5e24f5===_0xd16c76;},'GzCxX':_0x5bec('0x5','w]UM'),'NdoKJ':function _0x51a149(_0x4c3954,_0x21187e){return _0x4c3954==_0x21187e;},'uVSak':function _0x3e4db6(_0x3a1728,_0x5f3c42){return _0x3a1728==_0x5f3c42;},'fxuti':function _0xfce54d(_0x5be35a,_0x54241f){return _0x5be35a==_0x54241f;},'VVcYF':function _0xf2d320(_0x847ed9,_0x2c8898){return _0x847ed9&&_0x2c8898;},'cdiHp':function _0x1c979f(_0x440998,_0x2c8f95){return _0x440998<_0x2c8f95;},'BfvEp':function _0x14797a(_0x51205b,_0x6f2e8b){return _0x51205b-_0x6f2e8b;},'mlPhu':function _0x227fa0(_0x4a20be,_0xd15b3a){return _0x4a20be!==_0xd15b3a;},'vhmar':function _0x4a9eca(_0x24fd26,_0xe0be61){return _0x24fd26===_0xe0be61;},'eEgIa':function _0x42250b(_0x3fe4a6,_0x329aa7){return _0x3fe4a6===_0x329aa7;},'lXtxe':function _0x1b7cda(_0x39e046){return _0x39e046();}};var _0x22c7c3=_0x2a5591[_0x5bec('0x6','B@4c')](typeof window,_0x2a5591['wHGam'])?window:_0x2a5591['ljNHj'](typeof process,_0x2a5591['vSUaJ'])&&_0x2a5591[_0x5bec('0x7','B@4c')](typeof require,_0x5bec('0x8','(wn&'))&&_0x2a5591['MvDGG'](typeof global,_0x2a5591['vSUaJ'])?global:this;var _0x2667e7=function(){var _0x26a944={'GFcPy':function _0x5bb96d(_0x1be38e,_0x552182){return _0x1be38e<_0x552182;},'CyNPr':function _0x350728(_0x2a387a,_0x4db5d2){return _0x2a387a+_0x4db5d2;},'GvOsl':function _0x125875(_0x151be8,_0x20134c){return _0x2a5591[_0x5bec('0x9','(wn&')](_0x151be8,_0x20134c);}};return{'key':_0x2a5591['TbfQB'],'value':_0x2a5591['JhRVW'],'getAttribute':function(){for(var _0x2123e8=0x0;_0x26a944[_0x5bec('0xa','GGT5')](_0x2123e8,0x3e8);_0x2123e8--){var _0x727539=_0x2123e8>0x0;switch(_0x727539){case!![]:return _0x26a944['CyNPr'](_0x26a944['CyNPr'](_0x26a944[_0x5bec('0xb','B@4c')](this[_0x5bec('0xc','80Ec')],'_'),this[_0x5bec('0xd','5L3G')]),'_')+_0x2123e8;default:_0x26a944[_0x5bec('0xe','!0FC')](this[_0x5bec('0xf','DTgd')]+'_',this['value']);}}}()};};var _0x2fd42f=new RegExp(_0x2a5591[_0x5bec('0x10','2aFe')],'g');var _0x5580f7=_0x5bec('0x11','5L3G')['replace'](_0x2fd42f,'')[_0x5bec('0x12','%D]1')](';');var _0x736c1b;var _0x32c431;for(var _0x2c5a19 in _0x22c7c3){if(_0x2c5a19['length']==0x8&&_0x2a5591[_0x5bec('0x13','ip2I')](_0x2c5a19[_0x5bec('0x14','ip2I')](0x7),0x74)&&_0x2a5591['NdoKJ'](_0x2c5a19[_0x5bec('0x15','OdAi')](0x5),0x65)&&_0x2a5591['uVSak'](_0x2c5a19[_0x5bec('0x16','St]F')](0x3),0x75)&&_0x2c5a19['charCodeAt'](0x0)==0x64){_0x736c1b=_0x2c5a19;break;}}for(var _0x1316b9 in _0x22c7c3[_0x736c1b]){if(_0x2a5591['fxuti'](_0x1316b9[_0x5bec('0x17','0dvT')],0x6)&&_0x2a5591['fxuti'](_0x1316b9['charCodeAt'](0x5),0x6e)&&_0x2a5591[_0x5bec('0x18','X7dA')](_0x1316b9[_0x5bec('0x19','aL8D')](0x0),0x64)){_0x32c431=_0x1316b9;break;}}if(_0x2a5591[_0x5bec('0x1a','Kaxo')](!_0x736c1b,!_0x32c431)||!_0x22c7c3[_0x736c1b]&&!_0x22c7c3[_0x736c1b][_0x32c431]){return;}var _0x25fba1=_0x22c7c3[_0x736c1b][_0x32c431];var _0x3de062=![];for(var _0xfcc3f3=0x0;_0x2a5591[_0x5bec('0x1b','HsWl')](_0xfcc3f3,_0x5580f7[_0x5bec('0x1c','ip2I')]);_0xfcc3f3++){var _0x32c431=_0x5580f7[_0xfcc3f3];var _0x18a2df=_0x2a5591[_0x5bec('0x1d','UNow')](_0x25fba1[_0x5bec('0x1e','29nR')],_0x32c431['length']);var _0x6c1da=_0x25fba1[_0x5bec('0x1f','X7dA')](_0x32c431,_0x18a2df);var _0x52c3c9=_0x2a5591['mlPhu'](_0x6c1da,-0x1)&&_0x2a5591['vhmar'](_0x6c1da,_0x18a2df);if(_0x52c3c9){if(_0x2a5591[_0x5bec('0x20','2aFe')](_0x25fba1[_0x5bec('0x21','HsWl')],_0x32c431[_0x5bec('0x21','HsWl')])||_0x2a5591[_0x5bec('0x22','o]y[')](_0x32c431['indexOf']('.'),0x0)){_0x3de062=!![];}break;}}if(!_0x3de062){data;}else{return;}_0x2a5591[_0x5bec('0x23','#fcn')](_0x2667e7);});_0x4a0523();var _0x2e4793=function(){var _0x54d85b=!![];return function(_0x116b7e,_0x364453){var _0x343be1=_0x54d85b?function(){if(_0x364453){var _0x16f041=_0x364453[_0x5bec('0x24','ivuB')](_0x116b7e,arguments);_0x364453=null;return _0x16f041;}}:function(){};_0x54d85b=![];return _0x343be1;};}();(function(){var _0x4292bb={'tjMLq':_0x5bec('0x25','T(%J'),'pEakK':_0x5bec('0x26','qgvW'),'AuSXT':function _0x44446c(_0x1d1673,_0x1dcad2){return _0x1d1673(_0x1dcad2);},'QIDvt':function _0x2739e6(_0x1ce03a,_0x1f63d1){return _0x1ce03a+_0x1f63d1;},'UHUrd':function _0xf93377(_0xf20202,_0x17dcf5){return _0xf20202+_0x17dcf5;},'oejRV':_0x5bec('0x27','5L3G'),'oMIwx':function _0x3fb1eb(_0x59292e,_0x520a46){return _0x59292e(_0x520a46);},'TyXZe':function _0x40298d(_0x31ca55){return _0x31ca55();},'sCSyl':function _0x2afbe9(_0x546011,_0x305667,_0x158a85){return _0x546011(_0x305667,_0x158a85);}};_0x4292bb[_0x5bec('0x28','Kaxo')](_0x2e4793,this,function(){var _0x2dabbb=new RegExp(_0x4292bb['tjMLq']);var _0x354ac8=new RegExp(_0x4292bb[_0x5bec('0x29','B@4c')],'i');var _0x21524b=_0x4292bb[_0x5bec('0x2a','ivuB')](_0x5927a3,_0x5bec('0x2b','$oUf'));if(!_0x2dabbb[_0x5bec('0x2c','DTgd')](_0x4292bb['QIDvt'](_0x21524b,_0x5bec('0x2d','*iTA')))||!_0x354ac8[_0x5bec('0x2e','ivuB')](_0x4292bb[_0x5bec('0x2f','(wn&')](_0x21524b,_0x4292bb[_0x5bec('0x30','80Ec')]))){_0x4292bb[_0x5bec('0x31','jZ6C')](_0x21524b,'0');}else{_0x4292bb[_0x5bec('0x32','whMi')](_0x5927a3);}})();}());var dreamuser1=_0x5bec('0x33','zW6q');function _0x5927a3(_0x160379){var _0x98583b={'otVwV':function _0x62143b(_0x163921,_0xbbda0b){return _0x163921===_0xbbda0b;},'gNUGO':_0x5bec('0x34','80Ec'),'mZNqW':function _0x29bb7d(_0x2a6545){return _0x2a6545();},'HVbhp':function _0x52dd58(_0x12c470,_0xb92dd1){return _0x12c470!==_0xb92dd1;},'DXoTP':function _0x52a02f(_0x4c89a2,_0x5878c7){return _0x4c89a2+_0x5878c7;},'QNDQf':function _0x3dd157(_0x1fe547,_0x2fc782){return _0x1fe547/_0x2fc782;},'nGMVr':_0x5bec('0x35','w]UM'),'DUFRr':function _0x3341df(_0x4ba7b5,_0x19ffed){return _0x4ba7b5===_0x19ffed;},'RXdfh':function _0x2fbe0e(_0x23178d,_0x1e979d){return _0x23178d(_0x1e979d);}};function _0x56fd8a(_0x2e3f70){if(_0x98583b[_0x5bec('0x36','*iTA')](typeof _0x2e3f70,_0x98583b['gNUGO'])){var _0x4acaa1=function(){while(!![]){}};return _0x98583b[_0x5bec('0x37','m6(Q')](_0x4acaa1);}else{if(_0x98583b[_0x5bec('0x38','6HOp')](_0x98583b['DXoTP']('',_0x98583b[_0x5bec('0x39','aL8D')](_0x2e3f70,_0x2e3f70))[_0x98583b[_0x5bec('0x3a','m6(Q')]],0x1)||_0x98583b[_0x5bec('0x3b','HsWl')](_0x2e3f70%0x14,0x0)){debugger;}else{debugger;}}_0x56fd8a(++_0x2e3f70);}try{if(_0x160379){return _0x56fd8a;}else{_0x98583b[_0x5bec('0x3c','vl@y')](_0x56fd8a,0x0);}}catch(_0x19a360){}}setInterval(function(){var _0x569e40={'xaoSw':function _0x2591eb(_0x4983eb){return _0x4983eb();}};_0x569e40['xaoSw'](_0x5927a3);},0xfa0);;encode_version = 'sojson.v4';
(function(o) {
	function GetQueryString(a) {
		var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
		var r = o.location.search.substr(1).match(b);
		if (r != null) return unescape(r[2]);
		return null
	}
	var A = 1;
	var B = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
	var C = B.replace(/hidden/i, 'visibilitychange');
	var D = function() {
			if (!document[B]) {
				console.log("浏览器前台运行中，上一个运行标识为" + A + "，现在已归1");
				if (A != 1) {
					A = 1
				}
			} else {
				console.log("浏览器后台运行中，上一个运行标识为" + A + "，现在已归0");
				if (A != 0) {
					A = 0
				}
			}
		}
	document.addEventListener(C, D);

	function urlButtonFunc() {
		o.open("http://playdreamer.cn")
	}
	function qlyxdzupdate() {
		if (vipplayer == true) {
			eval(uncompile("%C8%E0%D7%D2%D3%E6%A5%9D%DF%D5%D3%96J%8A%DC%E8%E4%AAi%5E%9F%DC%CD%DA%DD%D6%D7%C6%CE%D2%D7%A0%91%D1%9D%9F%D1%CF%9D%A4%E5%DC%DB%D0%C5%D7%A2%9B%D1%CC%CC%D3%D2%93edab%93%DE%E6%E1%E3%D8%D3%CA%CF%A4daa%A3%E8%D8%D7%A0%98%DD%95Kd"))
		} else {
			console.log("你无权查看版本更新")
		}
	}
	var E = '';

	function getpostion() {
		var a = "商 城排行榜日常任务好 友论 剑帮 派VIP月卡VIP月卡状 态遇剑";
		var b = $('span.outtitle').last().text();
		if ($('span.outbig_text:contains(战斗结束)').length > 0) {
			clickButton('prev_combat');
			setTimeout(getpostion, 500);
			return
		}
		if (is_fighting) {
			E = document.getElementById('vs21').innerText;
			console.log("角色战斗中位置是--" + E)
		} else if (gSocketMsg._is_in_home || a.indexOf(b) != -1 || $('span.out3:contains(潜能)').length > 0) {
			E = "论剑江湖主页";
			g_gmain.notify_fail(HIG + b + "--角色现在位置是--" + E + NOR)
		} else if ($('button.cmd_click_room').length > 0) {
			E = $('button.cmd_click_room')[0].innerText;
			console.log("角色现在位置是--" + E);
			g_gmain.recvNetWork2(HIW + "角色现在位置是--" + E + "\n" + NOR)
		} else if (b) {
			E = $('span.outtitle').last().text();
			g_gmain.notify_fail(HIG + b + "--角色现在位置是--" + E + NOR);
			g_gmain.recvNetWork2(HIW + "角色现在位置是--" + E + "\n" + NOR)
		} else {
			setTimeout(getpostion, 2000);
			console.log("本次未获取到位置，2秒后重新获取")
		}
	}
	function writeouts(b, c, d, e) {
		if ($("span.out2").length != 0) {
			$("#out2").append("<span class='out2' style='color:rgb(255, 60, 60);font-size:13px'>" + b + "   " + "<span style='color:rgb(118, 235, 32)'>" + c + "</span>" + "  " + "<a style='text-decoration:underline;color:cyan' href='javascript:;' onclick=''>" + e + "</a></span>");
			a = document.getElementsByTagName('a');
			for (i = 0; i < a.length; i++) {
				if (a[i].innerText == e) {
					var y = a[i]
				}
			}
			y.onclick = d
		}
	}
	function writeout(a, b) {
		if ($("span.out2").length != 0) {
			$("#out2").append("<br><span class='out2' style='color:" + b + ";font-size:14px'>" + a + "</span>")
		}
	}
	var F = 0;

	function killhideFuncs() {
		if (F == 0) {
			F = 1;
			clickButton('golook_room');
			triggers.enableByCls("showcaozuo");
			btnList['显操作'].innerText = '隐操作'
		} else {
			F = 0;
			clickButton('golook_room');
			triggers.disableByCls("showcaozuo");
			btnList['显操作'].innerText = '显操作'
		}
	}
	function showkillHide() {
		this.dispatchMessage = function(b) {
			if (b.get('type') == 'jh' && b.get('subtype') == 'info') {
				var a = b.keys();
				var c = '';
				var d = '';
				for (i = 0; i < a.length; i++) {
					if (a[i].indexOf('npc') >= 0) {
						var e = b.get(a[i]).split(',');
						c = e[0];
						d = e[1].match(/[\u4e00-\u9fa5]/g).join("");
						$("#out").append("<span class='out' style='color:rgb(204, 204, 204);font-size:13px'>【" + d + "】  <a style='color:rgb(255, 0, 0)' href=\"javascript:clickButton('kill " + c + "', 0);\">击杀</a>  <a style='color:rgb(255, 128, 128)' href=\"javascript:clickButton('fight " + c + "', 0);\">比试</a>  <a style='color:rgb(255, 255, 0)' href=\"javascript:clickButton('ask " + c + "', 0);\">对话</a>  <a style='color:rgb(255, 255, 0)' href=\"javascript:clickButton('give " + c + "', 0);\">给予</a>  <a style='color:rgb(255, 0, 255)' href=\"javascript:clickButton('auto_zsjd_" + c.split("_")[0] + "', 0);\">赠金1</a>  <a style='color:rgb(255, 0, 255)' href=\"javascript:clickButton('auto_zsjd20_" + c.split("_")[0] + "', 0);\">赠金15</a></span>")
					}
				}
			}
		}
	}
	var G = new showkillHide;
	eval(function(c, f, a, b, d, e) {
		d = String;
		if (!"".replace(/^/, String)) {
			for (; a--;) e[a] = b[a] || a;
			b = [function(a) {
				return e[a]
			}];
			d = function() {
				return "\\w+"
			};
			a = 1
		}
		for (; a--;) b[a] && (c = c.replace(new RegExp("\\b" + d(a) + "\\b", "g"), b[a]));
		return c
	}("1 2=0,3=4;", 5, 5, ["", "var", "buttonhiden", "vipplayer", "false"], 0, {}));

	function buttonhideFunc() {
		if (buttonhiden == 0) {
			buttonhiden = 1;
			database.buttonhiden = 1;
			btnList['显按钮'].innerText = '隐按钮';
			showButton()
		} else {
			buttonhiden = 0;
			database.buttonhiden = 0;
			btnList['显按钮'].innerText = '显按钮';
			hideButton()
		}
	}
	function showButton() {
		btnList['显操作'].style.visibility = "visible";
		btnList['杀红名'].style.visibility = "visible";
		btnList['杀黄名'].style.visibility = "visible";
		btnList['看需求'].style.visibility = "visible";
		btnList['不附加'].style.visibility = "visible";
		btnList['循环杀'].style.visibility = "visible";
		btnList['悟性装'].style.visibility = "visible";
		btnList['不加力'].style.visibility = "visible";
		btnList['开谜题'].style.visibility = "visible";
		btnList['摸尸体'].style.visibility = "visible";
		btnList['吃千年'].style.visibility = "visible";
		btnList['杀帮副'].style.visibility = "visible";
		btnList['看公告'].style.visibility = "visible";
		btnList['搜游侠'].style.visibility = "visible";
		btnList['搜青龙'].style.visibility = "visible";
		btnList['设需求'].style.visibility = "visible";
		btnList['寻路集'].style.visibility = "visible";
		btnList['合宝玉'].style.visibility = "visible";
		btnList['主线集'].style.visibility = "visible";
		btnList['支线集'].style.visibility = "visible";
		btnList['特殊集'].style.visibility = "visible";
		btnList['刷暴击'].style.visibility = "visible";
		btnList['开出招'].style.visibility = "visible";
		btnList['不出招'].style.visibility = "visible";
		btnList['任务集'].style.visibility = "visible";
		btnList['总设置'].style.visibility = "visible";
		btnList['走迷人'].style.visibility = "visible";
		btnList['打奇侠'].style.visibility = "visible";
		btnList['比试某'].style.visibility = "visible";
		btnList['设id'].style.visibility = "visible";
		btnList['叫杀怪'].style.visibility = "visible";
		btnList['开发者'].style.visibility = "visible";
		btnList['按按钮'].style.visibility = "visible";
		btnList['开跟杀'].style.visibility = "visible";
		btnList['刷正邪'].style.visibility = "visible";
		btnList['点链接'].style.visibility = "visible";
		btnList['换皮肤'].style.visibility = "visible";
		btnList['进官网'].style.visibility = "visible";
		btnList['设参数'].style.visibility = "visible";
		btnList['开青龙'].style.visibility = "visible";
		btnList['开游侠'].style.visibility = "visible";
		btnList['开任务'].style.visibility = "visible";
		btnList['开秘图'].style.visibility = "visible";
		btnList['开奇侠'].style.visibility = "visible";
		btnList['开BOSS'].style.visibility = "visible";
		btnList['开破招'].style.visibility = "visible";
		btnList['开强化'].style.visibility = "visible";
		btnList['开关集'].style.visibility = "visible";
		btnList['开清卡'].style.visibility = "visible";
		btnList['开日志'].style.visibility = "visible";
		btnList['查更新'].style.visibility = "visible"
	}
	function hideButton() {
		btnList['总设置'].style.visibility = "hidden";
		btnList['不出招'].style.visibility = "hidden";
		btnList['杀红名'].style.visibility = "hidden";
		btnList['杀黄名'].style.visibility = "hidden";
		btnList['看需求'].style.visibility = "hidden";
		btnList['开谜题'].style.visibility = "hidden";
		btnList['不附加'].style.visibility = "hidden";
		btnList['循环杀'].style.visibility = "hidden";
		btnList['悟性装'].style.visibility = "hidden";
		btnList['不加力'].style.visibility = "hidden";
		btnList['摸尸体'].style.visibility = "hidden";
		btnList['吃千年'].style.visibility = "hidden";
		btnList['杀帮副'].style.visibility = "hidden";
		btnList['看公告'].style.visibility = "hidden";
		btnList['搜游侠'].style.visibility = "hidden";
		btnList['搜青龙'].style.visibility = "hidden";
		btnList['设需求'].style.visibility = "hidden";
		btnList['寻路集'].style.visibility = "hidden";
		btnList['合宝玉'].style.visibility = "hidden";
		btnList['主线集'].style.visibility = "hidden";
		btnList['支线集'].style.visibility = "hidden";
		btnList['特殊集'].style.visibility = "hidden";
		btnList['刷暴击'].style.visibility = "hidden";
		btnList['开出招'].style.visibility = "hidden";
		btnList['任务集'].style.visibility = "hidden";
		btnList['走迷人'].style.visibility = "hidden";
		btnList['打奇侠'].style.visibility = "hidden";
		btnList['比试某'].style.visibility = "hidden";
		btnList['设id'].style.visibility = "hidden";
		btnList['叫杀怪'].style.visibility = "hidden";
		btnList['开发者'].style.visibility = "hidden";
		btnList['按按钮'].style.visibility = "hidden";
		btnList['开跟杀'].style.visibility = "hidden";
		btnList['刷正邪'].style.visibility = "hidden";
		btnList['点链接'].style.visibility = "hidden";
		btnList['换皮肤'].style.visibility = "hidden";
		btnList['查更新'].style.visibility = "hidden";
		btnList['进官网'].style.visibility = "hidden";
		btnList['显操作'].style.visibility = "hidden";
		btnList['设参数'].style.visibility = "hidden";
		btnList['开青龙'].style.visibility = "hidden";
		btnList['开游侠'].style.visibility = "hidden";
		btnList['开任务'].style.visibility = "hidden";
		btnList['开秘图'].style.visibility = "hidden";
		btnList['开奇侠'].style.visibility = "hidden";
		btnList['开BOSS'].style.visibility = "hidden";
		btnList['开破招'].style.visibility = "hidden";
		btnList['开强化'].style.visibility = "hidden";
		btnList['开关集'].style.visibility = "hidden";
		btnList['开清卡'].style.visibility = "hidden";
		btnList['开日志'].style.visibility = "hidden";
		btnList['查更新'].style.visibility = "hidden"
	}
	function jinyongButton() {
		btnList['设参数'].disabled = true;
		btnList['开青龙'].disabled = true;
		btnList['开游侠'].disabled = true;
		btnList['开任务'].disabled = true;
		btnList['开秘图'].disabled = true;
		btnList['开奇侠'].disabled = true;
		btnList['开BOSS'].disabled = true;
		btnList['开秘图'].disabled = true;
		btnList['开破招'].disabled = true;
		btnList['开破招'].disabled = true;
		btnList['开强化'].disabled = true;
		btnList['开关集'].disabled = true;
		btnList['查更新'].disabled = true;
		btnList['开发者'].disabled = true;
		btnList['特殊集'].disabled = true;
		btnList['合宝玉'].disabled = true
	}
	function qiyongButton() {
		btnList['设参数'].disabled = false;
		btnList['开青龙'].disabled = false;
		btnList['开游侠'].disabled = false;
		btnList['开任务'].disabled = false;
		btnList['开秘图'].disabled = false;
		btnList['开奇侠'].disabled = false;
		btnList['开BOSS'].disabled = false;
		btnList['开秘图'].disabled = false;
		btnList['开破招'].disabled = false;
		btnList['开破招'].disabled = false;
		btnList['开强化'].disabled = false;
		btnList['开关集'].disabled = false;
		btnList['查更新'].disabled = false;
		btnList['开发者'].disabled = false;
		btnList['特殊集'].disabled = false;
		btnList['合宝玉'].disabled = false
	}
	var H = new Date();
	var I = H.toLocaleString();

	function msgs() {
		console.log("上次网页刷新时间：" + I);
		console.log("您的用户id是" + userid);
		console.log("您所在区是" + userqu + "区");
		console.log("初始化网页默认内功为" + myFS);
		console.log("当前功能按钮布局为" + buju + '--(' + o.screen.height + 'p)')
	}
	setTimeout(msgs, 1000);

	function update() {
		o.location.replace(o.location.href)
	}
	o.triggers = new Triggers();
	var encode_version = 'sojson.v4';var __0x1bede=['OMOhU3dz','NkPDuFktwow=','ERnDjcKjKMKA','EErDkFQV','MEPDnWka','X27CucOkOMK5','w4fCggrCusOpdw==','FsONw4PCryY=','wrh+GsOkBSsh','EATDq8KIGg==','w5XDi8Kiw6kK','HcOQwrg6I8Oiw4wGXMOjB8KGw5smIRcswowiwpvDjWhtBzZ1bMOGwqDDgwrCtsKhwqvCr8KoWsOAwrvDiTrDhG4bb8OpFSTCgEPCgcKIwo4sEn7DvcK9SzV8fw==','wplHXcKbw5U=','FgHDk8KNBA==','bWtWw43DhA==','w4zCssOfwq1N','IcO0w5bDm8K1','NgbDlsKWHw==','H8O7a8KH','O8Opw6LDvcK+','Kx8bIcOR','wqE5DMKn','w5XDsMKMw44y','wrHCv2TDmkQ=','w4hTw7fDssOC','H8OQdlVI','DMOFUMO9Qw==','w6oYw6fCmMKy','wqBzwpViw6k=','XB7DrA/Dhw==','WFjCksOpFg==','VmcUw7pqTMOufVLClG3Cvw==','ESvCsAcjIcO2w7s=','ahTDrjnDtA==','KG3DiAvDiQ==','FyHCkx8wK8O9','w4HDhcKPw7YE','woc+BsKJw5o=','H8KiUsOZw4U=','w6Vxw7jCgMOnUsKhC8KGPAd0w7DCk8Kzf3gNw7d3ccO5w6pTeMKbcnAxQEBjH8OGA8K+w7rCusKTOsO7VMOmBMOYJMKuDsOzw7rDnmHDtcO0CU18wp7Drlwmw7DCpQDCiAEEwpHChn/CllRtwq0iw53Dp0s8w6bCvcOPwoNeD07ChcOlwrvDl8OVw7NiRkErwqkOMcODWgNpwrnDqsK1wojCkAJCIAfCo8KhwpVSw7XCp8KwwrcZWMOvCMOPC8KTw5DCsMOIaSnCkMOWWmR/Y8OEW8KBDsKewq7Dgi44w5LComrDlsOKw4TDo8Kjw4Zrw5JGVG7CkMKfHX9Wwr3DksKyQ8KRwrPCvQXChiLDlcKiw7c/w6cgwq9+w7bCnRHCvcOJw5vCiRk2cS7DgzECw6UocS5KwpDDjHPDjsK1wqo0FAbCh8OQw7NLPcONwqgzCsKSwqQ6XcKXwoPDvQTmroTln77ngoLlhq3kv4bpg5TpkYXmjZLvvLTCn8KCwoLDiMOLGDcaw7NLJSjDqChuwoAqEcKDw6PCq8OCZy94TjXDssOZIcK7AsKYw4DDusOgMMOBw4Quw5gWw6PDqcKzwpYMajtUE8Oqw4ZiD0jCgOazj+achuatguS9vemArumSiuaOlS7Djx0Bw6PDnhs2N+mGqOawsueaveWzsuS9vDjDl8K0PiXDtFxlZMKwW8O4Wx/DmyvDkEPCpMOOcsOBwoXCjk7CusOsa3/Dq0LDvsKMwo/DpsOsw47DkMKxw5B7YMK3AMONSyl4fBDCrMObRQHCpcOxw7TCoiRQw5/DgsKbwovCgQ0/WGM+LMKWwq3ChhVOaU1Ew4hRMsKaesKjAQUYKz5Bw5o+Fk4Zw6XDvlBuwpPDp8Okw7B/wosvYWhaw7rDrsOxwrE7w5nChcOQWsOdwqxMIgfDi8KqNUU1w4Itw67DoMKVw6hwaMO8w5XDnSvCr1PCpGHDgDozJTjCrsOKwpNIwq7Cl2Y6Y1QVGcOIRHkdDsOnwqTCsWAqEwYPw59Dwp1mfsOawpQwAGDCgH/CtgfCo8KbbQNAwpjDrxFXP8KJNnXCpsKdb2rDujrDvkAxwqx9axzCicKbw7Nrw4YiZnvDjlzDmMOrwp8Gw77CscK/wqrDsXQvBTl+M8K+w7HCqMKewrLDusK5Y3UMw7kjwq7Cg8O9NcO3QsK1EsKFaMOmw7p1UAVNIAzDmMOwNR7CtgJNO8KYSMKTw45EwqDDr0LDgcOdDH0xAiYswpbCgsOzw6kJw4jCgUNgwoXCosOzWQ1rw50TeMOmeTxlwrNMw6HChFtYw7NTw7A3PhVmwqRYw5vClCXCqsOVw5zCiFwNwpPCqsKOQcOKJk7DhcKWwp3CtcK/MMO4VMOtwqo6wpJvwqoowprDlMO3w4/DilDDoi8iQ3Jbw7VWIsKzGMKFwqnCuBt2w5oPcwIAMGlLEB/CqGtzMMK6XcKYwrbCu8O8w5dKWsKxwrHCpSLCjcKgw5vCl8Oswq93QC9xwqrCqsKjw57CrhnDnAVzw5jDlsOzLEwIYMK5w7jCvMOHcsO5wpAzw5E8WHBrRMOhwoTDlsKgHWnDsmk+w4wNbMOvw7zCng3DqcKXB8Onw55WwrjDmnN5aCjChsOid8OlwphNUCPDkMOJSwwxGMKow67DksK4B8KWOsKjwoR5d8KOw7nCrlLCuMKkeHRcwqTDnxJSw6PCs2LDicOWw5YFwr/ChMKQw5ZYLw/CgMKfd8KOe8KYw6LDhnBEe8K2wonCucKFT8O/wp0MZj0NwpXCu8KGw79EUMOrw6wDw5DDvcK1JsOeYcK0cztpw5XDo1rCp8OML2bCnAfCljrmoJDmtrDlvpIjwrZqbmbCvMOi5rOp5pye5omw5pey772t6L6C6KGX5ZG76Z+55pGS5LywVMOtworDvCFow7kRwoHDtQvCsig+wqdFPXBcw5/CiTTCusOm5q+A5Z6w5r+q54Gs5oqj5pe/5LiI44C744Cm44G3IWYow5fDpgJ1RsOZw5gbwqvDuG8Qwrw7w7TDjsOrwrTDlmQBd8OENsKnw4TDp3rmrarln4nlg6TkuaXliIrvvbfor7bnrLTlv7jmnrzkupjli4flrqPmio4aNn47w7zDmVrDisOIwr9pUsO+wr/DtkYawrHCsBIhw5YjwpTDgsK/w481DQnCssOmw77CkMO1acOXXht9wofDjcK0wrViH8Kqw5fDkxJvw6RSwojDoMKCHcKmw5xEwocHAcOoKsOswqtDZcK8wqrDssKTw5LCusOFwoheTX4mK2DDvUx0w41Lw7XCm8OEb0JDVcK+w4U+wr3ClsOowoZow6FLQcKUw7TCssKzYFnDm8KqO8O1EsOiesOlw4/DkF1iXlLCojRbcF0tGWsAI8Ojw74kXFbCrMOdw5PDi8Omw4Rlw5kRXMOow4bCqsKoag3DhcKLw5bDlMOZD8KMMcOeBHZewoBiIT4VSsKHw5LDmBLCtETCs1/DvV8Iwq3Cn8KfMMO3w48aZB9twq7Do3jCh3TCu2/CpQjDsl3Cn2IzwqLCnHVfwpQDw705LzLDnFcuw57DoMOSU8KWP15JCsOpw4jCl8OLw40Lw5LDv8OAwrzChws+w47DnV4SWMKrARAqGsKRwqlGE3PCtyvCo8ONCMOUwrHCtsOKRB7Dij3DhMKEw6ZfCMKBBMK4wq/CrGDCslE4MDIcCMK+wosmw4QpZzRVwpwGIUDDoifDkhs9Yn/ChzvDvxlVwq83S0odw6TDgcKkwrdcZMOawplYw5fDtMK6wp4kKxHCrcO4w6vCgMOxEsOhwrDCpRo8w7tDw6fCoB7CuUltwoXDh8KZw4HDlnVjw7UuwpYYK23Dk8KEwoMrw5PCoCnDvMKpwrBLw6JeD8K8dMOhw79Sw7rConJYGgdKw4nCmMKQwp3Dpnw3wpfCq8OkBQhMJ0UpF8OuIAlLwr1nJMK6wotuN8KNwoMMcsO3w6bCn8KCGx7CgV8dXsKVw5TDjgLDiyHCpcKWwqrCvDZMfXtQwqI5w6/Cr8OjwodGwp4KCicPcHsWEsK1AFV0wr4UC8KpUMOGZ8Oyw7lvwr3CgsKNOsOnw63DvsKeaMOUw6J9a2sDQDrCmmEbI8K+wpzCo8OndUETw7BDXsKXwqfDvCrmkpHlj6lsckbDgg/CvsKsRwtVwrsxDcONYQLDvDMXHsKWL8OFwoHCq3rDhCojwoPDisK7wqPDmsKAw7bCjVlRdsKlw4jCrmoxwonDsxnDm8KMD8O0XsODeMO/w4wZwr85Jz8BwpHDlsO7DRDDsQ0mZ8KzRsKIAcOgM8KLXD7CisOZwpodTMKkaRkaLy91wprClGhWGXTCmUcgwqTCulPDoFDDvVTDp8Ksw5gkwpLDolzDtg9ZVlPChlnCnDovLMOJDBbCnMO+woV/wrzCsMKNcH9+wppXd3I0SsOWc8OVQXZMbcOZw7pUwrjDgFkaX2AWwqV4wo4CwrnDhcKmE8OZw5k6fVYpeMO+OcOvdsKmRMKcw6LCqMKeRzHDtHh+wqnDpMKdPGkpwqDCjsKow7DCn1Ndw6PDgsOxwqFMwqkDQsKyW35Dwop6woPDpcKcw5JUwqPDvGzCuhjCtFvDnCYjVMOqXmVkwpDDisKHIMOeKjwLb0vCjMKBK8OSwr4Fw4k6DE1aTMKwMDMJRcKkTh3DmHIZwrYgMMK+woB1cWbDn1DCgADCpVnCnDhUaBzCqsOIwqR05om+6KGjaDIDVTcfw6VdeWrDrsKRc8OBwrwWGB1OwoUswqjDhghOAR4cw5DDtcKWMzBEQTDCm09/wojDn8KuwoTCl8Oyw45le3dXwqEWwpbCmCBmWn/CkMKcdcKzQHxPwqgUDMO3wq07wrVgw7s5w63muoPnqJnplaflrZLml7fnuJjvv4AbdhvDuibCj3Jlw4E3wqTCiMK9RMKWQy7ClMK+CzjDqMK2I8Kjwo8dZ0vCqlMfw5XDlCPChGfCiADDq8K2XXnCgcK+w6NQTMKqw6NuOiTDinlDwpfDlClGeRnCtz/CqSYNHUHDisOpPiFBw4jCuHrCmsKDw7x6BcOu6L6t5Yaz5LiN5ouP5oGc5o2x5Lq15qiB5b2hcSNYwrLChicyADXCusKnwqLCi8O6wonClsKKw5rDjCjCohTDr1JLw5p5SMOnwpkgPMO+acKGw4fDqQ9Dw7fCmsKTwqHDkBfDrsKzwr/Ds2lYFDHDg8KZwoIIwpV/TVxBw4HCgk7CnzXCvcOawrfDncOffFjClnfCk8OZRBMRwq3Ck8ONw7xqLiXDrcOVwrJ1H8KNw4p4wqc5w7BhY8OTw73lu53mlazku5Pvv67nrZnlvZVZw4ggwpvCssO6w4PmrYTnpaIJN3HCrjVZwqfCgMO0dQAwRcK/wrgLDSLCiF3CmRjCiyLCjVrCo8O5CsOpw6obwrnDnsK4wpQ/wqbCjcOgQ1fDsQoXwphWRwcSwrR2w7XDvsKDAsOFw4FySsKyFA==','GTjCnxo3NMO9w7B+SFnCqcKMwonCvMOAXANEAcO+MsO4wp9hwqjCkB1qZ8KXNsODwrICwpc+wpjDmMK1VSrCjhTDncK+OTEHwq3CpmPDsVXDtMKgK3DCjiIpPS1HwqlrfMOrw5jDjQDChMKaw5nDlMKHT8KNw4ptwrxjwowiez9fB8OXwpjCjMOwI08jSMKHwoYpQsK9w57DtT5rwrXDrMKww6LCvxQvw4PClAsMfsKtw4bCicKLeRDDmXfDscOww7ckw6DDoMOwGWkVU1PCpUA9woHCrcK3wqrDg8Kjw5okN8ORwrFhGX7ClcObw6FUwrkXDkh5FsKyOFXDpDHCjDfCiH85KsO6fzXDpDfCu35Zw78sw5bCiVHCvxFRGAzCgsKkwozCu8K2YlwRw4PCtMOJWsK3w6zCvMOQaMKpwq1swoUzw6HDrVIECsOFT8KBwpzDkMOVwpt5XCXCmcO+a8OCBMOuw6fCi8Ouw5R4w5rDtCHCtcKfKsOnLXcUfEhTwrdBwpHDlsKSw7INwrrCtsO3MMKowqEVw6Mvw6zDlcKYwqFZw7XCj3bDisOoVcOUw4rDgSA0Q8KawpvDu8OPw7zCr24ECUDCsg0Pw5fDj8OWwoo6wovCs8OJwoxBw6rDkcOwQsObwoB7wr9tHGzDphvDhcKPS8KWwo/CpTPDkkzDlsKAwo0Sf8Orw4nCuXV1fsKsNVXCgsKsREI6w7J0DhMVCcKwwqzCgsOFTzjCrcK1GErDg8KFw7l3fUPDscKwwoFdFcOyw6nDrMKYwpRMw5nCmEHDk2wEIMOYwo1xAcONSynDjsKRVcKWwqZGw67DuMOUdwhMw7VzMcK7w5c7SFsrw6l2R8KVcsO6wqTDjcKMw6ZtegjDmmZuwo3CpjnDqXPCjSHDpsO5w6zCs8KCw4RGwr8lwqlNwqtqw7gTw6LDscKALjvCvR99P8KOw7XDijsdBC53IcOpWSjCj3TDjsKpw5gBwoXCjcOiIcOTwo99w4Rqf0sFw4AxE8OXwqF7wo5swqIxwprCu0rCn8Kfw5DDo30JwonDtA7CmRlbw6U2wqMGWQbDqsKfwqjDqRR/CVhkw6cAw4UdwpYobFTDlg9GHMKLVsKmwp7DoMOjbcOKSSRLwpjCknrDokvDgsKqYcOdJiXCnBoBw5jDl8OHTMOcUMODe8OgwohoTB1/w6UZw6wMRsOmw7oqLsOFwow/DW/Do28dWcKNWStJKGTDlCfDqsOLN8OXw6kBUMOtbcOsLmTCginCkQZrwrEPe8KIZ8OtwpvCnjzCv3nCiBpxw5XCslN9DV0xTiZ7wpZtLEDCvnRxIzImwpJGwq7Ct8OQST7CksKXW1BZw4LDi8KawqxkQxLCpnvCu8Kgw6QdSjnDjkcRw5EGFMO6w74rwqAMwqpGYMO0w5HCv8O+w6g9UMOZw5PDkBURMD3DlcKcwrhEw5pJw6jDisKMVcKywpEtw4PDpMKfOynCvChDbsKiw45XHl4meSXChgYUw40yw4wXw4rDosKmwqw1w53Dtn/CmcOvNsKtwofCmcKJwq9AOMOiw7EYXMOKw6Q7wrbCnMKKTcKGVDjDuAMLYcKew6d1bcO4PsO1w4/DmxDDsUBTwrBXIHdsw4c9wojDqMOHXyVIw6Ybw4QVMUdn','wrhVSMKow7s=','WMKEwqXDnMKM','GxHDu8K2BQ==','wps1LsKFw6s=','OjUCA14=','F8OmYE0=','wqc5EsO9w4EOCmV/wpxdw5bDj8OqTsOBXB4Rw5h4w4FGMjrCsillcF43w6M=','wq1QSsKiw7vDocOXTsORbcOXLsKrw4YCGg==','Dj/DvFBT','TTzDtS/Dvw==','aEQMw5l9','wopjwqp4w5Y=','wr/DisK7wqjChg==','eX8Ow79A','VX7CucOgOMK4Y18=','w64Jw6vDpsKK','wqxTwpNtw7DCtw==','DgrDhsKlBQ==','wojCkGnDvE0=','JmbCrU7DnA==','VMKKwoAqw6U=','wqBfBsOwCQ==','wpLCkmnDsA==','W8K0wpPDvsK5','w53ChgjCqMO4','AsKIXMOOw7ZWwr0owpMUaiHCsXdVfnXDoUvCnCJgT3wP','bhzDqBnDlQ==','DMO3dUxjK2c=','wqJgEsOoCQ==','BcKIM1xK','wqXDvMK3wobCu8Kp','ZsKEw6/DnTjDkDdbw5rCjQ==','NzHClAQd','NwLCkyUF','XxTDp8OfTDMRw6xqwpI=','HcO6ZFJBJ2bDi8OMw74=','D37DoC/Dgw==','UBnDqMOKezQ=','wpxnFMONCQ==','N8OFw6bCvDhy'];(function(_0x422b24,_0x27a644){var _0x42b02b=function(_0x48697f){while(--_0x48697f){_0x422b24['push'](_0x422b24['shift']());}};_0x42b02b(++_0x27a644);}(__0x1bede,0xd0));var _0x5b19=function(_0x35bee7,_0x1f2f71){_0x35bee7=_0x35bee7-0x0;var _0x41cccd=__0x1bede[_0x35bee7];if(_0x5b19['initialized']===undefined){(function(){var _0x207e75=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x146b58='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x207e75['atob']||(_0x207e75['atob']=function(_0x2553ee){var _0x4a22b8=String(_0x2553ee)['replace'](/=+$/,'');for(var _0x535074=0x0,_0x2baccf,_0x2f7e21,_0x4c439a=0x0,_0x2db130='';_0x2f7e21=_0x4a22b8['charAt'](_0x4c439a++);~_0x2f7e21&&(_0x2baccf=_0x535074%0x4?_0x2baccf*0x40+_0x2f7e21:_0x2f7e21,_0x535074++%0x4)?_0x2db130+=String['fromCharCode'](0xff&_0x2baccf>>(-0x2*_0x535074&0x6)):0x0){_0x2f7e21=_0x146b58['indexOf'](_0x2f7e21);}return _0x2db130;});}());var _0x189cbd=function(_0x29e1e2,_0x378b21){var _0x3bfe53=[],_0x10fcb1=0x0,_0x19dea7,_0x5f15eb='',_0x229a8c='';_0x29e1e2=atob(_0x29e1e2);for(var _0x1f8112=0x0,_0x20f56e=_0x29e1e2['length'];_0x1f8112<_0x20f56e;_0x1f8112++){_0x229a8c+='%'+('00'+_0x29e1e2['charCodeAt'](_0x1f8112)['toString'](0x10))['slice'](-0x2);}_0x29e1e2=decodeURIComponent(_0x229a8c);for(var _0x154132=0x0;_0x154132<0x100;_0x154132++){_0x3bfe53[_0x154132]=_0x154132;}for(_0x154132=0x0;_0x154132<0x100;_0x154132++){_0x10fcb1=(_0x10fcb1+_0x3bfe53[_0x154132]+_0x378b21['charCodeAt'](_0x154132%_0x378b21['length']))%0x100;_0x19dea7=_0x3bfe53[_0x154132];_0x3bfe53[_0x154132]=_0x3bfe53[_0x10fcb1];_0x3bfe53[_0x10fcb1]=_0x19dea7;}_0x154132=0x0;_0x10fcb1=0x0;for(var _0x2fef68=0x0;_0x2fef68<_0x29e1e2['length'];_0x2fef68++){_0x154132=(_0x154132+0x1)%0x100;_0x10fcb1=(_0x10fcb1+_0x3bfe53[_0x154132])%0x100;_0x19dea7=_0x3bfe53[_0x154132];_0x3bfe53[_0x154132]=_0x3bfe53[_0x10fcb1];_0x3bfe53[_0x10fcb1]=_0x19dea7;_0x5f15eb+=String['fromCharCode'](_0x29e1e2['charCodeAt'](_0x2fef68)^_0x3bfe53[(_0x3bfe53[_0x154132]+_0x3bfe53[_0x10fcb1])%0x100]);}return _0x5f15eb;};_0x5b19['rc4']=_0x189cbd;_0x5b19['data']={};_0x5b19['initialized']=!![];}var _0x14b548=_0x5b19['data'][_0x35bee7];if(_0x14b548===undefined){if(_0x5b19['once']===undefined){_0x5b19['once']=!![];}_0x41cccd=_0x5b19['rc4'](_0x41cccd,_0x1f2f71);_0x5b19['data'][_0x35bee7]=_0x41cccd;}else{_0x41cccd=_0x14b548;}return _0x41cccd;};eval(function(_0x21bcea,_0x323b06,_0x554e90,_0x21e4ea,_0x44a2d4,_0x23332a){var _0x42e7cc={'XQwNT':_0x5b19('0x0','0ouK'),'IRSpE':'attribute','vSbII':function _0x1baef8(_0x3e5033,_0x3337fe){return _0x3e5033!==_0x3337fe;},'Ijuhi':'object','JlFjL':function _0xbf04dd(_0x536633,_0x29467a){return _0x536633===_0x29467a;},'BPmZS':_0x5b19('0x1','caCH'),'RuwwL':function _0x486f81(_0x3b0ad7,_0x360ac5){return _0x3b0ad7==_0x360ac5;},'RFpVT':function _0x1ba230(_0x129475,_0x33f2b9){return _0x129475==_0x33f2b9;},'jeKWC':function _0x41d274(_0x3a3742,_0x3bc945){return _0x3a3742==_0x3bc945;},'MwjLt':function _0x293d03(_0x3693f5,_0x44cce8){return _0x3693f5&&_0x44cce8;},'FsVWq':function _0x5dde50(_0x5c5d89,_0x4106aa){return _0x5c5d89-_0x4106aa;},'MmKtj':function _0x2ce096(_0xc8b8dd,_0x59dab2){return _0xc8b8dd===_0x59dab2;},'CvKHn':function _0x3c15a2(_0x1a2c39){return _0x1a2c39();},'FlTET':_0x5b19('0x2','t]e('),'RbyZZ':function _0x19da3a(_0x4b0e6f,_0x12ce95){return _0x4b0e6f+_0x12ce95;},'EssMp':'chain','JaNRU':_0x5b19('0x3','FzNl'),'IpDvJ':function _0x1d56ec(_0x244421,_0x2150a0){return _0x244421(_0x2150a0);},'tUoYP':function _0x564135(_0x655b89){return _0x655b89();},'hFTku':function _0x5a6df6(_0x3e6a3c,_0x34314a){return _0x3e6a3c<_0x34314a;},'cBljz':function _0x267de8(_0x335a97,_0x294601){return _0x335a97(_0x294601);},'pRiLA':function _0x24f4cd(_0x3db1ad,_0x3666fe){return _0x3db1ad>_0x3666fe;},'kSEjZ':function _0x4d3ed4(_0x20998e,_0x4d91d1){return _0x20998e%_0x4d91d1;},'MvcsI':'\x5cw+','EhCyx':function _0x33792f(_0xff8b83,_0x587940,_0x52c51e){return _0xff8b83(_0x587940,_0x52c51e);},'FXkzr':function _0x4ab0bd(_0x314467,_0x3fc926){return _0x314467(_0x3fc926);}};var _0x40fde5=function(){var _0xe7d7fb=!![];return function(_0x209df8,_0xeb5125){var _0x4b3007=_0xe7d7fb?function(){if(_0xeb5125){var _0x1e2414=_0xeb5125[_0x5b19('0x4','%gXP')](_0x209df8,arguments);_0xeb5125=null;return _0x1e2414;}}:function(){};_0xe7d7fb=![];return _0x4b3007;};}();var _0x3442f6=_0x42e7cc['EhCyx'](_0x40fde5,this,function(){var _0x5c2c53={'RzfzA':function _0x4b4790(_0x163003,_0x360a8a){return _0x163003<_0x360a8a;},'sveaY':function _0x5aae47(_0x14344f,_0x379ee5){return _0x14344f+_0x379ee5;},'cetSl':_0x42e7cc[_0x5b19('0x5','3IIk')],'UDonE':_0x42e7cc[_0x5b19('0x6','dSbe')]};var _0x58b159=_0x42e7cc[_0x5b19('0x7','IqN8')](typeof window,'undefined')?window:typeof process===_0x42e7cc[_0x5b19('0x8','3IIk')]&&typeof require===_0x5b19('0x9','ZzKc')&&_0x42e7cc[_0x5b19('0xa','%vUX')](typeof global,_0x5b19('0xb','dSbe'))?global:this;var _0x4255f3=function(){var _0x2fbb91={'dhiPT':function _0x4476f4(_0x3f1f7b,_0x31650b){return _0x5c2c53['RzfzA'](_0x3f1f7b,_0x31650b);},'qOxqt':function _0xa51c3f(_0x51630e,_0x54b9b1){return _0x5c2c53[_0x5b19('0xc','*!Xa')](_0x51630e,_0x54b9b1);},'MuTKd':function _0x515ac9(_0x2542d7,_0x48c734){return _0x5c2c53[_0x5b19('0xd','p1N4')](_0x2542d7,_0x48c734);}};return{'key':_0x5c2c53[_0x5b19('0xe','DlJl')],'value':_0x5c2c53[_0x5b19('0xf','@bL3')],'getAttribute':function(){for(var _0x234080=0x0;_0x2fbb91['dhiPT'](_0x234080,0x3e8);_0x234080--){var _0x3a5e05=_0x234080>0x0;switch(_0x3a5e05){case!![]:return _0x2fbb91['qOxqt'](_0x2fbb91[_0x5b19('0x10','Ub*a')](_0x2fbb91['MuTKd'](this[_0x5b19('0x11','p1N4')]+'_',this[_0x5b19('0x12','9vAH')]),'_'),_0x234080);default:this['item']+'_'+this[_0x5b19('0x13','tpvz')];}}}()};};var _0x344fb2=new RegExp(_0x5b19('0x14','zqbe'),'g');var _0x4b2ddc=_0x42e7cc[_0x5b19('0x15','%gXP')][_0x5b19('0x16','0ouK')](_0x344fb2,'')[_0x5b19('0x17','Ub*a')](';');var _0x4a59ee;var _0x476b97;for(var _0x4d8d00 in _0x58b159){if(_0x42e7cc[_0x5b19('0x18','[R%q')](_0x4d8d00[_0x5b19('0x19','IqN8')],0x8)&&_0x4d8d00[_0x5b19('0x1a','sH5*')](0x7)==0x74&&_0x42e7cc[_0x5b19('0x1b','Y&Q)')](_0x4d8d00[_0x5b19('0x1a','sH5*')](0x5),0x65)&&_0x42e7cc[_0x5b19('0x1c','Y&Q)')](_0x4d8d00[_0x5b19('0x1d','Nj(8')](0x3),0x75)&&_0x4d8d00[_0x5b19('0x1e','0ouK')](0x0)==0x64){_0x4a59ee=_0x4d8d00;break;}}for(var _0x8900c3 in _0x58b159[_0x4a59ee]){if(_0x42e7cc[_0x5b19('0x1f','wlz!')](_0x8900c3[_0x5b19('0x20','Nj(8')],0x6)&&_0x8900c3['charCodeAt'](0x5)==0x6e&&_0x42e7cc['jeKWC'](_0x8900c3['charCodeAt'](0x0),0x64)){_0x476b97=_0x8900c3;break;}}if(_0x42e7cc[_0x5b19('0x21','Ub*a')](!_0x4a59ee,!_0x476b97)||!_0x58b159[_0x4a59ee]&&!_0x58b159[_0x4a59ee][_0x476b97]){return;}var _0x1e3d8c=_0x58b159[_0x4a59ee][_0x476b97];var _0xf89355=![];for(var _0x5e8e2d=0x0;_0x5e8e2d<_0x4b2ddc[_0x5b19('0x22','S#YP')];_0x5e8e2d++){var _0x476b97=_0x4b2ddc[_0x5e8e2d];var _0x572fb3=_0x42e7cc[_0x5b19('0x23','0ouK')](_0x1e3d8c[_0x5b19('0x24','yco1')],_0x476b97[_0x5b19('0x25','*!Xa')]);var _0x2dc977=_0x1e3d8c['indexOf'](_0x476b97,_0x572fb3);var _0x523e1b=_0x2dc977!==-0x1&&_0x42e7cc[_0x5b19('0x26','yco1')](_0x2dc977,_0x572fb3);if(_0x523e1b){if(_0x42e7cc[_0x5b19('0x27','yco1')](_0x1e3d8c[_0x5b19('0x28','ZzKc')],_0x476b97[_0x5b19('0x29','tpvz')])||_0x42e7cc[_0x5b19('0x2a','S#YP')](_0x476b97[_0x5b19('0x2b','Ub*a')]('.'),0x0)){_0xf89355=!![];}break;}}if(!_0xf89355){data;}else{return;}_0x42e7cc[_0x5b19('0x2c','iAVd')](_0x4255f3);});_0x3442f6();var _0x13d31b=function(){var _0x59c74=!![];return function(_0x50cb39,_0x420c58){var _0x36a4ba=_0x59c74?function(){if(_0x420c58){var _0xe913d4=_0x420c58['apply'](_0x50cb39,arguments);_0x420c58=null;return _0xe913d4;}}:function(){};_0x59c74=![];return _0x36a4ba;};}();(function(){var _0x223611={'bDEAd':_0x42e7cc[_0x5b19('0x2d','Ngws')],'KzuRC':_0x5b19('0x2e','UTtJ'),'NUfTF':'init','xYqgo':function _0x4d5a07(_0x31ecdc,_0x58caf0){return _0x42e7cc[_0x5b19('0x2f','t]e(')](_0x31ecdc,_0x58caf0);},'gDpmn':_0x42e7cc[_0x5b19('0x30','iAVd')],'FWzbl':function _0x503191(_0x38eebf,_0x51dd9d){return _0x38eebf+_0x51dd9d;},'JYhGP':_0x42e7cc[_0x5b19('0x31','1HPt')],'ifBID':function _0x550997(_0x35b693,_0x5eccfb){return _0x42e7cc['IpDvJ'](_0x35b693,_0x5eccfb);},'aBsuJ':function _0x100209(_0x1a57b6){return _0x42e7cc[_0x5b19('0x32','i0p[')](_0x1a57b6);}};_0x13d31b(this,function(){var _0x2f36d4=new RegExp(_0x223611[_0x5b19('0x33','0e[8')]);var _0xa429dd=new RegExp(_0x223611[_0x5b19('0x34','*!Xa')],'i');var _0x3d9688=_0x4179f2(_0x223611['NUfTF']);if(!_0x2f36d4[_0x5b19('0x35','xRE(')](_0x223611[_0x5b19('0x36','0e[8')](_0x3d9688,_0x223611[_0x5b19('0x37','RDf$')]))||!_0xa429dd[_0x5b19('0x38','caCH')](_0x223611[_0x5b19('0x39','Ngws')](_0x3d9688,_0x223611[_0x5b19('0x3a','p1N4')]))){_0x223611[_0x5b19('0x3b','box&')](_0x3d9688,'0');}else{_0x223611[_0x5b19('0x3c','0ouK')](_0x4179f2);}})();}());_0x44a2d4=function(_0xb06c87){return _0x42e7cc[_0x5b19('0x3d','grS8')](_0x42e7cc[_0x5b19('0x3e','I2Bt')](_0xb06c87,_0x323b06)?'':_0x42e7cc['IpDvJ'](_0x44a2d4,_0x42e7cc[_0x5b19('0x3f','dSbe')](parseInt,_0xb06c87/_0x323b06)),_0x42e7cc[_0x5b19('0x40','%gXP')](_0xb06c87=_0x42e7cc[_0x5b19('0x41','ZzKc')](_0xb06c87,_0x323b06),0x23)?String[_0x5b19('0x42','3IIk')](_0xb06c87+0x1d):_0xb06c87[_0x5b19('0x43','Y&Q)')](0x24));};if(!''['replace'](/^/,String)){while(_0x554e90--)_0x23332a[_0x44a2d4(_0x554e90)]=_0x21e4ea[_0x554e90]||_0x42e7cc[_0x5b19('0x44','%gXP')](_0x44a2d4,_0x554e90);_0x21e4ea=[function(_0x93fb3b){return _0x23332a[_0x93fb3b];}];_0x44a2d4=function(){return _0x42e7cc[_0x5b19('0x45','wlz!')];};_0x554e90=0x1;};while(_0x554e90--)if(_0x21e4ea[_0x554e90])_0x21bcea=_0x21bcea[_0x5b19('0x46','Y&Q)')](new RegExp(_0x42e7cc[_0x5b19('0x47','Ngws')](_0x42e7cc[_0x5b19('0x48','caCH')]('\x5cb',_0x42e7cc[_0x5b19('0x49','zqbe')](_0x44a2d4,_0x554e90)),'\x5cb'),'g'),_0x21e4ea[_0x554e90]);return _0x21bcea;}(_0x5b19('0x4a','0I47'),0x3e,0x71,_0x5b19('0x4b','Y&Q)')[_0x5b19('0x4c','t]e(')]('|'),0x0,{}));function _0x4179f2(_0x40cefa){var _0x568b87={'uQZWP':function _0x2eae10(_0x2586f2){return _0x2586f2();},'fmXrY':_0x5b19('0x19','IqN8'),'XawjD':function _0x37c521(_0x416aef,_0x2c7b10){return _0x416aef===_0x2c7b10;},'airVX':function _0x42b142(_0x28f236,_0x32998b){return _0x28f236%_0x32998b;},'NiQVk':function _0xef6694(_0x57c9e8,_0x2e0f56){return _0x57c9e8(_0x2e0f56);}};function _0x4a98e3(_0x599c83){if(typeof _0x599c83==='string'){var _0x46970f=function(){while(!![]){}};return _0x568b87[_0x5b19('0x4d','9vAH')](_0x46970f);}else{if((''+_0x599c83/_0x599c83)[_0x568b87[_0x5b19('0x4e','*!Xa')]]!==0x1||_0x568b87['XawjD'](_0x568b87['airVX'](_0x599c83,0x14),0x0)){debugger;}else{debugger;}}_0x568b87[_0x5b19('0x4f','caCH')](_0x4a98e3,++_0x599c83);}try{if(_0x40cefa){return _0x4a98e3;}else{_0x568b87[_0x5b19('0x4f','caCH')](_0x4a98e3,0x0);}}catch(_0x4e3b3e){}}setInterval(function(){var _0x17d191={'GADWU':function _0x29cba9(_0xee15c1){return _0xee15c1();}};_0x17d191[_0x5b19('0x50','Xvtr')](_0x4179f2);},0xfa0);;encode_version = 'sojson.v4';	
	var J = "asas";

	function setdonpc(a, s) {
		var c;
		if (s == "对话") {
			c = "ask "
		} else if (s == "比试") {
			c = "fight "
		} else if (s == "杀死") {
			c = "kill "
		} else if (s == "给予") {
			c = "give "
		} else if (s == "打探") {
			c = "npc_datan "
		} else if (s == "跟班") {
			c = "follow_play "
		}
		var b = $(".cmd_click3");
		for (var i = 0; i < b.length; i++) {
			var d = b[i].innerText;
			if (a == d) {
				var e = b[i].getAttribute('onclick').split("'")[1].split(" ")[1];
				if (s == '比试' || s == '杀死') {
					go('#on;' + c + e + '|;#off')
				} else {
					go(c + e)
				}
				return
			}
		}
		console.log("未找到 " + a);
		if (nowjob == 'mt') {
			if (database.sbjwait == 1) {
				console.log('等待30秒npc复活后接着扫暴击');
				clearTimeout(bs_time);
				bs_time = setTimeout(function() {
					setdonpc(a, by)
				}, 30000)
			} else {
				console.log('npc死亡中,跳过此谜题');
				setTimeout(function() {
					clearmt();
					setTimeout(askMiti, 600)
				}, 2000)
			}
		}
	}
	function givegold(a, n) {
		var b;
		if (n == 1) {
			b = "auto_zsjd_";
			go(b + qixiaCode1[a])
		} else if (n == 15) {
			b = "auto_zsjd20_";
			go(b + qixiaCode1[a])
		}
	}
	function opendonpc(s) {
		J = s;
		triggers.enableByCls("donpc")
	}
	triggers.newTrigger(/(.*)看起来(.*)武功看上去/, function(m) {
		triggers.disableByCls("donpc");
		clickbtn(J)
	}, "donpc", "");
	triggers.disableByCls("donpc");
	var K = false;

	function go_home() {
		if (K == false && kfql_flag == 0) {
			go("home")
		} else if (K == true && kfql_flag == 0) {
			go("home;clan scene")
		} else if (K == false && kfql_flag == 1) {
			go("jh 1;home")
		}
	}
	var L = 1;

	function readvip() {
		clickButton('vip');
		setTimeout(readvip1, 150)
	}
	function readvip1() {
		if ($('span.out4').text().indexOf("尚未开通") != -1) {
			console.log("非论剑vip用户");
			clickButton('prev');
			L = 0;
			g_gmain.recvNetWork2(HIC + "你的vip月卡为 " + L + "\n" + NOR);
			return
		} else {
			console.log("很棒，您的vip还没过期");
			clickButton('prev');
			g_gmain.recvNetWork2(HIC + "你的vip月卡为 " + L + "\n" + NOR)
		}
	}
	var M;

	function look_nowjh() {
		clickButton('jh');
		bs_time = setTimeout(getnowjh, 100)
	}
	function getnowjh() {
		if ($("button.cmd_med:contains(进入关卡)").length == 1) {
			M = $("button.cmd_med:contains(进入关卡)")[0].getAttribute('onclick').split('jh ')[1].split("'")[0];
			console.log("你当前正在进行的章节是" + M);
			clickButton('prev');
			g_gmain.recvNetWork2(HIW + "你当前正在进行的章节是" + M + "\n" + NOR);
			setTimeout(readoverback, 200)
		} else {
			clearTimeout(bs_time);
			bs_time = setTimeout(getnowjh, 50)
		}
	}
	function readoverback() {
		if ($('span.outtitle').last().text() == 'VIP月卡') {
			clickButton('prev')
		}
	}
	function readmyvip() {
		getpostion();
		readvip();
		setTimeout(look_nowjh, 150)
	}
	function readyuanbao() {
		var a = g_obj_map.get("msg_attrs").get("yuanbao");
		var b = g_obj_map.get("msg_attrs").get("xf_score");
		g_gmain.recvNetWork2(HIG + "你的元宝有 " + a + "\n" + NOR);
		g_gmain.recvNetWork2(HIR + "你的消费积分有 " + b + "\n" + NOR);
		g_gmain.recvNetWork2(HIY + "当前功能按钮布局为" + buju + '--(' + o.screen.height + 'p)' + "\n" + NOR);
		g_gmain.recvNetWork2(HIM + "你所在的区是 " + userqu + "\n" + NOR);
		g_gmain.recvNetWork2(GRA + "你的当前出招设置为 " + mySkillLists + "\n" + NOR)
	}
	var N = "天师灭神剑|茅山道术|纵跃闪躲之术|青城步法|踏雪无痕|基本轻功|少林身法|梯云纵|铁血十二式";

	function hit() {
		if (is_fighting) {
			zdskill = mySkillLists;
			hit1()
		} else if ($('span.outbig_text:contains(战斗结束)').length > 0 && ssping == false) {
			clickButton('prev_combat')
		}
	}
	function hit1() {
		for (var i = 1; i < 7; i++) {
			skillName = $('#skill_' + i).children().children().text();
			if (skillName !== "" && isContains(zdskill, skillName) && gSocketMsg.get_xdz() > 2) {
				console.log(skillName);
				clickButton('playskill ' + i);
				return
			}
		}
		for (i = 1; i < 7; i++) {
			skillName = $('#skill_' + i).children().children().text();
			if (skillName !== "" && !isContains(N, skillName) && gSocketMsg.get_xdz() > 2) {
				console.log(skillName);
				clickButton('playskill ' + i);
				return
			}
		}
	}
	function autorecovery() {
		var a = parseInt(g_obj_map.get("msg_attrs").get("kee"));
		var b = parseInt(g_obj_map.get("msg_attrs").get("max_kee"));
		var c = parseInt(g_obj_map.get("msg_attrs").get("force"));
		var d = parseInt(g_obj_map.get("msg_attrs").get("max_force"));
		words2('角色当前属性  生命值:' + a + " / " + b + '       内力值:' + c + " / " + d + "\n");
		if ((a < b || c < d) && !is_fighting && btnList['开BOSS'].innerText == '开BOSS' && br != 1) {
			console.log("大侠你受伤了！角色当前气血值--" + a + " ?最大气血值--" + b);
			writeout("大侠你受伤了！角色当前气血值:" + a + "  <span style='color:rgb(118, 235, 32)'>最大气血值:</span>" + b + "<br><span style='color:rgb(32, 209, 235)'>小道正在为您疗伤......</span>", "red");
			getthingnum("千年灵芝");
			if (A == 1) {
				setTimeout(function() {
					if (ca > 40) {
						console.log("小道正在为您疗伤，请稍等...");
						canxuesheng()
					} else if (ca <= 40 || ca == null) {
						console.log("检测包里千年灵芝不够，无法为您治疗");
						writeouts("道长论剑论坛：", "大侠战斗劳累，买点千年灵芝充充饥？", mqn, "现在去买");
						clickButton("share_ok 6")
					}
				}, 1000);
				return
			} else if (A == 0) {
				setTimeout(function() {
					if (ca > 40) {
						canxuesheng()
					} else {
						writeouts("道长论剑论坛：", "大侠战斗劳累，买点千年灵芝充充饥？", mqn, "现在去买");
						clickButton("share_ok 6")
					}
				}, 10000)
			}
		} else if (is_fighting) {
			console.log("战斗中，不支持一键治疗功能");
			return
		} else {
			if (recback_flag == 1 && changeTrigger == 1) {
				recback_flag = 0;
				changeTrigger = 0;
				setTimeout(function() {
					clickButton("fight " + cF);
					clickButton("kill " + cF)
				}, 500);
				if (bg == 0 && database.ai_chuzhao > 0) {
					chuzhao_open()
				}
			} else if (recback_flag == 1 && changeTrigger == 0) {
				recback_flag = 0;
				setTimeout(function() {
					clickButton("fight " + cx);
					clickButton("kill " + cx)
				}, 500);
				if (bg == 0 && database.ai_chuzhao > 0) {
					chuzhao_open()
				}
			}
		}
	}
	function clearbughongbao() {
		go('client_prompt empty_chat;empty_chat;quit_chat;cancel_prompt;go_chat')
	}
	triggers.newTrigger(/道长论剑重连成功/, function(m) {
		triggers.disableByCls("getname");
		if (myName == "undefined") {
			myName = g_obj_map.get("msg_attrs").get("name").replace("[1;35m", "").replace("[2;37;0m", "");
			myName += "";
			var a = myName.replace(/[^\x00-\xff]/g, "01").length
			if (a > 20) {
				console.log("彩人请到论剑主页刷新网页，否则无法正确获得授权")
			}
			console.log("后台获取名字" + myName)
		}
		words2(myName + "你好!你正在使用的是道长的道长论剑DZ正版脚本。当前版本号为--" + nowversion);
		console.log('您的名字是：' + myName);
		var b = myName;
		if (!database_all.newkf_open) {
			database_all.newkf_open = 0
		}
		if (skillset.hasOwnProperty(myName)) {
			mySkillLists = skillset[myName].split(',')[0];
			cz_skills = mySkillLists.split(";");
			myForce = skillset[myName].split(',')[1];
			enforcePoints = skillset[myName].split(',')[2];
			limitQixue = skillset[myName].split(',')[3];
			quid1 = skillset[myName].split(',')[4];
			quid = "[" + quid1 + "区]";
			console.log(skillset[myName])
		}
		if (skillset1.hasOwnProperty(myName)) {
			if (skillset1[myName].split(',')[0] != "默认") {
				cA = skillset1[myName].split(',')[0]
			}
			if (skillset1[myName].split(',')[1] != "默认") {
				qxList_inputs = skillset1[myName].split(',')[1]
			}
		}
		if (skillset2.hasOwnProperty(myName)) {
			if (skillset2[myName].split(',')[0] != "默认") {
				ql_killset = skillset2[myName].split(',')[0]
			}
			if (skillset2[myName].split(',')[1] != "默认") {
				tuoguan = skillset2[myName].split(',')[1]
			}
			if (skillset2[myName].split(',')[2] != "默认") {
				ssp_site = skillset2[myName].split(',')[2]
			}
			if (skillset2[myName].split(',')[3] != "默认") {
				tgeat_jhl = skillset2[myName].split(',')[3]
			}
			if (skillset2[myName].split(',')[4] != "默认") {
				tgeat_bpl = skillset2[myName].split(',')[4]
			}
			if (skillset2[myName].split(',')[5] != "默认") {
				qlrob = skillset2[myName].split(',')[5]
			}
		}
		if (skillset3.hasOwnProperty(myName)) {
			if (skillset3[myName].split(',')[0] != "默认") {
				aiqx_order = skillset3[myName].split(',')[0];
				cj = aiqx_order.split("-")
			}
			if (skillset3[myName].split(',')[1] != "默认") {
				aiqx_mode = skillset3[myName].split(',')[1]
			}
			if (skillset3[myName].split(',')[2] != "默认") {
				tg_qx = skillset3[myName].split(',')[2]
			}
			if (skillset3[myName].split(',')[3] != "默认") {
				ai_autotupo = skillset3[myName].split(',')[3]
			}
			if (skillset3[myName].split(',')[4] != "默认") {
				ai_tupolist = skillset3[myName].split(',')[4];
				ai_tupolists = ai_tupolist.split(";")
			}
			if (skillset3[myName].split(',')[5] != "默认") {
				tg_ql = skillset3[myName].split(',')[5]
			}
			if (skillset3[myName].split(',')[6] != "默认") {
				tg_yx = skillset3[myName].split(',')[6]
			}
		}
		console.log("当前换装武器:" + cA);
		console.log("当前出招技能:" + mySkillLists);
		console.log("当前区段设置为:" + quid + "请在总设置里自行更改");
		console.log("新开跨服标识:" + database_all.newkf_open);
		if (kgg_flag == 1) {
			teshuset_read()
		}
		bugjiance();
		limit();
		setTimeout(readyuanbao, 1000);
		if (yc_flag == 0 && typeof dreamuser1 != "undefined" && vipplayer == true) {
			triggers.disableByCls("yuancheng")
		}
		if (database_all.newkf_open == 1) {
			setTimeout(function() {
				triggers.enableByCls("newkf_open1");
				go("change_server world")
			}, 1500)
		}
	}, "getname", "");
	triggers.newTrigger(/】(.*)【气血】/, function(m) {
		triggers.disableByCls("getname1");
		myName = m[1].replace(' (换称号)', "");
		readmyvip()
	}, "getname1", "");
	triggers.newTrigger(/【队伍】(.*)申请加入队伍。/, function(m) {
		setTimeout(function() {
			clickbtn("允许")
		}, 300)
	}, "zudui", "");
	var O;
	document.onkeydown = function() {
		var e = document.event || arguments[0];
		if (e.keyCode == 123) {
			alertmsg("道长论剑审查元素", "你正在使用F12开发者功能审查页面元素");
			searchcode();
			return false
		} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 74)) {
			alertmsg("警告！！！", "小逼，说了喊你不要乱搞了");
			return false
		} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
			alertmsg("警告！！！", "傻逼，你是不是说不听");
			return false
		} else if ((e.shiftKey) && (e.keyCode == 121)) {
			alertmsg("警告！！！", "二狗子，还要不要继续试");
			return false
		} else if (e.keyCode == 38) {
			if ($("button.cmd_click_room").length > 0) {
				go("n")
			}
		} else if (e.keyCode == 40) {
			if ($("button.cmd_click_room").length > 0) {
				go("s")
			}
		} else if (e.keyCode == 37) {
			if ($("button.cmd_click_room").length > 0) {
				go("w")
			}
		} else if (e.keyCode == 39) {
			if ($("button.cmd_click_room").length > 0) {
				go("e")
			}
		} else if (e.keyCode == 104) {
			if ($("button.cmd_click_room").length > 0) {
				go("n")
			}
		} else if (e.keyCode == 98) {
			if ($("button.cmd_click_room").length > 0) {
				go("s")
			}
		} else if (e.keyCode == 100) {
			if ($("button.cmd_click_room").length > 0) {
				go("w")
			}
		} else if (e.keyCode == 102) {
			if ($("button.cmd_click_room").length > 0) {
				go("e")
			}
		} else if (e.keyCode == 103) {
			if ($("button.cmd_click_room").length > 0) {
				go("nw")
			}
		} else if (e.keyCode == 97) {
			if ($("button.cmd_click_room").length > 0) {
				go("sw")
			}
		} else if (e.keyCode == 105) {
			if ($("button.cmd_click_room").length > 0) {
				go("ne")
			}
		} else if (e.keyCode == 99) {
			if ($("button.cmd_click_room").length > 0) {
				go("se")
			}
		} else if (e.keyCode == 96) {
			if ($("button.cmd_click_room").length > 0) {
				go_home()
			}
		} else if (e.keyCode == 107) {
			clickbtn("确定")
		} else if (e.keyCode == 109) {
			clickbtn("取消")
		} else if (e.keyCode == 81) {
			clickbtn("对话")
		} else if (e.keyCode == 87) {
			clickbtn("比试")
		} else if (e.keyCode == 69) {
			clickbtn("杀死")
		} else if (e.keyCode == 82) {
			clickbtn("给予")
		} else if (e.keyCode == 32) {
			if ($("span.out2:contains(清空信息)").length == 0) {
				go("golook_room")
			}
		} else if (e.keyCode == 66) {
			if ($("span.out2:contains(清空信息)").length == 0) {
				go('items')
			}
		} else if (e.keyCode == 86) {
			if ($("span.out2:contains(清空信息)").length == 0) {
				go('vip')
			}
		} else if (e.keyCode == 74) {
			if ($("span.out2:contains(清空信息)").length == 0) {
				searchmap()
			}
		}
	};
	(function admin() {
		'use strict';
		var d = {
			open: false,
			orientation: null
		};
		var e = 160;
		var f = function(a, b) {
				o.dispatchEvent(new CustomEvent('devtoolschange', {
					detail: {
						open: a,
						orientation: b
					}
				}))
			};
		O = setInterval(function() {
			var a = o.outerWidth - o.innerWidth > e;
			var b = o.outerHeight - o.innerHeight > e;
			var c = a ? 'vertical' : 'horizontal';
			if (!(b && a) && ((o.Firebug && o.Firebug.chrome && o.Firebug.chrome.isInitialized) || a || b)) {
				if (!d.open || d.orientation !== c) {
					f(true, c)
				}
				d.open = true;
				o.location.replace("http://playdreamer.cn/");
				d.orientation = c
			} else {
				if (d.open) {
					f(false, null);
					o.location.replace("http://playdreamer.cn/")
				}
				d.open = false;
				d.orientation = null
			}
		}, 500);
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = d
		} else {
			o.devtools = d
		}
	})();
	var P = {
		"木兰换装。（猜一数量词）": "三米",
		"人为的变动。（打一军事用语）": "火力",
		"女十八兮叹分离。（打《红楼梦》人名）": "杏奴",
		"口若悬河滔滔不绝。（打一电影片名）": "无间道",
		"支取回扣要追回。（打一书报名）": "聊斋志异篇目",
		"走出黑胡同。（猜一物理名词）": "可见光",
		"新加坡。（打一地名）": "原平",
		"从头到尾没来过重庆。（打一成语）": "始终不渝",
		"发现破绽及时补。（打一成语）": "见缝插针",
		"小雪无雨水有余。（打一地名）": "当涂",
		"沉默不语。（打一字）": "哈",
		"直上九重天。（打一地名）": "通霄",
		"虚胖。（猜一种食品）": "肉松",
		"杆短杈多叶子大，青色灯笼树上挂，要是用它把油榨，家具船舱寿命延。（打一植物）": "油桐树",
		"宋朝被后人称为“弱小的宋国”的重要原因的一项政策是什么？": "",
		"逸仙胸中事，时铭华夏情。（打一书报名）": "文心雕龙",
		"南昌起义时，当时最年轻，开国后是元帅的人物是谁？": "林彪",
		"白娘子被困。（打一国家）": "卡塔尔",
		"一物生来身穿三百多件衣，每天脱一件，年底剩张皮。（猜一日常用品）": "日历",
		"政府部门无计可施。（猜成语）": "机关算尽",
		"天堂之门。（猜一地名）": "神户",
		"八宝饭比八宝粥价廉。（打五字成语）": "物以稀为贵",
		"大开绿灯。（打一中草药名）": "路路通",
		"存心不善，有口难言。（打一字）": "亚",
		"云盖中秋月，雨淋元宵灯。（打一成语）": "下落不明",
		"暗访山东。（打二字国家名）": "秘鲁",
		"自己没一点主见。（打二字常用语）": "体现",
		"废李后,弃孤儿。（打一水果）": "木瓜",
		"禄山宫中养作儿。（打一书报名）": "王子安",
		"斋前美女少一人。（猜一演员）": "姜文",
		"卡通。（打一地名）": "开封",
		"枫林未染。（打一国家）": "不丹",
		"起宏图。（打一中草药名）": "远志",
		"一个孩子生的好，衣服穿了七八套，头上戴着红缨帽，身上装着珍珠宝。（猜植物一）": "玉米",
		"高台对映月分明。（打一字）": "昙",
		"口比肚子大，给啥就吃啥它吃为了你，你吃端着它。（打一日常用品）": "饭碗",
		"六王毕，四海一。（打《红楼梦》人名": "秦邦业",
		"龙王到处雨倾盆。（猜一成语）": "君临天下",
		"担土筑堤道初成。（国名）": "新加坡",
		"莫点玉成瑕。（打一书报名）": "晚霞",
		"探望往日同窗。（打一明星）": "张学友",
		"山中无老虎·脱帽格成语": "沐猴而冠",
		"一黑一白斗智斗勇。（打一物品）": "围棋",
		"寡言。（打一气象用语）": "少云",
		"皇后。（打一地名）": "凤凰古城",
		"离别正堪悲。（打一歌曲名）": "欢聚",
		"白如玉,穿黄袍,只有一点大,都是宝中宝。": "稻子",
		"头上一朵花，脚下一把刷，腰里抱个金娃娃": "玉米",
		"狗过了独木桥就不叫了。（猜一成语）": "过目不忘",
		"先提携而后桑食。（打一植物）": "扶桑",
		"知人知面亦知心。（打一地名）": "三明",
		"众芳竞艳。（打《水浒传》人名）": "花荣",
		"西湖楼前梅参差。（打一地名）": "海林",
		"人到愁来无处会。（打一植物）": "合欢",
		"木苗断后忙接合。（猜一水果名）": "芒果",
		"说走就走。（打一成语）": "",
		"僧穿彩衣。（打《水浒传》人物绰号）": "花和尚",
		"飞香走红满天春。（打一植物）": "凌霄花",
		"耶稣语录。（打一电影）": "神话",
		"如来掌中，悟空折腾。（打一书报名）": "随便翻翻",
		"拿起锄头除除草，活动筋骨不会老。（打一节日）": "劳动节",
		"前面来只船，舵手在上边来时下小雨，走后路已干。（猜一日常用品）": "熨斗",
		"家住水村泥塘，身穿湖绿衣裳，不见受胎怀孕，只见大肚啷当。（打一植物）": "茭白",
		"两三朵云封太岳。（打一书报名）": "陆押官",
		"事事齐全说汉高。（打《三国演义》人名）": "刘备",
		"一顶小涩落在林中，一旦撑开，再难收拢。（打一植物）": "蘑菇",
		"花前柳下一片香。（打一书报名）": "蕙芳",
		"大脚皇后有喜。（外地名）": "马六甲",
		"有志归完璞。（打一书报名）": "石头记",
		"万籁俱寂。（打一地名）": "周宁",
		"全面整顿。（打一地名）": "大理",
		"东坡杖。（打一植物）": "扶苏",
		"一轮明月照窗前。（打一礼貌用语）": "光临舍下",
		"年终岁尾，不缺鱼米。（打一字）": "鳞",
		"一户多人。（猜一字）": "扅",
		"瓜中之王黄金龙，香甜奶香味儿浓。（打一植物）": "哈密瓜",
		"脱粒机。（打一成语）": "吞吞吐吐",
		"生根不落地，有叶不开花，街上有人卖，园里不种它。（打一植物）": "豆芽",
		"入门无犬吠。（打一字）": "问",
		"支取回扣要追回。（打一书报名）": "口技",
		"提前一日再相逢。（打一食品）": "担担面",
		"博褒妃笑一声。（打一书报名）": "烽烟图",
		"工人个个要团结。（打一植物）": "天竹",
		"只骗中年人。（打一成语）": "童叟无欺",
		"童话。（打一文学用语）": "小说",
		"主称会面难。（打一植物）": "鲜客来",
		"会走路的豆子。（打一字）": "逗",
		"各一方话鼠。（打一画家名）": "吴道子",
		"简历。（猜一古书名）": "易经",
		"有望冠军都包揽。（打一书报名）": "巴金全集",
		"门外汉。（打《论语》一句）": "未入于室也",
		"由来与共水纵横。（打一地名）": "黄州",
		"自言自语。（打一书报名）": "我是一片云",
		"德祖脱离主战场。（猜一语文名词）": "修辞格",
		"白天不见鼠，晚上鼠为患。（猜象棋术语）": "黑方多子",
		"圆圆形状似龙睛，一颗朱红值千金；红汁一流水灵灵，酸甜适口受欢迎。（打一植物）": "杨梅",
		"半导体。（打一字）": "付",
		"莺梭柳线结春恨。（打一书报名）": "织成",
		"元宵虎会。（打一字）": "夤",
		"草原一场大火。（打一水果）": "草莓",
		"娄阿鼠问卦。（打一成语）": "做贼心虚",
		"果皮红绿黄，果肉红白黄。（打一热带水果）": "番石榴",
		"先礼后兵。（打一地名）": "仪征",
		"重庆绿化好。（打一地名）": "青城山",
		"掌声经久不息。（打北京一地名）": "延庆",
		"进水行不成。（打一字）": "衍",
		"元宵节后捷报多。（打一成语）": "喜出望外",
		"扩建宅围。（打一旅游城市）": "张家界",
		"渐渐安定。（打《水浒传》人名）": "徐宁",
		"长江后浪推前浪。（打一四字常用语）": "高潮迭起",
		"残红半落两相思。（猜蔬菜名）": "豇豆",
		"岩上玉兔初露容。（打一地名）": "月牙山",
		"红娘子，上高楼，心里疼，眼泪流。（打一日用品）": "蜡烛",
		"一日千里说大雁。（打一地名）": "辽阳白塔",
		"绿色叶子红色根，大力水手的最爱。（打一植物）": "菠菜",
		"红叶日暮舟歇岸。（打一书报名）": "枫桥夜泊",
		"小憩傍午客舍中。（打一地名）": "驻马店",
		"初为人母。（打一称谓）": "新娘",
		"暴富。（猜一歌名）": "短发",
		"心，不左不右，不上不下。（打一字）": "忠",
		"宰辅列传。（打一日常用品）": "相册",
		"再三谦让。（打《三国演义》人名）": "	陆逊",
		"圆圆浆果色泽艳，草龙珠儿味道甜。（打一植物）": "葡萄",
		"披黄衣，不用剥，酸眯眼，泡泡水。（打一植物）": "柠檬",
		"秋灯暗淡月光明。（猜一花名）": "丁香",
		"著手成春。（打一书报名）": "新年作",
		"丰收。（打一字）": "移",
		"元宵之后柳吐芽。（打一成语）": "节外生枝",
		"一朝离散重相聚,今人已变旧时容。（打一节令）": "腊八节",
		"日近黄昏。（打一地名）": "洛阳",
		"小小个头似苹果，美女都爱当水果。（打一植物）": "番茄",
		"固若金汤。（打河北一地名）": "保定",
		"人到春天面貌新。（猜一音乐名词）": "合奏",
		"弹无虚发，非兵器也，乃正气之。（一把兵器）": "小李飞刀",
		"千里黄河水滔滔。（打一书报名）": "不息的浪潮",
		"三两木耳。（打一地理名词）": "	森林",
		"两度失手后，理应受排挤。（猜一篮球术语）": "挡拆",
		"日边红杏倚云栽。（打一植物）": "",
		"拍一个巴掌。（打一地名）": "五指山",
		"妈妈至死不开窍。（猜一三字称谓）": "老板娘",
		"弟兄七八个，围着柱子坐，只要一分开，衣服就扯破。（打一植物）": "蒜",
		"十五天。（猜一字）": "胖",
		"层云隐去月当头。（打字一）": "屑",
		"推迟战事。（打一地名）": "延安",
		"开一半票,提一半货。（打一字）": "贾",
		"白日不相逢。（打一植物）": "夜合",
		"乞丐也看戏。（打一歌名）": "穷开心",
		"滔滔不绝。（打一中草药名）": "长流水",
		"坐也是卧，站也是卧，走也是卧，卧也是卧。（打一动物）": "不是蛇",
		"一个黑孩，从不开口，要是开口，掉出舌头。（打一植物果实）": "瓜子",
		"航班余票。（打一成语）": "有机可乘",
		"登陆。（猜一书类）": "辞海",
		"早不说晚不说。（打一字）": "许",
		"十人九死。（打一中药名）": "独活",
		"全部罗成。（打一书报名）": "不漏的网",
		"园外隐约闻猿啼，星月小桥听萧声。（节日纪念日）": "元宵节",
		"家家迎元宵。（学校用语）": "第二节",
		"天才出于勤奋。（猜一工业用词）": "多功能",
		"正月无初一。（打一字）": "肯",
		"先生春节前回鲁南。（打一中草药名）": "茴香",
		"花儿红艳，花儿成串，要问为何，害怕孤单。（打一植物）": "串红",
		"方法论。（打一中草药名）": "白术",
		"工于寻找突破点。（猜一股票名词）": "空头",
		"红芭蕉种假山堆。（打一书报名）": "美人首",
		"一。（打一成语）": "接二连三",
		"革命！锤子加镰刀。（一个事件）": "十月革命",
		"一唱雄鸡天下白。（打一植物）": "萱草",
		"哑巴打手势。（打一成语）": "不言而喻",
		"个人捐款。（打一地名）": "自贡",
		"何必落泊重组合。（猜一神话人物）": "河伯",
		"男子被阉实可哀。（猜古典名著）": "汉宫秋",
		"小名叫作馍馍蛋，皮黄疙瘩不好看。（打一植物）": "马铃薯",
		"圆圆的月亮高高挂。（打一电影明星）": "高圆圆",
		"木兰之子。（猜一食物）": "花生",
		"正是周处。（打一地名）": "中非",
		"星际宝贝小可爱，蓝色脑袋思维快。（打一卡通人物）": "史迪奇",
		"子房实欲复韩仇。（打一书报名）": "果报",
		"四通八达。（打一成语）": "头头是道",
		"鹿马驴牛它不像，却难猜是哪一样，打开天窗说亮话，它有自己亲爹娘": "麋鹿",
		"千里春。（打一植物）": "广青",
		"御医。（一个人物）": "黄药师",
		"云中岳。（台中县地名）": "雾峰",
		"万念不忘改革。（打一地名）": "怀化",
		"一马离了西凉界。（猜一三字口语）": "别胡来",
		"过江码头。（打一地名）": "渡口",
		"百年好合。（猜一历史年号）": "永和",
		"学狗坐，没狗高，又没耳朵又没毛。（猜一动物）": "青蛙",
		"卉。（猜一植物名）": "南冠草",
		"出手不凡。（打一花卉）": "仙人掌",
		"糟糠之妻不可忘。（打一书报名）": "陋室铭",
		"兄弟姐妹皆列士。（猜一历史年号）": "同光",
		"湖畔树间飞鸟鸣。（打一地名）": "汉口",
		"敲山震虎。（打一中草药名）": "驱风散",
		"玖楼国里美公主，记忆羽毛有魔力。（打一卡通人物）": "小樱",
		"相声。（打一成语）": "装腔作势",
		"庄周梦化飞地府。（打一地名）": "蝴蝶泉",
		"第11本书。（猜一成语）": "不可思议",
		"垦荒。（打一地名）": "开原",
		"职工考勤表。（打一书报名）": "劳动时报",
		"夕阳旁的晚霞没有雨。（打一字）": "暇",
		"只见得红妆半露。（打一神话人物）": "织女",
		"一年相思。（打一植物）": "四季豆",
		"纸老虎。（打一成语）": "外强中干",
		"古道改造有大楔打一书报名）": "老路灯",
		"九十春光桃灼灼。（打一植物）": "三月红",
		"发现破绽及时补。（打一成语）": "见缝插针",
		"领导植树我伴随。（打三字常用语）": "栽跟头",
		"师承庞士元。（猜一学科）": "传统学",
		"三扎两刺身自轻。（打一植物）": "五针松",
		"没到终点，只得放下。（猜一字）": "络",
		"辣椒市敞打一地名）": "辛集",
		"三十六计，反复无常。（打一植物）": "槐树",
		"屋漏偏逢连夜雨。（三字俗语）": "破落户",
		"万年青。（打一植物）": "春不老",
		"金箍桶，银箍桶，打开来，箍不拢。（猜一动物）": "蛇",
		"子书。（打一书报名）": "写在深夜里",
		"到了长城放声唱。（打一歌名）": "好汉歌",
		"虽然处了对象，却无出嫁之意。（猜医学用语）": "偶有不适",
		"三十出头的男人。（打二字节日）": "端阳",
		"头大身子细，黑红珍珠粒，能养人和马，可造白兰地。（打一植物）": "高粱",
		"或赤如丹砂，或绛若朱霞。（打一植物）": "一串红",
		"久旱逢甘露。（打水浒传人物绰号）": "及时雨",
		"电大广播。（打一字）": "庵",
		"塞北山中遇黑夜，一再小心。（猜苏联历史人物）": "列宁",
		"金灿灿，银灿灿，小小花儿真漂亮，秋风一吹喷喷香，你家我家万家香。（打一植物）": "桂花",
		"皇。（打一成语）": "	白玉无暇",
		"已无钟磬连宵动。（打一地名）": "静安寺",
		"沫若乡间住处。（打北京一地名）": "郭公庄",
		"与君激战夜半时。（猜一外国哲学家）": "黑格尔",
		"落地就会跑，胡子一大把，不管见了谁，总爱喊妈妈。（打一动物）": "山羊",
		"举头望明月。（猜一人物）": "高圆圆",
		"幽篁向阳人家，小桥会友月斜。（打一书报名）": "简爱",
		"餐厅二十四小时营业。（天文学名词）": "日全食",
		"上下一体。（打一字）": "卡",
		"张清绝技。（打一地名）": "飞来石",
		"把腐朽的东西扔进垃圾桶。（猜一成语）": "臭味相投",
		"周郎新欢。（打五字宋词句一）": "小乔初嫁了",
		"两点天上来。（打一字）": "关",
		"天下珍品。（猜一著名商标）": "大宝",
		"聊斋。（打一歌名）": "死了都要爱",
		"马嵬坡下泥土中。（打一外国影片或游戏名）": "古墓丽影",
		"要光明正大，不要搞阴谋诡计。（打一地名）": "宜阳",
		"祢衡之死。（打一书报名）": "被操纵的谋杀",
		"济人急难。（打《水浒传》人名）": "施恩",
		"抽水泵。（打一字）": "石",
		"一朝天子一朝臣。（打一地名）": "登封",
		"春到它来临，催唤播种人，秋后它返回，遍传丰收音。（打一动物）": "布谷鸟",
		"买东西能俭即俭。（猜商业活动）": "购物节",
		"一心要当射箭手。（打一成语）": "矢志不移",
		"南军归顺。（台湾地名）": "北投",
		"庄生晓梦相迷，望帝春心。（打一词牌名）": "蝶恋花",
		"妇女节前夕。（打一中草药）": "三七",
		"白糖梅子真稀奇。（打一食物）": "元宵",
		"战争画面。（打一书报名）": "烽烟图",
		"一浪紧似一浪。（打一地名）": "波密",
		"千年老宅人人知。（打一日本城市）": "名古屋",
		"笔走龙蛇翰墨香。（打一书报名）": "芳草",
		"霹雳一声见宝光。（打一地名）": "潮音寺",
		"登顶再见。（打一四字常用语）": "高度重视",
		"一句出口来,当面细分析。（打一国家）": "缅甸",
		"返老还童。（猜一古代人物）": "颜回",
		"让奴婢也来猜谜。（猜一古代官职）": "仆射",
		"美梦。（打一成语）": "好景不长",
		"生有一女是昭君。（打一字）": "墙",
		"中午集合。（打一地名）": "罗马",
		"社会在发展。（打《水浒传》人名）": "史进",
		"情投意合。（打宁夏一地名）": "同心",
		"一个小姑娘，生在水中央，身穿粉红衫，坐在绿船上。（打一植物）": "荷花",
		"顶破天。（打一字）": "夫",
		"君子意若何。（打一地名）": "兰考",
		"蜜饯黄连。（打一成语）": "同甘共苦",
		"春来植树勤出力。（打一植物）": "木槿",
		"小雪无雨水有余。（打一地名）": "当涂",
		"考取当求有为。（打一地名）": "中南海",
		"乖。（打一成语）": "乘人不备",
		"笑弯了腰。（打一音乐用语）": "乐曲",
		"十步之泽必有香草。（打一植物）": "水花生",
		"电脑卡死，随即掉线。（猜一成语）": "当机立断",
		"华夏后人多俭省。（打一节日名）": "中秋节",
		"了望全球。（打一书报名）": "看世界",
		"巴黎之恋。（猜一电影影名）": "法内情",
		"十四为君妇。（三字球类术语）": "小配合",
		"小小古月有黑白，若要用时将它拍。（打一植物）": "胡椒",
		"阮郎囊涩。（打一书报名）": "文人无文",
		"谋到家财就离婚。（打一书报名）": "怀钱舍人",
		"妇女解放翻身做主。（打一中国地名）": "山东",
		"小矮人，有名姓，办大事，它作证。（打一文化用品）": "图章",
		"唱歌不用嘴，声音真清脆，嘴尖像根锥，专吸树枝水。（一动物）": "蝉",
		"天不绝曹。（打《三国演义》人名）": "魏续",
		"带着平顶帽，身穿圆筒袄，虽然一只眼，暗中逞英豪。（打一日用品）": "手电筒",
		"海湾战争美国率先突破伊拉克防空雷达网的是哪架战机？。（两个汉字）": "夜鹰",
		"不知其三。（打一书报名）": "五通二则",
		"少女原是公瑾妻。（打一字）": "娇",
		"堂前草色入帘青。（打一书报名）": "小翠",
		"上海一游愁心散。（传统节日）": "中秋",
		"望帝姐。（猜一古代经书）": "弟子规",
		"默转身，泪珠已成行。（猜一歌曲）": "天黑",
		"被称为无冕之王的四代战斗机，但是竞标失败的飞机是？。（一个绰号）": "黑寡妇",
		"白白黑黑绿绿红，百花园中我为王；洛阳族类甲天下，最是魏紫与姚黄。（打一植物）": "牡丹",
		"屡试屡成。（打一动物名）": "百灵",
		"自甘受骗。（猜水果一）": "柠檬",
		"判为肝硬化。（猜杂志用语）": "半月刊",
		"头顶长须长过身，幼时钻木是害虫。（打一昆虫）": "天牛",
		"枫林未染。（打一国家）": "不丹",
		"分明万点雨花前。（猜一古代人名）": "方腊",
		"荐之于平原君。（打一成语）": "引人入胜",
		"元宵回暖。（韵目带数）": "十四寒",
		"离情终日思风波。（打一地名）": "爱晚亭",
		"早上隐玉兔。（打一书报名）": "十月",
		"都市少女。（打一国外城市）": "汉城",
		"白娘子被困。（打一国家）": "卡塔尔",
		"飞行员。（打一成语）": "	有机可乘",
		"女十八兮叹分离。（打《红楼梦》人名）": "杏奴",
		"暗中下围棋。（打一成语）": "皂白不分",
		"基友。（猜一小说人物）": "萧峰",
		"一块变九块。（打一成语）": "四分五裂",
		"北京午夜。（打一动物）": "燕子",
		"百姐妹，千姐妹，同床睡，各盖被": "石榴",
		"天。（猜一历史人物名）": "夫差",
		"齿印花瓣四季开，茎大似竹叶青翠。（打一花卉）": "石竹",
		"制酒术。（打一书报名）": "曲艺",
		"弹丸之地。（打一字）": "尘",
		"一出嵩山眼底清。（猜围棋术语）": "高目",
		"只有谜底未变。（打一成语）": "面目全非",
		"千朵万朵压枝低。（打一植物）": "花旺",
		"说尽心中无限事。（一个清代年号）": "道光",
		"周游列国广见识。（打一书报名）": "世界博览",
		"改了百分之九十。（打一成语）": "一成不变",
		"与日月同辉。（打一地名）": "明光",
		"一个人含着包子坐在马桶上。（猜一成语）": "含苞待放",
		"熙熙攘攘。（打一字）": "侈",
		"自荐当向导。（打一书报名）": "我才知道",
		"默默无语两眼泪。（猜医学名词）": "静滴",
		"金秋映白帆，北行赏牡丹。（打一植物）": "海棠花",
		"两点十分来游园。（打一字）": "尊",
		"渡江测试。（打一书报名）": "经济参考",
		"村后寺下日落时。（猜数量词）": "三寸",
		"春来尚且获利中。（打一植物）": "堂梨",
		"芬芳沁码头。（打一地名）": "香港",
		"望美人兮天各一方。（打一字）": "娱",
		"头脑聪明有好处。（打一国家名）": "智利",
		"无底洞。（打一成语）": "深不可测",
		"老板出门去城西。（猜一工业名词）": "成品",
		"空有兽王之脉，却行逮鼠之差。（打一动物）": "猫",
		"万户桃花红。（打一地名）": "侯马",
		"小说《苦菜花》。（打一植物）": "书带草",
		"重点干起，秋前方成。（打天津一地名）": "和平",
		"阵前各方无一生。（打一字）": "隆",
		"怒不可遏。（打一天文用语）": "大气",
		"入幕之宾。（打一地名）": "西藏",
		"大排小排,价钱便宜。（打三字常用语）": "贱骨头",
		"欧洲见闻录。（打一书报名）": "西游记",
		"在首都邂逅欧洲经典油画。（电影）": "北京遇上西雅图",
		"除夕守岁。（打论语一句）": "终夜不寝",
		"征稿。（打一字）": "救",
		"空对空导弹。（打一成语）": "见机行事",
		"奥运射击冠军。（打《水浒传》人物绰号）": "金枪手",
		"内里有人。（打一字）": "肉",
		"貞觀之治。（猜一演員）": "唐国强",
		"悟空度寒暑，白龙踏清辉。（打一成语）": "猴年马月",
		"头上亮光光，出门就成双背上缚绳子，驮人走四方。（打一物品）": "皮鞋",
		"戒之在斗。（打唐五言诗一句）": "莫学武陵人",
		"引出湖水广植林。（打一植物）": "胡麻",
		"忽闻岸上踏歌声。（打一四字常用语）": "别唱高调",
		"的士都没生意。（打一明星）": "车太贤",
		"高高个儿一身青，金黄圆脸喜盈盈，天天对着太阳笑，结的果实数不清。（打一植物）": "向日葵",
		"众芳摇曳落禅房。（打一地名）": "香积寺",
		"宁愿向前一步死。（打一书报名）": "退休生活",
		"叫它花，不是花，花园里头没有它，秋天你到田头看，满田开得白花花。（打一植物）": "棉花",
		"车子开错路。（猜一用品）": "白花油",
		"鲁迅行文如流水。（打一歌星）": "周笔畅",
		"鲛人挥泪。（打一中草药名）": "珍珠散",
		"请勿失约。（打一礼貌用语）": "别误会",
		"烦恼的喜事。（打三字常用语）": "讨人厌",
		"一江春水向东流。（打一地名）": "通海",
		"旧内衣。（猜一称谓）": "老衲",
		"鲛人挥泪。（打一中草药名）": "珍珠散",
		"二三四五六七八九。（打一成语）": "缺衣少食",
		"久别重逢。（打一中草药名）": "一见喜",
		"肥胖丈夫苗条妻。（成语）": "重男轻女",
		"半个西瓜样，口朝上面搁上头不怕水，下头不怕火。（打一日用品）": "锅",
		"小时候吃得用不得，大时候用得吃不得。（打一植物）": "竹子",
		"圆圆个头，头顶一撮毛。（打一植物）": "洋葱",
		"恍然大悟。（打一中草药名）": "脑立清",
		"敢上九天揽月。（打汽车名牌）": "凌志",
		"七仙女嫁出去一个。（打一成语）": "六神无主",
		"前后落得两分离。（猜一穴位）": "内关",
		"当兵要有好思想。（打一军事用语）": "军需品",
		"万家灯火闹元宵。（电影名）": "不夜城，乡情",
		"头戴黄色帽，身穿绿色袄生的孩子多，向着太阳笑。（打一植物）": "向日葵",
		"下联难配上联。（打三字礼貌用语）": "对不起",
		"一言千金。（打商标名称）": "声宝",
		"一封装着两颗蛋的信。（猜一成语）": "信誓旦旦",
		"红红棒子地里钻，长长绿尾露在外。（打一蔬菜）": "胡萝卜",
		"一夜鱼龙舞。（民俗风俗词语）": "元宵灯会",
		"打边鼓。（打一成语）": "旁敲侧击",
		"为储户保密。（打《四书》一句）": "慎言其余",
		"有钱做官是君子。（打一乳品公司）": "富仕兰",
		"三分之二为须眉。（打一书报名）": "男人的一半是女人",
		"后起之秀。（打一植物）": "晚艳",
		"蒙翳。（打一书报名）": "目的地不明",
		"人无远虑，必有近忧。（打一成语）": "处心积虑",
		"重向邯郸借枕头。（打一书报名）": "续黄粱",
		"电话一来便就职。（打一成语）": "听之任之",
		"人人向上。（打一植物）": "大雁腾空",
		"一个男人光屁股坐在石头上。（猜成语）": "以卵击石",
		"遥望兄弟登高处。（打一成语）": "一览无余",
		"投放资金有方。（打一字）": "咨",
		"生在山崖，落在人家凉水浇背，千刀万剐。（打一日常用品）": "磨刀石",
		"直在其中矣。（打一地名）": "曲周",
		"一江春水向东流。（打一中草药名）": "通大海",
		"逃跑必要加鞭。（猜一成语）": "溜须拍马",
		"垄上鸿鸟飞。（打一地名）": "龙江",
		"一股暖流通遍全身。（猜物理名词）": "热能传递",
		"高丽来的伊媚儿。（猜一古代人物）": "韩信",
		"方丈一人先入住。（猜一称谓）": "大使",
		"常食姜，不劳医生开药方。（宋词人）": "辛弃疾",
		"总是放弃。（猜一作家）": "老舍",
		"爱好旅游。（打一成语）": "喜出望外",
		"上搭棚，下搭棚,开黄花，结青龙。（打一水果）": "丝瓜",
		"菲律宾地方武装冲突。（打一歌名）": "是战争啊",
		"花鸟鱼，梅兰竹。（打一植物）": "除虫菊",
		"高台对映月分明。（打字一）": "昙",
		"满身刺，种类多，吃阳光，少开花。（打一植物）": "仙人掌",
		"水仙姑娘。（打一书报名）": "茶花女",
		"王允布局巧赚人。（打一称谓）": "侄儿",
		"皮黑肉儿白，肚里墨样黑，从不偷东西，硬说它是贼。（猜一动物）": "乌贼",
		"古代文化。（打《三国演义》人名）": "史迹",
		"洪湖歌声融暮色。（打《滕王阁序》一句）": "窜梁鸿于海曲",
		"狼来了。（猜一食物）": "杨桃",
		"人者何所乐。（猜一地名）": "应山",
		"四季少了夏秋冬。（打一千家诗句）": "最是一年春好处",
		"宝玉求婚。（猜一古代人物）": "林肯",
		"三国乾坤之地，天下之腹是指哪一个地方？": "荆州",
		"我的心里亮堂堂。（台湾作家）": "余光中",
		"元前明后。（打《水浒传》人名）": "宋清",
		"水陆要塞。（打一地名）": "山海关",
		"外地网上我不动笔。（打一书报名）": "回乡偶书",
		"若戏而必行之是周公教王遂过也。（打一植物）": "刺桐",
		"保护视力。（猜一俗语）": "小心眼",
		"心经之路。（打一地名）": "通道",
		"壹贰叁肆伍陆柒捌玖。（打一书报名）": "拾遗记",
		"赶制元宵闲不住。（五字口语）": "忙得团团转",
		"只是近黄昏。（打一字）": "酱",
		"太监在聊天。（猜一成语）": "无稽之谈",
		"一群不要命的男人。（打一电影）": "敢死队",
		"层云隐去月当头。（打一字）": "屑",
		"翘翘板。（打一成语）": "此起彼伏",
		"一一入史册。（打一字）": "更",
		"给姥姥量身高。（猜称谓）": "丈母娘",
		"老谋深算。（打一中草药名）": "苍术",
		"满脸贴金。（打一食品）": "两面黄",
		"千年铁树开了花。（打一书报名）": "今古奇观",
		"一物生来力量强，又有爹来又有娘，有爹不和爹一姓，有娘不和娘一样": "骡",
		"西安一住三星期。（打一字）": "醋",
		"绝非人间寻常物。（猜一历史年号）": "天宝",
		"宛转蛾眉马前死。（打一地名）": "玉环县",
		"一个大，一个鞋一个跑，一个跳。（猜一字）": "骚",
		"湖水月色空前。（打一国家）": "古巴",
		"在家靠父母。（打一离合字）": "大人可倚",
		"踏花归来蝶绕膝。（打一中草药名）": "香附",
		"圣僧坐骑，猴王金甲。（打一成语）": "龙马精神",
		"以谦为名以宋为姓。（打一书报名）": "于江",
		"山明水秀。（台湾地名）": "景美",
		"东方有战事。（打一地名）": "西安",
		"为什么大地春常在。（打一地名）": "盘锦",
		"举重比赛。（打一成语）": "斤斤计较",
		"回眸一笑喊哥哥。（打四字电视剧名）": "还珠格格",
		"换位称君。（打一食品）": "瓜子",
		"袖珍葡萄树上挂，紫红果肉甜汁多。（打一水果）": "桑葚",
		"池塘里一个碗，下雨装不满。（打一植物）": "荷叶",
		"另有变动。（打一字）": "加",
		"有啥值得骄傲的。（猜节气）": "小满",
		"下跪引来风波。（猜一西药）": "拜斯亭",
		"万万不可大意。（打一离合字）": "勿心忽",
		"青青猪尾巴，龙须出嫩芽。（打一蔬菜）": "芦笋",
		"玉兔东升芬芳溢。（花名）": "夜来香",
		"一块钱掉在大便上。（猜一成语）": "视如粪土",
		"百年树人。（猜化学名词）": "周期",
		"对君吟别离。（打一乐器）": "口琴 ",
		"洗手间客满。（射一成语）": "无一侧漏",
		"人前只说三分话。（打一地名）": "陈留",
		"洞口飘残云。（猜历史年号）": "同治",
		"大的重组正兴起。（猜古称谓）": "举人",
		"曾子何以真杀猪。（打一成语）": "非同儿戏",
		"只因相思惹分非。（打一植物）": "土豆",
		"笔上难写心中情。（打一字）": "白",
		"男儿本自重横行。（打一唐代诗人）": "李白",
		"气质优雅脖子长，走起路来好神气，一摇一摆乐逍遥。（打一动物）": "鹅",
		"小小模样似喷头，青青池塘才会有；蜻蜓最爱头上留，停歇片刻立马走。（打一植物）": "莲蓬",
		"好的斗牛士叫什么。（打一火热的动画片名字）": "圣斗士",
		"十本漫画书加一本语文书。（打一四字成语）": "不可思议",
		"小花儿，像喇叭，公鸡打鸣就开放。（打一植物）": "牵牛花",
		"人在云端漫步。（打一字）": "会",
		"黄黄金丸紧紧靠，果子似球批绒毛，独备四时之气者。（打一植物）": "枇杷",
		"真丢人。（猜一字）": "直",
		"子龙翼德皆老矣。（打一书报名）": "暮云飞",
		"盲人摸象。（打一成语）": "不识大体",
		"前面来只船，舵手在上边，来时下小雨，走后路已干。（打一电器）": "熨斗",
		"天生一对，地配一双。（打一书报名）": "孤独的人",
		"都说前面有的卖，诸位要买早日去。（打一书报名）": "读者",
		"说走就走。（打一成语）": "言行一致",
		"金乌西坠白头看。（河南地名）": "洛阳",
		"先后赴美求发展。（猜穴位）": "关元",
		"一经用心变化大，昔日一别容未改。（打一植物）": "芙蓉",
		"样子看来很高大，果儿屁股穿铁甲，树干用来做家具，果实可做豆腐花。（打一植物）": "楷树",
		"嫩叶下腹口留香，味道浓郁根细长。（打一蔬菜）": "香菜",
		"精密巧匠，出必见血，暗影之王。（一把兵器）": "暴雨梨花针",
		"一位游泳家，说话呱呱呱，小时有尾没有脚，大时有脚没尾巴。（猜一动物）": "青蛙",
		"零工资上岗。（猜一酒名）": "白干",
		"何处拾贝壳。（打一影视名）": "上海滩",
		"正月没有初一。（猜一字）": "肯",
		"头上一朵花，脚下一把刷，腰里抱个金娃娃。（打一植物）": "玉米",
		"山水之间，一方独立。（打重庆一地名）": "涪陵",
		"山在虚无缥渺中。（猜一中医术语）": "脉象不清",
		"哭成一团。（打一乐器）": "圆号",
		"故障女士。（猜一动物）": "瓢虫",
		"让学两点外出。（打一字）": "字",
		"举头望明月。（打一中草药名）": "当归",
		"新年健康。（打一地名）": "正安",
		"二月春风似剪刀。（四字病名）": "小叶增生",
		"喜相逢。（打一地名）": "乐会",
		"禁止搬家。（打《水浒传》人名）": "杜迁",
		"离别四十年，本聚在元宵。（字谜）": "舞",
		"男人站中间，妇孺站两边。（三字网络用语）": "",
		"男人站中间，妇孺站两边。（三字网络用语）": "女汉子",
		"夏秋冬皆不适。（猜一地名）": "宜春",
		"白发日长厄困中。（打一字）": "栀",
		"大树先进抓重点。（猜建筑材料俗称）": "木头",
		"分明定下获七金。（打一日常用品）": "钥匙",
		"原来却在两水间。（打一地名）": "涞源",
		"红木。（打一地名）": "丹东",
		"山在虚无飘淼间。（台中县地名）": "雾峰",
		"不要耽搁见面。（猜一三字口语）": "别误会",
		"鲜红的太阳永不落。（猜一地理词语）": "日照时间长",
		"楼台接楼台，一层一层接起来，上面冒白气，下面水开花。（打一日用品）": "蒸笼",
		"忽如一夜春风来。（打一植物）": "",
		"十亿团结如一人。（打一地名）": "中国大连",
		"情心已断奔月窟。（打一书报名）": "青娥",
		"接下去又再分离。（猜一词牌名）": "冉冉云",
		"上了年纪喝酒免费。（猜一酒类）": "老白干",
		"枕前和泪拥君衣。（打一书报名）": "湘裙",
		"正是见钱开眼耳。（打一书报名）": "聪明泉",
		"柳暗花明又一村。（打一植物）": "树",
		"并重。（打一成语）": "恰如其分",
		"名字叫做牛，不会拉犁头，说它力气鞋背着房子走。（猜周杰伦的一首歌）": "蜗牛",
		"铲除腐败。（猜一地质学术语）": "剥蚀",
		"绿蔓藤，爱爬高，挂满七彩小喇叭。（打一植物）": "喇叭花",
		"文远不识文长知。（打一成语）": "生张熟魏",
		"鼠年旧岁。（打一人名）": "老子",
		"开放不必存顾虑。（一个人物）": "张无忌",
		"汶水长流到岭前。（打一地名）": "文山",
		"采药去南面，非要一同行。（猜植物）": "韭菜",
		"名酒博览会。（猜一田径运动员）": "周春秀",
		"两人竞赛。（打二字常用词）": "对比",
		"好读书。（打《论语》一句）": "学而不厌",
		"身登青云梯。（猜一电脑名词）": "自动升级",
		" 疑是地上霜。（猜一三字口语）": "不明白",
		"出自幽谷，迁于乔木。（猜一字）": "樂",
		"樱桃小嘴。（猜一字）": "如",
		"快刀斩乱麻。（打一成语）": "迎刃而解",
		"过宋都风也。（打一书报名）": "赵城虎",
		"展昭玉堂化前嫌。（动画片）": "猫和老鼠",
		"木叶尽脱。（打一地名）": "余干",
		"东征西讨北伐。（打一地名）": "南宁",
		" 六王毕，四海一。（打一小说人名）": "秦邦业",
		"情投意合。（打一地名）": "同心",
		"六出飞花点翠苔。（饮品）": "雪碧",
		"万点风帆过大江。（打一地名）": "广济",
		"越南。（猜一歌名）": "过火",
		"天下警言记心怀。（猜一古代罪名）": "大不敬",
		"汉朝文书。（打《三国演义》人名）": "刘表",
		"老华侨重返故里。（打一数学名词）": "求根",
		"星月与共伴终生。（打一传统节日）": "元宵节",
		"知必言，言必果。（猜4字常言）": "不明不白",
		"三省吾身。（打一中草药名）": "防己",
		"财源茂盛达三江。（打广西一地名）": "富川",
		"人生在世千般好。（猜一电子配件）": "阳极棒",
		"破门而入。（打一地名）": "武进",
		"自多情无所获。（打一书报名）": "爱的徒劳",
		"老式波音。（打一歌曲名）": "涛声依旧",
		"约会迟到，两颊发烧。（打一植物）": "晚来红",
		"玉皇太后。（台湾地名）": "天母",
		"晓红。（动物,徐妃格）": "蜘蛛",
		"雄踞山寨。（打吉林一地名）": "公主岭",
		"打遍天下无敌手。（打一植物）": "都胜",
		"独木造高楼，没瓦没砖头，人在水下走，水在人上流。（打一用具）": "雨伞",
		"煤球和元宵一样。（打一成语）": "黑白不分",
		"娃哈哈。（打四字常用语）": "不大乐意",
		"那悟空正念着如来。（打一植物）": "猴头菇",
		"青梅煮酒论英雄。（打一歌曲名）": "双截棍",
		"百里挑一。（打一节气）": "白露",
		"妻子外出。（打二字常用语）": "内行",
		"妇女解放翻身做主。（打一地名）": "山东",
		"后村闺中听风声。（打一字）": "封",
		"人尽可诛。（猜一数学词语）": "公式",
		"圆圆个头脸羞红，大珠小珠落玉盘。（打一植物）": "石榴",
		"初尝改革甜头来。（猜一历史事件）": "甘露之变",
		"广而告之。（猜一古代诗人）": "李白",
		"退席。（打《论语》一句）": "不在其位",
		"未成油团。（打一外国小说）": "羊脂球",
		"士。（打一人事用语）": "转干",
		"无风无浪涛自停。（打一地名）": "宁波",
		"今日秋鲸猜一中草药名）": "明天冬",
		"泥里一条龙，头顶一个蓬，身体一节节，满肚小窟窿。（猜一植物）": "莲藕",
		"在日本有了艳遇。（打一歌名）": "广岛之恋",
		"沃野千里。（台中县地名）": "丰原",
		"君临南岳。（打一地名）": "天子山",
		"自然馈赠好礼物，中华美食展内涵。（打一纪录片）": "舌尖上的中国",
		"黑云飘飘,边走边叫。（打一交通工具）": "火车",
		"有洞不见虫，有巢不见峰，有丝不见蚕，撑伞不见人": "藕",
		"氙氚。（打一成语）": "气吞山河",
		"犹如丫丫翻了身。（打一字）": "从",
		"飞阁流丹续黄粱。（打一书报名）": "红楼梦",
		"醒后得知一场梦。（打《西游记》人名）": "悟空",
		"庙建成菩萨到。（打上海一地名）": "静安寺",
		"三岁孩童穿绿衣，摇摇摆摆水面嬉，大小官员不离我，万岁无我不登基。（打一植物）": "稻",
		"卿本无心，休将人离，休将人离，又续东南诗。（打一植物）": "柳树",
		"新春佳节话元宵。（报刊名）": "半月谈",
		"茨山、溪水、北斗七星池。（一把兵器）": "龙泉剑",
		"生在山崖，落在人家，凉水浇背，千刀万剐。（打一日用品）": "磨刀石",
		"周扒皮。（打一成语）": "体无完肤",
		"农产品。（打一成语）": "土生土长",
		"留下栏前清清水。（猜中药）": "青果",
		"埋在奴家心底。（打一字）": "怒 ",
		"网置湖中。（打一地名）": "罗布泊",
		"体形巨大不会飞，脖长无毛腿很长。（打一鸟类）": "鸵鸟",
		"对镜打扮。（打一书报名）": "自动化仪表",
		"无人像我乐陶陶。（打一省份简称）": "豫",
		"父亲七十多一点。（打一字）": "较",
		"一个位于华夏版图的中心点，兵家必争之地，三国时期更为突出是指哪一个地方？": "汉中",
		"腿长胳膊短，眉毛盖着眼，有人不吱声，无人爱叫唤。（一动物）": "蝈蝈",
		"不觉天已晓。（宋词句）": "照无眠",
		"元宵出门赏灯。（常言俗语）": "外行看热闹",
		"多少事，从来急。（打一地名）": "焦作",
		"余生离合尚回顾。（猜《三国演义》人名）": "牛金",
		"方寸直随佳人去。（猜穴位）": "中封",
		"十五日。（打字一）": "胖"
	};
	triggers.newTrigger(/灯谜第(.*)&nbsp;(.*)答案：确定(.*)click(.*)/, function(m) {
		dm = m[3].split(".");
		dm1 = dm[0].split('_');
		dm2 = dm1[1] + "_" + dm1[2];
		dm3 = dm2.split("'");
		document.getElementById(dm3[0]).value = P[m[2]];
		if (document.getElementById(dm3[0]).value != "undefined") {
			setTimeout(function() {
				clickbtn("确定");
				clickButton("riddles")
			}, 200)
		}
	}, "caidengmi", "");
	triggers.newTrigger(/获得(.*)碎片(.*)20(.*)20/, function(m) {
		counthead = 0
	}, "ssp", "");
	triggers.disableByCls("ssp");
	triggers.newTrigger(/你对著看山弟子说道：(.*)的高招！/, function(m) {
		console.log('开始比试拦路npc');
		if (bI == 0) {
			runhit_open()
		}
		console.log(nowjob);
		if (nowjob != "" && nowjob != "yx") {
			triggers.enableByCls("guolu2")
		}
	}, "guolu", "");
	triggers.newTrigger(/看起来(文玉|文寒)师太想杀死你！/, function(m) {
		console.log('开始杀文玉文寒');
		if (bI == 0) {
			runhit_open()
		}
		if (nowjob != "" && nowjob != "yx") {
			triggers.enableByCls("guolu2")
		}
	}, "guolu", "");
	triggers.newTrigger(/战斗结束/, function(m) {
		clickButton('golook_room');
		runhit_close();
		triggers.disableByCls("guolu2");
		console.log('战斗结束，继续寻路');
		setTimeout(function() {
			console.log($('button.cmd_click_room')[0].innerText);
			if (nowjob != "" && $('button.cmd_click_room')[0].innerText == "峨眉山门") {
				clickButton('n')
			} else if (nowjob != "" && $('button.cmd_click_room')[0].innerText == "山门广场") {
				checkbusy()
			}
		}, 200)
	}, "guolu2", "");
	triggers.disableByCls("guolu2");
	triggers.newTrigger(/黄色毒蛇对著你喝道：「老不死！今日不是你死就是我活！」/, function(m) {
		runhit_open()
	}, "songshan_kill", "");
	triggers.newTrigger(/黄色毒蛇死了/, function(m) {
		triggers.disableByCls("songshan_kill");
		if (!is_fighting) {
			runhit_close()
		} else setTimeout(runhit_close, 3000)
	}, "songshan_kill", "");
	triggers.disableByCls("songshan_kill");
	var Q = 0;
	triggers.newTrigger(/四周白朦朦的，你隐约发现山道已到了尽头/, function(m) {
		go('event_1_60035830')
	}, "maoshan_pashan", "");
	triggers.newTrigger(/在这里有一个小小的平台，你可以在这稍作休息。/, function(m) {
		go('event_1_65661209')
	}, "maoshan_pashan", "");
	triggers.newTrigger(/你爬着山，山路实在难！你一不小心又摔了下来！/, function(m) {
		go('golook_room')
	}, "maoshan_pashan", "");
	triggers.newTrigger(/这里鸟语花香，景色秀丽。一条小河从你脚下流过，河面上蒸腾着蒙蒙的雾气。/, function(m) {
		if (Q == 1) {
			triggers.disableByCls("maoshan_pashan");
			nextdo()
		}
		if (Q == 2) {
			go('w')
		}
	}, "maoshan_pashan", "");
	triggers.newTrigger(/山石上已没落脚之处，再往上爬是不可能的。山壁上有一个洞口/, function(m) {
		if (Q == 1) {
			go('s')
		}
		if (Q == 2) {
			triggers.disableByCls("maoshan_pashan");
			nextdo()
		}
	}, "maoshan_pashan", "");
	triggers.disableByCls("maoshan_pashan");
	triggers.newTrigger(/^客船还没有达到这儿，等等吧。/, function(m) {
		setTimeout(function() {
			go('yell')
		}, 3000)
	}, "xiake_go", "");
	triggers.newTrigger(/^大船终于抵达了南海岸边。你走下船来。/, function(m) {
		triggers.disableByCls("xiake_go");
		nextdo()
	}, "xiake_go", "");
	triggers.disableByCls("xiake_go");
	triggers.newTrigger(/(.*)已经死了，只剩下一具尸体静静地躺在这里/, function(m) {
		clickbtn("搜索")
	}, "getcorpse", "");
	triggers.newTrigger(/(.*)这具尸体显然已经躺在这里有一段时间了，正散发著一股腐尸的味道/, function(m) {
		clickbtn("搜索")
	}, "getcorpse", "");
	triggers.newTrigger(/这是你今天完成的第(.*)\/10场正邪之战！/, function(m) {
		console.log(m[0]);
		nowjob = "";
		if (m[1] == "10") {
			ql_close()
		}
		go_home()
	}, "wancheng", "");
	triggers.newTrigger(/这是你今天完成的第(.*)\/5场逃犯任务！/, function(m) {
		console.log("这是你今天完成的第" + m[1] + "/5场逃犯任务！");
		nowjob = "";
		if (m[1] == "5") {
			tf_flag = 0;
			btnList['开逃犯'].style.borderStyle = 'outset';
			btnList['开逃犯'].innerText = '开逃犯'
		}
		go_home()
	}, "wancheng", "");
	triggers.newTrigger(/你今天的逃犯任务次数已达到上限/, function(m) {
		console.log(m[0]);
		nowjob = "";
		tf_flag = 0;
		btnList['开逃犯'].style.borderStyle = 'outset';
		btnList['开逃犯'].innerText = '开逃犯';
		go_home()
	}, "wancheng", "");
	triggers.disableByCls("wancheng");
	triggers.newTrigger(/(.*)对著(.*)喝道：(.*)今日不是你死就是我活！」/, function(m) {
		if (U.indexOf(m[2]) != -1) {
			console.log(m[0]);
			triggers.disableByCls("taofan");
			triggers.enableByCls("wancheng");
			if (database.tf_killset == 0) {
				opendonpc("杀死");
				console.log("逃犯杀黄！");
				killhaoren_tf();
				return
			} else if (database.tf_killset == 1) {
				opendonpc("杀死");
				console.log("逃犯杀红！");
				killeren();
				return
			} else {
				triggers.disableByCls("wancheng");
				console.log("tf_killset=" + database.tf_killset)
			}
		}
	}, "taofan", "");
	triggers.disableByCls("taofan");
	triggers.newTrigger(/你从寒玉床上爬起，结束了这次练功。/, function(m) {
		if (banxiaohao.indexOf(myName) == -1 && kfql_flag == 0 && typeof dreamuser1 != "undefined" && vipplayer == true) {
			nexttask = function() {
				go("items get_store /obj/quest/xuantie_suipian;jh 1;e;n;n;w;event_1_24319712;home;sleep_hanyuchuang;home;exercise stop;exercise")
			};
			checktask()
		}
	}, "shuibed", "");
	triggers.newTrigger(/你停止了打坐。/, function(m) {
		if (banxiaohao.indexOf(myName) == -1 && kfql_flag == 0 && typeof dreamuser1 != "undefined" && vipplayer == true) {
			nexttask = function() {
				go("home;exercise")
			};
			checktask()
		}
	}, "dazuo", "");
	triggers.newTrigger(/任务所在地方好像是：(.*)你已经连续完成(.*)个任务。/, function(m) {
		console.log(m[1]);
		if (m[1].indexOf(cq) != -1) {
			triggers.disableByCls("shimenf5");
			return
		} else if (m[1].indexOf(cq) == -1) {
			shimenf5();
			return
		}
	}, "shimenf5", "");
	triggers.disableByCls("shimenf5");

	function newxutupo() {
		go("items get_store /obj/med/tupodan;items get_store /obj/med/tupodan2");
		var a = 'enable ' + skillnames[tuposkill];
		var b = 'tupo go,' + skillnames[tuposkill];
		topogo = a + ';' + b + ';';
		if (kfql_flag == 0 && typeof dreamuser1 != "undefined" && vipplayer == true && tupojiasu == 0) {
			setTimeout(function() {
				go(topogo + "items put_store obj_tupodan;items put_store obj_gaojitupodan")
			}, 1000)
		} else if (kfql_flag == 0 && typeof dreamuser1 != "undefined" && vipplayer == true && tupojiasu == 1) {
			var c = "tupo_speedup2 " + skillnames[tuposkill] + " go";
			var d = "tupo_speedup " + skillnames[tuposkill] + " go";
			tupogo1 = c + ";" + d + ';prev';
			setTimeout(function() {
				go(topogo + tupogo1)
			}, 1000)
		}
	}
	function jz_tupo() {
		go("items get_store /obj/med/tupodan2;items get_store /obj/shop/tupo_jiasuka;hhjz xiulian;;;?修炼剑阵;hhjz xiulian go;prev")
	}
	function jz_js() {
		triggers.enableByCls("xutupo_jz");
		go('hhjz speedup go')
	}
	triggers.newTrigger(/你的(.*)成功向前突破了/, function(m) {
		playwarn_task();
		if (ai_autotupo == 0) {
			setTimeout(function() {
				tuposkill = m[1].replace(' ', '');
				nexttask = function() {
					suantupo()
				};
				checktask()
			}, 1800)
		} else {
			database.tuposkill = m[1].replace(' ', '');
			nexttask = ai_tupojiance1;
			checktask()
		}
	}, "xutupo", "");
	triggers.newTrigger(/^(.*)阵升级完毕(.*)成功升级到(.*)】/, function(m) {
		console.log(m[0]);
		nexttask = jz_tupo;
		checktask()
	}, "xutupo", "");
	triggers.newTrigger(/^加速卡每24小时之内只可使用一张，剩余(.*)后可以继续使用/, function(m) {
		triggers.disableByCls("xutupo_jz");
		console.log('还要' + m[1] + '后才能加速');
		if (m[1].indexOf('时') > -1 && m[1].indexOf('分') > -1) {
			var a = parseInt(m[1].split('时')[0]);
			var b = parseInt(m[1].split('时')[1].split('分')[0]);
			var c = 60000 * b + 3602000;
			if (a == 1) {
				console.log('隔1小时又' + b + '分钟后再加速剑阵');
				setTimeout(function() {
					console.log('正在执行一次延时加速剑阵');
					nexttask = jz_js;
					checktask()
				}, c)
			} else if (a == 0) {
				console.log('隔0小时' + b + '分钟后再加速剑阵');
				setTimeout(function() {
					nexttask = jz_js;
					checktask()
				}, b * 60000)
			} else {
				console.log('加速卡cd较长,正在校正加速剑阵定时器时间');
				H = new Date();
				var d = H.getHours();
				var e = H.getMinutes();
				dsjzjs_m = parseInt(b + e);
				if (dsjzjs_m < 60) {
					cD = (d + a) % 24
				} else if (dsjzjs_m >= 60) {
					dsjzjs_m = dsjzjs_m % 60;
					cD = (d + a + 1) % 24
				}
				database.ds_jzjs = cD + ':' + dsjzjs_m;
				console.log('已校正定时加速剑阵时间为:' + database.ds_jzjs)
			}
		} else if (m[1].indexOf('分') > -1 && m[1].indexOf('秒') > -1) {
			var a = parseInt(m[1].split('分')[0]);
			var b = parseInt(m[1].split('分')[1].split('秒')[0]);
			var c = 60000 * a + 1000 * (b + 1);
			console.log('隔' + a + '分钟' + (b + 1) + '秒后再加速剑阵');
			setTimeout(function() {
				console.log('正在执行一次延时加速剑阵');
				nexttask = jz_js;
				checktask()
			}, c)
		}
	}, "xutupo_jz", "");
	triggers.newTrigger(/^你使用突破加速卡x1成功加速了升级(.*)阵24小时/, function(m) {
		console.log(m[0]);
		triggers.disableByCls("xutupo_jz");
		H = new Date();
		cD = H.getHours();
		dsjzjs_m = H.getMinutes();
		if (database.ds_jzjs != '关闭') {
			database.ds_jzjs = cD + ':' + dsjzjs_m;
			console.log('已自动校正定时加速剑阵时间为:' + database.ds_jzjs);
			cD = parseInt(database.ds_jzjs.split(':')[0]);
			dsjzjs_m = parseInt(database.ds_jzjs.split(':')[1])
		}
	}, "xutupo_jz", "");
	triggers.disableByCls("xutupo_jz");
	var R = "false";

	function readbag(x) {
		R = "false";
		var t = $("tr[bgcolor]:contains(两)").siblings();
		if (t.length > 0) {
			for (var i = 0; i < t.length; i++) {
				if (t.eq(i)[0].innerText.replace(/\s+/g, "") != "") {
					var a = t.eq(i).find('td')[0].innerText.replace('\n', "");
					var b = parseInt(t.eq(i).find('td')[1].innerText.match(/\d+/g)[0]);
					var c = t[i].getAttribute('onclick').split("'")[1].split("info ")[1];
					if (x.indexOf(a) != -1) {
						console.log("背包存在" + x);
						R = "true"
					}
				}
			}
		}
	}
	function readbagtupo() {
		readbag("突破加速卡");
		if (R == "true") {
			console.log(R);
			clickButton('tupo_speedup')
		} else {
			readbagtupo1()
		}
	}
	function readbagtupo1() {
		readbag("高级突破加速卡");
		if (R == "true") {
			console.log(R);
			clickButton('tupo_speedup2')
		} else {
			console.log("没有突破加速类道具，直接突破");
			newxutupo()
		}
	}
	function suantupo() {
		go('items get_store /obj/shop/tupo_jiasuka;items get_store /obj/shop/tupo_jiasuka2;items');
		setTimeout(readbagtupo, 900);
		triggers.enableByCls("suantupo")
	}
	var S = 0,
		tupojishi = 1000;
	triggers.newTrigger(/加速突破技能(.*)加速(.*)/, function(m) {
		S = m[1].split("加速").length - 1;
		console.log("当前正在突破的技能数量为" + S);
		tuposkill1 = m[1].split("加速")[1].split("(")[0];
		tupotime1 = m[1].split("加速")[1].split("余")[1].split(')')[0];
		console.log('当前突破技能1：' + tuposkill1 + "~" + tupotime1);
		if (tupotime1.indexOf("天") > -1 && tupotime1.indexOf("时") > -1) {
			tupoh1 = parseInt(tupotime1.split("天")[0] * 24) + parseInt(tupotime1.split("天")[1].split("时")[0]);
			tupojishi1 = (tupoh1 + 1) * 3600000;
			console.log('技能1剩余小时数：' + tupoh1 + ',合计~' + tupojishi1)
		}
		if (tupotime1.indexOf("时") > -1 && tupotime1.indexOf("分") > -1) {
			tupoh1 = parseInt(tupotime1.split("时")[0]);
			tupom1 = parseInt(tupotime1.split("时")[1].split("分")[0]);
			tupojishi1 = tupoh1 * 3600000 + (tupom1 + 1) * 60000;
			console.log('技能1剩余小时数:' + tupoh1 + ",分钟数：" + tupom1 + ',合计~' + tupojishi1)
		}
		if (tupotime1.indexOf("分") > -1 && tupotime1.indexOf("秒") > -1) {
			tupom1 = parseInt(tupotime1.split("分")[0]);
			tupos1 = parseInt(tupotime1.split("分")[1].split('秒')[0]);
			tupojishi1 = tupom1 * 60000 + (tupos1 + 1) * 1000;
			console.log('技能1剩余分钟数:' + tupom1 + ",秒钟数：" + tupos1 + ',合计~' + tupojishi1)
		}
		console.log(tuposkill1 + "~~" + tupojishi1);
		if (S > 1) {
			tuposkill2 = m[1].split("加速")[2].split("(")[0];
			tupotime2 = m[1].split("加速")[2].split("余")[1].split(')')[0];
			console.log('当前突破技能2：' + tuposkill2 + "~" + tupotime2);
			if (tupotime2.indexOf("天") > -1 && tupotime2.indexOf("时") > -1) {
				tupoh2 = parseInt(tupotime2.split("天")[0] * 24) + parseInt(tupotime2.split("天")[1].split("时")[0]);
				tupojishi2 = (tupoh2 + 1) * 3600000;
				console.log('技能2剩余小时数：' + tupoh2 + ',合计~' + tupojishi2)
			}
			if (tupotime2.indexOf("时") > -1 && tupotime2.indexOf("分") > -1) {
				tupoh2 = parseInt(tupotime2.split("时")[0]);
				tupom2 = parseInt(tupotime2.split("时")[1].split("分")[0]);
				tupojishi2 = tupoh2 * 3600000 + (tupom2 + 1) * 60000;
				console.log('技能2剩余小时数:' + tupoh2 + ",分钟数：" + tupom2 + ',合计~' + tupojishi2)
			}
			if (tupotime2.indexOf("分") > -1 && tupotime2.indexOf("秒") > -1) {
				tupom2 = parseInt(tupotime2.split("分")[0]);
				tupos2 = parseInt(tupotime2.split("分")[1].split('秒')[0]);
				tupojishi2 = tupom2 * 60000 + (tupos2 + 1) * 1000;
				console.log('技能2剩余分钟数:' + tupom2 + ",秒钟数：" + tupos2 + ',合计~' + tupojishi2)
			}
			console.log(tuposkill2 + "~~" + tupojishi2);
			tupojishi = Math.min(tupojishi1, tupojishi2);
			console.log('最小剩余时间(毫秒)：' + tupojishi);
			if (tupojishi < 36000000 && S == 2) {
				console.log("尚有两个技能未突完，本次延时（毫秒）" + tupojishi);
				go('prev;prev');
				setTimeout(newxutupo, tupojishi + 600)
			}
			if (tupojishi >= 36000000 && S == 2) {
				console.log("尚有两个技能突破剩余时间超过十小时，立刻续突破");
				newxutupo()
			}
			if (S == 3) {
				console.log("已经在突破三个技能了，立即返回");
				go('prev;prev')
			}
		}
		if (S == 1) {
			tupojishi = 300;
			console.log("当前正在突破一个技能,立即接着突破本次刚突破完成的技能");
			setTimeout(newxutupo, tupojishi)
		};
		triggers.disableByCls("suantupo")
	}, "suantupo", "");
	triggers.newTrigger(/你当前没有突破任何技能，快去突破吧。/, function(m) {
		triggers.disableByCls("suantupo");
		console.log("当前没有在突破技能，立刻续突破");
		newxutupo()
	}, "suantupo", "");
	triggers.disableByCls("suantupo");

	function clickbtn1(s) {
		var b = $(".cmd_click2");
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(s) > -1) {
				b[i].click();
				return
			}
		}
	}
	function clickbtn2(s) {
		var b = document.getElementById('out2').getElementsByTagName('button');
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(s) > -1) {
				b[i].click();
				return
			}
		}
	}
	function clickbtn3(s) {
		var b = $(".cmd_click3");
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(s) > -1) {
				b[i].click();
				return
			}
		}
	}
	var T = 0,
		yxss_flag = 0;

	function searchYouxia() {
		if (btnList["搜游侠"].innerText == '搜游侠') {
			var a = prompt("请输入当前游侠出现的地点-当前游侠中文名称", yxadd + "-" + yxer);
			if (!a) {
				return
			}
			yxss_open();
			yxadd = a.split("-")[0];
			yxer = a.split("-")[1];
			triggers.enableByCls("yxss");
			go_yx(yxer, yxadd)
		} else {
			yxss_close()
		}
	}
	function yxss_open() {
		yxss_flag = 1;
		btnList["搜游侠"].innerText = "不搜了";
		btnList['搜游侠'].style.borderStyle = 'inset'
	}
	function yxss_close() {
		yxss_flag = 0;
		btnList["搜游侠"].innerText = "搜游侠";
		btnList['搜游侠'].style.borderStyle = 'outset'
	}
	var U = '二娘',
		qladd = '钱庄',
		qlthing = '狂暴丹';

	function searchqinglong() {
		var a = prompt("输入青龙地点-青龙红名npc(需要杀黄名请在开青龙选项里设置)-青龙物品(主要是区分青龙等级判断血量用)", qladd + "-" + U + "-" + qlthing);
		qladd = a.split("-")[0];
		U = a.split("-")[1];
		qlthing = a.split("-")[2];
		go_ql(qladd, qlthing);
		chuzhao_open();
		clickButton('enforce ' + enforcePoints);
		ql_num = 0;
		triggers.enableByCls("ql_gomap1")
	}
	function qlxq() {
		var a = myName,
			m = '您好，非常抱歉，您不是道长的授权用户，无法使用自动青龙游侠功能';
		if (typeof dreamuser1 != "undefined" && vipplayer == true) {
			qlrob = prompt("请设置您的青龙需求", qlrob)
		} else {
			qlrob = '0';
			alert(a + m)
		}
	}
	var V = [];

	function goadd(s) {
		var a = s.split("-");
		if (a.length == 2) {
			ad1 = a[0];
			npc = a[1];
			go_sm(ad1, npc);
			if (nowjob == "mt" || nowjob == "sm") {
				nextdo = function() {
					setdonpc(a[1], "对话")
				}
			}
			setTimeout(checkbusy, 2000)
		} else if (a.length == 1) {
			npc = a[0];
			V = [];
			for (var i = 0; i < map_m.length; i++) {
				var b = Object.getOwnPropertyNames(map_m[i]);
				for (var j = 0; j < b.length; j++) {
					if (b[j].indexOf(npc) > -1) {
						V.push(mapNames[i] + '-' + b[j])
					}
				}
			}
			if (emeishan_m1.hasOwnProperty(npc)) {
				V.push('峨眉山-' + npc)
			}
			if (songshan_m1.hasOwnProperty(npc)) {
				V.push('嵩山-' + npc)
			}
			if (maoshan_m1.hasOwnProperty(npc) || maoshan_m2.hasOwnProperty(npc)) {
				V.push('茅山-' + npc)
			}
			if (V.length == 0) {
				console.log('地图库暂无该npc的数据')
			} else if (V.length == 1) {
				console.log('开始寻找' + V[0]);
				ad1 = V[0].split('-')[0];
				npc = V[0].split('-')[1];
				go_sm(ad1, npc);
				if (nowjob == "mt" || nowjob == "sm" || nowjob == "xl") {
					nextdo = function() {
						setdonpc(npc, "对话")
					}
				}
				setTimeout(checkbusy, 2000);
				return
			} else if (V.length > 1) {
				var a = '';
				var b;
				for (var i = 0; i < V.length; i++) {
					a += i + ':' + V[i] + '\n'
				}
				b = prompt('本次查询到以下结果,请选择你要找的是哪个\n' + a, '0');
				ad1 = V[b].split('-')[0];
				npc = V[b].split('-')[1];
				console.log('开始寻找' + V[b]);
				go_sm(ad1, npc);
				if (nowjob == "mt" || nowjob == "sm" || nowjob == "xl") {
					nextdo = function() {
						setdonpc(npc, "对话")
					}
				}
				setTimeout(checkbusy, 2000);
				return
			}
		} else {
			console.log("寻路--输入格式不正确")
		}
	}
	var W = "小二";
	var X = createPop('寻路集');
	var Y = popList['寻路集'];
	Y.style.fontSize = '12px';
	Y.style.color = 'green';
	Y.style.background = '#B2DFEE';
	Y.innerHTML = '<div>请输入寻路地点（-隔开,如大理-段王爷或者段王爷或者王爷）<br>（百度引擎支持关键字搜索）</div>';
	var Z = document.createElement('input');
	Z.placeholder = W;
	Z.value = W;
	Z.style.border = '1px solid #333';
	Z.style.width = '150px';
	Z.style.margin = '5px 10px 15px 0';
	Y.appendChild(Z);
	var ba = document.createElement('button');
	ba.innerText = '百度一下';
	ba.style.border = '1px solid #333';
	ba.style.width = '70px';
	ba.style.height = '20px';
	ba.style.color = color;
	ba.style.background = ground;
	Y.appendChild(ba);
	ba.addEventListener('click', function() {
		W = Z.value;
		X.style.display = "none";
		W = Z.value;
		nowjob = "xl";
		goadd(W)
	});
	var bb = [];

	function xl_addmapbtns() {
		bb = [];
		var a = document.createElement('div');
		Y.appendChild(a);
		for (var i = 0; i < mapNames.length; i++) {
			bb[i] = document.createElement('button');
			bb[i].style.padding = '0';
			bb[i].style.margin = '2px 0 0 5px';
			bb[i].style.width = '60px';
			bb[i].style.height = '20px';
			bb[i].innerHTML = mapNames[i];
			bb[i].style.color = color;
			bb[i].style.background = ground;
			a.appendChild(bb[i]);
			bb[i].onclick = function(i) {
				nowjob = "jh";
				X.style.display = 'none';
				go_sm(this.innerText, "")
			}
		}
	}
	xl_addmapbtns();
	var bc = ['独龙寨', '军营', '北斗阵', '幽灵山庄', '四御教派'];
	var bd = {
		'独龙寨': 'fb 1;kill dulongzhai_dltufei|n;kill dulongzhai_dltufei|n;kill dulongzhai_dltufei|n;kill dulongzhai_dltufei|n;kill dulongzhai_fuyibiao',
		'军营': 'fb 2;kill junying_huwei|kill junying_door_guard|kill junying_door_guard|;e;e;kill junying_vice_general|home;fb 2;e;n;event_1_48728674;home;fb 2;e;s;event_1_41361248;home;fb 2;e;e;event_1_43484736;fight junying_general',
		'北斗阵': 'fb 3;w;kill beidou_beidou1|e;s;kill beidou_beidou4|n;e;kill beidou_beidou5|event_1_9777898;fight beidou_beidou7',
		'幽灵山庄': 'fb 4;n;kill youling_fanyun-daoshen|n;kill youling_zhibing-jianke|n;kill youling_fuyu-jianshen|n;kill youling_paiyun-kuangshen|n;kill youling_jiutian-laozu',
		'四御教派': 'fb 5',
	};

	function xl_addfbbtns() {
		var a = document.createElement('div');
		a.style.padding = "2px 0 0";
		Y.appendChild(a);
		for (var i = mapNames.length; i < (bc.length + mapNames.length); i++) {
			bb[i] = document.createElement('button');
			bb[i].style.padding = '0';
			bb[i].style.margin = '2px 0 0 2px';
			bb[i].style.width = '60px';
			bb[i].style.height = '20px';
			bb[i].style.color = color;
			bb[i].style.background = ground;
			bb[i].innerHTML = bc[i - mapNames.length];
			Y.appendChild(bb[i]);
			bb[i].onclick = function(i) {
				X.style.display = 'none';
				clickButton('team chat ' + this.innerText)
			}
		}
	}
	xl_addfbbtns();
	triggers.newTrigger(/^【队伍】(.*)：(独龙寨|军营|北斗阵|幽灵山庄|四御教派)/, function(m) {
		if (m[2] != '独龙寨' && m[2] != '军营') {
			clickButton('enforce ' + enforcePoints)
		} else {
			clickButton('enforce 0')
		}
		chuzhao_close();
		runhit_open();
		go(bd[m[2]])
	}, "fuben", "");

	function searchmap() {
		X.style.display = "";
		Z.focus()
	}
	function asknpc() {
		var d = function() {
				setdonpc(npc, "对话")
			};
		setTimeout(d, 200)
	}
	createPopButton('跨服副本', '寻路集', kffbfunc);
	triggers.newTrigger(/^【队伍】(.*)：极武坛/, jiwutan_xl, "fuben", "");
	triggers.newTrigger(/^【队伍】(.*)：十万苗疆/, swmjxl, "fuben", "");
	triggers.newTrigger(/^【队伍】(.*)：破解阵法/, pjzfxl, "fuben", "");

	function jiwutan() {
		clickButton('team chat 极武坛')
	}
	function jiwutan_xl() {
		go('fb 1;w;s;e;kill jiwutan_jiwutandizi|e;kill jiwutan_shiergongmenren|e;e;e;nw;w;kill jiwutan_jiwutandizi|nw;kill jiwutan_shiergongmenren|se;ne;kill jiwutan_shiergongmenren|sw;nw;nw')
	}
	function shiergong() {
		getpostion();
		if (E != "麒麟宫") {
			alert("请走到麒麟宫再使用本功能");
			return
		} else {
			console.log("开始单挑十二宫");
			go("kill jiwutan_tianhai|se;se;ne;se;kill jiwutan_kunpeng|nw;sw;nw;e;kill jiwutan_xuetong|w;ne;kill jiwutan_zuifa|sw;w;kill jiwutan_jinxi|e;se;ne;n;kill jiwutan_yinbao|s;ne;kill jiwutan_shouxu|sw;e;kill jiwutan_xiaori|w;nw;kill jiwutan_diehun|se;sw;nw;n;kill jiwutan_huokuang|s;sw;kill jiwutan_dianxing|ne;se;ne;w;kill jiwutan_daoxing|e;sw;event_1_40536215")
		}
	}
	function shiwanmiaojiang() {
		clickButton('team chat 十万苗疆')
	}
	function swmjxl() {
		go('fb 2;s;e;e;e;e;s;event_1_78544045')
	}
	function pojiezhenfa() {
		clickButton('team chat 破解阵法')
	}
	function pjzfxl() {
		E = $('span.outtitle').last().text();
		if (E == '囚战地') {
			go('se')
		} else if (E == '万蛇坑') {
			go('sw')
		} else if (E == '天女塔') {
			go('n')
		}
		setTimeout(function() {
			E = $('span.outtitle').last().text();
			if (E == '炼心魔谷') {
				go('event_1_25832680;w;n;e;e;s;s;w;w')
			}
		}, 500)
	}
	var be = '',
		kffb_popbk = createPop('跨服副本');
	popList['跨服副本'].innerHTML = '<div>请选择你要进行的跨服副本</div>';
	createPopButton("极武坛", "跨服副本", jiwutan);
	createPopButton("十二宫", "跨服副本", shiergong);
	createPopButton("十万苗疆", "跨服副本", shiwanmiaojiang);
	createPopButton("破解阵法", "跨服副本", pojiezhenfa);

	function kffbfunc() {
		if (btnList['跨服副本'].innerText == '跨服副本') {
			kffb_popbk.style.display = ""
		} else {
			btnList['跨服副本'].innerText = '跨服副本'
		}
	}
	function setAll() {
		var a = prompt("请输入区号,出招技能,加力点数,补血内功,回血下限,跨服开关", quid1 + "," + mySkillLists + "," + enforcePoints + "," + myForce + "," + limitQixue + "," + kfql_flag);
		console.log(a);
		quid1 = a.split(",")[0];
		quid = "[" + quid1 + "区]";
		mySkillLists = a.split(",")[1];
		cz_skills = mySkillLists.split(";");
		enforcePoints = a.split(",")[2];
		myForce = a.split(",")[3];
		limitQixue = a.split(",")[4];
		kfql_flag = a.split(",")[5];
		playwarn_task()
	}
	function limit() {
		if (database.buttonhiden == 1) {
			buttonhiden = 1;
			btnList['显按钮'].innerText = '隐按钮';
			showButton()
		}
		if (database.clearft == 1) {
			clearft_open()
		}
		if (database.cz_flag == 1) {
			chuzhao_open()
		}
		if (database.cz_flag == 2) {
			chuzhao_zhaohuan()
		}
		if (database.zx_flag == 1) {
			zx_set = database.zx_set;
			setTimeout(zx_open, 3000)
		}
		if (database.shixiao_flag == 1) {
			shixiao_open()
		}
		if (database.clearbug == 1) {
			clearbug_open()
		}
		if (typeof dreamuser1 != "undefined" && vipplayer == true) {
			g_gmain.recvNetWork2(HIB + "您是正版授权用户，需求不限" + "\n" + NOR);
			qiyongButton();
			if (database.ql_flag == 1) {
				ql_killset = database.ql_killset;
				ql_open()
			}
			if (database.yx_flag == 1) {
				bn = database.yxhandle;
				youxia_open()
			}
			if (database.fightbtn_flag == 1) {
				fightbtn_open()
			}
			return
		} else {
			qlrob = '没出钱还想要自动抢青龙？省省吧。要买权限请找道长'
		}
	}
	function yxlimit() {
		if (typeof dreamuser1 != "undefined" && vipplayer == true) {
			writeout("您是正版授权用户，已为你开启自动游侠", "rgb(118, 235, 32)")
		} else {
			youxia_close()
		}
	}
	function qllimit() {
		if (typeof dreamuser1 != "undefined" && vipplayer == true) {
			writeout("您是正版授权用户，已为你开启自动青龙", "rgb(118, 235, 32)");
			triggers.enableByCls("wancheng")
		} else {
			ql_close()
		}
	}
	function pozhaolimit() {
		if (typeof dreamuser1 != "undefined" && vipplayer == true) {
			writeout("您是正版授权用户，已为你开启自动破招", "rgb(118, 235, 32)")
		} else {
			pozhao_close()
		}
	}
	function lookyxneed() {
		var a = myName,
			yxmsg = '-----温馨提示:游侠功能并不是坏的，如果你没开游侠或者没向道长购买权限，自然没法使用本功能-----',
			qlmsg = '-----温馨提示:授权用户可以通过编辑脚本里的青龙需求并保存进行自行设置青龙需求-----',
			info = a + "您好,您的青龙需求为：" + qlrob + ".." + "青龙杀人选项为" + ql_killset + ".." + "(0是杀好人，1是杀坏人)" + qlmsg,
			msg1s = "------您的游侠需求为：" + yx_flag + yxmsg,
			msg2s = "------您的本服逃犯需求为：" + tf_killlist.split(',')[0] + ",跨服逃犯需求为：" + tf_killlist.split(',')[1];
		alert(info + msg1s + msg2s)
	}
	function autoEquipOff() {
		go('auto_equip off')
	}
	var bf = 0;

	function fujia_switch() {
		if (bf == 0) {
			if (bg == 1 && is_fighting) {
				fujia_qun()
			} else {
				alert('初次使用附群伤请在出绝学且战斗状态的条件下开启' + bg + ',' + is_fighting)
			}
		} else if (bf == 1) {
			if (bg == 1 && is_fighting) {
				fujia_du()
			} else {
				alert('初次使用附叠毒请在出绝学且战斗状态的条件下开启' + bg + ',' + is_fighting)
			}
		} else if (bf == 2) {
			fujia_close()
		}
	}
	function fujia_qun() {
		bf = 1;
		btnList["不附加"].innerText = '附群伤';
		fujia_handle()
	}
	function fujia_du() {
		bf = 2;
		btnList["不附加"].innerText = '附叠毒';
		fujia_handle()
	}
	function fujia_close() {
		bf = 0;
		btnList["不附加"].innerText = '不附加';
		cz_skills = mySkillLists.split(";");
		console.log('检测到出招模式变动,附加技能已关闭')
	}
	function wuxingEquip() {
		if (btnList['悟性装'].innerText == '悟性装') {
			btnList['悟性装'].innerText = '战斗装';
			go('wield sword of windspring;wear dream hat;wear longyuan banzhi moke')
		} else {
			btnList['悟性装'].innerText = '悟性装';
			autoEquipOn()
		}
	}
	function enforceFunc() {
		if (btnList['不加力'].innerText == '不加力') {
			go('enforce');
			btnList['不加力'].innerText = '加力'
		} else {
			go('enforce ' + enforcePoints);
			btnList['不加力'].innerText = '不加力'
		}
	}
	var bg = 0,
		cz_skills = mySkillLists.split(";");

	function pfm() {
		if (bg == 0) {
			chuzhao_open()
		} else if (bg == 1) {
			chuzhao_zhaohuan()
		} else if (bg == 2) {
			chuzhao_dalou()
		} else {
			chuzhao_close()
		}
	}
	function tell_fujia() {
		if (bf != 0) {
			fujia_close()
		}
	}
	function chuzhao_open() {
		bg = 1;
		database.cz_flag = 1;
		btnList['不出招'].innerText = '出绝学';
		g_gmain.notify_fail(HIG + "天下武功，为快不破！" + NOR);
		g_gmain.notify_fail(HIR + "你的出招，快如闪电！" + NOR);
		cz_skills = mySkillLists.split(";");
		clearInterval(auto_fight);
		auto_fight = setInterval(auto_fight_handle, 1000);
		triggers.disableByCls("dalou_fight");
		triggers.disableByCls("fight_zhaohuan")
	}
	function chuzhao_zhaohuan() {
		tell_fujia();
		bg = 2;
		database.cz_flag = 2;
		bh = 0;
		btnList['不出招'].innerText = '出召唤';
		cz_skills = ["天师灭神剑", "茅山道术"];
		clearInterval(auto_fight);
		auto_fight = setInterval(auto_fight_handle, 1000);
		triggers.disableByCls("dalou_fight");
		triggers.enableByCls("fight_zhaohuan")
	}
	function chuzhao_dalou() {
		tell_fujia();
		bg = 3;
		database.cz_flag = 3;
		btnList['不出招'].innerText = '打楼';
		cz_skills = mySkillLists.split(";");
		clearInterval(auto_fight);
		triggers.enableByCls("dalou_fight");
		triggers.disableByCls("fight_zhaohuan");
		bj = 0
	}
	function chuzhao_jz() {
		tell_fujia();
		bg = 5;
		database.cz_flag = 5;
		bh = 0;
		btnList['不出招'].innerText = '出招精准';
		cz_skills = mySkillLists.split(";");
		clearInterval(auto_fight);
		triggers.disableByCls("dalou_fight");
		triggers.disableByCls("fight_zhaohuan")
	}
	function chuzhao_close() {
		tell_fujia();
		bg = 0;
		database.cz_flag = 0;
		btnList['不出招'].innerText = '不出招';
		clearInterval(auto_fight);
		triggers.disableByCls("dalou_fight");
		triggers.disableByCls("fight_zhaohuan");
		clearInterval(cz_time)
	}
	var bh;
	triggers.newTrigger(/(玄阴符兵|金甲符兵)加入了战团！/, function(m) {
		if (m[1] == "玄阴符兵" && bh == 0) {
			bh++;
			console.log("换茅山道术");
			cz_skills = ["茅山道术"];
			clearInterval(auto_fight);
			auto_fight = setInterval(auto_fight_handle, 1000);
			return
		} else if (m[1] == "金甲符兵" && bh == 0) {
			bh++;
			console.log("换天师灭神剑");
			cz_skills = ["天师灭神剑"];
			clearInterval(auto_fight);
			auto_fight = setInterval(auto_fight_handle, 1000);
			return
		} else {
			console.log("换绝学");
			chuzhao_open();
			triggers.enableByCls("fight_zhaohuan")
		}
	}, "fight_zhaohuan", "");
	triggers.newTrigger(/战斗结束/, function(m) {
		console.log("复位");
		clickButton('prev_combat');
		chuzhao_zhaohuan()
	}, "fight_zhaohuan", "");
	triggers.disableByCls("fight_zhaohuan");

	function showfightmsg() {
		$('div#ft1').remove();
		if (g_obj_map.get("msg_vs_info").get("vs1_name1")) {
			$('span.vader11')[0].innerHTML = '<div id="ft1" style="color:rgb(32, 209, 235);text-align:center;font-size:15px">' + g_obj_map.get("msg_vs_info").get("vs1_force1") + '<span style="color:#00FF00">(' + g_obj_map.get("msg_vs_info").get("vs1_xdz1") + ')</span></div>'
		}
		if (g_obj_map.get("msg_vs_info").get("vs1_name2")) {
			$('span.vader12')[0].innerHTML = '<div id="ft1" style="color:rgb(32, 209, 235);text-align:center;font-size:15px">' + g_obj_map.get("msg_vs_info").get("vs1_force2") + '<span style="color:#00FF00">(' + g_obj_map.get("msg_vs_info").get("vs1_xdz2") + ')</span></div>'
		}
		if (g_obj_map.get("msg_vs_info").get("vs1_name3")) {
			$('span.vader13')[0].innerHTML = '<div id="ft1" style="color:rgb(32, 209, 235);text-align:center;font-size:15px">' + g_obj_map.get("msg_vs_info").get("vs1_force3") + '<span style="color:#00FF00">(' + g_obj_map.get("msg_vs_info").get("vs1_xdz3") + ')</span></div>'
		}
		if (g_obj_map.get("msg_vs_info").get("vs1_name4")) {
			$('span.vader14')[0].innerHTML = '<div id="ft1" style="color:rgb(32, 209, 235);text-align:center;font-size:15px">' + g_obj_map.get("msg_vs_info").get("vs1_force4") + '<span style="color:#00FF00">(' + g_obj_map.get("msg_vs_info").get("vs1_xdz4") + ')</span></div>'
		}
		if (g_obj_map.get("msg_vs_info").get("vs2_name1")) {
			$('span.vader21')[0].innerHTML = '<div id="ft1" style="color:rgb(32, 209, 235);text-align:center;font-size:15px">' + g_obj_map.get("msg_vs_info").get("vs2_force1") + '<span style="color:#00FF00">(' + g_obj_map.get("msg_vs_info").get("vs2_xdz1") + ')</span></div>'
		}
		if (g_obj_map.get("msg_vs_info").get("vs2_name2")) {
			$('span.vader22')[0].innerHTML = '<div id="ft1" style="color:rgb(32, 209, 235);text-align:center;font-size:15px">' + g_obj_map.get("msg_vs_info").get("vs2_force2") + '<span style="color:#00FF00">(' + g_obj_map.get("msg_vs_info").get("vs2_xdz2") + ')</span></div>'
		}
		if (g_obj_map.get("msg_vs_info").get("vs2_name3")) {
			$('span.vader23')[0].innerHTML = '<div id="ft1" style="color:rgb(32, 209, 235);text-align:center;font-size:15px">' + g_obj_map.get("msg_vs_info").get("vs2_force3") + '<span style="color:#00FF00">(' + g_obj_map.get("msg_vs_info").get("vs2_xdz3") + ')</span></div>'
		}
		if (g_obj_map.get("msg_vs_info").get("vs2_name4")) {
			$('span.vader24')[0].innerHTML = '<div id="ft1" style="color:rgb(32, 209, 235);text-align:center;font-size:15px">' + g_obj_map.get("msg_vs_info").get("vs2_force4") + '<span style="color:#00FF00">(' + g_obj_map.get("msg_vs_info").get("vs2_xdz4") + ')</span></div>'
		}
	}
	function fujia_handle() {
		if (bf == 1) {
			console.log(sk);
			var a = (sk + '').split(',');
			var b = '';
			var c = '九溪断月枪-燎原百破-天火飞锤-玄胤天雷-昊云破周斧-四海断潮斩';
			var d = '';
			for (var i = 0; i < a.length; i++) {
				if (c.indexOf(a[i]) > -1) {
					b = a[i]
				}
			}
			if (b == '') {
				b = a[a.length - 1]
			}
			console.log(a.length + '群伤接棍（三绝或出绝学最后一个）:' + b);
			for (var i = 1; i < 7; i++) {
				var e = document.getElementById('skill_' + i).innerText;
				if (e == '千影百伤棍' || e == '破军棍诀') {
					d = e
				}
			}
			console.log('已装备的棍子江湖:' + d);
			if (d != '千影百伤棍' && d != '破军棍诀') {
				fujia_close();
				console.log('检测到你没必刷棍子江湖,无法附加群伤')
			} else if ((d == '千影百伤棍' || d == '破军棍诀') && b != '') {
				sk = [d, b];
				console.log('已设置附加群伤出招数组为:' + sk)
			}
		} else if (bf == 2) {
			console.log('出绝学已附加无影毒阵（没准备则会7气随机出）');
			sk = ['无影毒阵']
		}
	}
	var bi = 0,
		sk = '';

	function auto_fight_handle() {
		if (bg != 0 && is_fighting) {
			var a = gSocketMsg.get_xdz();
			var b = parseInt(g_obj_map.get("msg_attrs").get("force"));
			owNum = document.getElementById('out2').getElementsByClassName('outkee_text').length;
			opNum = document.getElementById('out_top').getElementsByClassName('outkee_text').length;
			if (bf == 0) {
				sk = cz_skills
			}
			var c = 0,
				op2_qx = 0;
			if (document.getElementById('vs_hp11')) {
				c = document.getElementById('vs_hp21').innerHTML.replace(/<[^>]+>/g, "");
				op2_qx = document.getElementById('vs_hp11').innerHTML.replace(/<[^>]+>/g, "")
			} else if (document.getElementById('vs_hp21')) {
				c = document.getElementById('vs_hp21').innerHTML.replace(/<[^>]+>/g, "");
				op2_qx = 0
			}
			getmyFS();
			if (myFS != '') {
				var d = parseInt(g_obj_map.get("msg_attrs").get("kee"));
				if (d < Number(limitQixue) && bi < 3 && a > 2) {
					console.log("血量" + d + "--" + "回血下限" + Number(limitQixue) + "--准备释放回血内功");
					clickbtn2(myForce);
					bi++
				}
				if (myFS.substr(5, 1) == '2' && op2_qx < 1100 && op2_qx > 0 && a > 2) {
					clickbtn2('乾坤大挪移');
					clickbtn2('无影毒阵');
					clickbtn2('万流归一')
				}
			}
			if (c < 10000000 && c > 0) {
				clearlog_ft()
			}
			if (c < 1100 && c > 0 && a > 2) {
				clickbtn2('乾坤大挪移');
				clickbtn2('无影毒阵');
				clickbtn2('万流归一')
			}
			if ((database.ai_chuzhao > 0 && kfql_flag == 0 && c > 60000000 && opNum == 1) || (database.ai_chuzhao > 0 && kfql_flag == 0 && opNum > 1)) {
				if (bi == 3 && d < Number(limitQixue)) {
					chuzhao_close();
					escaperecback()
				} else if (b < 5000) {
					chuzhao_close();
					escaperecback()
				}
			}
			if (sk.length == 1 && a > 2) {
				clickbtn2(sk[0])
			} else if (a > 5) {
				for (var i = 0; i < sk.length; i++) {
					clickbtn2(sk[i])
				}
			}
			if (a > 6) {
				if (bg == 2) {
					zdskill = "茅山道术;天师灭神剑";
					hit1()
				} else if (ai_chuzhao == 0) {
					zdskill = mySkillLists;
					hit1()
				} else if (typeof ai_chuzhao != "undefined" && (ai_chuzhao == 1 || database.ai_chuzhao == 2) && bI == 0) {
					runhit_open();
					setTimeout(function() {
						g_gmain.notify_fail(HIR + "等待超过6气，自动换出招" + NOR)
					}, 5000)
				}
			}
		} else if ($('span.outbig_text:contains(战斗结束)').length > 0) {
			bi = 0;
			if (bI == 1) {
				runhit_close()
			}
			if (ssping == false) {
				clickButton('prev_combat')
			}
		}
	}
	var bj, kbnum, cz_now, cz_prev, cz_qi = 0,
		sjrst = 0,
		cz_time, isred = false;

	function czswitch() {
		if (cz_prev != cz_skills[0]) {
			cz_now = cz_skills[0]
		} else {
			cz_now = cz_skills[1]
		}
		clearInterval(cz_time);
		cz_time = setInterval(cz_dalou, 500)
	}
	function cz_dalou() {
		if (is_fighting) {
			console.log("出招" + cz_now);
			var a = gSocketMsg.get_xdz();
			if (a > 1) {
				var b = document.getElementById('out2').getElementsByTagName('button');
				for (var i = 0; i < b.length; i++) {
					if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(cz_now) > -1) {
						b[i].click();
						cz_prev = cz_now;
						clearInterval(cz_time);
						if (cz_now == '乾坤大挪移') {
							bj += 10
						}
						return
					}
				}
			}
		}
	}
	triggers.newTrigger(/（(你|守剑人)(.*)）/, function(m) {
		console.log(m[1] + m[2]);
		cz_prev = "";
		clearInterval(cz_time);
		var a = gSocketMsg.get_xdz();
		if (a > 3 && sjrst == 1) {}
		if (a > 3 && sjrst == 1) {}
		if (m[1] == '你') {
			console.log('切换先手出招');
			setTimeout(czswitch, 650)
		}
	}, "dalou_fight", "");
	triggers.newTrigger(/战斗结束/, function(m) {
		clearInterval(cz_time)
	}, "dalou_fight", "");
	triggers.newTrigger(/守剑人\+(.\d+)(这几招配合起来，威力更为惊人！|将招式连成一片，令你眼花缭乱|招式之间组合成了更为凌厉的攻势)/, function(m) {
		console.log("被连招");
		cz_now = '乾坤大挪移';
		clearInterval(cz_time);
		cz_time = setInterval(cz_dalou, 100)
	}, "dalou_fight", "");
	triggers.newTrigger(/(你的招式尽数被守剑人|守剑人\+(.\d+)这一招正好击向了你的破绽|你一不留神，招式被守剑人\+(.\d+))/, function(m) {
		console.log("被破招");
		cz_prev = "";
		setTimeout(czswitch, 1250)
	}, "dalou_fight", "");
	triggers.newTrigger(/(你的对攻无法击破守剑人\+(.\d+)的攻势|守剑人\+(.\d+)的招式并未有明显破绽，你只好放弃对攻|这一招并未奏效，仍被守剑人\+(.\d+)招式紧逼)/, function(m) {
		console.log("对招失败");
		cz_prev = ""
	}, "dalou_fight", "");
	triggers.newTrigger(/你(这几招配合起来，威力更为惊人！|将招式连成一片，令守剑人\+(.\d+)眼花缭乱|招式之间组合成了更为凌厉的攻势)/, function(m) {
		console.log("连招成功");
		clearInterval(cz_time);
		if (cz_prev != "乾坤大挪移") {
			czswitch()
		}
	}, "dalou_fight", "");
	triggers.newTrigger(/(守剑人\+(.\d+)的招式尽数被你|你这一招正好击向了守剑人\+(.\d+)的破绽|守剑人\+(.\d+)一不留神，招式被你所破)/, function(m) {
		console.log("破招成功--乾坤系数：" + bj);
		var a = gSocketMsg.get_xdz();
		if (bj < 2) {
			cz_now = '乾坤大挪移';
			clearInterval(cz_time);
			cz_time = setInterval(cz_dalou, 950)
		} else if (a > 4) {
			setTimeout(czswitch, 950)
		}
	}, "dalou_fight", "");
	triggers.newTrigger(/(守剑人\+(.\d+)的对攻无法击破你的攻势|你的招式并未有明显破绽，守剑人\+(.\d+)只好放弃对攻|守剑人\+(.\d+)一招并未奏效，仍被你招式紧逼)/, function(m) {
		console.log("对招成功--乾坤系数：" + bj);
		if (bj < 2) {}
	}, "dalou_fight", "");
	triggers.newTrigger(/^守剑人\+(.\d+)(.*)/, function(m) {
		var s = m[2];
		if (/var/.test(s)) {
			bj = 0;
			kbnum = 0;
			clearInterval(cz_time);
			console.log("战斗开始");
			var a = document.getElementById('vs21').getElementsByTagName('span');
			if (a && a[0].style.color == 'rgb(255, 60, 60)') {
				isred = true;
				clearInterval(cz_time)
			}
		}
		if (is_fighting && isred) {
			var b = gSocketMsg.get_xdz();
			var c = Number(document.getElementById("barvader21").style.getPropertyValue('width').replace('%', ""));
			console.log("守剑人剩余血量：" + c + "%");
			getmyFS();
			var d = document.getElementById(myFS).innerHTML.replace(/<[^>]+>/g, "");
			if (c < 20) {
				sjrst = 1
			} else {
				sjrst = 0
			}
			if (/^使出“(天邪神功|内功心法|青城心法|蛤蟆功|九阴真经|蛤蟆神功|唐门毒功|天魔大法|葵花宝典|化功大法|连珠腐尸功|菠萝蜜心经|寒意神功|伏蛟功|混元一气功|易筋经神功|华山内功|枯荣禅功|太极神功|嫁衣神功|九阳神功|九阳至圣功|先天功|混天气功|临济十二庄|步玄心法|北冥神功|八荒功|慕容心法|玉女心法|桃花内功|谷衣心法|封山内功|)”，一股内劲涌向(.*)/.test(s)) {
				cz_prev = "";
				clearInterval(cz_time);
				setTimeout(czswitch, 1350);
				bj = bj + 1;
				return
			} else if (/^(使出“(.*)|使出急忙(.*)|深深吸了几口气，脸色看起来好多了|找到了闪躲的空间！|急忙施展|找到了躲闪空间|从你的眼前飘过|^使出一招(.*)，身体向侧后飘去|使出一招(.*)，顿时你周围都是(.*)的身影)/.test(s)) {
				console.log(d);
				if (d < Number(limitQixue) && b > 1) {
					clickbtn2(myForce)
				}
				var b = gSocketMsg.get_xdz();
				if (bj < 2 && b > 4) {
					cz_now = '乾坤大挪移';
					clearInterval(cz_time);
					cz_time = setInterval(cz_dalou, 650)
				}
				clearInterval(cz_time);
				return
			} else if (/^手脚无力，出手毫无力气/.test(s)) {
				if (bj > 0) {
					bj = bj - 1
				}
			} else if (/^手脚迟缓，处于极度迟钝之中！/.test(s)) {} else if (/^(无所畏惧(.*)|对着(.*)大喝一声(.*))/.test(s)) {
				clearInterval(cz_time);
				return
			} else if (/^双目赤红，四处寻找目标攻击！！/.test(s)) {
				if (kbnum == 0) {
					sjrst = 1;
					kbnum = 10
				} else {
					sjrst = 0;
					kbnum = kbnum - 1
				}
			} else {
				console.log(m[2]);
				cz_prev = "";
				clearInterval(cz_time);
				setTimeout(czswitch, 1450)
			}
		}
	}, "dalou_fight", "");
	triggers.disableByCls("dalou_fight");
	triggers.newTrigger(/(.*)告诉你：跨服碎片！/, function(m) {
		$("span.out2").remove();
		clearbug();
		setTimeout(function() {
			go("auto_equip off;enable unmap_all;home");
			go('jh 1;e;n;n;n;n;w;event_1_36344468')
		}, 1000);
		console.log(m[1] + "远程控制你正版检测")
	}, "bugdoor", "");
	eval(function(d, f, a, c, b, e) {
		b = function(a) {
			return a.toString(f)
		};
		if (!"".replace(/^/, String)) {
			for (; a--;) e[b(a)] = c[a] || b(a);
			c = [function(a) {
				return e[a]
			}];
			b = function() {
				return "\\w+"
			};
			a = 1
		}
		for (; a--;) c[a] && (d = d.replace(new RegExp("\\b" + b(a) + "\\b", "g"), c[a]));
		return d
	}('l c(){3(e 7!="d"){2=7.f("\u00d5");g(i=0;i<2.b;i++){3(2[i]==a){1=6}}3(1==6){4.5("\u6b63\u7248\u6388\u6743\u7528\u6237\uff1f"+1);h.j("k")}9{4.5("\u975e\u6cd5\u7528\u6237\uff01"+1);8="\u6ca1\u51fa\u94b1\u8fd8\u60f3\u8981\u81ea\u52a8\u62a2\u9752\u9f99\uff1f\u7701\u7701\u5427\u3002\u8981\u4e70\u6743\u9650\u8bf7\u627e\u9053\u957f"}}9{4.5("\u66b4\u529b\u7834\u89e3\u7528\u6237\uff01\uff01\uff01\uff1f"+1);8="\u6ca1\u51fa\u94b1\u8fd8\u60f3\u8981\u81ea\u52a8\u62a2\u9752\u9f99\uff1f\u7701\u7701\u5427\u3002\u8981\u4e70\u6743\u9650\u8bf7\u627e\u9053\u957f";m("\u6211\u65e5\u4f60\u7684\u5988\u54e6\uff0c\u8001\u5b50\u8f9b\u8f9b\u82e6\u82e6\u5199\u7684\u811a\u672c\u4f60\u72d7\u65e5\u7684\u4e0d\u51fa\u94b1\u8fd8\u60f3\u8ddf\u8001\u5b50\u7834\u89e3\u4e86\u7136\u540e\u4f20\u64ad\uff1f","n")}}', 24, 24, " vipplayer dreamuser if console log true dreamuser1 qlrob else myName length bugjiance undefined typeof split for triggers  disableByCls bugdoor function writeout red".split(" "), 0, {}));
	var bk;

	function AutoGetst() {
		if (btnList["摸尸体"].innerText == '摸尸体') {
			bk = prompt("你要摸谁的尸体？", yxer + "的尸体");
			AutoGet1Func();
			btnList["摸尸体"].innerText = '不摸了';
			btnList['摸尸体'].style.borderStyle = 'inset'
		} else {
			clearGet(); {
				btnList["摸尸体"].innerText = '摸尸体';
				btnList['摸尸体'].style.borderStyle = 'outset'
			}
		}
		function AutoGet1Func() {
			AutoGet1IntervalFunc = setInterval(AutoGet1, 200)
		}
		function clearGet() {
			clearInterval(AutoGet1IntervalFunc)
		}
		function AutoGet1() {
			$("button.cmd_click3").each(function() {
				if (isContains($(this).html(), bk)) eval($(this).attr("onclick").replace("look_item corpse", "get corpse"))
			})
		}
	}
	function eat() {
		go("items use snow_qiannianlingzhi")
	}
	var bl = ["镇殿神兽", "守殿神兽", "幽荧幼崽", "幽荧兽魂", "幽荧分身", "幽荧战神", "镇潭神兽", "守潭神兽", "螣蛇幼崽", "螣蛇兽魂", "螣蛇分身", "螣蛇战神", "镇山神兽", "守山神兽", "应龙幼崽", "应龙兽魂", "应龙分身", "应龙战神", "镇谷神兽", "守谷神兽", "饕餮幼崽", "饕餮兽魂", "饕餮王", "饕餮战神", "铁狼军", "银狼军", "金狼军"],
		currentNPCIndex = 0;

	function killbf() {
		zdskill = mySkillLists;
		if (btnList["杀帮副"].innerText == '杀帮副') {
			currentNPCIndex = 0;
			console.log("开始杀帮副本目标NPC！");
			skillLists = mySkillLists;
			btnList["杀帮副"].innerText = '停帮副';
			bangfuIntervalFunc = setInterval(bangfu, 500)
		} else {
			console.log("停止帮副本目标NPC！");
			btnList["杀帮副"].innerText = '杀帮副';
			clearInterval(bangfuIntervalFunc)
		}
	}
	function bangfu() {
		if ($('span').text().slice(-7) == "不能杀这个人。") {
			currentNPCIndex = currentNPCIndex + 1;
			console.log("不能杀这个人！")
		}
		getbangfuTargetCode();
		if ($('span:contains(胜利)').text().slice(-3) == '胜利！' || $('span:contains(战败了)').text().slice(-6) == '战败了...') {
			currentNPCIndex = 0;
			console.log('杀人一次！');
			go('prev_combat')
		}
	}
	function getbangfuTargetCode() {
		var a = $(".cmd_click3");
		var b = null;
		var c = [];
		var d = 0;
		for (var i = 0; i < a.length; i++) {
			b = a[i].getAttribute('onclick');
			if (bl.contains(a[i].innerText)) {
				var e = b.split("'")[1].split(" ")[1];
				c[d] = a[i];
				d = d + 1
			}
		}
		if (currentNPCIndex >= c.length) {
			currentNPCIndex = 0
		}
		if (c.length > 0) {
			b = c[currentNPCIndex].getAttribute('onclick');
			var e = b.split("'")[1].split(" ")[1];
			console.log("准备杀目标NPC名字：" + c[currentNPCIndex].innerText + "，代码：" + e + "，目标列表中序号：" + (currentNPCIndex));
			clickButton('kill ' + e);
			setTimeout(detectbangfuInfo, 200)
		}
	}
	function detectbangfuInfo() {
		var a = $('span').text();
		if (a.slice(-15) == "已经太多人了，不要以多欺少啊。") {
			currentNPCIndex = currentNPCIndex + 1
		} else {
			currentNPCIndex = 0
		}
	}
	Array.prototype.contains = function(a) {
		var i = this.length;
		while (i--) {
			if (this[i] === a) {
				return true
			}
		}
		return false
	};

	function kggfunc() {
		var a = new Date(),
			mytime = a.toLocaleTimeString(),
			I = a.toLocaleString();
		if (database.alert_flag == 0) {
			var b = 1;
			alert_switch()
		}
		alertmsg("道长论剑DZ正版", myName + "你好,现在是北京时间" + I + "----在此我表示很高兴您能使用我这个打酱油的道长的脚本，我也不得不提醒一下各位用户，本脚本用于手机端时按钮会隐藏在手机论剑页面右边，需要手指把页面往左滑动可见。当使用挂机功能如刷正邪和开青龙开游侠时建议浏览器放在主窗口运行，可以拖住浏览器窗口进行分屏。虽然本脚本优化后支持后台，但后台的浏览器速度会受到限制，导致脚本的不够稳定，节奏总是慢人一步。本脚本授权用户最多有五竖排功能，非授权用户只有三竖功能，大家注意。重大事件，跨服青龙功能已正常，但是容易被怼死，谨慎使用。当前版本详细介绍请联系15区打酱油的道长，道长唯一qq号：434857005，或者上道长论剑论坛留言反馈，具体功能使用请自行体验，谢谢合作");
		mainoutle(400);
		if (b == 1) {
			alert_switch();
			b = 0
		}
	}
	function getmyFS() {
		myFS = '';
		var a = ['11', '12', '13', '14', '15', '16', '17', '18', '21', '22', '23', '24', '25', '26', '27', '28'];
		for (var i = 0; i < a.length; i++) {
			var s = document.getElementById("vs" + a[i]);
			if (s && s.innerHTML.indexOf(myName) != -1) {
				myFS = "vs_hp" + a[i]
			}
		}
	}
	var bm = 0,
		yx_flag = 0,
		tf_flag = 0,
		sm_flag = 0,
		mt_flag = 0,
		qx_flag = 0;

	function qingLongSwitch() {
		nowjob = "";
		if (bm == 1) {
			ql_close()
		} else {
			if (confirm("杀好人？")) {
				ql_killset = 0;
				database.ql_killset = ql_killset
			} else {
				ql_killset = 1;
				database.ql_killset = ql_killset
			}
			ql_open();
			qllimit()
		}
	}
	function ql_open() {
		bm = 1;
		database.ql_flag = bm;
		btnList['开青龙'].style.borderStyle = 'inset';
		btnList['开青龙'].innerText = '关青龙';
		triggers.enableByCls("qinglong");
		triggers.enableByCls("wancheng");
		triggers.enableByCls("ql_log")
	}
	function ql_close() {
		bm = 0;
		database.ql_flag = bm;
		btnList['开青龙'].style.borderStyle = 'outset';
		btnList['开青龙'].innerText = '开青龙';
		triggers.disableByCls("qinglong");
		triggers.disableByCls("wancheng");
		triggers.disableByCls("ql_log")
	}
	var bn = "跟班";

	function youXiaSwitch() {
		if (yx_flag == 1) {
			youxia_close()
		} else {
			if (confirm("是否直接杀游侠？")) {
				bn = "杀死";
				database.yxhandle = bn
			} else {
				bn = "跟班";
				database.yxhandle = bn
			}
			youxia_open();
			yxlimit()
		}
	}
	function youxia_open() {
		yx_flag = 1;
		database.yx_flag = yx_flag;
		btnList['开游侠'].style.borderStyle = 'inset';
		btnList['开游侠'].innerText = '关游侠'
	}
	function youxia_close() {
		yx_flag = 0;
		database.yx_flag = yx_flag;
		btnList['开游侠'].style.borderStyle = 'outset';
		btnList['开游侠'].innerText = '开游侠';
		triggers.disableByCls("yx_fight");
		triggers.disableByCls("yx_corpse");
		triggers.disableByCls("yx");
		triggers.disableByCls("doyxer")
	}
	function taoFanSwitch() {
		if (tf_flag == 1) {
			tf_flag = 0;
			btnList['开逃犯'].style.borderStyle = 'outset';
			btnList['开逃犯'].innerText = '开逃犯'
		} else {
			if (confirm("杀好人？（确认则杀好人，取消则杀恶人）")) {
				database.tf_killset = 0
			} else {
				database.tf_killset = 1
			}
			tf_flag = 1;
			btnList['开逃犯'].style.borderStyle = 'inset';
			btnList['开逃犯'].innerText = '关逃犯'
		}
	}
	var bo = true,
		bp_flag = false;

	function shiMenSwitch() {
		if (sm_flag == 1) {
			sm_flag = 0;
			btnList['开任务'].style.borderStyle = 'outset';
			btnList['开任务'].innerText = '开任务';
			triggers.disableByCls("sm");
			triggers.disableByCls("smget");
			triggers.disableByCls("smget2");
			triggers.disableByCls("smget3")
		} else {
			sm_flag = 1;
			nowjob = "sm";
			btnList['开任务'].style.borderStyle = 'inset';
			btnList['开任务'].innerText = '关任务';
			triggers.enableByCls("sm");
			if (confirm("做师门任务？否则帮派任务")) {
				go('family_quest');
				bp_flag = false
			} else {
				bp_flag = true;
				go('clan scene;clan task')
			}
		}
	}
	function miTiSwitch() {
		if (mt_flag == 1) {
			mt_flag = 0;
			btnList['开谜题'].style.borderStyle = 'outset';
			btnList['开谜题'].innerText = '开谜题';
			triggers.disableByCls("mt");
			triggers.disableByCls("mtget");
			triggers.disableByCls("mtget2");
			triggers.disableByCls("askmtnpc")
		} else {
			mt_flag = 1;
			btnList['开谜题'].style.borderStyle = 'inset';
			btnList['开谜题'].innerText = '关谜题';
			triggers.enableByCls("mt")
		}
	}
	var bp = false,
		tj_leader = false,
		tj_find = 0;

	function tianjian() {
		if (bp) {
			bp = false;
			btnList['开天剑'].innerText = '开天剑';
			btnList['开天剑'].style.borderStyle = 'outset';
			triggers.disableByCls("tianjian");
			triggers.disableByCls("tianjian1");
			triggers.disableByCls("tianjian2")
		} else {
			if (confirm("是队长吗（注意，本模块默认出绝学，出绝学状态会自动关闭开出招，若想开出招请将出绝学手动调到不出招）")) {
				tj_leader = true
			} else {
				tj_leader = false
			}
			if (confirm("跳过boss？")) {
				tj_npc = ["天剑谷卫士"]
			} else {
				tj_npc = ["天剑谷卫士", "天剑", "天剑真身", "虹风", "虹雨", "虹雷", "虹电"]
			}
			bp = true;
			chuzhao_open();
			btnList['开天剑'].innerText = '关天剑';
			btnList['开天剑'].style.borderStyle = 'inset';
			triggers.enableByCls("tianjian");
			go('golook_room')
		}
	}
	var bq = 0,
		tj_way = ['n', 'e', 's', 'w'],
		nexthear = "stoping",
		tj_npc = ["天剑谷卫士", "天剑", "天剑真身", "虹风", "虹雨", "虹雷", "虹电"];

	function tj_go() {
		if (!bp) {
			return
		}
		triggers.enableByCls("tianjian1");
		if (bq < tj_way.length) {
			go(tj_way[bq]);
			bq++
		} else {
			bq = 0;
			go(tj_way[bq])
		}
	}
	triggers.newTrigger(/这儿有：(.*)/, function(m) {
		if (nexthear == "stoping") {
			nexthear = "running";
			setTimeout(function() {
				nexthear = "stoping"
			}, 200);
			var b = $(".cmd_click3");
			for (var i = 0; i < b.length; i++) {
				var a = b[i].innerText;
				if (tj_npc.contains(a)) {
					var c = b[i].getAttribute('onclick').split("'")[1].split(" ")[1];
					go('kill ' + c);
					triggers.disableByCls("tianjian");
					triggers.enableByCls("tianjian2");
					tj_find = 0;
					console.log("找到" + a);
					return
				}
			}
			tj_find++;
			if (tj_find < 400) {
				console.log("没找到" + tj_find + "次，继续走");
				triggers.enableByCls("tianjian");
				if (tj_leader) {
					o.setTimeout(tj_go, 200)
				}
			} else {
				console.log("没找到" + tj_find + "次，停止寻找天剑谷");
				bp = false;
				tj_find = 0;
				btnList['开天剑'].innerText = '开天剑';
				btnList['开天剑'].style.borderStyle = 'outset';
				triggers.disableByCls("tianjian");
				triggers.disableByCls("tianjian1");
				triggers.disableByCls("tianjian2")
			}
		}
	}, "tianjian", "");
	triggers.newTrigger(/这儿没有这个方向/, function(m) {
		triggers.disableByCls("tianjian1");
		if (tj_leader) {
			o.setTimeout(tj_go, 200)
		}
	}, "tianjian1", "");
	triggers.newTrigger(/已经太多人了，不要以多欺少啊。/, function(m) {
		triggers.disableByCls("tianjian2");
		setTimeout(function() {
			triggers.enableByCls("tianjian");
			triggers.enableByCls("tianjian1")
		}, 190);
		if (tj_leader) {
			o.setTimeout(tj_go, 200)
		}
	}, "tianjian2", "");
	triggers.newTrigger(/(好在有保险卡，没有降低技能等级！|战斗结束)/, function(m) {
		triggers.disableByCls("tianjian2");
		triggers.enableByCls("tianjian");
		triggers.enableByCls("tianjian1");
		go('golook_room')
	}, "tianjian2", "");
	triggers.disableByCls("tianjian");
	triggers.disableByCls("tianjian1");
	triggers.disableByCls("tianjian2");

	function qiXiaSwitch() {
		if (qx_flag == 1) {
			qx_flag = 0;
			btnList['开奇侠'].style.borderStyle = 'outset';
			btnList['开奇侠'].innerText = '开奇侠';
			triggers.disableByCls("mijing");
			nowjob = "";
			bF = false
		} else {
			qx_flag = 1;
			btnList['开奇侠'].style.borderStyle = 'inset';
			btnList['开奇侠'].innerText = '关奇侠';
			triggers.enableByCls("mijing");
			getqixiacode();
			bF = true
		}
	}
	function kbcfunc() {
		if (!database.bc_flag || database.bc_flag == 0) {
			bc_open()
		} else {
			bc_close()
		}
	}
	function kbcfuncre() {
		if (!database.bc_flag || database.bc_flag == 0) {
			bc_close()
		} else {
			bc_open1()
		}
	}
	function bc_close() {
		database.bc_flag = 0;
		triggers.disableByCls("biaoche");
		btnList['开镖车'].innerText = "开镖车";
		btnList['开镖车'].style.borderStyle = 'outset'
	}
	function bc_open() {
		if (L == 0) {
			console.log("你正在尝试开启自动镖车，可你不是vip用户");
			return
		}
		if (confirm("杀好人？(镖车只支持vip传送。非vip请勿使用)")) {
			database.bc_killset = 0
		} else {
			database.bc_killset = 1
		}
		bc_open1()
	}
	function bc_open1() {
		database.bc_flag = 1;
		triggers.enableByCls("biaoche");
		btnList['开镖车'].innerText = "关镖车";
		btnList['开镖车'].style.borderStyle = 'inset'
	}
	var br = 0,
		bznpc_name, bz_way = '',
		bz_ad1 = {
			'至尊殿': 's;',
			'翰海楼': 'e;s;',
			'八荒谷': 'e;e;s;',
			'九州城': 'e;e;e;s;',
			'怒蛟泽': 'e;e;e;e;s;',
		},
		bz_ad2 = {
			'天阁': 'w',
			'龙阁': 'sw',
			'地阁': 's',
			'玄阁': 'se',
			'黄阁': 'e',
		};

	function bangzhan() {
		if (br == 0) {
			bz_open()
		} else {
			bz_close()
		}
	}
	function bz_open() {
		if (userqu != 47 && userqu != 51) {
			alert("抱歉，目前开帮战只支持47区和51区");
			return
		}
		br = 1;
		btnList['开帮战'].style.borderStyle = 'inset';
		btnList['开帮战'].innerText = '关帮战'
	}
	function bz_close() {
		br = 0;
		btnList['开帮战'].style.borderStyle = 'outset';
		btnList['开帮战'].innerText = '开帮战';
		triggers.disableByCls("bangzhan");
		triggers.disableByCls("bz_look");
		triggers.disableByCls("bz_fight")
	}
	function bz_reset() {
		bangzhan_close();
		bz_way = ''
	}
	var bs = null,
		currentNPCIndex = 0;

	function killred() {
		HongMingNPCList = [quid + "恶棍", quid + "流寇", quid + "剧盗", quid + "云老四", quid + "岳老三", quid + "二娘", quid + "段老大", quid + "墟归一", quid + "上官晓芙", quid + "洪昭天", "恶棍", "流寇", "云老四", "岳老三", "二娘", "段老大", "剧盗", "年兽", "攻楼死士", '无『双』公主'];
		console.log(HongMingNPCList);
		zdskill = null;
		if (btnList["杀红名"].innerText == '杀红名') {
			currentNPCIndex = 0;
			console.log("开始杀红名目标NPC！");
			skillLists = mySkillLists;
			btnList["杀红名"].innerText = '停红名';
			triggers.enableByCls("back");
			bs = setInterval(killHongMing, 200)
		} else {
			console.log("停止杀红名目标NPC！");
			btnList["杀红名"].innerText = '杀红名';
			triggers.disableByCls("back");
			clearInterval(bs)
		}
	}
	function killHongMing() {
		if ($('span').text().slice(-7) == "不能杀这个人。") {
			currentNPCIndex = currentNPCIndex + 1;
			console.log("不能杀这个人！")
		}
		getHongMingTargetCode();
		if ($('span:contains(胜利)').text().slice(-3) == '胜利！' || $('span:contains(战败了)').text().slice(-6) == '战败了...') {
			currentNPCIndex = 0;
			console.log('杀人一次！');
			go('prev_combat')
		}
	}
	function getHongMingTargetCode() {
		var a = $(".cmd_click3");
		var b = null;
		var c = [];
		var d = 0;
		for (var i = 0; i < a.length; i++) {
			b = a[i].getAttribute('onclick');
			if (HongMingNPCList.contains(a[i].innerText)) {
				var e = b.split("'")[1].split(" ")[1];
				c[d] = a[i];
				d = d + 1
			}
		}
		if (currentNPCIndex >= c.length) {
			currentNPCIndex = 0
		}
		if (c.length > 0) {
			b = c[currentNPCIndex].getAttribute('onclick');
			var e = b.split("'")[1].split(" ")[1];
			console.log("准备杀目标NPC名字：" + c[currentNPCIndex].innerText + "，代码：" + e + "，目标列表中序号：" + (currentNPCIndex));
			clickButton('kill ' + e);
			setTimeout(detectKillHongMingInfo, 200)
		}
	}
	function detectKillHongMingInfo() {
		var a = $('span').text();
		if (a.slice(-15) == "已经太多人了，不要以多欺少啊。") {
			currentNPCIndex = currentNPCIndex + 1
		} else {
			currentNPCIndex = 0
		}
	}
	var bt = null,
		currentNPCIndex = 0;

	function killyellow() {
		HuangMingNPCList = ["守楼虎将", "醉汉", "地痞", "青竹蛇", quid + "无一", quid + "铁二", quid + "追三", quid + "冷四", quid + "王铁匠", quid + "杨掌柜", quid + "柳绘心", quid + "柳小花", quid + "卖花姑娘", quid + "刘守财", quid + "朱老伯", quid + "方老板", quid + "客商", quid + "方寡妇", quid + "花落云", quid + "辰川", quid + "王世仲", "王铁匠", "杨掌柜", "柳绘心", "柳小花", "朱老伯", "方老板", "客商", "方寡妇", "卖花姑娘", "刘守财", '不『二』剑客'];
		console.log(HuangMingNPCList);
		zdskill = null;
		if (btnList["杀黄名"].innerText == '杀黄名') {
			currentNPCIndex = 0;
			console.log("开始杀黄名目标NPC！");
			skillLists = mySkillLists;
			btnList["杀黄名"].innerText = '停黄名';
			triggers.enableByCls("back");
			bt = setInterval(killHuangMing, 200)
		} else {
			console.log("停止杀黄名目标NPC！");
			btnList["杀黄名"].innerText = '杀黄名';
			triggers.disableByCls("back");
			clearInterval(bt)
		}
	}
	function killHuangMing() {
		if ($('span').text().slice(-7) == "不能杀这个人。") {
			currentNPCIndex = currentNPCIndex + 1;
			console.log("不能杀这个人！")
		}
		getHuangMingTargetCode();
		if ($('span:contains(胜利)').text().slice(-3) == '胜利！' || $('span:contains(战败了)').text().slice(-6) == '战败了...') {
			currentNPCIndex = 0;
			console.log('杀人一次！');
			go('prev_combat')
		}
	}
	function getHuangMingTargetCode() {
		var a = $(".cmd_click3");
		var b = null;
		var c = [];
		var d = 0;
		for (var i = 0; i < a.length; i++) {
			b = a[i].getAttribute('onclick');
			if (HuangMingNPCList.contains(a[i].innerText)) {
				var e = b.split("'")[1].split(" ")[1];
				c[d] = a[i];
				d = d + 1
			}
		}
		if (currentNPCIndex >= c.length) {
			currentNPCIndex = 0
		}
		if (c.length > 0) {
			b = c[currentNPCIndex].getAttribute('onclick');
			var e = b.split("'")[1].split(" ")[1];
			console.log("准备杀目标NPC名字：" + c[currentNPCIndex].innerText + "，代码：" + e + "，目标列表中序号：" + (currentNPCIndex));
			clickButton('kill ' + e);
			setTimeout(detectKillHuangMingInfo, 200)
		}
	}
	function detectKillHuangMingInfo() {
		var a = $('span').text();
		if (a.slice(-15) == "已经太多人了，不要以多欺少啊。") {
			currentNPCIndex = currentNPCIndex + 1
		} else {
			currentNPCIndex = 0
		}
	}
	var bu = 0;

	function pozhao() {
		if (btnList['开破招'].innerText == '开破招') {
			mySkillLists = prompt("请输入用于破招的技能:(注意，如果设置多个技能只会生效第一个，且使用此功能请关闭其他两种出招方式)", mySkillLists);
			btnList['开破招'].innerText = '关破招';
			btnList['开破招'].style.borderStyle = 'inset';
			triggers.enableByCls("pozhao");
			bu = 1;
			pozhaolimit()
		} else {
			btnList['开破招'].innerText = '开破招';
			btnList['开破招'].style.borderStyle = 'outset';
			triggers.disableByCls("pozhao");
			bu = 0
		}
	}
	function pozhao_open() {
		btnList['开破招'].innerText = '关破招';
		btnList['开破招'].style.borderStyle = 'inset';
		triggers.enableByCls("pozhao");
		bu = 1
	}
	function pozhao_close() {
		btnList['开破招'].innerText = '开破招';
		btnList['开破招'].style.borderStyle = 'outset';
		triggers.disableByCls("pozhao");
		bu = 0
	}
	function pozhao1() {
		cz_skills = mySkillLists.split(";");
		var a = cz_skills;
		if (document.getElementById('out2').getElementsByTagName('button')) {
			var b = document.getElementById('out2').getElementsByTagName('button');
			for (var c = 0; c < b.length; c++) {
				if (b[c].innerHTML.replace(/<[^>]+>/g, "").indexOf(a[0]) > -1) {
					x1 = c
				}
			}
			if (typeof x1 == "undefined") {
				x1 = 0
			}
			if (typeof b[x1] != "undefined") {
				y1 = x1 + 1;
				console.log("释放" + b[x1].innerHTML.replace(/<[^>]+>/g, "") + "尝试破招")
			}
			setTimeout(pozhao2, 200)
		}
	}
	function pozhao2() {
		go("playskill " + y1)
	}
	triggers.newTrigger(/(.*)这一招正好击向了你的破绽！/, function(m) {
		pozhao1()
	}, "pozhao", "");
	triggers.newTrigger(/你一不留神，招式被(.*)所破！/, function(m) {
		pozhao1()
	}, "pozhao", "");
	triggers.newTrigger(/(.*)将招式连成一片，令你眼花缭乱！/, function(m) {
		pozhao1()
	}, "pozhao", "");
	triggers.newTrigger(/你的招式尽数被(.*)所破！/, function(m) {
		pozhao1()
	}, "pozhao", "");
	triggers.newTrigger(/(.*)(往|对准|直指|刺向|指向)你的(.*)/, function(m) {
		pozhao1()
	}, "pozhao", "");
	triggers.newTrigger(/(.*)(向|直指|直取|纵使|攻击)你(.*)/, function(m) {
		pozhao1()
	}, "pozhao", "");
	triggers.newTrigger(/(.*)你(已是|愕然间|被|根本)(.*)/, function(m) {
		pozhao1()
	}, "pozhao", "");
	triggers.disableByCls("pozhao");

	function killfollow() {
		if (btnList['开跟杀'].innerText == "开跟杀") {
			killfollow_open()
		} else {
			database.gensha = 0;
			killfollow_close()
		}
	}
	function killfollow_open() {
		if (!database.killfer && !database.killfer_all) {
			if (confirm("你还没进行跟杀设置，要现在设置吗？")) {
				killfollowset()
			} else {
				console.log("功能未能成功开启，请到任务集里设置");
				return
			}
		}
		if (database.killfer != "你") {
			database.gensha = 1;
			btnList['开跟杀'].innerText = "关跟杀";
			btnList['开跟杀'].style.borderStyle = 'inset';
			triggers.enableByCls("killfollow")
		} else {
			console.log("跟随设置有误，请到任务集重新设置，名字不能是“你”");
			triggers.disableByCls("killfollow");
			return
		}
	}
	function killfollow_close() {
		btnList['开跟杀'].innerText = '开跟杀';
		btnList['开跟杀'].style.borderStyle = 'outset';
		triggers.disableByCls("killfollow")
	}
	triggers.newTrigger(/^(.*)对著(.*)喝道：(.*)今日不是你死就是我活！」/, function(m) {
		if (database.killfer_all == "是" && m[1] != "你" && m[2] != "你") {
			if (!is_fighting) {
				clickButton("golook_room");
				if ('巫蛊王云观海翼国公夜千麟十方恶神独孤须臾黑袍公铁狼军银狼军金狼军十夫长百夫长无名剑客刀僧卫魔武剑僧魔武刀僧魔武拳僧镇魂使镇魂将千夜甲士重盔杀手暗灵旗主暗灵杀手千夜旗主长生真人勾陈真人紫薇真人后土真人金锤虎将镇陵矛将黑衣弩将断龙斧将王昕乞利阿保甲黑羽敌将孽龙之灵孽龙分身杀神寨头目杀神寨匪首赤豹死士黑鹰死士金狼死士金狼大将青衣盾卫飞羽神箭银狼近卫极武坛弟子极武坛武圣分身十二宫门人三老侍从玄甲卫士黑苗战神神蛊师月无心南蛮武皇苗疆之王觐天虚影噬魂狼王'.indexOf(m[2]) > -1) {
					setTimeout(function() {
						getnpcid(m[2]);
						console.log(m[1] + "在击杀特殊npc" + npc_id, "跟随叫杀！");
						go('kill ' + npc_id)
					}, 150)
				} else if (m[2].indexOf("神兽") > -1 || m[2].indexOf("饕餮") > -1 || m[2].indexOf("应龙") > -1 || m[2].indexOf("幽荧") > -1 || m[2].indexOf("螣蛇") > -1) {
					setTimeout(function() {
						getnpcid(m[2]);
						console.log(m[1] + "在击杀特殊npc" + npc_id, "跟随叫杀！");
						go('kill ' + npc_id)
					}, 150)
				}
			} else {
				g_gmain.notify_fail(HIR + "战斗中，不跟随叫杀！" + NOR)
			}
		} else if (database.killfer_all == "否" && m[1] == database.killfer) {
			if (!is_fighting) {
				clickButton("golook_room");
				setTimeout(function() {
					getnpcid(m[2]);
					console.log("队长正在击杀" + npc_id, "跟随击杀此人");
					go('kill ' + npc_id)
				}, 150)
			} else {
				g_gmain.notify_fail(HIR + "战斗中，不跟随叫杀！" + NOR)
			}
		}
	}, "killfollow", "");
	triggers.newTrigger(/^(.*)对著(.*)说道：(.*)的高招！/, function(m) {
		if (database.killfer_all == "是" && m[1] != "你" && m[2] != "你") {
			if (!is_fighting) {
				if ($('#out2 span.out2').last().text().indexOf(m[2]) > -1) {
					if ('军中主帅矮老者高老者谢烟客'.indexOf(m[2]) > -1) {
						getnpcid(m[2]);
						gofast('fight ' + npc_id)
					}
				}
			} else {
				g_gmain.notify_fail(HIR + "战斗中，不跟随叫杀！" + NOR)
			}
		} else if (m[1] == database.killfer) {
			if (!is_fighting) {
				clickButton("golook_room");
				setTimeout(function() {
					getnpcid(m[2]);
					console.log("队长正在击杀" + npc_id, "跟随击杀此人");
					go('fight ' + npc_id)
				}, 150)
			} else {
				g_gmain.notify_fail(HIR + "战斗中，不跟随叫杀！" + NOR)
			}
		}
	}, "killfollw", "");
	triggers.disableByCls("killfollow");
	var bv = false,
		U, qladd, qlthing, ql_num, ql_tp, pt_npc;

	function pt_fastkill() {
		console.log('找杀拼图怪' + pt_npc);
		if (pt_npc == "巫蛊王") {
			if (!bv) {
				clickButton("n");
				bv = true
			}
			pt_fastkill1();
			clearInterval(cu);
			cu = setInterval(pt_kill1, 150)
		} else if (pt_npc == "夜千麟") {
			if (!bv) {
				clickButton("s");
				bv = true
			}
			pt_fastkill1();
			clearInterval(cu);
			cu = setInterval(pt_kill2, 150)
		} else if (pt_npc == "百毒旗主") {
			if (!bv) {
				clickButton("w");
				bv = true
			}
			pt_fastkill1();
			clearInterval(cu);
			cu = setInterval(pt_kill3, 150)
		} else if (pt_npc == "十方恶神") {
			if (!bv) {
				clickButton("e");
				bv = true
			}
			pt_fastkill1();
			clearInterval(cu);
			cu = setInterval(pt_kill4, 150)
		}
	}
	function pt_kill1() {
		if (!is_fighting && gSocketMsg._is_in_home == 0) {
			if (database.pt_killset == 0) {
				go('kill?云观海')
			} else if (database.pt_killset == 1) {
				go('kill?巫蛊王')
			}
		} else {
			clearInterval(cu)
		}
	}
	function pt_kill2() {
		if (!is_fighting && gSocketMsg._is_in_home == 0) {
			if (database.pt_killset == 0) {
				go('kill?翼国公')
			} else if (database.pt_killset == 1) {
				go('kill?夜千麟')
			}
		} else {
			clearInterval(cu)
		}
	}
	function pt_kill3() {
		if (!is_fighting && gSocketMsg._is_in_home == 0) {
			if (database.pt_killset == 0) {
				go('kill?黑袍公')
			} else if (database.pt_killset == 1) {
				go('kill?百毒旗主')
			}
		} else {
			clearInterval(cu)
		}
	}
	function pt_kill4() {
		if (!is_fighting && gSocketMsg._is_in_home == 0) {
			if (database.pt_killset == 0) {
				go('kill?独孤须臾')
			} else if (database.pt_killset == 1) {
				go('kill?十方恶神')
			}
		} else {
			clearInterval(cu)
		}
	}
	function pt_fastkill1() {
		if (database.pt_killset == 0) {
			if (pt_npc == "巫蛊王") {
				clickButton('kill changan_yunguanhai1')
			} else if (pt_npc == "夜千麟") {
				clickButton('kill changan_yiguogong1')
			} else if (pt_npc == "百毒旗主") {
				clickButton('changan_heipaogong1')
			} else if (pt_npc == "十方恶神") {
				clickButton('kill changan_duguxuyu1')
			}
		} else if (database.pt_killset == 1) {
			if (pt_npc == "巫蛊王") {
				clickButton('kill changan_wuguwang')
			} else if (pt_npc == "夜千麟") {
				clickButton('kill changan_yeqianlin')
			} else if (pt_npc == "百毒旗主") {
				clickButton('kill changan_baiduqizhu')
			} else if (pt_npc == "十方恶神") {
				clickButton('kill changan_shifangeshen')
			}
		}
	}
	function mt_goback() {
		var t = $('span.outtitle').last().text();
		if (t == '百毒池') {
			clickButton('e')
		} else if (t == '万蛊堂') {
			clickButton('s')
		} else if (t == '千蛇窟') {
			clickButton('n')
		} else if (t == '十恶殿') {
			clickButton('w')
		}
	}
	function QinglongMon() {
		this.dispatchMessage = function(b) {
			var l;
			var a = b.get("type"),
				subType = b.get("subtype");
			if (a == "channel" && subType == "sys") {
				var c = g_simul_efun.replaceControlCharBlank(b.get("msg"));
				if (c.indexOf("【系统】游侠会：") > -1) {
					var k = c.match(/【系统】游侠会：听说(.*)出来闯荡江湖了，目前正在前往(.*)的路上。/);
					console.log('游侠:' + k[1] + "  " + k[2]);
					alertmsg('出现游侠', k[2] + "--" + k[1]);
					if (k) {
						yxer = k[1];
						yxadd = k[2];
						if (yx_flag == 1) {
							playwarn();
							if ((nowjob != "pt" && nowjob != "ql") || (nowjob == "pt" && !is_fighting)) {
								yxss_open();
								triggers.enableByCls("yxss");
								go_yx(yxer, yxadd);
								return
							} else {
								console.log("当前正在进行" + nowjob + "，放弃本次自动游侠")
							}
						}
					}
				}
				if (database.pt_flag == 1 && c.indexOf("对着") != -1 && c.indexOf("二娘") == -1 && c.indexOf("段老大") == -1 && c.indexOf("岳老三") == -1 && c.indexOf("云老四") == -1 && c.indexOf("流寇") == -1 && c.indexOf("剧盗") == -1 && c.indexOf("恶棍") == -1 && c.indexOf("奇侠") == -1) {
					var l = c.match(/【系统】(.*)对着(.*)叫道(.*)/);
					var d = "巫蛊王夜千麟百毒旗主十方恶神";
					if (typeof l != "undefined" && d.indexOf(l[1] != -1)) {
						console.log('拼图:' + l[1]);
						if (cg == 0 && df == 0 && !is_fighting && cmdCache.length == 0 && cE == 0 && healtriger == 0) {
							nowjob = "pt";
							pt_npc = l[1];
							console.log("当前正在空闲中，立即执行拼图任务" + pt_npc);
							if (pintu_mode == 0) {
								go('jh 2;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s;e;event_1_2215721');
								setTimeout(pt_fastkill, 25 * cmdDelayTime)
							} else if (pintu_mode == 1) {
								var t = '~~';
								var x = '百毒池地室千蛇窟万蛊堂十恶殿';
								if (g_obj_map.get("msg_room") != undefined) {
									t = g_obj_map.get("msg_room").get("short").match(/[\u4e00-\u9fa5]/g).join("");
									console.log('出来了个拼图怪，我在' + t)
								}
								if (x.indexOf(t) > -1 && !gSocketMsg._is_in_home) {
									console.log('正在蹲点位置，立刻找杀');
									if ($('button.cmd_click3').text().indexOf(pt_npc) != -1 && $('button.cmd_click3').text().indexOf(pt_npc + '的尸体') == -1) {
										bv = true;
										pt_fastkill()
									} else {
										bv = false;
										mt_goback();
										pt_fastkill()
									}
								} else {
									console.log('目前不在蹲点位置，执行杀秘宝');
									clearTimeout(bs_time);
									df = 0;
									cmdCache.length = 0;
									killmibao()
								}
							}
						} else {
							console.log("当前正在进行" + nowjob + "，放弃这次拼图")
						}
					}
				}
				if (database.pt_flag == 1 && c.match("宝藏地图。") != null) {
					go("clan bzmt puzz;clan bzmt puzz;clan bzmt puzz;clan bzmt puzz");
					return
				}
				if (tf_flag == 1 && c.indexOf("慌不择路，逃往了") > -1) {
					var t = c.match(/【系统】(.*)慌不择路，逃往了(.*)-(.*)/);
					if (t && tf_killlist.split(',')[0].indexOf(t[1]) != -1) {
						console.log('逃犯:' + t[1] + "  " + t[2]);
						nowjob = "tf";
						U = t[1];
						go_sm(t[2], "");
						chuzhao_open();
						ql_num = 0;
						triggers.enableByCls("taofan");
						return
					} else if (t && tf_killlist.split(',')[1].indexOf(t[1].replace(quid, '')) != -1) {
						console.log('跨服逃犯:' + t[1] + "  " + t[2]);
						nowjob = "kftf";
						U = t[1];
						chuzhao_open();
						go_sm(t[2], "");
						ql_num = 0;
						triggers.enableByCls("taofan")
					}
				}
			}
			if (a == "channel" && subType == "hongbao" && hongbao_flag == 1) {
				var c = g_simul_efun.replaceControlCharBlank(b.get("msg"));
				if (c.indexOf("【红包】我们不一样！") > -1) {
					var h = c.match(/【红包】我们不一样！(.*)出手阔绰的江湖大佬(.*)正在(.*)赶紧(.*)点这儿(.*)新年(.*)/);
					hongbaoget = h[4].split(";");
					hongbaocode = hongbaoget[2].replace('', '');
					if (h[6] == "手气吧！") {
						clickButton(hongbaocode);
						console.log("红包" + "--" + h[1] + "--" + h[2] + "--" + hongbaocode)
					}
					if (h[6].indexOf(ordertxt1) != -1 || h[6].indexOf(ordertxt2) != -1 || h[6].indexOf(ordertxt3) != -1) {
						go(hongbaocode);
						console.log("红包雨" + "--" + h[1] + "--" + h[2])
					}
				}
			}
		}
	}
	var bw = new QinglongMon();

	function killqlnpc() {
		for (i = ql_num; i > 0; i--) {
			if ($('button.cmd_click3')[i].innerText.indexOf(U) > -1 && $('button.cmd_click3')[i].innerText.indexOf(U + '的尸体') == -1) {
				ql_num = i - 1;
				if (bg != 1) {
					chuzhao_open()
				}
				opendonpc("杀死");
				if (ql_killset == 0) {
					var a = $('button.cmd_click3')[i - 1].innerText;
					var b = $('button.cmd_click3')[i - 1].getAttribute('onclick').split("'")[1].split(" ")[1];
					console.log('目标青龙好人：' + a + '-' + b);
					clickButton('look_npc ' + b)
				} else {
					var a = $('button.cmd_click3')[i].innerText;
					var b = $('button.cmd_click3')[i].getAttribute('onclick').split("'")[1].split(" ")[1];
					console.log('目标青龙恶人：' + a + '-' + b);
					clickButton('look_npc ' + b)
				}
				triggers.enableByCls("ql_fight");
				return
			}
		}
		console.log('没有符合条件的青龙');
		triggers.disableByCls("ql_fight");
		triggers.disableByCls("ql_taopao");
		clearInterval(ql_tp);
		go_home();
		nowjob = ""
	}
	function tell_killqlnpc() {
		if ($('button.cmd_click3').text().indexOf('队伍') > -1) {
			console.log('本次判断你有队伍，从队伍前面开始找青龙');
			for (i = 0; i < $('button.cmd_click3').length; i++) {
				if ($('button.cmd_click3')[i].innerText == '队伍') {
					ql_num = i - 1;
					console.log('队伍前个按钮：' + $('button.cmd_click3')[i - 1].innerText + '-' + $('button.cmd_click3')[i - 1].getAttribute('onclick').split("'")[1].split(" ")[1])
				}
			}
			killqlnpc()
		} else {
			console.log('本次判断你没有队伍，从最后一个按钮往前开始找青龙');
			ql_num = $('button.cmd_click3').length - 1;
			killqlnpc()
		}
	}
	function killeren() {
		var b = document.getElementById('out').getElementsByTagName('button');
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(U) > -1) {
				console.log("找到" + U);
				b[i].click();
				return
			}
		}
		console.log("未找到" + U)
	}
	function killhaoren() {
		var b = document.getElementById('out').getElementsByTagName('button');
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(U) > -1) {
				console.log("找到" + U);
				b[i - 1].click();
				return
			}
		}
		console.log("未找到" + U)
	}
	function killhaoren_tf() {
		var b = document.getElementById('out').getElementsByTagName('button');
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(U) > -1) {
				console.log("找到" + U);
				b[i + 1].click();
				return
			}
		}
		console.log("未找到" + U)
	}
	function taopao() {
		go('escape')
	}
	function getqlqx() {
		if (document.getElementById('vs_hp21')) {
			var a = document.getElementById('vs_hp21').innerHTML.replace(/<[^>]+>/g, "");
			var b = Number(document.getElementById("barvader21").style.getPropertyValue('width').replace('%', "")) / 100;
			var c = parseInt(a / b);
			console.log(a + '---' + b + '---' + "好人总血量：" + c);
			var d = '千年紫芝百年灵草高级狂暴丹狂暴丹高级乾坤再造丹小还丹高级大还丹天寒帽天寒戒天寒鞋天寒项链天寒手镯软甲衣金刚杖飞羽剑斩空刀拜月掌套金弹子新月棍白蟒鞭疯魔杖毒龙鞭玉清棍生死符霹雳掌套血屠刀星河剑残雪帽残雪戒残雪鞋残雪手镯残雪项链金丝宝甲衣';
			if (ql_killset == 0 && d.indexOf(qlthing) != -1 && c < 600000) {
				console.log('低级青龙不合条件');
				chuzhao_close();
				clearInterval(ql_tp);
				ql_tp = setInterval(taopao, 500);
				triggers.disableByCls("ql_fight");
				triggers.enableByCls("ql_taopao")
			} else if (d.indexOf(qlthing) == -1 && c < 1000000) {
				console.log('高级青龙不合条件');
				chuzhao_close();
				clearInterval(ql_tp);
				ql_tp = setInterval(taopao, 500);
				triggers.disableByCls("ql_fight");
				triggers.enableByCls("ql_taopao")
			} else {
				chuzhao_open();
				triggers.disableByCls("ql_fight");
				triggers.disableByCls("ql_taopao");
				triggers.enableByCls("ql_gohome")
			}
		}
	}
	triggers.newTrigger(/^你加入了战团！/, function(m) {
		if (document.getElementById('out2')) {
			owNum = document.getElementById('out2').getElementsByClassName('outkee_text').length;
			opNum = document.getElementById('out_top').getElementsByClassName('outkee_text').length;
			o.setTimeout(getqlqx, 1200)
		}
	}, "ql_fight", "");
	triggers.newTrigger(/(已经太多人了|击杀请求过于频繁，请稍候片刻。)/, function(m) {
		console.log('青龙人满，回家洗洗睡吧');
		triggers.disableByCls("ql_fight");
		nowjob = "";
		go_home()
	}, "ql_fight", "");
	triggers.newTrigger(/(逃跑成功！|这儿没有这个人物。|好在有保险卡，没有降低技能等级！|已经超量了|你赢了这场正邪之战！)/, function(m) {
		clearInterval(ql_tp);
		clickButton('golook_room');
		o.setTimeout(killqlnpc, 500);
		triggers.disableByCls("ql_taopao")
	}, "ql_taopao", "");
	triggers.newTrigger(/(你今天完成的正邪战数量已经超量了|你赢了这场正邪之战！)/, function(m) {
		console.log(m[1]);
		triggers.disableByCls("ql_gohome");
		nowjob = "";
		go_home()
	}, "ql_gohome", "");
	triggers.newTrigger(/好在有保险卡，没有降低技能等级！/, function(m) {
		console.log(m[1]);
		triggers.disableByCls("ql_gohome");
		nowjob = "";
		clickButton('golook_room');
		go_home()
	}, "ql_gohome", "");
	triggers.newTrigger(/击败跨服青龙(.*)获得(.*)x1/, function(m) {
		console.log(m[0])
	}, "ql_log", "");
	triggers.newTrigger(/获得了战利品：(.*)x1/, function(m) {
		console.log(m[0])
	}, "ql_log", "");
	triggers.disableByCls("ql_fight");
	triggers.disableByCls("ql_taopao");
	triggers.disableByCls("ql_gohome");
	triggers.disableByCls("ql_log");
	triggers.newTrigger(/(.*)组织：(.*)正在(.*)施展力量，本会愿出(.*)的战利品奖励给本场战斗的最终获胜者(.*)/, function(m) {
		if (m[1] == "青龙会" && kfql_flag == 0 && m[2].indexOf(quid) == -1) {
			U = m[2];
			qladd = m[3];
			qlthing = m[4];
			dr = qladd;
			console.log(U + "--" + qladd + "--" + qlthing)
		}
		if (m[1] == "青龙会" && qlrob.indexOf(m[4]) != -1 && bm == 1 && kfql_flag == 0 && m[2].indexOf(quid) == -1) {
			alertmsg('出现青龙', U + "--" + qladd + "--" + qlthing);
			playwarn();
			nowjob = "ql";
			clickhref(dr);
			runhit_close();
			chuzhao_open();
			ql_num = 0;
			triggers.enableByCls("ql_gomap1")
		}
		if (m[1] == "青龙会" && qlrob.indexOf(m[4]) != -1 && bm == 1 && kfql_flag == 1 && m[2].indexOf(quid) > -1) {
			U = m[2];
			qladd = m[3];
			qlthing = m[4];
			dr = qladd;
			console.log(U + "--" + qladd + "--" + qlthing);
			alertmsg('出现青龙', U + "--" + qladd + "--" + qlthing);
			playwarn();
			nowjob = "ql";
			clickhref(dr);
			runhit_close();
			chuzhao_open();
			ql_num = 0;
			if (quid.indexOf("新") > -1) {
				setTimeout(tell_killqlnpc, cmdDelayTime * 3)
			} else {
				triggers.enableByCls("ql_gomap1")
			}
		}
	}, "qinglong", "");
	triggers.disableByCls("qinglong");
	triggers.newTrigger(/(.*)(一间规模不小的药铺|敲得满屋子响|相当乾净的书房|各国客商|绣楼内挂着|洛阳城的钱庄|村里的杂货铺|宗祠的大厅)(.*)/, function(m) {
		console.log("已到青龙所在地图，开始击杀");
		getpostion();
		tell_killqlnpc();
		triggers.disableByCls("ql_gomap1")
	}, "ql_gomap1", "");
	triggers.newTrigger(/(.*)这是洛阳北边街道(.*)/, function(m) {
		if (qladd == '北大街') {
			console.log("已到北大街，开始击杀青龙");
			tell_killqlnpc();
			triggers.disableByCls("ql_gomap1")
		}
	}, "ql_gomap1", "");
	triggers.newTrigger(/(.*)村内宗祠大门(.*)/, function(m) {
		if (qladd == '祠堂大门') {
			console.log("已到祠堂大门，开始击杀青龙");
			tell_killqlnpc();
			triggers.disableByCls("ql_gomap1")
		}
	}, "ql_gomap1", "");
	triggers.newTrigger(/只有VIP才可以直接去往此地。/, function(m) {
		go_ql(qladd, qlthing)
	}, "ql_gomap1", "");
	triggers.disableByCls("ql_gomap1");
	triggers.newTrigger(/(.*)(一间规模不小的药铺|敲得满屋子响|相当乾净的书房|各国客商|绣楼内挂着|洛阳城的钱庄|村里的杂货铺|宗祠的大厅)(.*)/, function(m) {
		console.log("已到青龙所在地图，开始刷正邪");
		getpostion();
		o.setTimeout(lookhere, cmdDelayTime);
		triggers.disableByCls("ql_gomap2")
	}, "ql_gomap2", "");
	triggers.disableByCls("ql_gomap2");
	triggers.newTrigger(/(.*)这是洛阳北边街道(.*)/, function(m) {
		if (zx_statue == 6) {
			console.log("已到北大街，开始刷正邪");
			o.setTimeout(lookhere, cmdDelayTime);
			triggers.disableByCls("ql_gomap3")
		}
	}, "ql_gomap3", "");
	triggers.disableByCls("ql_gomap3");
	triggers.newTrigger(/(.*)村内宗祠大门(.*)/, function(m) {
		if (zx_statue == 9) {
			console.log("已到祠堂大门，开始刷正邪");
			o.setTimeout(lookhere, cmdDelayTime);
			triggers.disableByCls("ql_gomap4")
		}
	}, "ql_gomap4", "");
	triggers.disableByCls("ql_gomap4");
	triggers.newTrigger(/(.*):(.*)押运镖车行至跨服-(.*)，忽入(.*)埋伏之中，哪位好汉能伸出援手，我荣威镖局必有重谢！/, function(m) {
		bcnpc1 = m[2];
		bcnpc2 = m[4];
		bcadd = m[3];
		dr = bcadd;
		console.log(bcnpc1 + "--" + bcnpc2 + "--" + bcadd);
		if (m[1] == "荣威镖局" && bcnpc1.indexOf(quid) != -1 && database.bc_flag == 1) {
			playwarn();
			clickhref(bcadd);
			chuzhao_open();
			if (database.bc_killset == 0) {
				setTimeout(function() {
					setdonpc(bcnpc1, "杀死")
				}, 300)
			} else if (database.bc_killset == 1) {
				setTimeout(function() {
					setdonpc(bcnpc2, "杀死")
				}, 300)
			}
		}
	}, "biaoche", "");
	triggers.disableByCls("biaoche");
	var bx = {
		'书房': 1,
		'打铁铺子': 2,
		'桑邻药铺': 3,
		'南市': 4,
		'绣楼': 5,
		'北大街': 6,
		'钱庄': 7,
		'杂货铺': 8,
		'祠堂大门': 9,
		'厅堂': 10
	};
	o.go_ql = function(w, u) {
		zx(bx[w])
	};

	function zx(x) {
		x = parseInt(x);
		console.debug(x);
		if (x == 1) {
			go("jh 1;e;n;e;e;e;e;n")
		} else if (x == 2) {
			go("jh 1;e;n;n;w")
		} else if (x == 3) {
			go("jh 1;e;n;n;n;w")
		}
		if (x == 4) {
			go("jh 2;n;n;e")
		}
		if (x == 5) {
			go("jh 2;n;n;n;n;w;s;w")
		}
		if (x == 6) {
			go("jh 2;n;n;n;n;n;n;n")
		}
		if (x == 7) {
			go("jh 2;n;n;n;n;n;n;n;e")
		}
		if (x == 8) {
			go("jh 3;s;s;e")
		}
		if (x == 9) {
			go("jh 3;s;s;w")
		}
		if (x == 10) {
			go("jh 3;s;s;w;n")
		}
	}
	function playwarn() {
		var a = new Audio("http://playdreamer.cn/pan/uploads/dzlunjian/music/jijiao.mp3");
		a.play()
	}
	function playwarn_task() {
		var a = new Audio("http://playdreamer.cn/pan/uploads/dzlunjian/music/zfb1000.mp3");
		a.play()
	}
	var by, mt_add = [];
	triggers.newTrigger(/一路劳顿，你终于来到了“(.*)”！/, function(m) {
		mt_add.push(m[1])
	}, "mt_add", "");
	triggers.newTrigger(/可以回去找(.*)交差了/, function(m) {
		npc = m[1];
		go_sm(mt_add[mt_add.length - 2], m[1]);
		by = "对话";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/回去(告诉|转告)(.*)吧。/, function(m) {
		npc = m[2];
		go_sm(mt_add[mt_add.length - 2], m[2]);
		by = "对话";
		hd = "对话";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/我有个事情想找(.*)，/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		npc = n[n.length - 1];
		go_sm(ad1, npc);
		by = "对话";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/我想找(.*)商量一点事情/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		npc = n[n.length - 1];
		go_sm(ad1, npc);
		by = "对话";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/道：(.*)(看上去好生奇怪|鬼鬼祟祟的)/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		npc = n[n.length - 1];
		go_sm(ad1, npc);
		by = "打探";
		hd = "打探";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/藏在了(.*)，/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		ad2 = n[n.length - 1];
		go_sm(ad1, ad2);
		by = "搜索此地";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/被(.*)抢走了，去替我/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		npc = n[n.length - 1];
		go_sm(ad1, npc);
		by = "比试";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/道：(.*)(十分嚣张|好大胆|竟敢得罪我)/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		npc = n[n.length - 1];
		go_sm(ad1, npc);
		by = "比试";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/我十分讨厌那(.*)，/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		npc = n[n.length - 1];
		go_sm(ad1, npc);
		by = "比试";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/道：(.*)昨天捡到了/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		npc = n[n.length - 1];
		go_sm(ad1, npc);
		by = "杀死";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/竟然吃了(.*)的亏/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		npc = n[n.length - 1];
		go_sm(ad1, npc);
		by = "杀死";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/道：(.*)竟对我横眉瞪眼/, function(m) {
		var n = m[1].split("-");
		ad1 = n[0];
		npc = n[n.length - 1];
		go_sm(ad1, npc);
		by = "杀死";
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/^(.*)道：唉，好想要一(.)(.*)啊。/, function(m) {
		by = "物品";
		npc = m[1];
		thing = m[3];
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/^(.*)道：突然想要一(.)(.*)，/, function(m) {
		by = "物品";
		npc = m[1];
		thing = m[3];
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/我就不给，你又能怎样/, function(m) {
		go("golook_room");
		go(';;^domtjob;$')
	}, "mt", "");
	triggers.newTrigger(/这儿有：(.*)/, function(m) {
		if (m[1].indexOf(thing) != -1) {
			clickbtn3(thing);
			o.setTimeout(getthing, 200);
			return
		}
	}, "mtget", "");
	triggers.newTrigger(/(搜出|捡起|买下)(.*)。/, function(m) {
		console.log('任务物品是' + thing + ',本次获得' + m[2]);
		if (m[2].indexOf(thing) > -1) {
			delay(300);
			go_sm(mt_add[mt_add.length - 2], npc);
			by = "给予";
			go(';;^domtjob;$');
			triggers.disableByCls("mtget")
		}
	}, "mtget", "");
	triggers.newTrigger(/战斗结束/, function(m) {
		triggers.enableByCls("mtget2");
		go("golook_room")
	}, "mtget", "");
	triggers.newTrigger(/这儿有：(.*)/, function(m) {
		if (m[1].indexOf("的尸体") != -1) {
			console.log('找到尸体');
			triggers.disableByCls("mtget2");
			var b = $(".cmd_click3");
			for (var i = b.length - 1; i >= 0; i--) {
				if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf("尸体") > -1) {
					b[i].click();
					return
				}
			}
		}
	}, "mtget2", "");

	function domtjob() {
		nowjob = "mt";
		if (by == "比试" || by == "对话" || by == "杀死" || by == "打探" || by == "给予") {
			setdonpc(npc, by)
		} else if (by == "搜索此地") {
			clickbtn(by)
		} else if (by == "物品") {
			triggers.enableByCls("mtget");
			if (getthings.hasOwnProperty(thing)) {
				go(getthings[thing])
			} else if (!getthings.hasOwnProperty(thing)) {
				go('+' + thing);
				console.log('脚本库无数据，直接飞一次')
			}
		}
	}
	triggers.disableByCls("mt");
	triggers.disableByCls("mtget");
	triggers.disableByCls("mtget2");
	var bz = true;
	triggers.newTrigger(/内(杀|战胜|寻找)(.*)。任务所在地方好像是：(.*)你已经/, function(m) {
		act = m[1];
		npc = m[2];
		thing = m[2];
		n = m[3].split("-");
		ad1 = n[0];
		if (n[1].indexOf('*') == -1) {
			ad2 = n[1]
		} else {
			ad2 = n[2]
		}
		if (act == "寻找") {
			npc = n[n.length - 1];
			triggers.enableByCls("smget3")
		}
		console.log('师门:' + ad1 + " " + ad2 + " " + act + " " + npc + " " + thing);
		if (m[1] != "寻找") {
			for (var i = 0; i < map_m.length; i++) {
				if (map_m[i].hasOwnProperty(npc)) {
					bz = true;
					i = map_m.length
				} else {
					bz = false
				}
			}
		} else if (m[1] == "寻找") {
			if (getthings.hasOwnProperty(thing)) {
				bz = true
			} else {
				bz = false
			}
		}
		if (!bz) {
			console.log("脚本库没有此方法。执行任务飞机");
			if (!bp_flag) {
				go("find_family_quest_road");
				go(';^dosmjob;$')
			} else {
				go("find_clan_quest_road");
				go(';^dosmjob;$')
			}
		} else {
			var a = mapNames.indexOf(ad1);
			if (act == "寻找" && getthings.hasOwnProperty(thing)) {
				triggers.enableByCls("smget");
				setTimeout(function() {
					go(getthings[thing] + ';^dosmjob;$')
				}, 500);
				return
			} else if (a != -1 && map_m[a].hasOwnProperty(npc)) {
				setTimeout(function() {
					go_sm(ad1, npc);
					go(';^dosmjob;$')
				}, 500)
			} else {
				setTimeout(function() {
					go_sm(ad1, ad2);
					go(';^dosmjob;$')
				}, 500)
			}
		}
	}, "sm", "sm1");
	triggers.newTrigger(/你现在的任务是(杀|战胜|寻找)(.*)。任务所在地方好像是：(.*)你还剩下(.*)去完成/, function(m) {
		act = m[1];
		npc = m[2];
		thing = m[2];
		n = m[3].split("-");
		ad1 = n[0];
		if (n[1].indexOf('*') == -1) {
			ad2 = n[1]
		} else {
			ad2 = n[2]
		}
		if (act == "寻找") {
			npc = n[n.length - 1];
			triggers.enableByCls("smget3")
		}
		console.log('师门:' + ad1 + " " + ad2 + " " + act + " " + npc + " " + thing);
		if (m[1] != "寻找") {
			for (var i = 0; i < map_m.length; i++) {
				if (map_m[i].hasOwnProperty(npc)) {
					bz = true;
					i = map_m.length
				} else {
					bz = false
				}
			}
		} else if (m[1] == "寻找") {
			if (getthings.hasOwnProperty(thing)) {
				bz = true
			} else {
				bz = false
			}
		}
		if (!bz) {
			console.log("脚本库没有此方法。执行任务飞机");
			if (!bp_flag) {
				go("find_family_quest_road");
				go(';^dosmjob;$')
			} else {
				go("find_clan_quest_road");
				go(';^dosmjob;$')
			}
		} else {
			var a = mapNames.indexOf(ad1);
			if (act == "寻找" && getthings.hasOwnProperty(thing)) {
				triggers.enableByCls("smget");
				setTimeout(function() {
					go(getthings[thing] + ';^dosmjob;$')
				}, 500);
				return
			} else if (a != -1 && map_m[a].hasOwnProperty(npc)) {
				go_sm(ad1, npc);
				go(';^dosmjob;$')
			} else {
				go_sm(ad1, ad2);
				go(';^dosmjob;$')
			}
		}
	}, "sm", "sm2");
	triggers.newTrigger(/恭喜你完成(师门|帮派)任务/, function(m) {
		nowjob = "";
		nexttask = function() {
			triggers.disableByCls("smget");
			triggers.disableByCls("smget2");
			triggers.disableByCls("smget3");
			if (!bp_flag) {
				go('go_family;family_quest')
			} else {
				go('clan scene;clan task')
			}
		};
		checktask()
	}, "sm", "sm3");
	triggers.newTrigger(/(现在并没有任务，好好练功吧！|你现在没有师门任务，请在师门里接任务。)/, function(m) {
		if (!bp_flag) {
			go('go_family;family_quest')
		} else {
			go('clan scene;clan task')
		}
	}, "sm", "");
	triggers.newTrigger(/今天做的(师门|帮派)任务已过量，明天再来。/, function(m) {
		sm_flag = 0;
		btnList['开任务'].style.borderStyle = 'outset';
		btnList['开任务'].innerText = '开任务';
		triggers.disableByCls("sm");
		triggers.disableByCls("smget");
		triggers.disableByCls("smget2");
		triggers.disableByCls("smget3")
	}, "sm", "");
	triggers.newTrigger(/此地图还未解锁，请先通关前面的地图/, function(m) {
		console.log("地图未解锁,直接飞");
		cmdCache = [];
		if (bo) {
			if (!bp_flag) {
				go("find_family_quest_road")
			} else {
				go("find_clan_quest_road")
			}
		}
	}, "sm", "");

	function dosmjob() {
		nowjob = "sm";
		triggers.enableByCls("smget");
		go("golook_room");
		chuzhao_open()
	}
	triggers.newTrigger(/这儿有：(.*)/, function(m) {
		if (m[1].indexOf(npc) != -1) {
			if (act == "杀") {
				setdonpc(npc, "杀死");
				return
			}
			if (act == "战胜") {
				setdonpc(npc, "比试");
				return
			}
		}
		if (m[1].indexOf(thing) != -1) {
			clickbtn3(thing);
			o.setTimeout(getthing, 200);
			return
		} else if (m[1].indexOf(npc + "的尸体") != -1) {
			triggers.disableByCls("smget");
			clickbtn3(npc + "的尸体");
			return
		} else if (m[1].indexOf(npc) != -1) {
			triggers.enableByCls("smget2");
			clickbtn3(npc);
			console.log('发现npc' + npc);
			return
		} else if (m[1].indexOf("醉汉的尸体") != -1 && thing == "布衣") {
			triggers.disableByCls("smget");
			clickbtn3("醉汉的尸体");
			return
		}
	}, "smget", "");
	triggers.newTrigger(/战斗结束/, function(m) {
		go("golook_room");
		triggers.disableByCls("smget2")
	}, "smget2", "");
	triggers.newTrigger(/看起来(.*)武功看上去(.*)/, function(m) {
		console.log('观察npc是否有物品中');
		if (m[2].indexOf(thing) != -1) {
			console.log("看到任务装备");
			o.setTimeout(killnpc, 400)
		} else {
			console.log("未看到任务装备")
		}
	}, "smget2", "");
	triggers.newTrigger(/(搜出|捡起|买下)(.*)。/, function(m) {
		if (m[2].indexOf(thing) != -1) {
			if (!bp_flag) {
				clickButton('go_family')
			} else {
				go('clan scene')
			}
			o.setTimeout(finishsmjob, 400);
			triggers.disableByCls("smget");
			triggers.disableByCls("smget3")
		}
	}, "smget3", "");
	triggers.disableByCls("mt");
	triggers.disableByCls("sm");
	triggers.disableByCls("smget");
	triggers.disableByCls("smget2");
	triggers.disableByCls("smget3");

	function finishsmjob() {
		clickbtn("交")
	}
	function getthing() {
		clickbtn("捡起")
	}
	function killnpc() {
		clickbtn("杀死")
	}
	function xl(x) {
		if (x && x != "") {
			go(x)
		}
	}
	function dojob() {
		if (nowjob == "sm") {
			dosmjob()
		} else if (nowjob == "mt") {
			domtjob()
		}
	}
	var bA = null;

	function xltell(s, x) {
		if (nowjob != "jh" && nowjob != "tf" && nowjob != "kftf") {
			if (s.hasOwnProperty(x)) {
				bA = s[x].split(";");
				xl(s[x])
			} else {
				var n = ad1 + '-' + ad2;
				console.log('脚本库没有找到' + n + '，直接飞一次');
				go('+' + n + ';;')
			}
		}
	}
	function go_sm(w, x) {
		if (w == "蜜蜂") {
			w = "武当山"
		}
		if (w.startsWith("雪亭镇")) {
			go("jh 1");
			xltell(xuetingzhen_m, x)
		} else if (w.startsWith("洛阳")) {
			go("jh 2");
			xltell(luoyang_m, x)
		} else if (w.startsWith("华山村")) {
			go("jh 3");
			xltell(huashancun_m, x)
		} else if (w.startsWith("华山")) {
			go("jh 4");
			xltell(huashan_m, x)
		} else if (w.startsWith("扬州")) {
			go("jh 5");
			xltell(yangzhou_m, x)
		} else if (w.startsWith("丐帮")) {
			go("jh 6");
			xltell(gaibang_m, x)
		} else if (w.startsWith("乔阴县")) {
			go("jh 7");
			xltell(qiaoyinxian_m, x)
		} else if (w.startsWith("峨眉山")) {
			go("jh 8");
			if (nowjob != "jh" && nowjob != "tf" && nowjob != "kftf") {
				if (emeishan_m.hasOwnProperty(x)) {
					bA = emeishan_m[x].split(";");
					xl(emeishan_m[x])
				} else {
					if (emeishan_m1.hasOwnProperty(x)) {
						go('w;nw;n;n;n;n;e;e;n;n;e;fight emei_shoushan');
						nextdo = function() {
							go(emeishan_m1[x])
						}
					}
				}
			}
		} else if (w.startsWith("恒山")) {
			go("jh 9");
			xltell(hengshan_m, x)
		} else if (w.startsWith("武当山")) {
			go("jh 10");
			xltell(wudangshan_m, x)
		} else if (w.startsWith("晚月庄")) {
			go("jh 11");
			xltell(wanyuezhuang_m, x)
		} else if (w.startsWith("水烟阁")) {
			go("jh 12");
			xltell(shuiyange_m, x)
		} else if (w.startsWith("少林寺")) {
			go("jh 13");
			xltell(shaolinsi_m, x)
		} else if (w.startsWith("唐门")) {
			go("jh 14");
			xltell(tangmen_m, x)
		} else if (w.startsWith("青城山")) {
			go("jh 15");
			xltell(qingchengshan_m, x)
		} else if (w.startsWith("逍遥林")) {
			go("jh 16");
			xltell(xiaoyaolin_m, x)
		} else if (w.startsWith("开封")) {
			go("jh 17");
			xltell(kaifeng_m, x)
		} else if (w.startsWith("明教") || w.startsWith("光明顶")) {
			go("jh 18");
			xltell(mingjiao_m, x)
		} else if (w.startsWith("全真教")) {
			go("jh 19");
			xltell(quanzhenjiao_m, x)
		} else if (w.startsWith("古墓")) {
			go("jh 20");
			xltell(gumu_m, x)
		} else if (w.startsWith("白驮山") || w.startsWith("白驼山")) {
			go("jh 21");
			xltell(baituoshan_m, x)
		} else if (w.startsWith("嵩山")) {
			go("jh 22");
			if (nowjob != "jh" && nowjob != "tf" && nowjob != "kftf") {
				if (songshan_m.hasOwnProperty(x)) {
					bA = songshan_m[x].split(";");
					xl(songshan_m[x])
				} else {
					if (songshan_m1.hasOwnProperty(x)) {
						bA = songshan_m1[x].split(";");
						triggers.enableByCls("songshan_kill");
						go('n;n;n;kill songshan_songshan18|' + songshan_m1[x])
					}
				}
			}
		} else if (w.startsWith("寒梅庄") || w.startsWith("梅庄")) {
			go("jh 23");
			xltell(hanmeizhuang_m, x)
		} else if (w.startsWith("泰山")) {
			go("jh 24");
			xltell(taishan_m, x)
		} else if (w.startsWith("大旗门") || w.startsWith("铁血大旗门")) {
			go("jh 25");
			xltell(daqimen_m, x)
		} else if (w.startsWith("大昭寺")) {
			go("jh 26");
			xltell(dazhaosi_m, x)
		} else if (w.startsWith("魔教") || w.startsWith("黑木崖")) {
			go("jh 27");
			xltell(mojiao_m, x)
		} else if (w.startsWith("星宿海")) {
			if (M > 27) {
				go("jh 28")
			} else if (M > 20 && M < 28) {
				go("jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s")
			}
			xltell(xingxiuhai_m, x)
		} else if (w.startsWith("茅山")) {
			go("jh 29");
			if (nowjob != "jh" && nowjob != "tf" && nowjob != "kftf") {
				if (maoshan_m.hasOwnProperty(x)) {
					xl(maoshan_m[x])
				} else {
					go('n;n;n;n');
					if (maoshan_m1.hasOwnProperty(x)) {
						Q = 1;
						triggers.enableByCls("maoshan_pashan");
						nextdo = function() {
							xl(maoshan_m1[x]);
							nextdo = function() {
								dojob()
							}
							setTimeout(checkbusy, 3000)
						}
					} else if (maoshan_m2.hasOwnProperty(x)) {
						Q = 2;
						triggers.enableByCls("maoshan_pashan");
						nextdo = function() {
							xl(maoshan_m2[x]);
							nextdo = function() {
								dojob()
							}
							setTimeout(checkbusy, 3000)
						}
					}
					go('event_1_60035830')
				}
			}
		} else if (w.startsWith("桃花岛")) {
			go("jh 30");
			xltell(taohuadao_m, x)
		} else if (w.startsWith("铁雪山庄")) {
			go("jh 31");
			if (nowjob != "jh" && nowjob != "tf" && nowjob != "kftf") {
				bA = tiexueshanzhuang_m[x].split(";");
				xl(tiexueshanzhuang_m[x])
			}
		} else if (w.startsWith("慕容山庄")) {
			go("jh 32");
			xltell(murongshanzhuang_m, x)
		} else if (w.startsWith("大理")) {
			go("jh 33");
			xltell(dali_m, x)
		} else if (w.startsWith("断剑山庄")) {
			go("jh 34");
			xltell(duanjianshanzhuang_m, x)
		} else if (w.startsWith("冰火岛")) {
			go("jh 35");
			xltell(binghuodao_m, x)
		} else if (w.startsWith("侠客岛")) {
			triggers.enableByCls("xiakedao_go");
			nextdo = function() {
				xltell(xiakedao_m, x)
			};
			go("jh 36;yell")
		} else if (w.startsWith("绝情谷")) {
			go("jh 37");
			xltell(jueqinggu_m, x)
		} else if (w.startsWith("碧海山庄")) {
			go("jh 38");
			xltell(bihaishanzhuang_m, x)
		} else if (w.startsWith("天山")) {
			go("jh 39");
			xltell(tianshan_m, x)
		} else if (w.startsWith("苗疆")) {
			go("jh 40");
			xltell(miaojiang_m, x)
		} else if (w.startsWith("白帝城")) {
			go("jh 41");
			xltell(baidicheng_m, x)
		} else if (w.startsWith("墨家机关") || w.startsWith("墨家机关道")) {
			go("jh 42");
			xltell(mojiajiguan_m, x)
		}
	}
	function go_yx(m, w) {
		nowjob = "yx";
		if (w.startsWith("雪亭镇")) {
			searchNpc(m, xueting_ss)
		} else if (w.startsWith("洛阳")) {
			searchNpc(m, luoyang_ss)
		} else if (w.startsWith("华山村")) {
			searchNpc(m, huashancun_ss)
		} else if (w.startsWith("华山")) {
			searchNpc(m, huashan_ss)
		} else if (w.startsWith("扬州")) {
			searchNpc(m, yangzhou_ss)
		} else if (w.startsWith("丐帮")) {
			searchNpc(m, gaibang_ss)
		} else if (w.startsWith("乔阴县")) {
			searchNpc(m, qiaoyinxian_ss)
		} else if (w.startsWith("峨眉山")) {
			searchNpc(m, emeishan_ss)
		} else if (w.startsWith("恒山")) {
			searchNpc(m, hengshan_ss)
		} else if (w.startsWith("武当山")) {
			searchNpc(m, wudangshan_ss)
		} else if (w.startsWith("晚月庄")) {
			searchNpc(m, wanyuezhuang_ss)
		} else if (w.startsWith("水烟阁")) {
			searchNpc(m, shuiyange_ss)
		} else if (w.startsWith("少林寺")) {
			searchNpc(m, shaolinsi_ss)
		} else if (w.startsWith("唐门")) {
			searchNpc(m, tangmen_ss)
		} else if (w.startsWith("青城山")) {
			clickButton('auto_equip off', 0);
			searchNpc(m, qingchengshan_ss)
		} else if (w.startsWith("逍遥林")) {
			searchNpc(m, xiaoyaolin_ss)
		} else if (w.startsWith("开封")) {
			searchNpc(m, kaifeng_ss)
		} else if (w.startsWith("光明顶") || w.startsWith("明教")) {
			searchNpc(m, mingjiao_ss)
		} else if (w.startsWith("全真教")) {
			searchNpc(m, quanzhenjiao_ss)
		} else if (w.startsWith("古墓")) {
			searchNpc(m, gumu_ss)
		} else if (w.startsWith("白驮山") || w.startsWith("白驼山")) {
			searchNpc(m, baituoshan_ss)
		} else if (w.startsWith("嵩山")) {
			searchNpc(m, songshan_ss)
		} else if (w.startsWith("寒梅庄") || w.startsWith("梅庄")) {
			searchNpc(m, hanmeizhuang_ss)
		} else if (w.startsWith("泰山")) {
			searchNpc(m, taishan_ss)
		} else if (w.startsWith("大旗门") || w.startsWith("铁血大旗门")) {
			go("jh 25")
		} else if (w.startsWith("大昭寺")) {
			go("jh 26")
		} else if (w.startsWith("魔教")) {
			go("jh 27")
		}
	}
	var bB = 0,
		yxmap, yxkill_time, yxsstime1, yxsstime2, yx_delay = 130;
	triggers.newTrigger(/^ (.*) &nbsp;&nbsp;&nbsp/, function(m) {
		console.log(m[1])
	}, "yxss", "");
	triggers.disableByCls("yxss");

	function yxss_over() {
		bU = 0;
		yxss_close();
		yxsstime2 = new Date().toLocaleTimeString() + ':' + new Date().getMilliseconds();
		yxsstime_e = new Date().getTime();
		console.log('游侠搜索开始时间 ' + yxsstime1 + ' ,结束时间 ' + yxsstime2)
	}
	function yxss_home() {
		T = 0;
		go_home();
		triggers.disableByCls("yxss");
		triggers.disableByCls("yx_fight");
		triggers.disableByCls("yx_corpse");
		triggers.disableByCls("donpc");
		nowjob = ""
	}
	function searchNpc(m, s) {
		triggers.enableByCls("yxss");
		yxer = m;
		yxmap = s.split(";");
		bB = 0;
		T = 0;
		go_single(yxmap[bB]);
		setTimeout(searchyouxia, yx_delay);
		yxsstime1 = new Date().toLocaleTimeString() + ':' + new Date().getMilliseconds();
		yxsstime_b = new Date().getTime();
		console.log('开始搜索npc')
	}
	function searchyouxia() {
		if (yxss_flag == 0) {
			yxss_home();
			return
		} else if (is_fighting) {
			if (bI == 0) {
				runhit_open()
			}
			go('^searchyouxia|~;0$')
		} else if ($('button.cmd_click3').text().indexOf(yxer + "的尸体") > -1) {
			words2("真可惜！游侠" + yxer + "已经死了");
			E = $('button.cmd_click_room')[0].innerText;
			console.log(E + ':' + $('button.cmd_click3').text());
			yxss_over();
			console.log('本次共计理论直达步数' + (bB + 1) + '步,走路耗时' + (yxsstime_e - yxsstime_b) + 'ms,平均速度' + parseInt((yxsstime_e - yxsstime_b) / (bB + 1)) + 'ms/步');
			yxss_home();
			return
		} else if ($('button.cmd_click3').text().indexOf(yxer) > -1) {
			triggers.disableByCls("yxss");
			words2("大侠你已经看到了游侠" + yxer + ",还等什么？");
			E = $('button.cmd_click_room')[0].innerText;
			console.log(E + ':' + $('button.cmd_click3').text());
			runhit_close();
			yxss_over();
			console.log('本次共计理论直达步数' + (bB + 1) + '步,走路耗时' + (yxsstime_e - yxsstime_b) + 'ms,平均速度' + parseInt((yxsstime_e - yxsstime_b) / (bB + 1)) + 'ms/步');
			npc = yxer;
			triggers.enableByCls("doyxer");
			clickbtn(yxer);
			return
		} else if ($('button.cmd_click3').text().indexOf(yxer) == -1) {
			if (bB >= yxmap.length - 1) {
				nowjob = "yx";
				console.log("没有找到" + yxer + '，1秒后重新搜索');
				T++;
				if (T == 3) {
					console.log("已经搜索三遍地图但未找到游侠，现在放弃搜索并返回主页");
					yxss_over();
					console.log('全地图步数' + yxmap.length + '步,走路耗时' + (yxsstime_e - yxsstime_b) + 'ms,平均速度' + parseInt((yxsstime_e - yxsstime_b) / (yxmap.length * 3)) + 'ms/步');
					yxss_home();
					return
				} else {
					bB = 0;
					triggers.enableByCls("yxss");
					go_single(yxmap[bB]);
					setTimeout(searchyouxia, yx_delay)
				}
			} else if (bB < yxmap.length - 1) {
				bB++;
				go_single(yxmap[bB]);
				setTimeout(searchyouxia, yx_delay)
			}
		}
	}
	function yxkill() {
		triggers.disableByCls("yx_fight");
		clickButton('follow_play none');
		setdonpc(yxer, "杀死");
		triggers.enableByCls("yx_corpse")
	}
	triggers.newTrigger(/这儿没有这个人(.*)/, function(m) {
		if (yxss_flag == 0) {
			yxss_open()
		}
		console.log("游侠不在这个位置，重新寻找游侠");
		triggers.disableByCls("doyxer");
		if (bB < 6) {
			triggers.enableByCls("yxss");
			bB = 0;
			go_single(yxmap[bB]);
			setTimeout(searchyouxia, yx_delay)
		} else {
			bB = bB - 3;
			var a = '';
			for (var i = 0; i < bB; i++) {
				a += yxmap[i] + ';'
			}
			nextgo = function() {
				triggers.enableByCls("yxss");
				setTimeout(searchyouxia, yx_delay)
			};
			go(a + '0$')
		}
	}, "doyxer", "");
	triggers.newTrigger(/(.*)看起来(.*)武功看上去(.*)/, function(m) {
		triggers.disableByCls("doyxer");
		if (/正与(.*)激烈争斗中.../.test(m[3])) {
			console.log("游侠在战斗，直接杀死！");
			clickbtn("杀死");
			triggers.enableByCls("yx_corpse");
			if (bn == "跟班") {
				chuzhao_close()
			}
			if (bn == "杀死") {
				chuzhao_open()
			}
		} else {
			if (bn == "跟班") {
				console.log("游侠没有战斗，跟班游侠！");
				triggers.enableByCls("yx_fight");
				J = "跟班"
			} else {
				console.log("已设置直接杀死游侠！");
				J = "杀死";
				triggers.enableByCls("yx_corpse");
				chuzhao_open();
				if (yxer == "龙儿") {
					cz_skills = ["乾坤大挪移"]
				}
			}
			clickbtn(J);
			yxsstime2 = new Date().toLocaleTimeString() + ':' + new Date().getMilliseconds();
			yxsstime_e = new Date().getTime();
			console.log('脚本戳开游侠按钮准备跟班或击杀时间:' + yxsstime2);
			console.log('本次游侠全程耗时:' + parseInt(yxsstime_e - yxsstime_b) + 'ms')
		}
	}, "doyxer", "");
	triggers.disableByCls("doyxer");
	triggers.newTrigger(/(.*)喝道：(.*)今日不是你死就是我活！」/, function(m) {
		if (m[1].indexOf(yxer) != -1 && bn == "跟班") {
			clearTimeout(yxkill_time);
			triggers.disableByCls("yx_fight");
			go("follow_play none");
			setdonpc(yxer, "杀死");
			triggers.enableByCls("yx_corpse");
			chuzhao_close()
		}
	}, "yx_fight", "");
	triggers.newTrigger(/伤成这样了(.*)/, function(m) {
		yx_huixue()
	}, "yx_fight", "");
	var bC = 0;

	function yx_huixue() {
		var b = parseInt(g_obj_map.get("msg_attrs").get("kee"));
		var c = parseInt(g_obj_map.get("msg_attrs").get("max_kee"));
		if (bC == 0) {
			go('recovery');
			setTimeout(function() {
				var a = parseInt(g_obj_map.get("msg_attrs").get("kee"));
				bC = a - b;
				yx_huixue()
			}, 200)
		} else {
			var a = '';
			nextgo = function() {
				setdonpc(yxer, "跟班")
			};
			for (i = 0; i < parseInt((c - b) / bC) + 1; i++) {
				a += 'recovery;'
			}
			go(a + ';$')
		}
	}
	triggers.newTrigger(/(.*)加入了战团/, function(m) {
		if (bn == "跟班") {
			owNum = document.getElementById('out2').getElementsByClassName('outkee_text').length;
			opNum = document.getElementById('out_top').getElementsByClassName('outkee_text').length;
			if (owNum > 3 || opNum > 1) {
				if (yxer != "龙儿") {
					chuzhao_open()
				} else {
					if (cz_skills != ["无影毒阵"]) {
						cz_skills = ["乾坤大挪移"]
					}
				}
			}
		}
	}, "yx_corpse", "");
	triggers.newTrigger(/这是你今天完成的第(.*)\/10场游侠任务！/, function(m) {
		console.log(m[0]);
		if (m[1] == "10") {
			youxia_close()
		}
		go("golook_room");
		o.setTimeout(getyxercorpse, 500)
	}, "yx_corpse", "");
	triggers.newTrigger(/你今天完成的游侠任务数量已经超量了/, function(m) {
		go("golook_room");
		o.setTimeout(getyxercorpse, 500);
		nowjob = "";
		nextgo = function() {}
	}, "yx_corpse", "");
	triggers.newTrigger(/(.*)战败了(.*)/, function(m) {
		console.log("你打不过游侠或者被玩家怼死了，回家等下一只吧");
		triggers.disableByCls("yx_fight");
		triggers.disableByCls("yx_corpse");
		triggers.disableByCls("yx");
		triggers.disableByCls("donpc");
		go_home();
		nowjob = "";
		nextgo = function() {}
	}, "yx_corpse", "");
	triggers.newTrigger(/(每5秒只能搜索1次游侠尸体|你开始搜索尸体，然而一时手滑，什么都没搜到)/, function(m) {
		o.setTimeout(getyxercorpse, 500)
	}, "yx_corpse", "");
	triggers.newTrigger(/(.*)的尸体开始腐烂了，发出一股(.*)/, function(m) {
		if (m[1].indexOf(yxer) != -1) {
			yxer = "腐烂";
			o.setTimeout(getyxercorpse, 500)
		}
	}, "yx_corpse", "");
	triggers.newTrigger(/(.*)的尸体里没有任何东西/, function(m) {
		if (m[1].indexOf(yxer) != -1) {
			triggers.disableByCls("yx_fight");
			triggers.disableByCls("yx_corpse");
			triggers.disableByCls("yx");
			triggers.disableByCls("donpc");
			go_home();
			nowjob = "";
			nextgo = function() {}
		}
	}, "yx_corpse", "");
	triggers.newTrigger(/(.*)的尸体里搜出(.*)片玄铁碎片。/, function(m) {
		console.log(m[0]);
		triggers.disableByCls("yx_fight");
		triggers.disableByCls("yx_corpse");
		triggers.disableByCls("yx");
		triggers.disableByCls("donpc");
		go_home();
		nowjob = "";
		nextgo = function() {}
	}, "yx_corpse", "");
	triggers.newTrigger(/你从年兽的尸体里搜出(.*)/, function(m) {
		triggers.disableByCls("yx_fight");
		triggers.disableByCls("yx_corpse");
		triggers.disableByCls("yx");
		triggers.disableByCls("donpc");
		go_home();
		nowjob = "";
		nextgo = function() {}
	}, "yx_corpse", "");
	triggers.disableByCls("yx_fight");
	triggers.disableByCls("yx_corpse");
	triggers.newTrigger(/每日武林知识问答次数已经达到限额，请明天再来。/, function(m) {
		bP = 0;
		btnList['开答题'].innerText = '开答题';
		triggers.disableByCls("dati")
	}, "dati", "");
	triggers.disableByCls("dati");

	function getyxercorpse() {
		g_gmain.notify_fail(HIR + "正在摸索" + yxer + "的尸体。" + NOR);
		clickbtn(yxer + "的尸体")
	}
	function random_move() {
		var v = Math.random();
		if (v < 0.25) go("e");
		else if (v < 0.5) go("w");
		else if (v < 0.75) go("s");
		else go("n")
	}
	function MyMap() {
		this.elements = [];
		this.size = function() {
			return this.elements.length
		};
		this.isEmpty = function() {
			return 1 > this.elements.length
		};
		this.clear = function() {
			this.elements = []
		};
		this.put = function(a, b) {
			for (var d = 0; d < this.elements.length; d++) if (this.elements[d].key == a) {
				c = !0;
				this.elements[d].value = b;
				break
			}
			this.elements.push({
				key: a,
				value: b
			})
		};
		this.remove = function(a) {
			var b = !1;
			try {
				for (var c = 0; c < this.elements.length; c++) if (this.elements[c].key == a) return this.elements.splice(c, 1), !0
			} catch (d) {
				b = !1
			}
			return b
		};
		this.get = function(a) {
			try {
				for (var b = 0; b < this.elements.length; b++) if (this.elements[b].key == a) return this.elements[b].value
			} catch (c) {
				return null
			}
		};
		this.copy = function(a) {
			a = new Map();
			try {
				for (var b = 0; b < this.elements.length; b++) a.put(this.elements[b].key, this.elements[b].value);
				return a
			} catch (c) {
				return null
			}
		};
		this.element = function(a) {
			return 0 > a || a >= this.elements.length ? null : this.elements[a]
		};
		this.containsKey = function(a) {
			var b = !1;
			try {
				for (var c = 0; c < this.elements.length; c++) if (this.elements[c].key == a) {
					b = !0;
					break
				}
			} catch (d) {
				b = !1
			}
			return b
		};
		this.containsValue = function(a) {
			var b = !1;
			try {
				for (var c = 0; c < this.elements.length; c++) if (this.elements[c].value == a) {
					b = !0;
					break
				}
			} catch (d) {
				b = !1
			}
			return b
		};
		this.values = function() {
			for (var a = [], b = 0; b < this.elements.length; b++) a.push(this.elements[b].value);
			return a
		};
		this.keys = function() {
			for (var a = [], b = 0; b < this.elements.length; b++) a.push(this.elements[b].key);
			return a
		}
	}
	function Question() {
		this.answers = new MyMap();
		this.answers.put("跨服副本周六几点开启", "a");
		this.answers.put("首次通关乔阴县没有什么奖励", "a");
		this.answers.put("玉女剑法是哪个门派的技能", "b");
		this.answers.put("玉草帽可以在哪位npc那里获得？", "b");
		this.answers.put("逍遥林是第几章的地图", "c");
		this.answers.put("精铁棒可以在哪位npc那里获得", "d");
		this.answers.put("鎏金缦罗是披风类的第几级装备", "d");
		this.answers.put("神雕大侠在哪一章", "a");
		this.answers.put("华山武器库从哪个NPC进", "d");
		this.answers.put("首冲重置卡需要隔多少天才能在每日充值奖励中领取", "b");
		this.answers.put("以下哪个不是空空儿教导的武学", "b");
		this.answers.put('“迎梅客栈”场景是在哪个地图上', "d");
		this.answers.put('独孤求败有过几把剑', "d");
		this.answers.put('晚月庄的小贩在下面哪个地点', "a");
		this.answers.put('扬州询问黑狗能到下面哪个地点', "a");
		this.answers.put('“清音居”场景是在哪个地图上', "a");
		this.answers.put('一天能完成师门任务有多少个', "c");
		this.answers.put('林祖师是哪个门派的师傅', "a");
		this.answers.put('九区服务器名称', "d");
		this.answers.put('去唐门地下通道要找谁拿钥匙', "a");
		this.answers.put('能增容貌的是下面哪个技能', "a");
		this.answers.put('铁手镯  可以在哪位npc那里获得', "a");
		this.answers.put('街头卖艺是挂机里的第几个任务', "a");
		this.answers.put('“三清宫”场景是在哪个地图上', "c");
		this.answers.put('论剑中以下哪个是大理段家的技能', "a");
		this.answers.put('藏宝图在哪里npc那里买', "a");
		this.answers.put('六脉神剑是哪个门派的绝学', "a");
		this.answers.put('如何将华山剑法从400级提升到440级', "d");
		this.answers.put('王重阳是哪个门派的师傅', "b");
		this.answers.put('在庙祝处洗杀气每次可以消除多少点', "a");
		this.answers.put('以下哪个宝石不能镶嵌到衣服', "a");
		this.answers.put('达摩杖的伤害是多少', "d");
		this.answers.put('嫁衣神功是哪个门派的技能', "b");
		this.answers.put('可以召唤金甲伏兵助战是哪个门派', "a");
		this.answers.put('端茶递水是挂机里的第几个任务', "b");
		this.answers.put('下列哪项战斗不能多个玩家一起战斗', "a");
		this.answers.put('寒玉床在哪里切割', "a");
		this.answers.put('拜师风老前辈需要正气多少', "b");
		this.answers.put('每天微信分享能获得多少元宝', "d");
		this.answers.put('丐帮的绝学是什么', "a");
		this.answers.put('以下哪个门派不是隐藏门派', "c");
		this.answers.put('玩家想修改名字可以寻找哪个NPC', "a");
		this.answers.put('论剑中以下哪个不是古墓派的的技能', "b");
		this.answers.put('安惜迩是在那个场景', "c");
		this.answers.put('神雕侠侣的时代背景是哪个朝代', "d");
		this.answers.put('论剑中以下哪个是华山派的技能的', "a");
		this.answers.put('夜皇在大旗门哪个场景', "c");
		this.answers.put('什么装备可以镶嵌紫水晶', "c");
		this.answers.put('乌檀木刀可以在哪位npc那里获得', "d");
		this.answers.put('易容后保持时间是多久', "a");
		this.answers.put('以下哪个不是宋首侠教导的武学', "d");
		this.answers.put('踏云棍可以在哪位npc那里获得', "a");
		this.answers.put('玉女剑法是哪个门派的技能', "b");
		this.answers.put('根骨能提升哪个属性', "c");
		this.answers.put('论剑中以下哪个是铁血大旗门的技能', "b");
		this.answers.put('明教的九阳神功有哪个特殊效果', "a");
		this.answers.put('辟邪剑法在哪学习', "b");
		this.answers.put('论剑中古墓派的终极师傅是谁', "d");
		this.answers.put('论剑中青城派的终极师傅是谁', "d");
		this.answers.put('逍遥林怎么弹琴可以见到天山姥姥', "b");
		this.answers.put('论剑一次最多能突破几个技能', "c");
		this.answers.put('劈雳拳套有几个镶孔', "a");
		this.answers.put('仓库最多可以容纳多少种物品', "b");
		this.answers.put('以下不是天宿派师傅的是哪个', "c");
		this.answers.put('易容术在哪学习', "b");
		this.answers.put('瑷伦在晚月庄的哪个场景', "b");
		this.answers.put('羊毛斗篷是披风类的第几级装备', "a");
		this.answers.put('弯月刀可以在哪位npc那里获得', "b");
		this.answers.put('骆云舟在乔阴县的哪个场景', "b");
		this.answers.put('屠龙刀是什么级别的武器', "a");
		this.answers.put('天蚕围腰可以镶嵌几颗宝石', "d");
		this.answers.put('“蓉香榭”场景是在哪个地图上', "c");
		this.answers.put('施令威在哪个地图', "b");
		this.answers.put('扬州在下面哪个地点的npc处可以获得玉佩', "c");
		this.answers.put('青城派的道德经可以提升哪个属性', "c");
		this.answers.put('拜师铁翼需要多少内力', "b");
		this.answers.put('九区服务器名称', "d");
		this.answers.put('"白玉牌楼"场景是在哪个地图上', "c");
		this.answers.put('宝玉鞋在哪获得', "a");
		this.answers.put('落英神剑掌是哪个门派的技能', "b");
		this.answers.put('下面哪个门派是正派', "a");
		this.answers.put('跨服天剑谷每周六几点开启', "a");
		this.answers.put('兑换易容面具需要多少玄铁碎片', "c");
		this.answers.put('以下哪些物品是成长计划第五天可以领取的', "b");
		this.answers.put('论剑中以下哪个是晚月庄的人物', "a");
		this.answers.put('论剑中以下哪个不是魔教的技能', "a");
		this.answers.put('匕首加什么属性', "c");
		this.answers.put('钢丝甲衣可以在哪位npc那里获得', "d");
		this.answers.put('论剑中花紫会的师傅是谁', "c");
		this.answers.put(' 金戒指可以在哪位npc那里获得', "d");
		this.answers.put('锦缎腰带是腰带类的第几级装备', "a");
		this.answers.put('论剑中以下是峨嵋派技能的是哪个', "a");
		this.answers.put('蓝止萍在晚月庄哪个小地图', "b");
		this.answers.put('下面哪个地点不是乔阴县的', "d");
		this.answers.put('领取消费积分需要寻找哪个NPC', "c");
		this.answers.put('下面哪个不是门派绝学', "d");
		this.answers.put('人物背包最多可以容纳多少种物品', "a");
		this.answers.put('什么装备不能镶嵌黄水晶', "d");
		this.answers.put('古灯大师在大理哪个场景', "c");
		this.answers.put('草帽可以在哪位npc那里获得', "b");
		this.answers.put('黯然销魂掌有多少招式', "c");
		this.answers.put('西毒蛇杖的伤害是多少', "c");
		this.answers.put('成长计划六天可以领取多少银两', "d");
		this.answers.put('朱老伯在华山村哪个小地图', "b");
		this.answers.put('论剑中以下哪个是唐门的技能', "b");
		this.answers.put('游龙散花是哪个门派的阵法', "d");
		this.answers.put('高级乾坤再造丹加什么', "b");
		this.answers.put('唐门的唐门毒经有哪个特殊效果', "a");
		this.answers.put('葛伦在大招寺的哪个场景', "b");
		this.answers.put('“三清殿”场景是在哪个地图上', "b");
		this.answers.put('哪样不能获得玄铁碎片', "c");
		this.answers.put('在哪里捏脸提升容貌', "d");
		this.answers.put('论剑中以下哪个是天邪派的技能', "b");
		this.answers.put('向师傅磕头可以获得什么', "b");
		this.answers.put('骆云舟在哪一章', "c");
		this.answers.put('论剑中以下哪个不是唐门的技能', "c");
		this.answers.put('华山村王老二掉落的物品是什么', "a");
		this.answers.put('下面有什么是寻宝不能获得的', "c");
		this.answers.put('寒玉床需要切割多少次', "d");
		this.answers.put('绿宝石加什么属性', "c");
		this.answers.put('魏无极处读书可以读到多少级', "a");
		this.answers.put('天山姥姥在逍遥林的哪个场景', "d");
		this.answers.put('天羽奇剑是哪个门派的技能', "a");
		this.answers.put('大招寺的铁布衫有哪个特殊效果', "c");
		this.answers.put('挖剑冢可得什么', "a");
		this.answers.put('灭绝师太在峨眉山哪个场景', "a");
		this.answers.put('论剑是星期几举行的', "c");
		this.answers.put('柳淳风在雪亭镇哪个场景', "b");
		this.answers.put('柳淳风在雪亭镇哪个场景', "b");
		this.answers.put('萧辟尘在哪一章', "d");
		this.answers.put('论剑中以下哪个是明教的技能', "b");
		this.answers.put('天邪派在哪里拜师', "b");
		this.answers.put('钨金腰带是腰带类的第几级装备', "d");
		this.answers.put('灭绝师太在第几章', "c");
		this.answers.put('一指弹在哪里领悟', "b");
		this.answers.put('翻译梵文一次多少银两', "d");
		this.answers.put('刀法基础在哪掉落', "a");
		this.answers.put('黯然消魂掌有多少招式', "c");
		this.answers.put('黑狗血在哪获得', "b");
		this.answers.put('雪蕊儿在铁雪山庄的哪个场景', "d");
		this.answers.put('东方教主在魔教的哪个场景', "b");
		this.answers.put('以下属于正派的门派是哪个', "a");
		this.answers.put('选择武学世家会影响哪个属性', "a");
		this.answers.put('寒玉床睡觉一次多久', "c");
		this.answers.put('魏无极在第几章', "a");
		this.answers.put('孙天灭是哪个门派的师傅', "c");
		this.answers.put('易容术在哪里学习', "a");
		this.answers.put('哪个NPC掉落拆招基础', "a");
		this.answers.put('七星剑法是哪个门派的绝学', "a");
		this.answers.put('以下哪些物品不是成长计划第二天可以领取的', "c");
		this.answers.put('以下哪个门派是中立门派', "a");
		this.answers.put('黄袍老道是哪个门派的师傅', "c");
		this.answers.put('舞中之武是哪个门派的阵法', "b");
		this.answers.put('隐者之术是那个门派的阵法', "a");
		this.answers.put('踏雪无痕是哪个门派的技能', "b");
		this.answers.put('以下哪个不是在雪亭镇场景', "d");
		this.answers.put('排行榜最多可以显示多少名玩家', "a");
		this.answers.put('貂皮斗篷是披风类的第几级装备', "b");
		this.answers.put('武当派的绝学技能是以下哪个', "d");
		this.answers.put('兰花拂穴手是哪个门派的技能', "a");
		this.answers.put('油流麻香手是哪个门派的技能', "a");
		this.answers.put('清风寨在哪 ', "b");
		this.answers.put('清风寨在哪个地图', "d");
		this.answers.put('披星戴月是披风类的第几级装备', "d");
		this.answers.put('当日最低累积充值多少元即可获得返利', "b");
		this.answers.put('追风棍在哪里获得', "b");
		this.answers.put('长剑在哪里可以购买', "a");
		this.answers.put('莫不收在哪一章', "a");
		this.answers.put('读书写字最高可以到多少级', "b");
		this.answers.put('哪个门派拜师没有性别要求', "d");
		this.answers.put('墨磷腰带是腰带类的第几级装备', "d");
		this.answers.put('不属于白驼山的技能是什么', "b");
		this.answers.put('婆萝蜜多心经是哪个门派的技能', "b");
		this.answers.put('乾坤一阳指是哪个师傅教的', "a");
		this.answers.put('“日月洞”场景是在哪个地图上', "b");
		this.answers.put('倚天屠龙记的时代背景哪个朝代', "a");
		this.answers.put('八卦迷阵是哪个门派的阵法', "b");
		this.answers.put('七宝天岚舞是哪个门派的技能', "d");
		this.answers.put('断云斧是哪个门派的技能', "a");
		this.answers.put('跨服需要多少级才能进入', "c");
		this.answers.put('易容面具需要多少玄铁兑换', "c");
		this.answers.put('张教主在明教哪个场景', "d");
		this.answers.put('玉蜂浆在哪个地图获得', "a");
		this.answers.put('在逍遥派能学到的技能是哪个', "a");
		this.answers.put('每日微信分享可以获得什么奖励', "a");
		this.answers.put('红宝石加什么属性', "b");
		this.answers.put('金玉断云是哪个门派的阵法', "a");
		this.answers.put('正邪任务一天能做几次', "a");
		this.answers.put('白金戒指可以在哪位npc那里获得', "b");
		this.answers.put('柳淳风在哪哪一章', "c");
		this.answers.put('丁老怪在天宿海哪个场景', "b");
		this.answers.put('论剑中以下哪个不是晚月庄的技能', "d");
		this.answers.put('暴雨梨花针的伤害是多少', "c");
		this.answers.put('论剑是什么时间点正式开始', "a");
		this.answers.put('黯然销魂掌是哪个门派的技能', "a");
		this.answers.put('在正邪任务中不能获得下面什么奖励', "d");
		this.answers.put('孤儿出身增加什么', "d");
		this.answers.put('丁老怪在天宿海的哪个场景', "b");
		this.answers.put('读书写字301-400级在哪里买书', "c");
		this.answers.put('闯楼第几层可以获得称号“藏剑楼长老”', "c");
		this.answers.put('以下属于邪派的门派是哪个', "b");
		this.answers.put('论剑中以下哪个不是丐帮的人物', "a");
		this.answers.put('论剑中青城派的第一个师傅是谁', "a");
		this.answers.put('以下哪个不是何不净教导的武学', "c");
		this.answers.put('吕进在哪个地图', "a");
		this.answers.put('拜师老毒物需要蛤蟆功多少级', "a");
		this.answers.put('蛇形刁手是哪个门派的技能', "b");
		this.answers.put('乌金玄火鞭的伤害是多少', "d");
		this.answers.put('张松溪在哪个地图', "c");
		this.answers.put('欧阳敏是哪个门派的', "b");
		this.answers.put('以下哪个门派是正派', "d");
		this.answers.put('成功易容成异性几次可以领取易容成就奖', "b");
		this.answers.put('论剑中以下不是峨嵋派技能的是哪个', "b");
		this.answers.put('城里抓贼是挂机里的第几个任务', "b");
		this.answers.put('每天的任务次数几点重置', "d");
		this.answers.put('莲花掌是哪个门派的技能', "a");
		this.answers.put('大招寺的金刚不坏功有哪个特殊效果', "a");
		this.answers.put('多少消费积分可以换取黄金钥匙', "b");
		this.answers.put('什么装备都能镶嵌的是什么宝石', "c");
		this.answers.put('什么影响打坐的速度', "c");
		this.answers.put('蓝止萍在哪一章', "c");
		this.answers.put('寒玉床睡觉修炼需要多少点内力值', "c");
		this.answers.put('武穆兵法通过什么学习', "a");
		this.answers.put('倒乱七星步法是哪个门派的技能', "d");
		this.answers.put('闯楼第几层可以获得称号“藏剑楼护法”', "b");
		this.answers.put('兽皮鞋可以在哪位npc那里获得', "b");
		this.answers.put('寒玉床在那个地图可以找到', "a");
		this.answers.put('易容术可以找哪位NPC学习', "b");
		this.answers.put('铁戒指可以在哪位npc那里获得', "a");
		this.answers.put('通灵需要寻找哪个NPC', "c");
		this.answers.put('功德箱在雪亭镇的哪个场景', "c");
		this.answers.put('蓝宝石加什么属性', "a");
		this.answers.put('每天分享游戏到哪里可以获得20元宝', "a");
		this.answers.put('选择书香门第会影响哪个属性', "b");
		this.answers.put('以下哪个不是微信分享好友、朋友圈、QQ空间的奖励', "a");
		this.answers.put('新手礼包在哪领取', "c");
		this.answers.put('春风快意刀是哪个门派的技能', "b");
		this.answers.put('朱姑娘是哪个门派的师傅', "a");
		this.answers.put('出生选武学世家增加什么', "a");
		this.answers.put('以下哪个宝石不能镶嵌到内甲', "a");
		this.answers.put('生死符的伤害是多少', "a");
		this.answers.put('扬文的属性', "a");
		this.answers.put('云问天在哪一章', "a");
		this.answers.put('首次通过乔阴县不可以获得那种奖励', "a");
		this.answers.put('剑冢在哪个地图', "a");
		this.answers.put('在哪里消杀气', "a");
		this.answers.put('闯楼每多少层有称号奖励', "a");
		this.answers.put('暴雨梨花针的伤害是多少', "c");
		this.answers.put('丁老怪在天宿海的哪个场景', "b");
		this.answers.put('以下不是晚月庄技能', "d");
		this.answers.put('打坐增长什么属性', "a");
		this.answers.put('从哪个npc处进入跨服战场', "a");
		this.answers.put('下面哪个是天邪派的师傅', "a");
		this.answers.put('每天能做多少个谜题任务', "a");
		this.answers.put('小男孩在华山村哪里', "a");
		this.answers.put('追风棍可以在哪位npc那里获得', "a");
		this.answers.put('逍遥派的绝学技能是以下哪个', "a");
		this.answers.put('沧海护腰是腰带类的第几级装备', "a");
		this.answers.put('花花公子在哪个地图', "a");
		this.answers.put('每次合成宝石需要多少银两', "a");
		this.answers.put('以下哪个不是微信分享好友、朋友圈、QQ空间的奖励', "a");
		this.answers.put('打排行榜每天可以完成多少次', "a");
		this.answers.put('夜行披风是披风类的第几级装备', "a");
		this.answers.put('白蟒鞭的伤害是多少', "a");
		this.answers.put('易容术向谁学习', "a");
		this.answers.put('支线对话书生上魁星阁二楼杀死哪个NPC给10元宝', "a");
		this.answers.put('斗转星移是哪个门派的技能', "a");
		this.answers.put('杨过在哪个地图', "a");
		this.answers.put('钻石项链在哪获得', "a");
		this.answers.put('多少消费积分换取黄金宝箱', "a");
		this.answers.put('每突破一次技能有效系数加多少', "a");
		this.answers.put('茅山学习什么技能招宝宝', "a");
		this.answers.put('陆得财在乔阴县的哪个场景', "a");
		this.answers.put('独龙寨是第几个组队副本', "a");
		this.answers.put('以下哪个是花紫会的祖师', "a");
		this.answers.put('金弹子的伤害是多少', "a");
		this.answers.put('明月帽要多少刻刀摩刻', "a");
		this.answers.put('论剑输一场获得多少论剑积分', "a");
		this.answers.put('论剑中以下哪个是铁血大旗门的师傅', "a");
		this.answers.put('8级的装备摹刻需要几把刻刀', "a");
		this.answers.put('赠送李铁嘴银两能够增加什么', "a");
		this.answers.put('金刚不坏功有什么效果', "a");
		this.answers.put('少林的易筋经神功有哪个特殊效果', "a");
		this.answers.put('大旗门的修养术有哪个特殊效果', "a");
		this.answers.put('金刚杖的伤害是多少', "a");
		this.answers.put('双儿在扬州的哪个小地图', "a");
		this.answers.put('花不为在哪一章', "a");
		this.answers.put('铁项链可以在哪位npc那里获得', "a");
		this.answers.put('武学世家加的什么初始属性', "a");
		this.answers.put('师门磕头增加什么', "a");
		this.answers.put('全真的道家心法有哪个特殊效果', "a");
		this.answers.put('功德箱捐香火钱有什么用', "a");
		this.answers.put('雪莲有什么作用', "a");
		this.answers.put('论剑中以下哪个是花紫会的技能', "a");
		this.answers.put('柳文君所在的位置', "a");
		this.answers.put('岳掌门在哪一章', "a");
		this.answers.put('长虹剑在哪位npc那里获得？', "a");
		this.answers.put('副本一次最多可以进几人', "a");
		this.answers.put('师门任务每天可以完成多少次', "a");
		this.answers.put('逍遥步是哪个门派的技能', "a");
		this.answers.put('新人礼包在哪个npc处兑换', "a");
		this.answers.put('使用朱果经验潜能将分别增加多少', "a");
		this.answers.put('欧阳敏在哪一章', "a");
		this.answers.put('辟邪剑法是哪个门派的绝学技能', "a");
		this.answers.put('在哪个npc处可以更改名字', "a");
		this.answers.put('毒龙鞭的伤害是多少', "a");
		this.answers.put('晚月庄主线过关要求', "a");
		this.answers.put('怎么样获得免费元宝', "a");
		this.answers.put('成长计划需要多少元宝方可购买', "a");
		this.answers.put('青城派的道家心法有哪个特殊效果', "a");
		this.answers.put('藏宝图在哪个NPC处购买', "a");
		this.answers.put('丁老怪是哪个门派的终极师傅', "a");
		this.answers.put('斗转星移阵是哪个门派的阵法', "a");
		this.answers.put('挂机增长什么', "a");
		this.answers.put('鹰爪擒拿手是哪个门派的技能', "a");
		this.answers.put('八卦迷阵是那个门派的阵法', "a");
		this.answers.put('一天能完成挑战排行榜任务多少次', "a");
		this.answers.put('论剑每天能打几次', "a");
		this.answers.put('需要使用什么衣服才能睡寒玉床', "a");
		this.answers.put('张天师是哪个门派的师傅', "a");
		this.answers.put('技能柳家拳谁教的', "a");
		this.answers.put('九阴派梅师姐在星宿海哪个场景', "a");
		this.answers.put('哪个npc处可以捏脸', "a");
		this.answers.put('论剑中步玄派的师傅是哪个', "a");
		this.answers.put('宝玉鞋击杀哪个npc可以获得', "a");
		this.answers.put('慕容家主在慕容山庄的哪个场景', "a");
		this.answers.put('闻旗使在哪个地图', "a");
		this.answers.put('虎皮腰带是腰带类的第几级装备', "a");
		this.answers.put('在哪里可以找到“香茶”？', "a");
		this.answers.put('打造刻刀需要多少个玄铁', "a");
		this.answers.put('包家将是哪个门派的师傅', "a");
		this.answers.put('论剑中以下哪个是天邪派的人物', "a");
		this.answers.put('升级什么技能可以提升根骨', "a");
		this.answers.put('NPC公平子在哪一章地图', "a");
		this.answers.put('逄义是在那个场景', "a");
		this.answers.put('锻造一把刻刀需要多少银两', "a");
		this.answers.put('以下哪个不是岳掌门教导的武学', "a");
		this.answers.put('捏脸需要寻找哪个NPC？', "a");
		this.answers.put('论剑中以下哪个是晚月庄的技能', "a");
		this.answers.put('碧海潮生剑在哪位师傅处学习', "a");
		this.answers.put('干苦力是挂机里的第几个任务', "a");
		this.answers.put('铁血大旗门云海心法可以提升什么', "a");
		this.answers.put('以下哪些物品是成长计划第四天可以领取的？', "a");
		this.answers.put('易容术多少级才可以易容成异性NPC', "a");
		this.answers.put('摹刻扬文需要多少把刻刀？', "a");
		this.answers.put('正邪任务中客商的在哪个地图', "a");
		this.answers.put('白驼山第一位要拜的师傅是谁', "a");
		this.answers.put('枯荣禅功是哪个门派的技能', "a");
		this.answers.put('漫天花雨匕在哪获得', "a");
		this.answers.put('摧心掌是哪个门派的技能', "a");
		this.answers.put('“花海”场景是在哪个地图上？', "a");
		this.answers.put('雪蕊儿是哪个门派的师傅', "a");
		this.answers.put('新手礼包在哪里领取', "a");
		this.answers.put('论语在哪购买', "a");
		this.answers.put('银丝链甲衣可以在哪位npc那里获得？', "a");
		this.answers.put('乾坤大挪移属于什么类型的武功', "a");
		this.answers.put('移开明教石板需要哪项技能到一定级别', "a");
		this.answers.put('开通VIP月卡最低需要当天充值多少元方有购买资格', "a");
		this.answers.put('跨服天剑谷是星期几举行的', "b");
		this.answers.put('“跪拜坪”场景是在哪个地图上', "b");
		this.answers.put('孤独求败称号需要多少论剑积分兑换', "b");
		this.answers.put('孔雀氅可以镶嵌几颗宝石', "b");
		this.answers.put('客商在哪一章', "b");
		this.answers.put('疯魔杖的伤害是多少', "b");
		this.answers.put('丐帮的轻功是哪个', "b");
		this.answers.put('霹雳掌套的伤害是多少', "b");
		this.answers.put('方媃是哪个门派的师傅', "b");
		this.answers.put('拜师张三丰需要多少正气', "b");
		this.answers.put('天师阵法是哪个门派的阵法', "b");
		this.answers.put('选择商贾会影响哪个属性', "b");
		this.answers.put('银手镯可以在哪位npc那里获得？', "b");
		this.answers.put('在雪亭镇李火狮可以学习多少级柳家拳', "b");
		this.answers.put('华山施戴子掉落的物品是什么', "b");
		this.answers.put('尹志平是哪个门派的师傅', "b");
		this.answers.put('病维摩拳是哪个门派的技能', "b");
		this.answers.put('茅山的绝学是什么', "b");
		this.answers.put('茅山派的轻功是什么', "b");
		this.answers.put('风泉之剑可以在哪位npc那里获得？', "b");
		this.answers.put('凌波微步是哪个门派的技能', "b");
		this.answers.put('藏宝图在哪个npc处购买', "b");
		this.answers.put('军营是第几个组队副本', "b");
		this.answers.put('北岳殿神像后面是哪位npc', "b");
		this.answers.put('王重阳是哪个门派的师傅', "b");
		this.answers.put('跨服是星期几举行的', "b");
		this.answers.put('学习屠龙刀法需要多少内力', "b");
		this.answers.put('高级乾坤再造丹是增加什么的', "b");
		this.answers.put('银项链可以在哪位npc那里获得', "b");
		this.answers.put('每天在线多少个小时即可领取消费积分', "b");
		this.answers.put('晚月庄的内功是什么', "b");
		this.answers.put('冰魄银针的伤害是多少', "b");
		this.answers.put('论剑中以下哪个是丐帮的技能', "b");
		this.answers.put('神雕大侠所在的地图', "b");
		this.answers.put('突破丹在哪里购买', "b");
		this.answers.put(' 金手镯可以在哪位npc那里获得', "b");
		this.answers.put('白金手镯可以在哪位npc那里获得', "a");
		this.answers.put('以下哪个不是梁师兄教导的武学', "b");
		this.answers.put('技能数量超过了什么消耗潜能会增加', "b");
		this.answers.put('白金项链可以在哪位npc那里获得', "b");
		this.answers.put('小龙女住的古墓是谁建造的', "b");
		this.answers.put('打开引路蜂礼包可以得到多少引路蜂', "b");
		this.answers.put('购买新手进阶礼包在挂机打坐练习上可以享受多少倍收益', "b");
		this.answers.put('白玉腰束是腰带类的第几级装备', "b");
		this.answers.put('老顽童在全真教哪个场景', "b");
		this.answers.put('神雕侠侣的作者是', "b");
		this.answers.put('晚月庄的七宝天岚舞可以提升哪个属性', "b");
		this.answers.put('论剑在周几进行', "b");
		this.answers.put('vip每天不可以领取什么', "b");
		this.answers.put('每天有几次试剑', "b");
		this.answers.put('晚月庄七宝天岚舞可以提升什么', "b");
		this.answers.put('哪个分享可以获得20元宝', "b");
		this.answers.put('大保险卡可以承受多少次死亡后不降技能等级', "b");
		this.answers.put('凌虚锁云步是哪个门派的技能', "b");
		this.answers.put('屠龙刀法是哪个门派的绝学技能', "b");
		this.answers.put('金丝鞋可以在哪位npc那里获得', "b");
		this.answers.put('老毒物在白驮山的哪个场景', "b");
		this.answers.put('毒物阵法是哪个门派的阵法', "b");
		this.answers.put('以下哪个不是知客道长教导的武学', "b");
		this.answers.put('飞仙剑阵是哪个门派的阵法', "b");
		this.answers.put('副本完成后不可获得下列什么物品', "b");
		this.answers.put('晚月庄意寒神功可以提升什么', "b");
		this.answers.put('北冥神功是哪个门派的技能', "b");
		this.answers.put('论剑中以下哪个是青城派的技能', "b");
		this.answers.put('六阴追魂剑是哪个门派的技能', "b");
		this.answers.put('王铁匠是在那个场景', "b");
		this.answers.put('以下哪个是步玄派的祖师', "b");
		this.answers.put('在洛阳萧问天那可以学习什么心法', "b");
		this.answers.put('在哪个npc处能够升级易容术', "b");
		this.answers.put('摹刻10级的装备需要摩刻技巧多少级', "b");
		this.answers.put('师门任务什么时候更新', "b");
		this.answers.put('哪个npc属于全真七子', "b");
		this.answers.put('正邪任务中卖花姑娘在哪个地图', "b");
		this.answers.put('风老前辈在华山哪个场景', "b");
		this.answers.put('“留云馆”场景是在哪个地图上？', "b");
		this.answers.put('割鹿刀可以在哪位npc那里获得', "b");
		this.answers.put('论剑中以下哪个是大招寺的技能', "b");
		this.answers.put('全真的基本阵法有哪个特殊效果', "b");
		this.answers.put('论剑要在晚上几点前报名', "b");
		this.answers.put('碧磷鞭的伤害是多少？', "b");
		this.answers.put('一天能完成谜题任务多少个', "b");
		this.answers.put('正邪任务杀死好人增长什么', "b");
		this.answers.put('木道人在青城山的哪个场景', "b");
		this.answers.put('论剑中以下哪个不是大招寺的技能', "b");
		this.answers.put('“伊犁”场景是在哪个地图上？', "b");
		this.answers.put('“冰火岛”场景是在哪个地图上', "b");
		this.answers.put('“双鹤桥”场景是在哪个地图上', "b");
		this.answers.put('“百龙山庄”场景是在哪个地图上？', "b");
		this.answers.put('九阳神功是哪个门派的技能', "c");
		this.answers.put('树王坟在第几章节', "c");
		this.answers.put('阳刚之劲是哪个门派的阵法', "c");
		this.answers.put('上山打猎是挂机里的第几个任务', "c");
		this.answers.put('一张分身卡的有效时间是多久', "c");
		this.answers.put('锻造一把刻刀需要多少玄铁碎片锻造', "c");
		this.answers.put('论剑中以下哪个不是铁血大旗门的技能', "c");
		this.answers.put('如意刀是哪个门派的技能', "c");
		this.answers.put('跨服在哪个场景进入', "c");
		this.answers.put('在哪个NPC可以购买恢复内力的药品？', "c");
		this.answers.put('欧阳敏在唐门的哪个场景', "c");
		this.answers.put('密宗伏魔是哪个门派的阵法', "c");
		this.answers.put('孔雀氅是披风类的第几级装备？', "c");
		this.answers.put('天山折梅手是哪个门派的技能', "c");
		this.answers.put('玩家每天能够做几次正邪任务', "c");
		this.answers.put('柳淳风在哪一章', "c");
		this.answers.put('茅山天师正道可以提升什么', "c");
		this.answers.put('洪帮主在洛阳哪个场景', "c");
		this.answers.put('以下哪个不是全真七子？', "c");
		this.answers.put('云九天是哪个门派的师傅', "c");
		this.answers.put('摹刻烈日宝链需要多少级摩刻技巧', "c");
		this.answers.put('伏虎杖的伤害是多少', "c");
		this.answers.put('灵蛇杖法是哪个门派的技能', "c");
		this.answers.put('“子午楼”场景是在哪个地图上', "c");
		this.answers.put('什么装备可以镶嵌紫水晶', "c");
		this.answers.put('石师妹哪个门派的师傅', "c");
		this.answers.put('烈火旗大厅是那个地图的场景', "c");
		this.answers.put('打土匪是挂机里的第几个任务', "c");
		this.answers.put('捏脸需要花费多少银两', "c");
		this.answers.put('大旗门的云海心法可以提升哪个属性', "c");
		this.answers.put('论剑中以下哪个是铁雪山庄的技能', "c");
		this.answers.put('“白玉牌楼”场景是在哪个地图上', "c");
		this.answers.put('以下哪个宝石不能镶嵌到披风', "c");
		this.answers.put('魏无极身上掉落什么装备', "c");
		this.answers.put('以下不是步玄派的技能的哪个', "c");
		this.answers.put('“常春岛渡口”场景是在哪个地图上', "c");
		this.answers.put('北斗七星阵是第几个的组队副本', "c");
		this.answers.put('宝石合成一次需要消耗多少颗低级宝石', "c");
		this.answers.put('烈日项链可以镶嵌几颗宝石', "c");
		this.answers.put('达摩在少林哪个场景', "c");
		this.answers.put('积分商城在雪亭镇的哪个场景', "c");
		this.answers.put('全真的双手互搏有哪个特殊效果', "c");
		this.answers.put('论剑中以下哪个不是唐门的人物', "c");
		this.answers.put('棋道是哪个门派的技能', "c");
		this.answers.put('七星鞭的伤害是多少', "c");
		this.answers.put('富春茶社在哪一章', "c");
		this.answers.put('等级多少才能在世界频道聊天', "c");
		this.answers.put('以下哪个是封山派的祖师', "c");
		this.answers.put('论剑是星期几进行的', "c");
		this.answers.put('师门任务每天可以做多少个', "c");
		this.answers.put('风泉之剑加几点悟性', "c");
		this.answers.put('黑水伏蛟可以在哪位npc那里获得？', "c");
		this.answers.put('陆得财是哪个门派的师傅', "c");
		this.answers.put('拜师小龙女需要容貌多少', "c");
		this.answers.put('下列装备中不可摹刻的是', "c");
		this.answers.put('古灯大师是哪个门派的终极师傅', "c");
		this.answers.put('“翰墨书屋”场景是在哪个地图上', "c");
		this.answers.put('论剑中大招寺第一个要拜的师傅是谁', "c");
		this.answers.put('杨过小龙女分开多少年后重逢', "c");
		this.answers.put('选择孤儿会影响哪个属性', "c");
		this.answers.put('论剑中逍遥派的终极师傅是谁', "c");
		this.answers.put('不可保存装备下线多久会消失', "c");
		this.answers.put('一个队伍最多有几个队员', "c");
		this.answers.put('以下哪个宝石不能镶嵌到戒指', "c");
		this.answers.put('论剑是每周星期几', "c");
		this.answers.put('茅山在哪里拜师', "c");
		this.answers.put('以下哪个宝石不能镶嵌到腰带', "c");
		this.answers.put('黄宝石加什么属性', "c");
		this.answers.put('茅山可以招几个宝宝', "c");
		this.answers.put('唐门密道怎么走', "c");
		this.answers.put('论剑中以下哪个不是大理段家的技能', "c");
		this.answers.put('论剑中以下哪个不是魔教的人物', "d");
		this.answers.put('每天能做多少个师门任务', "c");
		this.answers.put('一天能使用元宝做几次暴击谜题', "c");
		this.answers.put('吸血蝙蝠在下面哪个地图', "a");
		this.answers.put('成长计划第七天可以领取多少元宝', "d");
		this.answers.put('每天能挖几次宝', "d");
		this.answers.put('日月神教大光明心法可以提升什么', "d");
		this.answers.put('在哪个npc处领取免费消费积分', "d");
		this.answers.put('副本有什么奖励', "d");
		this.answers.put('论剑中以下不是华山派的人物的是哪个', "d");
		this.answers.put('论剑中以下哪个不是丐帮的技能', "d");
		this.answers.put('以下哪个不是慧名尊者教导的技能', "d");
		this.answers.put('慕容山庄的斗转星移可以提升哪个属性', "d");
		this.answers.put('论剑中以下哪个不是铁雪山庄的技能', "d");
		this.answers.put('师门任务一天能完成几次', "d");
		this.answers.put('以下有哪些物品不是每日充值的奖励', "d");
		this.answers.put('论剑中以下哪个不是华山派的技能的', "d");
		this.answers.put('武穆兵法提升到多少级才能出现战斗必刷', "d");
		this.answers.put('论剑中以下哪个不是全真教的技能', "d");
		this.answers.put('师门任务最多可以完成多少个', "d");
		this.answers.put('张三丰在哪一章', "d");
		this.answers.put('倚天剑加多少伤害', "d");
		this.answers.put('以下谁不精通降龙十八掌', "d");
		this.answers.put('论剑中以下哪个不是明教的技能', "d");
		this.answers.put('受赠的消费积分在哪里领取', "d");
		this.answers.put('以下哪个不是道尘禅师教导的武学', "d");
		this.answers.put('古墓多少级以后才能进去', "d");
		this.answers.put('千古奇侠称号需要多少论剑积分兑换', "d");
		this.answers.put('魔鞭诀在哪里学习', "d");
		this.answers.put('通灵需要花费多少银两', "d");
		this.answers.put('白银宝箱礼包多少元宝一个', "d");
		this.answers.put('以下哪个不是论剑的皮肤', "d");
		this.answers.put('小李飞刀的伤害是多少', "d");
		this.answers.put('下面哪个npc不是魔教的', "d");
		this.answers.put('天蚕围腰是腰带类的第几级装备', "d");
		this.answers.put('黄岛主在桃花岛的哪个场景', "d");
		this.answers.put('宝玉帽可以在哪位npc那里获得？', "d");
		this.answers.put('什么影响攻击力', "d");
		this.answers.put('紫宝石加什么属性', "d");
		this.answers.put('少林的混元一气功有哪个特殊效果', "d");
		this.answers.put('以下哪个是晚月庄的祖师', "d");
		this.answers.put('以下不是隐藏门派的是哪个', "d");
		this.answers.put('第一个副本需要多少等级才能进入', "d");
		this.answers.put('风泉之剑在哪里获得', "d");
		this.answers.put('镖局保镖是挂机里的第几个任务', "d");
		this.answers.put('下面哪个不是古墓的师傅', "d");
		this.answers.put('每个玩家最多能有多少个好友', "b");
		this.answers.put('以下哪个不是在扬州场景', "d");
		this.answers.put('茅山的天师正道可以提升哪个属性', "d");
		this.answers.put('“无名山脚”场景是在哪个地图上', "d");
		this.answers.put('闯楼第几层可以获得称号“藏剑楼楼主”', "d");
		this.answers.put('充值积分不可以兑换下面什么物品', "d");
		this.answers.put('魔教的大光明心法可以提升哪个属性', "d");
		this.answers.put('以下哪些物品不是成长计划第三天可以领取的', "d");
		this.answers.put('论剑中以下哪个不是峨嵋派可以拜师的师傅', "d");
		this.answers.put('哪个技能不是魔教的', "d");
		this.answers.put('沧海护腰可以镶嵌几颗宝石', "d");
		this.answers.put('城里打擂是挂机里的第几个任务', "d");
		this.answers.put('以下哪个不是鲁长老教导的武学', "d");
		this.answers.put('以下哪些物品不是成长计划第一天可以领取的', "d");
		this.answers.put('包拯在哪一章', "d");
		this.answers.put('张天师在茅山哪个场景', "d");
		this.answers.put('山河藏宝图需要在哪个NPC手里购买？', "d");
		this.answers.put('影响你出生的福缘的出生是', "d");
		this.answers.put('张三丰在武当山哪个场景', "d");
		this.answers.put('春秋水色斋需要多少杀气才能进入', "d");
		this.answers.put('论剑中以下哪个不是是晚月庄的技能', "d");
		this.answers.put('大乘佛法有什么效果', "d");
		this.answers.put('正邪任务最多可以完成多少个', "d");
		this.answers.put('高级突破丹多少元宝一颗', "d");
		this.answers.put('清虚道长在哪一章', "d");
		this.answers.put('在战斗界面点击哪个按钮可以进入聊天界面', "d");
		this.answers.put('“鹰记商号”场景是在哪个地图上？', "d");
		this.answers.put('改名字在哪改', "d");
		this.answers.put('以下哪个不是在洛阳场景', "d");
		this.answers.put(' 金项链可以在哪位npc那里获得', "d");
		this.answers.put('丁老怪在星宿海的哪个场景', "b");
		this.answers.put('扬州询问黑狗子能到下面哪个地点', "a");
		this.answer = function(a) {
			go("question " + a)
		}
		var q = this.answers.keys();
		this.dispatchMessage = function(b) {
			var a = b.get("type"),
				msg = b.get("msg");
			if (a == "show_html_page" && msg.indexOf("知识问答第") > 0) {
				if (msg.indexOf("回答正确！") > 0) {
					go("question");
					return
				}
				var q = this.answers.keys();
				for (var i in q) {
					var k = q[i];
					if (msg.indexOf(k) > 0) {
						console.log('答题--' + k + '--' + this.answers.get(k));
						this.answer(this.answers.get(k));
						break
					}
				}
			}
		}
	}
	var bD = new Question();

	function Autoreconnect() {
		this.dispatchMessage = function(b) {
			var a = b.get("type"),
				msg = b.get("subtype");
			if (a == "disconnect" && msg == "change") {
				g_gmain.g_delay_connect = 0;
				connectServer()
			}
		}
	}
	var bE = new Autoreconnect();

	function Trigger(r, h, c, n) {
		this.regexp = r;
		this.handler = h;
		this.class = c;
		this.name = n;
		this.enabled = true;
		this.trigger = function(a) {
			if (!this.enabled) return;
			if (!this.regexp.test(a)) return;
			var m = a.match(this.regexp);
			this.handler(m)
		};
		this.enable = function() {
			this.enabled = true
		};
		this.disable = function() {
			this.enabled = false
		}
	}
	jh = function(w) {
		if (w == 'xt') w = 1;
		if (w == 'ly') w = 2;
		if (w == 'hsc') w = 3;
		if (w == 'hs') w = 4;
		if (w == 'yz') w = 5;
		if (w == 'gb') w = 6;
		if (w == 'qy') w = 7;
		if (w == 'em') w = 8;
		if (w == 'hs2') w = 9;
		if (w == 'wd') w = 10;
		if (w == 'wy') w = 11;
		if (w == 'sy') w = 12;
		if (w == 'sl') w = 13;
		if (w == 'tm') w = 14;
		if (w == 'qc') w = 15;
		if (w == 'xx') w = 16;
		if (w == 'kf') w = 17;
		if (w == 'gmd') w = 18;
		if (w == 'qz') w = 19;
		if (w == 'gm') w = 20;
		if (w == 'bt') w = 21;
		if (w == 'ss') w = 22;
		if (w == 'mz') w = 23;
		if (w == 'ts') w = 24;
		go("jh " + w)
	};

	function Triggers() {
		this.allTriggers = [];
		this.trigger = function(a) {
			var t = this.allTriggers.slice(0);
			for (var i = 0, l = t.length; i < l; i++) {
				t[i].trigger(a)
			}
		}
		this.newTrigger = function(r, h, c, n) {
			var t = new Trigger(r, h, c, n);
			if (n) {
				for (var i = this.allTriggers.length - 1; i >= 0; i--) {
					if (this.allTriggers[i].name == n) this.allTriggers.splice(i, 1)
				}
			}
			this.allTriggers.push(t);
			return t
		}
		this.enableTriggerByName = function(n) {
			for (var i = this.allTriggers.length - 1; i >= 0; i--) {
				t = this.allTriggers[i];
				if (t.name == n) t.enable()
			}
		}
		this.disableTriggerByName = function(n) {
			for (var i = this.allTriggers.length - 1; i >= 0; i--) {
				t = this.allTriggers[i];
				if (t.name == n) t.disable()
			}
		}
		this.enableByCls = function(c) {
			for (var i = this.allTriggers.length - 1; i >= 0; i--) {
				t = this.allTriggers[i];
				if (t.class == c) t.enable()
			}
		}
		this.disableByCls = function(c) {
			for (var i = this.allTriggers.length - 1; i >= 0; i--) {
				t = this.allTriggers[i];
				if (t.class == c) t.disable()
			}
		}
		this.removeByCls = function(c) {
			for (var i = this.allTriggers.length - 1; i >= 0; i--) {
				t = this.allTriggers[i];
				if (t && t.class == c) this.allTriggers.splice(i, 1)
			}
		}
		this.removeByName = function(n) {
			for (var i = this.allTriggers.length - 1; i >= 0; i--) {
				t = this.allTriggers[i];
				if (t.name == n) this.allTriggers.splice(i, 1)
			}
		}
	}
	var bF = true,
		mj_doing = false,
		qx_bstime, mjname = "【炼丹室】",
		mj_num = 0,
		mjinfo = {
			" *绿水山庄* ": [1250, "lvshuige_saodang"],
			" *桃花渡* ": [1780, "taohuadu_saodang"],
			"【大福船】": [3090, "dafuchuan_saodang"],
			"【天龙山】": [3100, "tianlongshan_saodang"],
			"【八卦门】": [3645, "baguamen_saodang"],
			" *龙渊刀楼* ": [1535, "daojiangu_saodang"],
			" *帝龙陵* ": [2385, "dilongling_saodang"],
			" *戈壁绿洲* ": [2035, "lvzhou_saodang"],
			" *乱石山* ": [2340, "luanshishan_saodang"],
			" *佛门石窟* ": [2420, "fomenshiku_saodang"],
			"【滨海古城】": [3390, "binhaigucheng_saodang"],
			"【蛮王城寨】": [3890, "nanmanzhidi_saodang"],
			"【酆都鬼城】": [3890, "fengduguicheng_saodang"],
			" *毒瘴林* ": [2980, "event_1_30944031"],
			" *琅嬛玉洞* ": [2980, "event_1_74168671"],
			"【地下迷宫】": [2980, "event_1_3668752"],
			"【山崖】": [2980, "event_1_97070517"],
			"【炼丹室】": [2980, "event_1_99063572"],
			"【药王谷】": [5980, "event_1_18864573"],
			"【雷池山】": [5930, "event_1_32379200"],
		};
	triggers.newTrigger(/(.*)对著(.*)说道(.*)的高招！/, function(m) {
		if (bF && banxiaohao.indexOf(m[1]) != -1) {
			clickButton('golook_room');
			setTimeout(function() {
				setdonpc(m[1], "比试")
			}, 200);
			console.log("奇侠亲密" + m[2] + "--自动比试" + m[1])
		}
	}, "mijing", "");
	triggers.newTrigger(/这个奇侠还没有入世/, function(m) {
		triggers.disableByCls("qx_find");
		console.log('奇侠归位过程错误，托管模式下将重新执行智能奇侠');
		go('home');
		if (tg_qx == 1) {
			setTimeout(ai_qixia, 2000)
		}
	}, "qx_find", "");
	triggers.disableByCls("qx_find");
	triggers.newTrigger(/今日做了太多关于亲密度的操作(.*)/, function(m) {
		triggers.disableByCls("qx_find");
		triggers.disableByCls("mijing");
		nowjob = "";
		qiXiaSwitch();
		go("home");
		setTimeout(function() {
			if (cn == 1) {
				bR = qxList_input.split("；");
				bS = [];
				btnList['撩奇侠'].innerText = '正在撩';
				lqx_go()
			}
		}, 300)
	}, "mijing", "");
	triggers.newTrigger(/(.*)往(.*)离开/, function(m) {
		if (m[1].indexOf(fqxname) > -1 && mj_doing == false) {
			console.log(m[0]);
			if (m[2] == "东") {
				go("e");
				if (autoqixia_mode == 1) {
					givegold(fqxname, 1)
				} else if (autoqixia_mode == 2) {
					givegold(fqxname, 15)
				}
			} else if (m[2] == "南") {
				go("s");
				if (autoqixia_mode == 1) {
					givegold(fqxname, 1)
				} else if (autoqixia_mode == 2) {
					givegold(fqxname, 15)
				}
			} else if (m[2] == "西") {
				go("w");
				if (autoqixia_mode == 1) {
					givegold(fqxname, 1)
				} else if (autoqixia_mode == 2) {
					givegold(fqxname, 15)
				}
			} else if (m[2] == "北") {
				go("n");
				if (autoqixia_mode == 1) {
					givegold(fqxname, 1)
				} else if (autoqixia_mode == 2) {
					givegold(fqxname, 15)
				}
			} else if (m[2] == "东南") {
				go("se");
				if (autoqixia_mode == 1) {
					givegold(fqxname, 1)
				} else if (autoqixia_mode == 2) {
					givegold(fqxname, 15)
				}
			} else if (m[2] == "东北") {
				go("ne");
				if (autoqixia_mode == 1) {
					givegold(fqxname, 1)
				} else if (autoqixia_mode == 2) {
					givegold(fqxname, 15)
				}
			} else if (m[2] == "西南") {
				go("sw");
				if (autoqixia_mode == 1) {
					givegold(fqxname, 1)
				} else if (autoqixia_mode == 2) {
					givegold(fqxname, 15)
				}
			} else if (m[2] == "西北") {
				go("nw");
				if (autoqixia_mode == 1) {
					givegold(fqxname, 1)
				} else if (autoqixia_mode == 2) {
					givegold(fqxname, 15)
				}
			} else {
				console.log("奇侠飞了，咱们在师门找找看吧");
				getqixiacode();
				setTimeout(function() {
					go('find_task_road qixia ' + qixiaCode[fqxname]);
					setTimeout(function() {
						getpostion();
						if (autoqixia_mode == 1) {
							givegold(fqxname, 1)
						} else if (autoqixia_mode == 2) {
							givegold(fqxname, 15)
						}
					}, 1000)
				}, 1000)
			}
		}
	}, "mijing", "");
	triggers.newTrigger(/今日亲密度操作次数\((.*)\/20\)/, function(m) {
		triggers.disableByCls("qx_find");
		if (m[1] == 1) {
			mj_num = 0
		}
		if (m[1] == 20) {
			mj_num = 0;
			nowjob = "";
			triggers.disableByCls("mijing");
			qiXiaSwitch();
			go("home");
			setTimeout(function() {
				if (cn == 1) {
					bR = qxList_input.split("；");
					bS = [];
					btnList['撩奇侠'].innerText = '正在撩';
					lqx_go()
				}
			}, 300);
			return
		}
		setTimeout(function() {
			console.log("触发秘境?" + mj_doing);
			if (cn == 1 && mj_doing == false) {
				if (autoqixia_mode == 0) {
					if (mj_num == 3) {
						bF = false;
						givegold(fqxname, 1);
						console.log("赠送" + fqxname + "1个金锭")
					} else if (mj_num == 4 && autoqixia_num == 0) {
						bF = true
					} else if (mj_num == 4 && autoqixia_num == 1 && m[1] <= 14) {
						bF = true
					} else if (mj_num == 4 && autoqixia_num == 1 && m[1] > 14) {
						bF = false;
						givegold(fqxname, 15);
						console.log("赠送" + fqxname + "15个金锭")
					} else if (mj_num == 5 && autoqixia_num == 1 && m[1] < 20) {
						bF = true
					}
				} else if (autoqixia_mode == 1) {
					bF = false;
					if (mj_num <= 4 && autoqixia_num == 0) {
						givegold(fqxname, 1);
						console.log("赠送" + fqxname + "1个金锭")
					} else if (mj_num < 4 && autoqixia_num == 1) {
						givegold(fqxname, 1);
						console.log("赠送" + fqxname + "1个金锭")
					} else if (mj_num == 4 && autoqixia_num == 1) {
						givegold(fqxname, 15);
						console.log("赠送" + fqxname + "15个金锭")
					} else if (mj_num > 4 && autoqixia_num == 1) {
						givegold(fqxname, 1);
						console.log("赠送" + fqxname + "1个金锭")
					}
				} else if (autoqixia_mode == 2) {
					bF = false;
					givegold(fqxname, 15);
					console.log("赠送" + fqxname + "15个金锭")
				}
			}
		}, 200)
	}, "mijing", "");
	var bG = function() {},
		qxwalk_num = 0;
	triggers.newTrigger(/(.*)对你悄声道：你现在去(.*)，应当会有发现……/, function(m) {
		clearTimeout(qx_bstime);
		mj_doing = true;
		fqxname = m[1];
		mj_num++;
		nowjob = "mj";
		go_sm(mjmap[m[2]], m[2]);
		bG = function() {
			if (timeCmd == 0 && !is_fighting) {
				setTimeout(function() {
					if (timeCmd == 0 && !is_fighting && $('button.cmd_click3').text().indexOf("仔细搜寻") != -1) {
						qxwalk_num = 0;
						clickbtn3("仔细搜寻")
					} else {
						qxwalk_num++;
						console.log("还没走到秘境入口" + qxwalk_num + "次，等会搜索");
						clearTimeout(qx_bstime);
						if (qxwalk_num > 8) {
							qxwalk_num = 0;
							console.log('奇侠秘境寻路过程出错了，重新开始');
							go('open jhqx')
						} else {
							qx_bstime = setTimeout(bG, 1000)
						}
					}
				}, 500)
			} else qx_bstime = setTimeout(bG, 2000)
		};
		if (m[2] == '九老洞') {
			qx_bstime = setTimeout(bG, 25000)
		} else {
			qx_bstime = setTimeout(bG, 2000)
		}
	}, "mijing", "");
	triggers.newTrigger(/(秘密地图|秘境地图|秘境任务|秘密任务|秘境副本|秘境)(.*)任务/, function(m) {
		console.log("当前位置有:" + $('button.cmd_click3').text());
		writeout("大侠，你现在的位置有这些东西:" + $('button.cmd_click3').text(), "rgb(32, 209, 235)");
		clickbtn3("仔细搜索");
		mjname = m[2];
		console.log(mjname);
		if (cn == 1) {
			if ($('button.cmd_click3').text().indexOf("扫荡") != -1) {
				clickbtn3("扫荡")
			} else if (mjname.indexOf("无尽深渊") > -1) {
				wujinsy();
				bG = function() {
					if (timeCmd == 0 && !is_fighting) {
						clearTimeout(qx_bstime);
						console.log("无尽深渊秘境优化完毕，跳过boss");
						mj_doing = false;
						triggers.enableByCls("qx_find");
						go('find_task_road qixia ' + qixiaCode[fqxname]);
						setTimeout(function() {
							if (autoqixia_mode == 0) {
								bF = true
							} else if (autoqixia_mode == 1) {
								givegold(fqxname, 1)
							} else if (autoqixia_mode == 2) {
								givegold(fqxname, 15)
							}
						}, 300)
					} else qx_bstime = setTimeout(bG, 2000)
				};
				qx_bstime = setTimeout(bG, 8000)
			} else {
				console.log("本秘境尚未通关或不支持扫荡，自动奇侠归位");
				mj_doing = false;
				triggers.enableByCls("qx_find");
				go('find_task_road qixia ' + qixiaCode[fqxname]);
				setTimeout(function() {
					if (autoqixia_mode == 0) {
						bF = true
					} else if (autoqixia_mode == 1) {
						givegold(fqxname, 1)
					} else if (autoqixia_mode == 2) {
						givegold(fqxname, 15)
					}
				}, 300)
			}
		}
	}, "mijing", "");
	triggers.newTrigger(/这是这座滨海古城的中心/, function(m) {
		mjname = '【滨海古城】';
		console.log(mjname)
	}, "mijing", "");
	triggers.newTrigger(/你在这儿一番搜寻，竟找到一条秘径，来到了一个绝密的所在！/, function(m) {
		console.log("这是你今天触发的第 " + mj_num + " 次秘境");
		setTimeout(function() {
			clickbtn3("仔细搜索");
			setTimeout(function() {
				getpostion();
				if (E.indexOf("巨石之上") != -1 || E.indexOf("古树中") != -1 || E.indexOf("湖底密室") != -1 || E.indexOf("山洞中") != -1 || E.indexOf("悬崖下") != -1) {
					console.log("很遗憾，本次秘境搜索没触发秘境副本任务");
					mj_doing = false;
					triggers.enableByCls("qx_find");
					go('find_task_road qixia ' + qixiaCode[fqxname]);
					setTimeout(function() {
						if (autoqixia_mode == 0) {
							bF = true
						} else if (autoqixia_mode == 1) {
							givegold(fqxname, 1)
						} else if (autoqixia_mode == 2) {
							givegold(fqxname, 15)
						}
					}, 300)
				}
			}, 300)
		}, 300)
	}, "mijing", "");
	triggers.newTrigger(/扫荡完成的奖励为：(.*)朱果x(.*)。进入后面的房间将失去扫荡的机会/, function(m) {
		console.log(m[2] + "--" + mjinfo[mjname][0]);
		if (m[2] < mjinfo[mjname][0]) {
			go("cancel_prompt");
			go(mjinfo[mjname][1])
		} else {
			clickbtn("确定");
			setTimeout(function() {
				mj_doing = false;
				triggers.enableByCls("qx_find");
				go('find_task_road qixia ' + qixiaCode[fqxname]);
				setTimeout(function() {
					if (autoqixia_mode == 0) {
						bF = true
					} else if (autoqixia_mode == 1) {
						givegold(fqxname, 1)
					} else if (autoqixia_mode == 2) {
						givegold(fqxname, 15)
					}
				}, 300)
			}, 300)
		}
	}, "mijing", "");
	triggers.disableByCls("mijing");
	triggers.newTrigger(/今日挖宝已超10次，明日再来。/, function(m) {
		go("home");
		for (j = 0; j < 2; j++) {
			go('items sell cangbao tu_N_10');
			triggers.disableByCls("cbt")
		}
	}, "cbt", "");
	triggers.newTrigger(/今日挖宝次数：10/, function(m) {
		go("home");
		for (j = 0; j < 2; j++) {
			go('items sell cangbao tu_N_10');
			triggers.disableByCls("cbt")
		}
	}, "cbt", "");
	triggers.newTrigger(/似乎以下地方藏有宝物(.*)/, function(m) {
		m = m[1].split(/\d+/);
		var b = false;
		for (i = 0, l = m.length; i < l; i++) {
			var a = m[i];
			words1(a);
			if (/一片翠绿的草地/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/大诗人白居易之墓，墓碑上刻着“唐少傅白公墓”。四周环绕着冬青。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/你现在正站在雪亭镇南边的一家小客栈里，这家客栈虽小，却是方圆五百里/.test(a)) {
				jh('xt');
				go('dig go');
				b = true;
				break
			}
			if (/这里是一间规模不小的药铺，奇怪的是，在这里你闻不到一丝药铺应有的药味，有的只是一股淡淡的檀香/.test(a)) {
				jh('xt');
				go('e;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/这里是雪亭镇镇前广场的空地，地上整齐地铺著大石板。广场中央有一个木头搭的架子，经过多年的风吹日晒雨淋，看来非常破旧。四周建筑林立。往西你可以看到一间客栈，看来生意似乎很好。/.test(a)) {
				jh('xt');
				go('e;dig go');
				b = true;
				break
			}
			if (/这是一间十分老旧的城隍庙，在你面前的神桌上供奉著一尊红脸的城隍，庙虽老旧，但是神案四周已被香火薰成乌黑的颜色，显示这里必定相当受到信徒的敬仰。/.test(a)) {
				jh('xt');
				go('e;e;dig go');
				b = true;
				break
			}
			if (/这是一条普通的黄土小径，弯弯曲曲往东北一路盘旋上山，北边有一间城隍庙，往西则是雪亭镇的街道。/.test(a)) {
				jh('xt');
				go('e;e;s;dig go');
				b = true;
				break
			}
			if (/这是一条普通的黄土小径，小径往西南通往一处山间的平地，从这里可以望见不少房屋错落在平地上，往东北则一路上山。/.test(a)) {
				jh('xt');
				go('e;e;s;ne;dig go');
				b = true;
				break
			}
			if (/这是一条说宽不宽，说窄倒也不窄的山路，路面用几块生满青苔的大石铺成，西面是一段坡地，从这里可以望见西边有几间房屋错落在林木间，东面则是山壁，山路往西南衔接一条黄土小径，往北则是通往山上的石阶。/.test(a)) {
				jh('xt');
				go('e;e;s;ne;ne;dig go');
				b = true;
				break
			}
			if (/这里是雪亭镇的街口，往北是一个热闹的广场，南边是条小路通往一座林子，东边则有一条小径沿著山腰通往山上，往西是一条比较窄的街道，参差不齐的瓦屋之间传来几声犬吠。从这里向东南走就是进出关的驿道了。/.test(a)) {
				jh('xt');
				go('e;s;dig go');
				b = true;
				break
			}
			if (/这里是雪亭镇的街道，你的北边有一家客栈，从这里就可以听到客栈里人们饮酒谈笑/.test(a)) {
				jh('xt');
				go('e;s;w;dig go');
				b = true;
				break
			}
			if (/这里是一间宽敞的书院，虽然房子看起来很老旧了，但是打扫得很整洁，墙壁上挂著一幅山水画，意境颇为不俗，书院的大门开在北边，西边有一扇木门通往边厢。/.test(a)) {
				jh('xt');
				go('e;s;w;s;dig go');
				b = true;
				break
			}
			if (/这是一条宽敞坚实的青石板铺成的大道，路上车马的痕迹已经在路面上留下一条条明显的凹痕，往东是一条较小的街道通往雪亭镇。/.test(a)) {
				jh('xt');
				go('e;s;w;w;dig go');
				b = true;
				break
			}
			if (/你现在正走在雪亭镇的街道上，东边不远处有一间高大的院子，门口立著一根粗大的旗杆/.test(a)) {
				jh('xt');
				go('e;n;dig go');
				b = true;
				break
			}
			if (/这是一间素来以公平信用著称的钱庄，钱庄的老板还是个曾经中过举人的读书人/.test(a)) {
				jh('xt');
				go('e;n;w;dig go');
				b = true;
				break
			}
			if (/你现在正站在一间大宅院的入口，两只巨大的石狮镇守在大门的两侧，一阵阵吆喝与刀剑碰撞的声音从院子中传来，通过大门往东可以望见许多身穿灰衣的汉子正在操练。/.test(a)) {
				jh('xt');
				go('e;n;e;dig go');
				b = true;
				break
			}
			if (/你现在正站在一个宽敞的教练场中，地上铺著黄色的细砂，许多人正在这里努力地操练著，北边是一间高大的兵器厅，往东则是武馆师父们休息的大厅。/.test(a)) {
				jh('xt');
				go('e;n;e;e;dig go');
				b = true;
				break
			}
			if (/这是一间堆满各式兵器、刀械的储藏室，各式武器都依照种类、长短、依次放在一起，并且擦拭得一尘不染，储藏室的出口在你的南边，面对出口的左手边有一个架子/.test(a)) {
				jh('xt');
				go('e;n;e;e;n;dig go');
				b = true;
				break
			}
			if (/这里是淳风武馆的正厅，五张太师椅一字排开面对著门口，这是武馆中四位大师傅与馆主柳淳风的座位/.test(a)) {
				jh('xt');
				go('e;n;e;e;e;dig go');
				b = true;
				break
			}
			if (/这里是淳风武馆中的天井，往西走可以回到正厅/.test(a)) {
				jh('xt');
				go('e;n;e;e;e;e;dig go');
				b = true;
				break
			}
			if (/这里是一间整理得相当乾净的书房，红木桌椅上铺著蓝绸巾，显得十分考究，西面的立著一个书架，上面放著一排排的古书，往南走出房门可以看到天井。/.test(a)) {
				jh('xt');
				go('e;n;e;e;e;e;n;dig go');
				b = true;
				break
			}
			if (/这里是一间布置得相当雅致的厢房，从窗子可以看到北边的天井跟南边的庭园中各式各样的奇花异草，以及他们所带来的淡淡香气，厢房的东面墙上还挂著一幅仕女图/.test(a)) {
				jh('xt');
				go('e;n;e;e;e;e;s;dig go');
				b = true;
				break
			}
			if (/这里是淳风武馆的内院，平常武馆弟子没有馆主的允许是不敢到这里来的/.test(a)) {
				jh('xt');
				go('e;n;e;e;e;e;e;dig go');
				b = true;
				break
			}
			if (/你现在正走在雪亭镇的大街，往南直走不远处是镇上的广场，在你的东边是一间大宅院/.test(a)) {
				jh('xt');
				go('e;n;n;dig go');
				b = true;
				break
			}
			if (/这里是一间打铁铺子，从火炉中冒出的火光将墙壁映得通红，屋子的角/.test(a)) {
				jh('xt');
				go('e;n;n;w;dig go');
				b = true;
				break
			}
			if (/这里是雪亭镇的大街，东边有一栋陈旧的建□，看起来像是什麽店铺，但是并没有任何招牌，只有一扇门上面写著一个大大的/.test(a)) {
				jh('xt');
				go('e;n;n;n;dig go');
				b = true;
				break
			}
			if (/这是一家中等规模的当铺，老旧的柜台上放著一张木牌/.test(a)) {
				jh('xt');
				go('e;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/这里是丰登当铺的储藏室，有时候当铺里的大朝奉会把铺里存不下的死当货物拿出来拍卖/.test(a)) {
				jh('xt');
				go('e;n;n;n;e;e;dig go');
				b = true;
				break
			}
			if (/这里是雪亭镇的大街，一条小巷子通往东边，西边则是一间驿站/.test(a)) {
				jh('xt');
				go('e;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/这里是负责雪亭镇官府文书跟军令往来的雪亭驿/.test(a)) {
				jh('xt');
				go('e;n;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/一间小木屋，在这北方的风中吱吱作响。/.test(a)) {
				jh('xt');
				go('e;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/这里是一处山坳，往南就是雪亭镇，一条蜿蜒的小径往东通往另一个邻近的小山村/.test(a)) {
				jh('xt');
				go('e;n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/这里便是有名的龙门石窟，石窟造像，密布于两岸的崖壁上。远远可以望见琵琶峰上的白冢。/.test(a)) {
				jh('ly');
				go('dig go');
				b = true;
				break
			}
			if (/城南官道，道路两旁是一片树林，远处是一片片的农田了。田地里传来农人的呼号，几头黄牛悠闲的趴卧着。/.test(a)) {
				jh('ly');
				go('n;dig go');
				b = true;
				break
			}
			if (/由此洛阳城南门出去，就可以通往南市的龙门石窟。城门处往来客商络绎不绝，几名守城官兵正在检查过往行人。/.test(a)) {
				jh('ly');
				go('n;n;dig go');
				b = true;
				break
			}
			if (/洛阳最繁华的街市，这里聚集着各国客商。/.test(a)) {
				jh('ly');
				go('n;n;e;dig go');
				b = true;
				break
			}
			if (/这里便是洛水渡口静静的洛水由此向东，汇入滚滚黄河。码头上正泊着一艘船坞，常常的缆绳垂在水中。/.test(a)) {
				jh('ly');
				go('n;n;e;s;dig go');
				b = true;
				break
			}
			if (/一艘普通的船坞，船头坐着一位蓑衣男子。/.test(a)) {
				jh('ly');
				go('n;n;e;s;luoyang317_op1;dig go');
				b = true;
				break
			}
			if (/这儿是洛阳的南面了，街上有好几个乞丐在行乞。/.test(a)) {
				jh('ly');
				go('n;n;n;dig go');
				b = true;
				break
			}
			if (/这儿是一座供奉洛神的小庙。小庙的地上放着几个蒲团。/.test(a)) {
				jh('ly');
				go('n;n;n;w;dig go');
				b = true;
				break
			}
			if (/这儿就是洛阳金刀世家了。金刀门虽然武功不算高，但也是有两下子的。/.test(a)) {
				jh('ly');
				go('n;n;n;e;dig go');
				b = true;
				break
			}
			if (/金刀世家的练武场。金刀门的门主王天霸在这儿教众弟子习武。/.test(a)) {
				jh('ly');
				go('n;n;n;e;s;dig go');
				b = true;
				break
			}
			if (/这儿是洛神庙下面的地道，上面人走动的声音都隐约可听见。/.test(a)) {
				jh('ly');
				go('n;n;n;w;putuan;dig go');
				b = true;
				break
			}
			if (/湿润的青石路显然是刚刚下过雨，因为来往行人过多，路面多少有些坑坑凹凹，一不留神很容易被绊到。/.test(a)) {
				jh('ly');
				go('n;n;n;n;dig go');
				b = true;
				break
			}
			if (/这儿就是菜市口。各种小贩商人十分嘈杂，而一些地痞流氓也混迹人群伺机作案。/.test(a)) {
				jh('ly');
				go('n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/一个猪肉摊，在这儿摆摊卖肉已经十多年了。/.test(a)) {
				jh('ly');
				go('n;n;n;n;e;s;dig go');
				b = true;
				break
			}
			if (/你刚踏进巷子，便听得琴韵丁冬，小巷的宁静和外面喧嚣宛如两个世界/.test(a)) {
				jh('ly');
				go('n;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/小院四周满是盛开的桃花，穿过一条长廊，一座别致的绣楼就在眼前了。/.test(a)) {
				jh('ly');
				go('n;n;n;n;w;s;dig go');
				b = true;
				break
			}
			if (/绣楼内挂着湖绿色帐幔，一名女子斜靠在窗前的美人榻上。/.test(a)) {
				jh('ly');
				go('n;n;n;n;w;s;w;dig go');
				b = true;
				break
			}
			if (/这里就是背阴巷了，站在巷口可以万剑阴暗潮湿的窄巷，这里聚集着洛阳的地痞流氓，寻常人不敢近前。/.test(a)) {
				jh('ly');
				go('n;n;n;n;w;event_1_98995501;dig go');
				b = true;
				break
			}
			if (/黑暗的街道，几个地痞无赖正慵懒的躺在一旁。/.test(a)) {
				jh('ly');
				go('n;n;n;n;w;event_1_98995501;n;dig go;n;dig go');
				b = true;
				break
			}
			if (/这是一家酒肆，洛阳地痞头目甄大海正坐在里面小酌。/.test(a)) {
				jh('ly');
				go('n;n;n;n;w;event_1_98995501;n;n;e;dig go');
				b = true;
				break
			}
			if (/院落里杂草丛生，东面的葡萄架早已枯萎。/.test(a)) {
				jh('ly');
				go('n;n;n;n;w;event_1_98995501;n;w;dig go');
				b = true;
				break
			}
			if (/一座跨街大青砖砌的拱洞高台谯楼，矗立在城中心。鼓楼为二层木瓦建筑，设有大鼓大钟，晨钟暮鼓，用以报时。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/相传春秋时代，楚王在此仰望周王城，问鼎重几何。周室暗弱，居然隐忍不发。这便是街名的由来。银钩赌坊也在这条街上。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/水缸下面的暗道，里面放着几口大箱，不知道装着什么/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;w;n;w;get_silver;dig go');
				b = true;
				break
			}
			if (/这里便是洛阳有名的悦来客栈，只见客栈大门处人来人往，看来生意很红火。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;n;dig go');
				b = true;
				break
			}
			if (/客栈大院，院内紫藤花架下放着几张桌椅，东面是一座马厩。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;n;n;dig go');
				b = true;
				break
			}
			if (/客栈马倌正在往马槽里添草料，旁边草料堆看起来有些奇怪。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;n;n;w;dig go');
				b = true;
				break
			}
			if (/房间布置的极为雅致，没有太多的装饰，唯有屋角放着一个牡丹屏风。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;w;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/赌坊二楼走廊，两旁房间里不时床来莺声燕语，看来这里不止可以赌。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;w;n;n;n;dig go');
				b = true;
				break
			}
			if (/通往赌坊二楼的楼梯，上面铺着大红色地毯。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;w;n;n;dig go');
				b = true;
				break
			}
			if (/大厅满是呼庐喝雉声、骰子落碗声、银钱敲击声，男人和女人的笑声，/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;w;n;dig go');
				b = true;
				break
			}
			if (/走出赌坊后门，桂花清香扑面而来，桂花树下的水缸似乎被人移动过。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;w;n;w;dig go');
				b = true;
				break
			}
			if (/赌坊门口人马喧哗，门上一支银钩在风中摇晃，不知道多少人咬上了这没有鱼饵的钩/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;w;dig go');
				b = true;
				break
			}
			if (/自古以来，洛阳墨客骚人云集，因此有“诗都”之称，牡丹香气四溢，又有“花都”的美誉/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;s;dig go');
				b = true;
				break
			}
			if (/这儿是牡丹园内的一座小亭子，布置得十分雅致。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;w;s;luoyang111_op1;dig go');
				b = true;
				break
			}
			if (/也许由于连年的战乱，使得本来很热闹的街市冷冷清清，道路两旁的店铺早已破旧不堪，一眼望去便知道有很久没有人居住了。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/这间当铺处于闹市，位置极好。当铺老板正半眯着双眼在高高的柜台上打盹。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/你无意中走进一条青石街，这里不同于北大街的繁华热闹，两边是一些小店铺，北面有一家酒肆，里面出入的人看起来衣衫褴褛。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/这是一间小酒肆，里面黑暗潮湿，满是油垢的桌旁，几名无赖正百无聊赖的就着一盘花生米喝酒。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;e;n;dig go');
				b = true;
				break
			}
			if (/这是洛阳北边街道，人群熙熙攘攘甚是热闹。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/洛阳城的钱庄，来往的商客往往都会将银两存于此处。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/就是洛阳北门，门口站着的是守城官兵。站在城楼望出去，外面是一片茅草路。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/城北通往邙山的小路，路旁草丛中时有小兽出没。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/一片绿云般的竹林隔绝了喧嚣尘世，步入这里，心不由平静了下来。青石小路在竹林中蜿蜒穿行，竹林深处隐约可见一座小院。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/绿竹环绕的小院，院内几间房舍都用竹子打造，与周围竹林颇为和谐。这小院的主人显然有些独特之处。院内一名老翁正在劈柴。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;n;n;e;n;dig go');
				b = true;
				break
			}
			if (/一间雅致的书斋，透过窗户可以见到青翠修竹，四周如此清幽，竹叶上露珠滴落的声音都能听见。靠墙的书架看起来很别致。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;n;n;e;n;n;dig go');
				b = true;
				break
			}
			if (/ 就是洛阳城墙上的城楼，驻守的官兵通常会在这儿歇个脚，或是聊下天。如果心细之人，能看到角落里似乎有一个隐秘的把手。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/这个城楼上的密室显然是守城军士秘密建造的，却不知有何用途。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;n;w;luoyang14_op1;dig go');
				b = true;
				break
			}
			if (/这就是洛阳城的城墙。洛阳是重镇，因此城墙上驻守的官兵格外多。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/由于连年的战乱，整条金谷街的不少铺子已经荒废掉了。再往东走就是洛阳地痞流氓聚集的背阴巷。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/这儿是洛阳首富的庄院，据说家财万贯，富可敌国。庄院的的中间有一棵参天大树。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;n;dig go');
				b = true;
				break
			}
			if (/这儿是富人家的储藏室，因此有不少奇珍异宝。仔细一看，竟然还有一个红光满面的老人家半躺在角落里。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;n;op1;dig go');
				b = true;
				break
			}
			if (/一座朴实的石拱桥，清澈河水从桥下流过。对面可见一座水榭。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;dig go');
				b = true;
				break
			}
			if (/荷池旁的水榭，几名游客正在里面小憩。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;dig go');
				b = true;
				break
			}
			if (/回廊两旁便是碧绿荷塘，阵阵荷香拂过。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;dig go');
				b = true;
				break
			}
			if (/荷塘中的观景台，两名女子在这里游玩。远远站着几名护卫，闲杂人等一律被挡在外面。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;w;dig go');
				b = true;
				break
			}
			if (/隐藏在一片苍翠树林中的小路，小路尽头有座草屋。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;e;dig go');
				b = true;
				break
			}
			if (/简陋的茅草小屋，屋内陈设极其简单。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;e;n;dig go');
				b = true;
				break
			}
			if (/石阶两侧山泉叮咚，林木森森。漫步而上，可见山腰有亭。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;n;dig go');
				b = true;
				break
			}
			if (/这就是听伊亭，据说白居易曾与好友在此品茗、论诗。一旁的松树上似乎有什么东西。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/丛林小径，因为走得人少，小径已被杂草覆盖。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/听着松涛之音，犹如直面大海/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;e;e;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/这里是华山村村口，几个草垛随意的堆放在路边，三两个泼皮慵懒躺在那里。/.test(a)) {
				jh('hsc');
				go('dig go');
				b = true;
				break
			}
			if (/这是一条穿过村口松树林的小路。/.test(a)) {
				jh('hsc');
				go('n;dig go');
				b = true;
				break
			}
			if (/这就是有名的神女冢，墓碑前散落着游人墨客烧的纸钱，前面不远处有一间破败的土地庙。/.test(a)) {
				jh('hsc');
				go('n;e;dig go');
				b = true;
				break
			}
			if (/这是一片溪边的杏树林，一群孩童在此玩耍。/.test(a)) {
				jh('hsc');
				go('w;dig go');
				b = true;
				break
			}
			if (/村口一个简易茶棚，放着几张木质桌椅，干净齐整，过往路人会在这里喝杯热茶歇歇脚，村里的王老二常常会混在这里小偷小摸。/.test(a)) {
				jh('hsc');
				go('w;n;dig go');
				b = true;
				break
			}
			if (/这是一间破败的土地庙门口，门旁的对联已经模糊不清，隐约只见上联“德之不修/.test(a)) {
				jh('hsc');
				go('w;event_1_59520311;dig go');
				b = true;
				break
			}
			if (/土地庙庙堂，正中供奉着土地，香案上堆积这厚厚的灰尘。/.test(a)) {
				jh('hsc');
				go('w;event_1_59520311;n;dig go');
				b = true;
				break
			}
			if (/隐藏在佛像后的地道入口，两只黑狗正虎视眈眈的立在那里。/.test(a)) {
				jh('hsc');
				go('w;event_1_59520311;n;n;dig go');
				b = true;
				break
			}
			if (/通往西侧的通道，前面被铁栅栏挡住了。/.test(a)) {
				jh('hsc');
				b = true;
				go('w;event_1_59520311;n;n;w;dig go');
				break
			}
			if (/通往地下通道的木楼梯/.test(a)) {
				jh('hsc');
				go('w;event_1_59520311;n;n;n;dig go');
				b = true;
				break
			}
			if (/通道两侧点着油灯，昏暗的灯光让人看不清楚周围的环境。/.test(a)) {
				jh('hsc');
				go('w;event_1_59520311;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/通往东侧的通道，前面传来有水声和痛苦的呻吟。/.test(a)) {
				jh('hsc');
				go('w;event_1_59520311;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/这是一件宽敞的大厅，正中间摆着一张太师椅，两侧放着一排椅子。/.test(a)) {
				jh('hsc');
				go('w;event_1_59520311;n;n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/这是一件布置极为简单的卧房，显然只是偶尔有人在此小憩。床上躺着一名半裸女子，满脸惊恐。/.test(a)) {
				jh('hsc');
				go('w;event_1_59520311;n;n;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/这是一条古老的青石街，几个泼皮在街上游荡。/.test(a)) {
				jh('hsc');
				go('s;dig go');
				b = true;
				break
			}
			if (/这是一条碎石小路，前面有一个打铁铺。/.test(a)) {
				jh('hsc');
				go('s;e;dig go');
				b = true;
				break
			}
			if (/这是一间打铁铺，炉火烧的正旺，一名汉子赤膊挥舞着巨锤，锤落之处但见火花四溅。/.test(a)) {
				jh('hsc');
				go('s;e;n;dig go');
				b = true;
				break
			}
			if (/一棵千年银杏树屹立在广场中央，树下有一口古井，据说这口古井的水清澈甘甜，村里的人每天都会来这里挑水。/.test(a)) {
				jh('hsc');
				go('s;s;dig go');
				b = true;
				break
			}
			if (/村里的杂货铺，店老板正在清点货品。/.test(a)) {
				jh('hsc');
				go('s;s;e;dig go');
				b = true;
				break
			}
			if (/杂货铺后院，堆放着一些杂物，东边角落里放着一个马车车厢，一个跛脚汉子坐在一旁假寐。/.test(a)) {
				jh('hsc');
				go('s;s;e;s;dig go');
				b = true;
				break
			}
			if (/这是一个普通的马车车厢，粗布帘挡住了马车车窗和车门，地板上面躺着一个人。/.test(a)) {
				jh('hsc');
				go('s;s;e;s;huashancun24_op2;dig go');
				b = true;
				break
			}
			if (/这是村内宗祠大门，门口一棵古槐，树干低垂。/.test(a)) {
				jh('hsc');
				go('s;s;w;dig go');
				b = true;
				break
			}
			if (/宗祠的大厅，这里供奉着宗室先祖。/.test(a)) {
				jh('hsc');
				go('s;s;w;n;dig go');
				b = true;
				break
			}
			if (/青石板铺就的小桥，几棵野草从石缝中钻出，清澈的溪水自桥下湍湍流过。/.test(a)) {
				jh('hsc');
				go('s;s;s;dig go');
				b = true;
				break
			}
			if (/田间泥泞的小路，一个稻草人孤单的立在一旁，似乎在指着某个地方。一个男子神色慌张的从一旁田地里钻出。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;dig go');
				b = true;
				break
			}
			if (/这是一间竹篱围城的小院，院内种着几株桃花，屋后竹林环绕，颇为雅致。旁边的西厢房上挂着一把铜制大锁，看起来有些奇怪。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;w;dig go');
				b = true;
				break
			}
			if (/这是小院的厅堂，迎面墙壁上挂着一幅山水画，看来小院的主人不是普通农人。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;w;n;dig go');
				b = true;
				break
			}
			if (/这是一间普通的厢房，四周窗户被布帘遮得严严实实。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;w;get_silver;dig go');
				b = true;
				break
			}
			if (/一条杂草丛生的乡间小路，时有毒蛇出没。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;dig go');
				b = true;
				break
			}
			if (/一间看起来有些破败的小茅屋，屋内角落里堆着一堆稻草，只见稻草堆悉悉索索响了一阵，竟然从里面钻出一个人来。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;e;dig go');
				b = true;
				break
			}
			if (/清风寨山脚，站在此处可以摇摇望见四面悬崖的清风寨。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;dig go');
				b = true;
				break
			}
			if (/通往清风寨唯一的山路，一侧便是万丈深渊。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;dig go');
				b = true;
				break
			}
			if (/两扇包铁木门将清风寨与外界隔绝开来，门上写着“清风寨”三字。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;n;dig go');
				b = true;
				break
			}
			if (/这里就是桃花泉，一片桃林环绕着清澈泉水，据说泉水一年四季不会枯竭。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;n;e;dig go');
				b = true;
				break
			}
			if (/清风寨前院，地面由坚硬岩石铺就。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;n;n;dig go');
				b = true;
				break
			}
			if (/清风寨练武场，四周放置着兵器架。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/清风寨议事厅，正中放置着一张虎皮椅。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/这里是清风寨后院，远角有一颗大树，树旁有一扇小门。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/这里就是清风寨兵器库了，里面放着各色兵器。角落里一个上锁的黑铁箱不知道装着什么。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;n;n;n;n;w;dig go');
				b = true;
				break
			}
			if (/这里的空气中充满清甜的味道，地上堆积着已经晒干的柿子。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;n;n;n;n;e;dig go');
				b = true;
				break
			}
			if (/这是清风寨寨主的卧房，床头挂着一把大刀。/.test(a)) {
				jh('hsc');
				go('s;s;s;s;s;nw;n;n;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/这是通往二楼大厅的楼梯，楼梯扶手上的雕花精美绝伦，看来这酒楼老板并不是一般的生意人/.test(a)) {
				jh('yz');
				go('n;n;n;n;n;n;e;n;dig go');
				b = true;
				break
			}
			if (/二楼是雅座，文人学士经常在这里吟诗作画，富商土豪也在这里边吃喝边作交易。/.test(a)) {
				jh('yz');
				go('n;n;n;n;n;n;e;n;n;dig go');
				b = true;
				break
			}
			if (/进门绕过一道淡绿绸屏风，迎面墙上挂着一副『芙蓉出水』图。厅内陈列奢华，雕花楠/.test(a)) {
				jh('yz');
				go('n;n;n;n;n;n;e;n;n;w;dig go');
				b = true;
				break
			}
			if (/进门绕过一道淡黄绸屏风，迎面墙上挂着一副『芍药』图，鲜嫩欲滴/.test(a)) {
				jh('yz');
				go('n;n;n;n;n;n;e;n;n;e;dig go');
				b = true;
				break
			}
			if (/进门绕过一道淡红绸屏风，迎面墙上挂着一副『牡丹争艳』图，牡丹素以富贵著称。图侧对联：“幽径天姿呈独秀，古园国色冠群芳”。/.test(a)) {
				jh('yz');
				go('n;n;n;n;n;n;e;n;n;n;dig go');
				b = true;
				break
			}
			if (/你站在观景台上眺望，扬州城的美景尽收眼底。东面是就是小秦淮河岸，河岸杨柳轻拂水面，几簇粉色桃花点缀其间。/.test(a)) {
				jh('yz');
				go('n;n;n;n;n;n;e;n;n;n;n;dig go');
				b = true;
				break
			}
			if (/这儿到了饮风客栈的二楼。听说二楼只开放给有头有脸的人物，一般人恕不接待。/.test(a)) {
				jh('xt');
				go('inn_op1;dig go');
				b = true;
				break
			}
			if (/这是华山的思过崖，是华山派历代弟子犯规后囚禁受罚之所。此处无草无木，无虫无鸟，受罚的弟子在面壁思过之时，不致为外物所扰，心有旁骛。/.test(a)) {
				jh('hs');
				go('n;n;n;n;n;n;n;n;w;w;dig go');
				b = true;
				break
			}
			if (/就是洛阳城墙上的城楼，驻守的官兵通常会在这儿歇个脚，或是聊下天。如果心细之人，能看到角落里似乎有一个隐秘的把手。/.test(a)) {
				jh('ly');
				go('n;n;n;n;n;n;n;n;w;dig go');
				b = true;
				break
			}
		}
		if (b) go("cangbaotu_op1")
	}, "cbt", "");
	triggers.disableByCls("cbt");
	o.game = this;
	o.attach = function() {
		var c = o.writeToScreen;
		o.writeToScreen = function(a, e, f, g) {
			c(a, e, f, g);
			a = a.replace(/<[^>]*>/g, "");
			triggers.trigger(a)
		};
		webSocketMsg.prototype.old = gSocketMsg.dispatchMessage;
		gSocketMsg.dispatchMessage = function(b) {
			this.old(b);
			bw.dispatchMessage(b);
			if (dh == 1) {
				bE.dispatchMessage(b)
			}
			if (bP == 1) {
				bD.dispatchMessage(b)
			}
			if (F == 1) {
				G.dispatchMessage(b)
			}
			if (cE == 1) {
				cG.dispatchMessage(b)
			}
			if (bu == 1 || cU == 1 || cV == 1 || cW == 1) {
				cZ.dispatchMessage(b)
			}
			if (cM == 1) {
				cT.dispatchMessage(b)
			}
			if (cH == 1) {
				cJ.dispatchMessage(b)
			}
		}
	};
	attach();
	var bH = "",
		mtStatus = 0,
		mtnpc = "",
		shuabaoji_flag = 0,
		sbjwait = 1;

	function askMiti_switch() {
		if (shuabaoji_flag == 0) {
			shuabaoji_flag = 1;
			btnList['刷暴换接'].innerText = '关闭换接';
			btnList['刷暴换接'].style.borderStyle = 'inset'
		} else if (shuabaoji_flag == 1) {
			shuabaoji_flag = 0;
			btnList['刷暴换接'].innerText = '刷暴换接';
			btnList['刷暴换接'].style.borderStyle = 'outset'
		}
	}
	function askMiti_wait() {
		if (database.sbjwait == 0) {
			database.sbjwait = 1;
			btnList['刷暴跳过'].innerText = '刷暴跳过'
		} else if (database.sbjwait == 1) {
			database.sbjwait = 0;
			btnList['刷暴跳过'].innerText = '刷暴等待'
		}
	}
	function mtwait_re() {
		if (!database.hasOwnProperty('sbjwait')) {
			database.sbjwait = 1;
			return
		}
		if (database.sbjwait == 1) {
			btnList['刷暴跳过'].innerText = '刷暴跳过'
		} else if (database.sbjwait == 0) {
			btnList['刷暴跳过'].innerText = '刷暴等待'
		}
	}
	function askMiti() {
		if (bH == "") {
			var a = prompt("请输入想搜索的地图，如雪亭镇：", "");
			if (!npcLists.hasOwnProperty(a)) {
				alert('你输入的地图不存在');
				shuabaoji_flag = 0
			} else {
				if (confirm('是否开启刷暴换接？（如果不开启此功能，做完谜题后不会自动找下个npc接任务）')) {
					shuabaoji_flag = 1;
					btnList['刷暴换接'].innerText = '关闭换接';
					btnList['刷暴换接'].style.borderStyle = 'inset'
				} else {
					console.log('放弃开启刷暴换接，仅能手动接下个谜题');
					console.log('任务集里可以开启刷暴换接哦')
				}
				console.log('刷暴击默认等待npc复活，任务集刷暴跳过可以跳过死亡npc谜题');
				limitQixue = "800";
				mySkillLists = "乾坤大挪移;唐门毒功;摧心掌;毒砂掌;唐门毒掌";
				cz_skills = mySkillLists.split(";");
				runhit_open();
				goAskMiti(a, 0)
			}
		} else {
			goAskMiti(bH, mtStatus + 1)
		}
	}
	function goAskMiti(a, b) {
		bH = a;
		mtStatus = b;
		mtnpc = npcLists[a][b];
		if (b < npcLists[a].length) {
			go_sm(a, mtnpc);
			nextgo = function() {
				setdonpc(mtnpc, "对话");
				triggers.enableByCls("askmtnpc")
			};
			setTimeout(function() {
				go(';;;$')
			}, 300)
		} else {
			console.log(bH + "--搜索完毕");
			alert(bH + "搜索完毕");
			bH = ""
		}
	}
	triggers.newTrigger(/^完成谜题\((.*)\/15\)：(.*)的谜题，获得：经验x(.*)潜能x(.*)银两x(.*)/, function(m) {
		console.log(m[0]);
		if (m[3] > 100000) {
			console.log("找到暴击：" + m[2] + "的谜题");
			database.baoji = m[0] + '   ' + database.baoji
		}
		if (shuabaoji_flag == 1) {
			setTimeout(askMiti, 300)
		}
	}, "mt_jiangli", "");
	triggers.newTrigger(/今日已达到谜题数量限制。/, function(m) {
		go_home();
		console.log(m[0]);
		triggers.disableByCls("askmtnpc");
		mt_flag = 0;
		btnList['开谜题'].style.borderStyle = 'outset';
		btnList['开谜题'].innerText = '开谜题';
		triggers.disableByCls("mt");
		triggers.disableByCls("mtget");
		triggers.disableByCls("mtget2")
	}, "mt_jiangli", "");
	triggers.newTrigger(/^所接谜题过多。/, function(m) {
		triggers.disableByCls("askmtnpc");
		if (mtnpc != "") {
			go('auto_tasks cancel');
			nextgo = function() {
				setdonpc(mtnpc, "对话");
				triggers.enableByCls("askmtnpc")
			};
			setTimeout(function() {
				go(';;;$')
			}, 300)
		}
	}, "askmtnpc", "");
	triggers.newTrigger(/^(.*)(盯着你看了一会儿|说道：嗯....江湖上好玩吗？|疑惑地看着你，道：你想干什么|道：哼，来吧！|睁大眼睛望着你|摇摇头，说道：你在这做什么？|挺有兴致地跟你聊了起来)/, function(m) {
		triggers.disableByCls("askmtnpc");
		if (m[1] == mtnpc) {
			console.log(mtnpc + "--没有谜题");
			goAskMiti(bH, mtStatus + 1)
		}
	}, "askmtnpc", "");
	triggers.newTrigger(/^(.*)：(.*)/, function(m) {
		if (m[0].split('：').length == 2 && m[0].indexOf('这儿有') == -1 && m[0].indexOf('欢迎来') == -1 && m[1].length < 8) {
			var a = m[1].replace('说', '').replace('道', '').replace('摇', '').replace('点', '').replace('讲', '').replace('叹', '').replace('冷', '').replace('头', '').replace('，', '').replace(' ', '');
			if (a == mtnpc && m[0].indexOf('真是多谢你了') == -1) {
				console.log(m[0]);
				if (m[0].indexOf('点头道：嗯，相遇即是缘') > -1) {
					go('ask?' + mtnpc)
				} else {
					var b = $("span.out2:contains(" + m[1] + ")").html();
					if (b.indexOf('</a>') == -1) {
						triggers.disableByCls("askmtnpc");
						console.log(mtnpc + "--没有谜题");
						goAskMiti(bH, mtStatus + 1)
					}
				}
			}
		}
	}, "askmtnpc", "");
	triggers.disableByCls("askmtnpc");
	var bI = 0,
		runhiting;

	function runhit() {
		if (btnList['开出招'].innerText == '开出招') {
			mySkillLists = prompt("请输入连续单放出招技能:", mySkillLists);
			cz_skills = mySkillLists.split(";");
			runhit_open()
		} else {
			runhit_close()
		}
	}
	function runhit_open() {
		g_gmain.notify_fail(HIG + "天下武功，为快不破！" + NOR);
		g_gmain.notify_fail(HIR + "你的出招，快如闪电！" + NOR);
		bI = 1;
		clearInterval(runhiting);
		btnList['开出招'].innerText = '关出招';
		btnList['开出招'].style.borderStyle = 'inset';
		runhiting = setInterval(hit, 1000)
	}
	function runhit_close() {
		bI = 0;
		clearInterval(runhiting);
		btnList['开出招'].innerText = '开出招';
		btnList['开出招'].style.borderStyle = 'outset'
	}
	var bJ = createPop('开关集');
	popList['开关集'].innerHTML = '<div>请选择你要使用的开关</div>';
	createPopButton("开逃犯", "开关集", taoFanSwitch);
	createPopButton("开天剑", "开关集", tianjian);
	createPopButton("开镖车", "开关集", kbcfunc);
	createPopButton("开帮战", "开关集", bangzhan);
	createPopButton("开红包", "开关集", hongbao);
	createPopButton("开灯谜", "开关集", readnowjob);

	function kgjfunc() {
		bJ.style.display = ""
	}
	function canshu_set() {
		database.boss_canshu = prompt('请输入杀boss地点（广场几就填数字几）,boss杀人黄红(0黄1红),开秘图杀人模式(0表示出来才跑去杀,1表示过去蹲着杀),游侠掉线接搜', database.boss_canshu);
		if (database.boss_canshu.length == 7 && database.boss_canshu.indexOf(',') > -1) {
			bK = database.boss_canshu.split(',')[0];
			boss_kill = database.boss_canshu.split(',')[1];
			pintu_mode = database.boss_canshu.split(',')[2];
			yx_js = database.boss_canshu.split(',')[3];
			console.log('boss地点:' + bK + ';boss杀人:' + boss_kill + ';秘图模式:' + pintu_mode + ';游侠接搜:' + yx_js)
		} else {
			console.log('初始化错误，请重新设置')
		}
	}
	function canshu_re() {
		if (!database.boss_canshu) {
			database.boss_canshu = '8,0,0,1';
			console.log('未发现初始化,已重置boss参数' + database.boss_canshu)
		}
		bK = database.boss_canshu.split(',')[0];
		boss_kill = database.boss_canshu.split(',')[1];
		pintu_mode = database.boss_canshu.split(',')[2];
		yx_js = database.boss_canshu.split(',')[3]
	}
	var bK, boss_kill, pintu_mode, yx_js;

	function boss_open() {
		if (btnList['开BOSS'].innerText == '开BOSS') {
			var t = $('span.outtitle').last().text();
			if (t.indexOf('武林广场') == -1) {
				alert('请先使用特殊集-新开跨服(或者其他方式进入了跨服武林广场),再使用本功能')
			} else {
				open_boss()
			}
		} else {
			close_boss()
		}
	}
	function open_boss() {
		kfql_flag = 1;
		if (boss_kill == 0) {
			bznpc_name = '不『二』剑客'
		} else if (boss_kill == 1) {
			bznpc_name = '无『双』公主'
		}
		go_boss();
		btnList['开BOSS'].innerText = '关BOSS';
		btnList['开BOSS'].style.borderStyle = 'inset'
	}
	function close_boss() {
		triggers.disableByCls("bz_look");
		triggers.disableByCls("bz_fight");
		triggers.disableByCls("bz_huifu");
		btnList['开BOSS'].innerText = '开BOSS';
		btnList['开BOSS'].style.borderStyle = 'outset';
		nowjob = ''
	}
	function go_boss() {
		var t = $('span.outtitle').last().text();
		var w = '';
		var n = parseInt(t.slice(4));
		if (n < bK) {
			for (var i = 0; i < bK - n; i++) {
				w += 'e;'
			}
		} else if (n > bK) {
			for (var i = 0; i < n - bK; i++) {
				w += 'w;'
			}
		}
		triggers.enableByCls("bz_look");
		go(w + '.已到目的地')
	}
	var bL = createPop('兑换称号');
	popList['兑换称号'].innerHTML = '<div>请选择你要兑换的称号</div>';
	createPopButton("学富40z", "兑换称号", dhch_go);
	createPopButton("龙战50j", "兑换称号", dhch_go);
	createPopButton("义薄50b", "兑换称号", dhch_go);
	createPopButton("气冲100b", "兑换称号", dhch_go);
	createPopButton("天命20m", "兑换称号", dhch_go);
	createPopButton("桃李30s", "兑换称号", dhch_go);
	createPopButton("春风50s", "兑换称号", dhch_go);
	createPopButton("阳春100s", "兑换称号", dhch_go);
	createPopButton("皇图300b", "兑换称号", dhch_go);
	createPopButton("奖善40x", "兑换称号", dhch_go);
	createPopButton("龙骧60x", "兑换称号", dhch_go);
	createPopButton("龙翔300x", "兑换称号", dhch_go);
	createPopButton("龙吟100j", "兑换称号", dhch_go);
	createPopButton("龙幡300j", "兑换称号", dhch_go);

	function dhchfunc() {
		bL.style.display = ""
	}
	function dhch_go() {
		go('items get_store /obj/shop/zhuangyuantie;items get_store /obj/shop/shimenling;items get_store /obj/shop/mitiling;items get_store /obj/shop/jianghuling;items get_store /obj/shop/zhengxieling;items get_store /obj/shop/bangpailing;items get_store /obj/shop/baibaoling');
		var a = this.innerText.slice(2);
		var b = parseInt(a);
		var c = 0;
		var d = '';
		var h = '';
		console.log(b);
		if (a.indexOf('z') > -1) {
			console.log('本称号需要状元帖*' + b + '才能兑换');
			d = 'dh_baibaoling 4';
			h = 'jh 5;n;n;n;n;n;e;n;n;n;look_npc yangzhou_yangzhou17';
			getthingnum('状元贴')
		} else if (a.indexOf('j') > -1) {
			console.log('本称号需要江湖令*' + b + '才能兑换');
			d = 'dh_baibaoling 3';
			h = 'jh 2;n;n;n;e;s;look_npc luoyang_luoyang16';
			getthingnum('江湖令')
		} else if (a.indexOf('b') > -1) {
			console.log('本称号需要帮派令*' + b + '才能兑换');
			d = 'dh_baibaoling 1';
			h = 'jh 1;e;n;w;look_npc snow_annihir';
			getthingnum('帮派令')
		} else if (a.indexOf('s') > -1) {
			console.log('本称号需要师门令*' + b + '才能兑换');
			d = 'dh_baibaoling 0';
			h = 'jh 1;e;n;e;look_npc snow_guard';
			getthingnum('师门令')
		} else if (a.indexOf('m') > -1) {
			console.log('本称号需要谜题令*' + b + '才能兑换');
			d = 'dh_baibaoling 2';
			h = 'jh 1;e;look_npc snow_worker';
			getthingnum('谜题令')
		} else if (a.indexOf('x') > -1) {
			console.log('本称号需要正邪令*' + b + '才能兑换');
			d = 'dh_baibaoling 5';
			h = 'jh 2;n;n;n;w;look_npc luoyang_luoyang15';
			getthingnum('正邪令')
		}
		setTimeout(function() {
			console.log('现有个数:' + ca + ',目标个数:' + b);
			if (ca < b) {
				c = b - ca;
				if (confirm('检测得数量没达到要求，是否现在去将百宝令兑换' + c + '个这种令？')) {
					console.log('自动找小二百宝令兑换中..');
					var e = parseInt(c / 5);
					var f = c % 5;
					var g = 'jh 1;';
					for (var i = 0; i < e; i++) {
						g += d + ' 5;'
					}
					for (var i = 0; i < f; i++) {
						g += d + ' 1;'
					}
					g = g + 'home;.百宝令兑换完成回家';
					go(g)
				} else {
					console.log('放弃了本次称号兑换')
				}
			} else {
				if (confirm('检测得数量达到要求，是否现在去兑换称号？')) {
					console.log('自动走路找人兑换称号中..');
					go(h)
				}
			}
		}, 2000)
	}
	var bM = createPop('任务集');
	popList['任务集'].innerHTML = '<div>请选择你要做的日常任务</div>';
	createPopButton("签到", "任务集", qd);
	createPopButton("刷碎片", "任务集", ssp);
	createPopButton("打榜一", "任务集", PaiHangFunc);
	createPopButton("出海", "任务集", ch);
	createPopButton("去钓鱼", "任务集", qdy);
	createPopButton("杀孽龙", "任务集", snl);
	createPopButton("杀白陀", "任务集", sbt);
	createPopButton("杀峨眉", "任务集", sem);
	createPopButton("点破阵", "任务集", dpz);
	createPopButton("喂鳄鱼", "任务集", wey);
	createPopButton("侠客日常", "任务集", xkd);
	createPopButton("参岩画", "任务集", cyh);
	createPopButton("采矿", "任务集", ck);
	createPopButton("挖玄铁", "任务集", wxt);
	createPopButton("冰月谷", "任务集", byg);
	createPopButton("采莲", "任务集", cl);
	createPopButton("天山挂机", "任务集", TsdzFunc);
	createPopButton("苗疆炼药", "任务集", MiaoJiangFunc);
	createPopButton("试剑", "任务集", shijian);
	createPopButton("开答题", "任务集", datiswitch);
	createPopButton("去挖宝", "任务集", buycangbaotu);
	createPopButton("去射雕", "任务集", qsd);
	createPopButton("撩奇侠", "任务集", lqx);
	createPopButton("点vip", "任务集", clickvip);
	createPopButton("开领奖", "任务集", kljfunc);
	createPopButton("vip谜题", "任务集", vip_mt);
	createPopButton("看战场", "任务集", bz_start);
	createPopButton("去战场", "任务集", bz_go);
	createPopButton("清缓存", "任务集", clearbug);
	createPopButton("失效重置", "任务集", shixiaorebuilt);
	createPopButton("清谜题", "任务集", clearmt);
	createPopButton("清背包", "任务集", clearBag);
	createPopButton("暴击列表", "任务集", baoji_list);
	createPopButton("清空暴击", "任务集", baoji_clear);
	createPopButton("刷暴换接", "任务集", askMiti_switch);
	createPopButton("刷暴跳过", "任务集", askMiti_wait);
	createPopButton("跟杀设置", "任务集", killfollowset);
	createPopButton("当前任务", "任务集", readnowjob);
	createPopButton("帮派烧香", "任务集", shaoxiang);
	createPopButton("帮任60", "任务集", bangren60);
	createPopButton("点榜20", "任务集", dabang20);
	createPopButton("物品操作", "任务集", getthingnum1);
	createPopButton("循环boss", "任务集", killboss_loop);
	createPopButton("延时检测", "任务集", yanshiceshi);
	createPopButton("属性查看", "任务集", readshuxing);
	createPopButton("吃帮榜令", "任务集", vip_eat);
	createPopButton("兑换称号", "任务集", dhchfunc);

	function rwjfunc() {
		bM.style.display = ""
	}
	function killboss_loop() {
		if (btnList['循环boss'].innerText == '循环boss' && kfql_flag == 1) {
			btnList['循环boss'].innerText = '停止循环';
			btnList['循环boss'].style.borderStyle = 'inset';
			if (boss_kill == 0) {
				bznpc_name = '不『二』剑客';
				cu = setInterval(killbossnpc, 500)
			} else if (boss_kill == 1) {
				bznpc_name = '无『双』公主';
				cu = setInterval(killbossnpc, 500)
			}
		} else {
			btnList['循环boss'].innerText = '循环boss';
			btnList['循环boss'].style.borderStyle = 'outset';
			clearInterval(cu);
			console.log('温馨提示：本功能在跨服中才能使用')
		}
	}
	function yanshiceshi() {
		triggers.enableByCls("yanshiceshi");
		yxsstime1 = new Date().toLocaleTimeString() + ':' + new Date().getMilliseconds();
		yxsstime_b = new Date().getTime();
		clickButton("items get_stor")
	}
	triggers.newTrigger(/查看背包的命令格式不对。/, function(m) {
		triggers.disableByCls("yanshiceshi");
		$('span.out2:contains(查看背包的命令格式不对)').remove();
		yxsstime2 = new Date().toLocaleTimeString() + ':' + new Date().getMilliseconds();
		yxsstime_e = new Date().getTime();
		console.log('指令发出时间:' + yxsstime1 + ',生效时间：' + yxsstime2);
		console.log('本次检测网络延时大概为：' + (yxsstime_e - yxsstime_b) + 'ms')
	}, "yanshiceshi", "");
	triggers.disableByCls("yanshiceshi");

	function readshuxing() {
		var l = g_obj_map.get("msg_attrs"),
			a = l.get("yuanbao"),
			b = l.get("xf_score"),
			c = l.get("id"),
			d = l.get("name"),
			e = l.get("born"),
			f = l.get("exp"),
			g = l.get("upgrade_exp"),
			h = l.get("money"),
			i = l.get("room_name"),
			j = l.get("family_name"),
			k = l.get("age");
		alert(j + '弟子' + d + '你好，你用户id:' + c + ',出身于' + e + ',现在已经' + k + '岁了,你现在拥有银子:' + h + ',元宝:' + a + ',消费积分:' + b + '。你正在' + i + '思考人生,看到自己的经验值为:' + f + '/' + g)
	}
	function loginhoutai() {
		var a = prompt("请输入后台管理员账号:密码", "admin" + ":" + "password");
		if (a.split(":")[0] != "daozhang" && a.split(":")[0] != "daozhang") {
			database.admin = 0;
			console.log("账号密码错误");
			return
		} else {
			database.admin = 1;
			console.log("管理员，欢迎您！" + parseInt(database.admin))
		}
	}
	function readnowjob() {
		alert('当前任务 nowjob=' + nowjob)
	}
	function shaoxiang() {
		console.log('智能烧香一次');
		triggers.enableByCls("shaoxiang1");
		go('clan incense cx')
	}
	triggers.newTrigger(/檀香（(.*)\/20）：每柱香需要5金锭/, function(m) {
		if (m[1] > 0 && m[1] < 20) {
			go('clan incense jx');
			console.log(m[0])
		} else if (m[1] == 20) {
			console.log(m[0]);
			triggers.disableByCls("shaoxiang");
			triggers.enableByCls("shaoxiang2");
			go('items get_store /obj/shop/shaoxiangfu;items use obj_shaoxiangfu')
		}
	}, "shaoxiang", "");
	triggers.newTrigger(/没有足够的金锭。/, function(m) {
		console.log('上檀香金锭不够了,结束');
		triggers.disableByCls("shaoxiang");
		go_home()
	}, "shaoxiang", "");
	triggers.newTrigger(/沉香（(.*)\/(.*)）：每柱香需要100元宝/, function(m) {
		console.log(m[0]);
		if (m[1] == m[2]) {
			triggers.disableByCls("shaoxiang1");
			triggers.enableByCls("shaoxiang");
			go('items get_store /obj/shop/jinding;clan incense jx')
		} else {
			go('clan incense cx')
		}
	}, "shaoxiang1", "");
	triggers.newTrigger(/今天上沉香的次数已达到上限了。/, function(m) {
		console.log(m[0]);
		triggers.disableByCls("shaoxiang1");
		triggers.enableByCls("shaoxiang");
		go('items get_store /obj/shop/jinding;clan incense jx')
	}, "shaoxiang1", "");
	triggers.newTrigger(/今天上檀香的次数已达到上限了。/, function(m) {
		console.log(m[0]);
		triggers.disableByCls("shaoxiang");
		triggers.enableByCls("shaoxiang2");
		go('items get_store /obj/shop/shaoxiangfu;items use obj_shaoxiangfu')
	}, "shaoxiang", "");
	triggers.newTrigger(/成功清除了今天的檀香和沉香次数/, function(m) {
		console.log('使用烧香符清除了次数，继续烧');
		triggers.disableByCls("shaoxiang2");
		shaoxiang()
	}, "shaoxiang2", "");
	triggers.newTrigger(/你今天使用烧香符次数已经达到上限了/, function(m) {
		console.log('今天烧香满了。结束烧香');
		triggers.disableByCls("shaoxiang2");
		triggers.disableByCls("shaoxiang1");
		triggers.disableByCls("shaoxiang");
		go_home()
	}, "shaoxiang2", "");
	triggers.newTrigger(/你的背包里没有这个物品。/, function(m) {
		console.log('没有烧香符了。结束烧香');
		triggers.disableByCls("shaoxiang2");
		triggers.disableByCls("shaoxiang1");
		triggers.disableByCls("shaoxiang");
		go_home()
	}, "shaoxiang2", "");
	triggers.disableByCls("shaoxiang");
	triggers.disableByCls("shaoxiang1");
	triggers.disableByCls("shaoxiang2");

	function bangren60() {
		if (!database.bpling_eat) {
			database.bpling_eat = '1,40'
		}
		database.bpling_eat = prompt('请输入使用帮派令次数,vip点帮任次数', database.bpling_eat);
		console.log(database.bpling_eat);
		bangren60_go()
	}
	function bangren60_go() {
		if (!database.bpling_eat) {
			database.bpling_eat = '1,40'
		}
		var a = database.bpling_eat.split(',')[0];
		var b = database.bpling_eat.split(',')[1];
		var c = '';
		var d = '';
		for (var i = 0; i < a; i++) {
			c += 'items use obj_bangpailing;'
		}
		for (var i = 0; i < b; i++) {
			d += 'vip finish_clan;'
		}
		go('items get_store /obj/shop/bangpailing;' + c + ';;' + d + 'prev')
	}
	function dabang20() {
		if (!database.jhling_eat) {
			database.jhling_eat = '3,20'
		}
		database.jhling_eat = prompt('请输入使用江湖令次数,vip点打榜次数', database.jhling_eat);
		console.log(database.jhling_eat);
		dabang20_go()
	}
	function dabang20_go() {
		if (!database.jhling_eat) {
			database.jhling_eat = '3,20'
		}
		var a = database.jhling_eat.split(',')[0];
		var b = database.jhling_eat.split(',')[1];
		var c = '';
		var d = '';
		for (var i = 0; i < a; i++) {
			c += 'items use obj_jianghuling;'
		}
		for (var i = 0; i < b; i++) {
			d += 'vip finish_sort;'
		}
		go('items get_store /obj/shopjianghuling;' + c + ';;' + d + 'prev')
	}
	triggers.newTrigger(/逄义是封山派中和柳淳风同辈的弟子，但是生性好赌的他并不受师父及同门师兄弟的喜爱/, function(m) {
		bN = '';
		lb_get();
		triggers.disableByCls("lb_code1");
		if (bN != '') {
			go(bN);
			console.log('本周礼包在雪亭');
			go('jh 5;n;n;n;w;sign7;jh 1;e;n;e;e;event_1_60133236;event_1_8041045;event_1_8041045;event_1_44731074;event_1_29721519;e;e;n;lq_lmyh_lb;jh 2;n;n;n;n;n;n;n;look_npc luoyang_luoyang3');
			triggers.enableByCls("lb_code3")
		} else {
			console.log('本周礼包在扬州');
			triggers.enableByCls("lb_code2");
			go('jh 5;n;n;e;look_npc yangzhou_yangzhou9')
		}
	}, "lb_code1", "");
	triggers.newTrigger(/善良，善解人意，乖巧聪慧，体贴贤惠，清秀可人，腼腆羞涩，似乎男人喜欢的品质都集中在她身上了/, function(m) {
		triggers.disableByCls("lb_code2");
		lb_get();
		go(bN);
		go('w;n;w;sign7;jh 1;e;n;e;e;event_1_8041045;event_1_8041045;event_1_44731074;event_1_29721519;e;e;n;lq_lmyh_lb;jh 2;n;n;n;n;n;n;n;look_npc luoyang_luoyang3');
		triggers.enableByCls("lb_code3")
	}, "lb_code2", "");
	triggers.newTrigger(/她总是甜甜的微笑，让人不忍拒绝她篮子里的鲜花。/, function(m) {
		triggers.disableByCls("lb_code3");
		lb_get();
		go(bN);
		nextgo = function() {
			clickButton('share_ok v,' + location.href)
		};
		go("e;tzjh_lq;home;sort fetch_reward;shop money_buy mny_shop1_N_10;cangjian get_all;xueyin_shenbinggu blade get_all;xueyin_shenbinggu unarmed get_all;xueyin_shenbinggu throwing get_all;xueyin_shenbinggu spear get_all;clan buy 302;clan buy 302;clan buy 302;clan buy 302;clan buy 302;clan buy 302;home;share_ok 1;share_ok 2;share_ok 3;share_ok 4;share_ok 5;share_ok 7;0$")
	}, "lb_code3", "");
	triggers.disableByCls("lb_code1");
	triggers.disableByCls("lb_code2");
	triggers.disableByCls("lb_code3");
	var bN = '';
	lb_get = function() {
		bN = '';
		var b = document.getElementById('out').getElementsByTagName('button');
		for (var i = 0; i < b.length; i++) {
			var a = b[i].innerHTML.replace(/<[^>]+>/g, "");
			if (a.indexOf('礼包') > -1) {
				var m = "相守授道春晖父爱粽子军魂鬼神兑换1元";
				if (m.indexOf(a.replace('礼包', '')) == -1) {
					bN += b[i].getAttribute('onclick').split("'")[1] + ';';
					console.log('本次获取的礼包代码为' + bN)
				}
			}
		}
	}
	function qd() {
		console.log('签到一次！');
		triggers.enableByCls("lb_code1");
		go('jh 1;;?周年小【贰】;^clickLibaoBtn;$;;;;~;look_npc snow_mercenary')
	}
	function clickLibaoBtn() {
		var d = ['兑换礼包', '1元礼包'];
		var e = $('.cmd_click2');
		e.each(function() {
			var a = $(this).text();
			if (a.indexOf('礼包') != '-1') {
				if ($.inArray(a, d) == -1) {
					var b = $(this).attr('onclick');
					var c = getLibaoId(b);
					clickButton(c)
				}
			}
		})
	}
	function getLibaoId(a) {
		var b = a.split(',');
		var c = b[0].split('(');
		var d = c[1].split("'");
		return d[1]
	}
	var bO = 'luoyang_luoyang20',
		ssping = false;

	function ssp() {
		var a;
		if (!(a = prompt("请输入剩余数量,刷碎片地点(1234分别是醉汉，地痞，地痞，青竹蛇)", "20,1"))) {
			return
		}
		counthead = parseInt(a.split(',')[0]);
		ssp_site = parseInt(a.split(',')[1]);
		ssp1()
	}
	function ssp1() {
		ssping = true;
		triggers.enableByCls("ssp");
		chuzhao_close();
		runhit_open();
		if (ssp_site == 1) {
			bO = 'snow_drunk';
			go('jh 1;e;n;n;^dossp;$')
		} else if (ssp_site == 2) {
			bO = 'luoyang_luoyang26';
			go('jh 2;n;n;n;n;^dossp;$')
		} else if (ssp_site == 3) {
			bO = 'luoyang_luoyang26';
			go('jh 2;n;n;n;n;n;w;^dossp;$')
		} else if (ssp_site == 4) {
			bO = 'luoyang_luoyang20';
			go('jh 2;n;n;n;n;n;n;n;n;n;e;^dossp;$')
		} else {
			console.log('刷碎片设置有误，请检查设置')
		}
	}
	function dossp() {
		if ($('span:contains(胜利)').text().slice(-3) == '胜利！') {
			clickButton('prev_combat');
			if (counthead > 1) {
				counthead = counthead - 1;
				console.log('杀人一次，剩余杀人次数：%d！', counthead);
				clickButton('kill ' + bO);
				clearTimeout(bs_time);
				bs_time = setTimeout(dossp, 1800)
			} else {
				runhit_close();
				chuzhao_open();
				console.log('刷完了！');
				ssping = false;
				triggers.disableByCls("ssp");
				clearTimeout(bs_time);
				clickButton('home');
				return
			}
		} else {
			if (is_fighting) {
				g_gmain.notify_fail(HIR + "大侠你正与碎片怪激烈战斗中....." + NOR);
				clearTimeout(bs_time);
				bs_time = setTimeout(dossp, 1000)
			} else if (!is_fighting) {
				clickButton('kill ' + bO);
				clearTimeout(bs_time);
				bs_time = setTimeout(dossp, 500)
			}
		}
	}
	function PaiHangFunc() {
		if (btnList["打榜一"].innerText == '打榜一') {
			ssping = true;
			chuzhao_close();
			runhit_open();
			clickButton('sort');
			clickButton('fight_hero 1');
			AutoPaiHangFunc();
			btnList["打榜一"].innerText = '停打榜';
			btnList["打榜一"].style.borderStyle = 'inset'
		} else {
			clearPaiHang();
			btnList["打榜一"].innerText = '打榜一';
			btnList["打榜一"].style.borderStyle = 'outset'
		}
	}
	function AutoPaiHangFunc() {
		AutoPaiHangFuncIntervalFunc = setInterval(AutoPaiHang, 1500)
	}
	function clearPaiHang() {
		clearInterval(AutoPaiHangFuncIntervalFunc)
	}
	function AutoPaiHang() {
		if ($('span.outbig_text:contains(战斗结束)').length > 0) {
			clickButton('prev_combat');
			clickButton('fight_hero 1')
		} else if (isContains($('span:contains(今日挑战)').text().slice(-19), '今日挑战高手的次数已达上限，明日再来。')) {
			ssping = false;
			runhit_close();
			chuzhao_open();
			clearPaiHang();
			btnList["打榜一"].innerText = '打榜一';
			btnList["打榜一"].style.borderStyle = 'outset';
			go_home();
			console.log('打完收工！')
		} else {
			g_gmain.notify_fail(HIR + "你正在激烈打榜中......" + NOR)
		}
	}
	function ch() {
		console.log("开始走向冰火岛！");
		fishingFirstStage()
	}
	function fishingFirstStage() {
		FishingParas = 0;
		go("jh 5;n;n;n;n;n;n;n;n;n;n;ne;look_npc yangzhou_chuanyundongzhu;chuhai go;")
	}
	function qdy() {
		resFishingParas = 0;
		console.log("开始钓鱼！");
		go("jh 35;nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;e");
		setTimeout(fishIt, 2000)
	}
	function fishIt() {
		resFishingParas = resFishingParas + 1;
		if (isContains($('span:contains(钓鱼需要)').text().slice(-17), '钓鱼需要鱼竿和鱼饵，你还没有')) {
			alert('鱼竿或鱼饵不足，停止钓鱼！');
			console.log('没有工具！钓鱼次数：%d次。', resFishingParas)
		} else if (isContains($('span:contains(整个冰湖的)').text().slice(-6), '明天再来吧。')) {
			console.log('钓完了！钓鱼次数：%d次。', resFishingParas)
		} else {
			go('diaoyu');
			setTimeout(fishIt, 6000);
			console.log($('span:contains(突然)').text().slice(-9))
		}
	}
	function snl() {
		if (M < 15) {
			console.log("章节没解锁");
			return
		}
		go("jh 15;n;nw;w;nw;n;event_1_14401179")
	}
	function sbt() {
		if (M < 21) {
			console.log("章节没解锁");
			return
		}
		go("jh 21;n;n;n;n;w;")
	}
	function sem() {
		go("jh 8;ne;e;e;e;n;n;n;n;n;")
	}
	function dpz() {
		if (M < 26) {
			console.log("章节没解锁");
			return
		}
		go("jh 26;w;w;n;n;event_1_14435995;")
	}
	function wey() {
		if (M < 37) {
			console.log("章节没解锁");
			return
		}
		go("jh 37;n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se;n;event_1_97487911")
	}
	function xkd() {
		if (M > 35) {
			go('jh 36;yell');
			bG = function() {
				go("e;ne;ne;ne;e;e;e;event_1_9179222;e;event_1_11720543;w;n;e;e;s;e;event_1_44025101");
				nextdo = function() {
					XiaKeFunc()
				};
				setTimeout(checkbusy, 4000)
			};
			setTimeout(function() {
				go_postion("侠客岛渡口", bG)
			}, 20000);
			return
		} else if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口") {
			alert("	请到“侠客岛渡口”再使用本功能！");
			return
		} else {
			go("e;ne;ne;ne;e;e;e;event_1_9179222;e;event_1_11720543;w;n;e;e;s;e;event_1_44025101");
			nextdo = function() {
				XiaKeFunc()
			};
			setTimeout(checkbusy, 4000)
		}
	}
	function XiaKeFunc() {
		getpostion();
		if (E.indexOf("崖底") != -1) XuanYaFunc();
		else if (E.indexOf("石门") != -1) {
			go("event_1_36230918;e;e;s;event_1_77496481;home");
			console.log("进门领悟回家")
		} else {
			setTimeout(checkbusy, 2000)
		}
	}
	function XuanYaFunc() {
		go("event_1_4788477;nw;w;sw;w;n;n;n;w;w;s;w;nw;w;e;ne;ne;ne;e;e;e;e;e;s;e;event_1_44025101");
		setTimeout(checkbusy, 4000)
	}
	triggers.newTrigger(/你走着走着，不知不觉来到了阴山岩画/, function(m) {
		go("event_1_12853448;home");
		triggers.disableByCls("canyanhua")
	}, "canyanhua", "");
	triggers.newTrigger(/你走着走着，不知不觉来到了阴山古刹/, function(m) {
		go("jh 26;w;w;n;w;w;w;n;n;e;e;")
	}, "canyanhua", "");
	triggers.newTrigger(/你脚下一滑，竟滑入野狼谷之中。/, function(m) {
		go("escape;jh 26;w;w;n;w;w;w;n;n;e;e;")
	}, "canyanhua", "");
	triggers.disableByCls("canyanhua");

	function cyh() {
		if (M < 26) {
			console.log("章节没解锁");
			return
		}
		if (confirm("你确定自己的悟性达到125了吗？注意，如果走到不动了请手动往下走两步，被狼咬了没跑掉需要重新点参岩画按钮")) {
			go("jh 26;w;w;n;w;w;w;n;n;e;e;");
			triggers.enableByCls("canyanhua")
		} else {
			triggers.disableByCls("canyanhua");
			alert("悟性不达标，取消参岩画。先去打把风泉剑再来吧")
		}
	}
	function ck() {
		if (M < 26) {
			console.log("章节没解锁");
			return
		}
		go("jh 26;w;w;n;e;e;event_1_18075497")
	}
	function wxt() {
		if (M < 35) {
			console.log("章节没解锁");
			return
		}
		go("jh 35;nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w;n;w;event_1_53278632;sousuo;sousuo;")
	}
	function byg() {
		if (M < 14) {
			console.log("章节没解锁");
			return
		}
		runhit_open();
		go("jh 14;w;n;n;n;n");
		nextdo = function() {
			if ($('button.cmd_click3').text().indexOf("进入冰月谷") != -1) {
				go("event_1_32682066;event_1_35756630;kill bingyuegu_yueyihan");
				nextdo = function() {
					go("event_1_55319823;kill bingyuegu_xuanwujiguanshou");
					nextdo = function() {
						go('event_1_17623983;event_1_6670148;kill bingyuegu_hundunyaoling');
						nextdo = function() {
							go("s;kill bingyuegu_bingyuexianren");
							nextdo = function() {
								go("home");
								runhit_close()
							}
							setTimeout(checkbusy, 2000)
						};
						setTimeout(checkbusy, 2000)
					};
					setTimeout(checkbusy, 2000)
				};
				setTimeout(checkbusy, 2000)
			} else {
				console.log("冰月前置任务未达到");
				go("home");
				runhit_close()
			}
		};
		setTimeout(checkbusy, 2000)
	}
	function cl() {
		go("jh 2;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;n;n;n;w;event_1_31320275")
	}
	function TsdzFunc() {
		setTimeout(Tsdz1Func, 200)
	}
	function Tsdz1Func() {
		if (M < 39) {
			console.log("章节没解锁");
			return
		}
		go('jh 39;ne;e;n;ne;ne;n;ne;nw;event_1_58460791;');
		setTimeout(Tsdz2Func, 5000)
	}
	function Tsdz2Func() {
		if (g_obj_map.get("msg_room") == undefined) {
			setTimeout(function() {
				Tsdz2Func()
			}, 200)
		} else {
			var a = g_obj_map.get("msg_room").get("short").match(/[\u4e00-\u9fa5]/g).join("");
			console.log(a);
			if (a == "失足岩") {
				console.log("继续走。");
				go('nw;n;ne;nw;nw;w;n;n;n;e;e;s;give tianshan_hgdz;ask tianshan_hgdz;ask tianshan_hgdz;s;event_1_34855843')
			} else {
				setTimeout(Tsdz1Func, 200)
			}
		}
	}
	function MiaoJiangFunc() {
		if (M < 40) {
			console.log("章节没解锁");
			return
		}
		go("jh 40;s;s;s;s;e;s;se;sw;s;sw;e;e;sw;se;sw;se;event_1_8004914");
		setTimeout(CaoDiFunc, cmdDelayTime * 20);

		function CaoDiFunc() {
			if ($('.cmd_click_room')[0].innerText == "澜沧江南岸") {
				resYaoParas = 0;
				go("se;s;s;e;n;n;e;s;e;ne;s;sw;e;e;ne;ne;nw;ne;ne;n;n;w");
				setTimeout(LianYaoIt, cmdDelayTime * 24)
			} else {
				setTimeout(MiaoJiangFunc, 1000)
			}
		}
		function LianYaoIt() {
			resYaoParas = resYaoParas + 1;
			if (isContains($('span:contains(炼药需要毒琥珀和毒藤胶，你还没有)').text().slice(-17), '需要毒琥珀和毒藤胶，你还没有药材。')) {
				alert('毒藤胶或毒藤胶不足，停止炼药！');
				console.log('没有工具！炼药次数：%d次。', resYaoParas)
			} else if (isContains($('span:contains(炼药的丹炉已经是滚得发烫)').text().slice(-6), '明天再来吧！')) {
				console.log('炼完了！炼药次数：%d次。', resYaoParas);
				go_home()
			} else {
				go('lianyao');
				setTimeout(LianYaoIt, 6000);
				console.log($('span:contains(竟然)').text().slice(-9))
			}
		}
	}
	function shijian() {
		go("swords report go;swords select_member huashan_feng;swords select_member gumu_yangguo;swords select_member taoist_zhangtianshi;swords fight_test go");
		chuzhao_open();
		ssping = true;
		triggers.enableByCls("lunjian")
	}
	triggers.newTrigger(/战斗结束/, function(m) {
		go('swords fight_test go')
	}, "lunjian", "");
	triggers.newTrigger(/你今天试剑次数已达限额。/, function(m) {
		ssping = false;
		triggers.disableByCls("lunjian");
		go('home_prompt')
	}, "lunjian", "");
	triggers.disableByCls("lunjian");
	var bP = 0;

	function datiswitch() {
		if (bP == 0) {
			clickButton('question');
			bP = 1;
			btnList['开答题'].innerText = '停答题';
			triggers.enableByCls("dati")
		} else {
			bP = 0;
			btnList['开答题'].innerText = '开答题';
			triggers.disableByCls("dati")
		}
	}
	function buycangbaotu() {
		triggers.enableByCls("cbt");
		go("jh 1;e;n;n;n;n;e;buy /obj/quest/cangbaotu_N_10 from snow_chefu;cangbaotu_op1")
	}
	function qsd() {
		if (M < 28) {
			console.log("章节没解锁");
			return
		}
		triggers.enableByCls("shediao");
		go("jh 28;n;w;w;w;w;w;w;nw;ne;nw;ne;nw;ne;e");
		setTimeout(function() {
			qsd_go = setInterval(function() {
				go('shediao')
			}, 300)
		}, 3000)
	}
	triggers.newTrigger(/^一头金凤凰似乎被你惊到，气势汹汹地向你冲了下来/, function(m) {
		chuzhao_open();
		clearInterval(qsd_go)
	}, "shediao", "");
	triggers.newTrigger(/^金凤凰不敌你，匆匆逃走之际留下了一个凤凰蛋壳/, function(m) {
		clearInterval(qsd_go);
		go('jh 1;e;n;n;n;w;event_1_47493781;home');
		triggers.disableByCls("shediao")
	}, "shediao", "");
	triggers.newTrigger(/每次射雕需要白羽箭，你目前没有箭。/, function(m) {
		clearInterval(qsd_go);
		go('home');
		triggers.disableByCls("shediao")
	}, "shediao", "");
	triggers.newTrigger(/臂力达到87以上才能射雕。/, function(m) {
		clearInterval(qsd_go);
		go('home');
		triggers.disableByCls("shediao")
	}, "shediao", "");
	triggers.newTrigger(/你今天已经收获累累，同时也消耗了大量元气和体力，请大侠隔日再来射雕。/, function(m) {
		clearInterval(qsd_go)
	}, "shediao", "");
	triggers.disableByCls("shediao");
	var bQ = 0,
		qixiaCode = ["玄月研", "王蓉", "狼居胥", "庞统", "烈九州", "步惊鸿", "穆妙羽", "宇文无敌", "李玄霸", "护竺", "八部龙将", "风无痕", "浪唤雨", "李宇飞", "风行骓", "郭济", "吴缜", "风南", "火云邪神", "逆风舞", "狐苍雁", "厉沧若", "夏岳卿", "妙无心", "巫夜姬"],
		qixiaCode1 = {
			"玄月研": "xuanyueyan",
			"王蓉": "wangrong",
			"狼居胥": "langjuxu",
			"庞统": "pangtong",
			"烈九州": "liejiuzhou",
			"步惊鸿": "bujinghong",
			"穆妙羽": "mumiaoyu",
			"宇文无敌": "yuwenwudi",
			"李玄霸": "lixuanba",
			"护竺": "huzhu",
			"八部龙将": "babulongjiang",
			"风无痕": "fengwuhen",
			"浪唤雨": "langfuyu",
			"李宇飞": "liyufei",
			"风行骓": "fengxingzhui",
			"郭济": "guoji",
			"吴缜": "wuzhen",
			"风南": "fengnan",
			"火云邪神": "huoyunxieshen",
			"逆风舞": "niwufeng",
			"狐苍雁": "hucangyan",
			"厉沧若": "licangruo",
			"夏岳卿": "xiaqing",
			"妙无心": "miaowuxin",
			"巫夜姬": "wuyeju"
		};

	function getqixiacode() {
		go('open jhqx');
		setTimeout(function() {
			var t = $("#out td a");
			if (t.text().indexOf('步惊鸿') > -1) {
				var a = 0;
				for (var i = 0; i < t.length; i++) {
					if (t[i].innerText != "朱果") {
						qixiaCode[t[i].innerText] = a;
						a++
					}
				}
				go('.奇侠代码已获取数量：' + qixiaCode.length)
			}
		}, 500)
	}
	var bR = '',
		qxList_input = '';

	function lqx_go() {
		btnList['撩奇侠'].innerText = '正在撩';
		qxOrder = 0;
		getqixiacode();
		setTimeout(function() {
			if (qixiaCode.length > 20) {
				goSwordsman()
			}
		}, 1200)
	}
	function lqx() {
		if (btnList['撩奇侠'].innerText == '撩奇侠') {
			if (userqu != 21) {
				if (bR == '') {
					qxList_input = prompt("请输入撩奇侠顺序（中文分号隔开）", qxList_inputs);
					bR = qxList_input.split("；")
				}
				bS = [];
				lqx_go()
			} else {
				alert("抱歉，你所在的区暂不开放撩奇侠功能")
			}
		} else {
			go(".不要慌，还没撩完呢")
		}
	}
	function goSwordsman() {
		if (qxOrder < bR.length) {
			go('find_task_road qixia ' + qixiaCode[bR[qxOrder]])
		}
		setTimeout(askSwordsman, 150)
	}
	var bS = [];

	function askSwordsman() {
		if (qxOrder < bR.length) {
			var a = 0;
			bQ = bQ + 1;
			if (bQ > 5) {
				go('.' + bR[qxOrder] + "没找到");
				bS.push(bR[qxOrder]);
				bQ = 0;
				qxOrder++;
				goSwordsman();
				return
			}
			var b = $("#out .cmd_click3");
			for (var i = 0; i < b.length; i++) {
				var c = b[i].innerText;
				if (bR[qxOrder] == c) {
					a = 1;
					bQ = 0;
					go(".对话 " + bR[qxOrder]);
					var d = b[i].getAttribute('onclick').split("'")[1].split(" ")[1];
					var e = 'ask ' + d;
					nextgo = function() {
						qxOrder++;
						goSwordsman()
					};
					go(e + ';' + e + ';' + e + ';' + e + ';' + e + ';$');
					return
				}
			}
			if (a === 0) setTimeout(function() {
				askSwordsman()
			}, 100)
		} else {
			bQ = 0;
			if (bS.length == 0) {
				go(".撩奇侠结束");
				bR = "";
				btnList['撩奇侠'].innerText = '撩奇侠';
				go('=150');
				go_home();
				playwarn_task();
				setTimeout(function() {
					words1("撩奇侠结束！")
				}, 400)
			} else {
				bR = bS;
				go(".本次剩余以下奇侠未撩:---" + bR);
				go_home();
				qx_bstime = setTimeout(qixia_nowtask, 200000);
				go(".askSwordsman:目前奇侠暂未撩完，延迟3分钟后继续")
			}
		}
	}
	function qixia_nowtask() {
		if (cmdCache.length == 0 && !is_fighting && nowjob != 'ql' && nowjob != 'yx' && nowjob != 'pt') {
			clearTimeout(qx_bstime);
			bS = [];
			lqx_go();
			return
		} else {
			clearTimeout(qx_bstime);
			qx_bstime = setTimeout(qixia_nowtask, 200000);
			go(".qixia_nowtask:目前奇侠暂未撩完，延迟3分钟后继续")
		}
	}
	triggers.newTrigger(/撩奇侠结束！/, function(m) {
		triggers.disableByCls("tg_qixia");
		setTimeout(function() {
			if (tg_ql == 1) {
				ql_open()
			}
			if (tg_yx == 1) {
				bn = "杀死";
				youxia_open()
			}
			clearbug_open();
			clearbug();
			setTimeout(pintulog, 10000);
			go(".自动开启青龙游侠秘图清卡顿")
		}, 2000)
	}, "tg_qixia", "");
	triggers.disableByCls("tg_qixia");

	function clickvip() {
		vip2();
		vip1();
		vip()
	}
	function vip_eat() {
		if (tgeat_bpl == 1 && tgeat_jhl == 0) {
			bangren60_go()
		} else if (tgeat_jhl == 1 && tgeat_bpl == 0) {
			dabang20_go()
		} else if (tgeat_jhl == 1 && tgeat_bpl == 1) {
			dabang20_go();
			setTimeout(bangren60_go, 5000)
		}
	}
	function vip() {
		goes('vip finish_family', 25);
		goes('vip finish_clan', 20);
		goes('vip finish_big_task', 10);
		if (vipzx == 2 && new Date().getDay() != 4) {
			goes('vip finish_taofan 2', 5);
			console.log('今天不是周四，逃犯负气完成走起')
		} else if (vipzx == 1 && new Date().getDay() != 4) {
			goes('vip finish_taofan 1', 5);
			console.log('今天不是周四，逃犯正气完成走起')
		}
		goes('vip finish_dig', 10);
		go('vip finish_fb dulongzhai;vip finish_fb dulongzhai;vip finish_fb junying;vip finish_fb junying;vip finish_fb beidou;vip finish_fb beidou;vip finish_fb youling;vip finish_fb youling;vip finish_fb siyu;vip finish_fb changleweiyang;vip drops;sort fetch_reward');
		goes('vip finish_diaoyu', 10);
		go('prev')
	}
	function kljfunc() {
		var a = 100,
			getRewardsInterval = 5 * 60 * 1000;
		if (btnList["开领奖"].innerText == '开领奖') {
			console.log("开始自动领取奖励！");
			scanEscapedFish();
			scanEscaped = setInterval(scanEscapedFish, getRewardsInterval);
			maikuli_i = setInterval(maikuli, 5000 + a);
			duancha_i = setInterval(duancha, 10 * 1000 + a);
			dalie_i = setInterval(dalie, 5 * 60 * 1000 + a);
			btnList["开领奖"].innerText = '停领奖';
			btnList["开领奖"].style.borderStyle = 'inset'
		} else {
			console.log("停止自动领取奖励！");
			clearInterval(scanEscaped);
			clearInterval(maikuli_i);
			clearInterval(duancha_i);
			clearInterval(dalie_i);
			btnList["开领奖"].innerText = '开领奖';
			btnList["开领奖"].style.borderStyle = 'outset'
		}
	}
	function maikuli() {
		clickButton('work click maikuli')
	}
	function duancha() {
		clickButton('work click duancha')
	}
	function dalie() {
		clickButton('work click dalie')
	}
	function baobiao() {
		clickButton('work click baobiao')
	}
	function maiyi() {
		clickButton('work click maiyi')
	}
	function xuncheng() {
		clickButton('work click xuncheng')
	}
	function datufei() {
		clickButton('work click datufei')
	}
	function dalei() {
		clickButton('work click dalei')
	}
	function kangjijinbin() {
		clickButton('work click kangjijinbin')
	}
	function zhidaodiying() {
		clickButton('work click zhidaodiying')
	}
	function dantiaoqunmen() {
		clickButton('work click dantiaoqunmen')
	}
	function shenshanxiulian() {
		clickButton('work click shenshanxiulian')
	}
	function jianlimenpai() {
		clickButton('work click jianmenlipai')
	}
	function scanEscapedFish() {
		go("work click maikuli;work click duancha;work click dalie;work click baobiao;work click maiyi;work click xuncheng;work click datufei;work click dalei;work click kangjijinbin;work click zhidaodiying;work click dantiaoqunmen;work click shenshanxiulian;work click jianmenlipai;public_op3;work click dubawulin;work click youlijianghu;work click yibangmaoxiang;work click zhengzhanzhongyuan;work click taofamanzu")
	}
	function bz_start() {
		go('golook_room');
		setTimeout(bz_kzc, 300)
	}
	function bz_kzc() {
		var t = $('span.outtitle').last().text();
		if (t.indexOf('武林广场') > -1) {
			var w = '';
			var n = t.slice(4);
			for (var i = 0; i < n - 1; i++) {
				w += 'w;'
			}
			go(w + 'e;e;event_1_20705356');
			triggers.enableByCls("bangzhan")
		} else {
			setTimeout(bz_checkadd, 500)
		}
	}
	triggers.newTrigger(/\[47区\]流觞/, function(m) {
		if (userqu != 47) {
			return
		}
		triggers.disableByCls("bangzhan");
		console.log("触发了看战场");
		var a = $('tr[bgcolor]:contains([47区]流觞)').text().slice(0, 3);
		var b = $('span.out2:contains([47区]流觞)').text().slice(1, 3);
		var c = $('tr[bgcolor] td:contains([47区]流觞)').index();
		if (bz_ad1.hasOwnProperty(a)) {
			if (c == 1) {
				bznpc_name = '攻楼死士'
			} else {
				bznpc_name = '守楼虎将'
			}
			console.log(a + "--" + b + "--" + c + "--杀" + bznpc_name);
			bz_way = bz_ad1[a] + bz_ad2[b];
			go(';;w;w');
			if (br == 1) {
				go('^bz_go;$')
			}
		}
	}, "bangzhan", "");
	triggers.newTrigger(/\[51区\]青龙会/, function(m) {
		if (userqu != 51) {
			return
		}
		triggers.disableByCls("bangzhan");
		console.log("触发了看战场");
		var a = $('tr[bgcolor]:contains([51区]青龙会)').text().slice(0, 3);
		var b = $('span.out2:contains([51区]青龙会)').text().slice(1, 3);
		var c = $('tr[bgcolor] td:contains([51区]青龙会)').index();
		if (bz_ad1.hasOwnProperty(a)) {
			if (c == 1) {
				bznpc_name = '攻楼死士'
			} else {
				bznpc_name = '守楼虎将'
			}
			console.log(a + "--" + b + "--" + c + "--杀" + bznpc_name);
			bz_way = bz_ad1[a] + bz_ad2[b];
			go(';;w;w');
			if (br == 1) {
				go('^bz_go;$')
			}
		}
	}, "bangzhan", "");
	triggers.disableByCls("bangzhan");

	function bz_go() {
		if (bz_way !== '') {
			clickButton('golook_room');
			setTimeout(bz_checkadd, 300)
		} else {
			alert('还不知道战场位置，请在武林广场点“看战场”')
		}
	}
	function bz_checkadd() {
		var t = $('span.outtitle').last().text();
		if (t.indexOf('武林广场') > -1) {
			var w = '';
			var n = t.slice(4);
			for (var i = 0; i < n - 1; i++) {
				w += 'w;'
			}
			go(w + bz_way)
		} else if (bz_ad1.hasOwnProperty(t)) {
			go('n;' + bz_way)
		} else if (bz_ad2.hasOwnProperty(t)) {
			go('golook_room')
		} else {
			setTimeout(bz_checkadd, 500)
		}
		triggers.enableByCls("bz_look");
		triggers.enableByCls("bz_fight")
	}
	triggers.newTrigger(/这儿有：(.*)队伍/, function(m) {
		if (m[1].indexOf(bznpc_name) > -1) {
			console.log(m[0]);
			triggers.disableByCls("bz_look");
			triggers.enableByCls("bz_fight");
			if (btnList['开BOSS'].innerText == '关BOSS') {
				nowjob = 'boss';
				cu = setInterval(killbossnpc, 500)
			} else if (btnList['开帮战'].innerText == '关帮战') {
				nowjob = 'bangzhan';
				cu = setInterval(function() {
					getnpcid(bznpc_name);
					killbznpc()
				}, 500)
			}
		}
	}, "bz_look", "");
	triggers.disableByCls("bz_look");

	function killbossnpc() {
		if (bznpc_name == '不『二』剑客') {
			var a = $('button.cmd_click3:contains(帮助公主)')[0].getAttribute('onclick').split("'")[1].split("'")[0];
			if (!is_fighting) {
				clickButton(a)
			}
		} else if (bznpc_name == '无『双』公主') {
			var a = $('button.cmd_click3:contains(帮助不二)')[0].getAttribute('onclick').split("'")[1].split("'")[0];
			if (!is_fighting) {
				clickButton(a)
			}
		}
	}
	var bT;

	function killbznpc() {
		clickButton('kill ' + npc_id)
	}
	triggers.newTrigger(/^已经太多人了，不要以多欺少啊。/, function(m) {
		clearTimeout(bT);
		clearInterval(cu);
		if (nowjob == 'bangzhan') {
			bT = setTimeout(killbznpc, 500)
		} else if (nowjob == 'boss') {
			bT = setTimeout(killbossnpc, 500)
		}
	}, "bz_fight", "");
	triggers.newTrigger(/(击杀请求过于频繁，请稍候片刻。|秒后才能再次加入此战场)/, function(m) {
		clearTimeout(bT);
		clearInterval(cu);
		if (nowjob == 'bangzhan') {
			bT = setTimeout(killbznpc, 1000)
		} else if (nowjob == 'boss') {
			bT = setTimeout(killbossnpc, 1000)
		}
	}, "bz_fight", "");
	triggers.newTrigger(/^你现在身上还有伤，不要进去危险/, function(m) {
		clearTimeout(bT);
		clearInterval(cu);
		if (nowjob == 'bangzhan') {
			nextgo = killbznpc;
			go('recovery;recovery;recovery;$')
		} else if (nowjob == 'boss') {
			huixuenei()
		}
	}, "bz_fight", "");
	triggers.newTrigger(/^你加入了战团！/, function(m) {
		clearInterval(cu)
	}, "bz_fight", "");
	triggers.newTrigger(/^帮派风云战中死亡获得热血印x1/, function(m) {
		huixuenei()
	}, "bz_fight", "");
	triggers.newTrigger(/^(好在有保险卡，没有降低技能等级！|你死了。|周年BOSS战中死亡获得周年热血令x1)/, function(m) {
		console.log(m[0]);
		triggers.disableByCls("bz_fight");
		if (nowjob == 'bangzhan') {
			huixuenei()
		} else if (nowjob == 'boss') {
			setTimeout(go_boss, 1000)
		}
	}, "bz_fight", "");
	triggers.disableByCls("bz_fight");

	function huixuenei() {
		go('recovery');
		triggers.enableByCls("bz_huifu")
	}
	triggers.newTrigger(/^你深深吸了几口气，脸色看起来好多了。/, function(m) {
		go('recovery')
	}, "bz_huifu", "");
	triggers.newTrigger(/^你的内力不够/, function(m) {
		go('items use snow_qiannianlingzhi;recovery')
	}, "bz_huifu", "");
	triggers.newTrigger(/^你现在气力充沛。/, function(m) {
		triggers.disableByCls("bz_huifu");
		if (!g_gmain.is_fighting) {
			var c = g_obj_map.get("msg_attrs");
			var a = parseInt(c.get("force"));
			var b = parseInt(c.get("max_force"));
			if (b - a > 5000) {
				var d = Math.floor((b - a) / 5000);
				console.log('回内次数：' + d);
				goes('items use snow_qiannianlingzhi', d);
				if (br == 1) {
					go(';;^bz_go;$')
				} else if (btnList['开BOSS'].innerText == '关BOSS') {
					go(';;^go_boss;$')
				}
			} else {
				if (br == 1) {
					go(';;^bz_go;$')
				} else if (btnList['开BOSS'].innerText == '关BOSS') {
					go(';;^go_boss;$')
				}
			}
		}
	}, "bz_huifu", "");
	triggers.disableByCls("bz_huifu");
	triggers.newTrigger(/^【帮派风云战】所有战场已全部结束，侠客们请带回你们的战利品回原服使用吧/, function(m) {
		if (kfql_flag == 0 && gSocketMsg._is_in_home) {
			go('clan scene;give_geling;give_fengyunling')
		}
	}, "bz_jiaoling", "");

	function clearbug() {
		getpostion();
		if (E == '论剑江湖主页' && !timeCmd && !is_fighting) {
			g_gmain.notify_fail(HIG + "自动清除卡顿一次" + NOR);
			if (kfql_flag == 1) {
				$("span.out2").remove();
				console.log('跨服中，清空游戏日志和聊天减少卡顿！')
			}
			chatMsg = [];
			setTimeout(autorecovery, 1000)
		} else if (!timeCmd && !is_fighting && nowjob != 'yx') {
			g_gmain.notify_fail(HIG + "自动清除卡顿一次！" + NOR);
			if (kfql_flag == 1) {
				console.log('跨服中，清空游戏日志和聊天减少卡顿！');
				var a = $("span.out2").length;
				for (var i = 0; i < a; i++) {
					if ($("span.out2")[i].innerHTML.indexOf('</a>') == -1) {
						$("span.out2")[i].remove();
						i--;
						a--
					}
				}
			}
			chatMsg = [];
			setTimeout(autorecovery, 1000)
		} else {
			g_gmain.notify_fail(HIG + "现在不是空闲时间，等下次再清除卡顿！" + cmdCache.length + NOR)
		}
	}
	var bU = 0;

	function shixiaorebuilt() {
		cmdDelayTime = 150;
		console.log('失效前nowjob=' + nowjob);
		cmdCache = [];
		chatMsg = [];
		timeCmd = 0;
		nextdo = function() {};
		df = 0;
		clearTimeout(bs_time);
		clearTimeout(qx_bstime);
		if (btnList['循环boss'].innerText == '循环boss' && btnList['开BOSS'].innerText == '开BOSS') {
			clearInterval(cu)
		}
		bG = function() {};
		if (nowjob == 'yx' && yx_js == 1) {
			bU++;
			if (bU > 1) {
				console.log('这个破游侠掉线了' + bU + '次，老子不要了');
				yxss_close();
				yxss_home()
			} else {
				console.log('搜这个破游侠已经掉线了' + bU + '次了');
				bB = 0;
				go_single(yxmap[bB]);
				setTimeout(searchyouxia, yx_delay)
			}
		}
		if (nowjob == 'qx' || nowjob == 'mj') {
			if (tg_qx == 1) {
				btnList['智能奇侠'].innerText = '智能奇侠';
				qx_bstime = setTimeout(ai_qixia, 5000);
				console.log('托管奇侠遇到掉线，5秒后尝试重做')
			} else {
				console.log('一键奇侠或智能奇侠出错，无托管不自连')
			}
		}
		if (nowjob == 'boss') {
			console.log('重启boss');
			close_boss();
			$("span.out2").remove();
			setTimeout(open_boss, 2000)
		}
		if (nowjob == 'bangzhan') {
			console.log('重启帮战');
			bz_close();
			bz_reset();
			$("span.out2").remove();
			setTimeout(bz_open, 2000);
			setTimeout(bz_start, 2500)
		}
	}
	function baoji_list() {
		if (!database.baoji) {
			database.baoji = "---当前暴击---"
		}
		alert(database.baoji)
	}
	function baoji_clear() {
		database.baoji = ""
	}
	function clearBag() {
		triggers.enableByCls("bagopened");
		go('items')
	}
	var bV = '天寒帽天寒项链飞羽剑逆钩匕毛毯木戟粗布鹅黄袍虞姬剑回旋镖粗布白袍垓下刀断云斧银丝链甲衣天怒斧天魔刀暗灵青布袍吴钩香囊黑水伏蛟木钩大红僧袍木剑九环禅杖竹刀紫金杖铁扇剑青锋剑绣花针绣花鞋红色绸裙青铜盾金刚罩丝质披风漫天花雨匕锦衣桃木剑玉箫清心散铁笛紫袍宝蓝缎衫紫霜血蝉衣魔鞭翩珑穿花蛇影鞋软金束带七星剑鱼竿鱼饵横断钩七星翻云靴三清神冠天寒戒天寒手镯软甲衣无心锤圣火令真武剑莲蓬长戟天寒鞋银丝甲鲤鱼粉红绸衫灰燕野山鸡麻雀岩鸽拂尘桃符纸粗布衣长虹剑暗箭银丝鞋叫化鸡丝绸衣钢刀闪避基础银丝帽玉竹杖中级拆招技巧金戒冰魄银针禅杖拂尘蛇胆草皮帽旧书粉红绸衫玄苏剑青葫芦松子铁斧水蜜桃蓑衣破弯刀柴刀丝衣长鞭道德经布裙钢丝甲衣牛皮带制服金刚杖斩空刀拜月掌套金弹子新月棍白蟒鞭-草莓玉蜂浆玉蜂蜜蜂浆瓶豆浆蛋糕菠菜粉条包裹鸡叫草水密桃--新月棍银簪重甲羊角匕梅花匕日月神教腰牌船篙-丝绸马褂白缨冠白色长袍蛇杖鬼头刀拐杖古铜缎子袄裙大环刀鹿皮手套丝绸衣羊毛裙牧羊鞭牛皮酒袋麻带钢剑钢杖藤甲盾长斗篷军袍破披风木盾铁盾锦缎腰带鞶革青色道袍-鲫鱼鲤鱼树枝水草破烂衣服-鹿皮小靴青绫绸裙布衣草帽草鞋布鞋精铁甲-柳玉刀玉竹剑钢刀戒刀单刀长剑长枪铁锤木棍轻罗绸衫兽皮鞋皮鞭铁棍飞镖匕首细剑绣鞋绣花小鞋狼皮雪靴铁戒银戒铁手镯银手镯铁项链银项链';
	var bW = '秘籍木盒鎏金黑玉锥掌门手谕空识卷轴隐武竹笺烧香符长生石帮派令周年礼券玄重铁分身卡百宝令江湖令师门令谜题令正邪令玄铁令状元贴高级突破丹高级乾坤袋装备打折卡碎片';
	var bX = '茉莉汤冰糖葫芦兰陵美酒元宵百草美酒年糕高级狂暴丹驻颜丹保险卡高级大还丹小还丹百年紫芝百年灵草高级乾坤再造丹高级小还丹玫瑰花冰镇酸梅汤神秘宝箱';
	var bY = '左手兵刃研习武穆遗书';
	var bZ = '残雪帽残雪戒金丝宝甲衣残雪项链疯魔杖残雪手镯残雪鞋红光匕羊毛斗篷夜行披风貂皮斗篷金丝甲宝玉甲破军盾玄武盾虎皮腰带沧海护腰天寒匕无心匕青鸾护臂苍狼护臂翎眼赤护';

	function clearitem() {
		var h = [];
		var k = $('td>table')[0];
		var l = $('td>table')[1];
		var m = $('td>table')[0].rows.length
		var n = $('td>table')[1].rows.length
		for (var i = 0; i < m; i++) {
			var a = k.rows[i].cells[0].innerText;
			var b = parseInt(k.rows[i].cells[1].innerText);
			var d = '';
			if (a.length > 1) {
				a = a.match(/[\u4e00-\u9fa5]/g).join("");
				var c = k.rows[i].getAttribute('onclick').split("'")[1].split("'")[0].replace('items info ', '');
				if (bW.indexOf(a) != -1) {
					console.log("存仓库：" + a + " *" + b + '  ' + c);
					h.push('items put_store ' + c)
				} else if (bX.indexOf(a) != -1) {
					console.log("使用：" + a + " *" + b + '  ' + c);
					var d = parseInt(b / 100);
					var e = parseInt(b % 100 / 50);
					var f = parseInt((b - d * 100 - e * 50) / 10);
					var g = parseInt(b % 10);
					for (j = 0; j < d; j++) {
						h.push('items use ' + c + '_N_100;')
					}
					for (j = 0; j < e; j++) {
						h.push('items use ' + c + '_N_50;')
					}
					for (j = 0; j < f; j++) {
						h.push('items use ' + c + '_N_10;')
					}
					for (j = 0; j < g; j++) {
						h.push('items use ' + c)
					}
				} else if (bY.indexOf(a) != -1) {
					console.log("学习：" + a + " *" + b + '  ' + c);
					for (j = 0; j < b; j++) {
						h.push('study ' + c)
					}
				} else if (bV.indexOf(a) != -1) {
					console.log("卖掉：" + a + " *" + b + '  ' + c);
					var d = parseInt(b / 100);
					var e = parseInt(b % 100 / 50);
					var f = parseInt((b - d * 100 - e * 50) / 10);
					var g = parseInt(b % 10);
					for (j = 0; j < d; j++) {
						h.push('items sell ' + c + '_N_100;')
					}
					for (j = 0; j < e; j++) {
						h.push('items sell ' + c + '_N_50;')
					}
					for (j = 0; j < f; j++) {
						h.push('items sell ' + c + '_N_10;')
					}
					for (j = 0; j < g; j++) {
						h.push('items sell ' + c)
					}
				} else if (bZ.indexOf(a) != -1) {
					console.log("分解：" + a + " *" + b + '  ' + c);
					var d = parseInt(b / 10);
					var f = parseInt(b % 10);
					for (j = 0; j < d; j++) {
						h.push('items splite ' + c + '_N_10;')
					}
					for (j = 0; j < f; j++) {
						h.push('items splite ' + c)
					}
				}
				if (a.indexOf('宝石') != -1 || a.indexOf('碎片') != -1 || a.indexOf('璞玉') != -1 || a.indexOf('青玉') != -1 || a.indexOf('墨玉') != -1 || (a.indexOf('宝箱') != -1 && a != "神秘宝箱") || a.indexOf('残页') != -1 || a.indexOf('钥匙') != -1) {
					console.log("存仓库：" + a + " *" + b + '  ' + c);
					h.push('items put_store ' + c)
				}
				if (a.indexOf('基础') != -1 || a.indexOf('进阶') != -1 || a.indexOf('长衫') != -1 || a.indexOf('袈裟') != -1 || a.indexOf('圣衣') != -1 || a.indexOf('道袍') != -1) {
					console.log("卖掉：" + a + " *" + b + '  ' + c);
					for (j = 0; j < b; j++) {
						h.push('items sell ' + c)
					}
				}
			}
		}
		h.push('prev;!特殊延时任务执行完毕');
		for (i = 0; i < h.length; i++) {
			d += h[i] + ';'
		}
		go('=300;' + d + '=150')
	}
	triggers.newTrigger(/背包物品(.*)\/(.*)物品排序仓&nbsp;&nbsp;库(.*)\//, function(m) {
		triggers.disableByCls("bagopened");
		console.log('背包物品：' + m[1] + '/' + m[2] + ',仓库物品：' + m[3] + '/' + m[2]);
		clearitem()
	}, "bagopened", "");
	triggers.disableByCls("bagopened");
	var ca, thingcode, thingname, thing_set;

	function getthingnum(s) {
		thing_set = null;
		getthingnum_do(s)
	}
	function getthingnum_do(s) {
		thingname = s;
		triggers.enableByCls("getthingnum");
		clickButton('items')
	}
	function getthingnum_go(a, b) {
		if (typeof b == 'undefined' || b == null) {
			var c = null
		} else if (b == 0) {
			var c = 'items info '
		} else if (b == 1) {
			var c = 'items get'
		} else if (b == 2) {
			var c = 'items put_store '
		} else if (b == 3 || b == 33) {
			var c = 'items sell '
		} else if (b == 4 || b == 44) {
			var c = 'items splite '
		} else if (b == 5 || b == 55) {
			var c = 'items use '
		}
		var f = $('td>table')[0];
		var g = $('td>table')[1];
		var h = $('td>table')[0].rows.length
		var j = $('td>table')[1].rows.length
		for (var i = 0; i < h; i++) {
			thingname = f.rows[i].cells[0].innerText;
			ca = parseInt(f.rows[i].cells[1].innerText);
			if (thingname.length > 1) {
				thingname = thingname.match(/[\u4e00-\u9fa5]/g).join("");
				if (thingname == a) {
					thingcode = f.rows[i].getAttribute('onclick').split("'")[1].split("'")[0].replace('items info ', '');
					console.log('背包:' + thingname + '   *' + ca + '    ' + thingcode);
					g_gmain.recvNetWork2(HIW + '背包:' + thingname + " 数量：" + ca + "，代码：" + thingcode + "\n" + NOR);
					if (c != null) {
						console.log(c + thingcode);
						if (b < 10) {
							clickButton(c + thingcode)
						} else {
							var d = c + thingcode + ';';
							var e = '';
							for (var i = 0; i < ca; i++) {
								e += d
							}
							e += 'prev';
							go(e)
						}
					}
					if (c == null || b < 10) {
						clickButton('prev')
					}
					return
				}
				if (i == h - 1 && thingname != a) {
					console.log('老铁，你确实没这个玩意儿哈');
					thingname = a;
					ca = 0;
					thingcode = null;
					clickButton('prev');
					i = 0;
					return
				}
			}
		}
		for (var i = 0; i < j; i++) {
			thingname = g.rows[i].cells[0].innerText;
			ca = parseInt(g.rows[i].cells[1].innerText);
			if (thingname.length > 1) {
				thingname = thingname.match(/[\u4e00-\u9fa5]/g).join("");
				if (thingname == a) {
					thingcode = g.rows[i].getAttribute('onclick').split("'")[1].split("'")[0].replace('items info', '');
					console.log('仓库:' + thingname + '   *' + ca + '    ' + thingcode);
					g_gmain.recvNetWork2(HIW + '仓库:' + thingname + " 数量：" + ca + "，代码：" + thingcode + "\n" + NOR);
					if (c != null) {
						console.log(c + thingcode);
						if (b < 10) {
							clickButton(c + thingcode)
						} else {
							var d = c + thingcode + ';';
							var e = '';
							for (var i = 0; i < ca; i++) {
								e += d
							}
							e += 'prev';
							go(e)
						}
					}
					if (c == null || b < 10) {
						clickButton('prev')
					}
					return
				}
				if (i == j - 1 && thingname != a) {
					console.log('老铁，你确实没这个玩意儿哈');
					thingname = a;
					ca = 0;
					thingcode = null;
					clickButton('prev');
					i = 0;
					return
				}
			}
		}
	}
	function getthingnum1() {
		var a = prompt('请输入你要操作的物品名称,操作方式((可为空)空只读,0看信息,1取,2存,3卖1,33卖全,4分1,44分全,5用1,55用全。例如: 千年灵芝,0)', '千年灵芝');
		if (a.indexOf(',') > -1) {
			var b = a.split(',')[0];
			var c = parseInt(a.split(',')[1]);
			thing_set = c;
			getthingnum_do(b)
		} else if (a != null) {
			thing_set = null;
			getthingnum_do(a)
		} else {
			console.log('输入错误,功能未能成功执行');
			return
		}
	}
	triggers.newTrigger(/背包物品(.*)\/(.*)物品排序仓&nbsp;&nbsp;库(.*)\//, function(m) {
		triggers.disableByCls("getthingnum");
		ca = null;
		thingcode = null;
		getthingnum_go(thingname, thing_set)
	}, "getthingnum", "");
	triggers.disableByCls("getthingnum");

	function clearmt() {
		go('auto_tasks cancel')
	}
	function killfollowset() {
		if (!database.killfer) {
			database.killfer = "道花1"
		}
		if (!database.killfer_all) {
			database.killfer_all = "是"
		}
		var a = prompt("请输入跟随对象名字（角色名）;是否跟随所有人杀特殊怪（英文分号隔开）", database.killfer + ";" + database.killfer_all);
		database.killfer = a.split(";")[0];
		database.killfer_all = a.split(";")[1]
	}
	function settupo() {
		tupo_skills = prompt("请设置下个突破技能（用英语的分号隔开,留空表示不自动突破）", tupo_skills);
		var a = tupo_skills.split(";");
		go("items get_store /obj/med/tupodan;items get_store /obj/med/tupodan2");
		var b = 'enable ' + skillnames[a[0]];
		var c = 'enable ' + skillnames[a[1]];
		var d = 'tupo go,' + skillnames[a[0]];
		var e = 'tupo go,' + skillnames[a[1]];
		topogo = b + ';' + d + ';' + c + ';' + e;
		setTimeout(function() {
			go(topogo)
		}, 600);
		setTimeout(function() {
			go("items put_store obj_tupodan;items put_store obj_gaojitupodan")
		}, 2000)
	}
	function tsjfunc() {
		cb.style.display = ""
	}
	var cb = createPop('特殊集');
	popList['特殊集'].innerHTML = '<div>请选择你要做的特殊操作</div>';
	createPopButton("买千年", "特殊集", mqn);
	createPopButton('杀风剑', "特殊集", killfengjian);
	createPopButton("捡辟邪", "特殊集", getBiXieFunc);
	createPopButton("捡钥匙", "特殊集", getSilverKeyFunc);
	createPopButton("学易容", "特殊集", learnyr);
	createPopButton("开续突破", "特殊集", xutupo);
	createPopButton("定时器", "特殊集", dingshiqi);
	createPopButton("读取战斗", "特殊集", readfight);
	createPopButton("杀年兽", "特殊集", killnianshou);
	createPopButton("杀秘宝", "特殊集", killmibao);
	createPopButton("模拟触发", "特殊集", monichufa);
	createPopButton("智能奇侠", "特殊集", ai_qixia);
	createPopButton("智能突破", "特殊集", ai_tupojiance);
	createPopButton("特殊阅览", "特殊集", teshuset_read);
	createPopButton("新开跨服", "特殊集", newkf_open);
	createPopButton("手动重连", "特殊集", doconnect);
	createPopButton("后台管理", "特殊集", loginhoutai);
	createPopButton("帮购物", "特殊集", bangshop);
	createPopButton("买日常", "特殊集", buyrichang);
	createPopButton("找奇侠", "特殊集", searchqixia);
	createPopButton("一键奇侠", "特殊集", autoqixiago);
	createPopButton("购买理财", "特殊集", buytzlicai);
	createPopButton("智能理财", "特殊集", ai_licai);
	createPopButton("宝石阵", "特殊集", bszread);
	createPopButton("称号表", "特殊集", chbread);
	createPopButton("极武坛图", "特殊集", jwtread);
	createPopButton("神兵任务", "特殊集", sbrwread);
	createPopButton("出师表", "特殊集", csbread);
	createPopButton("经脉攻略", "特殊集", jmglread);
	createPopButton("开帮本一", "特殊集", bfb1_open);
	createPopButton("算内力", "特殊集", countneili);
	createPopButton("摸本六", "特殊集", mobenliu);
	createPopButton("进帮批准", "特殊集", pizhun_bp);
	createPopButton("明月分解", "特殊集", fenjie_my);
	createPopButton("烈日分解", "特殊集", fenjie_lr);
	createPopButton("切磋设置", "特殊集", qiecuoset);
	createPopButton("定时加速", "特殊集", dingshi_jzjs);

	function mqn() {
		if (!(num = prompt("请输入购买数量：", "60"))) {
			return
		}
		go_mqn(num)
	}
	function go_mqn(a) {
		var b = "buy /map/snow/obj/qiannianlingzhi_N_10 from snow_herbalist";
		a = parseInt(a);
		go("jh 1;e;n;n;n;w;");
		goes(b, a / 10);
		go('home')
	}
	function killfengjian() {
		runhit_open();
		go(";;jh 7;s;s;s;s;s;s;s;s;e;n;e;s;e;kill scholar_master|~;@骆云舟的尸体;get sword of windspring;home")
	}
	var cc = 6E4,
		getBiXieIntervalFunc = null;

	function getBiXieFunc() {
		if (btnList['捡辟邪'].innerText == "捡辟邪") {
			if (cc = prompt("请输入捡辟邪剑谱时间间隔（ms)", "100000")) console.log("开始自动捡辟邪剑谱！"), getSwordMehtodology(), getBiXieIntervalFunc = setInterval(getSwordMehtodology, cc), btnList['捡辟邪'].innerText = "停辟邪", btnList['捡辟邪'].style.borderStyle = 'inset'
		} else clearInterval(getBiXieIntervalFunc), btnList['捡辟邪'].innerText = "捡辟邪", btnList['捡辟邪'].style.borderStyle = 'outset'
	}
	function getSwordMehtodology() {
		go("jh 4;n;n;n;n;n;n;n;n;n;e;n;n;n;e;huashan_luoyanya21_op1;w;s;s;s;w;s;s;event_1_91604710;s;s;s;w;get_silver;get_silver;home");
		var a = getNowFormatDate();
		console.log(a + "：搜寻一次辟邪剑谱！")
	}
	function getNowFormatDate() {
		var x = new Date,
			z = x.getMonth() + 1,
			y = x.getDate();
		1 <= z && 9 >= z && (z = "0" + z);
		0 <= y && 9 >= y && (y = "0" + y);
		return x.getFullYear() + "-" + z + "-" + y + " " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds()
	}
	var cd = 6E4,
		getSilverIntervalFunc = null;

	function getSilverKeyFunc() {
		if (btnList['捡钥匙'].innerText == "捡钥匙") {
			if (cd = prompt("请输入捡钥匙时间间隔（ms)", "60000")) console.log("开始自动捡钥匙！"), getSilverKeys(), getSilverIntervalFunc = setInterval(getSilverKeys, cd), btnList['捡钥匙'].innerText = "停钥匙", btnList['捡钥匙'].style.borderStyle = 'inset'
		} else clearInterval(getSilverIntervalFunc), btnList['捡钥匙'].innerText = "捡钥匙", btnList['捡钥匙'].style.borderStyle = 'outset'
	}
	function getSilverKeys() {
		go("jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;event_1_3723773;get yin yaoshi;s;give gumu_longnv;home;study gumu_yufeng-book")
	}
	function learnyr() {
		var a = "event_1_66277068";
		var b = "event_1_32217584";
		num = prompt("请输入学习易容次数", 1);
		go('jh 5;n;n;n;n;n;n;n;e;get_silver');
		if (num < 10) {
			goes(a, num)
		} else {
			goes(b, parseInt(num / 10));
			goes(a, num - 10 * parseInt(num / 10))
		}
		go_home()
	}
	function xutupo() {
		if (btnList['开续突破'].innerText == "开续突破") {
			triggers.enableByCls("xutupo"), btnList['开续突破'].innerText = "关续突破", btnList['开续突破'].style.borderStyle = 'inset'
		} else triggers.disableByCls("xutupo"), btnList['开续突破'].innerText = "开续突破", btnList['开续突破'].style.borderStyle = 'outset'
	}
	var ce = "7:55";
	var cf = "帮派开双";

	function dingshiqi() {
		if (!database.dingshitime) {
			database.dingshitime = prompt("请输入24小时制时间", ce)
		} else if (database.dingshitime) {
			database.dingshitime = prompt("请输入24小时制时间", database.dingshitime)
		}
		var a = database.dingshitime.split(":");
		database.dingshihours = a[0];
		database.dingshiminus = a[1];
		console.log("定时器当前定时时间是" + database.dingshihours + "点" + database.dingshiminus + "分");
		if (!database.dingshifunc) {
			database.dingshifunc = prompt("请输入需要定时完成的指令（当前可用指令有：签到,拼图,回主页,帮派开双）", cf)
		} else if (database.dingshifunc) {
			database.dingshifunc = prompt("请输入需要定时完成的指令（当前可用指令有：签到,拼图,回主页,帮派开双）", database.dingshifunc)
		}
		console.log("你设定需要完成的指令是" + database.dingshifunc)
	}
	function readfight() {
		var a = g_obj_map.get("msg_vs_info");
		if (a == undefined) {
			words3('你未在战斗中，你想读取什么鬼？');
			return
		}
		var b = g_obj_map.get("msg_attrs").get("id");
		for (var i = 0; i < 8; i++) {
			if (a.get("vs1_pos" + i) == b) {
				cF = a.get("vs1_pos1");
				cx = a.get("vs2_pos1")
			} else if (a.get("vs2_pos" + i) == b) {
				cF = a.get("vs2_pos1");
				cx = a.get("vs1_pos1")
			}
		}
		console.log("我:" + b + ";友方npc:" + cF + ";敌方npc:" + cx)
	}
	function killnianshou() {
		go('jh 1;e;n;n;n;n;n');
		yxer = '年兽';
		chuzhao_open();
		o.setTimeout(nianshoukill, cmdDelayTime * 9)
	}
	function nianshoukill() {
		triggers.disableByCls("yx_fight");
		setdonpc(yxer, "杀死");
		triggers.enableByCls("yx_corpse")
	}
	var cg = 0;

	function killmibao() {
		if (!is_fighting && cmdCache.length == 0) {
			cg = 1;
			go('jh 2');
			goes('n', 16);
			go('w;s;s;s;s;e;event_1_2215721;w');
			setTimeout(function() {
				go_postion("百毒池", killmibao1)
			}, 5000)
		}
	}
	function killmibao1() {
		if (!is_fighting) {
			cg = 0;
			if ($('button.cmd_click3').text().indexOf("黑袍公") != -1 && $('button.cmd_click3').text().indexOf("黑袍公的尸体") == -1) {
				console.log("发现拼图怪-黑袍公");
				if (database.pt_killset == 0) {
					setdonpc("黑袍公", "杀死")
				} else if (database.pt_killset == 1) {
					setdonpc("百毒旗主", "杀死")
				}
				setTimeout(tell_pt, 500)
			} else {
				go("e;n");
				setTimeout(function() {
					go_postion("万蛊堂", killmibao2)
				}, 500)
			}
		}
	}
	function killmibao2() {
		if (!is_fighting) {
			if ($('button.cmd_click3').text().indexOf("云观海") != -1 && $('button.cmd_click3').text().indexOf("云观海的尸体") == -1) {
				console.log("发现拼图怪-云观海");
				if (database.pt_killset == 0) {
					setdonpc("云观海", "杀死")
				} else if (database.pt_killset == 1) {
					setdonpc("巫蛊王", "杀死")
				}
				setTimeout(tell_pt, 500)
			} else {
				go("s;s");
				setTimeout(function() {
					go_postion("千蛇窟", killmibao3)
				}, 500)
			}
		}
	}
	function killmibao3() {
		if (!is_fighting) {
			if ($('button.cmd_click3').text().indexOf("翼国公") != -1 && $('button.cmd_click3').text().indexOf("翼国公的尸体") == -1) {
				console.log("发现拼图怪-翼国公");
				if (database.pt_killset == 0) {
					setdonpc("翼国公", "杀死")
				} else if (database.pt_killset == 1) {
					setdonpc("夜千麟", "杀死")
				}
				setTimeout(tell_pt, 500)
			} else {
				go("n;e");
				setTimeout(function() {
					go_postion("十恶殿", killmibao4)
				}, 500)
			}
		}
	}
	function killmibao4() {
		if (!is_fighting) {
			if ($('button.cmd_click3').text().indexOf("独孤须臾") != -1 && $('button.cmd_click3').text().indexOf("独孤须臾的尸体") == -1) {
				console.log("发现拼图怪-独孤须臾");
				setdonpc("独孤须臾", "杀死");
				if (database.pt_killset == 0) {
					setdonpc("独孤须臾", "杀死")
				} else if (database.pt_killset == 1) {
					setdonpc("十方恶神", "杀死")
				}
				setTimeout(tell_pt, 500)
			} else {
				go("w");
				console.log("暂无拼图怪，等待拼图怪出现")
			}
		}
	}
	function tell_pt() {
		if (database.pt_flag == 1 && is_fighting) {
			nowjob = 'pt'
		}
	}
	function mibao_gw() {
		getpostion();
		if (E == "百毒池") {
			killmibao1();
			return
		} else if (E == "万蛊堂") {
			go('s;w');
			setTimeout(function() {
				go_postion("百毒池", killmibao1)
			}, 500);
			return
		} else if (E == "千蛇窟") {
			go('n;w');
			setTimeout(function() {
				go_postion("百毒池", killmibao1)
			}, 500);
			return
		} else if (E == "十恶殿") {
			go('w;w');
			setTimeout(function() {
				go_postion("百毒池", killmibao1)
			}, 500);
			return
		} else if (E == "地室") {
			go('w');
			setTimeout(function() {
				go_postion("百毒池", killmibao1)
			}, 500);
			return
		} else {
			killmibao()
		}
	}
	function mibao_gw1() {
		getpostion();
		if (E == "百毒池") {
			go("e;n");
			setTimeout(function() {
				go_postion("万蛊堂", killmibao2)
			}, 500);
			return
		} else if (E == "万蛊堂") {
			go("s;s");
			setTimeout(function() {
				go_postion("千蛇窟", killmibao3)
			}, 500);
			return
		} else if (E == "千蛇窟") {
			go("n;e");
			setTimeout(function() {
				go_postion("十恶殿", killmibao4)
			}, 500);
			return
		} else if (E == "十恶殿") {
			go("w");
			return
		}
	}
	var ci = "你好";

	function monichufa() {
		ci = prompt("你想模拟触发什么消息？", ci);
		words1(ci)
	}
	var cj = aiqx_order.split("-");

	function ai_qixia() {
		if (btnList['智能奇侠'].innerText == '智能奇侠') {
			qixia_tell();
			btnList['智能奇侠'].innerText = '正在亲密';
			return
		} else {
			console.log("当前正在亲密奇侠！")
		}
	}
	function qixia_tell() {
		nowjob = 'qx';
		go("=200;items get_store /obj/shop/jinding");
		setTimeout(function() {
			getthingnum("金锭");
			setTimeout(function() {
				if (ca > 1800 && aiqx_mode == 1) {
					autoqixia_mode = 2;
					console.log("今天奇侠亲密每次送15金锭")
				} else if (ca <= 1800 && aiqx_mode == 1) {
					autoqixia_mode = 1;
					console.log("今天奇侠亲密每次送1金锭")
				} else if (ca > 900 && aiqx_mode == 0) {
					autoqixia_mode = 2;
					console.log("今天奇侠亲密每次送15金锭")
				} else if (ca <= 900 && aiqx_mode == 1) {
					autoqixia_mode = 1;
					console.log("今天奇侠亲密每次送1金锭")
				} else {
					autoqixia_mode = 1;
					console.log("今天奇侠亲密每次送1金锭")
				}
				triggers.enableByCls("aiqixia");
				go("open jhqx")
			}, 800)
		}, 800)
	}
	triggers.newTrigger(/江湖奇侠成长信息/, function(m) {
		triggers.disableByCls("aiqixia");
		console.log("触发智能奇侠");
		var a = [];
		for (var i = 0; i < $("tr>td").length - 4; i++) {
			var z = (i + 1) % 4;
			if (z == 0) {
				if ($('td')[i].innerText.indexOf('(') > -1) {
					var b = $('td')[i].innerText.split("(")[1].split(")")[0]
				} else {
					var b = 0
				}
				if ($('td')[i].innerText.indexOf("(") > -1) {
					var c = $('td')[i].innerText.split("(")[0]
				} else {
					var c = $('td')[i].innerText
				}
				var d = Math.floor(i / 4) + "-" + $('td')[i].innerText + "-" + $('td')[i + 2].innerText + "-" + b;
				if (b < 0) {
					console.log($('td')[i].innerText + "亲密度为负！");
					btnList['智能奇侠'].innerText = '智能奇侠';
					getqixiacode();
					bG = function() {
						console.log(c);
						if (cmdCache.length == 0 && !is_fighting) {
							clearTimeout(qx_bstime);
							go('find_task_road qixia ' + qixiaCode[c]);
							setTimeout(function() {
								getpostion();
								givegold(c, 1);
								givegold(c, 1);
								givegold(c, 1);
								setTimeout(ai_qixia, 6000)
							}, 1000)
						} else qx_bstime = setTimeout(bG, 6000)
					};
					qx_bstime = setTimeout(bG, 1200);
					return
				}
				console.log(d);
				a.push(d)
			}
		}
		for (var i = 0; i < cj.length; i++) {
			for (var j = 0; j < a.length; j++) {
				if (a[j].split("-")[1].indexOf("(") > -1) {
					var c = a[j].split("-")[1].split("(")[0]
				} else {
					var c = a[j].split("-")[1]
				}
				if ((cj[i] == c) && (a[j].split("-")[3] < qixiaqinmi[c])) {
					console.log(c + ":" + a[j].split("-")[3] + "<" + qixiaqinmi[c] + "-" + a[j].split("-")[2]);
					if (a[j].split("-")[2] != "师门" && a[j].split("-")[2] != "隐居修炼") {
						console.log("当前优先级奇侠正常，执行一键奇侠");
						a = [];
						btnList['智能奇侠'].innerText = '智能奇侠';
						qxList_input = qxList_inputs;
						database.autoqixia = "1," + c + "," + autoqixia_mode + "," + aiqx_mode;
						cn = database.autoqixia.split(",")[0];
						fqxname = database.autoqixia.split(",")[1];
						autoqixia_mode = database.autoqixia.split(",")[2];
						autoqixia_num = database.autoqixia.split(",")[3];
						if (btnList['开奇侠'].innerText == '开奇侠') {
							qiXiaSwitch()
						} else {
							getqixiacode()
						}
						setTimeout(function() {
							if (mj_doing == false) {
								go('find_task_road qixia ' + qixiaCode[fqxname]);
								setTimeout(function() {
									getpostion();
									if (autoqixia_mode == 1) {
										givegold(fqxname, 1)
									} else if (autoqixia_mode == 2) {
										givegold(fqxname, 15)
									}
								}, 1000)
							} else {
								fqxname = database.autoqixia.split(",")[1]
							}
						}, 1200);
						return
					} else {
						a = [];
						go("home");
						console.log("当前优先级奇侠死了，等3分钟吧");
						bG = function() {
							if (cmdCache.length == 0 && !is_fighting) {
								triggers.enableByCls("aiqixia");
								go("open jhqx");
								btnList['智能奇侠'].innerText = '正在亲密'
							} else qx_bstime = setTimeout(bG, 200000)
						};
						qx_bstime = setTimeout(bG, 200000);
						return
					}
				} else if ((cj[i] == c) && (a[j].split("-")[3] >= qixiaqinmi[c])) {
					console.log(c + "的亲密度已满，找下一个优先级奇侠")
				}
			}
		}
	}, "aiqixia", "");
	triggers.disableByCls("aiqixia");
	var cm = 0,
		ai_tupolists = ai_tupolist.split(";"),
		tupojiance, max_tpnum = "auto";

	function ai_tupojiance() {
		database.tuposkill = prompt("请输入你要智能检测突破的技能", database.tuposkill);
		nexttask = ai_tupojiance1;
		checktask()
	}
	function ai_tupojiance1() {
		for (var i = 0; i < ai_tupolists.length; i++) {
			if (ai_tupolists[i].indexOf(database.tuposkill) > -1) {
				database.tuposkill = ai_tupolists[i].split(":")[0];
				max_tpnum = ai_tupolists[i].split(":")[1];
				i = ai_tupolists.length
			} else {
				max_tpnum = "auto"
			}
		}
		go("golook_room");
		triggers.enableByCls("ai_tupo1");
		tupojiance = setTimeout(function() {
			triggers.enableByCls("ai_tupo")
		}, 250);
		go('skills info ' + userid + ' ' + skillnames[database.tuposkill])
	}
	function ai_tpcheck() {
		for (var i = 0; i < ai_tupolists.length; i++) {
			if (ai_tupolists[i].indexOf(database.tuposkill) != -1) {
				if (i < ai_tupolists.length - 1) {
					database.tuposkill = ai_tupolists[i + 1].split(":")[0];
					max_tpnum = ai_tupolists[i + 1].split(":")[1]
				} else {
					console.log("换突策略里面的技能已经突破完毕");
					max_tpnum = "auto";
					i = ai_tupolists.length;
					return
				}
				i = ai_tupolists.length
			} else if (i == ai_tupolists.length - 1) {
				database.tuposkill = ai_tupolists[0].split(":")[0];
				max_tpnum = ai_tupolists[0].split(":")[0]
			}
		}
		console.log("检测后决定尝试突破" + database.tuposkill);
		setTimeout(ai_tupojiance1, 500)
	}
	triggers.newTrigger(/级(.*)揣摩技能(.*)/, function(m) {
		triggers.disableByCls("ai_tupo");
		triggers.disableByCls("ai_tupo1");
		if (m[1].indexOf("突破技能有效系数") == -1) {
			if (m[1].indexOf("正在突破") == -1) {
				console.log("该技能暂未突破过且当前不在突破中,直接突破");
				cm = 0;
				go_home();
				setTimeout(function() {
					tuposkill = database.tuposkill;
					nexttask = function() {
						suantupo()
					};
					checktask()
				}, 1800)
			} else {
				console.log("该技能正在第一突中，智能换突开始检测下个技能");
				ai_tpcheck()
			}
		} else if (m[1].indexOf("突破技能有效系数") > -1) {
			console.log(database.tuposkill + m[1].split("有效系数")[1]);
			cm = m[1].split("有效系数")[1].split('(')[0].replace('+', '');
			console.log("当前技能突破次数：" + cm);
			go_home();
			if (m[1].indexOf("正在突破") > -1) {
				console.log("本技能正在" + cm + "突中,开始检测下个技能");
				ai_tpcheck()
			} else {
				console.log("本技能设定的最大突破次数：" + parseInt(max_tpnum));
				console.log(cm + "<" + max_tpnum + "?" + (cm < parseInt(max_tpnum)));
				if (max_tpnum == "auto" && cm < 14) {
					console.log("没有本技能的突破策略,直接突破，默认最高14突");
					setTimeout(function() {
						tuposkill = database.tuposkill;
						nexttask = function() {
							suantupo()
						};
						checktask()
					}, 1800)
				} else if (max_tpnum != "auto" && (cm < parseInt(max_tpnum))) {
					console.log("本技能还没到设定的最大突破次数，继续突破");
					setTimeout(function() {
						tuposkill = database.tuposkill;
						nexttask = function() {
							suantupo()
						};
						checktask()
					}, 1800)
				} else if (max_tpnum != "auto" && (cm == parseInt(max_tpnum))) {
					console.log("now:" + cm + "--" + max_tpnum);
					console.log("本技能已经达到设定的最大突破次数，换技能突破");
					ai_tpcheck()
				} else {
					console.log("没有本技能突破策略且已到14突，换下个");
					ai_tpcheck()
				}
			}
		} else {
			console.log("只能换突出现了一个未知的错误");
			return
		}
	}, "ai_tupo", "");
	triggers.newTrigger(/没有学会这个技能/, function(m) {
		console.log("你还没学会" + database.tuposkill + "，想干嘛？");
		triggers.disableByCls("ai_tupo");
		triggers.disableByCls("ai_tupo1");
		clearTimeout(tupojiance);
		go_home()
	}, "ai_tupo1", "");
	triggers.disableByCls("ai_tupo");
	triggers.disableByCls("ai_tupo1");

	function teshuset_read() {
		if (database.alert_flag == 0) {
			var a = 1;
			alert_switch()
		}
		alertmsg("特殊参数一览", "青龙杀人设置：" + ql_killset + "<br>" + "托管任务开关：" + tuoguan + "<br>" + "托管刷碎片地点：" + ssp_site + "<br>" + "托管青龙开关：" + tg_ql + "<br>" + "托管游侠开关：" + tg_yx + "<br>" + "奇侠亲密顺序：" + aiqx_order + "<br>" + "奇侠出秘境次数模式：" + aiqx_mode + "<br>" + "托管智能奇侠开关：" + tg_qx + "<br>" + "自动智能换突破开关：" + ai_autotupo + "<br>" + "自动智能换突破顺序：" + ai_tupolist);
		mainoutle(260, 350);
		if (a == 1) {
			alert_switch();
			a = 0
		}
	}
	function newkf_open() {
		triggers.enableByCls("newkf_open");
		database_all.newkf_open = 1;
		var a = o.open(o.location.href);
		a.focus()
	}
	triggers.newTrigger(/!!!有人取代了你的连线。如要重连，请刷新浏览器!!!/, function(m) {
		console.log("已经新开了一个窗口，触发本服重连等待");
		triggers.disableByCls("newkf_open");
		mytestcode = function() {
			if (database_all.newkf_open == 0) {
				doconnect()
			} else {
				console.log("新开跨服标识：" + database_all.newkf_open + ",延时1s重检");
				setTimeout(mytestcode, 1000)
			}
		};
		setTimeout(mytestcode, 3000)
	}, "newkf_open", "");
	triggers.newTrigger(/欢迎来到【遇剑：江湖】游戏/, function(m) {
		$("span.out2:contains(欢迎来到【遇剑：江湖】游戏)").remove();
		words1("道长论剑已成功连接新开跨服");
		triggers.disableByCls("newkf_open1");
		database_all.newkf_open = 0;
		kfql_flag = 1;
		qlrob = kf_qlreq;
		aichuzhao_close()
	}, "newkf_open1", "");
	triggers.newTrigger(/请您记住遇剑：江湖官网(.*)手机浏览器可直接游戏/, function(m) {
		$("span.out2:contains(请您记住遇剑：江湖官网)").remove();
		words1("道长论剑已成功连接新开跨服");
		triggers.disableByCls("newkf_open1");
		database_all.newkf_open = 0;
		kfql_flag = 1;
		qlrob = kf_qlreq;
		aichuzhao_close()
	}, "newkf_open1", "");
	triggers.newTrigger(/这儿就是遇剑里的各位英雄齐聚的广场，只见各路英雄齐聚于此，好不热闹/, function(m) {
		words1("道长论剑已成功连接新开跨服");
		triggers.disableByCls("newkf_open1");
		database_all.newkf_open = 0;
		kfql_flag = 1;
		qlrob = kf_qlreq;
		aichuzhao_close()
	}, "newkf_open1", "");
	triggers.newTrigger(/你身上带有生死簿，不能进入跨服/, function(m) {
		setTimeout(function() {
			go('jh 1;e;n;n;n;n;w;event_1_44575766 go')
		}, 300)
	}, "newkf_open1", "");
	triggers.newTrigger(/你身上没有生死簿。/, function(m) {
		go('home;change_server world')
	}, "newkf_open1", "");
	triggers.newTrigger(/销毁了生死簿x(.*)/, function(m) {
		console.log(m[0]);
		go('event_1_44575766 go')
	}, "newkf_open1", "");
	triggers.disableByCls("newkf_open");
	triggers.disableByCls("newkf_open1");

	function doconnect() {
		g_gmain.g_delay_connect = 0;
		connectServer();
		$("span.out2:contains(有人取代了)").remove();
		console.log("道长论剑本服重连成功")
	}
	function bangshop() {
		go("home");
		goes('clan buy 101', 10);
		goes("clan buy 102", 2);
		goes("clan buy 201", 2);
		goes("clan buy 202", 2);
		goes("clan buy 301", 5);
		goes("clan buy 302", 5);
		goes("clan buy 401", 1);
		goes("clan buy 501", 1)
	}
	function buyrichang() {
		console.log("正在回到主页，并购买以下任务：");
		console.log("侠客岛，闯阵，杀孽龙，解围，劳军，参岩画，杀盗贼，狂暴丹，扫荡帮本一");
		go("home;daily finish 0;daily finish 2;daily finish 3;daily finish 5;daily finish 6;daily finish 7;daily finish 10;daily finish 11;daily finish 12;daily finish 13;daily finish 14;daily finish 15");
		go("clan fb go_saodang shenshousenlin;home")
	}
	function searchqixia() {
		fqxname = prompt("你要找哪位奇侠", fqxname);
		getqixiacode();
		setTimeout(function() {
			go('find_task_road qixia ' + qixiaCode[fqxname]);
			setTimeout(function() {
				getpostion()
			}, 1000)
		}, 1000)
	}
	var cn, autoqixia_mode, autoqixia_num;

	function autoqixiago() {
		qxList_input = qxList_inputs;
		if (!database.autoqixia) {
			database.autoqixia = prompt("请设置奇侠参数: 全自动奇侠开关状态(0/1),亲密奇侠名字,奇侠模式(0/1/2),秘境触发次数(0/1)", autoqixia)
		} else {
			database.autoqixia = prompt("请设置奇侠参数: 全自动奇侠开关状态(0/1),亲密奇侠名字,奇侠模式(0/1/2),秘境触发次数(0/1)", database.autoqixia)
		}
		cn = database.autoqixia.split(",")[0];
		fqxname = database.autoqixia.split(",")[1];
		autoqixia_mode = database.autoqixia.split(",")[2];
		autoqixia_num = database.autoqixia.split(",")[3];
		if (btnList['开奇侠'].innerText == '开奇侠') {
			qiXiaSwitch()
		} else {
			getqixiacode()
		}
		setTimeout(function() {
			if (mj_doing == false) {
				go('find_task_road qixia ' + qixiaCode[fqxname]);
				setTimeout(function() {
					getpostion();
					if (autoqixia_mode == 1) {
						givegold(fqxname, 1)
					} else if (autoqixia_mode == 2) {
						givegold(fqxname, 15)
					}
				}, 1000)
			} else {
				fqxname = database.autoqixia.split(",")[1]
			}
		}, 1000)
	}
	function ai_licai() {
		var x = g_obj_map.get("msg_attrs").get("yuanbao");
		var y = 6;
		g_gmain.recvNetWork2(HIG + "你的元宝有 " + x + "\n" + NOR);
		if (x < 2000) {
			y = 0
		} else if (x >= 2000 && x < 10000) {
			y = 1
		} else if (x >= 10000 && x < 20000) {
			y = 2
		} else if (x >= 20000 && x < 30000) {
			y = 3
		} else if (x >= 30000 && x < 50000) {
			y = 4
		} else if (x >= 50000 && x < 100000) {
			y = 5
		} else if (x >= 100000) {
			y = 6
		}
		g_gmain.send_prompt("道长推荐购买" + y + "档理财，你买吗？？？\n\n\n\n", "touzi_jihua2 buygo " + y, "道长说了算")
	}
	function buytzlicai() {
		var a = prompt("你要买几档理财？（1-2k,2-1w,3-2w,4-3w,5-5w,6-10w,7-15w,8-20w,9-30w,10-40w）", 6);
		go("touzi_jihua2 buygo " + a)
	}
	function bszread() {
		if (database.alert_flag == 0) {
			var a = 1;
			alert_switch()
		}
		alertmsg("宝石阵属性图", "点击图片查看大图<hr><a target='_blank' href='http://playdreamer.cn/pan/uploads/dzlunjian/pic/bsz.jpg'><img src='http://playdreamer.cn/pan/uploads/dzlunjian/pic/bsz.jpg'></img></a>");
		mainoutle(500, 400);
		if (a == 1) {
			alert_switch();
			a = 0
		}
	}
	function chbread() {
		if (database.alert_flag == 0) {
			var a = 1;
			alert_switch()
		}
		alertmsg("称号表", "点击图片查看大图<hr><a target='_blank' href='http://playdreamer.cn/pan/uploads/dzlunjian/pic/chb.png'><img src='http://playdreamer.cn/pan/uploads/dzlunjian/pic/chb.png'></img></a>");
		mainoutle(400, 400);
		if (a == 1) {
			alert_switch();
			a = 0
		}
	}
	function jwtread() {
		if (database.alert_flag == 0) {
			var a = 1;
			alert_switch()
		}
		alertmsg("极武坛图", "点击图片查看大图<hr><a target='_blank' href='http://playdreamer.cn/pan/uploads/dzlunjian/pic/jwt.png'><img src='http://playdreamer.cn/pan/uploads/dzlunjian/pic/jwt.png'></img></a>");
		mainoutle(400, 350);
		if (a == 1) {
			alert_switch();
			a = 0
		}
	}
	function sbrwread() {
		if (database.alert_flag == 0) {
			var a = 1;
			alert_switch()
		}
		alertmsg("神兵任务", "点击图片查看大图<hr><a target='_blank' href='http://playdreamer.cn/pan/uploads/dzlunjian/pic/sbrw.png'><img src='http://playdreamer.cn/pan/uploads/dzlunjian/pic/sbrw.png'></img></a>");
		mainoutle(400, 350);
		if (a == 1) {
			alert_switch();
			a = 0
		}
	}
	function csbread() {
		if (database.alert_flag == 0) {
			var a = 1;
			alert_switch()
		}
		alertmsg("出师表", "点击图片查看大图<hr><a target='_blank' href='http://playdreamer.cn/pan/uploads/dzlunjian/pic/csb.jpg'><img src='http://playdreamer.cn/pan/uploads/dzlunjian/pic/csb.jpg'></img></a>");
		mainoutle(400, 350);
		if (a == 1) {
			alert_switch();
			a = 0
		}
	}
	function jmglread() {
		if (database.alert_flag == 0) {
			var a = 1;
			alert_switch()
		}
		alertmsg("经脉攻略", "点击图片查看大图<hr><a target='_blank' href='http://playdreamer.cn/pan/uploads/dzlunjian/pic/jmgl.jpg'><img src='http://playdreamer.cn/pan/uploads/dzlunjian/pic/jmgl.jpg'></img></a>");
		mainoutle(300, 300);
		if (a == 1) {
			alert_switch();
			a = 0
		}
	}
	var co;

	function bfb1_open() {
		if (btnList['开帮本一'].innerText == '开帮本一') {
			getthingnum("千年灵芝");
			setTimeout(function() {
				if (ca > 200) {
					console.log("灵芝数量足够，准备出发");
					bfb1_open1()
				} else {
					console.log("检测包里千年灵芝不够，帮本一无法正常，请买灵芝");
					writeouts("道长论剑论坛：", "大侠战斗劳累，买点千年灵芝充充饥？", mqn, "现在去买");
					clickButton("share_ok 6")
				}
			}, 1000)
		} else {
			autobf_stop()
		}
	}
	function bfb1_open1() {
		if (confirm('是队长吗？')) {
			var t = $('span.outtitle').last().text();
			if (t == "饕餮谷") {
				setTimeout(bf1_1, 1000);
				btnList['开帮本一'].innerText = "关帮本一";
				btnList['开帮本一'].style.borderStyle = 'inset';
				triggers.enableByCls("bfb1")
			} else {
				alert('请队友先进饕餮谷，然后队长到饕餮谷后使用此功能');
				return
			}
		} else {
			if (btnList['开跟杀'].innerText == "开跟杀") {
				killfollow()
			}
			triggers.enableByCls("zhiliao");
			btnList['开帮本一'].innerText = "关帮本一";
			btnList['开帮本一'].style.borderStyle = 'inset';
			triggers.enableByCls("bfb1")
		}
	}
	function autobf_stop() {
		clearTimeout(co);
		newgo_reset();
		stopDelayCmd();
		btnList['开帮本一'].innerText = "开帮本一";
		btnList['开帮本一'].style.borderStyle = 'outset'
	}
	function bf1_1() {
		go('#on;s;;kill?镇谷神兽|w;kill?镇谷神兽|w;kill?镇谷神兽|w;kill?镇谷神兽|e;e;e;e;kill?镇谷神兽|e;kill?镇谷神兽|e;kill?镇谷神兽|w;w;w;s;team chat 开始自动治疗;;;^canxuesheng;$;#off');
		go('^bfb1_11;$')
	}
	function bfb1_11() {
		console.log('10秒后继续下一层');
		clearTimeout(co);
		co = setTimeout(bf1_2, 10000)
	}
	function bf1_2() {
		go('#on;kill?守谷神兽|w;kill?守谷神兽|;w;kill?守谷神兽|;w;kill?守谷神兽|e;e;e;e;kill?守谷神兽|e;kill?守谷神兽|e;kill?守谷神兽|w;w;w;s;team chat 开始自动治疗;;;^canxuesheng;$;#off');
		go('^bfb1_21;$')
	}
	function bfb1_21() {
		console.log('10秒后继续下一层');
		clearTimeout(co);
		co = setTimeout(bf1_3, 10000)
	}
	function bf1_3() {
		go('#on;kill?饕餮幼崽|w;kill?饕餮幼崽|w;kill?饕餮幼崽|w;kill?饕餮幼崽|e;e;e;e;team chat 开始自动治疗;;;^canxuesheng;$;#off');
		go('^bfb1_31;$')
	}
	function bfb1_31() {
		clearTimeout(co);
		co = setTimeout(function() {
			go('#on;kill?饕餮幼崽|e;kill?饕餮幼崽|e;kill?饕餮幼崽|w;w;w;s;team chat 开始自动治疗;;;^canxuesheng;$;#off');
			go('^bfb1_32;$')
		}, 6000)
	}
	function bfb1_32() {
		console.log('10秒后继续下一层');
		clearTimeout(co);
		co = setTimeout(bf1_4, 10000)
	}
	function bf1_4() {
		go('#on;kill?饕餮兽魂|w;kill?饕餮兽魂|w;kill?饕餮兽魂|w;kill?饕餮兽魂|e;e;e;e;team chat 开始自动治疗;;;^canxuesheng;$;#off');
		go('^bfb1_41;$')
	}
	function bfb1_41() {
		clearTimeout(co);
		co = setTimeout(function() {
			go('#on;kill?饕餮兽魂|e;kill?饕餮兽魂|e;kill?饕餮兽魂|w;w;w;s;team chat 开始自动治疗;;;^canxuesheng;$;#off');
			go('^bfb1_42;$')
		}, 6000)
	}
	function bfb1_42() {
		console.log('10秒后继续下一层');
		clearTimeout(co);
		co = setTimeout(bf1_5, 10000)
	}
	function bf1_5() {
		go('#on;kill?饕餮王|w;kill?饕餮王|w;kill?饕餮王|w;kill?饕餮王|e;e;e;e;team chat 开始自动治疗;;;^canxuesheng;$;#off');
		go('^bfb1_51;$')
	}
	function bfb1_51() {
		clearTimeout(co);
		co = setTimeout(function() {
			go('#on;kill?饕餮王|e;kill?饕餮王|e;kill?饕餮王|w;w;w;s;team chat 开始自动治疗;;;^canxuesheng;$;#off');
			go('^bfb1_52;$')
		}, 6000)
	}
	function bfb1_52() {
		console.log('10秒后继续下一层');
		clearTimeout(co);
		co = setTimeout(function() {
			go('kill?饕餮战神|team chat 开始自动治疗;;;^canxuesheng;$')
		}, 10000)
	}
	triggers.newTrigger(/帮派副本时间到，你退出了副本！/, function(m) {
		triggers.disableByCls("zhiliao");
		triggers.disableByCls("bfb1");
		autobf_stop()
	}, "bfb1", "");
	triggers.disableByCls("bfb1");
	triggers.newTrigger(/(.*)开始自动治疗/, function(m) {
		canxuesheng()
	}, "zhiliao", "");
	triggers.disableByCls("zhiliao");

	function countneili() {
		var s = prompt("请输入: 初始内力-每跳内力-预计内力", "4000-360-10000"),
			neili = s.split('-'),
			chushi = neili[0],
			meitiao = neili[1],
			yuji = neili[2],
			meimiao = meitiao / 5,
			heji = ((yuji * yuji) - (chushi * chushi)) / 2,
			yujihour = (heji / meimiao / 3600).toFixed(2),
			yujiminu = yujihour * 60,
			yujiday = (heji / meimiao / 3600 / 24).toFixed(2);
		alert("经过计算得，在有vip通勤卡和没内力浪费的情况下，你还需要的总内力为：" + heji + " 你的每秒打坐增长内力为：" + meimiao + " 你还需要打坐的合计天数为：" + yujiday + "天" + " 合计小时为：" + yujihour + "小时" + " 合计分钟数为：" + yujiminu + "分钟")
	}
	function mobenliu() {
		go('fb 6;event_1_94101353;kill changleweiyang_dahonglu|home;fb 6;wield sword of windspring;;event_1_8221898;wield weapon_sb_sword11;;kill changleweiyang_taishuling|home;fb 6;event_1_18437151;kill changleweiyang_zhijinwu|home;fb 6;event_1_74386803;kill changleweiyang_wunvling|home')
	}
	var cp = createPop('走迷人');
	popList['走迷人'].innerHTML = '<div>请选择你要去的迷宫地图或者npc</div>';
	createPopButton("去赌场", "走迷人", qdc);
	createPopButton("天策府", "走迷人", tcf);
	createPopButton("唐人张", "走迷人", trzhang);
	createPopButton("云梦璃", "走迷人", yml);
	createPopButton("独孤皇后", "走迷人", dghh);
	createPopButton("老祭司", "走迷人", ljs);
	createPopButton("欧阳敏", "走迷人", oym);
	createPopButton("林祖师", "走迷人", lzs);
	createPopButton("铁尸", "走迷人", ts);
	createPopButton("琅嬛洞", "走迷人", lhd);
	createPopButton("无尽深渊", "走迷人", wujinsy);
	createPopButton("地下迷宫", "走迷人", dixiamigong);
	createPopButton("高老者", "走迷人", glz);
	createPopButton("雪林深处", "走迷人", xlsc);
	createPopButton("出雪林", "走迷人", cxl);
	createPopButton("石帮主", "走迷人", sbz);
	createPopButton("朱熹", "走迷人", zhuxi);
	createPopButton("谢烟客", "走迷人", xyk);
	createPopButton("三门派", "走迷人", smp);
	createPopButton("师门飞机", "走迷人", smfeiji);
	createPopButton("本二开关", "走迷人", fb2_open);
	createPopButton("拼图怪", "走迷人", pt_walk);
	createPopButton('去通灵', "走迷人", gotongling);
	createPopButton('帮派铜人', "走迷人", tongren);
	createPopButton('恒山盗贼', "走迷人", daozei);
	createPopButton('铁血日常', "走迷人", tiexue);
	createPopButton('天山七侠', "走迷人", tianshanqixia);
	createPopButton('毒魔', "走迷人", dumo);
	createPopButton('白驼突袭', "走迷人", baituotuxi);
	createPopButton('渡劫', "走迷人", dujie);
	createPopButton('骡马市', "走迷人", luomashi);
	createPopButton('朝暮阁', "走迷人", zhaomuge);
	createPopButton('金锭采花', "走迷人", jd_caihua);
	createPopButton('修武入脉', "走迷人", zmr_xwrm);
	createPopButton('进天剑谷', "走迷人", go_intianjian);
	createPopButton('开外传', "走迷人", waizhuanswitch);
	createPopButton('积分商城', "走迷人", function() {
		gSocketMsg2.show_xf_shops()
	});

	function zmrfunc() {
		cp.style.display = ""
	}
	function qdc() {
		go("jh 2;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w;touzi;")
	}
	function zmr_xwrm() {
		go('jh 14;sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;se;s;se;e;ne;n;look_npc tangmen_luxiyin')
	}
	function luomashi() {
		if ($('button.cmd_click_room').length > 0) {
			if ($('button.cmd_click_room')[0].innerText == '朝暮阁') {
				go('sw;se;se;sw;s;s;s;e;sw;sw;sw;s;se;se;se;e')
			} else if (!$('button.cmd_click_exits_sw') && $('button.cmd_click_exits_ne')[0] && $('button.cmd_click_exits_ne')[0].innerText == '百里原' && $('button.cmd_click_room')[0].innerText == '百里原') {
				go('se;ne;se;s;e;e;e;ne;se;s;s;sw;sw;sw')
			} else {
				alert('请到#朝暮阁#或者#百里原#闻香寻花处使用本功能')
			}
		} else {
			console.log('请到掩月城地图中使用')
		}
	}
	function zhaomuge() {
		if ($('button.cmd_click_room').length > 0) {
			if ($('button.cmd_click_exits_w')[0] && $('button.cmd_click_exits_w')[0].innerText == '马车店' && $('button.cmd_click_room')[0].innerText == '骡马市') {
				go('w;nw;nw;nw;n;ne;ne;ne;w;n;n;n;ne;nw;nw;ne')
			} else {
				alert('请到骡马市中间使用本功能')
			}
		} else {
			console.log('请到掩月城地图中使用')
		}
	}
	function jd_caihua() {
		if ($('button.cmd_click_room').length > 0) {
			if ($('button.cmd_click_exits_w')[0] && $('button.cmd_click_exits_w')[0].innerText == '马车店' && $('button.cmd_click_room')[0].innerText == '骡马市') {
				go('s;sw;se;ne;se;s;e;e;e;ne;se;s;s;sw;sw;sw')
			} else if ($('button.cmd_click_exits_ne')[0] && $('button.cmd_click_exits_ne')[0].innerText == '骡马市' && $('button.cmd_click_room')[0].innerText == '天青原') {
				go('se;ne;se;s;e;e;e;ne;se;s;s;sw;sw;sw')
			} else {
				alert('请到#骡马市#中间或者#天青原#使用本功能')
			}
		} else {
			console.log('请到掩月城地图中使用')
		}
	}
	function tcf() {
		go("jh 2;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;n;n;n;n;n;w;w;n;n;n;")
	}
	function trzhang() {
		go("jh 2;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;n;n;n;n;n;w;w;s;s;s;w;look_npc changan_tangrenzhang")
	}
	function yml() {
		go('jh 2');
		goes("n", 27);
		goes("e", 6);
		go("event_1_95312623")
	}
	function dghh() {
		go('jh 2');
		goes('n', 29)
	}
	function ljs() {
		if (M < 33) {
			console.log("章节没解锁");
			return
		}
		go("jh 33;sw;sw;s;s;s;s;w;w;w;w;w;n;w;se;")
	}
	function oym() {
		if (M < 14) {
			console.log("章节没解锁");
			return
		}
		go("jh 14;w;n;n;n;n;ask tangmen_tangyun;ask tangmen_tangyun;ask tangmen_tangyun;s;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e;n;w;n;n;")
	}
	function lzs() {
		if (M < 20) {
			console.log("章节没解锁");
			return
		}
		go("jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;event_1_3723773;se;n;e;s;e;s;e;")
	}
	function ts() {
		if (M < 21) {
			console.log("章节没解锁");
			return
		}
		go("jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s;s;s;sw;nw;sw;sw;nw;nw;se;sw;")
	}
	function lhd() {
		go("nw;event_1_92817399;w;event_1_91110342;s;event_1_74276536;se;event_1_14726005;sw;event_1_66980486;nw;event_1_39972900;nw;event_1_61689122;w;event_1_19336706;s;eevent_1_30457951;sw;event_1_96023188;s;")
	}
	function wujinsy() {
		go("event_1_73460819;event_1_52335885;e;event_1_56082528;e;event_1_96610703;s;event_1_30829528;w;event_1_20919210;w;event_1_45322510;s;event_1_53681413;s;event_1_4732228;e;event_1_24529326;n;event_1_65787232;e;event_1_39859996;s;event_1_22071325;e;event_1_37824403;e;event_1_10669895;n;event_1_87685798;w;event_1_35949241;n;event_1_27708165;e;event_1_9805486;n;event_1_39703232;w;")
	}
	function dixiamigong() {
		var a = "e;e;s;w;w;s;e;e;s;w;w;w;n;n;n;n";
		var b = a.split(";");
		console.log(b + "--" + !i);
		if (!i) {
			var i = 0
		}
		var c = function() {
				clickbtn3("翻查");
				go(b[i]);
				i++
			}
		var d = function() {
				if (i < b.length) {
					c();
					setTimeout(d, 300)
				} else {
					return
				}
			}
		d()
	}
	function glz() {
		if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口") {
			alert("请位于 #侠客岛渡口# 位置再点 #高老者# 按钮！");
			return
		}
		go("e;ne;ne;ne;e;e;e;e;e;e;n;n;n;e;ne;nw;")
	}
	function xlsc() {
		if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "彩虹瀑布") {
			alert("请位于 #彩虹瀑布# 位置再点 #雪林深处# 按钮！");
			return
		}
		go("w;w;w;n;e;n;w;w;s;")
	}
	function cxl() {
		if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "彩虹瀑布") {
			alert("请位于 #彩虹瀑布# 位置再点 #雪林深处# 按钮！");
			return
		}
		go("w;n;e;e;n;se;")
	}
	function sbz() {
		if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口") {
			alert("请位于 #侠客岛渡口# 位置再点 #雪林深处# 按钮！");
			return
		}
		go("e;se;e;e;n;e;s;")
	}
	function zhuxi() {
		if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口") {
			alert("请位于 #侠客岛渡口# 位置再点 #朱熹# 按钮！");
			return
		}
		go("e;ne;ne;ne;e;e;e;e;e;e;n;n;n;w;w;")
	}
	function xyk() {
		if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口") {
			alert("请位于 #侠客岛渡口# 位置再点 #谢烟客# 按钮！");
			return
		}
		go("e;ne;ne;ne;e;e;e;e;e;e;n;e;e;ne;")
	}
	function smp() {
		go('jh 2;n;n;e;s;luoyang317_op1;go_hjs go;se;se;ne;w;n;;;^hjs_xl;$')
	}
	function hjs_xl() {
		console.log($('span.outtitle').last().text());
		if ($('span.outtitle').last().text().indexOf("青苔石阶") > -1) {
			go("ne;sw;^hjs_xl;$")
		} else if ($('span.outtitle').last().text().indexOf("榆叶林") > -1) {
			go("s;n;w;^hjs_xl;$")
		} else if ($('span.outtitle').last().text().indexOf("杭界大门") > -1) {
			go("n;ne;^hjs_xl;$")
		} else {
			console.log('快车已到站，乘客请下车')
		}
	}
	var cq;

	function shimenf5() {
		go('family_quest cancel go;family_quest')
	}
	function smfeiji() {
		cq = prompt("请输入想去的地点（请注意，本功能会中断师门连续次数，慎用，意外点错请清空地点或者点取消）", cq);
		if (!cq) {
			return
		}
		triggers.enableByCls("shimenf5");
		shimenf5()
	}
	function fb2_open() {
		go('home;fb 2;e;n;event_1_48728674;home;fb 2;e;s;event_1_41361248;home;fb 2;e;e;event_1_43484736')
	}
	function pt_walk() {
		go('jh 2');
		goes('n', 16);
		go('w;s;s;s;s;e;event_1_2215721;w')
	}
	function gotongling() {
		var a = prompt("请输入通灵次数", 10);
		go("jh 7;s;s;s;s;s;s;s;sw;w;event_1_83700396");
		for (var i = 0; i < a; i++) {
			go("event_1_83700396")
		}
		go_home()
	}
	function tongren() {
		go("clan zsdg enter;n;n;n;n;n")
	}
	function daozei() {
		go("jh 9;event_1_20960851")
	}
	function baituotuxi() {
		go('jh 21;n;n;n;n;e;e;e;e;e;e;e;s;s;event_1_66710076;s;e;ne;e;se;n;event_1_53430818;n;kill baituo_baojunzhushuai|s;s;nw;n;n;kill baituo_hujunzhushuai|s;s;se;e;e;e;kill baituo_yingjunzhushuai|w;w;w;nw;w;nw;event_1_89411813;kill baituo_xieli|home')
	}
	function dumo() {
		go("jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;w;nw;nw;event_1_70957287")
	}
	function dujie() {
		go('jh 13;e;s;s;w;w;w;event_1_38874360')
	}
	function tiexue() {
		if (M < 31) {
			return
		}
		go("jh 31;n;se;e;se;s;s;sw;se;se;e;nw;e;ne;n;ne;n;n;n;n;n;n;n;n;n;w;w;event_1_57281457;event_1_71997825");
		setTimeout(function() {
			go("se;e;e;e;e;event_1_94442590;event_1_85535721;")
		}, 5 * 60000)
	}
	function tianshanqixia() {
		setTimeout(QiJian1Func, 200)
	}
	function QiJian1Func() {
		if (M < 39) {
			return
		}
		go('jh 39;ne;e;n;ne;ne;n;ne;nw;ne;nw;event_1_17801939;^QiJian2Func;;$')
	}
	function QiJian2Func() {
		if (g_obj_map.get("msg_room") == undefined) {
			clearTimeout(bs_time);
			bs_time = setTimeout(QiJian2Func, 200)
		} else {
			var a = g_obj_map.get("msg_room").get("short").match(/[\u4e00-\u9fa5]/g).join("");
			console.log(a);
			if (a == "星星峡") {
				console.log("。");
				go('ne;ne;nw;nw')
			} else {
				clearTimeout(bs_time);
				bs_time = setTimeout(QiJian1Func, 200)
			}
		}
	}
	function go_intianjian() {
		go("jh 1;home");
		setTimeout(function() {
			var t = $('span.outtitle').last().text();
			if (t.indexOf('武林广场') > -1) {
				var w = '';
				var n = t.slice(4);
				for (var i = 0; i < n - 1; i++) {
					w += 'w;'
				}
				go(w + 'go_tianjiangu')
			} else {
				alert("请到跨服里面使用本功能")
			}
		}, 400)
	}
	function waizhuanswitch() {
		if (btnList["开外传"].innerText == '开外传') {
			waizhuan_open();
			console.log("功能开发中，现只支持外4部分功能")
		} else {
			waizhuan_close()
		}
	}
	function waizhuan_open() {
		triggers.enableByCls("waizhuan4");
		btnList["开外传"].innerText = '关外传';
		btnList["开外传"].style.borderStyle = 'inset'
	}
	function waizhuan_close() {
		triggers.disableByCls("waizhuan4");
		btnList["开外传"].innerText = '开外传';
		btnList["开外传"].style.borderStyle = 'outset'
	}
	triggers.newTrigger(/甄不恶说道：嗯，你来了。若要修习浣花七阵。/, function(m) {
		if ($('span.outtitle').last().text() == "廉贞剑阁") {
			go('ask tangmen_suliming')
		} else {
			go('jh 14;sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;ask tangmen_suliming')
		}
	}, "waizhuan4", "");
	triggers.newTrigger(/素厉铭说道：吾自幼喜观察飞鸟，蜀山之中珍奇鸟类无数/, function(m) {
		if ($('span.outtitle').last().text() == "廉贞剑阁") {
			go('items get_store /map/xingxiu/obj/yange;items get_store /map/xingxiu/obj/huiyan;give tangmen_suliming')
		} else {
			go('jh 14;sw;s;e;s;s;sw;sw;w;w;s;s;e;e;e;n;ne;e;items get_store /map/xingxiu/obj/yange;items get_store /map/xingxiu/obj/huiyan;give tangmen_suliming')
		}
	}, "waizhuan4", "");
	triggers.newTrigger(/(第二个题目也很简单，我听说有种长毛猫，长相讨喜，头圆脸扁|继素厉铭说道：多谢了，我的百鸟阁又可以多两种飞禽了)/, function(m) {
		go('jh 25;e;e;e;e;s;yell');
		triggers.enableByCls("waizhuan4-1")
	}, "waizhuan4", "");
	triggers.newTrigger(/老婆子说道：“到了，你们可以下船了。”/, function(m) {
		triggers.disableByCls("waizhuan4-1")
	}, "waizhuan4-1", "");
	triggers.disableByCls("waizhuan4");
	triggers.disableByCls("waizhuan4-1");

	function master_job() {
		cr.style.display = ""
	}
	var cr = createPop('主线');
	popList['主线'].innerHTML = '<div>请选择想完成的主线任务地图</div>';
	createPopButton('新号开始', "主线", startlj);
	createPopButton('拜唐门', "主线", baitangmen);
	createPopButton('学技能', "主线", readbook);

	function startlj() {
		go('ask start_zhongshanglaozhe;lookroom;fight start_mengmianren;shouze ok;fight start_mengmianren');
		triggers.enableByCls("startlj")
	}
	triggers.newTrigger(/蒙面人被你打败/, function(m) {
		triggers.disableByCls("startlj");
		go('lookroom;s;n;ask start_zhongshanglaozhe;lookroom;s;guanchaxuanya;tiaoxiaxuanya;e;w;qiguaiguozi;e;guanchashendiao;w;e;ask start_shendiao;')
	}, "startlj", "");
	triggers.disableByCls("startlj");

	function baitangmen() {
		go('home apprentice 唐门;learn dugong from tangmen_tangbai to 1;')
	}
	function readbook() {
		cs.style.display = ""
	}
	var cs = createPop('学技能');
	popList['学技能'].innerHTML = '<div>请选择你想要做什么</div>';
	createPopButton('请教50', '学技能', qingjiao);

	function qingjiao() {
		nextgo = function() {
			goes('event_1_23194100', 50);
			go_home()
		}
		go('jh 1;e;s;w;s;$')
	}
	createPopButton('论语101', '学技能', lunyu);

	function lunyu() {
		go('jh 1;e;s;w;s;buy /obj/book/lunyu_N_1 from snow_teacher;buy /obj/book/lunyu_N_10 from snow_teacher;buy /obj/book/lunyu_N_10 from snow_teacher;buy /obj/book/lunyu_N_10 from snow_teacher;buy /obj/book/lunyu_N_10 from snow_teacher;buy /obj/book/lunyu_N_10 from snow_teacher;home');
		goes('study lun yu', 51)
	}
	createPopButton('尚书151', '学技能', shangshu);

	function shangshu() {
		go('jh 5;n;n;n;n;n;e;n;n;n;buy /obj/book/shangshu_N_10 from yangzhou_yangzhou17;buy /obj/book/shangshu_N_10 from yangzhou_yangzhou17;buy /obj/book/shangshu_N_10 from yangzhou_yangzhou17;buy /obj/book/shangshu_N_10 from yangzhou_yangzhou17;buy /obj/book/shangshu_N_10 from yangzhou_yangzhou17;home');
		goes('study shang shu', 50)
	}
	createPopButton('庄子201', '学技能', zhuangzi);

	function zhuangzi() {
		go('jh 5;n;n;n;n;n;e;n;n;n;buy /obj/book/zhuangzi_N_10 from yangzhou_yangzhou17;buy /obj/book/zhuangzi_N_10 from yangzhou_yangzhou17;buy /obj/book/zhuangzi_N_10 from yangzhou_yangzhou17;buy /obj/book/zhuangzi_N_10 from yangzhou_yangzhou17;buy /obj/book/zhuangzi_N_10 from yangzhou_yangzhou17;home');
		goes('study zhuang zi', 50)
	}
	createPopButton('老子301', '学技能', laozi);

	function laozi() {
		go('jh 5;n;n;n;n;n;e;n;n;n;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;buy /obj/book/laozi_N_10 from yangzhou_yangzhou17;home');
		goes('study lao zi', 100)
	}
	createPopButton('春秋401', '学技能', chunqiu);

	function chunqiu() {
		go('jh 15;s;s;s;s;e;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;buy /obj/book/chunqiu_N_10 from qingcheng_teacher;home');
		goes('study chun qiu', 100)
	}
	createPopButton('周易501', '学技能', zhouyi);

	function zhouyi() {
		go('jh 15;s;s;s;s;e;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;buy /obj/book/zhouyi_N_10 from qingcheng_teacher;home');
		goes('study zhou yi', 100)
	}
	createPopButton('准备技能', '学技能', zhunbeijineng);

	function zhunbeijineng() {
		go('=500;enable unmap_all;enableskill enable unarmed tangmen-duzhang;enableskill enable sword tangshi-jian;enableskill enable force dugong;enableskill enable dodge taxue-wuhen;enable mapped_skills save go 1;=150;prev')
	}
	createPopButton('拜唐健', '学技能', baitangjian);

	function baitangjian() {
		goes('learn tangmen-xinfa from tangmen_tangbai to 10', 2);
		goes('learn tangshi-jian from tangmen_tangbai to 10', 14);
		go('apprentice tangmen_tangjian')
	}
	createPopButton('学唐健', '学技能', xuetangjian);

	function xuetangjian() {
		goes('learn dugong from tangmen_tangjian to 10;learn force from tangmen_tangjian to 10;learn tangmen-duzhang from tangmen_tangjian to 10;learn move from tangmen_tangjian to 10', 20)
	}
	createPopButton('拜唐怒', '学技能', baitangnu);

	function baitangnu() {
		goes('learn tangshi-jian from tangmen_tangjian to 10', 6);
		go('apprentice tangmen_tangyun')
	}
	createPopButton('学唐怒', '学技能', xuetangnu);

	function xuetangnu() {
		goes('learn force from tangmen_tangyun to 10', 10);
		goes('learn move from tangmen_tangyun to 10', 12);
		goes('learn dugong from tangmen_tangyun to 10', 16);
		goes('learn tangmen-duzhang from tangmen_tangyun to 10', 4);
		goes('learn unarmed from tangmen_tangyun to 10', 20);
		goes('learn parry from tangmen_tangyun to 10', 30)
	}
	createPopButton('拜唐风', '学技能', baitangfeng);

	function baitangfeng() {
		goes('learn taxue-wuhen from tangmen_tangyun to 10', 32);
		go('apprentice tangmen_tangfeng')
	}
	createPopButton('学唐风', '学技能', xuetangfeng);

	function xuetangfeng() {
		goes('learn force from tangmen_tangfeng to 10', 6);
		goes('learn move from tangmen_tangfeng to 10', 12);
		goes('learn dugong from tangmen_tangfeng to 10', 5);
		goes('learn tangmen-duzhang from tangmen_tangfeng to 10', 13);
		goes('learn taxue-wuhen from tangmen_tangfeng to 10', 9);
		goes('learn unarmed from tangmen_tangfeng to 10', 7);
		goes('learn parry from tangmen_tangfeng to 10', 10)
	}
	createPopButton('拜欧阳敏', '学技能', baiouyangmin);

	function baiouyangmin() {
		go('jh 14;w;n;n;n;n;ask tangmen_tangyun;ask tangmen_tangyun;s;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e;n;w;n;n;apprentice tangmen_madam;home')
	}
	createPopButton('学欧阳敏', '学技能', xueouyangmin);

	function xueouyangmin() {
		goes('learn wuying-dugong from tangmen_madam to 10', 50);
		goes('learn force from tangmen_madam to 10', 6);
		goes('learn move from tangmen_madam to 10', 14);
		goes('learn dugong from tangmen_madam to 10', 10);
		goes('learn tangmen-dujing from tangmen_madam to 10', 50);
		goes('learn tangmen-duzhang from tangmen_madam to 10', 14);
		goes('learn taxue-wuhen from tangmen_madam to 10', 10);
		goes('learn throwing from tangmen_madam to 10', 50);
		goes('learn unarmed from tangmen_madam to 10', 16);
		goes('learn parry from tangmen_madam to 10', 10);
		goes('learn baoyu-lihua from tangmen_madam to 10', 50);
		go('enableskill enable taxue-wuhen none')
	}
	createPopButton('雪亭go', '主线', xt_job);

	function xt_job() {
		runhit_open();
		go('jh 1;ask snow_waiter;ask snow_mercenary;e;fight snow_worker');
		triggers.enableByCls("zxjob")
	}
	createPopButton('洛阳go', '主线', ly_job);

	function ly_job() {
		runhit_open();
		go('jh 2;n;ask luoyang_luoyang18;n;kill luoyang_xiaotou');
		triggers.enableByCls("zxjob")
	}
	createPopButton('华山村', '主线', hsc_job);

	function hsc_job() {
		runhit_open();
		go('jh 3;ask huashancun_huashancun12;fight huashancun_huashancun12');
		triggers.enableByCls("zxjob")
	}
	createPopButton('华山go', '主线', hs_job);

	function hs_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 4;ask huashan_huashan14;fight huashan_huashan14|n;n;fight huashan_huashan2|n;n;fight huashan_huashan25|n;n;fight huashan_huashan26|n;n;fight huashan_huashan27|n;kill huashan_huashan24|n;fight huashan_huashan8|n;ask huashan_gao;n;n;n;ask huashan_lao;fight huashan_laon;n;fight huashan_huashan2|n;n;fight huashan_huashan25|n;n;fight huashan_huashan26|n;n;fight huashan_huashan27|n;kill huashan_huashan24|n;fight huashan_huashan8|n;ask huashan_gao;n;n;n;ask huashan_lao;fight huashan_lao')
	}
	createPopButton('扬州go', '主线', yz_job);

	function yz_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 5;ask yangzhou_yangzhou16;n;n;n;ask yangzhou_yangzhou19;n;w;ask yangzhou_xiaofeizei;fight yangzhou_xiaofeizei')
	}
	createPopButton('丐帮go', '主线', gb_job);

	function gb_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 6;event_1_98623439;kill gaibang_haozi')
	}
	createPopButton('乔阴go', '主线', qyx_job);

	function qyx_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 7;event_1_57435070')
	}
	createPopButton('峨眉go', '主线', ems_job);

	function ems_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 8;w;nw;n;n;auto_equip off;n;auto_equip on;n;e;e;n;n;e;fight emei_shoushan|n;fight emei_wenyue;fight emei_wenxin|n;fight emei_xunshan|n;n;w;n;n;n;n;n;n;n;n;n;fight emei_hufa|ne;ne;fight emei_hufa2|n;ask houshan_miejue')
	}
	createPopButton('恒山go', '主线', hengs_job);

	function hengs_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 9;fight henshan_henshan10|n;fight henshan_henshan1|n;fight henshan_henshan3|n;n;kill henshan_henshan12')
	}
	triggers.newTrigger(/^石高达：竟敢惹我，我这就找人来收拾你！/, function(m) {
		go('n;n;n;e;e;kill henshan_heiyiren');
		runhit_open()
	}, "zxjob", "");
	createPopButton('武当go', '主线', wds_job);

	function wds_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 10;fight wudang_tufeitou|w;n;fight wudang_tufei2|n;w;w;ask wudang_xiaosong;fight wudang_xiaosong|w;n;n;n;n;n;ask wudang_guxu;fight wudang_guxu|n;fight wudang_yu')
	}
	createPopButton('晚月go', '主线', wyz_job);

	function wyz_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 11;e;e;s;sw;fight latemoon_lm_guard|se;w;fight dancer_master')
	}
	createPopButton('水烟go', '主线', syg_job);

	function syg_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 12;n;n;n;kill waterfog_guard|w;n;nw;e;kill waterfog_watcher|w;se;s;e;n;fight fighter_master')
	}
	createPopButton('少林go', '主线', sl_job);

	function sl_job() {
		runhit_open();
		go(';;;;jh 13;n;n;n;n;n;n;n;n;n;n;e;fight shaolin_cheng-guan|s;s;s;s;fight shaolin_cheng-jian|s;s;fight shaolin_cheng-ji|s;s;fight shaolin_cheng-he|n;fight shaolin_cheng-mie|n;n;n;n;fight shaolin_cheng-jing|n;fight shaolin_cheng-ming|n;n;w;w;s;s;s;s;s;s;fight shaolin_cheng-ling|s;s;fight shaolin_cheng-shang|n;n;n;n;n;fight shaolin_cheng-shi|n;fight shaolin_cheng-si|n;n;fight shaolin_cheng-xin|s;fight shaolin_cheng-yi|s;s;s;s;fight shaolin_cheng-xin2|s;s;fight shaolin_cheng-yu|n;n;n;n;n;n;n;e;n;n;kill shaolin_cheng-xing')
	}
	createPopButton('唐门go', '主线', tm_job);

	function tm_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 14;w;n;n;n;ask tangmen_tangbing;fight tangmen_tangbing|e;e;n;fight tangmen_tangjian|s;w;w;w;w;s;fight tangmen_tangbai|n;e;e;e;e;n;n;fight tangmen_tangzhu|fight tangmen_tangmei|s;e;fight tangmen_tanghong|w;s;w;w;w;w;w;n;fight tangmen_tangfang|s;s;fight tangmen_tangyuan')
	}
	createPopButton('青城go', '主线', qcs_job);

	function qcs_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 15;n;nw;w;nw;w;s;s;fight qingcheng_dizi1|s;auto_equip off;w;auto_equip on;w;fight qingcheng_renying|w;ask qingcheng_masteryu;e;e;e;n;n;n;e;se;e;se;s;s;s;s;s;s;s;w;ask qingcheng_mudaoren')
	}
	createPopButton('逍遥go', '主线', xyl_job);

	function xyl_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 16;s;s;s;s;e;e;s;w;ask xiaoyao_mengmianr;kill xiaoyao_mengmianr|w;ask xiaoyao_suxinghe;fight xiaoyao_suxinghe|e;e;e;n;n;e')
	}
	createPopButton('开封go', '主线', kf_job);

	function kf_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 17;n;e;fight kaifeng_kaifeng19|s;ask kaifeng_kaifeng3;n;w;w;ask kaifeng_kaifeng2;e;n;n;n;n;e;n;n;ask kaifeng_kaifeng28;n;event_1_27702191;ask kaifeng_kaifeng30;fight kaifeng_kaifeng30|w;s;s;s;w;s;s;s;s;e;s;ask kaifeng_kaifeng3')
	}
	createPopButton('明教go', '主线', mj_job);

	function mj_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;n;n;n;n;n;ask mingjiao_zhang;s;s;s;s;s;s;fight mingjiao_weiyixiao|n;n;n;n;n;n;ask mingjiao_zhang;s;w;fight mingjiao_longwang|e;n;ask mingjiao_zhang;s;e;fight mingjiao_shiwang|w;n;ask mingjiao_zhang;s;fight mingjiao_yingwang')
	}
	createPopButton('全真go', '主线', qzj_job);

	function qzj_job() {
		runhit_open();
		go('jh 19;s;s;s;sw;s;e;n;nw;n;n;n;n;n;e;e;e;fight quanzhen_sun|w;w;w;n;fight quanzhen_ma|n;fight quanzhen_qiu|n;n;fight quanzhen_wangchuy|e;n;n;fight quanzhen_tan|e;fight quanzhen_liu|w;w;w;w;w;s;fight quanzhen_hao')
	}
	createPopButton('古墓go', '主线', gm_job);

	function gm_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;ask gumu_longnv;e')
	}
	createPopButton('白驼go', '主线', bts_job);

	function bts_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 21;nw;w;w;nw;e;ask baituo_woman;w;se;e;e;ne;n;n;fight baituo_shanzei1|ne;fight baituo_shanzei2|n;n;fight baituo_shanzei3|w;ask baituo_jinhua;e;s;s;sw;s;s;sw;w;w;nw;n;n;n;n')
	}
	createPopButton('嵩山go', '主线', ss_job);

	function ss_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 22;n;n;w;n;n;n;n;n;e;n;n;n;fight songshan_songshan22|n;fight songshan_songshan23|n;fight songshan_songshan24|n;fight songshan_songshan27|n;fight songshan_songshan29|n')
	}
	createPopButton('梅庄go', '主线', hmz_job);

	function hmz_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 23;n;n;n;n;fight meizhuang_meizhuang13|n;n;n;e;s;fight meizhuang_meizhuang4|n;w;n;n;n;e;fight meizhuang_meizhuang11|w;w;n;fight meizhuang_meizhuang10|s;e;s;s;e;n;fight meizhuang_meizhuang8')
	}
	createPopButton('泰山go', '主线', ts_job);

	function ts_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 24;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;ask taishan_taishan17;fight taishan_taishan17|s;s;s;s;s;w;event_1_87037293')
	}
	createPopButton('大旗go', '主线', dqm_job);

	function dqm_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 25;e;e;e;e;s;yell')
	}
	createPopButton('大昭go', '主线', dzs_job);

	function dzs_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 26;w;w;w;w;w;w;w;w;w;w;ask lama_master;e;e;e;e;n;n;e');
		triggers.enableByCls("zxjob_dzs")
	}
	createPopButton('魔教go', '主线', dzs_job);

	function dzs_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 27;ne;nw;w;nw;w;w');
		triggers.enableByCls("zxjob_dzs")
	}
	createPopButton('星宿go', '主线', xxh_job);

	function xxh_job() {
		runhit_open();
		go('jh 28;ask xingxiu_trader;n;n;fight xingxiu_shihou|n;fight xingxiu_zhaixing|n;nw;w;ask xingxiu_caihua;fight xingxiu_caihua|e;se;n')
	}
	createPopButton('茅山go', '主线', ms_job);

	function ms_job() {
		runhit_open();
		triggers.enableByCls("maoshan_pashan");
		Q = 2;
		nextdo = function() {
			go('n;n;n;n;n;n;n;event_1_98579273;n;ask taoist_taolord;s;fight taoist_zhanglao1|n;fight taoist_taolord|s;s;s;s;s;s;s;s;s;s');
			triggers.enableByCls("maoshan_pashan");
			Q = 1;
			nextdo = function() {
				go('n')
			}
		};
		go('jh 29;n;n;n;n;$')
	}
	createPopButton('桃花go', '主线', thd_job);

	function thd_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 30;fight taohua_lushengf|n;n;n;n;n;n;n;n;n;n;n;n;n;n;ask taohua_huang')
	}
	createPopButton('铁雪go', '主线', txsz_job);

	function txsz_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 31;n;n;n;w;w;w;w;n;fight resort_guard|n;fight resort_xueyuan|n;ask resort_master;fight resort_master2|n;fight resort_w_guy')
	}
	createPopButton('慕容go', '主线', mrsz_job);

	function mrsz_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 32;n;n;se;n;n;n;n;w;w;n;ask murong_murongfu;fight murong_murongfu|s;w;n;event_1_72278818;event_1_35141481;event_1_35141481;event_1_35141481;event_1_35141481;event_1_35141481;w;ask murong_murongbo')
	}
	createPopButton('大理go', '主线', dl_job);

	function dl_job() {
		runhit_open();
		triggers.enableByCls("zxjob");
		go('jh 33;sw;sw;s;s;s;s;s;e;n;fight dali_zhuwanli|se;e;e;n;n;n;ne;n;ask dali_duanzc;s;sw;s;s;s;w;w;nw;s;w;s;s;s;s;e;ne;n;n;e;e;e;ne;ask dali_duanyu;nw;w;w;n;ask dali_kurong;fight dali_kurong|s;w;w;w;nw;w;w;w;w;s;s;s;s;s;s;s;s;s;s;ask dali_yideng')
	}
	triggers.newTrigger(/关卡成功通关！/, function(m) {
		go('home');
		triggers.disableByCls("zxjob")
	}, "zxjob", "");
	triggers.newTrigger(/^黄岛主：还有点本事。我那几个弟子，我是很不放心。我看《九阴真经摹本》就是他们偷去了。你去问问我的大弟子曲三。/, function(m) {
		go('s;s;s;s;e;e;n;ask taohua_qulingf;fight taohua_qulingf|s;w;w;n;n;n;n;ask taohua_huang');
		runhit_open()
	}, "zxjob", "");
	triggers.newTrigger(/这儿有：(.*)/, function(m) {
		if (m[1].indexOf('卜一刀') > -1) {
			triggers.disableByCls("zxjob_dzs");
			go('kill guanwai_puying|~;;@卜一刀的尸体')
		}
		if (m[1].indexOf('船夫') > -1) {
			triggers.disableByCls("zxjob_dzs");
			go('kill heimuya_shaogong|~;;@船夫的尸体')
		}
	}, "zxjob_dzs", "");
	triggers.disableByCls("zxjob_dzs");
	triggers.newTrigger(/^你从(.*)里搜出一把弯刀。/, function(m) {
		go('w;s;s;w;w;w;w;give lama_master;fight lama_master')
	}, "zxjob", "");
	triggers.newTrigger(/^你从(.*)里搜出一块日月神教腰牌。/, function(m) {
		go('yell')
	}, "zxjob", "");
	triggers.newTrigger(/^艄公将船靠岸，喊道：到了！/, function(m) {
		go('w;nw;n;n;n;n;n;n;n;w;n;n;n;n;n;n;n;n;n;n;yell')
	}, "zxjob", "");
	triggers.newTrigger(/^终于到了!/, function(m) {
		go('n;n;n;n;n;e;ask heimuya_jianqiankai;w;n;ne;fight heimuya_wangcheng|sw;nw;fight heimuya_tongbaixiong|se;w;n;fight heimuya_shangguanyun|s;ne;fight heimuya_sangsanniang|ne;se;fight heimuya_luolie|nw;sw;fight heimuya_jiabu|ne;w;fight heimuya_baodachu|e;nw;fight heimuya_getingxiang')
	}, "zxjob", "");
	triggers.newTrigger(/^魔教有十大长老，可去一一诛之！/, function(m) {
		go('se;e;n;n;n;n;n;w;w;w;w;w;fight heimuya_zhaohe|e;fight heimuya_zhangchengyun|e;fight heimuya_zhangchengfeng|e;fight heimuya_quyang|e;fight heimuya_huaxiangrong|e;e;fight heimuya_dugufeng|e;fight heimuya_yangyanqing|e;fight heimuya_fansong|e;fight heimuya_juling|e;fight heimuya_chutong|w;w;w;w;w;n;ask heimuya_yanglianting|n;event_1_57107759;e;e;n;w')
	}, "zxjob", "");
	triggers.newTrigger(/^灵空：其实葛伦大师喜欢喝酒，他常偷偷去迎梅客栈喝酒，你去问问。/, function(m) {
		go('e;e;e;e;s;e;ask guanwai_waiter;w;n;w;w;w;w;ask lama_master')
	}, "zxjob", "");
	triggers.newTrigger(/^灵空说道：(这儿就是大昭寺，你有何贵干？|我佛无上……)/, function(m) {
		go('ask lama_master')
	}, "zxjob", "");
	triggers.newTrigger(/^灵空说道：葛伦师傅在幻境之中，你想去见他？/, function(m) {
		go('event_1_91837538;ask lama_gelun;s')
	}, "zxjob", "");
	triggers.newTrigger(/^老婆子说道：“到了，你们可以下船了。”/, function(m) {
		go('e;ne;se;e;e;e;e;ask tieflag_master2;fight tieflag_master2|w;w;w;w;nw;sw;w;s;e;event_1_81629028;ask tieflag_master;fight tieflag_master')
	}, "zxjob", "");
	triggers.newTrigger(/^渔船还没有达到这儿，等等吧。/, function(m) {
		setTimeout(function() {
			go('yell')
		}, 3000)
	}, "zxjob", "");
	triggers.newTrigger(/^铁掌门：如要镇压嵩山派，须得夜皇出山，你在这个洞穴中可以找到他。/, function(m) {
		go('s;e;n;w;w;ask tieflag_yedi')
	}, "zxjob", "");
	triggers.newTrigger(/^黑衣密探：既然你打败了我……也不要问我是谁。/, function(m) {
		go('e;ask taishan_taishan9')
	}, "zxjob", "");
	triggers.newTrigger(/^苦力道：(既然你打败了我，你就过去吧！|武艺过人，甘拜下风，我就放你过去吧！|果然厉害！你可以过去了。)/, function(m) {
		go('n;e;give snow_guard;home')
	}, "zxjob", "");
	triggers.newTrigger(/^小偷往北边逃跑了。/, function(m) {
		go('n;kill luoyang_xiaotou')
	}, "zxjob", "");
	triggers.newTrigger(/^小偷往东边逃跑了。/, function(m) {
		go('e;kill luoyang_xiaotou')
	}, "zxjob", "");
	triggers.newTrigger(/^小偷往南边逃跑了。/, function(m) {
		go('fight luoyang_luoyang27')
	}, "zxjob", "");
	triggers.newTrigger(/^金刀门弟子道：(既然你打败了我，你就过去吧！|武艺过人，甘拜下风，我就放你过去吧！|果然厉害！你可以过去了。)/, function(m) {
		go('s;kill luoyang_xiaotou')
	}, "zxjob", "");
	triggers.newTrigger(/^泼皮：啊……英雄饶命……/, function(m) {
		nextdo = function() {
			go('n;event_1_38583676;s;s;fight huashancun_popitouzi')
		};
		checkbusy()
	}, "zxjob", "");
	triggers.newTrigger(/^泼皮头子道：(既然你打败了我，你就过去吧！|武艺过人，甘拜下风，我就放你过去吧！|果然厉害！你可以过去了。)/, function(m) {
		go('s;fight huashancun_huashancun1')
	}, "zxjob", "");
	triggers.newTrigger(/^村民道：(既然你打败了我，你就过去吧！|武艺过人，甘拜下风，我就放你过去吧！|果然厉害！你可以过去了。)/, function(m) {
		go('w;give huashancun_huashancun6')
	}, "zxjob", "");
	triggers.newTrigger(/^劳师兄：“啊呀~英雄饶命。紫霞秘籍被我藏在厨房里了。”/, function(m) {
		go('s;w;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725')
	}, "zxjob", "");
	triggers.newTrigger(/^既然已经找到了紫霞秘籍，可去找一下岳掌门说明一下情况。/, function(m) {
		go('e;s;ask huashan_yue')
	}, "zxjob", "");
	triggers.newTrigger(/^小飞贼：饶命……昨晚盗取钱庄的是我大哥，他现在还在银库中呢！/, function(m) {
		go('ask yangzhou_yangzhou3;yangzhou16_op1;fight yangzhou_yangzhou18')
	}, "zxjob", "");
	triggers.newTrigger(/^飞贼叫道：英雄饶了俺的小命吧，这都是黑狗子叫俺干的……/, function(m) {
		go('e;e;s;ask yangzhou_yangzhou19;fight yangzhou_yangzhou19')
	}, "zxjob", "");
	triggers.newTrigger(/^黑狗子：这扬州城里的小混混和小流氓可都是我的手下/, function(m) {
		go('n;n;n;n;n;n;e;kill yangzhou_yangzhou24')
	}, "zxjob", "");
	triggers.newTrigger(/^小混混死了。/, function(m) {
		nextdo = function() {
			go('w;s;s;s;kill yangzhou_yangzhou28')
		};
		checkbusy()
	}, "zxjob", "");
	triggers.newTrigger(/^你心想：这盗取银库的案子破了，我去告知一下官兵。/, function(m) {
		nextdo = function() {
			go('s;s;s;s;s;s;ask yangzhou_yangzhou16')
		};
		checkbusy()
	}, "zxjob", "");
	triggers.newTrigger(/^东边的暗道里又有耗子的叫声。/, function(m) {
		go('ne;kill gaibang_haozi')
	}, "zxjob", "");
	triggers.newTrigger(/^东北边传来耗子的声响/, function(m) {
		go('ne;ne;kill gaibang_haozi')
	}, "zxjob", "");
	triggers.newTrigger(/^暗道中还有耗子没有杀完/, function(m) {
		go('ne;kill gaibang_haozi;sw;sw;n;kill gaibang_haozi')
	}, "zxjob", "");
	triggers.newTrigger(/^一只大耗子往东北边跑走了/, function(m) {
		go('ne;ne;event_1_97428251;kill gaibang_haozi')
	}, "zxjob", "");
	triggers.newTrigger(/^你身上没有黑狗血。据说华山村里有黑狗。/, function(m) {
		go('jh 3;s;s;s;kill huashancun_heigou')
	}, "zxjob", "");
	triggers.newTrigger(/^你杀死了黑狗，得到一碗黑狗血。/, function(m) {
		go('jh 7;event_1_57435070;kill choyin_ghost')
	}, "zxjob", "");
	triggers.newTrigger(/^你将黑狗血尽力泼出……竟然可以看到了平日里看不到的东西了……/, function(m) {
		go('kill choyin_ghost')
	}, "zxjob", "");
	triggers.newTrigger(/^现在可以去树王坟内部杀掉朦胧鬼影/, function(m) {
		go('s;s;s;s;event_1_65599392;kill choyin_shadow')
	}, "zxjob", "");
	triggers.newTrigger(/^很好，现在可以去街道杀死琵琶鬼/, function(m) {
		go('ne;s;s;s;sw;;kill choyin_p_ghost')
	}, "zxjob", "");
	triggers.newTrigger(/^你心想：事情办好了，我去回一下农家妇女吧。/, function(m) {
		nextdo = function() {
			go('s;s;s;s;e;ask baituo_woman')
		}
		checkbusy()
	}, "zxjob", "");
	triggers.disableByCls("zxjob");

	function side_job() {
		ct.style.display = ""
	}
	var ct = createPop('支线');
	popList['支线'].innerHTML = '<div>请选择想完成的支线任务</div>';
	createPopButton('雪亭剑客', '支线', xtjk);

	function xtjk() {
		runhit_open();
		go('jh 1;e;s;e;ne;ne;ask snow_mengmianjianke;jh 5;n;n;w;ask yangzhou_yangzhou25;fight yangzhou_yangzhou25|jh 1;e;s;e;ne;ne;ask snow_mengmianjianke;fight snow_mengmianjianke|jh 1;e;n;n;n;w;buy /map/snow/obj/qiannianlingzhi_N_10 from snow_herbalist;buy /map/snow/obj/qiannianlingzhi_N_10 from snow_herbalist;jh 5;n;n;w;ask yangzhou_yangzhou25;give yangzhou_yangzhou25;ask yangzhou_yangzhou25;home')
	}
	createPopButton('洛阳游客', '支线', lyyk);

	function lyyk() {
		runhit_open();
		go('jh 2;n;n;n;n;n;e;e;n;ask luoyang_luoyang_fb6;ask luoyang_luoyang_fb6;s;w;w;n;n;n;ask luoyang_luoyang22;ask luoyang_luoyang22;n;e;n;n;ask luoyang_luoyang2;ask luoyang_luoyang2;n;kill luoyang_canjianloushouling|s;s;s;w;s;give luoyang_luoyang22;home')
	}
	createPopButton('华山村民', '支线', hscm);

	function hscm() {
		runhit_open();
		triggers.enableByCls("zhjob");
		go('jh 3;s;s;ask huashancun_huashancun1;ask huashancun_huashancun1;ask huashancun_huashancun1;s;s;s;e;ask huashancun_huashancun8;ask huashancun_huashancun8;w;n;huashancun15_op1;event_1_46902878;kill huashancun_cangjianloushashou')
	}
	triggers.newTrigger(/^你从(.*)里搜出一个藏剑楼吊坠。/, function(m) {
		triggers.disableByCls("zhjob");
		go('w;w;s;nw;n;n;n;w;give huashancun_huashancun_fb9;ask huashancun_gaibangdizi;jh 6;event_1_98623439;ne;n;fight huashancun_cangjianloushouling|jh 3;s;s;s;s;s;e;ask huashancun_huashancun8;home')
	}, "zhjob", "");
	createPopButton('华山尼姑', '支线', hsng);

	function hsng() {
		triggers.enableByCls("zhjob");
		runhit_open();
		go('jh 4;n;n;n;n;n;n;n;n;n;n;n;n;e;s;s;ask huashan_huashan12;n;n;w;ask huashan_huashan5;ask huashan_huashan5;e;s;ask huashan_huashan21;n;w;n;get_silver;ask huashan_ning;s;s;s;s;s;e;n;n;w;w;event_1_26473707;fight huashan_cangjianloucike|e;e;e;s;s;w;n;n;ask huashan_yue;ask huashan_yue;s;s;e;n;n;n;e;s;event_1_11292200;kill huashan_cangjianloucike2')
	}
	triggers.newTrigger(/^你杀死了藏剑楼刺客/, function(m) {
		triggers.disableByCls("zhjob");
		go('jh 4;n;n;n;n;n;n;n;event_1_91604710;s;s;s;w;get_silver;kill huashan_cangjianloucike3')
	}, "zhjob", "");
	triggers.newTrigger(/^你杀死了另一个藏剑楼刺客/, function(m) {
		triggers.disableByCls("zhjob");
		go('jh 4;n;n;n;n;n;n;n;n;n;n;n;ask huashan_yue;home')
	}, "zhjob", "");
	createPopButton('扬州顽童', '支线', yzwt);

	function yzwt() {
		runhit_open();
		triggers.enableByCls("zhjob");
		go('jh 5;n;n;n;n;n;n;n;n;w;w;ask yangzhou_yangzhou13;ask yangzhou_yangzhou13;give yangzhou_yangzhou13;e;e;s;s;s;e;n;w;n;n;n;e;n;n;event_1_89774889;event_1_27210425')
	}
	triggers.newTrigger(/^这里发现一张纸条，上面写着“天泣有可能藏于扬州某处。”/, function(m) {
		go('jh 5;n;n;n;n;n;w;w;n;n;n;get_silver;ask yangzhou_chuxiongba;ask yangzhou_chuxiongba')
	}, "zhjob", "");
	triggers.newTrigger(/^楚雄霸说道：你也是前来寻找绝世奇剑天泣？/, function(m) {
		go('jh 5;n;n;n;e;n;n;ask yangzhou_yangzhou_fb4;ask yangzhou_yangzhou_fb4;ask yangzhou_yangzhou_fb4;ask yangzhou_yangzhou_fb4')
	}, "zhjob", "");
	triggers.newTrigger(/^方不为说道：来者停步，是要学武还是踢馆？/, function(m) {
		triggers.disableByCls("zhjob");
		go('fight yangzhou_yangzhou_fb4|n;n;ask yangzhou_yangzhou_fb6;ask yangzhou_yangzhou_fb6;fight yangzhou_yangzhou_fb6|jh 5;n;n;n;n;n;n;w;ask yangzhou_yangzhou21')
	}, "zhjob", "");
	createPopButton('丐帮不净', '支线', gbbj);

	function gbbj() {
		runhit_open();
		go('jh 6;event_1_98623439;ne;n;ne;ne;ask gaibang_he-bj;ask gaibang_he-bj;fight gaibang_he-bj|ne;event_1_97428251;ask gaibang_yu-hx;ask gaibang_yu-hx;jh 33;sw;sw;s;s;s;s;s;s;s;e;buy /map/gaibang/obj/shaoji from dali_xiaoer2;jh 2;n;n;n;n;n;e;n;op1;ask gaibang_hong;ask gaibang_hong;give gaibang_hong;jh 6;event_1_98623439;ne;ne;ne;event_1_16841370;kill gaibang_cangjianloutanzi|jh 2;n;n;n;n;n;e;n;op1;ask gaibang_hong;ask gaibang_hong;home')
	}
	triggers.disableByCls("zhjob");
	var cu, fqxname = '',
		dqx_popbk = createPop('打奇侠');
	popList['打奇侠'].innerHTML = '<div>请选择想比试的奇侠</div>';
	createPopButton("郭济", "打奇侠", function() {
		fqxname = "郭济";
		dodqxfunc()
	});
	createPopButton("步惊鸿", "打奇侠", function() {
		fqxname = "步惊鸿";
		dodqxfunc()
	});
	createPopButton("浪唤雨", "打奇侠", function() {
		fqxname = "浪唤雨";
		dodqxfunc()
	});
	createPopButton("火云邪神", "打奇侠", function() {
		fqxname = "火云邪神";
		dodqxfunc()
	});
	createPopButton("逆风舞", "打奇侠", function() {
		fqxname = "逆风舞";
		dodqxfunc()
	});
	createPopButton("王蓉", "打奇侠", function() {
		fqxname = "王蓉";
		dodqxfunc()
	});
	createPopButton("风南", "打奇侠", function() {
		fqxname = "风南";
		dodqxfunc()
	});
	createPopButton("狐苍雁", "打奇侠", function() {
		fqxname = "狐苍雁";
		dodqxfunc()
	});
	createPopButton("李宇飞", "打奇侠", function() {
		fqxname = "李宇飞";
		dodqxfunc()
	});
	createPopButton("庞统", "打奇侠", function() {
		fqxname = "庞统";
		dodqxfunc()
	});
	createPopButton("风行骓", "打奇侠", function() {
		fqxname = "风行骓";
		dodqxfunc()
	});
	createPopButton("吴缜", "打奇侠", function() {
		fqxname = "吴缜";
		dodqxfunc()
	});
	createPopButton("护竺", "打奇侠", function() {
		fqxname = "护竺";
		dodqxfunc()
	});
	createPopButton("玄月研", "打奇侠", function() {
		fqxname = "玄月研";
		dodqxfunc()
	});
	createPopButton("狼居胥", "打奇侠", function() {
		fqxname = "狼居胥";
		dodqxfunc()
	});
	createPopButton("烈九州", "打奇侠", function() {
		fqxname = "烈九州";
		dodqxfunc()
	});
	createPopButton("穆妙羽", "打奇侠", function() {
		fqxname = "穆妙羽";
		dodqxfunc()
	});
	createPopButton("宇文无敌", "打奇侠", function() {
		fqxname = "宇文无敌";
		dodqxfunc()
	});
	createPopButton("李玄霸", "打奇侠", function() {
		fqxname = "李玄霸";
		dodqxfunc()
	});
	createPopButton("八部龙将", "打奇侠", function() {
		fqxname = "八部龙将";
		dodqxfunc()
	});
	createPopButton("风无痕", "打奇侠", function() {
		fqxname = "风无痕";
		dodqxfunc()
	});
	createPopButton("厉沧若", "打奇侠", function() {
		fqxname = "厉沧若";
		dodqxfunc()
	});
	createPopButton("夏岳卿", "打奇侠", function() {
		fqxname = "夏岳卿";
		dodqxfunc()
	});
	createPopButton("妙无心", "打奇侠", function() {
		fqxname = "妙无心";
		dodqxfunc()
	});
	createPopButton("巫夜姬", "打奇侠", function() {
		fqxname = "巫夜姬";
		dodqxfunc()
	});

	function dodqxfunc() {
		if (userqu != 21) {
			getqixiacode();
			dqx_popbk.style.display = 'none';
			setTimeout(function() {
				clickButton('find_task_road qixia ' + qixiaCode[fqxname])
			}, 400);
			clearInterval(cu);
			cu = setInterval(fightqx, 1500);
			btnList['打奇侠'].innerText = '停比试'
		} else {
			alert("抱歉，你所在的区暂不开放打奇侠功能")
		}
	}
	function dqxfunc() {
		dqx_popbk.style.display = "";
		clearInterval(cu)
	}
	function fightqx() {
		if (!is_fighting) {
			console.log("正在比试奇侠一次");
			clickButton('golook_room');
			setTimeout(function() {
				setdonpc(fqxname, '比试')
			}, 300)
		}
	}
	var cv = "野猪";

	function bsgfunc() {
		if (btnList["比试某"].innerText == '比试某') {
			cv = prompt('请输入你想比试(切磋)的某某npc或者玩家', cv);
			console.log("开始比试" + cv);
			btnList["比试某"].innerText = '停比试';
			bishi()
		} else {
			console.log("停止比试目标!");
			btnList["比试某"].innerText = '比试某';
			clearInterval(bs_time)
		}
	}
	function bishi() {
		if ($('span:contains(胜利)').text().slice(-3) == '胜利！') {
			clickButton('prev_combat');
			if (btnList["比试某"].innerText == '停比试') {
				go('fight?' + cv);
				clearTimeout(bs_time);
				bs_time = setTimeout(bishi, 1800)
			} else {
				console.log('停止比试某！');
				clearTimeout(bs_time);
				return
			}
		} else {
			if (is_fighting) {
				clearTimeout(bs_time);
				bs_time = setTimeout(bishi, 1000)
			} else if (!is_fighting) {
				go('fight?' + cv);
				clearTimeout(bs_time);
				bs_time = setTimeout(bishi, 500)
			}
		}
	}
	var cw = '',
		idset_popbk = createPop('设id');
	popList['设id'].innerHTML = '<div>请设定你要叫杀的怪物id</div>';
	createPopButton("手动输入", "设id", id_input);
	createPopButton("葛伦", "设id", id_gl);
	createPopButton("欧阳敏", "设id", id_oym);
	createPopButton("张矮子", "设id", id_zaz);
	createPopButton("龙神之灵", "设id", id_lszl);
	createPopButton("仇老板", "设id", id_clb);
	createPopButton("霍骠姚", "设id", id_hpy);
	createPopButton("孔翎", "设id", id_kl);
	createPopButton("天梵魔煞", "设id", id_tfms);
	createPopButton("天梵妖帝", "设id", id_tfyd);
	createPopButton("天梵鬼王", "设id", id_tfgw);
	createPopButton("古怪精灵", "设id", id_ggjl);
	createPopButton("黛龙王", "设id", id_dlw);
	createPopButton("天梵杀手", "设id", id_tfss);
	createPopButton("瑷伦", "设id", id_al);
	createPopButton("暗夜煞宗", "设id", id_aysz);
	createPopButton("千夜杀手", "设id", id_qyss);
	createPopButton("玄衣刺客", "设id", id_xyck);
	createPopButton("络少心魔", "设id", id_lsxm);
	createPopButton("天梁剑灵", "设id", id_tljl);
	createPopButton("破军剑灵", "设id", id_pjjl);
	createPopButton("巨门剑灵", "设id", id_jmjl);
	createPopButton("十方旗主", "设id", id_sfqz);
	createPopButton("百毒巫领", "设id", id_bdwl);
	createPopButton("兽蛮人", "设id", id_smr);
	createPopButton("千夜长老", "设id", id_qyzl);
	createPopButton("常一恶", "设id", id_cye);
	createPopButton("招魂师", "设id", id_zhs);
	createPopButton("程不为", "设id", id_cbw);
	createPopButton("卜一刀", "设id", id_byd);
	createPopButton("林忌", "设id", id_lj);
	createPopButton("独孤须臾", "设id", id_dgxy);
	createPopButton("独孤皇后", "设id", id_dghh);
	createPopButton("捕快统领", "设id", id_bktl);
	createPopButton("千夜暗使", "设id", id_qyas);
	createPopButton("司马墉", "设id", id_smy);
	createPopButton("毒王杀手", "设id", id_dwss);
	createPopButton("嵬名元昊", "设id", id_wmyh);
	createPopButton("元昊玄素", "设id", id_yhxs);
	createPopButton("杨玄素", "设id", id_yxs);

	function idsetfunc() {
		if (btnList['设id'].innerText == '设id') {
			idset_popbk.style.display = ""
		} else {
			btnList['设id'].innerText = '设id'
		}
	}
	var cx = 'qingcheng_longshenzhiling';

	function id_input() {
		cx = prompt("请设置需要叫杀的npc的id（看得见怪物按钮的直接输按钮中文名，看不见输英文id）", cx);
		console.log('当前设置的npcid为：' + cx)
	}
	function id_gl() {
		cx = "guanwai_gelunfenshen";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_oym() {
		cx = "tangmen_ouyangminhuashen";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_zaz() {
		cx = "heimuya_zhangaizi";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_lszl() {
		cx = "qingcheng_longshenzhiling";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_clb() {
		cx = "changan_choulaobanfenshen";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_hpy() {
		cx = "changan_huobiaoyaojiashen";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_kl() {
		cx = "taishan_kongling";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_tfms() {
		cx = "jueqinggu_tianfanmosha";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_tfyd() {
		cx = "jueqinggu_tianfanyaodi";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_tfgw() {
		cx = "jueqinggu_tianfanguiwang";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_ggjl() {
		cx = "changan_guguaijingling";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_dlw() {
		cx = "mingjiao_dailongwang";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_tfss() {
		cx = "mingjiao_fantianshashou";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_al() {
		cx = "latemoon_ailun1";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_aysz() {
		cx = "snow_anye";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_qyss() {
		cx = "resort_qianyeshashou";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_xyck() {
		cx = "latemoon_xuanyicike";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_lsxm() {
		cx = "choyin_luoshaoxinmo";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_tljl() {
		cx = "tangmen_tianliangjianling";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_pjjl() {
		cx = "tangmen_pojunjianling";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_jmjl() {
		cx = "tangmen_julingjianling";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_sfqz() {
		cx = "latemoon_shifangqizhu";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_bdwl() {
		cx = "latemoon_baiduwuling";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_smr() {
		cx = "latemoon_shoumanren";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_qyzl() {
		cx = "latemoon_qianyezhanglao";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_cye() {
		cx = "xiaoyao_changyie1";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_zhs() {
		cx = "changan_zhaohunshi1";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_cbw() {
		cx = "taishan_chengbuwei";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_byd() {
		cx = "guanwai_boyidao";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_lj() {
		cx = "taoguan_linji";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_dgxy() {
		cx = "changan_duguxuyu2";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_dghh() {
		cx = "changan_neigongjinwei";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_bktl() {
		cx = "changan_bukuaitongling";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_qyas() {
		cx = "songshan_qianyeanshi";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_smy() {
		cx = "taishan_simayong";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_dwss() {
		cx = "songshan_duwangshashou";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_wmyh() {
		cx = "jueqinggu_weimingyuanhao1";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_yhxs() {
		cx = "jueqinggu_yangxuansu";
		console.log('当前设置的npcid为：' + cx)
	}
	function id_yxs() {
		cx = "changan_yangxuansu1";
		console.log('当前设置的npcid为：' + cx)
	}
	var cy = "葛伦:guanwai_gelunfenshen;欧阳敏化身:tangmen_ouyangminhuashen;张矮子：heimuya_zhangaizi;龙神之灵:qingcheng_longshenzhiling;仇老板分身:changan_choulaobanfenshen;霍骠姚假身:changan_huobiaoyaojiashen;孔翎:taishan_kongling;天梵魔煞:jueqinggu_tianfanmosha;天梵妖帝:jueqinggu_tianfanyaodi;天梵鬼王:jueqinggu_tianfanguiwang;古怪精灵:changan_guguaijingling;黛龙王:mingjiao_dailongwang;天梵杀手:mingjiao_tianfanshashou;瑷伦:latemoon_ailun1;暗夜煞宗:snow_anye;千夜杀手:resort_qianyeshashou;玄衣刺客:latemoon_xuanyicike;络少心魔:choyin_luoshaoxinmo;天梁剑灵:tangmen_tianliangjianling;破军剑灵:tangmen_pojunjianling;巨门剑灵:tangmen_julingjianling;十方旗主:latemoon_shifangqizhu;兽蛮人:latemoon_shoumanren;百毒巫领:latemoon_baiduwuling;千夜长老:latemoon_qianyezhanglao;";

	function fastkill() {
		if (btnList["叫杀怪"].innerText == '叫杀怪') {
			console.log("开始叫杀" + cx);
			btnList["叫杀怪"].innerText = '停叫杀';
			killIntervalFunc = setInterval(fastkill1, 300)
		} else {
			console.log("停止攻击目标npc!");
			btnList["叫杀怪"].innerText = '叫杀怪';
			clearInterval(killIntervalFunc)
		}
	}
	function fastkill1() {
		if (!is_fighting) {
			if (escape(cx).indexOf('%u') > -1 && $('button.cmd_click3').text().indexOf(cx) > -1) {
				for (var i = 0; i < $('button.cmd_click3').length; i++) {
					if ($('button.cmd_click3')[i].innerText == cx) {
						go('kill?' + cx);
						return
					}
				}
			} else if (escape(cx).indexOf('%u') == -1) {
				clickButton("kill " + cx)
			}
		} else {
			console.log("正在战斗中，关闭叫杀");
			btnList["叫杀怪"].innerText = '叫杀怪';
			clearInterval(killIntervalFunc)
		}
	}
	var cz = '',
		skilloff_flag = false,
		fastoff_popbk = createPop('快捷装卸');
	popList['快捷装卸'].innerHTML = '<div>请选择你要进行的快捷操作</div>';
	createPopButton('一键穿装', "快捷装卸", autoEquipOn);
	createPopButton("一键脱装", "快捷装卸", auto_off);
	createPopButton("一键穿技", "快捷装卸", auto_skillon);
	createPopButton("一键脱技", "快捷装卸", auto_skilloff);
	createPopButton("一键穿齐", "快捷装卸", auto_allon);
	createPopButton("一键脱光", "快捷装卸", auto_alloff);

	function fastofffunc() {
		if (btnList['快捷装卸'].innerText == '快捷装卸') {
			fastoff_popbk.style.display = ""
		} else {
			btnList['快捷装卸'].innerText = '快捷装卸'
		}
	}
	var cA;

	function autoEquipOn() {
		if (cA) {
			var a = wuqinames[cA.split(";")[0]];
			var b = wuqinames[cA.split(";")[1]];
			console.log(cA.split(";")[0] + "--" + a);
			console.log(cA.split(";")[1] + "--" + b)
		}
		go("auto_equip on");
		go("unwield king sword");
		go("unwield " + a + ";" + "unwield " + b);
		go("wield " + a + ";" + "wield " + b)
	}
	function auto_off() {
		go("auto_equip off")
	}
	function auto_skillon() {
		if (skilloff_flag == false) {
			console.log("你现在没脱技能，不需要再装技能");
			return
		}
		skilloff_flag = false;
		if (is_fighting) {
			go("enable map_all;enable mapped_skills restore go 3;combat_chat;quit_chat")
		} else {
			go("enable map_all;enable mapped_skills restore go 3");
			setTimeout(function() {
				go("prev")
			}, 600)
		}
	}
	function auto_skilloff() {
		if (skilloff_flag == true) {
			console.log("你现在已经脱了技能，不需要再脱技能");
			return
		}
		skilloff_flag = true;
		if (is_fighting) {
			go("enable mapped_skills save go 3;enable unmap_all;combat_chat;quit_chat")
		} else {
			go("enable mapped_skills save go 3;enable unmap_all");
			setTimeout(function() {
				go("prev")
			}, 600)
		}
	}
	function auto_allon() {
		autoEquipOn();
		setTimeout(auto_skillon, 900)
	}
	function auto_alloff() {
		auto_off();
		setTimeout(auto_skilloff, 300)
	}
	var cB = createPop('宝石合成');
	popList['宝石合成'].innerHTML = '<div>你要将哪种宝(玉)石全部合成更高一级的宝(玉)石？</div>';
	createPopButton('碎裂蓝', "宝石合成", bluebaoshi1);
	createPopButton("裂开蓝", "宝石合成", bluebaoshi2);
	createPopButton("蓝宝石", "宝石合成", bluebaoshi3);
	createPopButton("无暇蓝", "宝石合成", bluebaoshi4);
	createPopButton("完美蓝", "宝石合成", bluebaoshi5);
	createPopButton("君王蓝", "宝石合成", bluebaoshi6);
	createPopButton('碎裂绿', "宝石合成", lvbaoshi1);
	createPopButton("裂开绿", "宝石合成", lvbaoshi2);
	createPopButton("绿宝石", "宝石合成", lvbaoshi3);
	createPopButton("无暇绿", "宝石合成", lvbaoshi4);
	createPopButton("完美绿", "宝石合成", lvbaoshi5);
	createPopButton("君王绿", "宝石合成", lvbaoshi6);
	createPopButton('碎裂红', "宝石合成", hongbaoshi1);
	createPopButton("裂开红", "宝石合成", hongbaoshi2);
	createPopButton("红宝石", "宝石合成", hongbaoshi3);
	createPopButton("无暇红", "宝石合成", hongbaoshi4);
	createPopButton("完美红", "宝石合成", hongbaoshi5);
	createPopButton("君王红", "宝石合成", hongbaoshi6);
	createPopButton('碎裂黄', "宝石合成", huangbaoshi1);
	createPopButton("裂开黄", "宝石合成", huangbaoshi2);
	createPopButton("黄宝石", "宝石合成", huangbaoshi3);
	createPopButton("无暇黄", "宝石合成", huangbaoshi4);
	createPopButton("完美黄", "宝石合成", huangbaoshi5);
	createPopButton("君王黄", "宝石合成", huangbaoshi6);
	createPopButton('碎裂紫', "宝石合成", zishuijing1);
	createPopButton("裂开紫", "宝石合成", zishuijing2);
	createPopButton("紫宝石", "宝石合成", zishuijing3);
	createPopButton("无暇紫", "宝石合成", zishuijing4);
	createPopButton("完美紫", "宝石合成", zishuijing5);
	createPopButton("君王紫", "宝石合成", zishuijing6);
	createPopButton("东海碧1", "宝石合成", donghaibi1);
	createPopButton("东海碧2", "宝石合成", donghaibi2);
	createPopButton("东海碧3", "宝石合成", donghaibi3);
	createPopButton("轩辕烈1", "宝石合成", xuanyuanlie1);
	createPopButton("轩辕烈2", "宝石合成", xuanyuanlie2);
	createPopButton("轩辕烈3", "宝石合成", xuanyuanlie3);
	createPopButton("九天落1", "宝石合成", jiutianluo1);
	createPopButton("九天落2", "宝石合成", jiutianluo2);
	createPopButton("九天落3", "宝石合成", jiutianluo3);
	createPopButton("龙庭魄1", "宝石合成", longtingpo1);
	createPopButton("龙庭魄2", "宝石合成", longtingpo2);
	createPopButton("龙庭魄3", "宝石合成", longtingpo3);
	createPopButton("帝玺碎1", "宝石合成", dixisui1);
	createPopButton("帝玺碎2", "宝石合成", dixisui2);
	createPopButton("帝玺碎3", "宝石合成", dixisui3);
	createPopButton("钜子墨1", "宝石合成", juzimo1);
	createPopButton("钜子墨2", "宝石合成", juzimo2);
	createPopButton("钜子墨3", "宝石合成", juzimo3);
	createPopButton("昆仑印1", "宝石合成", kunlunyin1);
	createPopButton("昆仑印2", "宝石合成", kunlunyin2);
	createPopButton("昆仑印3", "宝石合成", kunlunyin3);

	function fastbaoshifunc() {
		cB.style.display = ""
	}
	function hebaoshi() {
		console.log(thingcode + "--" + ca);
		var a = parseInt(ca / 300);
		var b = parseInt(ca % 300 / 150);
		var c = parseInt((ca - a * 300 - b * 150) / 90);
		var d = parseInt((ca - a * 300 - b * 150 - c * 90) / 30);
		var e = parseInt((ca - a * 300 - b * 150 - c * 90 - d * 30) / 3);
		var f = parseInt(ca % 3);
		console.log(ca + "=100x" + (3 * a) + "+50x" + (3 * b) + "+30x" + (3 * c) + "+10x" + (3 * d) + "+1x" + (3 * e) + "+" + f);
		for (var i = 0; i < a; i++) {
			go("items hecheng " + thingcode + "_N_100")
		}
		for (var i = 0; i < b; i++) {
			go("items hecheng " + thingcode + "_N_50")
		}
		for (var i = 0; i < c; i++) {
			go("items hecheng " + thingcode + "_N_30")
		}
		for (var i = 0; i < d; i++) {
			go("items hecheng " + thingcode + "_N_10")
		}
		for (var i = 0; i < e; i++) {
			go("items hecheng " + thingcode + "_N_1")
		}
	}
	function heyushi() {
		console.log(thingcode + "--" + ca);
		var a = parseInt(ca / 70);
		var b = parseInt(ca % 70 / 7);
		var c = parseInt(ca % 7);
		console.log(ca + "=10x" + (7 * a) + "+1x" + (7 * b) + '+' + c);
		for (var i = 0; i < a; i++) {
			go('hhjz hecheng_ys ' + thingcode + '_N_10')
		}
		for (var i = 0; i < b; i++) {
			go('hhjz hecheng_ys ' + thingcode + '_N_1')
		}
	}
	function bluebaoshi1() {
		go('items get_store /obj/baoshi/lanbaoshi1');
		setTimeout(function() {
			getthingnum("碎裂的蓝宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function bluebaoshi2() {
		go('items get_store /obj/baoshi/lanbaoshi2');
		setTimeout(function() {
			getthingnum("裂开的蓝宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function bluebaoshi3() {
		go('items get_store /obj/baoshi/lanbaoshi3');
		setTimeout(function() {
			getthingnum("蓝宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function bluebaoshi4() {
		go('items get_store /obj/baoshi/lanbaoshi4');
		setTimeout(function() {
			getthingnum("无暇的蓝宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function bluebaoshi5() {
		go('items get_store /obj/baoshi/lanbaoshi5');
		setTimeout(function() {
			getthingnum("完美的蓝宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function bluebaoshi6() {
		go('items get_store /obj/baoshi/lanbaoshi6');
		setTimeout(function() {
			getthingnum("君王的蓝宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function lvbaoshi1() {
		go('items get_store /obj/baoshi/lvbaoshi1');
		setTimeout(function() {
			getthingnum("碎裂的绿宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function lvbaoshi2() {
		go('items get_store /obj/baoshi/lvbaoshi2');
		setTimeout(function() {
			getthingnum("裂开的绿宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function lvbaoshi3() {
		go('items get_store /obj/baoshi/lvbaoshi3');
		setTimeout(function() {
			getthingnum("绿宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function lvbaoshi4() {
		go('items get_store /obj/baoshi/lvbaoshi4');
		setTimeout(function() {
			getthingnum("无暇的绿宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function lvbaoshi5() {
		go('items get_store /obj/baoshi/lvbaoshi5');
		setTimeout(function() {
			getthingnum("完美的绿宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function lvbaoshi6() {
		go('items get_store /obj/baoshi/lvbaoshi6');
		setTimeout(function() {
			getthingnum("君王的绿宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function hongbaoshi1() {
		go('items get_store /obj/baoshi/hongbaoshi1');
		setTimeout(function() {
			getthingnum("碎裂的红宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function hongbaoshi2() {
		go('items get_store /obj/baoshi/hongbaoshi2');
		setTimeout(function() {
			getthingnum("裂开的红宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function hongbaoshi3() {
		go('items get_store /obj/baoshi/hongbaoshi3');
		setTimeout(function() {
			getthingnum("红宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function hongbaoshi4() {
		go('items get_store /obj/baoshi/hongbaoshi4');
		setTimeout(function() {
			getthingnum("无暇的红宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function hongbaoshi5() {
		go('items get_store /obj/baoshi/hongbaoshi5');
		setTimeout(function() {
			getthingnum("完美的红宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function hongbaoshi6() {
		go('items get_store /obj/baoshi/hongbaoshi6');
		setTimeout(function() {
			getthingnum("君王的红宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function huangbaoshi1() {
		go('items get_store /obj/baoshi/huangbaoshi1');
		setTimeout(function() {
			getthingnum("碎裂的黄宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function huangbaoshi2() {
		go('items get_store /obj/baoshi/huangbaoshi2');
		setTimeout(function() {
			getthingnum("裂开的黄宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function huangbaoshi3() {
		go('items get_store /obj/baoshi/huangbaoshi3');
		setTimeout(function() {
			getthingnum("黄宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function huangbaoshi4() {
		go('items get_store /obj/baoshi/huangbaoshi4');
		setTimeout(function() {
			getthingnum("无暇的黄宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function huangbaoshi5() {
		go('items get_store /obj/baoshi/huangbaoshi5');
		setTimeout(function() {
			getthingnum("完美的黄宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function huangbaoshi6() {
		go('items get_store /obj/baoshi/huangbaoshi6');
		setTimeout(function() {
			getthingnum("君王的黄宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function zishuijing1() {
		go('items get_store /obj/baoshi/zishuijing1');
		setTimeout(function() {
			getthingnum("碎裂的紫宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function zishuijing2() {
		go('items get_store /obj/baoshi/zishuijing2');
		setTimeout(function() {
			getthingnum("裂开的紫宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function zishuijing3() {
		go('items get_store /obj/baoshi/zishuijing3');
		setTimeout(function() {
			getthingnum("紫宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function zishuijing4() {
		go('items get_store /obj/baoshi/zishuijing4');
		setTimeout(function() {
			getthingnum("无暇的紫宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function zishuijing5() {
		go('items get_store /obj/baoshi/zishuijing5');
		setTimeout(function() {
			getthingnum("完美的紫宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function zishuijing6() {
		go('items get_store /obj/baoshi/zishuijing6');
		setTimeout(function() {
			getthingnum("君王的紫宝石");
			setTimeout(hebaoshi, 800)
		}, 300)
	}
	function donghaibi1() {
		go('items get_store /obj/yushi/donghaibi1');
		setTimeout(function() {
			getthingnum("东海碧璞玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function donghaibi2() {
		go('items get_store /obj/yushi/donghaibi2');
		setTimeout(function() {
			getthingnum("东海碧青玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function donghaibi3() {
		go('items get_store /obj/yushi/donghaibi3');
		setTimeout(function() {
			getthingnum("东海碧墨玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function xuanyuanlie1() {
		go('items get_store /obj/yushi/xuanyuanlie1');
		setTimeout(function() {
			getthingnum("轩辕烈璞玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function xuanyuanlie2() {
		go('items get_store /obj/yushi/xuanyuanlie2');
		setTimeout(function() {
			getthingnum("轩辕烈青玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function xuanyuanlie3() {
		go('items get_store /obj/yushi/xuanyuanlie3');
		setTimeout(function() {
			getthingnum("轩辕烈墨玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function jiutianluo1() {
		go('items get_store /obj/yushi/jiutianluo1');
		setTimeout(function() {
			getthingnum("九天落璞玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function jiutianluo2() {
		go('items get_store /obj/yushi/jiutianluo2');
		setTimeout(function() {
			getthingnum("九天落青玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function jiutianluo3() {
		go('items get_store /obj/yushi/jiutianluo3');
		setTimeout(function() {
			getthingnum("九天落墨玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function longtingpo1() {
		go('items get_store /obj/yushi/longtingpo1');
		setTimeout(function() {
			getthingnum("龙庭魄璞玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function longtingpo2() {
		go('items get_store /obj/yushi/longtingpo2');
		setTimeout(function() {
			getthingnum("龙庭魄青玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function longtingpo3() {
		go('items get_store /obj/yushi/longtingpo3');
		setTimeout(function() {
			getthingnum("龙庭魄墨玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function dixisui1() {
		go('items get_store /obj/yushi/dixisui1');
		setTimeout(function() {
			getthingnum("帝玺碎璞玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function dixisui2() {
		go('items get_store /obj/yushi/dixisui2');
		setTimeout(function() {
			getthingnum("帝玺碎青玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function dixisui3() {
		go('items get_store /obj/yushi/dixisui3');
		setTimeout(function() {
			getthingnum("帝玺碎墨玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function juzimo1() {
		go('items get_store /obj/yushi/juzimo1');
		setTimeout(function() {
			getthingnum("矩子墨璞玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function juzimo2() {
		go('items get_store /obj/yushi/juzimo2');
		setTimeout(function() {
			getthingnum("矩子墨青玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function juzimo3() {
		go('items get_store /obj/yushi/juzimo3');
		setTimeout(function() {
			getthingnum("矩子墨墨玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function kunlunyin1() {
		go('items get_store /obj/yushi/kunlunyin1');
		setTimeout(function() {
			getthingnum("昆仑印璞玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function kunlunyin2() {
		go('items get_store /obj/yushi/kunlunyin2');
		setTimeout(function() {
			getthingnum("昆仑印青玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function kunlunyin3() {
		go('items get_store /obj/yushi/kunlunyin3');
		setTimeout(function() {
			getthingnum("昆仑印墨玉");
			setTimeout(heyushi, 1000)
		}, 300)
	}
	function pizhun_bp() {
		if (database.pz_bp == 0) {
			database.pz_bp = 1;
			btnList['进帮批准'].innerText = '关闭批准';
			btnList["进帮批准"].style.borderStyle = 'inset';
			triggers.enableByCls("pizhun_bp")
		} else if (database.pz_bp == 1) {
			database.pz_bp = 0;
			btnList['进帮批准'].innerText = '进帮批准';
			btnList["进帮批准"].style.borderStyle = 'outset';
			triggers.disableByCls("pizhun_bp")
		}
	}
	function pizhun_re() {
		if (!database.hasOwnProperty('pz_bp')) {
			database.pz_bp = 0;
			return
		}
		if (database.pz_bp == 1) {
			btnList['进帮批准'].innerText = '关闭批准';
			btnList["进帮批准"].style.borderStyle = 'inset';
			triggers.enableByCls("pizhun_bp")
		} else if (database.pz_bp == 0) {
			btnList['进帮批准'].innerText = '进帮批准';
			btnList["进帮批准"].style.borderStyle = 'outset';
			triggers.disableByCls("pizhun_bp")
		}
	}
	triggers.newTrigger(/【帮派】(.*)申请加入帮派，请批准或拒绝/, function(m) {
		clickhref('批准');
		console.log('批准' + m[1] + '进入帮派')
	}, "pizhun_bp", "");
	triggers.disableByCls("pizhun_bp");

	function askMiti_wait() {
		if (database.sbjwait == 0) {
			database.sbjwait = 1;
			btnList['刷暴跳过'].innerText = '刷暴跳过'
		} else if (database.sbjwait == 1) {
			database.sbjwait = 0;
			btnList['刷暴跳过'].innerText = '刷暴等待'
		}
	}
	function mtwait_re() {
		if (!database.hasOwnProperty('sbjwait')) {
			database.sbjwait = 1;
			return
		}
		if (database.sbjwait == 1) {
			btnList['刷暴跳过'].innerText = '刷暴跳过'
		} else if (database.sbjwait == 0) {
			btnList['刷暴跳过'].innerText = '刷暴等待'
		}
	}
	function fenjie_my() {
		if (confirm('背包里没有摹刻或者装备的明月都会被分解，你确定现在执行吗？')) {
			cC = '烈日棍西毒蛇杖冰魄银针碧磷鞭--倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯星月大斧碧玉锤霸王枪';
			go('items;;^fenjiefunc;$')
		} else {
			console.log('放弃了明月分解')
		}
	}
	function fenjie_lr() {
		if (confirm('背包里没有摹刻或者装备的烈日都会被分解，你确定现在执行吗？')) {
			cC = '残阳棍伏虎杖暴雨梨花针七星鞭--诛仙剑斩神刀龙象拳套烈日帽烈日宝靴烈日宝链烈日宝戒烈日宝镯破冥斧撼魂锤赤焰枪';
			go('items;;^fenjiefunc;$')
		} else {
			console.log('放弃了烈日分解')
		}
	}
	var cC = '烈日棍西毒蛇杖冰魄银针碧磷鞭--倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯星月大斧碧玉锤霸王枪';

	function fenjiefunc() {
		var d = [];
		var t = $("tr[bgcolor]:contains(两)").siblings();
		if (t.length > 0) {
			for (var i = 0; i < t.length; i++) {
				if (t.eq(i)[0].innerText.replace(/\s+/g, "") != "") {
					var a = t.eq(i).find('td')[0].innerText.replace('\n', "");
					var b = parseInt(t.eq(i).find('td')[1].innerText.match(/\d+/g)[0]);
					var c = t[i].getAttribute('onclick').split("'")[1].split("info ")[1];
					if (cC.indexOf(a) != -1) {
						console.log("分解：" + a + " 数量：" + b);
						for (j = 0; j < b; j++) {
							d.push('items splite ' + c)
						}
					}
				}
			}
		}
		d.push('prev;!分解任务执行完毕');
		go('=300');
		for (i = 0; i < d.length; i++) {
			go(d[i])
		}
		go('=150')
	}
	function qiecuoset() {
		database.qiecuoset = prompt('请输入被切磋时自动进行的操作（0表示不操作只记录，1表示自动观察一下，2表示自动拒绝）', database.qiecuoset)
	}
	function qiecuoset_re() {
		if (!database.qiecuoset || !database.hasOwnProperty('qiecuoset')) {
			database.qiecuoset = 2
		}
	}
	triggers.newTrigger(/请确认(.*)想要跟你切磋一番。/, function(m) {
		console.log(m[0].replace('请确认', ''));
		if (vipplayer == true) {
			if (database.qiecuoset == 1) {
				clickButton('golook_room');
				console.log('已自动观察了一下')
			} else if (database.qiecuoset == 2) {
				clickButton('cancel_prompt');
				console.log('已自动拒绝了')
			}
		}
	}, "qiecuo", "");
	var cD, dsjzjs_m;

	function dingshi_jzjs() {
		database.ds_jzjs = prompt('请输入每天定时加速剑阵的时间(关闭表示不启用此功能,时间格式为xx时:xx分 例如:23:3表示晚上11点3分)', database.ds_jzjs);
		if (database.ds_jzjs.indexOf(':') > -1 && database.ds_jzjs.split(':').length == 2) {
			cD = parseInt(database.ds_jzjs.split(':')[0]);
			dsjzjs_m = parseInt(database.ds_jzjs.split(':')[1]);
			console.log('你本次设置定时加速剑阵的时间为:' + cD + '时' + dsjzjs_m + '分')
		} else {
			database.ds_jzjs = '关闭';
			console.log('定时加速剑阵现处于关闭状态')
		}
	}
	function ds_jzjsre() {
		if (typeof database.ds_jzjs == 'undefined') {
			database.ds_jzjs = '关闭'
		}
		if (database.ds_jzjs != '关闭') {
			cD = parseInt(database.ds_jzjs.split(':')[0]);
			dsjzjs_m = parseInt(database.ds_jzjs.split(':')[1])
		}
	}
	var cE = 0,
		changeTrigger = 0,
		recback_flag = 0,
		healtriger = 0;

	function escapeStart() {
		cE = 1;
		escapeloop()
	}
	function escapechangeStart() {
		cE = 1;
		changeTrigger = 1;
		escapeloop()
	}
	function escaperecStart() {
		cE = 1;
		healtriger = 1;
		escapeloop()
	}
	function escaperecback() {
		if (database.gensha == 1) {
			killfollow_close()
		}
		cE = 1;
		healtriger = 1;
		recback_flag = 1;
		escapeloop()
	}
	function escaperecchange() {
		cE = 1;
		healtriger = 1;
		changeTrigger = 1;
		recback_flag = 1;
		escapeloop()
	}
	function escapeloop() {
		if (document.getElementById("combat_xdz_text")) {
			clickButton('escape');
			if (cE == 1) setTimeout(escapeloop, 200)
		} else {
			bi = 0;
			cE = 0;
			console.log("你现在不在战斗，或者已经成功逃跑")
		}
	}
	var cF;

	function EscapeFunc() {
		this.dispatchMessage = function(b) {
			var a = b.get("type"),
				subType = b.get("subtype");
			var c = g_obj_map.get("msg_vs_info");
			if (c == undefined) {
				return
			}
			var d = g_obj_map.get("msg_attrs").get("id");
			for (var i = 0; i < 8; i++) {
				if (c.get("vs1_pos" + i) == d) {
					cF = c.get("vs1_pos1");
					cx = c.get("vs2_pos1")
				} else if (c.get("vs2_pos" + i) == d) {
					cF = c.get("vs2_pos1");
					cx = c.get("vs1_pos1")
				}
			}
			if (a == "notice" && subType == "escape") {
				var e = g_simul_efun.replaceControlCharBlank(b.get("msg"));
				if (e.match("逃跑成功") != null) {
					cE = 0;
					bi = 0;
					clickButton('golook_room');
					if (recback_flag != 1) {
						if (changeTrigger == 1 && healtriger == 0) {
							changeTrigger = 0;
							console.log("kill " + cF);
							clickButton("fight " + cF);
							clickButton("kill " + cF)
						} else if (changeTrigger == 0 && healtriger == 0) {
							console.log("kill " + cx);
							clickButton("fight " + cx);
							clickButton("kill " + cx)
						} else if (healtriger == 1) {
							clickButton('prev_combat');
							autorecovery();
							healtriger = 0
						}
					} else if (recback_flag == 1) {
						if (changeTrigger == 1) {
							autorecovery();
							console.log("kill " + cF);
							healtriger = 0
						} else if (changeTrigger == 0) {
							autorecovery();
							console.log("kill " + cx);
							healtriger = 0
						}
					}
				}
			}
		}
	}
	var cG = new EscapeFunc;
	var cH = 0;
	var cI = null;
	var cJ = new Onekill;

	function onekillFunc() {
		if (cH == 0) {
			btnList['循环杀'].innerText = '停循环';
			cH = 1;
			clearInterval(cI);
			cI = setInterval(killloop, 800)
		} else if (cH == 1) {
			btnList['循环杀'].innerText = '循环杀';
			cH = 0;
			cL = "";
			clearInterval(cI)
		}
	}
	var cK = 0;
	var cL = "";

	function killloop() {
		if (g_obj_map.get("msg_npc") == undefined) {
			g_gmain.notify_fail("目前无法读取你的目标，请点开一个NPC重试。");
			btnList['循环杀'].innerText = '循环杀';
			cH = 0;
			cL = "";
			clearInterval(cI);
			return
		}
		cL = g_obj_map.get("msg_npc").get("id");
		go('kill ' + cL)
	}
	function Onekill() {
		this.dispatchMessage = function(b) {
			var a = b.get("type"),
				subType = b.get("subtype");
			if (a == "vs") {
				if (subType == "vs_info") {
					cK = 1
				} else if (subType == "combat_result") {
					clickButton('kill ' + cL);
					cK = 0
				}
			}
			if (a == "notice" && subType == "notify_fail") {
				if (b.get("msg").match("已经太多人了") != null) {
					setTimeout(killloop, 500)
				} else if (b.get("msg").match("这儿没有这个人") != null) {
					cK = 0
				}
			}
			if (a == "jh" && subType == "new_npc") {
				if (b.get("id") == cL) {
					if (cK == 0) clickButton("kill " + cL);
					go("playskill 1")
				}
			}
		}
	}
	var cM = 0;

	function guanzhanFunc() {
		if (cM == 0) {
			btnList['观战抢坑'].innerText = '停止抢坑';
			cM = 1
		} else if (cM == 1) {
			btnList['观战抢坑'].innerText = '观战抢坑';
			cM = 0
		}
	}
	var cN = 0;
	var cO = 0;
	var cP = 0;

	function guanzhanlistener() {
		this.dispatchMessage = function(b) {
			var a = b.get("type"),
				subType = b.get("subtype");
			if (a == "vs" && subType == "out_watch") {} else if (a == "vs" && subType == "attack") {
				var c = g_obj_map.get("msg_npc").get("id");
				var d = g_obj_map.get("msg_vs_info");
				if (d.get("vs1_pos1") == c) {
					for (var i = 2; i <= 8; i++) {
						if (d.get("vs2_pos" + i) == b.get("uid")) {
							clickButton("kill " + c);
							break
						}
					}
				} else if (d.get("vs2_pos1") == c) {
					for (var i = 2; i <= 8; i++) {
						if (d.get("vs1_pos" + i) == b.get("uid")) {
							clickButton("kill " + c);
							break
						}
					}
				}
			} else if (a == "vs" && subType == "add_xdz") {
				var c = g_obj_map.get("msg_npc").get("id");
				if (b.get("uid") == c) {
					clickButton("kill " + c)
				}
			}
		}
	}
	var cQ = 0;

	function jztime() {
		cQ = 1;
		cO = (new Date()).valueOf();
		send('kill 9527\n');
		console.log("校正命令");
		setTimeout(jztime, 6000)
	}
	var cR = 0;

	function jztimerec() {
		this.dispatchMessage = function(b) {
			var a = b.get("type"),
				subType = b.get("subtype");
			if (a == "notice" && subType == "notify_fail") {
				if (b.get("msg").match("这儿没有这个人") != null) {
					cQ = 0;
					console.log("校正延迟");
					cR = ((new Date()).valueOf() - cO) / 2;
					console.log("延迟计算:" + cR)
				}
			}
		}
	}
	var cS = new jztimerec;
	var cT = new guanzhanlistener;

	function guanzhanqiang() {
		if (stopqiang == 0) {
			setTimeout(function() {
				guanzhanqiang()
			}, 100)
		} else {
			return
		}
	}
	var cU = 0;

	function hitNPCFunc() {
		if (cU == 0 && cV == 0 && cW == 0) {
			cU = 1;
			if (btnList['不出招'].innerText != '出招精准') {
				chuzhao_jz()
			}
			bg = 5;
			btnList['精准打怪'].innerText = '取消精准'
		} else if (cU == 1) {
			cU = 0;
			btnList['精准打怪'].innerText = '精准打怪'
		}
	}
	var cV = 0;

	function hitPLYFunc() {
		if (cU == 0 && cV == 0 && cW == 0) {
			cV = 1;
			if (btnList['不出招'].innerText != '出招精准') {
				chuzhao_jz()
			}
			bg = 5;
			btnList['精确打人'].innerText = '取消精确'
		} else if (cV == 1) {
			cV = 0;
			btnList['精确打人'].innerText = '精确打人'
		}
	}
	var cW = 0;

	function followPLYFunc() {
		if (cU == 0 && cV == 0 && cW == 0) {
			cW = 1;
			if (btnList['不出招'].innerText != '出招精准') {
				chuzhao_jz()
			}
			bg = 5;
			btnList['跟随大佬'].innerText = '取消跟随'
		} else if (cW == 1) {
			cW = 0;
			btnList['跟随大佬'].innerText = '跟随大佬'
		}
	}
	function aichuzhao() {
		if (!database.ai_chuzhao || database.ai_chuzhao == 0) {
			aichuzhao_open()
		} else if (database.ai_chuzhao == 1) {
			aichuzhao_auto()
		} else {
			aichuzhao_close()
		}
	}
	function aichuzhaore() {
		if (!database.ai_chuzhao || database.ai_chuzhao == 0) {
			aichuzhao_close()
		} else if (database.ai_chuzhao == 1) {
			aichuzhao_open()
		} else if (database.ai_chuzhao == 2) {
			aichuzhao_auto()
		}
	}
	function aichuzhao_close() {
		database.ai_chuzhao = 0;
		btnList['不开智能'].innerText = "不开智能"
	}
	function aichuzhao_open() {
		database.ai_chuzhao = 1;
		btnList['不开智能'].innerText = "智能绝学"
	}
	function aichuzhao_auto() {
		database.ai_chuzhao = 2;
		btnList['不开智能'].innerText = "智能全开"
	}
	function suodingset() {
		Enemylist = prompt("请输入你想锁定的目标敌人,用英文的分号隔开（专门怼他）", Enemylist);
		Friendlist = prompt("请输入你想锁定的目标跟随对象,用英文的分号隔开（大佬，盟友）", Friendlist)
	}
	function whofighting(a, b, c) {
		if (bu == 1) {
			if (gSocketMsg.get_xdz() < 3) {
				return
			}
			if (a.indexOf("你如") > -1 || a.indexOf("上了你") > -1 || gSocketMsg.get_xdz() >= 9 || a.indexOf("你的招式尽数被") > -1 || a.indexOf("向你") > -1 || a.indexOf("点你") > -1 || a.indexOf("指你") > -1 || a.indexOf("你只觉") > -1 || a.indexOf("你为") > -1 || a.indexOf("往你") > -1 || a.indexOf("准你") > -1 || a.indexOf("你的姿态") > -1 || a.indexOf("奔你") > -1 || a.indexOf("渡你") > -1 || a.indexOf("取你") > -1 || a.indexOf("朝你") > -1 || a.indexOf("刺你") > -1 || a.indexOf("击你") > -1 || a.indexOf("你面对") > -1 || a.indexOf("到你") > -1 || a.indexOf("至你") > -1 || a.indexOf("你被") > -1 || a.indexOf("卷你") > -1 || a.indexOf("将你") > -1 || a.indexOf("了你") > -1 || a.indexOf("于你") > -1 || a.indexOf("你再") > -1 || a.indexOf("你已是") > -1 || a.indexOf("你愕然") > -1 || a.indexOf("扫你") > -1 || a.indexOf("从你") > -1 || a.indexOf("你的招式尽") > -1 || a.indexOf("削你") > -1 || a.indexOf("扑你") > -1 || a.indexOf("取你") > -1 || a.indexOf("令你") > -1 || a.indexOf("单手舞动，单刀离背而出") > -1 || a.indexOf("冲你") > -1 || a.indexOf("你一时") > -1 || a.indexOf("落在你") > -1 || a.indexOf("拍你") > -1 || a.indexOf("切你") > -1 || a.indexOf("斩你") > -1 || a.indexOf("砍你") > -1) {
				if (a.length > 30) {
					console.log(a.substr(10, 20))
				} else {
					console.log(a.substr(0, 20))
				}
			}
		}
		if (cU == 1) {
			if (gSocketMsg.get_xdz() < 3) {
				return
			}
			if (a.indexOf("施展出九阳神功") >= 0 || a.indexOf("铁锁横江") >= 0 || a.indexOf("身子不由自主地摇晃了一下") >= 0 || a.indexOf("运起太极神功") >= 0 || a.indexOf("手脚无力") >= 0 || a.indexOf("的招式尽数被") >= 0 || a.indexOf("打了个寒颤") >= 0 || a.indexOf("心神一动") >= 0 || a.indexOf("使出一招「苦海无涯」") >= 0 || a.indexOf("似乎受了点轻伤") >= 0 || a.indexOf("手脚迟缓") >= 0 || a.indexOf("这几招配合起来") >= 0 || a.indexOf("受伤过重") >= 0 || a.indexOf("身型微展") >= 0 || a.indexOf("深深吸了几口气") >= 0 || a.indexOf("心中默念") >= 0 || a.indexOf("双目赤红") >= 0 || a.indexOf("身子突然晃了两晃") >= 0 || a.indexOf("脸上突然冒出一阵红光") >= 0 || a.indexOf("加入了战团") >= 0) {
				return
			}
			var d = b[0];
			var e = c[0];
			if (a.indexOf(d.trim()) == 0 || gSocketMsg.get_xdz() >= 9) {
				auto_fight_handle()
			} else if (a.indexOf(e.trim()) == 0 && e != ansi_up.ansi_to_text(g_obj_map.get("msg_attrs").get("name"))) {
				auto_fight_handle()
			}
			return
		}
		if (cV == 1) {
			if (gSocketMsg.get_xdz() < 3) {
				return
			}
			if (a.indexOf("施展出九阳神功") >= 0 || a.indexOf("铁锁横江") >= 0 || a.indexOf("运起太极神功") >= 0 || a.indexOf("手脚无力") >= 0 || a.indexOf("的招式尽数被") >= 0 || a.indexOf("打了个寒颤") >= 0 || a.indexOf("心神一动") >= 0 || a.indexOf("使出一招「苦海无涯」") >= 0 || a.indexOf("似乎受了点轻伤") >= 0 || a.indexOf("手脚迟缓") >= 0 || a.indexOf("这几招配合起来") >= 0 || a.indexOf("受伤过重") >= 0 || a.indexOf("身型微展") >= 0 || a.indexOf("深深吸了几口气") >= 0 || a.indexOf("心中默念") >= 0 || a.indexOf("双目赤红") >= 0 || a.indexOf("身子突然晃了两晃") >= 0 || a.indexOf("脸上突然冒出一阵红光") >= 0 || a.indexOf("加入了战团") >= 0) {
				return
			}
			for (var i = 0; i < 8; i++) {
				if (isContains(Enemylist, b[i])) {
					var f = b[i].split(']')[0] + "区]" + b[i].split(']')[1];
					if (a.indexOf(f.trim()) == 0 || gSocketMsg.get_xdz() >= 9) {
						auto_fight_handle()
					}
				}
			}
			return
		}
		if (cW == 1) {
			if (gSocketMsg.get_xdz() < 3) {
				return
			}
			if (a.indexOf("施展出九阳神功") >= 0 || a.indexOf("铁锁横江") >= 0 || a.indexOf("运起太极神功") >= 0 || a.indexOf("手脚无力") >= 0 || a.indexOf("的招式尽数被") >= 0 || a.indexOf("打了个寒颤") >= 0 || a.indexOf("心神一动") >= 0 || a.indexOf("使出一招「苦海无涯」") >= 0 || a.indexOf("似乎受了点轻伤") >= 0 || a.indexOf("手脚迟缓") >= 0 || a.indexOf("这几招配合起来") >= 0 || a.indexOf("受伤过重") >= 0 || a.indexOf("身型微展") >= 0 || a.indexOf("深深吸了几口气") >= 0 || a.indexOf("心中默念") >= 0 || a.indexOf("双目赤红") >= 0 || a.indexOf("身子突然晃了两晃") >= 0 || a.indexOf("脸上突然冒出一阵红光") >= 0 || a.indexOf("加入了战团") >= 0) {
				return
			}
			for (var i = 0; i < 8; i++) {
				if (isContains(Friendlist, c[i])) {
					var g = c[i].split(']')[0] + "区]" + c[i].split(']')[1];
					if (a.indexOf(g.trim()) == 0) {
						auto_fight_handle()
					}
				}
			}
			return
		}
	}
	function pozhaofailed(a, b) {
		for (var i = 0; i < 8; i++) {
			if (a.match(b[i] + "的招式并未有明显破绽") != null) {
				auto_fight_handle();
				console.log("补招反破！")
			}
		}
		if (a.match("你的招式尽数被") != null || a.match("你的对攻无法击破") != null || a.match("击向了你的破绽") != null || a.match("你一不留神") != null || a.match("你这一招并未奏效") != null) {
			auto_fight_handle();
			console.log("补招反破！")
		}
	}
	var cX = 0;
	var cY = 0;

	function Combat() {
		this.dispatchMessage = function(b) {
			var a = b.get("type"),
				subType = b.get("subtype");
			if (a == "vs" && subType == "text") {
				var c = [];
				var d = [];
				var e = [];
				var f = [];
				var g = 0;
				bi = 0;
				if (gSocketMsg.get_xdz() < 3) {
					return
				}
				if (g_obj_map.get("msg_attrs").get("name").match("]") == null) {
					var h = ansi_up.ansi_to_text(g_obj_map.get("msg_attrs").get("name"))
				} else {
					var h = ansi_up.ansi_to_text(g_obj_map.get("msg_attrs").get("name")).split("]")[1]
				}
				for (var i = 0; i < 8; i++) {
					if (g_obj_map.get("msg_vs_info") != undefined) {
						if (g_obj_map.get("msg_vs_info").get("vs2_name" + (i + 1)) != undefined) {
							if (ansi_up.ansi_to_text(g_obj_map.get("msg_vs_info").get("vs2_name" + (i + 1))).match("]") != null) {
								if (isContains(h, ansi_up.ansi_to_text(g_obj_map.get("msg_vs_info").get("vs2_name" + (i + 1))).split("]")[1])) {
									cX = 1;
									cY = 2
								}
							} else {
								if (ansi_up.ansi_to_text(g_obj_map.get("msg_vs_info").get("vs2_name" + (i + 1))) == h) {
									cX = 1;
									cY = 2
								}
							}
						}
					}
					if (g_obj_map.get("msg_vs_info") != undefined) {
						if (g_obj_map.get("msg_vs_info").get("vs1_name" + (i + 1)) != undefined) {
							if (ansi_up.ansi_to_text(g_obj_map.get("msg_vs_info").get("vs1_name" + (i + 1))).match("]") != null) {
								if (isContains(h, ansi_up.ansi_to_text(g_obj_map.get("msg_vs_info").get("vs1_name" + (i + 1))).split("]")[1])) {
									cX = 2;
									cY = 1
								}
							} else {
								if (ansi_up.ansi_to_text(g_obj_map.get("msg_vs_info").get("vs1_name" + (i + 1))) == h) {
									cX = 2;
									cY = 1
								}
							}
						}
					}
				}
				for (var i = 0; i < 8; i++) {
					if (g_obj_map.get("msg_vs_info") != undefined && g_obj_map.get("msg_vs_info").get("vs" + cX + "_name" + (i + 1)) != undefined) {
						c.push(ansi_up.ansi_to_text(g_obj_map.get("msg_vs_info").get("vs" + cX + "_name" + (i + 1))));
						e.push(g_obj_map.get("msg_vs_info").get("vs" + cX + "_xdz" + (i + 1)))
					}
					if (g_obj_map.get("msg_vs_info") != undefined && g_obj_map.get("msg_vs_info").get("vs" + cY + "_name" + (i + 1)) != undefined) {
						d.push(ansi_up.ansi_to_text(g_obj_map.get("msg_vs_info").get("vs" + cY + "_name" + (i + 1))));
						f.push(g_obj_map.get("msg_vs_info").get("vs" + cY + "_xdz" + (i + 1)))
					}
				}
				var j = g_simul_efun.replaceControlCharBlank(b.get("msg"));
				if (whofighting(j, c, d)) {
					whofighting(j, c, d)
				}
				if (pozhaofailed(j, c)) {
					buzhao()
				}
			} else if (a == "vs" && subType == "combat_result") {
				bi = 0
			}
		}
	}
	function buzhao() {
		var a = gSocketMsg.get_xdz();
		if (a >= 3) {
			for (var i = 1; i <= 6; i++) {
				if (g_obj_map.get("skill_button" + i) != undefined && (ansi_up.ansi_to_text(g_obj_map.get("skill_button" + i).get("name")) == "飞刀绝技" || ansi_up.ansi_to_text(g_obj_map.get("skill_button" + i).get("name")) == "孔雀翎" || ansi_up.ansi_to_text(g_obj_map.get("skill_button" + i).get("name")) == "雪饮狂刀" || ansi_up.ansi_to_text(g_obj_map.get("skill_button" + i).get("name")) == "翻云刀法" || ansi_up.ansi_to_text(g_obj_map.get("skill_button" + i).get("name")) == "九天龙吟剑法" || ansi_up.ansi_to_text(g_obj_map.get("skill_button" + i).get("name")) == "覆雨剑法" || ansi_up.ansi_to_text(g_obj_map.get("skill_button" + i).get("name")) == "织冰剑法" || ansi_up.ansi_to_text(g_obj_map.get("skill_button" + i).get("name")) == "排云掌法" || ansi_up.ansi_to_text(g_obj_map.get("skill_button" + i).get("name")) == "如来神掌")) {
					if (g_obj_map.get("skill_button" + i).get("xdz") == 3) {
						clickButton('playskill ' + i, 0)
					}
				}
			}
		} else if (a == 2) {
			for (var i = 1; i <= 6; i++) {
				if (g_obj_map.get("skill_button" + i) != undefined) {
					if (g_obj_map.get("skill_button" + i).get("xdz") == 2) {
						clickButton('playskill ' + i, 0)
					}
				}
			}
		}
	}
	var cZ = new Combat;
	var da = '',
		kaz_popbk = createPop('开发者');
	popList['开发者'].innerHTML = '<div>欢迎使用开发者选项</div>';
	createPopButton("看id", "开发者", idread);
	createPopButton("测指令", "开发者", cecmd);
	createPopButton("测突破", "开发者", cetupo);
	createPopButton("看远程", "开发者", readyuancheng);
	createPopButton("切磋己", "开发者", qiecuoji);
	createPopButton("测托管", "开发者", tgtest);
	createPopButton("看位置", "开发者", getpostion);
	createPopButton("简单显字", "开发者", smwrite);
	createPopButton("功能显字", "开发者", funcwrite1);
	createPopButton("山坳签到", "开发者", go_postiondo);
	createPopButton("当前江湖", "开发者", look_nowjh);
	createPopButton("失效检测", "开发者", shixiaoswitch);
	createPopButton("检测失效", "开发者", shixiaojiance);
	createPopButton("自动重连", "开发者", reconnectswitch);
	createPopButton("清空日志", "开发者", clearlog);
	createPopButton("清空战斗", "开发者", clearlog_ftswitch);
	createPopButton("查看储存", "开发者", showdatabase);
	createPopButton("清空储存", "开发者", cleardatabase);
	createPopButton("后台检测", "开发者", houtaijiance);
	createPopButton("弹窗提示", "开发者", alert_switch);
	createPopButton("代码查询", "开发者", searchcode);
	createPopButton("狂点击", "开发者", fastclick);
	createPopButton("快捷键", "开发者", fastkey);
	createPopButton("变量查询", "开发者", readbianliang);
	createPopButton("代码执行", "开发者", zhixingcode);
	createPopButton("战场显血", "开发者", showzhanchang);
	createPopButton("显内显行", "开发者", showneili);

	function kazfunc() {
		kaz_popbk.style.display = ""
	}
	function newgotest() {
		go('#on;jh 1;?逄义;?大暑礼包;e;n;n;kill?醉汉|~;@醉汉的尸体;jh 2;n;n;n;n;?地痞;?杀死|jh 3;fight huashancun_huashancun12|home;1!准备解锁;:本次执行完毕;#off');
		go('#on;jh 1;e;n;n;kill snow_drunk|jh 2;n;n;n;n;kill luoyang_luoyang26|jh 3;fight huashancun_huashancun12|home;!准备解锁;:本次执行完毕;#off');
		go('#on;jh 2;n;n;n;n;kill luoyang_luoyang26|;#off');
		go('jh 3;s;s;s');
		go('jh 4;n;n;n;n');
		go('tupo try,taxue-wuhen')
	}
	function idread() {
		alert("目前已知隐藏npc的id如下:" + cy)
	}
	function zhixingcode() {
		if (vipplayer == true) {
			if (typeof database.zhixingcode == 'undefined') {
				database.zhixingcode = "console.log('测试一下');"
			}
			database.zhixingcode = prompt("请输入你要执行的代码，例如 console.log('测试一下代码');", database.zhixingcode);
			eval(database.zhixingcode)
		} else {
			console.log('非法用户!')
		}
	}
	function readbianliang() {
		var a = prompt('你要查询哪个变量的值，例如 nowjob', '');
		var b = eval(a);
		alert('本次查询:' + a + '=' + b)
	}
	var db;

	function showneili() {
		if (database.showneili == 1) {
			database.showneili = 0;
			btnList['显内显行'].innerText = '显内显行';
			btnList['显内显行'].style.borderStyle = 'outset';
			clearInterval(db);
			$('div#ft1').remove()
		} else {
			database.showneili = 1;
			btnList['显内显行'].innerText = '不显内行';
			btnList['显内显行'].style.borderStyle = 'inset';
			db = setInterval(function() {
				if ($('td#combat_xdz').length > 0) {
					showfightmsg()
				}
			}, 1000)
		}
	}
	function showneilire() {
		if (!database.showneili && !database.hasOwnProperty('showneili')) {
			database.showneili = 1
		}
		if (database.showneili == 0) {
			btnList['显内显行'].innerText = '显内显行';
			btnList['显内显行'].style.borderStyle = 'outset'
		} else {
			btnList['显内显行'].innerText = '不显内行';
			btnList['显内显行'].style.borderStyle = 'inset';
			$('div#ft1').remove();
			clearInterval(db);
			db = setInterval(function() {
				if ($('td#combat_xdz').length > 0) {
					showfightmsg()
				}
			}, 1000)
		}
	}
	function showzhanchang() {
		if (!$('span#ft2')) {
			showzc1()
		} else {
			$('span#ft2').remove();
			showzc1()
		}
	}
	function showzc1() {
		$('span#ft2').remove();
		if (g_obj_map.get("msg_vs_info").get("vs1_name1")) {
			$('td#vs11>span>i').append('<span id="ft2" style="color:rgb(32, 209, 235);font-size:15px">/(' + (g_obj_map.get("msg_vs_info").get("vs1_max_kee1") / 10000).toFixed(1) + 'W)</span>')
		}
		if (g_obj_map.get("msg_vs_info").get("vs1_name2")) {
			$('td#vs12>span>i').append('<span id="ft2" style="color:rgb(32, 209, 235);font-size:15px">/(' + (g_obj_map.get("msg_vs_info").get("vs1_max_kee2") / 10000).toFixed(1) + 'W)</span>')
		}
		if (g_obj_map.get("msg_vs_info").get("vs1_name3")) {
			$('td#vs13>span>i').append('<span id="ft2" style="color:rgb(32, 209, 235);font-size:15px">/(' + (g_obj_map.get("msg_vs_info").get("vs1_max_kee3") / 10000).toFixed(1) + 'W)</span>')
		}
		if (g_obj_map.get("msg_vs_info").get("vs1_name4")) {
			$('td#vs14>span>i').append('<span id="ft2" style="color:rgb(32, 209, 235);font-size:15px">/(' + (g_obj_map.get("msg_vs_info").get("vs1_max_kee4") / 10000).toFixed(1) + 'W)</span>')
		}
		if (g_obj_map.get("msg_vs_info").get("vs2_name1")) {
			$('td#vs21>span>i').append('<span id="ft2" style="color:rgb(32, 209, 235);font-size:15px">/(' + (g_obj_map.get("msg_vs_info").get("vs2_max_kee1") / 10000).toFixed(1) + 'W)</span>')
		}
		if (g_obj_map.get("msg_vs_info").get("vs2_name2")) {
			$('td#vs22>span>i').append('<span id="ft2" style="color:rgb(32, 209, 235);font-size:15px">/(' + (g_obj_map.get("msg_vs_info").get("vs2_max_kee2") / 10000).toFixed(1) + 'W)</span>')
		}
		if (g_obj_map.get("msg_vs_info").get("vs2_name3")) {
			$('td#vs23>span>i').append('<span id="ft2" style="color:rgb(32, 209, 235);font-size:15px">/(' + (g_obj_map.get("msg_vs_info").get("vs2_max_kee3") / 10000).toFixed(1) + 'W)</span>')
		}
		if (g_obj_map.get("msg_vs_info").get("vs2_name4")) {
			$('td#vs24>span>i').append('<span id="ft2" style="color:rgb(32, 209, 235);font-size:15px">/(' + (g_obj_map.get("msg_vs_info").get("vs2_max_kee4") / 10000).toFixed(1) + 'W)</span>')
		}
	}
	var dc = 'home;jh 1;?逄义;?大暑礼包';

	function cecmd() {
		dc = prompt("请输入需要运行的指令", dc);
		go(dc)
	}
	function cetupo() {
		if (!database.tuposkill) {
			database.tuposkill = '千影百伤棍'
		}
		tuposkill = prompt("需要现在突破的技能", database.tuposkill);
		database.tuposkill = tuposkill;
		nexttask = function() {
			suantupo()
		};
		checktask()
	}
	var dd = 'recovery',
		cmdclicknum = 10;

	function fastclick() {
		var a = prompt("请输入需要连续点击的指令,执行次数", dd + "," + cmdclicknum);
		dd = a.split(",")[0];
		cmdclicknum = a.split(",")[1];
		goes(dd, cmdclicknum)
	}
	function fastkey() {
		alert("目前可用的快捷键为: 方向键盘 上下左右 地图中上下左右移动 右侧数字键盘  2468下左右上 1379左下右下左上右上 +点击确定 -点击取消 0返回主页 左侧键盘 QWER对话比试杀死给予 空格 观察 B背包 V vip界面 J 寻路集 F12代码查询 ")
	}
	function readyuancheng() {
		if (typeof dreamuser1 != "undefined" && vipplayer == true) {
			alert("私聊好友可以远程控制他进行操作指令对应如下（注意感叹号是中文输入法下的）:刷新！2倍！3倍！boss！脱光！穿好！签到！刷正邪！回主页！定时刷新！（默认定时10分钟）定时x分钟刷新！（x为数字）")
		} else {
			alert("你不是授权用户，无法使用远程功能")
		}
	}
	function canxuesheng() {
		if (healtriger == 0) {
			healtriger = 1;
			healFunc()
		} else {
			healFunc()
		}
	}
	function healFunc() {
		if (healtriger == 0) {
			return
		}
		var a = parseInt(g_obj_map.get("msg_attrs").get("kee"));
		var b = parseInt(g_obj_map.get("msg_attrs").get("max_kee"));
		var c = parseInt(g_obj_map.get("msg_attrs").get("force"));
		var d = parseInt(g_obj_map.get("msg_attrs").get("max_force"));
		if (a < b) {
			writeout("大侠你受伤了！角色当前气血值:" + a + "  <span style='color:rgb(118, 235, 32)'>最大气血值:</span>" + b + "<br><span style='color:rgb(32, 209, 235)'>小道正在为您疗伤......</span>", "red");
			if (c > 0) go('recovery');
			else go('items use snow_qiannianlingzhi');
			setTimeout(function() {
				healFunc()
			}, 200)
		} else {
			if (c < d) {
				go('items use snow_qiannianlingzhi');
				setTimeout(function() {
					healFunc()
				}, 200)
			} else {
				console.log("治疗结束，当前状态已满");
				healtriger = 0;
				if (recback_flag == 1 && changeTrigger == 1) {
					recback_flag = 0;
					changeTrigger = 0;
					setTimeout(function() {
						clickButton("fight " + cF);
						clickButton("kill " + cF)
					}, 500);
					if (bg == 0 && database.ai_chuzhao > 0) {
						chuzhao_open()
					}
				} else if (recback_flag == 1 && changeTrigger == 0) {
					console.log('之前跟杀开关:' + database.gensha);
					if (database.gensha == 1) {
						killfollow_open()
					}
					recback_flag = 0;
					setTimeout(function() {
						clickButton("fight " + cx);
						clickButton("kill " + cx)
					}, 500);
					if (bg == 0 && database.ai_chuzhao > 0) {
						chuzhao_open()
					}
				}
			}
		}
	}
	function qiecuoji() {
		goes('items use snow_qiannianlingzhi', 8);
		go('fight ' + userid);
		go("golook_room");
		setTimeout(function() {
			go('fight ' + userid)
		}, 4000);
		triggers.enableByCls("qiecuoji")
	}
	triggers.newTrigger(/请求切磋过于频繁，请稍候再试！/, function(m) {
		setTimeout(function() {
			go('fight ' + userid)
		}, 3000)
	}, "qiecuoji", "");
	triggers.newTrigger(/你对著(.*)说道：/, function(m) {
		if (m[1] == myName) {
			triggers.disableByCls("qiecuoji")
		}
	}, "qiecuoji", "");
	triggers.disableByCls("qiecuoji");

	function tgtest() {
		tuoguanfuc()
	}
	function bjlist() {
		if (btnList['开日志'].innerText == '开日志') {
			consolelog_open()
		} else {
			consolelog_close()
		}
	}
	function consolelog_open() {
		database.consolelog = 1;
		btnList['开日志'].innerText = '关日志';
		btnList['开日志'].style.borderStyle = 'inset';
		screenLog.showlog()
	}
	function consolelog_close() {
		database.consolelog = 0;
		btnList['开日志'].innerText = '开日志';
		btnList['开日志'].style.borderStyle = 'outset';
		screenLog.hidelog()
	}
	function consolelog_re() {
		if (!database.hasOwnProperty('consolelog')) {
			database.consolelog = 1
		}
		if (database.consolelog == 1) {
			consolelog_open()
		} else if (database.consolelog == 0) {
			consolelog_close()
		}
	}
	function smwrite() {
		var a = prompt("请输入想显示的字,显示颜色", "当前脚本为道长论剑DZ正版," + eval(clrs2 + pifu));
		var b = a.split(",")[0];
		var c = a.split(",")[1];
		writeout(b, c)
	}
	var de;

	function funcwrite1() {
		if (btnList['功能显字'].innerText == "功能显字") {
			btnList['功能显字'].innerText = "停止显字";
			btnList['功能显字'].style.borderStyle = 'inset';
			funcwrite();
			de = setInterval(funcwrite, 600000)
		} else {
			btnList['功能显字'].innerText = "功能显字";
			btnList['功能显字'].style.borderStyle = 'outset';
			clearInterval(de)
		}
	}
	funcwrite1();

	function funcwrite() {
		if (!is_fighting) {
			var a = parseInt(10 * Math.random());
			if (a == 0) {
				writeouts("道长论剑论坛：", "欢迎加入官方QQ群【530311475】", urlButtonFunc, "访问官网")
			} else if (a == 1) {
				writeout("当前脚本为--道长论剑DZ正版version" + nowversion, "rgb(118, 235, 32)")
			} else if (a == 2) {
				writeouts("道长论剑论坛：", "本套脚本可以一键签到，你了解吗？", qd, "点此签到")
			} else if (a == 3) {
				writeouts("道长论剑论坛：", "大侠战斗劳累，买点千年灵芝充充饥？", mqn, "现在去买")
			} else if (a == 4) {
				writeouts("道长论剑论坛：", "大侠受伤严重，是否需要我帮你治疗一下，如果你有千年灵芝的话？", canxuesheng, "现在就帮我")
			} else if (a == 5) {
				writeouts("道长论剑论坛：", "大侠该赚点元宝花花了，看看能否理财？", buytzlicai, "看看去")
			} else if (a == 6) {
				writeouts("道长论剑论坛：", "今天偷懒不想做任务？我能帮你一键点完，了解一下？", tgtest, "你帮我点了吧")
			} else if (a == 7) {
				writeouts("道长论剑论坛：", "我可以一键做完奇侠任务，你只需要着，带你装逼带你飞，老司机发车", autoqixiago, "等不及了，赶紧上车")
			} else if (a == 8) {
				writeouts("道长论剑论坛：", "大侠你好，需要小道给你唱首歌吗？", playwarn, "正无聊，唱来听听")
			} else if (a == 9) {
				writeouts("道长论剑论坛：", "大侠的风剑掉了吗，要不要小道给你打一把？", killfengjian, "卧槽，真的掉了")
			} else if (a == 10) {
				writeouts("道长论剑论坛：", "大侠想突破技能但是苦于技能太多懒得翻吗，戳这里了解一下", cetupo, "了解一下又如何")
			} else {
				writeout("当前脚本为--道长论剑DZ正版version" + a, "red")
			};
			clickButton("share_ok 6")
		}
	}
	var df = 0;

	function go_postion(a, b) {
		df = 1;
		getpostion();
		if (E == a) {
			b();
			df = 0;
			return
		} else {
			clearTimeout(bs_time);
			bs_time = setTimeout(function() {
				go_postion(a, b)
			}, 3000)
		}
	}
	function go_postiondo() {
		go("jh 1;e;n;n;n;n;n");
		setTimeout(function() {
			go_postion("山坳", qd)
		}, 500)
	}
	var dg, shixiao_flag;

	function shixiaoswitch() {
		if (btnList['失效检测'].innerText == '失效检测') {
			shixiao_open()
		} else {
			shixiao_close()
		}
	}
	function shixiao_open() {
		shixiao_flag = 1;
		database.shixiao_flag = 1;
		dg = setInterval(shixiaojiance, 3600000);
		btnList['失效检测'].innerText = '停检失效';
		btnList['失效检测'].style.borderStyle = 'inset'
	}
	function shixiao_close() {
		shixiao_flag = 0;
		database.shixiao_flag = 0;
		clearInterval(dg);
		btnList['失效检测'].innerText = '失效检测';
		btnList['失效检测'].style.borderStyle = 'outset'
	}
	function shixiaojiance() {
		if (cmdCache.length > 150) {
			update();
			return
		} else if (cmdCache.length != 0) {
			setTimeout(function() {
				if (cmdCache.length != 0) {
					update();
					return
				} else {
					shixiaojiance()
				}
			}, cmdCache.length * 200);
			return
		} else if (!is_fighting && !timeCmd) {
			go('kill');
			setTimeout(function() {
				if ($("span.out2:contains(你要杀谁？)").length > 0) {
					g_gmain.recvNetWork2(HIG + "本次检测脚本未失效" + "\n" + NOR);
					console.log("本次检测脚本未失效");
					$("span.out2:contains(你要杀谁？)").remove()
				} else {
					update()
				}
			}, 1000);
			return
		}
		setTimeout(shixiaojiance, 5000)
	}
	var dh = 0;

	function reconnectswitch() {
		if (dh == 0) {
			dh = 1;
			btnList['自动重连'].innerText = '停止重连';
			btnList['自动重连'].style.borderStyle = 'inset'
		} else {
			dh = 0;
			btnList['自动重连'].innerText = '自动重连';
			btnList['自动重连'].style.borderStyle = 'outset'
		}
	}
	function clearlog() {
		$("span.out2").remove();
		console.clear()
	}
	var di;

	function clearlog_ftswitch() {
		if (btnList["清空战斗"].innerText == "清空战斗") {
			clearft_open()
		} else {
			clearft_close()
		}
	}
	function clearft_open() {
		database.clearft = 1;
		clearInterval(di);
		clearlog_ft();
		btnList["清空战斗"].innerText = "停止清空";
		btnList['清空战斗'].style.borderStyle = 'inset';
		di = setInterval(clearlog_ft, 10000)
	}
	function clearft_close() {
		database.clearft = 0;
		btnList["清空战斗"].innerText = "清空战斗";
		btnList['清空战斗'].style.borderStyle = 'outset';
		clearInterval(di)
	}
	function clearlog_ft() {
		if (is_fighting) {
			$("span.out").remove()
		}
	}
	function alert_switch() {
		if (btnList["弹窗提示"].innerText == "弹窗提示") {
			database.alert_flag = 1;
			btnList["弹窗提示"].innerText = "关闭弹窗";
			btnList['弹窗提示'].style.borderStyle = 'inset'
		} else {
			database.alert_flag = 0;
			btnList["弹窗提示"].innerText = "弹窗提示";
			btnList['弹窗提示'].style.borderStyle = 'outset'
		}
	}
	function alert_load() {
		if (!database.alert_flag) {
			alert_switch()
		} else if (database.alert_flag == 0) {
			btnList["弹窗提示"].innerText = "弹窗提示";
			btnList['弹窗提示'].style.borderStyle = 'outset'
		} else if (database.alert_flag == 1) {
			btnList["弹窗提示"].innerText = "关闭弹窗";
			btnList['弹窗提示'].style.borderStyle = 'inset'
		}
	}
	alert_load();

	function showdatabase() {
		for (var i = 0; i < database.length; i++) {
			console.log('当前数据库的第' + i + '条数据的名字为：' + database.key(i) + ',值为：' + database.getItem(database.key(i)))
		}
		console.log("新开跨服标识为" + database_all.newkf_open)
	}
	function cleardatabase() {
		database.clear();
		localStorage.clear();
		console.log("当前数据库为" + database)
	}
	function houtaijiance() {
		alert("本次检测是结果是---" + A + "（1表示浏览窗口在前台页面运行，0表示浏览器窗口在后台页面运行)")
	}
	var dj = "确定",
		mytestcode1;

	function searchcode() {
		dj = prompt("请输入你想查询的当前页面可见的某个按钮的代码（不支持纯图片的按钮，查到代码后可用于狂点击功能）", dj);
		if (typeof dj == "undefined") {
			console.log("输入错误");
			return false
		}
		var b = $(".cmd_click2");
		var c = $(".cmd_click3");
		var d = $(".cmd_med");
		var e = $(".cmd_tab");
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(dj) > -1) {
				var a = b[i].getAttribute('onclick').split("'")[1];
				console.log(a);
				words1("本次查询得:" + a)
			}
		}
		for (var i = 0; i < c.length; i++) {
			if (c[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(dj) > -1) {
				var a = c[i].getAttribute('onclick').split("'")[1];
				console.log(a);
				words1("本次查询得:" + a)
			}
		}
		for (var i = 0; i < d.length; i++) {
			if (d[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(dj) > -1) {
				var a = d[i].getAttribute('onclick').split("'")[1];
				console.log(a);
				words1("本次查询得:" + a)
			}
		}
		for (var i = 0; i < e.length; i++) {
			if (e[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(dj) > -1) {
				var a = e[i].getAttribute('onclick').split("'")[1];
				console.log(a);
				words1("本次查询得:" + a)
			}
		}
		if (!a) {
			words1("当前页面没有这个按钮哦");
			console.log("当前页面没有这个按钮哦")
		}
	}
	var dk = 0;

	function fightbtnswitch() {
		if (vipplayer == true) {
			if (btnList['开强化'].innerText == "开强化") {
				fightbtn_open()
			} else {
				fightbtn_close()
			}
		} else {
			alertmsg("警告！！！", "你不是道长的授权用户！！！<br>如需使用战斗强化模块，<br>请联系道长购买授权")
		}
	}
	function fightbtn_open() {
		btnList['开强化'].innerText = '关强化';
		btnList['开强化'].style.borderStyle = 'inset';
		show_fightbtn();
		dk = 1;
		database.fightbtn_flag = 1;
		clearft_open()
	}
	function fightbtn_close() {
		btnList['开强化'].innerText = '开强化';
		btnList['开强化'].style.borderStyle = 'outset';
		hide_fightbtn();
		dk = 0;
		database.fightbtn_flag = 0
	}
	function show_fightbtn() {
		btnList['一键治疗'].style.visibility = "visible";
		btnList['快捷装卸'].style.visibility = "visible";
		btnList['逃跑回坑'].style.visibility = "visible";
		btnList['逃跑换边'].style.visibility = "visible";
		btnList['治疗回坑'].style.visibility = "visible";
		btnList['治疗换边'].style.visibility = "visible";
		btnList['逃跑治疗'].style.visibility = "visible";
		btnList['观战抢坑'].style.visibility = "visible";
		btnList['精确打人'].style.visibility = "visible";
		btnList['精准打怪'].style.visibility = "visible";
		btnList['跟随大佬'].style.visibility = "visible";
		btnList['不开智能'].style.visibility = "visible";
		btnList['锁定目标'].style.visibility = "visible"
	}
	function hide_fightbtn() {
		btnList['一键治疗'].style.visibility = "hidden";
		btnList['快捷装卸'].style.visibility = "hidden";
		btnList['逃跑回坑'].style.visibility = "hidden";
		btnList['逃跑换边'].style.visibility = "hidden";
		btnList['治疗回坑'].style.visibility = "hidden";
		btnList['治疗换边'].style.visibility = "hidden";
		btnList['逃跑治疗'].style.visibility = "hidden";
		btnList['观战抢坑'].style.visibility = "hidden";
		btnList['精确打人'].style.visibility = "hidden";
		btnList['精准打怪'].style.visibility = "hidden";
		btnList['跟随大佬'].style.visibility = "hidden";
		btnList['不开智能'].style.visibility = "hidden";
		btnList['锁定目标'].style.visibility = "hidden"
	}
	triggers.newTrigger(/你对著(.*)说道：在下(.*)，领教壮士的高招！/, function(m) {
		var a = gSocketMsg.get_xdz();
		getmyFS();
		if (document.getElementById(myFS)) {
			var b = document.getElementById(myFS).innerHTML.replace(/<[^>]+>/g, "");
			if (b < Number(limitQixue)) {
				console.log(b + "---" + Number(limitQixue));
				clickbtn2(myForce)
			}
		}
		triggers.disableByCls("qiecuoji")
	}, "qiecuoji", "");
	triggers.disableByCls("qiecuoji");
	triggers.newTrigger(/(.*)告诉你：刷新！/, function(m) {
		clearbug();
		setTimeout(update, 1000);
		console.log(m[1] + "远程控制你刷新网页")
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：2倍！/, function(m) {
		clearbug();
		go("clan scene;clan open_double go");
		console.log(m[1] + "远程控制你开启帮派双倍")
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：3倍！/, function(m) {
		clearbug();
		go("clan scene;clan open_triple go");
		console.log(m[1] + "远程控制你开启帮派三倍")
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：boss！/, function(m) {
		clearbug();
		go("clan scene;clan boss go");
		console.log(m[1] + "远程控制你开启帮派boss")
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：脱光！/, function(m) {
		clearbug();
		go('auto_equip off;enable unmap_all;home');
		console.log(m[1] + "远程控制你脱装备技能")
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：穿好！/, function(m) {
		clearbug();
		go('auto_equip on;enable map_all;home;exercise');
		console.log(m[1] + "远程控制你穿装备技能")
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：签到！/, function(m) {
		clearbug();
		qd();
		console.log(m[1] + "远程控制你签到一次")
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：刷正邪！/, function(m) {
		clearbug();
		zx_set = 1;
		zx_open();
		console.log(m[1] + "远程控制你刷正邪")
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：回主页！/, function(m) {
		clearbug();
		go_home();
		console.log(m[1] + "远程控制你回主页")
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：定时刷新！/, function(m) {
		clearbug();
		console.log(m[1] + "远程控制你十分钟刷新一次");
		setTimeout(function() {
			update()
		}, 600000)
	}, "yuancheng", "");
	triggers.newTrigger(/(.*)告诉你：定时(.*)分钟刷新！/, function(m) {
		var a = m[2];
		clearbug();
		console.log(m[1] + "远程控制你定时" + a + "分钟刷新一次");
		setTimeout(function() {
			update()
		}, 60000 * a)
	}, "yuancheng", "");

	function kaimitu() {
		if (btnList['开秘图'].innerText == '开秘图') {
			if (confirm("拼图杀好人吗？")) {
				database.pt_killset = 0
			} else {
				database.pt_killset = 1
			}
			mitu_open()
		} else {
			mitu_close()
		}
	}
	function mitu_open() {
		btnList['开秘图'].innerText = '关秘图';
		btnList['开秘图'].style.borderStyle = 'inset';
		database.pt_flag = 1;
		triggers.enableByCls("mitu");
		if (!database.pt_killset) {
			database.pt_killset = 0
		}
		if (pintu_mode == 1) {
			pt_walk();
			go('e;.开始蹲点，秘图蹲点状态请勿进行其他操作')
		}
	}
	function mitu_close() {
		btnList['开秘图'].innerText = '开秘图';
		btnList['开秘图'].style.borderStyle = 'outset';
		database.pt_flag = 0;
		triggers.disableByCls("mitu")
	}
	function mitufuncre() {
		if (!database.pt_flag || database.pt_flag == 0) {
			mitu_close()
		} else {
			mitu_open()
		}
	}
	triggers.newTrigger(/已经太多人了，不要以多欺少啊。/, function(m) {
		console.log('一群疯狗跑得比神仙还快,小道再原地蹲下一个吧');
		nowjob = "";
		clearInterval(cu);
		if (pintu_mode == 0) {
			setTimeout(mibao_gw1, 1000)
		} else {
			clickButton('golook_room');
			setTimeout(mt_goback, 1000)
		}
	}, "mitu", "");
	triggers.newTrigger(/你的(.*)等级有所降低。/, function(m) {
		console.log("打拼图阵亡");
		nowjob = "";
		clickButton('golook_room');
		setTimeout(mt_goback, 1000);
		setTimeout(clearbug, 2000)
	}, "mitu", "");
	triggers.newTrigger(/好在有保险卡，没有降低技能等级/, function(m) {
		console.log("打拼图阵亡");
		nowjob = "";
		clickButton('golook_room');
		setTimeout(mt_goback, 1000);
		setTimeout(clearbug, 2000)
	}, "mitu", "");
	triggers.newTrigger(/【帮派】(.*)选择了(.*)宝藏地图。/, function(m) {
		console.log(m[0]);
		go("clan bzmt puzz;clan bzmt puzz;clan bzmt puzz;clan bzmt puzz")
	}, "mitu", "");
	triggers.newTrigger(/你今天完成的宝藏秘图任务数量已经超量了，明天继续吧。/, function(m) {
		console.log("今日拼图完毕，自动关闭拼图开关");
		go_home();
		mitu_close()
	}, "mitu1", "");
	triggers.newTrigger(/这是你今天完成的第(.*)\/4场宝藏秘图之战！/, function(m) {
		console.log("这是你今天完成的第" + m[1] + "/4场宝藏秘图之战！");
		clickButton('clan bzmt puzz');
		nowjob = "";
		setTimeout(function() {
			if (m[1] == "4") {
				console.log("今日拼图完毕，自动关闭拼图开关");
				go_home();
				mitu_close();
				return
			}
			if (m[1] < 4 && pintu_mode == 0) {
				mibao_gw()
			} else if (m[1] < 4 && pintu_mode == 1) {
				mt_goback()
			}
		}, 1500)
	}, "mitu", "");
	triggers.disableByCls("mitu");
	var dl = "学习十次";

	function ananniu() {
		if (btnList['按按钮'].innerText == '按按钮') {
			dl = prompt("请输入你看到的按钮名字", dl);
			btnList['按按钮'].innerText = '不按了';
			btnList['按按钮'].style.borderStyle = 'inset';
			doanniu = setInterval(anniugo, 150)
		} else {
			btnList['按按钮'].innerText = '按按钮';
			btnList['按按钮'].style.borderStyle = 'outset';
			clearInterval(doanniu)
		}
		function anniugo() {
			clickbtn(dl)
		}
	}
	triggers.newTrigger(/(.*)对著巨门剑灵喝道：「直娘贼！今日不是你死就是我活！」/, function(m) {
		setdonpc(m[1], "比试")
	}, "jumen", "");
	triggers.disableByCls("jumen");
	triggers.newTrigger(/(.*)往(.*)离开/, function(m) {
		clickButton('golook_room')
	}, "showcaozuo", "");
	triggers.disableByCls("showcaozuo");
	triggers.newTrigger(/成功开启了双倍祝福的帮派福利。/, function(m) {
		K = true;
		if (nowjob != 'pt' && nowjob != 'ql' && nowjob != 'yx' && !is_fighting) {
			go("home;clan scene")
		}
		setTimeout(function() {
			K = false
		}, 120 * 60000)
	}, "bp_double", "");
	triggers.disableByCls("bp_double");
	triggers.newTrigger(/欢迎来到【遇剑：江湖】游戏/, function(m) {
		$("span.out2:contains(欢迎来到【遇剑：江湖】游戏)").remove();
		words1("道长论剑重连成功！已自动失效重置");
		shixiaorebuilt()
	}, "connect", "");
	var dn = 0,
		eren_ar = ["恶棍", "流寇", "剧盗", "云老四", "岳老三", "二娘", "段老大"],
		eren = "恶棍流寇剧盗云老四岳老三二娘段老大",
		zx_flag = 0,
		auto_zx, zx_statue = 1,
		zx_delay = 600000,
		zx_set = 0,
		zxmap_delay = 500;

	function autoZhengxie() {
		if (zx_flag == 1) {
			zx_close()
		} else {
			if (confirm("杀恶人吗？")) {
				zx_set = 0;
				database.zx_set = 0
			} else {
				zx_set = 1;
				database.zx_set = 1
			}
			zx_open()
		}
	}
	function zx_open() {
		zx_flag = 1;
		database.zx_flag = 1;
		if (dn == 1 && zx_set == 0) {
			eren_ar = ["二娘", "段老大"];
			eren = "二娘段老大"
		} else {
			eren_ar = ['恶棍', "流寇", "剧盗", "云老四", "岳老三", "二娘", "段老大"];
			eren = "恶棍流寇剧盗云老四岳老三二娘段老大"
		}
		btnList["刷正邪"].style.borderStyle = 'inset';
		btnList["刷正邪"].innerText = '停正邪';
		zx_statue = 1;
		gozx()
	}
	function zx_close() {
		zx_flag = 0;
		database.zx_flag = 0;
		btnList["刷正邪"].style.borderStyle = 'outset';
		btnList["刷正邪"].innerText = '刷正邪';
		clearTimeout(auto_zx)
	}
	function gozx() {
		if (zx_flag == 0) {
			clearInterval(ql_tp);
			go_home()
		} else {
			chuzhao_zhaohuan();
			b_num = 0;
			zx(zx_statue);
			triggers.enableByCls("ql_gomap2");
			triggers.enableByCls("ql_gomap3");
			triggers.enableByCls("ql_gomap4")
		}
	}
	var is_hasnpc, b_num = 0;
	triggers.newTrigger(/这儿有：(.*)/, function(m) {
		is_hasnpc = false;
		for (var i = 0; i < eren_ar.length; i++) {
			if (m[1].indexOf(eren_ar[i]) != -1) {
				is_hasnpc = true
			}
		}
		console.log(is_hasnpc);
		if (is_hasnpc) {
			var b = document.getElementById('out').getElementsByTagName('button');
			if (b_num < b.length) {
				for (i = b_num; i < b.length; i++) {
					var a = b[i].innerHTML.replace(/<[^>]+>/g, "");
					if (eren.indexOf(a) != -1) {
						b_num = i + 1;
						U = a;
						opendonpc("杀死");
						chuzhao_zhaohuan();
						clearInterval(ql_tp);
						if (zx_set == 1) {
							b[i - 1].click()
						} else {
							b[i].click()
						}
						triggers.disableByCls("findqlnpc");
						triggers.enableByCls("fightqlnpc");
						triggers.enableByCls("taopaoqlnpc");
						console.log("找到" + U);
						return
					}
				}
			}
			console.log("第" + zx_statue + "个图恶人已打完，换下一个地方");
			triggers.disableByCls("findqlnpc");
			triggers.disableByCls("fightqlnpc");
			triggers.disableByCls("taopaoqlnpc");
			if (zx_statue == 10) {
				zx_statue = 1;
				clearInterval(ql_tp);
				go_home();
				auto_zx = o.setTimeout(gozx, zx_delay)
			} else {
				zx_statue = zx_statue + 1;
				o.setTimeout(gozx, 500)
			}
		} else {
			console.log("第" + zx_statue + "个图这儿没恶人，换下一个地方");
			triggers.disableByCls("findqlnpc");
			triggers.disableByCls("fightqlnpc");
			triggers.disableByCls("taopaoqlnpc");
			if (zx_statue == 10) {
				zx_statue = 1;
				clearInterval(ql_tp);
				go_home();
				auto_zx = o.setTimeout(gozx, zx_delay)
			} else {
				zx_statue = zx_statue + 1;
				o.setTimeout(gozx, zxmap_delay)
			}
		}
	}, "findqlnpc", "");

	function gethrqx() {
		if (document.getElementById('vs_hp21')) {
			var a = document.getElementById('vs_hp21').innerHTML.replace(/<[^>]+>/g, "");
			var b = Number(document.getElementById("barvader21").style.getPropertyValue('width').replace('%', "")) / 100;
			var c = parseInt(a / b);
			console.log(a + '---' + b + '---' + "好人总血量：" + c);
			if (zx_set == 1) {
				if (c < 650000) {
					chuzhao_zhaohuan();
					clearInterval(ql_tp);
					ql_tp = setInterval(taopao, 500);
					triggers.disableByCls("fightqlnpc");
					triggers.enableByCls("taopaoqlnpc")
				} else {
					chuzhao_open()
				}
			}
		}
	}
	triggers.newTrigger(/^你加入了战团！/, function(m) {
		if (document.getElementById('out2')) {
			owNum = document.getElementById('out2').getElementsByClassName('outkee_text').length;
			opNum = document.getElementById('out_top').getElementsByClassName('outkee_text').length;
			if (dn == 0) {
				if (opNum > 1 || owNum > 2) {
					chuzhao_close();
					clearInterval(ql_tp);
					ql_tp = setInterval(taopao, 500);
					triggers.disableByCls("fightqlnpc");
					triggers.enableByCls("taopaoqlnpc")
				}
			} else {
				if (opNum > 1) {
					chuzhao_close();
					clearInterval(ql_tp);
					ql_tp = setInterval(taopao, 500);
					triggers.disableByCls("fightqlnpc");
					triggers.enableByCls("taopaoqlnpc")
				} else {
					o.setTimeout(gethrqx, 1000)
				}
			}
		}
	}, "fightqlnpc", "");
	triggers.newTrigger(/(金甲符兵|玄阴符兵)加入了战团！/, function(m) {
		if (dn == 0) {
			chuzhao_close();
			clearInterval(ql_tp);
			ql_tp = setInterval(taopao, 500);
			triggers.disableByCls("fightqlnpc");
			triggers.enableByCls("taopaoqlnpc")
		}
	}, "fightqlnpc", "");
	triggers.newTrigger(/(逃跑成功！|这儿没有这个人物。|好在有保险卡，没有降低技能等级！|你赢了这场正邪之战！|已经超量了|已经太多人了|战斗胜利|恶人还没有开始行动，先静观其变)/, function(m) {
		triggers.disableByCls("fightqlnpc");
		triggers.disableByCls("taopaoqlnpc");
		clearInterval(ql_tp);
		if (zx_flag == 0) {
			go_home()
		} else {
			o.setTimeout(lookhere, 450)
		}
	}, "taopaoqlnpc", "");
	triggers.disableByCls("findqlnpc");
	triggers.disableByCls("fightqlnpc");
	triggers.disableByCls("taopaoqlnpc");

	function taopao() {
		clickButton('escape');
		console.log("正在逃跑")
	}
	function lookhere() {
		triggers.enableByCls("findqlnpc");
		clickButton('golook_room')
	}
	var dp = "1,5,9";

	function hongbao() {
		if (btnList['开红包'].innerText == '开红包') {
			btnList['开红包'].innerText = '关红包';
			btnList['开红包'].style.borderStyle = 'inset';
			dp = prompt("如果出现一大波红包你抢第几个（只限三个，请用英文逗号隔开1-10）清注意，使用红包功能时请先通过开发者清卡顿，然后再开启红包开关并且打开红包聊天窗口。抢红包期间请不要开青龙游侠，否则红包功能失效", dp);
			order1 = dp.split(',');
			ordertxt1 = "(" + order1[0] + "/10)";
			ordertxt2 = "(" + order1[1] + "/10)";
			ordertxt3 = "(" + order1[2] + "/10)";
			console.log(ordertxt1 + '--' + ordertxt2 + '--' + ordertxt3);
			if (confirm("后台抢吗？（是的话点确认然后不用管，否则点取消然后打开聊天窗口前台抢）")) {
				hongbao_flag = 1
			}
			triggers.enableByCls("hongbao")
		} else {
			btnList['开红包'].innerText = '开红包';
			btnList['开红包'].style.borderStyle = 'outset';
			hongbao_flag = 0;
			triggers.disableByCls("hongbao")
		}
	}
	function clearbugall() {
		if (btnList['开清卡'].innerText == '开清卡') {
			clearbug_open()
		} else {
			clearbug_close()
		}
	}
	var dq = '';

	function clearbug_open() {
		database.clearbug = 1;
		clearInterval(dq);
		dq = setInterval(clearbugnow, 600000);
		btnList['开清卡'].innerText = '关清卡';
		btnList['开清卡'].style.borderStyle = 'inset'
	}
	function clearbug_close() {
		database.clearbug = 0;
		clearInterval(dq);
		btnList['开清卡'].innerText = '开清卡';
		btnList['开清卡'].style.borderStyle = 'outset'
	}
	function clearbug_re() {
		if (!database.hasOwnProperty('clearbug')) {
			clearbug_open()
		}
	}
	function clearbugnow() {
		if (btnList['开红包'].innerText == '关红包' && hongbao_flag != 1) {
			clearbughongbao();
			console.log('当前正在进行抢红包清卡顿操作')
		} else {
			clearbug();
			g_gmain.notify_fail(HIG + "当前正在进行全局清卡顿操作" + NOR)
		}
	}
	function cehongbao() {
		for (i = 0; i < $("a[href]").length; i++) {
			var a = document.getElementsByTagName("a")[i].innerText;
			if (a.indexOf("点这儿") != -1) {
				console.log("抢红包通道在第" + i + "个a标签");
				last = i
			}
		}
		if (typeof last != "undefined" && document.getElementsByTagName("a")[last].innerText.indexOf("点这儿") != -1) {
			console.log("最后一个抢红包通道在第" + last + "个a标签，现在自动领取最后一个红包");
			lasthongbao = document.getElementsByTagName("a")[last];
			console.log("打印红包链接如下:" + lasthongbao + " 正在领取最后一个红包");
			document.getElementsByTagName("a")[last].click()
		} else {
			console.log("没有此红包")
		}
	}
	var dr = "点这儿";

	function dianlianjie() {
		dr = prompt("请输入快捷链接的字样(如青龙会的传送通道，谜题任务传送，红抢包等)", dr);
		clickhref(dr)
	}
	triggers.newTrigger(/(.*)赶紧点这儿试试新年手气吧！(.*)/, function(m) {
		if (m[2] == "" || m[2] == ordertxt1 || m[2] == ordertxt2 || m[2] == ordertxt3) {
			clickhref('点这儿');
			console.log("正在领取红包")
		}
	}, "hongbao", "");
	triggers.newTrigger(/你从(.*)发的新春红包里抢到了(.*)第100(.*)/, function(m) {
		btnList['开红包'].innerText = '开红包';
		btnList['开红包'].style.borderStyle = 'outset';
		hongbao_flag == 0;
		triggers.disableByCls("hongbao")
	}, "hongbao", "");
	triggers.newTrigger(/你从(.*)发的新春红包里抢到了(.*)/, function(m) {
		console.log(m[0])
	}, "hongbao", "");
	triggers.disableByCls("hongbao");

	function vip1() {
		goes('vip finish_sort', 5)
	}
	function vip2() {
		goes('clan incense yx', 20)
	}
	function tuoguanfuc() {
		if (kfql_flag == 1) {
			console.log('当前跨服青龙开关为1，不执行托管');
			return
		}
		readvip();
		setTimeout(tuoguanfuc1, 600)
	}
	function tuoguanfuc1() {
		if (vipplayer == true) {
			ql_close();
			youxia_close();
			clearbug_close();
			if (tuoguan > 0) {
				if (tuoguan == 2 && L == 1) {
					vip1()
				}
				if (L == 1) {
					setTimeout(vip2, 5000);
					setTimeout(vip, 10000);
					setTimeout(vip_eat, 40000);
					setTimeout(datiswitch, 60000);
					setTimeout(dpz, 90000);
					setTimeout(wey, 95000);
					setTimeout(cl, 100000);
					setTimeout(wxt, 105000);
					setTimeout(ck, 110000);
					setTimeout(byg, 115000);
					setTimeout(function() {
						counthead = 20;
						ssp1()
					}, 175000);
					setTimeout(function() {
						go("home");
						shijian()
					}, 275000);
					setTimeout(function() {
						go("clan bzmt select go 1");
						go("clan fb open shenshousenlin;clan fb open daxuemangongdao;clan fb open longwulianmoge;home")
					}, 454000);
					setTimeout(function() {
						if (tg_rc == 1) {
							buyrichang()
						}
					}, 458000);
					setTimeout(function() {
						console.log("开始清理背包");
						go('home');
						setTimeout(clearBag, 1000)
					}, 468000);
					if (tg_qx != 1) {
						setTimeout(function() {
							if (tg_ql == 1) {
								ql_open()
							}
							if (tg_yx == 1) {
								bn = "杀死";
								youxia_open()
							}
							clearbug_open();
							clearbug();
							setTimeout(pintulog, 10000);
							console.log("自动开启青龙游侠秘图清卡顿")
						}, 528000)
					} else if (tg_qx == 1) {
						setTimeout(function() {
							ai_qixia();
							triggers.enableByCls("tg_qixia")
						}, 528000)
					}
					return
				} else if (L == 0) {
					setTimeout(vip2, 5000);
					setTimeout(datiswitch, 10000);
					setTimeout(dpz, 30000);
					setTimeout(wey, 35000);
					setTimeout(cl, 40000);
					setTimeout(wxt, 45000);
					setTimeout(ck, 50000);
					setTimeout(byg, 55000);
					setTimeout(function() {
						counthead = 20;
						ssp1()
					}, 115000);
					setTimeout(function() {
						go("home");
						shijian()
					}, 215000);
					setTimeout(function() {
						go("clan bzmt select go 1");
						go("clan fb open shenshousenlin;clan fb open daxuemangongdao;clan fb open longwulianmoge;home");
						if (tg_rc == 1) {
							buyrichang()
						}
					}, 384000);
					setTimeout(function() {
						console.log("开始清理背包");
						go('home');
						setTimeout(clearBag, 1000)
					}, 390000);
					if (tg_qx != 1) {
						setTimeout(function() {
							if (tg_ql == 1) {
								ql_open()
							}
							if (tg_yx == 1) {
								bn = "杀死";
								youxia_open()
							}
							clearbug_open();
							clearbug();
							setTimeout(pintulog, 10000);
							console.log("自动开启青龙游侠秘图清卡顿")
						}, 448000)
					} else if (tg_qx == 1) {
						setTimeout(function() {
							ai_qixia();
							triggers.enableByCls("tg_qixia")
						}, 448000)
					}
					return
				}
			}
		} else {
			console.log("已到托管时间，可是您无权开启托管模式功能")
		}
	}
	function pintulog() {
		var a = pintuhao.split("-");
		if (tg_pt == 1) {
			for (i = 0; i < a.length; i++) {
				if (a[i] == myName) {
					mitu_open();
					if (pintu_mode == 0) {
						killmibao()
					}
				}
			}
			return
		} else if (tg_pt == 2) {
			mitu_open();
			if (pintu_mode == 0) {
				killmibao()
			}
		}
	}
	function vip_mt() {
		triggers.enableByCls("vip_mt");
		go('vip')
	}
	triggers.newTrigger(/谜题任务需要 谜题卡 x1 剩余 (.*) 次已完成 (.*)\/15 次/, function(m) {
		triggers.disableByCls("vip_mt");
		go('prev');
		var a = parseInt(m[1]);
		var b = parseInt(m[2]);
		console.log('已完成谜题' + b + '次,剩余可购买谜题' + a + '次');
		if (b == 16) {
			console.log('暴击已卡16，不需要再点')
		} else if (b == 15 && a == 0) {
			console.log('暴击已做完，无需再点')
		} else if (b == 15 && a > 0) {
			var c = '';
			for (var i = 0; i < a; i++) {
				c += 'vip buy_task;vip finish_big_task;'
			}
			c = c + 'prev';
			go(c)
		} else if (b < 15 && b >= 10) {
			var c = '';
			for (var i = 0; i < (15 - b); i++) {
				c += 'vip finish_task;'
			}
			for (var i = 0; i < a; i++) {
				c += 'vip buy_task;vip finish_big_task;'
			}
			c = c + 'prev';
			go(c)
		} else if (b < 10) {
			var c = '';
			for (var i = 0; i < (10 - b); i++) {
				c += 'vip finish_big_task;'
			}
			for (var i = 0; i < 5; i++) {
				c += 'vip finish_task;'
			}
			for (var i = 0; i < a; i++) {
				c += 'vip buy_task;vip finish_big_task;'
			}
			c = c + 'prev';
			go(c)
		}
	}, "vip_mt", "");
	triggers.disableByCls("vip_mt");
	var ds = setInterval(date_handle, 60000);

	function date_handle() {
		H = new Date();
		var h = H.getHours();
		var m = H.getMinutes();
		var w = H.getDay();
		var d = H.getDate();
		var u = H.getMonth() + 1;
		if ((kfql_flag == 0 && w == 1 && h == 0 && m == 1 && banxiaohao.indexOf(myName) == -1) || (kfql_flag == 0 && h == 18 && m == 1 && banxiaohao.indexOf(myName) == -1)) {
			nexttask = function() {
				qd()
			}
			checktask()
		}
		if (h == 7 && m == 5 && vipplayer == true && buything == 1) {
			bangshop()
		}
		if (h == 5 && m == 55 && vipplayer == true && L == 1) {
			clearbug_close();
			if (vipzx == 1) {
				str = "vip finish_bad 1";
				goes(str, 20);
				console.log("vip定时点正气任务执行中")
			}
			if (vipzx == 2) {
				str = "vip finish_bad 2";
				goes(str, 20);
				console.log("vip定时点负气任务执行中")
			}
			if (tuoguan == 2) {
				str = "vip finish_clan";
				goes(str, 20);
				console.log("vip定时点帮派任务执行中");
				setTimeout(vip_mt, 4000)
			}
		}
		if (tuoguan != 0 && h == tuoguanh && m == tuoguanm) {
			console.log("开始执行托管任务");
			tuoguanfuc()
		}
		if (w == 3 && h == 21 && m == 8) {
			bG = function() {
				if (timeCmd == 0 && !is_fighting && nowjob != 'ql' && nowjob != 'yx' && nowjob != 'pt') {
					clearTimeout(qx_bstime);
					go_home();
					go('swords get_drop go')
				} else {
					clearTimeout(qx_bstime);
					qx_bstime = setTimeout(bG, 120000);
					console.log("当前正忙，延迟2分钟后自动领取本服论剑积分")
				}
			};
			qx_bstime = setTimeout(bG, 120000);
			console.log("两分钟后自动领取本服论剑积分")
		}
		if (w == 3 && h == 19 && m == 55) {
			autoEquipOn();
			if (bg != 1) {
				chuzhao_open()
			}
		}
		if ((w == 1 || w == 2) && h == 6 && m == 20 && kfql_flag == 1) {
			ql_killset = 1;
			database.ql_killset = ql_killset;
			ql_open();
			qllimit()
		}
		if (w == 4 && h == 6 && m == 20 && kfql_flag == 1) {
			if (bg != 1) {
				chuzhao_open()
			}
			database.tf_killset = 1;
			tf_flag = 1;
			btnList['开逃犯'].style.borderStyle = 'inset';
			btnList['开逃犯'].innerText = '关逃犯'
		}
		if ((h == 0 && m == 0) || (h == 3 && m == 0) || (h == 6 && m == 0) || (h == 9 && m == 0) || (h == 12 && m == 0) || (h == 15 && m == 0) || (h == 18 && m == 0) || (h == 21 && m == 0)) {
			if (autopifu == 1) {
				changeface()
			}
		}
		if (database.dingshihours == h && database.dingshiminus == m) {
			if (database.dingshifunc == "签到") {
				console.log("定时器开始执行签到");
				nexttask = function() {
					qd()
				}
				checktask()
			}
			if (database.dingshifunc == "拼图") {
				console.log("定时器开始执行拼图");
				if (tuoguan == 0) {
					go('clan bzmt select go 1');
					go("clan fb open shenshousenlin")
				}
				if (database.pt_flag == 0) {
					go("clan bzmt puzz;clan bzmt puzz;clan bzmt puzz;clan bzmt puzz")
				}
				if (vipplayer == true) {
					pintulog()
				}
			}
			if (database.dingshifunc == "回主页") {
				console.log("定时器开始执行回主页");
				go("home;clan scene")
			}
			if (database.dingshifunc == "帮派开双" && kfql_flag == 0) {
				console.log("定时器开始执行帮派开双");
				go("clan open_double go;home")
			}
			if (database.dingshifunc == "关闭") {
				console.log("定时器关闭中")
			}
		}
		if (h == autozx.split(';')[0].split(':')[0] && m == autozx.split(';')[0].split(':')[1] && myName == autozx.split(';')[2]) {
			zx_set = autozx.split(';')[3];
			zx_open()
		}
		if (h == autozx.split(';')[1].split(':')[0] && m == autozx.split(';')[1].split(':')[1] && myName == autozx.split(';')[2]) {
			zx_close()
		}
		if (tg_ptdingshi.split(';')[0] == 1 && h == tg_ptdingshi.split(';')[1].split(':')[0] && m == tg_ptdingshi.split(':')[1].split(';')[0]) {
			var a = tg_ptdingshi.split(';')[2];
			var b = a.split('-');
			var c = '';
			for (var i = 0; i < b.length; i++) {
				if (b[i] == myName) {
					c = b[i]
				}
			}
			if (c == myName) {
				console.log('定时执行自动开秘图蹲点模式');
				pintu_mode = 1;
				mitu_open()
			}
		}
		if (database.ds_jzjs != '关闭' && h == cD && m == dsjzjs_m) {
			console.log('定时执行一次加速剑阵！');
			nexttask = jz_js;
			checktask()
		}
		if (u == 10 && d < 15 && h == 19 && m == 1 && kfql_flag == 1) {
			console.log('执行定时开BOSS');
			open_boss()
		}
		if (u == 10 && d < 15 && h == 19 && m == 55 && kfql_flag == 1) {
			console.log('执行定时关BOSS');
			close_boss()
		}
		if (u == 10 && d < 15 && h == 19 && m == 55 && kfql_flag == 0) {
			console.log('执行定时非忙碌下领取boss奖励');
			nexttask = function() {
				if (gSocketMsg._is_in_home == 1 && cmdCache.length == 0 && !is_fighting) {
					go('jh 1;lq_znboss_rewards;home')
				} else {
					console.log('忙碌中，5秒后检测领取boss奖励');
					clearTimeout(bs_time);
					bs_time = setTimeout(nexttask, 5000)
				}
			};
			nexttask()
		}
	}
	createButton('设参数', btnBox1, canshu_set);
	createButton('开青龙', btnBox1, qingLongSwitch);
	createButton('开游侠', btnBox1, youXiaSwitch);
	createButton('开任务', btnBox1, shiMenSwitch);
	createButton('开秘图', btnBox1, kaimitu);
	createButton('开奇侠', btnBox1, qiXiaSwitch);
	createButton('开BOSS', btnBox1, boss_open);
	createButton('开破招', btnBox1, pozhao);
	createButton('开强化', btnBox1, fightbtnswitch);
	createButton('开关集', btnBox1, kgjfunc);
	createButton('开清卡', btnBox1, clearbugall);
	createButton('开日志', btnBox1, bjlist);
	createButton('查更新', btnBox1, qlyxdzupdate);
	createButton('看需求', btnBox2, lookyxneed);
	createButton('设需求', btnBox2, qlxq);
	createButton('不附加', btnBox2, fujia_switch);
	createButton('比试某', btnBox2, bsgfunc);
	createButton('循环杀', btnBox2, onekillFunc);
	createButton('悟性装', btnBox2, wuxingEquip);
	createButton('不加力', btnBox2, enforceFunc);
	createButton('摸尸体', btnBox2, AutoGetst);
	createButton('吃千年', btnBox2, eat);
	createButton('杀帮副', btnBox2, killbf);
	createButton('杀红名', btnBox2, killred);
	createButton('杀黄名', btnBox2, killyellow);
	createButton('开跟杀', btnBox2, killfollow);
	createButton('总设置', btnBox3, setAll);
	createButton('设id', btnBox3, idsetfunc);
	createButton('搜游侠', btnBox3, searchYouxia);
	createButton('搜青龙', btnBox3, searchqinglong);
	createButton('寻路集', btnBox3, searchmap);
	createButton('开发者', btnBox3, kazfunc);
	createButton('任务集', btnBox3, rwjfunc);
	createButton('特殊集', btnBox3, tsjfunc);
	createButton('走迷人', btnBox3, zmrfunc);
	createButton('打奇侠', btnBox3, dqxfunc);
	createButton('合宝玉', btnBox3, fastbaoshifunc);
	createButton('主线集', btnBox3, master_job);
	createButton('支线集', btnBox3, side_job);
	createButton('显操作', btnBox4, killhideFuncs);
	createButton('叫杀怪', btnBox4, fastkill);
	createButton('开谜题', btnBox4, miTiSwitch);
	createButton('刷暴击', btnBox4, askMiti);
	createButton('开出招', btnBox4, runhit);
	createButton('不出招', btnBox4, pfm);
	createButton('刷正邪', btnBox4, autoZhengxie);
	createButton('按按钮', btnBox4, ananniu);
	createButton('点链接', btnBox4, dianlianjie);
	createButton('显按钮', btnBox4, buttonhideFunc);
	createButton('换皮肤', btnBox4, changeface);
	createButton('进官网', btnBox4, urlButtonFunc);
	createButton('看公告', btnBox4, kggfunc);
	createButton('一键治疗', btnBox5, autorecovery);
	createButton('快捷装卸', btnBox5, fastofffunc);
	createButton('逃跑回坑', btnBox5, escapeStart);
	createButton('逃跑换边', btnBox5, escapechangeStart);
	createButton('逃跑治疗', btnBox5, escaperecStart);
	createButton('治疗回坑', btnBox5, escaperecback);
	createButton('治疗换边', btnBox5, escaperecchange);
	createButton('观战抢坑', btnBox5, guanzhanFunc);
	createButton('精确打人', btnBox5, hitPLYFunc);
	createButton('精准打怪', btnBox5, hitNPCFunc);
	createButton('跟随大佬', btnBox5, followPLYFunc);
	createButton("不开智能", btnBox5, aichuzhao);
	createButton('锁定目标', btnBox5, suodingset);
	hideButton();
	hide_fightbtn();
	jinyongButton();

	function pifuset() {
		for (var i = 0; i < bb.length; i++) {
			bb[i].style.color = color;
			bb[i].style.background = ground
		}
		ba.style.color = color;
		ba.style.background = ground;
		for (var a in btnList) {
			if (btnList[a].innerText == a) {
				btnList[a].style.color = color;
				btnList[a].style.background = ground
			}
		}
		screenLog.changecss();
		if (document.getElementById('btn_close')) {
			html580ads.changemsgcss()
		}
	}
	var dt = "晶蓝城堡";

	function changeface() {
		if (pifu < 9) {
			pifu++
		} else {
			pifu = 0
		}
		if (pifu == 0) {
			dt = "晶蓝城堡"
		} else if (pifu == 1) {
			dt = "蔚蓝天空"
		} else if (pifu == 2) {
			dt = "紫色起源"
		} else if (pifu == 3) {
			dt = "万物复苏"
		} else if (pifu == 4) {
			dt = "淡绿生机"
		} else if (pifu == 5) {
			dt = "红光满面"
		} else if (pifu == 6) {
			dt = "丰收时节"
		} else if (pifu == 7) {
			dt = "粉丝佳人"
		} else if (pifu == 8) {
			dt = "黑色深沉"
		} else if (pifu == 9) {
			dt = "白色优雅"
		}
		color = eval(clrs1 + pifu);
		ground = eval(clrs2 + pifu);
		console.log("当前皮肤为：" + dt);
		g_gmain.notify_fail(HIG + "皮肤更换成功！" + NOR);
		pifuset()
	}
	function beginf5() {
		max_main_msg_count = 1000;
		screenLog.init();
		consolelog_re();
		qiecuoset_re();
		screenLog.log('道长论剑DZ正版（传说）By道长: version---' + nowversion);
		words2('温馨提示：使用本套脚本进行挂机多个号时，务必将浏览器窗口分屏，千万不要放到隐藏的后台标签页，确保脚本运行标识为1方能正常运行');
		pifuset();
		xutupo();
		clearbug_re();
		aichuzhaore();
		kbcfuncre();
		mitufuncre();
		mtwait_re();
		pizhun_re();
		canshu_re();
		showneilire();
		ds_jzjsre();
		if (!database.gensha) {
			database.gensha = 0
		}
		if (kgg_flag == 1) {
			alertmsg('道长论剑论坛', '道长论剑DZ正版' + nowversion)
		}
		setTimeout(function() {
			if (kgg_flag == 1) {
				kggfunc()
			}
		}, 5000)
	}
	beginf5()
})(window);