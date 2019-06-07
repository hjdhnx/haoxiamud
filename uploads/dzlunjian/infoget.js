//战斗信息获取-------------------------------------
var combat=g_obj_map.get("msg_vs_info");//战斗获取
opnpc_id=combat.get("vs1_pos1");//第一位的npc或者玩家id
npc_id=combat.get("vs2_pos1");//正在攻击的对面npc id

opnpc_name=combat.get("vs1_name1");//名字
npc_name=combat.get("vs2_name1");

opnpc_force=combat.get("vs1_max_force1");//最大内力
npc_force=combat.get("vs2_force1");

opnpc_force=combat.get("vs1_force1");//当前内力
npc_force=combat.get("vs2_force1");

opnpc_lvl=combat.get("vs1_lvl1");//当前等级
npc_force=combat.get("vs2_lvl1");


opnpc_lvl=combat.get("vs1_max_kee1");//最大生命
npc_force=combat.get("vs2_kee1");


opnpc_lvl=combat.get("vs1_xdz1");//当前行动
npc_force=combat.get("vs2_xdz1");

opnpc_maxxd=combat.get("vs1_max_xdz1");//最大行动
npc_maxxd=combat.get("vs2_max_xdz1");


opnpc_lvl=combat.get("vs1_kee1");//当前加力

//npc操作信息获取---------------------------------------
var npcinfo=g_obj_map.get("msg_npc");//npc功能获取

npc_name=npcinfo.get("name");//npc名称
npc_lb1=npcinfo.get("cmd7");//1元礼包
npc_lb2=npcinfo.get("cmd6");//礼包
npc_lb3=npcinfo.get("cmd5");//十月礼包
npc_lb4=npcinfo.get("cmd4");//礼包
npc_lb5=npcinfo.get("cmd6");//礼包

npc_lb3_1=npcinfo.get("cmd5_close");//十月是否可用

//房间信息获取---------------------------------------
var roominfo=g_obj_map.get("msg_room");//房间功能获取

room_name=roominfo.get("short").match(/[\u4e00-\u9fa5]/g).join("");//房间名称

//自己角色信息获取---------------------------------------
var myuserinfo=g_obj_map.get("msg_attrs");//自己信息获取

user_name=myuserinfo.get("name").match(/[\u4e00-\u9fa5]/g).join("");//自己名字名称(不能带数字)

//颜色信息获取(每种颜色都有副色为2 例如BLK2)---------------------------------------
BLK
BLU
CYN
GRA
GRN
HIB
HIC
HIG
HIM
HIR
HIW
HIY
MAG
NOR
RED
WHT
YEL

//main信息获取---------------------------------------
var maininfo=g_obj_map.get("main");//main信息获取

//g_obj_map.get("main").innerHeight //改不了

room_name=maininfo.room_name;//当前房间名称
game_h=maininfo.innerHeight;//游戏高度
game_w=maininfo.innerWidth;//游戏宽度
user_qu=maininfo.g_area_id

//状态信息获取--------------------------------------
var scoreinfo=g_obj_map.get("msg_score");//状态信息获取

user_name=scoreinfo.get("name")
user_recovery=scoreinfo.get("recovery")//治疗一次加血
user_gongji=scoreinfo.get("attack")//攻击力
user_pojia=scoreinfo.get("dere")//破甲
user_hujia=scoreinfo.get("ext_armor")//护甲
user_jiashang1=scoreinfo.get("reduce1")//技能免伤
user_jiashang2=scoreinfo.get("reduce2")//额外免伤
user_xdxl=scoreinfo.get("xdxl")//行动效率
user_nghx=scoreinfo.get("rekee")//回血效率
user_zhengxie=scoreinfo.get("shen")//正气
user_jiali=scoreinfo.get("max_enforce")//最大加力
user_xingbie=scoreinfo.get("gender")//性别
user_age=scoreinfo.get("age")//年龄
user_money=scoreinfo.get("money")//银子

//状态信息获取2--------------------------------------
var scoreinfo2=g_obj_map.get("msg_attrs");//状态信息获取
user_born=scoreinfo2.get("born")//出身
user_nowexp=scoreinfo2.get("exp")//当前经验
user_upexp=scoreinfo2.get("upgrade_exp")//下级经验


//不跑路找npc的随身界面-----------------------------
var suishen=gSocketMsg2;
ss_xfjf=suishen.show_xf_shops();//消费积分商城



//往战斗界面的npc后面加入内力，行动效率,最大生命------------

