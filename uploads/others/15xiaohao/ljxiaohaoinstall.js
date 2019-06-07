var knownlist = [],
	curstamp = 0,
	prestamp = 0,
	cmdlist = [],
	deadlock = 0,
	data = window.localStorage,
	nextdo = function() {},
	AutoGet_targetName = "尸体",
	bs_time = 1000;

function go(a) {
	deadlock = 1;
	cmdlist.push(a);
	deadlock = 0
}
function newgo() {
	if (cmdlist.length === 0) {
		setTimeout(function() {
			newgo()
		}, 10)
	} else {
		if (cmdlist.length > 0 && deadlock == 1) {
			setTimeout(function() {
				newgo()
			}, 10)
		} else if (deadlock === 0 && cmdlist.length > 0) {
			curstamp = (new Date()).valueOf();
			if ((curstamp - prestamp) > 150) {
				if (cmdlist.length !== 0) {
					clickButton(cmdlist[0]);
					cmdlist.shift();
					prestamp = curstamp
				}
				setTimeout(function() {
					newgo()
				}, 10)
			} else {
				setTimeout(function() {
					newgo()
				}, 10)
			}
		}
	}
}
newgo();

function Go(a) {
	var d = a.split(";");
	for (var i = 0; i < d.length; i++) if (d[i] == "st1") {
		moshi_flag = 1;
		console.log("开启摸尸")
	} else if (d[i] == "st0") {
		moshi_flag = 0;
		console.log("关闭摸尸")
	} else if (d[i] == "chap") {
		Chap_go()
	} else go(d[i], 0)
}
function isContains(a, b) {
	return a.indexOf(b) >= 0
}
var banSkills = "天师灭神剑|茅山道术|纵跃闪躲之术|青城步法|踏雪无痕|基本轻功|少林身法|梯云纵|铁血十二式";

function hitopen() {
	setInterval(hit, 100)
}
function hit() {
	zdskill = '唐门毒功';
	setTimeout(hit1, 1000);
	if ($('span.outbig_text:contains(战斗结束)').length > 0) {
		clickButton('prev_combat')
	}
}
function hit1() {
	for (var i = 1; i < 5; i++) {
		skillName = $('#skill_' + i).children().children().text();
		if (skillName !== "" && isContains(zdskill, skillName) && gSocketMsg.get_xdz() > 1) {
			console.log(skillName);
			go('playskill ' + i);
			return
		}
	}
	for (i = 1; i < 5; i++) {
		skillName = $('#skill_' + i).children().children().text();
		if (skillName !== "" && !isContains(banSkills, skillName) && gSocketMsg.get_xdz() > 1) {
			console.log(skillName);
			go('playskill ' + i);
			return
		}
	}
}
function checkbusy() {
	if (cmdlist.length == 0 && !document.getElementById("combat_xdz_text")) {
		nextdo()
	} else {
		setTimeout(checkbusy, bs_time);
		console.log("忙碌中..." + bs_time + "ms后再查询是否执行")
	}
}
function AutoGet1() {
	$("button.cmd_click3").each(function() {
		if (isContains($(this).html(), AutoGet_targetName)) eval($(this).attr("onclick").replace("look_item corpse", "get corpse"))
	})
}
skillset_i = setInterval(hit, 1000);
var btnList = {},
	buttonWidth = '60px',
	buttonHeight = '20px',
	currentPos = 30,
	delta = 25,
	color = '#E0EEEE',
	ground = '#9370DB';

