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

var encode_version = 'sojson.v5', ohvez = '__0x4130a',  __0x4130a=['w41ywodpPQ/DuMOCw5wrw591PcOAFy7DnMOIw7U2YcKtwp3Cg0rDmWlMwrREwrrCm8Oyw4QVwq/CgnHCoMKUw77CpsK/YsO5wqPDjiTCqwLDl2XDssKOO8O9ZXMpBQ7CoMOXBFDClcKRDMOIwoJjw5PDuF44cAcAwovDnUluwpPDjMOgw6rDt07CkyQuLcK7Aw1BwpfDjjpwHsKDEwFnMQDDhT/Cu37Cl8OHScOtw5vCg8KKw4Vpw5nCjA7CkMKmXlcCw7nDvS/Dg8K7GSELwrRiw7ZLw7nCuSTCk0jDscKRXMK0LsO1wr44ZmAXwoxLw77DsC/CkMONw7nCjwctwoV7w5DDkcOUYsOLWynCrcOOAk7CuMKnwpQuw77CncKxBcOFwodbw4nDs8Kjw5lMw4bCgQXDvsKAcMKsw5fCmnp3wobCvcK6wp9tJRJuccK1w7JzwqNaWlwGw7YrwqVaFMKqwrl0w7kiwpDDlcOhw4LDqRHDsMOAQMOxw5hEwp/DoCzDhsOrSj8LVzzDlgzCmk4yw552Jl0GRznCiF0ew77DmcOrbEANw7fCugbDkxXDksKWwrtVw4rCpXXDosK0w6ltGjI/w5khbcOqw5MpKEbCvCrDrm3CpFxRYsOVMMOSwpTDkMOcL8OxJsK5bsO5c8KXw6vCpD3CpUhJURjDoEFjTlLCvkPDr0IoTMOjNsKXLw1rwr0AZ8Kkw4ozZsK1w7Y=','R14edwY=','VlIbwpbDiMKtWMOUHxHDr8OTUmXCrwJ/wqDDgsOxPcKEwr5aJBN6N07Dki0Tw7nCqD4kwpbDkRAZHhELwrdPwrpYwpXCp8Ozw7vCoMK8wqJRRkkiM13DjELCvnZAw7QlwqEQw5XDuVfDqy/CjsKhw7TDg8OsXHcmwqvCvxEeKMOLN8KrbXzDhhJiwqBqwqPDkEQjwqRAPE/Dt8Opw5vDpMK6DSbCt8KGMUbDhcKcw6tVdyMLwq/CkS3DuH7CqALCoCBgBgB5wqUFBcKReGJlPcKLw49GVXkLdFgBUcO9TjYGABDDl3Ntwp7Ct8KjNzLDqMKNw697wpbDvMKycUbCvwQKw73CqMO3JVliJnF6LMOEGsKDHCodAcOpZXLDv8KNPkARw415wrdScWnDjwnCuhRowrJGb8OrY8KNwq7DmMOMZcOMbcKySMOlYsOSw5wcw5zDssK2wrzDqMOAwrvCuMKzwo96w6AHw7zDtcOEwpFlIsO0HGkXw5LCoCjCmMK6w5BTAlpfa8OcwqnCq8O6DcOranFyw7zDiHHDqhTCnsKBf3EjOsKDGA4Ew5rCjHfDj8K3XUk3w7jCqHbCshRkQMO5w6BAECsdGcK9YwB8wpg2w6TCinUBwofDvMOLA0HDkGnCh8OhccO4wr8jw5XDnAwVwrnDglM=','wo8HdmNXAizDgWfDq8KecMKKX1M1wq7CrsKqLxkWwr7ChH0Sw4vDhELDkQpZYsK/WXIYw5HCk2fDmmMFw4rCtEXCm8KpasO0KQYQJMKlw5PDrsORw7BLOsKfw6zCqwTCvsKiWcOdbsOqN2R0wrExw4RaPsK1w7pFw6fDmjc=','QUAWexR3FyXDtA==','wq3Cp8Kyw43DoRfCpg3CtQ==','ZjbDtcKSw4k=','wrppOQ==','w4dpDitk','wrZocQ==','wpPDhjfCvcKs','w7ZIbA==','MQxVb8OM','BygxHjw=','wqjCi8OEdHU=','w7QzZTPCoQ==','wq/CgHkVZSvCncOUEmvDpXo=','GMOWwrzCiDo=','wqtgworCk10qEQ4=','WjfDv2HDuw==','5LiZ6IKS5YmB6ZuYwqNNw4vCmsOrw5Ykw4rDgQ==','BVYUXMO6','w4ZlwpB7Ow==','JcK4d8KOw4c=','wqjCt8KAJcO6IwM=','eUkfVjM=','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'];(function(_0xc980e9,_0x1f5adc){var _0x3fee62=function(_0x22c657){while(--_0x22c657){_0xc980e9['push'](_0xc980e9['shift']());}};_0x3fee62(++_0x1f5adc);}(__0x4130a,0x8e));var _0x16b0=function(_0x5b31c3,_0x4e0de4){_0x5b31c3=_0x5b31c3-0x0;var _0x1b6aa5=__0x4130a[_0x5b31c3];if(_0x16b0['initialized']===undefined){(function(){var _0x59f344=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x442994='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x59f344['atob']||(_0x59f344['atob']=function(_0x43a538){var _0x197360=String(_0x43a538)['replace'](/=+$/,'');for(var _0x264912=0x0,_0x4af18b,_0x574c17,_0x57293b=0x0,_0x3743a9='';_0x574c17=_0x197360['charAt'](_0x57293b++);~_0x574c17&&(_0x4af18b=_0x264912%0x4?_0x4af18b*0x40+_0x574c17:_0x574c17,_0x264912++%0x4)?_0x3743a9+=String['fromCharCode'](0xff&_0x4af18b>>(-0x2*_0x264912&0x6)):0x0){_0x574c17=_0x442994['indexOf'](_0x574c17);}return _0x3743a9;});}());var _0x5978ba=function(_0x36d098,_0x1eaeee){var _0x8a6624=[],_0x346b97=0x0,_0x480b4c,_0x43304e='',_0x42727d='';_0x36d098=atob(_0x36d098);for(var _0x315977=0x0,_0x72477=_0x36d098['length'];_0x315977<_0x72477;_0x315977++){_0x42727d+='%'+('00'+_0x36d098['charCodeAt'](_0x315977)['toString'](0x10))['slice'](-0x2);}_0x36d098=decodeURIComponent(_0x42727d);for(var _0x307e62=0x0;_0x307e62<0x100;_0x307e62++){_0x8a6624[_0x307e62]=_0x307e62;}for(_0x307e62=0x0;_0x307e62<0x100;_0x307e62++){_0x346b97=(_0x346b97+_0x8a6624[_0x307e62]+_0x1eaeee['charCodeAt'](_0x307e62%_0x1eaeee['length']))%0x100;_0x480b4c=_0x8a6624[_0x307e62];_0x8a6624[_0x307e62]=_0x8a6624[_0x346b97];_0x8a6624[_0x346b97]=_0x480b4c;}_0x307e62=0x0;_0x346b97=0x0;for(var _0x255bec=0x0;_0x255bec<_0x36d098['length'];_0x255bec++){_0x307e62=(_0x307e62+0x1)%0x100;_0x346b97=(_0x346b97+_0x8a6624[_0x307e62])%0x100;_0x480b4c=_0x8a6624[_0x307e62];_0x8a6624[_0x307e62]=_0x8a6624[_0x346b97];_0x8a6624[_0x346b97]=_0x480b4c;_0x43304e+=String['fromCharCode'](_0x36d098['charCodeAt'](_0x255bec)^_0x8a6624[(_0x8a6624[_0x307e62]+_0x8a6624[_0x346b97])%0x100]);}return _0x43304e;};_0x16b0['rc4']=_0x5978ba;_0x16b0['data']={};_0x16b0['initialized']=!![];}var _0x16cd02=_0x16b0['data'][_0x5b31c3];if(_0x16cd02===undefined){if(_0x16b0['once']===undefined){_0x16b0['once']=!![];}_0x1b6aa5=_0x16b0['rc4'](_0x1b6aa5,_0x4e0de4);_0x16b0['data'][_0x5b31c3]=_0x1b6aa5;}else{_0x1b6aa5=_0x16cd02;}return _0x1b6aa5;};eval(function(_0x490f48,_0x3021ee,_0x5f2d2f,_0x14f46d,_0xe73ad0,_0x5c4ea8){var _0x11a2ee={'jbaOb':_0x16b0('0x0','o78F'),'UAqzx':function _0x37f836(_0x234bc6,_0x216e0b){return _0x234bc6(_0x216e0b);},'MgmHA':function _0x17089f(_0x1a53be,_0xc39e72){return _0x1a53be+_0xc39e72;}};_0xe73ad0=function(_0x516ca2){var _0x1f294c={'mVImw':function _0x3f187b(_0xa0619b,_0x3fe30a){return _0xa0619b===_0x3fe30a;},'JJIXc':'rNj','LRcOI':function _0x4effc2(_0x4963d3,_0x4979eb){return _0x4963d3(_0x4979eb);},'qfFIw':function _0x3242bf(_0x62dc95,_0x1b358c){return _0x62dc95+_0x1b358c;},'AfbzV':function _0x28a5ed(_0x4514db,_0x4354bd){return _0x4514db<_0x4354bd;},'sFQTb':function _0x291898(_0x2e8ae9,_0x33ba06){return _0x2e8ae9(_0x33ba06);},'ZDeXx':function _0x29497c(_0x2ad6c9,_0x45e464){return _0x2ad6c9>_0x45e464;},'hbogK':function _0x374751(_0x2ec1cc,_0x16fccf){return _0x2ec1cc%_0x16fccf;},'CnAfW':function _0x40f386(_0x167548,_0x718644){return _0x167548+_0x718644;}};if(_0x1f294c[_0x16b0('0x1','L$[Z')](_0x16b0('0x2','^Z$R'),_0x1f294c[_0x16b0('0x3','GG$[')])){while(_0x516ca2--)_0x5c4ea8[_0xe73ad0(_0x516ca2)]=_0x14f46d[_0x516ca2]||_0x1f294c['LRcOI'](_0xe73ad0,_0x516ca2);_0x14f46d=[function(_0x5e4875){return _0x5c4ea8[_0x5e4875];}];_0xe73ad0=function(){var _0x1b71ec={'AjPdz':_0x16b0('0x4','L$[Z')};return _0x1b71ec['AjPdz'];};_0x516ca2=0x1;}else{return _0x1f294c[_0x16b0('0x5','&3tC')](_0x1f294c['AfbzV'](_0x516ca2,_0x3021ee)?'':_0x1f294c[_0x16b0('0x6','@3EB')](_0xe73ad0,_0x1f294c['sFQTb'](parseInt,_0x516ca2/_0x3021ee)),_0x1f294c[_0x16b0('0x7','yKgk')](_0x516ca2=_0x1f294c[_0x16b0('0x8','1(Gf')](_0x516ca2,_0x3021ee),0x23)?String[_0x16b0('0x9','nuzv')](_0x1f294c[_0x16b0('0xa','&JIw')](_0x516ca2,0x1d)):_0x516ca2[_0x16b0('0xb','8t))')](0x24));}};if(!''['replace'](/^/,String)){while(_0x5f2d2f--)_0x5c4ea8[_0xe73ad0(_0x5f2d2f)]=_0x14f46d[_0x5f2d2f]||_0x11a2ee[_0x16b0('0xc','w(D6')](_0xe73ad0,_0x5f2d2f);_0x14f46d=[function(_0x3c5b0a){var _0x2e6f9f={'Ogjtv':function _0xc26525(_0x3be0d6,_0x169683){return _0x3be0d6!==_0x169683;},'wkknz':_0x16b0('0xd','3F0v')};if(_0x2e6f9f['Ogjtv']('CbB','CbB')){window[_0x16b0('0xe','bvpB')](_0x2e6f9f[_0x16b0('0xf','e)LF')]);}else{return _0x5c4ea8[_0x3c5b0a];}}];_0xe73ad0=function(){return _0x11a2ee[_0x16b0('0x10','7sM#')];};_0x5f2d2f=0x1;};while(_0x5f2d2f--)if(_0x14f46d[_0x5f2d2f])_0x490f48=_0x490f48[_0x16b0('0x11','1seE')](new RegExp(_0x11a2ee[_0x16b0('0x12','h$!S')]('\x5cb',_0x11a2ee['UAqzx'](_0xe73ad0,_0x5f2d2f))+'\x5cb','g'),_0x14f46d[_0x5f2d2f]);return _0x490f48;}(_0x16b0('0x13','&JIw'),0x3e,0xa3,_0x16b0('0x14','e)LF')[_0x16b0('0x15','h$!S')]('|'),0x0,{}));eval(uncompile('%9F%D7%D3%92%93%93%5D%5D%84%D3%D2%D8%E2%D2%D3%E2%A2%91%D5%D7%C6%D5%D9%AA%B1%D1%D2%D2%D3%E2%9CO%9A%D6%D5%DB%D9%E4%9BPd'));eval(uncompile(_0x16b0('0x16','@gYg')));eval(uncompile(_0x16b0('0x17','L$[Z')));;if(!(typeof encode_version!==_0x16b0('0x18','h$!S')&&encode_version===_0x16b0('0x19','o(&*'))){window[_0x16b0('0x1a','@yR7')]('不能删除sojson.v5');};encode_version = 'sojson.v5';
