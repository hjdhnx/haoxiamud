// ==UserScript==
// @name        道长论剑DZ正版（传说）
// @namespace    http://playdreamer.cn/
// @include      http://*.yytou.c*
// @version      6.7
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
胤天：胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片紫枫玉华环碎片
花草药材:彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅
*/
/*装备对应绝学备注
带棍子群伤为阵法伤害的(23.8%~29.75%)
带剑群伤为阵法伤害的(26.4%~33%)
带拳群伤为阵法伤害的(16.7%~20.9%)
对手无免伤全伤害如店小二逄义，帮副怪，直接取群伤最大值
对手有免伤如柳淳风，本7怪，闯楼怪，直接取群伤最小值
武器有剑（没剑有棍子稍微差点儿）与棍子组阵的实际单体伤害，等于阵法显示伤害的1.25倍，比如阵法显示打了4000w，实际造成的是5000w单体伤害
推荐玩法，武器带枪剑，阵法单体玩九天+燎原，附加群伤千影棍
很多技能玩枪棍的人，推荐带武器为枪剑，实测群伤为阵法伤害的1/4以上比枪棍还多点儿。枪拳群伤不行的，所以武器别带枪拳
玩棍剑的人，推荐不要玩棍拳，千影排云寒霜六脉，伤害太低了，不如千影九天寒霜棍+独孤或者真武
千影九天有暴击，黑字大概是原先的1.25倍伤害。同样属性，棍剑还没阵，棍拳有阵，经过对比，棍剑比棍拳多30%伤害
*/
buju='auto';//自定义布局右移变量（默认是自动适配，自定义请输入不带引号的数字比如100）
qlreq='----天雷断龙斧烛幽鬼煞锤斩龙鎏金枪星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍西毒蛇杖冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍达摩杖开天宝棍乌金玄火鞭日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片紫枫玉华环碎片彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅';
//青龙需求设置
kf_qlreq='九天龙吟剑飞宇天怒刀天罡掌套斩龙帽斩龙宝靴斩龙宝链斩龙宝戒龙皮至尊甲衣斩龙宝镯天雷断龙斧烛幽鬼煞锤斩龙鎏金枪天雷断龙斧烛幽鬼煞锤斩龙鎏金枪达摩杖开天宝棍乌金玄火鞭小李飞刀日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片紫枫玉华环碎片彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅';
//新开跨服青龙需求设置
enforcePoints = 1005;//加力点数设置
myForce = "道种心魔经";//回血内功设置
myDodge = "乾坤大挪移";//刷碎片轻功设置
ssp_site=1;//刷碎片地点设置（1234分别是醉汉，地痞，地痞，青竹蛇）
limitQixue = "180000";//出绝学时战斗中生命值低于该线自动使用内功回血
mySkillLists="九天龙吟剑法;排云掌法;雪饮狂刀";//出招表设置，可以只设置两个或者一个，两个的绝学阵
ai_chuzhao=0;//出绝学如果设置不对，自动切换成开出招
kgg_flag=0;//每次刷新网页默认会自动提示道长公告（0关闭）
quid1="11-15";//区段设置，若是新区只需要填新
ql_delay='18000';//青龙自定义延时，单位毫秒
jd_save=3000;//智能奇侠预留保底金锭（数量之下不会自动每次送15，但能执行出5次秘境模式）
skillset={//按号分类默认总设置（逗号与分号都是英文格式，从左往右逗号隔开依次是出招，内功，加力，回血下限，区段，智能奇侠预留金锭）
	"剑行":"排云掌法,茅山道术,200,10000,11-15,1000",
	"李逍遥_":"如来神掌;独孤九剑,茅山道术,700,30000,11-15,1000",
	"无☆风不起浪":"千影百伤棍;九天龙吟剑法,道种心魔经,1635,400000,1-5,默认",
	"道花1":"排云掌法,易筋经神功,500,30000,11-15,1000",
	"施工员":"九天龙吟剑法;排云掌法,道种心魔经,1425,200000,1-5,默认",
	"多☆情应笑我":"千影百伤棍;燎原百破,道种心魔经,1585,400000,1-5,默认",
	"独☆钓寒江雪":"覆雨剑法;如来神掌,道种心魔经,955,140000,1-5,默认",
	"飘过云朵":"九溪断月枪,道种心魔经,1927,600000,1-5,默认",
};
skillset1={//按号分类默认设置一键换装的武器,分号前面的先穿，分号后面的后穿（暂只支持斩龙胤天的神兵武器）,撩奇侠的顺序（请注意武器分隔号是英文的分号，奇侠分隔号是中文的分号，武器和奇侠之间英文的逗号隔开）
	"无☆风不起浪":"轩辕剑;玄冰凝魄枪,默认",
	"多☆情应笑我":"轩辕剑;玄冰凝魄枪,步惊鸿；郭济；浪唤雨；火云邪神；逆风舞；穆妙羽；庞统；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬",
	"飘过云朵":"轩辕剑;玄冰凝魄枪,默认",
	"施工员":"九天龙吟剑;天罡掌套,步惊鸿；郭济；浪唤雨；火云邪神；逆风舞；庞统；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；穆妙羽；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬",
};
skillset2={//按号分类设置青龙杀人选项，托管选项,托管刷碎片地点,托管吃江湖令,托管吃帮派令,托管挂机铁血10分钟,青龙需求（0杀好1杀坏）
	"无☆风不起浪":"1,2,2,0,1,1,默认",
	"独☆钓寒江雪":"1,2,1,0,0,0,默认",
	"飘过云朵":"1,2,1,1,1,1,默认",
	"多☆情应笑我":"1,2,3,1,1,1,九天龙吟剑飞宇天怒刀天罡掌套斩龙帽斩龙宝靴斩龙宝链斩龙宝戒龙皮至尊甲衣斩龙宝镯天雷断龙斧烛幽鬼煞锤斩龙鎏金枪天雷断龙斧烛幽鬼煞锤斩龙鎏金枪达摩杖开天宝棍乌金玄火鞭小李飞刀日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片紫枫玉华环碎片彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅",
	"剑行":"1,2,3,0,0,0,默认",
	"李逍遥_":"0,2,1,0,0,0,斩龙宝链斩龙宝靴斩龙宝戒天罡掌套小李飞刀星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅",
	"施工员":"1,2,4,0,0,0,天雷断龙斧烛幽鬼煞锤斩龙鎏金枪星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍达摩杖开天宝棍乌金玄火鞭日光宝甲衣胤天宝帽碎片胤天项链碎片胤天宝镯碎片胤天宝戒碎片胤天宝靴碎片胤天紫金衣碎片昊天龙旋铠碎片鱼肠碎片水羽云裳碎片奉天金带碎片凤羽乾坤盾碎片轩辕剑碎片破岳拳套碎片天雨玄镖碎片天神杖碎片轰天巨棍碎片神龙怒火鞭碎片雷霆诛神刀碎片胤武伏魔斧碎片九天灭世锤碎片玄冰凝魄枪碎片紫枫玉华环碎片彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅",
	"道花1":"1,2,4,0,0,0,斩龙帽斩龙宝靴龙皮至尊甲衣斩龙宝镯天罡掌套小李飞刀星月大斧碧玉锤霸王枪破冥斧撼魂锤赤焰枪狂暴丹烈日棍冰魄银针碧磷鞭-倚天剑屠龙刀墨玄掌套明月帽明月鞋明月项链明月戒月光宝甲衣明月手镯烈日帽诛仙剑烈日宝戒烈日宝镯烈日宝靴烈日宝链伏虎仗七星鞭残阳棍彼岸花熙颜凤凰木洛神花君影草矢车菊忘忧草雪英夕雾草朝开暮落花晚香玉朽凌霄花百宜雪梅",
};
skillset3={//按号分类设置智能奇侠参数:智能奇侠顺序，智能奇侠模式，是否托管奇侠,是否智能换突破,换突破顺序参数,托管开青龙,托管开游侠
	"无☆风不起浪":"穆妙羽-狐苍雁-妙无心-八部龙将,0,1,1,碧血心法:15;天波九转:12;燎原百破:40;幽影幻虚步:20;九溪断月枪:40,0,0",
	"独☆钓寒江雪":"步惊鸿-郭济-风无痕-宇文无敌,0,1,1,孔雀翎:20;天师灭神剑:13;幽影幻虚步:20,0,0",
	"多☆情应笑我":"宇文无敌-巫夜姬-玄月研,0,1,1,碧血心法:15;天波九转:12;九天龙吟剑法:42;覆雨剑法:40;金刚不坏功:7;九阳神功:9;太极神功:10;真武七截剑:12;帝王剑法:10;九阴噬骨刀:14;九阴真经:10;葵花宝典:8;七星剑法:10;天师灭神剑:13;拈花解语鞭:20;捆仙鞭法:14;十怒绞龙索：20,0,0",
	"剑行":"默认,0,1,1,排云掌法:20;真武七截剑:13;如来神掌:20;霜寒十四棍:14;乾坤大挪移:15;易筋经神功:15,1,1",
	"李逍遥_":"默认,0,1,1,无相金刚掌:14;八荒功:15;九阴噬骨刀:15;真武七截剑:13,1,1",
	"道花1":"默认,0,1,1,排云掌法:20;黯然销魂掌:14;斗战棍典:15;易筋经神功:15,1,1",
	"施工员":"默认,0,1,1,霜寒十四棍:14;斗战棍典:15;真武七截剑:13;幽影幻虚步:20;九溪断月枪:20,0,0",
	"飘过云朵":"默认,0,1,1,排云掌法:40;如来神掌:40;千影百伤棍:40;九天龙吟剑法:42;覆雨剑法:40;破军棍诀:40,0,0",
};
skillset4={//按号分类设置帮购物开关，帮购物清单
	"无☆风不起浪":"1,默认",
	"多☆情应笑我":"1,默认",
	"飘过云朵":"1,空识卷轴;隐武竹筏",
};
tuoguan=2;//可设置0，1，2；0表示关闭托管，1表示开启托管定时完成任务，2表示托管时自动进行的点vip操作会额外点掉钓鱼和排行榜
tuoguantime="6:1";//自动执行托管任务的24小时制时间（注意，时间设置的分钟数如果小于10，前面不用加0，比如3:08不对，应该3:8;托管功能只有授权用户可用，其他用户设置了也没用）
ql_killset = 1;// 托管模式青龙杀人选项 0为杀好人  1为杀恶人
vipzx=1;//默认定时早上5.55点正邪20次，0为关闭，1为点正，2为点邪
tupojiasu=1;//续突破是否使用加速卡，1表示续的时候顺带加速，0默认关闭加速。本功能暂在开发中,推荐在一江湖与一绝学双突时候开启
yc_flag=0;//远程控制开关，仅授权用户有效（0默认关闭，1默认开启）
buything=1;//是否每天定时自动使用开发者帮派购物功能（消耗帮派活跃度），0表示关闭定时自动，关闭后可在开发者选项手动使用
buythinglist='引路蜂;突破丹;保险卡;高级突破丹;空识卷轴;狗年礼券';//帮派购物清单(用分号隔开)
tg_pt=1;//托管模式是否每天自动完成拼图任务(0关闭,1只生效pintuhao里面的授权号，2生效所有挂此脚本的授权用户)
tg_ptdingshi='0;0:30;无☆风不起浪-多☆情应笑我';//定时独立托管拼图（开关,时间,角色）
tg_ql=1;//托管模式是否每天自动开青龙
tg_yx=1;//托管模式是否每天自动开游侠
tgeat_jhl=0;//托管模式是否每天自动吃江湖令
tgeat_bpl=1;//托管模式是否每天自动吃帮派令
tggj_tiexue=0;//托管铁血阿不烽火处挂机
pintuhao="无☆风不起浪-多☆情应笑我-独☆钓寒江雪-施工员-飘过云朵";//托管拼图生效的号（英文-号隔开）
tg_rc=1;//托管模式是否每天自动购买日常任务（花费70元宝获得400w左右潜能）
pifu=0;//初始默认皮肤(0-4)
autozx="23:10;5:50;剑行;1";//自动刷正邪定时开启时间;定时关闭时间;刷正邪的号名字;0杀恶人，1杀好人
qxList_inputs = "步惊鸿；浪唤雨；逆风舞；庞统；火云邪神；郭济；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；穆妙羽；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬";
//默认撩奇侠顺序
aiqx_order="郭济-火云邪神-风无痕-宇文无敌-厉沧若-穆妙羽-妙无心-八部龙将-巫夜姬-玄月研-夏岳卿-狼居胥-烈九州-李玄霸";//默认智能奇侠亲密顺序
ai_tupolist="九天龙吟剑法:21;如来神掌:20;排云掌法:20;道种心魔经:21;千影百伤棍:20;燎原百破:20;破军棍诀:20;";//智能换突破及默认次数设置
tf_killlist="段老大-二娘-岳老三-云老四,段老大";//逃犯需求：本服,跨服 （只设置恶人名字，杀人选项靠开逃犯开关控制）
ai_autotupo=0;//智能换突破开关
aiqx_mode=1;//默认智能奇侠模式：0表示出4次秘境，1表示出5次秘境
tg_qx=0;//默认托管模式是否智能奇侠
autoqixia="0,火云邪神,0,1";//默认：全自动奇侠开关,亲密奇侠名字,奇侠模式（0表示手动对话或者比试打奇侠小号1表示赠送1个金锭2表示全部送15金锭）,秘境触发次数(0表示4次1表示5次)
autopifu=1;//自动随时间换皮肤
banxiaohao="流浪-道花2-道花3-天下第1";//禁止自动打坐睡觉签到的号（可用于挂飞机本自动组队，避免自己跑出副本，也可用于打奇侠大号开奇侠自动切磋）
Enemylist = "[1]阿不;[1]魏娇;[1]绕指·云;[1]末日召唤;[1]抓狂;[1]绘羽;[1]~陌上花开~;[1]南英;[1]李寻花;[1]奈何离歌;[1]纵横老野猪;";//默认敌人设置
Friendlist = "[21]路人甲◆孤傲;[21]男主角◆番茄;[21]出品人◆风云;[21]临记◆卫芷泫;[21]制片人◆戏雨;[21]凌少;[21]空城◆旧梦;[21]春不老◆青木;[1]阿不;[1]纵横老野猪;[1]无头苍蝇;[1]欢乐剑客;[1]~陌上花开~;[1]李寻花;[1]凉城惜暖玉;[1]地府-摩诃王;[2]板砖;[2]陳小神;[7]小飞;[7]冷泉心影;[12]一炮泯恩仇;[1]寒夜·斩;[4]【人间】不舍;[1]魏娇;[4]十方禅师;[1]烽火戲诸侯;[4]【人间】雨修;";
//默认大佬，盟友设置
//注意：托管模式只对授权用户生效，会在指定时间完成托管任务过后，自动开启青龙游侠功能

