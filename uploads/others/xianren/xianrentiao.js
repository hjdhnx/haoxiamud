cz_skills = mySkillLists.split(";");

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
	if (c == false) {
		console.log("你的当前设备为移动端，已为你优化默认布局");
		buju = 80
	} else if (buju == "auto") {
		if (window.screen.height == 1080) {
			buju = 300
		} else if (window.screen.height == 768) {
			buju = 100
		} else if (window.screen.height == 720) {
			buju = 50
		} else if (window.screen.height < 720) {
			buju = 0
		} else if (window.screen.height > 1080) {
			buju = 500
		} else {
			buju = 300
		}
		console.log("功能按钮布局已自动优化为" + buju)
	}
}
IsPC();
var btnList = {},
	paddingLeft = '0px',
	paddingRight = '0px',
	clrs1 = 'color',
	clrs2 = 'ground',
	color0 = '#E0EEEE',
	ground0 = '#9370DB',
	color1 = '#BFEFFF',
	ground1 = '#BDB76B',
	color2 = '#E0EEE0',
	ground2 = '#CD661D',
	color3 = '#FFFAFA',
	ground3 = '#FFB6C1',
	color4 = null,
	ground4 = null,
	color = eval(clrs1 + pifu),
	ground = eval(clrs2 + pifu),
	buttonWidth = '70px',
	buttonHeight = '20px',
	currentPos = 5,
	delta = 30,
	nowversion = "1.1.0",
	database = window.localStorage;
var btnBox4 = document.createElement('div');
btnBox4.style.position = 'absolute';
btnBox4.style.top = '210px';
btnBox4.style.left = 330 + buju + 'px';
btnBox4.style.width = buttonWidth;
btnBox4.style.height = buttonHeight;
document.body.appendChild(btnBox4);
var btnBox3 = document.createElement('div');
btnBox3.style.position = 'absolute';
btnBox3.style.top = '210px';
btnBox3.style.left = 400 + buju + 'px';
btnBox3.style.width = buttonWidth;
btnBox3.style.height = buttonHeight;
document.body.appendChild(btnBox3);

var btnBox2 = document.createElement('div');
btnBox2.style.position = 'absolute';
btnBox2.style.top = '210px';
btnBox2.style.left = 470 + buju + 'px';
btnBox2.style.width = '60px';
btnBox2.style.height = '60px';
document.body.appendChild(btnBox2);

var btnBox1 = document.createElement('div');
btnBox1.style.position = 'absolute';
btnBox1.style.top = '210px';
btnBox1.style.left = 540 + buju + 'px';
btnBox1.style.width = '60px';
btnBox1.style.height = '60px';
document.body.appendChild(btnBox1);

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
	d.style.height = '100%';;
	d.addEventListener('click', c);
	b.appendChild(d)
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
database.alert_flag = 1;
alertmsg("道长仙人跳", "此脚本内测开发中，有新功能需求建议请联系道长。\n道长唯一qq：434857005");
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
		btnList['显按钮'].innerText = '隐按钮';
		showButton()
	} else {
		buttonhiden = 0;
		btnList['显按钮'].innerText = '显按钮';
		hideButton()
	}
}
function showButton() {
	for (var a in btnList) {
		btnList[a].style.visibility = "visible"
	}
}
function hideButton() {
	for (var a in btnList) {
		if (a != "显按钮") {
			btnList[a].style.visibility = "hidden"
		}
	}
}
var myDate = new Date();
var nowtime = myDate.toLocaleString();
var userid = "u" + window.location.href.split("id=")[1].split("&")[0],
	userqu = window.location.href.split("direct")[1].split(".")[0];

