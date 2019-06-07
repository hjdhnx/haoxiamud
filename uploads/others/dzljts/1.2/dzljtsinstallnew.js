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

//-------------新弹窗函数--------------------------------------------------------------------
var html580ads={
     init:function(title,content){
            var text='<h2 style="height: 40px; top:-15px; line-height: 30px; padding-left: 5px; font-size: 20px;text-align:center; color:'+color+';background:'+ground+';border-bottom: 1px solid #aaaaaa; position: relative; "><b>'+title+'</b><span style="width: 21px; height: 20px;position: absolute; top: 1px; right:30px;"><a id="btn_min" href="javascript:void(0); ">一</a>&nbsp&nbsp<a id="btn_close" href="javascript:void(0);" >X</a></span></h2>'+ 
            '<div style="height:100px; width:300px; overflow: hidden; font-size: 18px; line-height: 18px;text-decoration:underline; color:rgb(195, 66, 255);">'+'<div style="padding:2px;"><b>'+content+'</b></div>'+'</div>';
            var thiz=this;
            var rootElement = document.body;
            thiz.oDiv = document.createElement("div");
            thiz.oDiv.id="miaov_float_layer";
            thiz.oDiv.style.cssText="border: 1px solid #aaaaaa; display:none;width:300px;";  
            rootElement.appendChild(thiz.oDiv);
            thiz.oDiv.innerHTML=text;
            var oBtnMin = document.getElementById('btn_min');
            var oBtnClose = document.getElementById('btn_close');
            thiz.oDivContent = thiz.oDiv.getElementsByTagName('div')[0];
         
            var iMaxHeight = 0;
         
            var isIE6 = window.navigator.userAgent.match(/MSIE 6/ig)
                    && !window.navigator.userAgent.match(/MSIE 7|8/ig);
         
            thiz.oDiv.style.display = 'block';
            iMaxHeight = thiz.oDivContent.offsetHeight;
            if (isIE6) {
                thiz.oDiv.style.position = 'absolute';
                thiz.repositionAbsolute();
                window.attachEvent('onscroll', function(){
                       thiz.repositionAbsolute();
                });
                window.attachEvent('onresize', function(){
                       thiz.repositionAbsolute();
                });
            } else {
                thiz.oDiv.style.position = 'fixed';
                thiz.repositionFixed();
            }
         
            oBtnMin.timer = null;
            oBtnMin.isMax = true;
             
            oBtnMin.onclick = function() {
                thiz.startMove(thiz.oDivContent, (this.isMax = !this.isMax) ? iMaxHeight : 0,
                        function() {
                            oBtnMin.className = oBtnMin.className == 'min' ? 'max'
                                    : 'min';
                        });
            };
            oBtnClose.onclick = function() {
               thiz.oDiv.remove();
            };
           
             
     },
    startMove:function(obj, iTarget, fnCallBackEnd) {
        if (obj.timer) {
            clearInterval(obj.timer);
        }
        var thiz = this;
        obj.timer = setInterval(function() {
            thiz.doMove(obj, iTarget, fnCallBackEnd);
        }, 30);
    },
    doMove:function(obj, iTarget, fnCallBackEnd) {
        var iSpeed = (iTarget - obj.offsetHeight) / 8;
     
        if (obj.offsetHeight == iTarget) {
            clearInterval(obj.timer);
            obj.timer = null;
            if (fnCallBackEnd) {
                fnCallBackEnd();
            }
        }
     
        else {
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            obj.style.height = obj.offsetHeight + iSpeed + 'px';
     
            (window.navigator.userAgent.match(/MSIE 6/ig) && window.navigator.userAgent
                    .match(/MSIE 6/ig).length == 2) ? this.repositionAbsolute()
                    : this.repositionFixed();
        }
    },
     
    repositionFixed:function () {       
        this.oDiv.style.right = 0;
        this.oDiv.style.bottom = 0;
    },
    repositionAbsolute:function () {        
        var left = document.body.scrollLeft || document.documentElement.scrollLeft;
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        this.oDiv.style.left = left + width - this.oDiv.offsetWidth + 'px';
        this.oDiv.style.top = top + height - this.oDiv.offsetHeight + 'px';
    },
    changemsgcss:function(){
				thiz.oDiv.color=color;
				thiz.oDiv.background=ground;
			}
};
function alertmsg(a,b){
	if(document.getElementById('btn_close')){
	html580ads.oDiv.remove();
	}
	html580ads.init(a,b);
}
function windowfloat(){
	if(document.getElementById('btn_close')){
	html580ads.oDiv.remove();
	}
	html580ads.init("道长论剑论坛","道长论剑论坛");
	html580ads.changemsgcss();
}
alertmsg("出现青龙","岳老三-桑邻药铺-玄冰凝魄枪碎片");

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
var userid = "u" + window.location.href.split("&")[1].split("=")[1],
	userqu = window.location.href.split("&")[4].split("=")[1];

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
screenLog.log('道长论剑TS正版By道长: version---' + nowversion);
(function(j) {
	j.triggers = new Triggers();
	var o = 1,
		cmdCache = [],
		timeCmd = null,
		cmdDelayTime = 150;

	function go(a) {
		var b = a.split(";");
		if (o && cmdDelayTime) {
			cmdCache = cmdCache.concat(b);
			if (!timeCmd) delayCmd()
		} else {
			for (var i = 0; i < b.length; i++) clickButton(b[i])
		}
	}
	function delayCmd() {
		var a = cmdCache.shift();
		var b = a.split(",");
		if (!sock) {
			return
		}
		clickButton(b[0]);
		for (var i = b.length - 1; i > 0; i--) {
			cmdCache.unshift(b[i])
		}
		if (cmdCache.length > 0) {
			timeCmd = setTimeout(delayCmd, cmdDelayTime)
		} else {
			timeCmd = 1;
			setTimeout(function() {
				if (cmdCache.length === 0) timeCmd = 0;
				else delayCmd()
			}, cmdDelayTime)
		}
	}
	function stopDelayCmd() {
		clearTimeout(timeCmd);
		timeCmd = 0;
		cmdCache = []
	}
	function delay(a) {
		var b = (a / cmdDelayTime);
		console.log("延时中，等待" + b * cmdDelayTime + "毫秒后进行下次操作");
		for (var k = 0; k < a / cmdDelayTime; k++) {
			go("delay")
		}
	}
	function goes(a, b) {
		for (var i = 0; i < b; i++) {
			go(a)
		}
	}
	var p = function() {},
		bs_time;

	function checkbusy() {
		if (timeCmd == null) {
			clearTimeout(bs_time);
			console.log('检测得' + timeCmd + "没有战斗，进行后面操作");
			p()
		} else if (is_fighting) {
			console.log("正在战斗");
			bs_time = setTimeout(checkbusy, 1000)
		} else if (timeCmd != 0) {
			console.log("正在做任务，请等待本任务完成:" + timeCmd);
			bs_time = setTimeout(checkbusy, 1000)
		} else {
			clearTimeout(bs_time);
			console.log("没有战斗，进行后面操作");
			p()
		}
	}
	function isContains(a, b) {
		return a.indexOf(b) >= 0
	}
	function words1(s) {
		g_gmain.recvNetWork2(HIW + s + "\n" + NOR)
	}
	function words2(s) {
		g_gmain.recvNetWork2(HIG + s + "\n" + NOR)
	}
	function words3(s) {
		g_gmain.recvNetWork2(HIR + s + "\n" + NOR)
	}
	var u = false;
	var w = "天师灭神剑|茅山道术|纵跃闪躲之术|青城步法|踏雪无痕|基本轻功|少林身法|梯云纵|铁血十二式";

	function hit() {
		if (is_fighting) {
			zdskill = mySkillLists;
			hit1()
		} else if ($('span.outbig_text:contains(战斗结束)').length > 0 && u == false) {
			clickButton('prev_combat')
		}
	}
	function hit1() {
		for (var i = 1; i < 7; i++) {
			skillName = $('#skill_' + i).children().children().text();
			if (skillName !== "" && isContains(zdskill, skillName) && gSocketMsg.get_xdz() > 2) {
				console.log(skillName);
				go('playskill ' + i);
				return
			}
		}
		for (i = 1; i < 7; i++) {
			skillName = $('#skill_' + i).children().children().text();
			if (skillName !== "" && !isContains(w, skillName) && gSocketMsg.get_xdz() > 2) {
				console.log(skillName);
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
		this.answers.put('首次通过桥阴县不可以获得那种奖励', "a");
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
	var x = new Question();
	var y = 0;

	function datiswitch() {
		if (y == 0) {
			clickButton('question');
			y = 1;
			btnList['开启答题'].innerText = '停止答题';
			triggers.enableByCls("dati")
		} else {
			y = 0;
			btnList['开启答题'].innerText = '开启答题';
			triggers.disableByCls("dati")
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
	var z = new Autoreconnect();
	var A = 0;

	function reconnectswitch() {
		if (A == 0) {
			A = 1;
			btnList['自动重连'].innerText = '停止重连'
		} else {
			A = 0;
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
			if (A == 1) {
				z.dispatchMessage(b)
			}
			if (y == 1) {
				x.dispatchMessage(b)
			}
		}
	};
	attach();

	function clickbtn(s) {
		var b = document.getElementById('out').getElementsByTagName('button');
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(s) > -1) {
				b[i].click();
				return
			}
		}
	}
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
	var B = '';

	function clickhref(s) {
		for (var i = $("a[href]").length - 1; i > 0; i--) {
			var a = document.getElementsByTagName("a")[i].innerText;
			if (a.indexOf(s) != -1) {
				last = i;
				i = 1
			}
		}
		if (typeof last != "undefined" && document.getElementsByTagName("a")[last].innerText.indexOf(s) != -1) {
			console.log("正在点击传送链接：" + s);
			B = document.getElementsByTagName("a")[last].getAttribute('href').split("'")[1] + ';';
			console.log(B);
			go(B)
		} else {
			console.log("没有此传送链接")
		}
	}
	var C;

	function getnpcid(n) {
		var b = document.getElementById('out').getElementsByTagName('button');
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerText == n) {
				C = b[i].getAttribute('onclick').split("'")[1].split(" ")[1];
				return
			}
		}
	}
	hideButton();

	function pifuset() {
		for (var a in btnList) {
			btnList[a].style.color = color;
			btnList[a].style.background = ground
		}
		screenLog.changecss()
	}
	function changeface() {
		if (pifu == 0) {
			pifu = 1;
			color = eval(clrs1 + pifu);
			ground = eval(clrs2 + pifu);
			console.log("当前皮肤为--淡绿生机");
			g_gmain.notify_fail(HIR + "皮肤更换成功！" + NOR);
			g_gmain.notify_fail(HIG + "当前皮肤为--淡绿生机" + NOR);
			words2("皮肤更换成功，当前皮肤为--淡绿生机");
			pifuset()
		} else if (pifu == 1) {
			pifu = 2;
			color = eval(clrs1 + pifu);
			ground = eval(clrs2 + pifu);
			console.log("当前皮肤为--丰收时节");
			g_gmain.notify_fail(HIR + "皮肤更换成功！" + NOR);
			g_gmain.notify_fail(HIG + "当前皮肤为--丰收时节" + NOR);
			words2("皮肤更换成功，当前皮肤为--丰收时节");
			pifuset()
		} else if (pifu == 2) {
			pifu = 3;
			color = eval(clrs1 + pifu);
			ground = eval(clrs2 + pifu);
			console.log("当前皮肤为--粉色佳人");
			g_gmain.notify_fail(HIR + "皮肤更换成功！" + NOR);
			g_gmain.notify_fail(HIG + "当前皮肤为--粉色佳人" + NOR);
			words2("皮肤更换成功，当前皮肤为--粉色佳人");
			pifuset()
		} else if (pifu == 3) {
			pifu = 4;
			color = eval(clrs1 + pifu);
			ground = eval(clrs2 + pifu);
			console.log("当前皮肤为--黑白优雅");
			g_gmain.notify_fail(HIR + "皮肤更换成功！" + NOR);
			g_gmain.notify_fail(HIG + "当前皮肤为--黑白优雅" + NOR);
			words2("皮肤更换成功，当前皮肤为--黑白优雅");
			pifuset()
		} else if (pifu == 4) {
			pifu = 0;
			color = eval(clrs1 + pifu);
			ground = eval(clrs2 + pifu);
			console.log("当前皮肤为--紫色起源");
			g_gmain.notify_fail(HIR + "皮肤更换成功！" + NOR);
			g_gmain.notify_fail(HIG + "当前皮肤为--紫色起源" + NOR);
			words2("皮肤更换成功，当前皮肤为--紫色起源");
			pifuset()
		}
	}
	
	triggers.newTrigger(/每日武林知识问答次数已经达到限额，请明天再来。/, function(m) {
		go('home');
	}, "dati", "");
	
	triggers.newTrigger(/你停止了打坐。/, function(m) {
		p = function() {
			go("home;exercise")
		};
		checkbusy()
	}, "dazuo", "");
	triggers.newTrigger(/你从寒玉床上爬起，结束了这次练功。/, function(m) {
		p = function() {
			go("items get_store /obj/quest/xuantie_suipian;jh 1;e;n;n;w;event_1_24319712;home;sleep_hanyuchuang;home;exercise stop;exercise")
		};
		checkbusy()
	}, "shuibed", "");
	triggers.newTrigger(/每日武林知识问答次数已经达到限额，请明天再来。/, function(m) {
		y = 0;
		btnList['开启答题'].innerText = '开启答题';
		triggers.disableByCls("dati")
	}, "dati", "");
	triggers.disableByCls("dati");
	triggers.newTrigger(/】(.*)【气血】/, function(m) {
		myName = m[1].replace(' (换称号)', "");
		words2(myName + "你好!你正在使用的是道长的新打架养号DZ正版脚本。当前版本号为--" + nowversion, "rgb(118, 235, 32)");
		console.log('您的名字是：' + myName);
		triggers.disableByCls("getname")
	}, "getname", "");
	triggers.newTrigger(/【队伍】(.*)申请加入队伍。/, function(m) {
		setTimeout(function() {
			clickbtn("允许")
		}, 300)
	}, "zudui", "");
	triggers.newTrigger(/任务所在地方好像是：(.*)你已经连续完成(.*)个任务。/, function(m) {
		console.log(m[1]);
		if (m[1].indexOf(J) != -1) {
			triggers.disableByCls("shimenf5");
			return
		} else if (m[1].indexOf(J) == -1) {
			shimenf5();
			return
		}
	}, "shimenf5", "");
	triggers.disableByCls("shimenf5");
	triggers.newTrigger(/(.*)已经死了，只剩下一具尸体静静地躺在这里/, function(m) {
		clickbtn("搜索")
	}, "getcorpse", "");
	triggers.newTrigger(/获得：朱果×100000、『隐武竹笺』×50、突破秘术x10、高级突破秘术x5/, function(m) {
		go('home;use_all');
	}, "fight_qiaofeng", "");
	
	triggers.newTrigger(/(.*)这具尸体显然已经躺在这里有一段时间了，正散发著一股腐尸的味道/, function(m) {
		clickbtn("搜索")
	}, "getcorpse", "");
	triggers.newTrigger(/(.*)对著(.*)喝道：(.*)今日不是你死就是我活！」/, function(m) {
		if (m[1] == database.killfer) {
			if (!is_fighting) {
				clickButton("golook_room");
				setTimeout(function() {
					getnpcid(m[2]);
					console.log("队长正在击杀" + C, "跟随击杀此人");
					go('kill ' + C)
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
	var D = '';

	function getpostion() {
		var a = "商 城排行榜好 友论 剑帮 派VIP月卡VIP月卡状 态遇剑";
		var b = $('span.outtitle').text();
		if ($('span.outbig_text:contains(战斗结束)').length > 0) {
			clickButton('prev_combat');
			setTimeout(getpostion, 500);
			return
		}
		if (is_fighting) {
			D = document.getElementById('vs21').innerText;
			setTimeout(getpostion, 2000)
		} else if (a.indexOf(b) != -1 || $('span.out3:contains(潜能)').length > 0) {
			D = "论剑江湖主页";
			console.log(b + "--角色现在位置是--" + D)
		} else if ($('button.cmd_click_room').length > 0) {
			D = $('button.cmd_click_room')[0].innerText;
			console.log("角色现在位置是--" + D);
			g_gmain.recvNetWork2(HIW + "角色现在位置是--" + D + "\n" + NOR)
		} else if ($('span.outtitle').length > 0) {
			D = $('span.outtitle').text().replace("江湖", "");
			setTimeout(getpostion, 1000)
		} else {
			setTimeout(getpostion, 2000);
			console.log("本次未获取到位置，2秒后重新获取")
		}
	}
	var E = 1;

	function readvip() {
		clickButton('vip');
		setTimeout(readvip1, 200)
	}
	function readvip1() {
		if ($('span.out4').text().indexOf("尚未开通") != -1) {
			console.log("非论剑vip用户");
			go('prev');
			E = 0
		} else console.log("很棒，您的vip还没过期");
		go('prev')
	}
	var F;

	function look_nowjh() {
		clickButton('jh');
		setTimeout(function() {
			F = $("button.cmd_med:contains(进入)")[0].getAttribute('onclick').split('jh ')[1].split("'")[0];
			clickButton('prev');
			console.log("你当前正在进行的章节是" + F);
			g_gmain.recvNetWork2(HIW + "你当前正在进行的章节是" + F + "\n" + NOR)
		}, 300)
	}
	function readmyvip() {
		getpostion();
		readvip();
		setTimeout(look_nowjh, 400);
		setTimeout(readyuanbao, 1000)
	}
	function readyuanbao() {
		var a = g_obj_map.get("msg_attrs").get("yuanbao");
		var b = g_obj_map.get("msg_attrs").get("xf_score");
		g_gmain.recvNetWork2(HIG + "你的元宝有 " + a + "\n" + NOR);
		g_gmain.recvNetWork2(HIR + "你的消费积分有 " + b + "\n" + NOR);
		g_gmain.recvNetWork2(HIY + "你的当前功能布局为 " + buju + "\n" + NOR);
		g_gmain.recvNetWork2(HIM + "你所在的区是 " + userqu + "\n" + NOR);
		g_gmain.recvNetWork2(HIC + "你的vip月卡为 " + E + "\n" + NOR);
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
	var G = "豪客";

	function searchcode() {
		G = prompt("请输入你想查询的当前页面可见的某个按钮的代码（查到代码后可用于狂点击功能）", G);
		var b = $(".cmd_click2");
		var c = $(".cmd_click3");
		for (var i = 0; i < b.length; i++) {
			if (b[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(G) > -1) {
				console.log(b[i].getAttribute('onclick').split("'")[1])
			}
		}
		for (var i = 0; i < c.length; i++) {
			if (c[i].innerHTML.replace(/<[^>]+>/g, "").indexOf(G) > -1) {
				console.log(c[i].getAttribute('onclick').split("'")[1])
			}
		}
	}
	function killfollow() {
		if (btnList['叫杀跟随'].innerText == "叫杀跟随") {
			if (!database.killfer) {
				database.killfer = prompt("请输入叫杀跟随玩家（队长）名字", "多☆情应笑我")
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
	var H, clearft1;

	function clearlog_ftswitch() {
		if (btnList["清空战斗"].innerText == "清空战斗") {
			clearft_open()
		} else {
			clearft_close()
		}
	}
	function clearft_open() {
		database.clearft = 1;
		clearInterval(H);
		clearInterval(clearft1);
		clearlog_ft();
		btnList["清空战斗"].innerText = "停止清空";
		btnList['清空战斗'].style.borderStyle = 'inset';
		H = setInterval(clearlog_ft, 10000);
		clearft1 = setInterval(clearlog_ft1, 1000)
	}
	function clearft_close() {
		database.clearft = 0;
		btnList["清空战斗"].innerText = "清空战斗";
		btnList['清空战斗'].style.borderStyle = 'outset';
		clearInterval(H);
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
	var I = 0,
		runhiting;

	function runhit() {
		if (btnList['开出招'].innerText == '开出招') {
			mySkillLists = prompt("请输入连续单放出招技能:", mySkillLists);
			runhit_open()
		} else {
			runhit_close()
		}
	}
	function runhit_open() {
		g_gmain.notify_fail(HIG + "天下武功，为快不破！" + NOR);
		g_gmain.notify_fail(HIR + "你的出招，快如闪电！" + NOR);
		I = 1;
		clearInterval(runhiting);
		btnList['开出招'].innerText = '关出招';
		btnList['开出招'].style.borderStyle = 'inset';
		runhiting = setInterval(hit, 1000)
	}
	function runhit_close() {
		I = 0;
		clearInterval(runhiting);
		btnList['开出招'].innerText = '开出招';
		btnList['开出招'].style.borderStyle = 'outset'
	}
	var J;

	function shimenf5() {
		if (!J) {
			J = prompt("请输入想去的地点", J);
			return
		}
		triggers.enableByCls("shimenf5");
		go('family_quest cancel go;family_quest')
	}
	var K = "学习十次";

	function ananniu() {
		if (btnList['按按钮'].innerText == '按按钮') {
			K = prompt("请输入你看到的按钮名字", K);
			btnList['按按钮'].innerText = '不按了';
			btnList['按按钮'].style.borderStyle = 'inset';
			doanniu = setInterval(anniugo, 150)
		} else {
			btnList['按按钮'].innerText = '按按钮';
			btnList['按按钮'].style.borderStyle = 'outset';
			clearInterval(doanniu)
		}
		function anniugo() {
			clickbtn(K)
		}
	}
	function mojiaolearn(){
		go('jh 1;w;event_1_46497436;home;home apprentice 日月神教');
		setTimeout(function(){goes('learn force from heimuya_jianqiankai to 10',10);},3000);
		setTimeout(function(){goes('learn tianmo-dafa from heimuya_jianqiankai to 10',12);},5000);
		setTimeout(function(){goes('learn mo-jian-jue from heimuya_jianqiankai to 10',12);},7000);
		setTimeout(function(){goes('learn mo-shan-jue from heimuya_jianqiankai to 10',10);},9000);
		setTimeout(function(){go('apprentice heimuya_shangguanyun');},10000);
		setTimeout(function(){goes('learn tianmo-dafa from heimuya_shangguanyun to 10',14);},11000);
		setTimeout(function(){goes('learn mo-jian-jue from heimuya_shangguanyun to 10',14);},15000);
		setTimeout(function(){goes('learn mo-shan-jue from heimuya_shangguanyun to 10',14);},19000);
		setTimeout(function(){goes('learn force from heimuya_shangguanyun to 10',25);},23000);
		setTimeout(function(){goes('learn mo-zhang-jue from heimuya_shangguanyun to 10',25);},29000);
	}
	function task_tianlong(){
		go('jh 1;w;w;w;w;w;n;ask snow_qiaofeng;ask snow_qiaofeng;ask snow_qiaofeng;fight snow_qiaofeng');
	}
	createButton('一键天龙', btnBox4, task_tianlong);
	createButton('一键魔教', btnBox4, mojiaolearn);
	createButton('清空战斗', btnBox4, clearlog_ftswitch);
	createButton('满血蓝', btnBox4, huixuenei);
	createButton('开出招', btnBox4, runhit);
	createButton('叫杀跟随', btnBox4, killfollow);
	createButton('测弹窗', btnBox4, windowfloat);
	createButton('代码查询', btnBox4, searchcode);
	createButton('师门飞机', btnBox4, shimenf5);
	createButton('按按钮', btnBox4, ananniu);
	createButton('开启答题', btnBox4, datiswitch);
	createButton('自动重连', btnBox4, reconnectswitch);
	createButton('获取信息', btnBox4, readmyvip);
	createButton('隐藏日志', btnBox4, bjlist);
	createButton('换皮肤', btnBox4, changeface);
	createButton('显按钮', btnBox4, buttonhideFunc);
	hideButton();
	if (database.clearft == 1) {
		clearft_open()
	}
})(window);