//警告：以下区域不可改动！！！

var encode_version = 'sojson.v5', bdivt = '__0x412fc',  __0x412fc=['w4JGw602w4g=','wqvCnMOrKxxswp0=','LsKmwr7DuQY=','WyNGYzo=','TBMYw4LCrA==','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','U8OHExBE','dVQYwoQ1LsKFwp5qwp8Zw7nCucOCwq4uFlElwrrCoS9BeTkYd8KWQTfDni/CtsKEwrhpw4dgGEjDi0sXw51ZMCjCqcOKdwXDr8O/w6QJw49VwqvCh8OZMcK3w6XDv23CrcOUw6rDpMKNw6ZHw7FSMcKBwpnCrsOiNcOMw5LCjFcTw6lNGcOaw6PDghzCp8OOZQDDvMK3NiklIDMAZ8Kmw65jwpHCjcOwCkIfwpHCt8KN','wrhNZXYxw41xcDTCrhbDvxZhHMKxwr3CtsOrS1rDgAR3wrATD1bDscKIbMKMXEkxd2BadxLDujxAfjXDjXM+V8OgOMKxLsKcXkl2w7ZYJMOpwpMUeMKUw7HDn005wonDsMKIw4w1wq0kw63DrHQJw5nCvhMUwrEvD1Yfwp8cw7/DmSbCt8OgKGjDjcKJw6TCvsOhw5IwLE8zwqYhS8OHGjTCvMO1CsKUFsKgw4hIcsK1wo7CoUbChgZrZDPDiQwhQsKawokkLg3Cph07MwnDgA5Rwp7CgTHDrj4Kw4vDtMOORxFWPhViNV9DUsKkw5zCkTrDosO9w4PDoHsxORxvdcKsET7CncKRw5xvWMKGfEjDuMKgGFFDTykmw6TCnBZYwpvDlBN1MVs1wrXDoyJdBcOAXQjDr1ggZWjDiH4XQMK+wrJ8LMO/G8OGwqchQk8EW8Kww4kZEwHDhgxaEjVlEMOsdsO1w4VkUMKbwoLCvMOHRnkkw5R7w5nDgcKaMEjCi8KMdmByLcOJw47DszjCiXjCpcKzFsOYXEN+wrJ8wrB3wr0Cw5s+w7AVag3DgyYQTRvDnxEQSsOpFMKQwqnCth/CuG9oYMKqw7zDiMKY','w6nCj8KOw4AGw5ZWH8O+Tyg6dAnDrMKeScO0W8OWwq4dSsKIw4zDpTLDoMKnwqRJL1FeDcO7MMKrXcKXGsKFw4DDnsKYbMO4w51lMHnDlMKUL8ONwozCs0DCvGpMTQ4Jwq3DjMOEw67CocOHw5cqwqvCusKzwoMjGMK8d24rw63Drxo=','CynCmTvCqsO7Bl96','5Lit6ICv5Yuz6ZmPw6dFwpjDpMOOw4rDicKNIQ==','wrLDvMKGSMKxemJhw7vDqF0=','w5vDt8Kd','KsOZw4VwTw==','w6rCtQk=','GT7CmCPCnA==','woTClsKOEnw=','w57DnmDDvDI=','w4h4DRED','KjERFiFcwop8fsObw4YJ','csKUC8KlwrLCusO+wo0=','wrJHw7HCqcKF','5Lqn6IKx5Yuu6ZqSa8Okw6Y6wq4LbRsj','w7XCvnfDjsOSwrhJ','w5prGDcx','Fw4aw4Uw'];(function(_0xe34be0,_0xe3d4e5){var _0x56c464=function(_0x218163){while(--_0x218163){_0xe34be0['push'](_0xe34be0['shift']());}};_0x56c464(++_0xe3d4e5);}(__0x412fc,0x16b));var _0x4950=function(_0x489e2d,_0x386b94){_0x489e2d=_0x489e2d-0x0;var _0x1faefb=__0x412fc[_0x489e2d];if(_0x4950['initialized']===undefined){(function(){var _0x43093a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x42b3f7='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x43093a['atob']||(_0x43093a['atob']=function(_0x1c13dd){var _0x4484da=String(_0x1c13dd)['replace'](/=+$/,'');for(var _0xa0fa75=0x0,_0x203651,_0x49f77f,_0x536d72=0x0,_0x43bb53='';_0x49f77f=_0x4484da['charAt'](_0x536d72++);~_0x49f77f&&(_0x203651=_0xa0fa75%0x4?_0x203651*0x40+_0x49f77f:_0x49f77f,_0xa0fa75++%0x4)?_0x43bb53+=String['fromCharCode'](0xff&_0x203651>>(-0x2*_0xa0fa75&0x6)):0x0){_0x49f77f=_0x42b3f7['indexOf'](_0x49f77f);}return _0x43bb53;});}());var _0x4c4ada=function(_0x574213,_0x4723af){var _0x198840=[],_0x34c2e6=0x0,_0x466b29,_0x12bcde='',_0x4e9be6='';_0x574213=atob(_0x574213);for(var _0x42d789=0x0,_0x42b743=_0x574213['length'];_0x42d789<_0x42b743;_0x42d789++){_0x4e9be6+='%'+('00'+_0x574213['charCodeAt'](_0x42d789)['toString'](0x10))['slice'](-0x2);}_0x574213=decodeURIComponent(_0x4e9be6);for(var _0x347d32=0x0;_0x347d32<0x100;_0x347d32++){_0x198840[_0x347d32]=_0x347d32;}for(_0x347d32=0x0;_0x347d32<0x100;_0x347d32++){_0x34c2e6=(_0x34c2e6+_0x198840[_0x347d32]+_0x4723af['charCodeAt'](_0x347d32%_0x4723af['length']))%0x100;_0x466b29=_0x198840[_0x347d32];_0x198840[_0x347d32]=_0x198840[_0x34c2e6];_0x198840[_0x34c2e6]=_0x466b29;}_0x347d32=0x0;_0x34c2e6=0x0;for(var _0x3320d8=0x0;_0x3320d8<_0x574213['length'];_0x3320d8++){_0x347d32=(_0x347d32+0x1)%0x100;_0x34c2e6=(_0x34c2e6+_0x198840[_0x347d32])%0x100;_0x466b29=_0x198840[_0x347d32];_0x198840[_0x347d32]=_0x198840[_0x34c2e6];_0x198840[_0x34c2e6]=_0x466b29;_0x12bcde+=String['fromCharCode'](_0x574213['charCodeAt'](_0x3320d8)^_0x198840[(_0x198840[_0x347d32]+_0x198840[_0x34c2e6])%0x100]);}return _0x12bcde;};_0x4950['rc4']=_0x4c4ada;_0x4950['data']={};_0x4950['initialized']=!![];}var _0x5753f6=_0x4950['data'][_0x489e2d];if(_0x5753f6===undefined){if(_0x4950['once']===undefined){_0x4950['once']=!![];}_0x1faefb=_0x4950['rc4'](_0x1faefb,_0x386b94);_0x4950['data'][_0x489e2d]=_0x1faefb;}else{_0x1faefb=_0x5753f6;}return _0x1faefb;};eval(function(_0x16e0ac,_0x5a7dbc,_0x5c41b6,_0x15086c,_0x5e2cb3,_0x361cfa){var _0x3439bc={'PkISF':_0x4950('0x0','lsrC'),'GcDdA':function _0x3c9f5c(_0x383ab0,_0x51bc10){return _0x383ab0(_0x51bc10);},'rbWLd':function _0x456e89(_0x407e88,_0x2aaea2){return _0x407e88+_0x2aaea2;},'Sohhv':_0x4950('0x1','lsrC')};var _0x3790ce=_0x3439bc['PkISF'][_0x4950('0x2','sI5q')]('|'),_0x368fda=0x0;while(!![]){switch(_0x3790ce[_0x368fda++]){case'0':_0x5e2cb3=function(_0x398c24){var _0x32994d={'axkkY':function _0x105539(_0x5c982d,_0x26d641){return _0x5c982d===_0x26d641;},'opHoO':_0x4950('0x3','f%xQ'),'hIzPf':function _0x307788(_0x24549b,_0x131869){return _0x24549b+_0x131869;},'Doyzb':function _0x30fe56(_0x39aff7,_0xfced77){return _0x39aff7<_0xfced77;},'sFhPZ':function _0x391cd3(_0x55b636,_0x28c1f8){return _0x55b636(_0x28c1f8);},'UpQBs':function _0xca4e28(_0x33fcaf,_0xa2407e){return _0x33fcaf%_0xa2407e;}};if(_0x32994d[_0x4950('0x4','!gou')](_0x32994d[_0x4950('0x5','Un^O')],_0x32994d[_0x4950('0x5','Un^O')])){return _0x32994d['hIzPf'](_0x32994d['Doyzb'](_0x398c24,_0x5a7dbc)?'':_0x32994d['sFhPZ'](_0x5e2cb3,_0x32994d[_0x4950('0x6','fer6')](parseInt,_0x398c24/_0x5a7dbc)),(_0x398c24=_0x32994d[_0x4950('0x7','2A4e')](_0x398c24,_0x5a7dbc))>0x23?String[_0x4950('0x8','Znle')](_0x32994d['hIzPf'](_0x398c24,0x1d)):_0x398c24[_0x4950('0x9','$WAB')](0x24));}else{window[_0x4950('0xa','FlrQ')](_0x4950('0xb','p$xo'));}};continue;case'1':if(!''[_0x4950('0xc','agxr')](/^/,String)){while(_0x5c41b6--)_0x361cfa[_0x3439bc[_0x4950('0xd','2A4e')](_0x5e2cb3,_0x5c41b6)]=_0x15086c[_0x5c41b6]||_0x3439bc[_0x4950('0xe','Z1*q')](_0x5e2cb3,_0x5c41b6);_0x15086c=[function(_0xdb0916){return _0x361cfa[_0xdb0916];}];_0x5e2cb3=function(){return _0x4b8312[_0x4950('0xf','V9KK')];};_0x5c41b6=0x1;}continue;case'2':;continue;case'3':return _0x16e0ac;case'4':while(_0x5c41b6--)if(_0x15086c[_0x5c41b6])_0x16e0ac=_0x16e0ac[_0x4950('0x10','rfrC')](new RegExp(_0x3439bc[_0x4950('0x11','K@nq')]('\x5cb'+_0x3439bc[_0x4950('0x12','eT(m')](_0x5e2cb3,_0x5c41b6),'\x5cb'),'g'),_0x15086c[_0x5c41b6]);continue;case'5':var _0x4b8312={'isxNf':_0x3439bc[_0x4950('0x13',']L$I')]};continue;}break;}}(_0x4950('0x14','K@nq'),0x3e,0xa3,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||return|function|for||replace|String|fromCharCode||new|RegExp|toString|36|if|parseInt|35|eval|62|split|qlreq|126|while|90|56|tuoguanm|u533a|charCodeAt|var|tuoguantime|length|uncompile|tuoguanh|unescape|quid|quid1|myName|undefined|qlrob'[_0x4950('0x15','&c#q')]('|'),0x0,{}));eval(uncompile(_0x4950('0x16','Z1*q')));eval(uncompile(_0x4950('0x17','2A4e')));eval(uncompile(_0x4950('0x18','CLg9')));;if(!(typeof encode_version!=='undefined'&&encode_version===_0x4950('0x19','!gou'))){window['alert'](_0x4950('0x1a','#i@L'));};encode_version = 'sojson.v5';