function msgs() {
	console.log("上次网页刷新时间：" + nowtime);
	console.log("您的用户id是" + userid);
	console.log("您所在区是" + userqu + "区");
	console.log("当前功能按钮布局为" + buju)
}
setTimeout(msgs, 1000);
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
		var b = createElement('div', 'font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:bold;padding:5px;text-align:left;opacity:0.8;position:fixed;left:300px;top:216px;min-width:200px;max-height:50vh;overflow:auto;background:' + a.bgColor + ';color:' + a.color + ';' + a.css);
		b.style.left = 610 + buju + 'px';
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
screenLog.init();
screenLog.log('道长仙人跳By道长: version---' + nowversion);
(function(j) {
	j.triggers = new Triggers();
	eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('95(8U(p,a,c,k,e,r){e=8U(c){8V(c<a?\'\':e(91(c/a)))+((c=c%a)>35?8Y.94(c+29):c.90(36))};8X(!\'\'.8W(/^/,8Y)){8Z(c--)r[e(c)]=k[c]||e(c);k=[8U(e){8V r[e]}];e=8U(){8V\'\\\\w+\'};c=1};8Z(c--)8X(k[c])p=p.8W(92 93(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);8V p}(\'5y(5t(d,e,a,c,b,f){b=5t(a){5u(a<e?"":b(5E(a/e)))+(35<(a%=e)?5v.5z(a+29):a.5C(36))};5D(!"".5w(/^/,5v)){5x(;a--;)f[b(a)]=c[a]||b(a);c=[5t(a){5u f[a]}];b=5t(){5u"\\\\\\\\w+"};a=1}5x(;a--;)c[a]&&(d=d.5w(5A 5B("\\\\\\\\b"+b(a)+"\\\\\\\\b","g"),c[a]));5u d}("2F(21(d,e,a,c,b,f){b=21(a){20(a<e?\\\\"\\\\":b(2l(a/e)))+(35<(a%=e)?2y.2R(a+29):a.2V(36))};2C(!\\\\"\\\\".2b(/^/,2y)){25(;a--;)f[b(a)]=c[a]||b(a);c=[21(a){20 f[a]}];b=21(){20\\\\"\\\\\\\\\\\\\\\\w+\\\\"};a=1}25(;a--;)c[a]&&(d=d.2b(2W 33(\\\\"\\\\\\\\\\\\\\\\b\\\\"+b(a)+\\\\"\\\\\\\\\\\\\\\\b\\\\",\\\\"g\\\\"),c[a]));20 d}(\\\\"B.1b(/(\\\\\\\\2m\\\\\\\\2o\\\\\\\\2r\\\\\\\\2t\\\\\\\\1Z|\\\\\\\\3i\\\\\\\\3k\\\\\\\\3n\\\\\\\\23\\\\\\\\2r\\\\\\\\2t|\\\\\\\\2D\\\\\\\\3r\\\\\\\\2E\\\\\\\\23\\\\\\\\2P|\\\\\\\\2m\\\\\\\\2o\\\\\\\\28\\\\\\\\1Z!|\\\\\\\\28\\\\\\\\1Z\\\\\\\\22\\\\\\\\2D\\\\\\\\2S\\\\\\\\2T\\\\\\\\2U\\\\\\\\2E\\\\\\\\23\\\\\\\\1Z)/,7(m){g.f(\\\'\\\\\\\\30\\\\\\\\23\\\\\\\\2n\\\\\\\\3g\\\\\\\\1Z!\\\'+m[0]);B.18(\\\\\\\\\\\\"h\\\\\\\\\\\\");y(z)},\\\\\\\\\\\\"h\\\\\\\\\\\\",\\\\\\\\\\\\"\\\\\\\\\\\\");B.1b(/\\\\\\\\23\\\\\\\\3q\\\\\\\\2f\\\\\\\\2g\\\\\\\\3D\\\\\\\\28\\\\\\\\3E\\\\\\\\3F\\\\\\\\22\\\\\\\\24\\\\\\\\24\\\\\\\\2Q/,7(m){l(7(){u(\\\'h\\\')},1F)},\\\\\\\\\\\\"1E\\\\\\\\\\\\",\\\\\\\\\\\\"\\\\\\\\\\\\");B.18(\\\\\\\\\\\\"h\\\\\\\\\\\\");7 1a(s){8 a=$(\\\'12\\\');v(8 i=0;i<a.e-1;i++){3(a[i].N.d(s)>-1){8 b=a[i].R(\\\'S\\\');3(b.d(\\\'u\\\')>-1){b=a[i].R(\\\'S\\\').4(\\\\\\\\\\\\"\\\'\\\\\\\\\\\\")[1];u(b);g.f(\\\'\\\\\\\\2d\\\\\\\\2e\\\\\\\\2N\\\\\\\\2i\\\\\\\\3A\\\\\\\\3B\\\\\\\\2j\\\\\\\\2k:\\\'+b)}6{10(b);g.f(\\\'\\\\\\\\2d\\\\\\\\2e\\\\\\\\2N\\\\\\\\2i\\\\\\\\3G\\\\\\\\3N\\\\\\\\2j\\\\\\\\2k:\\\'+b)}}}}8 V=\\\'\\\';7 1d(s){v(8 i=$(\\\\\\\\\\\\"a[17]\\\\\\\\\\\\").e-1;i>0;i--){8 a=W.G(\\\\\\\\\\\\"a\\\\\\\\\\\\")[i].N;3(a.d(s)!=-1){O=i;i=1}}3(1L O!=\\\\\\\\\\\\"1B\\\\\\\\\\\\"&&W.G(\\\\\\\\\\\\"a\\\\\\\\\\\\")[O].N.d(s)!=-1){g.f(\\\\\\\\\\\\"\\\\\\\\26\\\\\\\\27\\\\\\\\2d\\\\\\\\2e\\\\\\\\2h\\\\\\\\2u\\\\\\\\2w\\\\\\\\2x\\\\\\\\31\\\\\\\\\\\\"+s);V=W.G(\\\\\\\\\\\\"a\\\\\\\\\\\\")[O].R(\\\'17\\\').4(\\\\\\\\\\\\"\\\'\\\\\\\\\\\\")[1];g.f(V);u(V)}6{g.f(\\\\\\\\\\\\"\\\\\\\\2f\\\\\\\\2g\\\\\\\\32\\\\\\\\2h\\\\\\\\2u\\\\\\\\2w\\\\\\\\2x\\\\\\\\\\\\")}}8 J=\\\\\\\\\\\\"\\\\\\\\3a\\\\\\\\3b\\\\\\\\3d\\\\\\\\3e\\\\\\\\3f\\\\\\\\\\\\",z=\\\\\\\\\\\\"\\\\\\\\\\\\";7 16(){$(\\\\\\\\\\\\"12.1r\\\\\\\\\\\\").1s(7(){3(1l($(1k).1t(),J))10($(1k).1u(\\\\\\\\\\\\"S\\\\\\\\\\\\").1w(\\\\\\\\\\\\"1D 19\\\\\\\\\\\\",\\\\\\\\\\\\"1N 19\\\\\\\\\\\\"))})}7 1l(a,b){Z a.d(b)>=0}8 Y;7 1f(n){8 b=W.1X(\\\'1R\\\').G(\\\'12\\\');v(8 i=0;i<b.e;i++){3(b[i].N==n){Y=b[i].R(\\\'S\\\').4(\\\\\\\\\\\\"\\\'\\\\\\\\\\\\")[1].4(\\\\\\\\\\\\" \\\\\\\\\\\\")[1];Z}}}8 1j=1,q=0,9=\\\\\\\\\\\\"\\\\\\\\\\\\",j=[],p=1g,o=1O;7 U(a){8 b=a.4(\\\\\\\\\\\\";\\\\\\\\\\\\");3(1j&&o){j=j.1G(b);3(!p)T()}6{v(8 c=0;c<b.e;c++)X(b[c])}}7 T(){8 a=j.1c();8 b=a.4(\\\\\\\\\\\\";\\\\\\\\\\\\");3(!1C){Z}X(b[0]);v(8 i=b.e-1;i>0;i--){j.1z(b[i])}3(j.e>0){p=l(T,o)}6{p=1;l(7(){3(j.e==0)p=0;6 T()},o)}}7 1x(){x(p);p=0;j=[]}8 1h=7(){},Q=7(){},P=7(){},F,C;7 1m(){3(!1n&&j.e==0){x(F);1h()}6{x(F);F=l(1m,1o)}}7 M(){3(p==1g){x(C);g.f(\\\'\\\\\\\\2X\\\\\\\\2Y\\\\\\\\2Z\\\'+j.e+\\\\\\\\\\\\"\\\\\\\\2f\\\\\\\\2g\\\\\\\\2p\\\\\\\\2q\\\\\\\\22\\\\\\\\2a\\\\\\\\2s\\\\\\\\34\\\\\\\\37\\\\\\\\38\\\\\\\\39\\\\\\\\\\\\");Q()}6 3(1n){L.1I(1p+\\\\\\\\\\\\"\\\\\\\\26\\\\\\\\27\\\\\\\\3c\\\\\\\\5s\\\\\\\\2p\\\\\\\\2q\\\\\\\\2v\\\\\\\\2c\\\\\\\\2c\\\\\\\\2c\\\\\\\\\\\\"+K);C=l(M,15)}6 3(!p==1v){g.f(\\\\\\\\\\\\"\\\\\\\\26\\\\\\\\27\\\\\\\\3h\\\\\\\\2z\\\\\\\\2A\\\\\\\\22\\\\\\\\3j\\\\\\\\24\\\\\\\\2B\\\\\\\\3l\\\\\\\\2z\\\\\\\\2A\\\\\\\\2n\\\\\\\\3m:\\\\\\\\\\\\"+j.e);C=l(M,15)}6{x(C);Q()}}7 14(s){L.13(1y+s+\\\\\\\\\\\\"\\\\\\\\\\\\\\\\n\\\\\\\\\\\\"+K)}7 1e(s){L.13(1A+s+\\\\\\\\\\\\"\\\\\\\\\\\\\\\\n\\\\\\\\\\\\"+K)}7 I(s){L.13(1p+s+\\\\\\\\\\\\"\\\\\\\\\\\\\\\\n\\\\\\\\\\\\"+K)}8 t=0,w=\\\\\\\\\\\\"\\\\\\\\\\\\",E=0,D=0,A=[];7 X(s){3(s==\\\'#1H\\\'){t=1}6 3(s==\\\'#1q\\\'){t=0;D--}6 3(s.d(\\\'=\\\')>-1){o=1J(s.4(\\\'=\\\')[1])}6 3(s.d(\\\'.\\\')>-1){g.f(s.4(\\\'.\\\')[1])}6 3(s.d(\\\'!\\\')>-1){3(s.4(\\\'!\\\')[0]!=\\\'\\\'){3(s.4(\\\'!\\\')[0]==\\\'1\\\'){1e(s.4(\\\'!\\\')[1])}6 3(s.4(\\\'!\\\')[0]==\\\'2\\\'){I(s.4(\\\'!\\\')[1])}6{14(s.4(\\\'!\\\')[1])}}6{14(s.4(\\\'!\\\')[1])}}6 3(s.d(\\\'?\\\')>-1){3(s.4(\\\'?\\\')[0]!=\\\'\\\'){1f(s.4(\\\'?\\\')[1]);u(s.4(\\\'?\\\')[0]+\\\' \\\'+Y)}6{1a(s.4(\\\'?\\\')[1])}}6 3(s.d(\\\'@\\\')>-1){J=s.4(\\\'@\\\')[1];16();g.f(\\\'\\\\\\\\3o\\\\\\\\3p\\\'+J)}6 3(s.d(\\\'~\\\')>-1){u(\\\'1K\\\')}6 3(s.d(\\\'^\\\')>-1){P=10(s.4(\\\'^\\\')[1])}6 3(s.d(\\\'$\\\')>-1){P();3(s.4(\\\'$\\\')[0]==\\\'0\\\'){P=7(){}}}6 3(s.d(\\\'+\\\')>-1){1d(s.4(\\\'+\\\')[1])}6{u(s)}}7 H(){3(q<9.e){U(9[q]);q++;3(q<9.e){Q=7(){H()};l(M,9[(q-1)].4(\\\';\\\').e*o+1M)}6 3(q==9.e){q=0}}}8 r=[];7 11(){3(r.e==0){r=A}3(t==0&&r.e>0){g.f(\\\'\\\\\\\\3s\\\\\\\\2s\\\'+r[0].1P(0,1Q)+\\\'...\\\');y(r[0]);r.1c();3(r.e==0){1i()}}6{l(11,15)}}7 1i(){g.f(\\\\\\\\\\\\"\\\\\\\\3t\\\\\\\\3u\\\\\\\\3v\\\\\\\\3w\\\\\\\\3x\\\\\\\\3y\\\\\\\\3z\\\\\\\\\\\\");D=0;t=0;w=\\\\\\\\\\\\"\\\\\\\\\\\\";E=0;D=1;A=[]}7 y(s){3(t==0){9=s;3(9.d(\\\'h;\\\')>-1&&9.4(\\\'h;\\\')[1].4(\\\';\\\').e>0&&\\\'1S\\\'.d(9.4(\\\'h;\\\')[1].4(\\\';\\\')[0])>-1){z=9.1T(9.d(\\\'h;\\\')+5);9=9.4(\\\';h;\\\');9[0]=9[0]+\\\';h\\\';3(9[0].d(\\\'|\\\')>-1){9=9[0].4(\\\'|\\\');8 a=0;I(\\\'\\\\\\\\2a\\\\\\\\2G\\\\\\\\1Z\\\\\\\\2H\\\\\\\\2I\\\\\\\\2J\\\\\\\\2K\\\\\\\\2L\\\\\\\\2M\\\');H()}6{U(9[0])}l(7(){B.1U(\\\\\\\\\\\\"h\\\\\\\\\\\\")},1V)}6 3(9.d(\\\'|\\\')>-1){z=\\\'\\\';9=9.4(\\\'|\\\');8 a=0;I(\\\'\\\\\\\\2a\\\\\\\\2G\\\\\\\\1Z\\\\\\\\2H\\\\\\\\2I\\\\\\\\2J\\\\\\\\2K\\\\\\\\2L\\\\\\\\2M\\\');H()}6{z=\\\'\\\';U(9)}}6 3(t==1){3(w==\\\'\\\'){w=s;A[0]=w}6 3(w!=\\\'\\\'){E++;D=E;A[E]=s}l(11,1o)}}7 1W(a){8 b=(a/o);g.f(\\\\\\\\\\\\"\\\\\\\\3H\\\\\\\\3I\\\\\\\\2v\\\\\\\\22\\\\\\\\24\\\\\\\\2B\\\\\\\\\\\\"+b*o+\\\\\\\\\\\\"\\\\\\\\3J\\\\\\\\3K\\\\\\\\\\\\");v(8 k=0;k<a/o;k++){y(\\\\\\\\\\\\"\\\\\\\\\\\\")}}7 1Y(b,c){8 a=\\\'\\\';v(8 i=0;i<c;i++){a+=b+\\\';\\\'}y(a)}\\\\",3L,3M,\\\\"   2C 2O  3O 21 3P 3Q    3R 3S 3T 3U 3V  3W  3X   3Y 3Z 41 42  43 44 25 45 46 47 48 49 4a 4b 4c 4d 4e 4f 4g 4h 4i 4j 4k 4l 4m 4n 4o 4p 4q 4r 4s 4t 4u 4v 4w 4x 20 2F 4y 4z 4A 4B 4C 4D 4E 4F 4G 4H 4I 4J 4K 4L 4M 4N 4O 4P 4Q 4R 4S 4T 4U 4V 4W 4X 4Y 4Z 50 51 52 2b 53 54 55 56 57 58 59 5a 5b 5c 5d 5e 2l 5f 5g 5h 5i 5j 5k 40 5l 5m 5n 5o 5p 5q 5r 3C\\\\".2O(\\\\" \\\\"),0,{}));",62,5H,"                                                                                                                           5I 5u 5t 5J 5K 5L 5x 5M 5N 5O  5P 5w 5Q 5R 5S 5T 5U 5V 5W 5X 5Y 5E 5Z 60 61 63 64 65 66 67 68 69 6a 6b 5v 6c 6d 6e 5D 6f 6g 5y 6h 6i 6j 6k 6l 6m 6n 6o 5F 6p 6q 5z 6r 6s 6t 5C 5A 6u 6v 6w 6x 6y 6z 5B 6A   6B 6C 6D 6E 6F 6G 6H 6I 6J 6K 6L 6M 6N 6O 6P 6Q 6R 6S 6T 6U 6V 6W 6X 6Y 6Z 70 71 72 73 74 75 76 77 78 79 7a 7b 7c 7d 7e 62 7f 7g 7h 7i 7j 7k 7l 7m 7n 7o 7p 7q 7r 7s  7t 7u 7v 7w 7x 7y 7z 7A 7B 7C 7D 7E 7F 7G 7H 7I 7J 7K 7L 7M 7N 7O 7P 7Q 7R 7S 7T 7U 7V 7W 7X 7Y 7Z 80 81 82 83 84 85 86 87 88 89 8a 8b 8c 8d 8e 8f 8g 8h 8i 8j 8k 8l 8m 8n 8o 8p 8q 8r 8s 8t 8u 8v 8w 8x 8y 8z 8A 8B 8C 8D 8E 8F 8G 8H 8I 8J 8K 8L 8M 8N 8O 8P 8Q 8R 8S 8T 5G".5F(" "),0,{}));\',62,98,\'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||8U|8V|8Y|8W|99|95|94|92|93|90|8X|91|96|9a|9b|9c|9d|9e|9f|9g|9h|9i|9j|9k|9l|9m|9n|9o|9p|9q|9r|9s|9t|9u|9v||9w|9x|9y|9z|9A|9B|9C|9D|9E|9F|9G|9H|9I|9J|9K|9L|9M|9N|9O|9P|9Q|9R|9S|9T|9U|9V|9W|9X|9Y|9Z|a0|a1|a2|a3|a4|a5|a6|a7|a8|a9|aa|ab|ac|ad|ae|af|ag|ah|ai|aj|ak|al|am|an|ao|ap|aq|ar|as|at|au|av|aw|ax|ay|az|aA|aB|aC|aD|aE|aF|aG|aH|aI|aJ|aK|aL|aM|aN|aO|aP|aQ|aR|aS|aT|aU|aV|aW|aX|aY|aZ|b0|b1|b2|b3|b4|b5|b6|b7|b8|b9|ba|bb|bc|bd|be|bf|bg|bh|bi|bj|bk|bl|bm|bn|bo|bp|bq|br|bs|bt|bu|bv|bw|bx|by|bz|bA|bB|bC|bD|bE|bF|bG|bH|bI|bJ|bK|bL|bM|bN|bO|bP|bQ|bR|bS|bT|bU|bV|bW|bX|bY|bZ|c0|c1|c2|c3|c4|c5|c6|c7|c8|c9|ca|cb|cc|cd|ce|cf|cg|ch|ci|cj|ck|cl|97\'.96(\'|\'),0,{}))',62,766,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|replace|if|String|while|toString|parseInt|new|RegExp|fromCharCode|eval|split|getElementById|552|for|u70c8|339|u4e86|uff0c|u8239|u7b49|u6b63|u5728|u5230|u8fdb|u3002|u70b9|u51fb|u6ca1|u6709|u4f20|u6b21|u4ee3|u7801|u7ec8|u5b8c|u4e8e|u6218|u6597|u9760|u884c|u5cb8|u9001|u4e2d|u94fe|u63a5|u4efb|u52a1|u5f85|u4f60|u4e0b|u5165|u6253|u602a|u6307|u4ee4|u6a21|u5f0f|u4e00|u6765|u5427|u4eec|u53ef|u4ee5|u68c0|u6d4b|u5f97|u5750|uff1a|u6b64|u540e|u9762|u64cd|u4f5c|u9189|u6c49|u6fc0|u7684|u5c38|u4f53|u6bd5|u505a|u8244|u8bf7|u516c|u672c|u6210|u5c06|u6478|u53d6|u8fd8|u8d70|u6267|u6e05|u7a7a|u9501|u5b58|u6570|u7ec4|uff01|u666e|u901a|goes|u8fbe|u8fd9|u513f|u7279|u5ef6|u65f6|u6beb|u79d2|123|u6b8a|else|var|str|indexOf|length|log|console|yell|cmdCache|setTimeout|cmdDelayTime|timeCmd|go_num|nowlockod|go_lock|clickButton|go_locked|clearTimeout|go|yelled_cmd|go_lockedod|triggers|bs_time|now_lockednum|go_lockednum|task_time|getElementsByTagName|go_str|words3|targetName|NOR|g_gmain|checkbusy|innerText|last|nextgo|nextdo|getAttribute|onclick|delayCmd|go_start|href_code|document|go_single|npc_id|tell_lockover|button|recvNetWork2|words1|1000|AutoGet|href|disableByCls|corpse|clickdz|newTrigger|shift|clickhref|words2|getnpcid|null|nexttask|newgo_reset|isDelayCmd|this|isContains|checktask|is_fighting|2000|HIR|off|cmd_click3|each|html|attr|false|stopDelayCmd|HIW|unshift|HIG|undefined|sock|look_item|yell_go|300|concat|on|notify_fail|golook_room|typeof|3000|get|150|substr|out|nswenwneswse|substring|enableByCls|5000|delay'.split('|'),0,{}));
	
	var o = false;
	var q = "天师灭神剑|茅山道术|纵跃闪躲之术|青城步法|踏雪无痕|基本轻功|少林身法|梯云纵|铁血十二式";

	function hit() {
		if (is_fighting) {
			zdskill = mySkillLists;
			hit1()
		} else if ($('span.outbig_text:contains(战斗结束)').length > 0 && o == false) {
			clickButton('prev_combat')
		}
	}
	function hit1() {
		for (var i = 1; i < 7; i++) {
			skillName = $('#skill_' + i).children().children().text();
			if (skillName !== "" && isContains(zdskill, skillName) && gSocketMsg.get_xdz() > 2) {
				console.log('你无所畏惧，使出一招' + skillName + ',敌人满地找牙！');
				go('playskill ' + i);
				return
			}
		}
		for (i = 1; i < 7; i++) {
			skillName = $('#skill_' + i).children().children().text();
			if (skillName !== "" && !isContains(q, skillName) && gSocketMsg.get_xdz() > 2) {
				console.log('你无所畏惧，使出一招' + skillName + ',敌人满地找牙！');
				go('playskill ' + i);
				return
			}
		}
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
	var u = new Autoreconnect();
	var w = 0;

	function reconnectswitch() {
		if (w == 0) {
			w = 1;
			btnList['自动重连'].innerText = '停止重连'
		} else {
			w = 0;
			btnList['自动重连'].innerText = '自动重连'
		}
	}
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
	j.game = this;
	j.attach = function() {
		var c = j.writeToScreen;
		j.writeToScreen = function(a, e, f, g) {
			c(a, e, f, g);
			a = a.replace(/<[^>]*>/g, "");
			triggers.trigger(a)
		};
		webSocketMsg.prototype.old = gSocketMsg.dispatchMessage;
		gSocketMsg.dispatchMessage = function(b) {
			this.old(b);
			if (w == 1) {
				u.dispatchMessage(b)
			}
		}
	};
	attach();

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
	function gos(s){
	$('button.cmd_click_exits_'+s).click();
    }
	function pifuset() {
		for (var a in btnList) {
			btnList[a].style.color = color;
			btnList[a].style.background = ground
		}
		screenLog.changecss()
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
			getthingnum("回气膏");
			if (A == 1) {
				setTimeout(function() {
					if (ca > 40) {
						console.log("小道正在为您疗伤，请稍等...");
						canxuesheng()
					} else if (ca <= 40 || ca == null) {
						console.log("检测包里回气膏不够，无法为您治疗");
						writeouts("道长论剑论坛：", "大侠战斗劳累，买点回气膏充充饥？", mqn, "现在去买");
						clickButton("share_ok 6")
					}
				}, 1000);
				return
			} else if (A == 0) {
				setTimeout(function() {
					if (ca > 40) {
						canxuesheng()
					} else {
						writeouts("道长论剑论坛：", "大侠战斗劳累，买点万年灵芝充充饥？", mqn, "现在去买");
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

	triggers.newTrigger(/你停止了打坐。/, function(m) {
		nextdo = function() {
			go("home;exercise")
		};
		checkbusy()
	}, "dazuo", "");
	triggers.newTrigger(/你从寒玉床上爬起，结束了这次练功。/, function(m) {
		nextdo = function() {
			go("items get_store /obj/quest/xuantie_suipian;jh 1;e;n;n;w;event_1_24319712;home;sleep_hanyuchuang;home;exercise stop;exercise")
		};
		checkbusy()
	}, "shuibed", "");
	triggers.newTrigger(/】(.*)【气血】/, function(m) {
		myName = m[1].replace(' (换称号)', "");
		words2(myName + "你好!你正在使用的是道长的仙人跳脚本。当前版本号为--" + nowversion, "rgb(118, 235, 32)");
		console.log('您的名字是：' + myName);
		triggers.disableByCls("getname");
		nowtask = function() {
			if (!is_fighting) {
				readmyvip()
			} else {
				setTimeout(nowtask, 2000)
			}
		};
		setTimeout(nowtask, 400)
	}, "getname", "");
	triggers.newTrigger(/【队伍】(.*)申请加入队伍。/, function(m) {
		setTimeout(function() {
			clickdz("允许")
		}, 300)
	}, "zudui", "");
	triggers.newTrigger(/任务所在地方好像是：(.*)你已经连续完成(.*)个任务。/, function(m) {
		console.log(m[1]);
		if (m[1].indexOf(E) != -1) {
			triggers.disableByCls("shimenf5");
			return
		} else if (m[1].indexOf(E) == -1) {
			shimenf5();
			return
		}
	}, "shimenf5", "");
	triggers.disableByCls("shimenf5");
	triggers.newTrigger(/(.*)已经死了，只剩下一具尸体静静地躺在这里/, function(m) {
		clickdz("搜索")
	}, "getcorpse", "");
	triggers.newTrigger(/(.*)这具尸体显然已经躺在这里有一段时间了，正散发著一股腐尸的味道/, function(m) {
		clickdz("搜索")
	}, "getcorpse", "");
	triggers.newTrigger(/(.*)对著(.*)喝道：(.*)今日不是你死就是我活！」/, function(m) {
		if (m[1] == database.killfer) {
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
	}, "killfollw", "");
	triggers.disableByCls("killfollow");
	triggers.newTrigger(/^你深深吸了几口气，脸色看起来好多了。/, function(m) {
		go('recovery')
	}, "huifu", "");
	triggers.newTrigger(/^你的内力不够/, function(m) {
		go('items use snow_qiannianlingzhi;recovery')
	}, "huifu", "");
	triggers.newTrigger(/^你现在气力充沛。/, function(m) {
		triggers.disableByCls("huifu");
		if (!g_gmain.is_fighting) {
			var c = g_obj_map.get("msg_attrs");
			var a = parseInt(c.get("force"));
			var b = parseInt(c.get("max_force"));
			if (b - a > 5000) {
				var d = Math.floor((b - a) / 5000);
				console.log('回内次数：' + d);
				goes('items use snow_qiannianlingzhi', d)
			}
		}
	}, "huifu", "");
	triggers.disableByCls("huifu");
	var x = '';

	function getpostion() {
		var a = "商 城排行榜好 友论 剑帮 派VIP月卡VIP月卡状 态遇剑";
		var b = $('span.outtitle').text();
		if ($('span.outbig_text:contains(战斗结束)').length > 0) {
			clickButton('prev_combat');
			setTimeout(getpostion, 500);
			return
		}
		if (is_fighting) {
			x = document.getElementById('vs21').innerText;
			setTimeout(getpostion, 2000)
		} else if (a.indexOf(b) != -1 || $('span.out3:contains(潜能)').length > 0) {
			x = "论剑江湖主页";
			console.log(b + "--角色现在位置是--" + x)
		} else if ($('button.cmd_click_room').length > 0) {
			x = $('button.cmd_click_room')[0].innerText;
			console.log("角色现在位置是--" + x);
			g_gmain.recvNetWork2(HIW + "角色现在位置是--" + x + "\n" + NOR)
		} else if ($('span.outtitle').length > 0) {
			x = $('span.outtitle').text().replace("江湖", "");
			setTimeout(getpostion, 1000)
		} else {
			setTimeout(getpostion, 2000);
			console.log("本次未获取到位置，2秒后重新获取")
		}
	}
	var y = 1;

	function readvip() {
		clickButton('vip');
		setTimeout(readvip1, 200)
	}
	function readvip1() {
		if ($('span.out4').text().indexOf("尚未开通") != -1) {
			console.log("非仙人跳vip用户");
			go('prev');
			y = 0
		} else console.log("很棒，您的vip还没过期");
		go('prev')
	}
	var z;

	function look_nowjh() {
		clickButton('jh');
		setTimeout(function() {
			var a = $("button.cmd_forward")[0].getAttribute('onclick').split('jhgo ')[1].split("'")[0];
			z = parseInt(a) - 1;
			clickButton('home');
			console.log("你当前正在进行的章节是" + z);
			g_gmain.recvNetWork2(HIW + "你当前正在进行的章节是" + z + "\n" + NOR)
		}, 400)
	}
	function readmyvip() {
		readvip();
		setTimeout(look_nowjh, 500);
		setTimeout(readyuanbao, 1000)
	}
	function readyuanbao() {
		var a = g_obj_map.get("msg_attrs").get("yuanbao");
		var b = g_obj_map.get("msg_attrs").get("xf_score");
		g_gmain.recvNetWork2(HIG + "你的元宝有 " + a + "\n" + NOR);
		g_gmain.recvNetWork2(HIR + "你的消费积分有 " + b + "\n" + NOR);
		g_gmain.recvNetWork2(HIY + "你的当前功能布局为 " + buju + "\n" + NOR);
		g_gmain.recvNetWork2(HIM + "你所在的区是 " + userqu + "\n" + NOR);
		g_gmain.recvNetWork2(HIC + "你的vip月卡为 " + y + "\n" + NOR);
		g_gmain.recvNetWork2(GRA + "你的当前出招设置为 " + mySkillLists + "\n" + NOR)
	}
	function bjlist() {
		if (btnList['隐藏日志'].innerText == '隐藏日志') {
			screenLog.hidelog();
			btnList['隐藏日志'].innerText = '显示日志'
		} else {
			btnList['隐藏日志'].innerText = '隐藏日志';
			screenLog.init();
			screenLog.showlog()
		}
	}
	var A="确定";
	function searchcode() {
		A = prompt("请输入你想查询的当前页面可见的某个按钮的代码（不支持纯图片的按钮，查到代码后可用于狂点击功能）", A);
		if (typeof A == "undefined") {
			console.log("输入错误");
			return false
		}
		var a = $('button');
		for (var i = 0; i < a.length-1; i++) {
			if (a[i].innerText.indexOf(A) > -1) {
				var b = a[i].getAttribute('onclick');
				if(b.indexOf('clickButton')>-1){
					b = a[i].getAttribute('onclick').split("'")[1];
				}
				console.log(b);
			}
		}
		if (!b) {
			words1("当前页面没有这个按钮哦,它可能是个图片按钮");
			console.log("当前页面没有这个按钮哦")
		}
	}
	var B = 'recovery',
		cmdclicknum = 10;

	function eat() {
		var a = parseInt(g_obj_map.get("msg_attrs").get("force"));
		var b = parseInt(g_obj_map.get("msg_attrs").get("max_force"));
		if (a < b) {
			go("items use snow_qiannianlingzhi")
		} else {
			g_gmain.recvNetWork2(GRA + "你蓝条满的，吃什么灵芝啊，浪费" + NOR)
		}
     }
	function killfollow() {
		if (btnList['叫杀跟随'].innerText == "叫杀跟随") {
			if (!database.killfer) {
				database.killfer = prompt("请输入叫杀跟随玩家（队长）名字", "道长")
			} else {
				database.killfer = prompt("请输入叫杀跟随玩家（队长）名字", database.killfer)
			}
			if (database.killfer != "你") {
				btnList['叫杀跟随'].innerText = "取消跟随";
				btnList['叫杀跟随'].style.borderStyle = 'inset';
				triggers.enableByCls("killfollow")
			} else {
				console.log("输入错误，名字不能是“你”");
				triggers.disableByCls("killfollow");
				return
			}
		} else {
			btnList['叫杀跟随'].innerText = '叫杀跟随';
			btnList['叫杀跟随'].style.borderStyle = 'outset';
			triggers.disableByCls("killfollow")
		}
	}
	function huixuenei() {
		triggers.enableByCls("huifu");
		go('recovery')
	}
	var C, clearft1;

	function clearlog_ftswitch() {
		if (btnList["清空战斗"].innerText == "清空战斗") {
			clearft_open()
		} else {
			clearft_close()
		}
	}
	function clearft_open() {
		database.clearft = 1;
		clearInterval(C);
		clearInterval(clearft1);
		clearlog_ft();
		btnList["清空战斗"].innerText = "停止清空";
		btnList['清空战斗'].style.borderStyle = 'inset';
		C = setInterval(clearlog_ft, 10000);
		clearft1 = setInterval(clearlog_ft1, 1000)
	}
	function clearft_close() {
		database.clearft = 0;
		btnList["清空战斗"].innerText = "清空战斗";
		btnList['清空战斗'].style.borderStyle = 'outset';
		clearInterval(C);
		clearInterval(clearft1)
	}
	function clearlog_ft() {
		if (is_fighting) {
			$("span.out").remove()
		}
	}
	function clearlog_ft1() {
		if (is_fighting) {
			var a = document.getElementById('vs_hp21').innerHTML.replace(/<[^>]+>/g, "");
			if (a < 10000000 && a > 0) {
				clearlog_ft()
			}
		}
	}
	var D = 0,
		runhiting;

	function runhit() {
		if (btnList['开出招'].innerText == '开出招') {
			database.chuzhaoset = prompt("请输入连续单放出招技能:", database.chuzhaoset);
			mySkillLists = database.chuzhaoset;
			cz_skills = mySkillLists.split(";");
			runhit_open()
		} else {
			runhit_close()
		}
	}
	function runhit_open() {
		g_gmain.notify_fail(HIG + "天下武功，为快不破！" + NOR);
		g_gmain.notify_fail(HIR + "你的出招，快如闪电！" + NOR);
		D = 1;
		clearInterval(runhiting);
		btnList['开出招'].innerText = '关出招';
		btnList['开出招'].style.borderStyle = 'inset';
		runhiting = setInterval(hit, 1000)
	}
	function runhit_close() {
		D = 0;
		clearInterval(runhiting);
		btnList['开出招'].innerText = '开出招';
		btnList['开出招'].style.borderStyle = 'outset'
	}
	var E;

	function shimenf5() {
		if (!E) {
			E = prompt("请输入想去的地点", E);
			return
		}
		triggers.enableByCls("shimenf5");
		go('family_quest cancel go;family_quest')
	}
	var F = "学习十次";

	function ananniu() {
		if (btnList['按按钮'].innerText == '按按钮') {
			F = prompt("请输入你看到的按钮名字", F);
			btnList['按按钮'].innerText = '不按了';
			btnList['按按钮'].style.borderStyle = 'inset';
			doanniu = setInterval(anniugo, 150)
		} else {
			btnList['按按钮'].innerText = '按按钮';
			btnList['按按钮'].style.borderStyle = 'outset';
			clearInterval(doanniu)
		}
		function anniugo() {
			clickdz(F)
		}
	}
	var G = function() {};

	function chuzhao_open() {
		cz_flag = 1;
		database.cz_flag = 1;
		btnList['不出招'].innerText = '出绝学';
		g_gmain.notify_fail(HIG + "天下武功，为快不破！" + NOR);
		g_gmain.notify_fail(HIR + "你的出招，快如闪电！" + NOR);
		cz_skills = database.chuzhaoset.split(";");
		sk = cz_skills;
		clearInterval(G);
		G = setInterval(auto_fight_handle, 1000)
	}
	function chuzhao_close() {
		cz_flag = 0;
		database.cz_flag = 0;
		btnList['不出招'].innerText = '不出招';
		clearInterval(G)
	}
	function getmyFS() {
		myFS = '';
		var a = ['11', '12', '13', '14', '15', '16', '17', '18', '21', '22', '23', '24', '25', '26', '27', '28'];
		for (var i = 0; i < a.length; i++) {
			var s = document.getElementById("vs" + a[i]);
			if (typeof myName == 'undefined') {
				myName = g_obj_map.get("msg_attrs").get("name").replace("[1;35m", "").replace("[2;37;0m", "")
			}
			if (s && s.innerHTML.indexOf(myName) != -1) {
				myFS = "vs_hp" + a[i]
			}
		}
	}
	var H = 0,
		sk = '';

	function auto_fight_handle() {
		if (cz_flag != 0 && is_fighting) {
			var a = gSocketMsg.get_xdz();
			var b = parseInt(g_obj_map.get("msg_attrs").get("force"));
			owNum = document.getElementById('out2').getElementsByClassName('outkee_text').length;
			opNum = document.getElementById('out_top').getElementsByClassName('outkee_text').length;
			var c = 0,
				op2_qx = 0;
			if (document.getElementById('vs_hp11') && document.getElementById('vs_hp21')) {
				c = parseInt(g_obj_map.get("msg_vs_info").get("vs2_kee1"));
				op2_qx = parseInt(g_obj_map.get("msg_vs_info").get("vs1_kee1"))
			} else if (!document.getElementById('vs_hp11') && document.getElementById('vs_hp21')) {
				c = parseInt(g_obj_map.get("msg_vs_info").get("vs2_kee1"));
				op2_qx = 0
			} else if (document.getElementById('vs_hp11') && !document.getElementById('vs_hp21')) {
				c = 0;
				op2_qx = parseInt(g_obj_map.get("msg_vs_info").get("vs1_kee1"))
			}
			getmyFS();
			if (myFS != '') {
				var d = parseInt(g_obj_map.get("msg_attrs").get("kee"));
				if (d < Number(limitQixue) && H < 3 && a > 2) {
					console.log("血量" + d + "--" + "回血下限" + Number(limitQixue) + "--准备释放回血内功");
					clickbtn2(myForce);
					H++
				}
			}
			if (sk.length == 1 && a > 2) {
				clickbtn2(sk[0])
			} else if (a > 4) {
				for (var i = 0; i < sk.length; i++) {
					clickbtn2(sk[i])
				}
			}
			if (a > 5) {
				zdskill = mySkillLists;
				hit1()
			}
		} else if ($('span.outbig_text:contains(战斗结束)').length > 0) {
			H = 0;
			if (D == 1) {
				runhit_close()
			}
			if (o == false) {
				clickButton('prev_combat')
			}
		}
	}
	function chuzhaoswitch() {
		if (btnList['不出招'].innerText == '不出招') {
			chuzhao_open()
		} else {
			chuzhao_close()
		}
	}
	function setall() {
		if (!database.settings) {
			database.settings = database.chuzhaoset + ',' + database.myForce + ',' + database.limitQixue + ',' + database.enforce
		}
		database.settings = prompt('请输入刷新网页可保存的技能出招配置（依次是绝学阵，回血内功，回血下限，加力点数.逗号隔开）', database.settings);
		if (database.settings.split(',').length == 4) {
			database.chuzhaoset = database.settings.split(',')[0];
			database.myForce = database.settings.split(',')[1];
			database.limitQixue = database.settings.split(',')[2];
			database.enforce = database.settings.split(',')[3]
		} else {
			console.log('输入有误，已还原默认值');
			database.settings = database.chuzhaoset + ',' + database.myForce + ',' + database.limitQixue + ',' + database.enforce
		}
	}
	function settings_re() {
		if (!database.chuzhaoset) {
			database.chuzhaoset = mySkillLists
		}
		if (!database.myForce) {
			database.myForce = myForce
		}
		if (!database.limitQixue) {
			database.limitQixue = limitQixue
		}
		if (!database.enforce) {
			database.enforce = enforce
		}
		mySkillLists = database.chuzhaoset;
		myForce = database.myForce;
		limitQixue = database.limitQixue;
		enforce = database.enforce
	}
	settings_re();

	function auto_share() {
		go('share_ok 1;share_ok 2;share_ok 3;share_ok 4;share_ok 5;share_ok 6;share_ok 7')
	}
	var I = 'jhgo 1;;;^get_roomid(0);?白云仙人;?答谢礼包;?签到;home';

	function cecmd() {
		I = prompt("请输入需要运行的指令", I);
		go(I)
	}
	function qd() {
		clickButton('jhgo 1');
		setTimeout(function() {
			var a = $('td#room0_0>button')[0].getAttribute('onclick').split("'")[1];
			var b = '';
			b += a + ";look_npc huaguoshan_baiyunxianren;event_1_2459673;^clickLibaoBtn;$;home";
			go(b)
		}, 400)
	}
	function go_home() {
		clickButton('home')
	}
	function clickLibaoBtn() {
		var d = "相守授道春晖父爱粽子军魂鬼神兑换1元天地南瓜";
		var e = $('.cmd_click2');
		e.each(function() {
			var a = $(this).text();
			if (a.indexOf('礼包') != '-1') {
				if (d.indexOf(a.replace('礼包', '')) == -1) {
					var b = $(this).attr('onclick');
					var c = getLibaoId(b);
					clickButton(c)
				}
			}
		})
	}
	function gojh() {
		var a = prompt('请输入你想进入的章节（纯数字即可，例如:1 表示第一章）', "");
		clickButton('jhgo ' + a)
	}
	function get_roomid(s) {
		var a = $('td#room' + s + '_0>button')[0].getAttribute('onclick').split("'")[1];
		clickButton(a)
	}
	function doufa() {
		go("swords report go;swords select_member fangcunshan_putilaozu;swords select_member kunlunshan_yuanshitianzun;swords select_member wuzhuangguan_zhongshanfuzi;swords fight_test go");
		chuzhao_open();
		o = true;
		triggers.enableByCls("doufa")
	}
	triggers.newTrigger(/战斗结束/, function(m) {
		go('swords fight_test go')
	}, "doufa", "");
	triggers.newTrigger(/你今天斗法次数已达限额。/, function(m) {
		o = false;
		triggers.disableByCls("doufa");
		go('home_prompt')
	}, "doufa", "");
	triggers.disableByCls("doufa");

	function PaiHangFunc() {
		if (btnList["打榜一"].innerText == '打榜一') {
			o = true;
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
			o = false;
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
	function get_xiandi() {
		go('building do all;prev')
	}
	function fastkill() {
		if (btnList["叫杀怪"].innerText == '叫杀怪') {
			console.log("开始叫杀" + K);
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
			if (escape(K).indexOf('%u') > -1 && $('button.cmd_click3').text().indexOf(K) > -1) {
				for (var i = 0; i < $('button.cmd_click3').length; i++) {
					if ($('button.cmd_click3')[i].innerText == K) {
						go('kill?' + K);
						return
					}
				}
			} else if (escape(K).indexOf('%u') == -1) {
				clickButton("kill " + K)
			}
		} else {
			if (btnList["摸捡物"].innerText == '摸捡物') {
				console.log("战斗中且无需摸尸体,关闭叫杀");
				btnList["叫杀怪"].innerText = '叫杀怪';
				clearInterval(killIntervalFunc)
			}
			if (btnList["摸捡物"].innerText == '不摸了') {
				triggers.enableByCls("jiaoshaguai")
			}
		}
	}
	triggers.newTrigger(/^你从(.*)的尸体里搜出(.*)/, function(m) {
		console.log(m[0]);
		if (m[1].indexOf(K) > -1) {
			triggers.disableByCls("jiaoshaguai");
			btnList["叫杀怪"].innerText = '叫杀怪';
			clearInterval(killIntervalFunc);
			if (btnList["摸捡物"].innerText == '不摸了') {
				AutoGetst()
			}
		}
	}, "jiaoshaguai", "");
	triggers.disableByCls("jiaoshaguai");
	var J = '醉汉的尸体',
		getthing_jishi;

	function AutoGetst() {
		if (btnList["摸捡物"].innerText == '摸捡物') {
			if (escape(K).indexOf('%u') > -1) {
				J = prompt("你要摸谁的尸体或捡什么物品(带尸体为摸尸体，不带尸体为捡物品)？", K + '的尸体')
			} else {
				J = prompt("你要摸谁的尸体或捡什么物品(带尸体为摸尸体，不带尸体为捡物品)？", J)
			}
			console.log('本次输入:' + J);
			if (J.indexOf('尸体') > -1) {
				console.log('开始挂机摸取' + J);
				AutoGet1Func();
				btnList["摸捡物"].innerText = '不摸了';
				btnList['摸捡物'].style.borderStyle = 'inset'
			} else if (J.indexOf('尸体') == -1) {
				console.log('开始挂机捡取' + J);
				AutoGet2Func();
				btnList["摸捡物"].innerText = '不捡了';
				btnList['摸捡物'].style.borderStyle = 'inset'
			}
		} else {
			clearGet();
			btnList["摸捡物"].innerText = '摸捡物';
			btnList['摸捡物'].style.borderStyle = 'outset'
		}
		function AutoGet1Func() {
			getthing_jishi = setInterval(AutoGet1, 200)
		}
		function AutoGet2Func() {
			getthing_jishi = setInterval(AutoGet2, 200)
		}
		function clearGet() {
			clearInterval(getthing_jishi)
		}
		function AutoGet1() {
			if ($('span.outbig_text:contains(战斗结束)').length > 0) {
				clickButton('prev_combat')
			}
			$("button.cmd_click3").each(function() {
				if (isContains($(this).html(), J)) eval($(this).attr("onclick").replace("look_item corpse", "get corpse"))
			})
		}
		function AutoGet2() {
			if ($('span.outbig_text:contains(战斗结束)').length > 0) {
				clickButton('prev_combat')
			}
			$("button.cmd_click3").each(function() {
				if (isContains($(this).html(), J)) {
					eval($(this).attr("onclick").replace("look_item", "get"))
				}
			})
		}
	}
	var K = '山妖';

	function id_input() {
		K = prompt("请设置需要叫杀的npc的id（看得见怪物按钮的直接输按钮中文名，看不见输英文id）", K);
		console.log('当前设置的npcid为：' + K)
	}
	function enforceFunc() {
		if (btnList['不加力'].innerText == '不加力') {
			go('enforce');
			btnList['不加力'].innerText = '加力'
		} else {
			go('enforce ' + database.enforce);
			console.log('加力>>' + database.enforce + '点');
			btnList['不加力'].innerText = '不加力'
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

	function guaji() {
		go('fb 1;;?继续;;?外城门;;kill?金吾卫|~;;?推开;;?继续;;kill?禁军士兵|~;;?瓮城;;?继续;;kill?玄甲护卫|~;;?机关;;;?继续;;;kill?玄武门守军|~;;?城楼;;?继续;;kill?玄甲护卫');
	}
	createButton('总设置', btnBox4, setall);
	createButton('代码查询', btnBox4, searchcode);
	createButton('吃蓝药', btnBox4, eat);
	createButton('测指令', btnBox4, cecmd);
	createButton('叫杀跟随', btnBox4, killfollow);
	createButton('按按钮', btnBox4, ananniu);
	createButton('自动重连', btnBox4, reconnectswitch);
	createButton('一键分享', btnBox4, auto_share);
	createButton('清空战斗', btnBox4, clearlog_ftswitch);
	createButton('隐藏日志', btnBox4, bjlist);
	createButton('治疗', btnBox4, huixuenei);
	createButton('显按钮', btnBox4, buttonhideFunc);
	createButton('选择章节', btnBox3, gojh);
	createButton('签到', btnBox3, qd);
	createButton('斗法', btnBox3, doufa);
	createButton('打榜一', btnBox3, PaiHangFunc);
	createButton('领仙邸', btnBox3, get_xiandi);
	createButton('设id', btnBox3, id_input);
	createButton('叫杀怪', btnBox3, fastkill);
	createButton('摸捡物', btnBox3, AutoGetst);
	createButton('开出招', btnBox3, runhit);
	createButton('不出招', btnBox3, chuzhaoswitch);
	createButton('不加力', btnBox3, enforceFunc);
	createButton('一键本一', btnBox3, guaji);
	createButton('上', btnBox2, function(){go("^gos('n')");});
	createButton('下', btnBox2, function(){go("^gos('s')");});
	createButton('左', btnBox1, function(){go("^gos('w')");});
	createButton('右', btnBox1, function(){go("^gos('e')");});
	hideButton();
	if (database.clearft == 1) {
		clearft_open()
	}
})(window);