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
document.body.appendChild(btnBox4);
var btnBox3 = document.createElement('div');
btnBox3.style.position = 'absolute';
btnBox3.style.top = '210px';
btnBox3.style.left = 400 + buju + 'px';
btnBox3.style.width = buttonWidth;
document.body.appendChild(btnBox3);

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
	eval(function(p, a, c, k, e, r) {
		e = function(c) {
			return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
		};
		if (!''.replace(/^/, String)) {
			while (c--) r[e(c)] = k[c] || e(c);
			k = [function(e) {
				return r[e]
			}];
			e = function() {
				return '\\w+'
			};
			c = 1
		};
		while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
		return p
	}('5 15(s){7 b=x.17(\'18\').v(\'V\');q(7 i=0;i<b.8;i++){3(b[i].1A.1k(/<[^>]+>/g,"").9(s)>-1){b[i].1L();I}}}7 B=\'\';5 1l(s){q(7 i=$("a[1j]").8-1;i>0;i--){7 a=x.v("a")[i].X;3(a.9(s)!=-1){C=i;i=1}}3(1H C!="1r"&&x.v("a")[C].X.9(s)!=-1){f.h("正在点击传送链接："+s);B=x.v("a")[C].1i(\'1j\').6("\'")[1];f.h(B);J(B)}4{f.h("没有此传送链接")}}7 K="醉汉的尸体";5 1h(){$("V.1v").1y(5(){3(1g($(1f).1G(),K))1e($(1f).1o("1d").1k("1t 1c","1w 1c"))})}5 1g(a,b){I a.9(b)>=0}7 Q;5 1a(n){7 b=x.17(\'18\').v(\'V\');q(7 i=0;i<b.8;i++){3(b[i].X==n){Q=b[i].1i(\'1d\').6("\'")[1].6(" ")[1];I}}}7 19=1,o=0,d="",e=[],l=14,j=1x;5 P(a){7 b=a.6(";");3(19&&j){e=e.1z(b);3(!l)H()}4{q(7 c=0;c<b.8;c++)S(b[c])}}5 H(){7 a=e.1b();7 b=a.6(";");3(!1n){I}S(b[0]);q(7 i=b.8-1;i>0;i--){e.1N(b[i])}3(e.8>0){l=p(H,j)}4{l=1;p(5(){3(e.8==0)l=0;4 H()},j)}}5 1q(){A(l);l=0;e=[]}7 10=5(){},M=5(){},N=5(){},L,y;5 11(){3(!12&&e.8==0){A(L);10()}4{A(L);L=p(11,13)}}5 F(){3(l==14){A(y);f.h(\'检测得\'+e.8+"没有战斗，进行后面操作");M()}4 3(12){E.1K(16+"正在激烈战斗中。。。"+D);y=p(F,W)}4 3(!l==1p){f.h("正在做任务，请等待本任务完成:"+e.8);y=p(F,W)}4{A(y);M()}}5 U(s){E.R(1s+s+"\\n"+D)}5 Z(s){E.R(1u+s+"\\n"+D)}5 O(s){E.R(16+s+"\\n"+D)}7 r=0,t="",u=0,z=0,w=[];5 S(s){3(s==\'#1B\'){r=1}4 3(s==\'#1C\'){r=0;z--}4 3(s.9(\'=\')>-1){j=1D(s.6(\'=\')[1])}4 3(s.9(\'.\')>-1){f.h(s.6(\'.\')[1])}4 3(s.9(\'!\')>-1){3(s.6(\'!\')[0]!=\'\'){3(s.6(\'!\')[0]==\'1\'){Z(s.6(\'!\')[1])}4 3(s.6(\'!\')[0]==\'2\'){O(s.6(\'!\')[1])}4{U(s.6(\'!\')[1])}}4{U(s.6(\'!\')[1])}}4 3(s.9(\'?\')>-1){3(s.6(\'?\')[0]!=\'\'){1a(s.6(\'?\')[1]);J(s.6(\'?\')[0]+\' \'+Q)}4{15(s.6(\'?\')[1])}}4 3(s.9(\'@\')>-1){K=s.6(\'@\')[1];1h();f.h(\'摸取\'+K)}4 3(s.9(\'~\')>-1){J(\'1E\')}4 3(s.9(\'^\')>-1){N=1e(s.6(\'^\')[1])}4 3(s.9(\'$\')>-1){N();3(s.6(\'$\')[0]==\'0\'){N=5(){}}}4 3(s.9(\'+\')>-1){1l(s.6(\'+\')[1])}4{J(s)}}5 T(){3(o<d.8){P(d[o]);o++;3(o<d.8){M=5(){T()};p(F,d[(o-1)].6(\';\').8*j+1F)}4 3(o==d.8){o=0}}}7 m=[];5 Y(){3(m.8==0){m=w}3(r==0&&m.8>0){f.h(\'执行\'+m[0].1I(0,1J)+\'...\');G(m[0]);m.1b();3(m.8==0){1m()}}4{p(Y,W)}}5 1m(){f.h("清空锁存数组！");z=0;r=0;t="";u=0;z=1;w=[]}5 G(s){3(r==0){d=s;3(d.9(\'|\')>-1){d=d.6(\'|\');7 a=0;O(\'进入了打怪指令模式\');T()}4{P(d)}}4 3(r==1){3(t==\'\'){t=s;w[0]=t}4 3(t!=\'\'){u++;z=u;w[u]=s}p(Y,13)}}5 1M(a){7 b=(a/j);f.h("延时中，等待"+b*j+"毫秒");q(7 k=0;k<a/j;k++){G("")}}5 1O(a,b){q(7 i=0;i<b;i++){G(a)}}', 62, 113, '|||if|else|function|split|var|length|indexOf||||str|cmdCache|console||log||cmdDelayTime||timeCmd|nowlockod||go_num|setTimeout|for|go_lock||go_locked|go_lockednum|getElementsByTagName|go_lockedod|document|bs_time|now_lockednum|clearTimeout|href_code|last|NOR|g_gmain|checkbusy|go|delayCmd|return|clickButton|targetName|task_time|nextdo|nextgo|words3|go_start|npc_id|recvNetWork2|go_single|go_str|words1|button|1000|innerText|tell_lockover|words2|nexttask|checktask|is_fighting|2000|null|clickbtn|HIR|getElementById|out|isDelayCmd|getnpcid|shift|corpse|onclick|eval|this|isContains|AutoGet|getAttribute|href|replace|clickhref|newgo_reset|sock|attr|false|stopDelayCmd|undefined|HIW|look_item|HIG|cmd_click3|get|150|each|concat|innerHTML|on|off|parseInt|golook_room|3000|html|typeof|substr|40|notify_fail|click|delay|unshift|goes'.split('|'), 0, {}))
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
			clickbtn("允许")
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
		clickbtn("搜索")
	}, "getcorpse", "");
	triggers.newTrigger(/(.*)这具尸体显然已经躺在这里有一段时间了，正散发著一股腐尸的味道/, function(m) {
		clickbtn("搜索")
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
	var A = "确定";

	function searchcode() {
		A = prompt("请输入你想查询的当前页面可见的某个按钮的代码（不支持纯图片的按钮，查到代码后可用于狂点击功能）", A);
		if (typeof A == "undefined") {
			console.log("输入错误");
			return false
		}
		var a = $('button');
		for (var i = 0; i < a.length; i++) {
			if (a[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(A) > -1) {
				var b = a[i].getAttribute('onclick').split("'")[1];
				console.log(b);
				words1("本次查询得:" + b)
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
			clickbtn(F)
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
				console.log("吃一个万年灵芝，一秒后检查治疗进度");
				setTimeout(function() {
					healFunc()
				}, 1000)
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
	function guaji() {
		alert('此功能正在开发中，可实现挂机所有地图触发所有场景。。。')
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
	createButton('治疗', btnBox4, autorecovery);
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
	createButton('挂机场景', btnBox3, guaji);
	hideButton();
	if (database.clearft == 1) {
		clearft_open()
	}
})(window);