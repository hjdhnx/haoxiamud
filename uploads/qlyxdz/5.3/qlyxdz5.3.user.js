// ==UserScript==
// @name        道长论剑DZ正版
// @namespace    http://playdreamer.cn/
// @include      http://*.yytou.c*
// @version      5.3
// @description  道长发布的强大脚本，by道长论剑论坛。特别鸣谢虹雪恩新
// @author       道长
// @grant        none
// ==/UserScript==

/*青龙物品参考表
天寒：狂暴丹小还丹乾坤再造丹紫芝灵草天寒帽天寒戒天寒鞋天寒项链天寒手镯软甲衣金刚杖飞羽剑斩空刀拜月掌套金弹子新月棍白蟒鞭
残雪：疯魔杖毒龙鞭玉清棍生死符霹雳掌套血屠刀星河剑残雪帽残雪戒残雪鞋残雪手镯残雪项链金丝宝甲衣
明月：烈日棍西毒蛇杖冰魄银针碧磷鞭--倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯星月大斧碧玉锤霸王枪
烈日：残阳棍伏虎杖暴雨梨花针七星鞭--诛仙剑斩神刀龙象拳套烈日帽烈日宝靴烈日宝链烈日宝戒日光宝甲衣烈日宝镯破冥斧撼魂锤赤焰枪
斩龙：开天宝棍达摩杖小李飞刀乌金玄火鞭--九天龙吟剑飞宇天怒刀天罡掌套斩龙帽斩龙宝靴斩龙宝链斩龙宝戒龙皮至尊甲衣斩龙宝镯天雷断龙斧烛幽鬼煞锤斩龙鎏金枪
胤天：胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片
*/
buju='auto';//自定义布局右移变量（默认是自动适配，自定义请输入不带引号的数字比如100）
qlreq='----天雷断龙斧烛幽鬼煞锤斩龙鎏金枪星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍西毒蛇杖冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍达摩杖开天宝棍乌金玄火鞭日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片';
//青龙需求设置
enforcePoints = 1005;//加力点数设置
myForce = "道种心魔经";//回血内功设置
myDodge = "乾坤大挪移";//刷碎片轻功设置
limitQixue = "100000";//出绝学时战斗中生命值低于该线自动使用内功回血
mySkillLists="九天龙吟剑法;排云掌法;雪饮狂刀";//出招表设置，可以只设置两个或者一个，两个的绝学阵
ai_chuzhao=0;//出绝学如果设置不对，自动切换成开出招
kgg_flag=1;//每次刷新网页默认会自动提示道长公告（0关闭）
quid1="11-15";//区段设置，若是新区只需要填新
skillset={//按号分类默认总设置（逗号与分号都是英文格式，从左往右逗号隔开依次是出招，内功，加力，回血下限，区段）
	"剑行":"降龙十八掌;无相金刚掌,茅山道术,200,10000,11-15",
	"李逍遥_":"如来神掌;独孤九剑,茅山道术,700,30000,21-25",
	"无☆风不起浪":"九天龙吟剑法;雪饮狂刀,道种心魔经,1200,120000,11-15",
	"道花1":"七星剑法;辟邪剑法,易筋经神功,500,10000,46-50",
	"施工员":"九天龙吟剑法;排云掌法,道种心魔经,1000,50000,46-50",
	"多☆情应笑我":"九天龙吟剑法;排云掌法,道种心魔经,1335,120000,11-15",
};
skillset1={//按号分类默认设置一键换装的武器,分号前面的先穿，分号后面的后穿（暂只支持斩龙胤天刀剑拳）,撩奇侠的顺序（请注意武器分隔号是英文的分号，奇侠分隔号是中文的分号，武器和奇侠之间英文的逗号隔开）
	"无☆风不起浪":"九天龙吟剑;飞宇天怒刀,默认",
	"多☆情应笑我":"轩辕剑;破岳掌套,步惊鸿；郭济；浪唤雨；火云邪神；逆风舞；穆妙羽；庞统；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬",
	"飘过云朵":"玄冰凝魄枪;破岳掌套,默认",
	"施工员":"九天龙吟剑;天罡掌套,步惊鸿；郭济；浪唤雨；火云邪神；逆风舞；庞统；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；穆妙羽；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬",
};
skillset2={//按号分类设置青龙杀人选项，托管选项,青龙需求（0杀好1杀坏）
	"无☆风不起浪":"0,2,默认",
	"多☆情应笑我":"0,2,斩龙宝戒天雷断龙斧烛幽鬼煞锤斩龙鎏金枪星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍西毒蛇杖冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍达摩杖开天宝棍乌金玄火鞭日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片",
	"剑行":"0,0,默认",
	"施工员":"1,2,斩龙帽斩龙宝镯天雷断龙斧烛幽鬼煞锤斩龙鎏金枪星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍达摩杖开天宝棍乌金玄火鞭日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片",
	"道花1":"1,2,斩龙帽斩龙宝靴龙皮至尊甲衣斩龙宝戒天罡掌套小李飞刀星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍",
};
tuoguan=2;//可设置0，1，2；0表示关闭托管，1表示开启托管定时完成任务，2表示托管时自动进行的点vip操作会额外点掉钓鱼和排行榜
tuoguantime="6:1";//自动执行托管任务的24小时制时间（注意，时间设置的分钟数如果小于10，前面不用加0，比如3:08不对，应该3:8;托管功能只有授权用户可用，其他用户设置了也没用）
ql_killset = 0;// 托管模式青龙杀人选项 0为杀好人  1为杀恶人
vipzx=2;//默认定时早上5.55点正邪20次，0为关闭，1为点正，2为点邪
tupojiasu=1;//续突破是否使用加速卡，1表示续的时候顺带加速，0默认关闭加速。本功能暂在开发中,推荐在一江湖与一绝学双突时候开启
yc_flag=0;//远程控制开关，仅授权用户有效（0默认关闭，1默认开启）
buything=0;//是否每天定时自动使用开发者帮派购物功能（消耗帮派活跃度），0表示关闭定时自动，关闭后可在开发者选项手动使用
tg_pt=0;//托管模式是否每天自动完成拼图任务
tg_rc=1;//托管模式是否每天自动购买日常任务（花费70元宝获得400w左右潜能）
pifu=0;//初始默认皮肤(0-4)
autozx="23:10;5:50;剑行;0";//自动刷正邪定时开启时间;定时关闭时间;刷正邪的号名字;0杀恶人，1杀好人
qxList_inputs = "步惊鸿；浪唤雨；逆风舞；庞统；火云邪神；郭济；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；穆妙羽；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬";
//默认撩奇侠顺序
autoqixia="0,火云邪神,0,1";//默认：全自动奇侠开关,亲密奇侠名字,奇侠模式（0表示手动对话或者比试打奇侠小号1表示赠送1个金锭2表示全部送15金锭）,秘境触发次数(0表示4次1表示5次)
autopifu=1;//自动随时间换皮肤
banxiaohao="流浪-道花2-道花3-天下第1";//禁止自动打坐睡觉签到的号（可用于挂飞机本自动组队，避免自己跑出副本，也可用于打奇侠大号开奇侠自动切磋）
Enemylist = "[1]阿不;[1]魏娇;[1]绕指·云;[1]末日召唤;[1]抓狂;[1]绘羽;[1]~陌上花开~;[1]南英;[1]李寻花;[1]奈何离歌;[1]纵横老野猪;";//默认敌人设置
Friendlist = "[21]路人甲◆孤傲;[21]男主角◆番茄;[21]出品人◆风云;[21]临记◆卫芷泫;[21]制片人◆戏雨;[21]凌少;[21]空城◆旧梦;[21]春不老◆青木;[1]阿不;[1]纵横老野猪;[1]无头苍蝇;[1]欢乐剑客;[1]~陌上花开~;[1]李寻花;[1]凉城惜暖玉;[1]地府-摩诃王;[2]板砖;[2]陳小神;[7]小飞;[7]冷泉心影;[12]一炮泯恩仇;[1]寒夜·斩;[4]【人间】不舍;[1]魏娇;[4]十方禅师;[1]烽火戲诸侯;[4]【人间】雨修;";
//默认大佬，盟友设置
//注意：托管模式只对授权用户生效，会在指定时间完成托管任务过后，自动开启青龙游侠功能