function createButton(a, b) {
	btnList[a] = document.createElement('button');
	var c = btnList[a];
	c.innerText = a;
	c.style.position = 'absolute';
	c.style.left = '800px';
	c.style.color = color;
	c.style.background = ground;
	c.style.top = currentPos + 'px';
	currentPos = currentPos + delta;
	c.style.width = buttonWidth + 12;
	c.style.height = buttonHeight;
	c.addEventListener('click', b);
	document.body.appendChild(c)
}
createButton('使用说明', readme);
createButton('出厂设置', sethao);
createButton('开关设置', sethao1);
createButton('查看当前', readnowgeshi);
createButton('注册界面', createNew);
createButton('格式注册', geshireg);
createButton('格式登录', geshisig);
createButton('开始选区', step1);
createButton('跳过剧情', step2);
createButton('本地帐号', setlocallogin);
createButton('格式帐号', setgeshilogin);
createButton('自动换号', setautologin);
createButton('挂机主线', setautoguaji);
createButton('唐门学毒', teacher);
createButton('自动打装', autoeqp);
createButton('开始签到', CheckIn);
createButton('清空储存', clearStorage);
createButton('读取储存', showStorage);
createButton('读取数量', showNum);
createButton("本地号数", countNum);
createButton('下个小号', nexturl);
createButton('帐号全开', openall);

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
	go("touzi_jihua2 buygo " + y)
}
function CheckIn() {
	go('jh');
	if (g_obj_map.get("msg_jh_list") === undefined) {
		setTimeout(function() {
			CheckIn()
		}, 500)
	} else {
		Go('jh 1;look_npc snow_mercenary');
		setTimeout((function() {
			clickLibaoBtn();
			Go('jh 5;n;n;e;look_npc yangzhou_yangzhou9')
		}), 2000);
		setTimeout((function() {
			clickLibaoBtn();
			Go('share_ok 1;share_ok 2;share_ok 3;share_ok 4;share_ok 5;share_ok 7;w;n;w;sign7');
			Go('jh 1;e;n;e;e;event_1_44731074;event_1_8041045;event_1_8041045;event_1_16891630;event_1_16891630');
			Go('jh 2;n;n;n;n;n;n;n;zhongyuan_lb;e;tzjh_lq;home')
		}), 2500)
	}
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
				go(c)
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
function SwordsReport() {
	if ($("div#page>div#out>span.out>table>tbody>tr>td").length !== 0) {
		Go('home');
		setTimeout(function() {
			var c = $("#out > span > table > tbody > tr > td > span");
			c.each(function() {
				if ($(this).text().indexOf('等级') > -1) {
					var a = parseInt($(this).text().substring(4));
					var b = new Date();
					var H = b.getHours();
					var W = b.getDay();
					if (a < 100) {
						setTimeout(Chap, 1000)
					} else {
						if (W === 3 && H > 19 && H < 21) {
							setTimeout(function() {
								nexturl()
							}, 100);
							return
						}
						if (H > 11) Go('items use meigui hua');
						if (W === 3 && H < 20) Go('swords report go');
						if (W === 3 && H > 21) Go('swords get_drop go');
						ai_licai();
						CheckIn();
						setTimeout(tellbyflag1, 3200)
					}
				}
			})
		}, 2000)
	} else if ($("#out > span > p > button").length !== 0) {
		step2()
	} else {
		setTimeout(function() {
			SwordsReport()
		}, 500)
	}
}
function Chap() {
	if ($("div#page>div#out>span.out>table>tbody>tr>td").length !== 0) {
		Go('home;jh');
		setTimeout((function() {
			var b = $("button.cmd_med");
			b.each(function() {
				if ($(this).text().indexOf('进入') > -1) {
					var a = $('button.cmd_med')[1].getAttribute('onclick').split('jh ')[1].split("'")[0];
					if (a == 1) {
						Chap1()
					} else if (a == 2) {
						Chap2()
					} else if (a == 3) {
						Chap3()
					} else if (a == 4) {
						Chap4()
					} else if (a == 5) {
						Chap5()
					} else {
						CheckIn();
						console.log("经判断已通过前五章，当前开启自动换号开关为--" + data.autohao_flag);
						if (data.autohao_flag == 1) {
							setTimeout(function() {
								bs_time = 2000;
								nextdo = function() {
									nexturl()
								};
								checkbusy()
							}, 10000)
						}
					}
				}
			})
		}), 1000)
	}
}
function NextStep(b) {
	var a = arguments;
	if ($("#skill_1")[0] !== undefined) {
		setTimeout((function() {
			NextStep(b)
		}), 2000)
	} else {
		if (moshi_flag == 1) {
			AutoGet1();
			console.log("正在摸尸")
		}
		var c = b.shift();
		Go(c);
		if (b.length > 0) {
			setTimeout((function() {
				NextStep(b)
			}), 2000)
		} else {
			Go('home')
		}
	}
}
function Chap1() {
	Go('jh 1;ask snow_waiter;ask snow_mercenary;e;fight snow_worker');
	var a = ['n;e;give snow_guard;home'];
	var b = "jh 1;e;s;w;w;e;s;n;e;n;n;w;e;n;w;e;n;w;e;n;w;e;n;s;e;w;s;e;e;w;w;s;s;e;e;n;s;e;e;n;s;s;n;e;w;w;w;w;w;s;e;s;go northeast;go northeast;home;chap";
	setTimeout((function() {
		NextStep(a)
	}), 2000)
}
function Chap2() {
	Go('jh 2;n;ask luoyang_luoyang18;n;kill luoyang_xiaotou');
	var a = ['n;kill luoyang_xiaotou', 'e;kill luoyang_xiaotou', 'fight luoyang_luoyang27', 's;kill luoyang_xiaotou', 'home;chap'];
	setTimeout((function() {
		NextStep(a)
	}), 2000)
}
function Chap3() {
	Go('jh 3;ask huashancun_huashancun12;fight huashancun_huashancun12');
	var a = ['n', 'event_1_38583676;event_1_38583676;event_1_38583676;event_1_38583676;event_1_38583676', 's;s;fight huashancun_popitouzi', 's;fight huashancun_huashancun1', 'w;give huashancun_huashancun6', 'home;chap'];
	setTimeout((function() {
		NextStep(a)
	}), 2000)
}
function Chap4() {
	Go('jh 4;ask huashan_huashan14;fight huashan_huashan14');
	var a = ['n;n;fight huashan_huashan2', 'n;n;fight huashan_huashan25', 'n;n;fight huashan_huashan26', 'n;fight huashan_huashan27', 'n;kill huashan_huashan24', 'n;fight huashan_huashan8', 'n;ask huashan_gao;n;n;n;ask huashan_lao;fight huashan_lao', 's;w;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725;event_1_60189725', 'e;s;ask huashan_yue;home;chap'];
	setTimeout((function() {
		NextStep(a)
	}), 2000)
}
function Chap5() {
	Go('jh 5;ask yangzhou_yangzhou16;n;n;n;ask yangzhou_yangzhou19;n;w;ask yangzhou_xiaofeizei;fight yangzhou_xiaofeizei');
	var a = ['ask yangzhou_yangzhou3;yangzhou16_op1;fight yangzhou_yangzhou18', 'e;e;s;ask yangzhou_yangzhou19;fight yangzhou_yangzhou19', 'n;n;n;n;n;n;e;kill yangzhou_yangzhou24', 'w;s;s;s;kill yangzhou_yangzhou28', 's;s;s;s;s;s;ask yangzhou_yangzhou16;home;chap'];
	setTimeout((function() {
		NextStep(a)
	}), 2000)
}
function Chap_go() {
	if (data.autoguaji_flag == 1) {
		setTimeout(Chap, 2000)
	}
}
function tellbyflag() {
	if (data.autohao_flag == 1) {
		if (data.locallogin_flag == 1 && data.geshilogin_flag != 1) {
			console.log("自动更换登录本地帐号");
			if (data.autoguaji_flag == 1) {
				setTimeout(Chap, 2000)
			} else {
				showNum();
				SwordsReport()
			}
		} else if (data.locallogin_flag != 1 && data.geshilogin_flag == 1) {
			console.log("自动更换登录格式帐号");
			setTimeout(function() {
				bs_time = 2000;
				nextdo = function() {
					autologin1()
				};
				checkbusy()
			}, 2000)
		}
	}
}
function tellbyflag1() {
	if (data.autohao_flag == 1) {
		if (data.locallogin_flag == 1 && data.geshilogin_flag != 1) {
			setTimeout(function() {
				bs_time = 2000;
				nextdo = function() {
					nexturl()
				};
				checkbusy()
			}, 2000)
		} else if (data.locallogin_flag != 1 && data.geshilogin_flag == 1) {
			setTimeout(function() {
				bs_time = 2000;
				nextdo = function() {
					autologin1()
				};
				checkbusy()
			}, 2000)
		}
	} else {
		if (data.locallogin_flag == 1) {
			console.log("帐号列表已切换到本地帐号，但当前未开启自动换号开关")
		} else if (data.geshilogin_flag == 1) {
			console.log("帐号列表已切换到格式帐号，但当前未开启自动换号开关")
		}
	}
}
function createNew() {
	window.open('http://jians.yytou.cn/?area=3721989')
}
function readme() {
	window.open("http://playdreamer.cn/bbs/index.php?c=read&id=157&cache=refresh")
}
function readnowgeshi() {
	alert("你当前的格式为：" + '帐号前缀--' + data.hao + '  开始序号--' + data.stnum + '  默认选区--' + data.quselect + '  默认统一密码--' + data.defpassword + '  默认注册角色名前缀--' + data.regname + '  本地帐号开关状态--' + data.locallogin_flag + '  格式帐号开关状态--' + data.geshilogin_flag + '  挂机主线开关状态--' + data.autoguaji_flag + '  自动换号开关状态--' + data.autohao_flag)
}
function teacher() {
	Go('home apprentice 唐门;skills tangmen_tangbai;learn literate from tangmen_tangbai to 10;learn literate from tangmen_tangbai to 10;learn literate from tangmen_tangbai to 10;learn literate from tangmen_tangbai to 10;learn literate from tangmen_tangbai to 10;learn literate from tangmen_tangbai to 10;learn force from tangmen_tangbai to 10;learn force from tangmen_tangbai to 10;learn force from tangmen_tangbai to 10;learn force from tangmen_tangbai to 10;learn force from tangmen_tangbai to 10;learn force from tangmen_tangbai to 10;learn unarmed from tangmen_tangbai to 10;learn unarmed from tangmen_tangbai to 10;learn unarmed from tangmen_tangbai to 10;learn unarmed from tangmen_tangbai to 10;learn unarmed from tangmen_tangbai to 10;learn unarmed from tangmen_tangbai to 10');
	Go('learn dugong from tangmen_tangbai to 10;learn dugong from tangmen_tangbai to 10;learn dugong from tangmen_tangbai to 10;learn dugong from tangmen_tangbai to 10;learn dugong from tangmen_tangbai to 10;learn dugong from tangmen_tangbai to 10');
	Go('learn tangmen-duzhang from tangmen_tangbai to 10;learn tangmen-duzhang from tangmen_tangbai to 10;learn tangmen-duzhang from tangmen_tangbai to 10;learn tangmen-duzhang from tangmen_tangbai to 10;learn tangmen-duzhang from tangmen_tangbai to 10;learn tangmen-duzhang from tangmen_tangbai to 10');
	Go('prev')
}
var moshi_flag = 0;

function autoeqp() {
	Go('jh 1;e;n;n;n;w;kill snow_herbalist');
	var a = ['st1', 'auto_equip on;st0', 'e;n;w;kill snow_post_officer', 'st1', 'auto_equip on;st0', 'e;e;kill snow_chefu', 'st1', 'auto_equip on;st0;jh 2;n;n;n;n;n;n;n;n;n;e;n;n;ask luoyang_luoyang2;auto_equip on;home'];
	setTimeout((function() {
		NextStep(a)
	}), 2000)
}
function geshireg() {
	goReg();
	setTimeout(function() {
		document.getElementById('userId').value = data.hao + data.stnum;
		document.getElementById('regPassword').value = data.defpassword;
		document.getElementById('login_btn').click();
		data.stnum++
	}, 2000)
}
function geshisig() {
	goLogin();
	setTimeout(function() {
		document.getElementById('userId').value = data.hao + data.stnum;
		document.getElementById('password').value = data.defpassword;
		document.getElementById('login_btn').click();
		data.stnum++
	}, 2000)
}
function sethao() {
	data.haostnum = "dz;1;47;道花;123456";
	data.haostnum = prompt("请输入账号前缀;开始序号;默认选区;角色前缀;默认统一密码", data.haostnum);
	data.hao = data.haostnum.split(';')[0];
	data.stnum = data.haostnum.split(';')[1];
	data.quselect = data.haostnum.split(';')[2];
	data.regname = data.haostnum.split(';')[3];
	data.defpassword = data.haostnum.split(';')[4];
	data.urlindex = data.stnum
}
function sethao1() {
	data.set_flag = data.autohao_flag + ';' + data.locallogin_flag + ';' + data.geshilogin_flag + ';' + data.autoguaji_flag;
	data.set_flag = prompt("请输入自动换号开关;本地帐号开关;格式帐号开关;挂机主线开关", data.set_flag);
	data.autohao_flag = data.set_flag.split(';')[0];
	data.locallogin_flag = data.set_flag.split(';')[1];
	data.geshilogin_flag = data.set_flag.split(';')[2];
	data.autoguaji_flag = data.set_flag.split(';')[3]
}
function setauto() {
	if (btnList["开启自动"].innerText == "开启自动") {
		data.auto_flag = 1;
		btnList["开启自动"].innerText = "关闭自动";
		btnList["开启自动"].style.borderStyle = 'inset';
		setTimeout(function() {
			showNum();
			SwordsReport()
		}, 2000)
	} else {
		data.auto_flag = 0;
		btnList["开启自动"].innerText = "开启自动";
		btnList["开启自动"].style.borderStyle = 'outset'
	}
}
function setlocallogin() {
	if (btnList["本地帐号"].innerText == "本地帐号") {
		data.locallogin_flag = 1;
		data.geshilogin_flag = 0;
		btnList["本地帐号"].innerText = "本地登录";
		btnList["本地帐号"].style.borderStyle = 'inset';
		btnList["格式帐号"].innerText = "格式帐号";
		btnList["格式帐号"].style.borderStyle = 'outset'
	} else {
		data.locallogin_flag = 0;
		btnList["本地帐号"].innerText = "本地帐号";
		btnList["本地帐号"].style.borderStyle = 'outset'
	}
}
function setgeshilogin() {
	if (btnList["格式帐号"].innerText == "格式帐号") {
		data.locallogin_flag = 0;
		data.geshilogin_flag = 1;
		btnList["本地帐号"].innerText = "本地帐号";
		btnList["本地帐号"].style.borderStyle = 'outset';
		btnList["格式帐号"].innerText = "格式登录";
		btnList["格式帐号"].style.borderStyle = 'inset'
	} else {
		data.locallogin_flag = 0;
		btnList["格式帐号"].innerText = "格式帐号";
		btnList["格式帐号"].style.borderStyle = 'outset'
	}
}
function setautologin() {
	if (btnList["自动换号"].innerText == "自动换号") {
		data.autohao_flag = 1;
		btnList["自动换号"].innerText = "关闭换号";
		btnList["自动换号"].style.borderStyle = 'inset';
		tellbyflag()
	} else {
		data.autohao_flag = 0;
		btnList["自动换号"].innerText = "自动换号";
		btnList["自动换号"].style.borderStyle = 'outset'
	}
}
function setautoguaji() {
	if (btnList["挂机主线"].innerText == "挂机主线") {
		data.autoguaji_flag = 1;
		btnList["挂机主线"].innerText = "停止挂机";
		btnList["挂机主线"].style.borderStyle = 'inset';
		Chap()
	} else {
		data.autoguaji_flag = 0;
		btnList["挂机主线"].innerText = "挂机主线";
		btnList["挂机主线"].style.borderStyle = 'outset'
	}
}
function autologin1() {
	var a = window.location.host;
	console.log(a);
	if (a == 'login.mobile.yytou.com') {
		geshisig()
	} else if (a == 'jians.yytou.cn') {
		step1()
	} else if (a.indexOf('sword-direct') > -1) {
		if (data.autoguaji_flag == 1) {
			setTimeout(Chap, 2000)
		} else {
			showNum();
			SwordsReport()
		}
		if (data.autohao_flag == 1) {
			bs_time = 5000;
			nextdo = function() {
				window.location.href = ('http://jians.yytou.cn/?area=3721989')
			}
			setTimeout(checkbusy, 5000)
		}
	}
}
function step1() {
	window.location.href = 'selArea.do?area=' + data.quselect
}
function step2() {
	go('男性');
	setTimeout((function() {
		document.getElementById('input_1').value = data.regname + data.stnum;
		$("#b_input_1").click()
	}), 2000);
	setTimeout((function() {
		step3()
	}), 6000)
}
function step3() {
	Go('书香门第;ask start_zhongshanglaozhe;fight start_mengmianren');
	SkillInter = setInterval(hit, 1000);
	setTimeout((function() {
		step4()
	}), 5000)
}
function step4() {
	if ($("#skill_1")[0] === undefined) {
		clearInterval(SkillInter);
		Go('ask start_zhongshanglaozhe;s;guanchaxuanya;tiaoxiaxuanya;qiguaiguozi;e;guanchashendiao;ask start_shendiao;shouze ok');
		setTimeout((function() {
			Go('home;work do maikuli;exercise')
		}), 10 * 1000);
		setTimeout((function() {
			SwordsReport()
		}), 15 * 1000)
	} else {
		setTimeout((function() {
			step4()
		}), 2000)
	}
}
function inputStorage() {
	var r = Math.random();
	var a = window.location;
	data.setItem(r, a)
}
function showNum() {
	if (data.locallogin_flag == 1) {
		var a = parseInt(data.urlindex);
		console.log("小号序号 " + (a + 1));
		btnList['读取数量'].innerText = "小号" + (a + 1)
	} else if (data.geshilogin_flag == 1) {
		console.log("小号序号 " + data.stnum);
		btnList['读取数量'].innerText = "小号" + data.stnum
	}
}
function showStorage() {
	console.clear();
	for (var i = 0; i < data.length; i++) {
		console.log('本地存储的第' + i + '条数据的名字为：' + data.key(i) + ',值为：' + data.getItem(data.key(i)))
	}
}
function clearStorage() {
	data.clear();
	console.log(data)
}
function countNum() {
	alert("本地现有的小号数量为-- " + urllist.length)
}
var urllist = [];
for (i = 0; i < urllist0.length; i++) urllist.push(urllist0[i]);
console.log("脚本本地总共有" + urllist.length + "个号");

function openall() {
	data.autohao_flag = 0;
	for (i = 0; i < urllist.length; i++) window.open(urllist[i])
}
function nexturl() {
	if (data.locallogin_flag == 1 && data.geshilogin_flag == 0) {
		console.log(window.location.href);
		var a = 0;
		var b = urllist.length;
		if (data.hasOwnProperty("urlindex")) {
			a = parseInt(data.urlindex);
			if (a > urllist.length - 2) a = -1;
			a++;
			data.urlindex = a;
			console.log("小号序号 " + a)
		} else {
			a = -1;
			a++;
			data.urlindex = a
		}
		window.location.href = urllist[a]
	} else if (data.locallogin_flag == 0 && data.geshilogin_flag == 1) {
		autologin1()
	}
}
function beginre() {
	if (data.locallogin_flag == 1) {
		data.geshilogin_flag = 0;
		btnList["本地帐号"].innerText = "本地登录";
		btnList["本地帐号"].style.borderStyle = 'inset';
		btnList["格式帐号"].innerText = "格式帐号";
		btnList["格式帐号"].style.borderStyle = 'outset'
	}
	if (data.geshilogin_flag == 1) {
		data.locallogin_flag = 0;
		btnList["格式帐号"].innerText = "格式登录";
		btnList["格式帐号"].style.borderStyle = 'inset';
		btnList["本地帐号"].innerText = "本地帐号";
		btnList["本地帐号"].style.borderStyle = 'outset'
	}
	if (data.autoguaji_flag == 1) {
		btnList["挂机主线"].innerText = "停止挂机";
		btnList["挂机主线"].style.borderStyle = 'inset'
	}
	if (data.autohao_flag == 1) {
		btnList["自动换号"].innerText = "关闭换号";
		btnList["自动换号"].style.borderStyle = 'inset';
		setTimeout(tellbyflag, 1000)
	}
}
beginre();