function showfightmsg(){
$('span#ft1').remove();
if(g_obj_map.get("msg_vs_info").get("vs1_name1")){
$('td#vs11')[0].innerHTML='<span id="ft1" style="color:#00FFFF;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs1_force1")+')</span>'+$('td#vs11')[0].innerHTML
$('td#vs11')[0].innerHTML='<span id="ft1" style="color:#FF0000;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs1_max_kee1")+')</span>'+$('td#vs11')[0].innerHTML
$('td#vs11>span>i').append('<span id="ft1" style="color:#00FF00;font-size:6px">'+'('+g_obj_map.get("msg_vs_info").get("vs1_xdz1")+')'+'</span>');
}
if(g_obj_map.get("msg_vs_info").get("vs1_name2")){
vs1_name2=g_obj_map.get("msg_vs_info").get("vs1_name2").match(/[\u4e00-\u9fa5]/g).join("");
$('td#vs12')[0].innerHTML='<span id="ft1" style="color:#00FFFF;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs1_force2")+')</span>'+$('td#vs12')[0].innerHTML
$('td#vs12')[0].innerHTML='<span id="ft1" style="color:#FF0000;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs1_max_kee2")+')</span>'+$('td#vs12')[0].innerHTML
$('td#vs12>span>i').append('<span id="ft1" style="color:#00FF00;font-size:6px">'+'('+g_obj_map.get("msg_vs_info").get("vs1_xdz2")+')'+'</span>');
}
if(g_obj_map.get("msg_vs_info").get("vs1_name3")){
vs1_name3=g_obj_map.get("msg_vs_info").get("vs1_name3").match(/[\u4e00-\u9fa5]/g).join("");
$('td#vs13')[0].innerHTML='<span id="ft1" style="color:#00FFFF;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs1_force3")+')</span>'+$('td#vs13')[0].innerHTML
$('td#vs13')[0].innerHTML='<span id="ft1" style="color:#FF0000;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs1_max_kee3")+')</span>'+$('td#vs13')[0].innerHTML
$('td#vs13>span>i').append('<span id="ft1" style="color:#00FF00;font-size:6px">'+'('+g_obj_map.get("msg_vs_info").get("vs1_xdz3")+')'+'</span>');
}
if(g_obj_map.get("msg_vs_info").get("vs1_name4")){
$('td#vs14')[0].innerHTML='<span id="ft1" style="color:#00FFFF;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs1_force4")+')</span>'+$('td#vs14')[0].innerHTML
$('td#vs14')[0].innerHTML='<span id="ft1" style="color:#FF0000;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs1_max_kee4")+')</span>'+$('td#vs14')[0].innerHTML
$('td#vs14>span>i').append('<span id="ft1" style="color:#00FF00;font-size:6px">'+'('+g_obj_map.get("msg_vs_info").get("vs1_xdz4")+')'+'</span>');
}

if(g_obj_map.get("msg_vs_info").get("vs2_name1")){
$('td#vs21')[0].innerHTML='<span id="ft1" style="color:#00FFFF;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs2_force1")+')</span>'+$('td#vs21')[0].innerHTML
$('td#vs21')[0].innerHTML='<span id="ft1" style="color:#FF0000;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs2_max_kee1")+')</span>'+$('td#vs21')[0].innerHTML
$('td#vs21>span>i').append('<span id="ft1" style="color:#00FF00;font-size:6px">'+'('+g_obj_map.get("msg_vs_info").get("vs2_xdz1")+')'+'</span>');
}
if(g_obj_map.get("msg_vs_info").get("vs2_name2")){
$('td#vs22')[0].innerHTML='<span id="ft1" style="color:#00FFFF;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs2_force2")+')</span>'+$('td#vs22')[0].innerHTML
$('td#vs22')[0].innerHTML='<span id="ft1" style="color:#FF0000;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs2_max_kee2")+')</span>'+$('td#vs22')[0].innerHTML
$('td#vs22>span>i').append('<span id="ft1" style="color:#00FF00;font-size:6px">'+'('+g_obj_map.get("msg_vs_info").get("vs2_xdz2")+')'+'</span>');
}
if(g_obj_map.get("msg_vs_info").get("vs2_name3")){
$('td#vs23')[0].innerHTML='<span id="ft1" style="color:#00FFFF;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs2_force3")+')</span>'+$('td#vs23')[0].innerHTML
$('td#vs23')[0].innerHTML='<span id="ft1" style="color:#FF0000;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs2_max_kee3")+')</span>'+$('td#vs23')[0].innerHTML
$('td#vs23>span>i').append('<span id="ft1" style="color:#00FF00;font-size:6px">'+'('+g_obj_map.get("msg_vs_info").get("vs2_xdz3")+')'+'</span>');
}
if(g_obj_map.get("msg_vs_info").get("vs2_name4")){
$('td#vs24')[0].innerHTML='<span id="ft1" style="color:#00FFFF;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs2_force4")+')</span>'+$('td#vs24')[0].innerHTML
$('td#vs24')[0].innerHTML='<span id="ft1" style="color:#FF0000;font-size:6px">('+g_obj_map.get("msg_vs_info").get("vs2_max_kee4")+')</span>'+$('td#vs24')[0].innerHTML
$('td#vs24>span>i').append('<span id="ft1" style="color:#00FF00;font-size:6px">'+'('+g_obj_map.get("msg_vs_info").get("vs2_xdz4")+')'+'</span>');
}
}

setInterval(showfightmsg,1000);

for(i=0;i<g_obj_map.get("msg_vs_info").elements.length;i++){
	console.log(g_obj_map.get("msg_vs_info").elements[i]);
}
for(i=0;i<g_obj_map.get("msg_room").elements.length;i++){
	console.log(g_obj_map.get("msg_room").elements[i]);
}
for(i=0;i<g_obj_map.get("msg_npc").elements.length;i++){
	console.log(g_obj_map.get("msg_npc").elements[i]);
}
for(i=0;i<g_obj_map.get("msg_attrs").elements.length;i++){
	console.log(g_obj_map.get("msg_attrs").elements[i]);
}
for(i=0;i<g_obj_map.get("main").elements.length;i++){
	console.log(g_obj_map.get("main").elements[i]);
}
vs1_name1=g_obj_map.get("msg_vs_info").get("vs1_name1").match(/[\u4e00-\u9fa5]/g).join("");