//警告：以下区域不可改动！！！
var encode_version = 'sojson.v4';var __0x1b268=['KcOpwp9RwrQpwop/','eAdIw73DpsO6w6E=','w4fDgMKn','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','ZV0yNsOR','T8Kkw4tbwqvCmcKb','wqvCqBM=','wpbCrMKGDMOTEMOK','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','wrvCknN4wqs=','f8KnUATCvjFVcMO/WsOawrc='];(function(_0x9c12ed,_0x263dd3){var _0x4f7409=function(_0x40dbe7){while(--_0x40dbe7){_0x9c12ed['push'](_0x9c12ed['shift']());}};_0x4f7409(++_0x263dd3);}(__0x1b268,0x17f));var _0x5900=function(_0x2d48cf,_0x56bac7){_0x2d48cf=_0x2d48cf-0x0;var _0x239499=__0x1b268[_0x2d48cf];if(_0x5900['initialized']===undefined){(function(){var _0xac96e5=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5d4b87='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xac96e5['atob']||(_0xac96e5['atob']=function(_0x358d0a){var _0x3a9d1e=String(_0x358d0a)['replace'](/=+$/,'');for(var _0x38d1b9=0x0,_0x279d93,_0x290800,_0x4a1d3f=0x0,_0x4c3533='';_0x290800=_0x3a9d1e['charAt'](_0x4a1d3f++);~_0x290800&&(_0x279d93=_0x38d1b9%0x4?_0x279d93*0x40+_0x290800:_0x290800,_0x38d1b9++%0x4)?_0x4c3533+=String['fromCharCode'](0xff&_0x279d93>>(-0x2*_0x38d1b9&0x6)):0x0){_0x290800=_0x5d4b87['indexOf'](_0x290800);}return _0x4c3533;});}());var _0x2fd4b9=function(_0x50854e,_0x5d9eb0){var _0x7e96f7=[],_0x758fc3=0x0,_0x2b8e2c,_0x270d06='',_0x3b1043='';_0x50854e=atob(_0x50854e);for(var _0xef5778=0x0,_0x1c4589=_0x50854e['length'];_0xef5778<_0x1c4589;_0xef5778++){_0x3b1043+='%'+('00'+_0x50854e['charCodeAt'](_0xef5778)['toString'](0x10))['slice'](-0x2);}_0x50854e=decodeURIComponent(_0x3b1043);for(var _0x5e7ecb=0x0;_0x5e7ecb<0x100;_0x5e7ecb++){_0x7e96f7[_0x5e7ecb]=_0x5e7ecb;}for(_0x5e7ecb=0x0;_0x5e7ecb<0x100;_0x5e7ecb++){_0x758fc3=(_0x758fc3+_0x7e96f7[_0x5e7ecb]+_0x5d9eb0['charCodeAt'](_0x5e7ecb%_0x5d9eb0['length']))%0x100;_0x2b8e2c=_0x7e96f7[_0x5e7ecb];_0x7e96f7[_0x5e7ecb]=_0x7e96f7[_0x758fc3];_0x7e96f7[_0x758fc3]=_0x2b8e2c;}_0x5e7ecb=0x0;_0x758fc3=0x0;for(var _0x55b479=0x0;_0x55b479<_0x50854e['length'];_0x55b479++){_0x5e7ecb=(_0x5e7ecb+0x1)%0x100;_0x758fc3=(_0x758fc3+_0x7e96f7[_0x5e7ecb])%0x100;_0x2b8e2c=_0x7e96f7[_0x5e7ecb];_0x7e96f7[_0x5e7ecb]=_0x7e96f7[_0x758fc3];_0x7e96f7[_0x758fc3]=_0x2b8e2c;_0x270d06+=String['fromCharCode'](_0x50854e['charCodeAt'](_0x55b479)^_0x7e96f7[(_0x7e96f7[_0x5e7ecb]+_0x7e96f7[_0x758fc3])%0x100]);}return _0x270d06;};_0x5900['rc4']=_0x2fd4b9;_0x5900['data']={};_0x5900['initialized']=!![];}var _0x533b8c=_0x5900['data'][_0x2d48cf];if(_0x533b8c===undefined){if(_0x5900['once']===undefined){_0x5900['once']=!![];}_0x239499=_0x5900['rc4'](_0x239499,_0x56bac7);_0x5900['data'][_0x2d48cf]=_0x239499;}else{_0x239499=_0x533b8c;}return _0x239499;};eval(function(_0x43691b,_0x3c6de5,_0x7b03d5,_0x2d58e0,_0x3aafb7,_0x45239f){_0x3aafb7=function(_0x166031){return(_0x166031<_0x3c6de5?'':_0x3aafb7(parseInt(_0x166031/_0x3c6de5)))+((_0x166031=_0x166031%_0x3c6de5)>0x23?String[_0x5900('0x0','l3kJ')](_0x166031+0x1d):_0x166031[_0x5900('0x1','D@BW')](0x24));};if(!''[_0x5900('0x2','g2Ur')](/^/,String)){while(_0x7b03d5--)_0x45239f[_0x3aafb7(_0x7b03d5)]=_0x2d58e0[_0x7b03d5]||_0x3aafb7(_0x7b03d5);_0x2d58e0=[function(_0x4cfdb5){return _0x45239f[_0x4cfdb5];}];_0x3aafb7=function(){return _0x5900('0x3','acZC');};_0x7b03d5=0x1;};while(_0x7b03d5--)if(_0x2d58e0[_0x7b03d5])_0x43691b=_0x43691b['replace'](new RegExp('\x5cb'+_0x3aafb7(_0x7b03d5)+'\x5cb','g'),_0x2d58e0[_0x7b03d5]);return _0x43691b;}(_0x5900('0x4','Y0Vs'),0x3e,0xa3,_0x5900('0x5','if*w')[_0x5900('0x6','zgRD')]('|'),0x0,{}));eval(function(_0x50596e,_0x5d7279,_0x3ae942,_0x37264b,_0x10f59f,_0x3e1790){_0x10f59f=function(_0x4e0d2f){return(_0x4e0d2f<_0x5d7279?'':_0x10f59f(parseInt(_0x4e0d2f/_0x5d7279)))+((_0x4e0d2f=_0x4e0d2f%_0x5d7279)>0x23?String['fromCharCode'](_0x4e0d2f+0x1d):_0x4e0d2f['toString'](0x24));};if(!''[_0x5900('0x7','RNhH')](/^/,String)){while(_0x3ae942--)_0x3e1790[_0x10f59f(_0x3ae942)]=_0x37264b[_0x3ae942]||_0x10f59f(_0x3ae942);_0x37264b=[function(_0xb113f2){return _0x3e1790[_0xb113f2];}];_0x10f59f=function(){return _0x5900('0x8','zj93');};_0x3ae942=0x1;};while(_0x3ae942--)if(_0x37264b[_0x3ae942])_0x50596e=_0x50596e[_0x5900('0x9','w3L0')](new RegExp('\x5cb'+_0x10f59f(_0x3ae942)+'\x5cb','g'),_0x37264b[_0x3ae942]);return _0x50596e;}(_0x5900('0xa','acZC'),0x3e,0x79,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|replace|if|String|36|parseInt|35|while|eval|fromCharCode|new|RegExp|29|toString|split|cn|62|84|for|50|20|var|createElement|script|setAttribute|src|http|playdreamer|document|pan|uploads|qlyxdz|appendChild|qlyxdzinstall5|js|head'[_0x5900('0xb','(9*g')]('|'),0x0,{}));;encode_version = 'sojson.v4';