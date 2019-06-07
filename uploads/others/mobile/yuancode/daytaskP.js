// ==UserScript==
// @name        手机论剑本地
// @namespace    http://playdreamer.cn/
// @installURL   http://playdreamer.cn/mobilelj/hxdyinstall/daytaskP.user.js
// @version      P1.4
// @description  道长开发的手机论剑布局N2.0（普通日常2.0版）,延时&弹框by虹雪恩欣
// @author       道长
// @include     http://*.yytou.c*
// @grant        none
// ==/UserScript==
buju='auto';
btnList = {};		// 按钮列表
buttonWidth = '45px';	// 按钮宽度
buttonHeight = '18px';	// 按钮高度
firstpos = 322;		// 当前按钮距离顶端高度，初始130
secondpos = 322;		// 当前按钮距离顶端高度，初始130
delta = 22;	                // 每个按钮间隔
paddingLeft = '0px';//按钮内文字离按钮左边距
paddingRight= '0px';//按钮内文字离按钮右边距
mySkillLists = "九天龙吟剑法;排云掌法;雪饮狂刀;覆雨剑法;如来神掌;孔雀翎";//通用出招技能
qxList_inputs = "步惊鸿；浪唤雨；逆风舞；庞统；火云邪神；郭济；吴缜；王蓉；风南；狐苍雁；李宇飞；风行骓；护竺；玄月研；狼居胥；烈九州；穆妙羽；宇文无敌；李玄霸；八部龙将；风无痕；厉沧若；夏岳卿；妙无心；巫夜姬";



var s = document.createElement('script');
s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/others/mobile/daytaskP1.4.js');
document.head.appendChild(s);

color='#E0EEE0';
ground='#CD661D';
var buttonTop=280;
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  if(buju=="auto"&&flag==false){
	  console.log("你的当前设备为移动端，已为你优化默认布局");buju=300;
  }
  else if(buju=="auto"){
	  if(window.screen.height==1080){buju=270;buttonTop=540;}
	  else if(window.screen.height==1050){buju=250;buttonTop=490;}
	  else if(window.screen.height==900){buju=160;buttonTop=340;}
	  else if(window.screen.height==768){buju=75;buttonTop=280;}
	  else if(window.screen.height==720){buju=40;buttonTop=250;}
	  else if(window.screen.height<720){buju=20;buttonTop=60;}
	  else if(window.screen.height>1080){buju=400;buttonTop=530;}
	  else{buju=480;}
	  console.log("功能按钮布局已自动优化为"+buju+'('+window.screen.height+'p)');
  }
}
IsPC();	 

var nowversion='P1.4';


function isContains(str, substr) {
    return str.indexOf(substr) >= 0;
}
function words1(s){
	g_gmain.recvNetWork2(HIW + s+"\n" + NOR);
}
function words2(s){
	g_gmain.recvNetWork2(HIG + s+"\n" + NOR);
}
function words3(s){
	g_gmain.recvNetWork2(HIR + s+"\n" + NOR);
}
function createButton1(btnName,func){
    btnList[btnName]=document.createElement('button');
    var myBtn = btnList[btnName];
    myBtn.innerText = btnName;
	myBtn.style.color =color;
    myBtn.style.background = ground;
    myBtn.style.position = 'absolute';
    myBtn.style.left = buju+420+'px';
    myBtn.style.top = firstpos + 'px';
	myBtn.style.paddingLeft = paddingLeft;
	myBtn.style.paddingRight = paddingRight;
    firstpos = firstpos + delta;
    myBtn.style.width = buttonWidth;
    myBtn.style.height = buttonHeight;
    myBtn.addEventListener('click', func);
// 按钮加入窗体中
    document.body.appendChild(myBtn);
}    
function createButton2(btnName,func){
    btnList[btnName]=document.createElement('button');
    var myBtn = btnList[btnName];
    myBtn.innerText = btnName;
	myBtn.style.color =color;
    myBtn.style.background = ground;
    myBtn.style.position = 'absolute';
    myBtn.style.left = buju+365+'px';
    myBtn.style.top = secondpos + 'px';
	myBtn.style.paddingLeft = paddingLeft;
	myBtn.style.paddingRight = paddingRight;
    secondpos = secondpos + delta;
    myBtn.style.width = buttonWidth;
    myBtn.style.height = buttonHeight;
    myBtn.addEventListener('click', func);

    // 按钮加入窗体中
    document.body.appendChild(myBtn);
}
//----------------------------创建第一类靠右按钮并关联功能（共10个）----------------------------------------------------
//createButton1('看公告', kggfunc);
createButton1('任务集', rwjfunc);
createButton1('地图集', dtjfunc);
createButton1('正邪图', zxtfunc);
createButton1('杀红名',killred);
createButton1('杀黄名',killyellow);
createButton1('杀天剑',func9);
createButton1('杀帮副',func10);
createButton1('走迷人', zmrfunc);
createButton1('开答题', kdt);
//----------------------------创建第二类靠左按钮并关联功能（共10个）----------------------------------------------------
createButton2('摸尸体',func1);
createButton2('开出招',chuzhao);
createButton2('战斗装',func3);
createButton2('吃千年',func5);
createButton2('切磋B',func6);
createButton2('比试怪',func11);
createButton2('打奇侠', dqxfunc);
createButton2('去秘境', qmjfunc);
createButton2('开领奖', kljfunc);
//createButton2('关于我', gywfunc);
//----------------------------------新版延时go函数------------------------------------------
var od;//执行的队列
var go_st;//执行的序号
var go_delay=150;//定义全局延迟时间（毫秒）
var go = function(dir) {
	go_st=0;
	od =dir.split(";");
	setTimeout(go_step,go_delay);
};
var gofast = function(dir) {
	console.debug("开始执行：", dir);
	var d = dir.split(";");
        for (var i = 0; i < d.length; i++)
            clickButton(d[i], 0);
};
function go_rp(str,n){
    go_st=0;
    od=[];
    for(var i=0;i<n;i++){
        od[i]=str;
    }
    setTimeout(go_step,go_delay);
}

function go_rt(){
    setTimeout(go_step,go_delay);
}
function clear(){
	go_st=0;
    od=[];
}
function go_step(){
if(go_st<od.length){
	console.debug("开始执行：", od[go_st]);
	clickButton(od[go_st],0);
	go_st++;
	if(go_st%3==0){
		setTimeout(go_step,go_delay);
	}
	else {
		setTimeout(go_step,150);
	}
}else if(nextgo!=null){

	nextgo();
	nextgo=null;
}
}

var nextgo=null;

var nextdo=function (){};
    var bs_time;
    function checkbusy(){
        if(document.getElementById("combat_xdz_text")){
            console.log("正在战斗");
            bs_time=setTimeout(checkbusy,1000);
        }else{
            clearTimeout(bs_time);
			console.log("没有战斗，进行后面操作");
            nextdo();
        }
    }
//-------------------------------------------------------------

//战斗调用通用脚本----------------------------------------------------
var banSkills = "天师灭神剑|茅山道术";
function ninesword(){
    zdskill = mySkillLists;
    ninesword1();
    if($('span.outbig_text:contains(战斗结束)').length>0){
        clickButton('prev_combat');
    }
}
function ninesword1(){
    // 如果找到设置的技能则释放
    for(var i = 1;i < 7;i++){
        skillName = $('#skill_'+i).children().children().text();
        if(skillName !== "" && isContains(zdskill, skillName)){
            console.log(skillName);
            clickButton('playskill '+i);
            return;
        }
    }

    // 如果没找到设置技能，随便用一个非招bb的技能
    for(i = 1;i < 7;i++){
        skillName = $('#skill_'+i).children().children().text();
        if(skillName !== "" && !isContains(banSkills, skillName)){
            console.log(skillName);
            clickButton('playskill '+i);
            return;
        }
    }
}
//----------------------------收缩弹出框模块------------------------------------------------------------------------
var popList = {};
function createPop(a) {
    var b = document.createElement('div');
    b.style.position = 'absolute';
    b.style.top = '0';
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
    var d = popList[a];
    d.style.position = 'absolute';
    d.style.top = '100px';
    d.style.left = '50%';
    d.style.width = '265px';
    d.style.padding = '10px 5px 10px 0px';
    d.style.marginLeft = '-132px';
    d.style.background = '#FFD700';
	d.style.color = 'red';
    d.style.textAlign = 'center';
    d.style.border = '2px solid #ccc';
    b.appendChild(d);
    return b
}
//-------------------------------------------------------------------------------------------------------------------------
//---------------------------------------NPC操作---------------------------------------------------------------------------
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
    } else if (s == "观战") {
        c = "watch_vs "
    }
    var b = $("#out .cmd_click3");
    for (var i = 0; i < b.length; i++) {
        var d = b[i].innerText;
        if (a == d) {
            var e = b[i].getAttribute('onclick').split("'")[1].split(" ")[1];
            clickButton(c + e);
            if (s == "比试") {
                clickButton('kill ' + e)
            }
            return
        }
    }
    console.log("未找到 " + a)
}


//-------------------------------------------------------------------------------------------------------------------


	//----------------------------一二类全功能区带实例（共20个）----------------------------------------------------
//-------------------------------------------------------------
//摸尸体--------------------------------
function func1(){
    if(btnList["摸尸体"].innerText  == '摸尸体'){
        var AutoGet_targetName = "尸体";
        AutoGet1Func();
        btnList["摸尸体"].innerText  = '不摸了';
		btnList['摸尸体'].style.borderStyle = 'inset';
		}

    else{clearGet();
         {btnList["摸尸体"].innerText  = '摸尸体';
		 btnList['摸尸体'].style.borderStyle = 'outset';
		 }

        }

    function AutoGet1Func(){
        AutoGet1IntervalFunc = setInterval(AutoGet1,300);
    }

    function clearGet(){
        clearInterval(AutoGet1IntervalFunc);
    }

    function AutoGet1(){
        $("button.cmd_click3").each(
            function(){
                if(isContains($(this).html() , AutoGet_targetName))
                    eval($(this).attr("onclick").replace("look_item corpse","get corpse"));
            });
    }
}
//换装备--------------------------------------
function func3(){
    if(btnList["战斗装"].innerText == '战斗装')
    { console.log("切换战斗装备！");
	zhandou();
    }
    else
    {console.log("切换打坐装备！");
	 dazuo();
    }
}
function zhandou()
{
	go("auto_equip on;unwield weapon_sb_unarmed10;unwield weapon_sb_throwing10;unwield weapon_sb_sword10;unwield weapon_sb_blade10;wield weapon_sb_throwing10;wield weapon_sb_sword10;wield weapon_sb_blade10;wield weapon_sb_unarmed10");
     btnList["战斗装"].innerText = '打坐装';
}
function dazuo()
{
	go("wear dream hat;wear qixing baojie;wear langya_diaozhui;wield sword of windspring;wear longyuan banzhi moke");
     btnList["战斗装"].innerText = '战斗装';
}


// 吃千年-------------------------------------------------------------------
function func5(){
    go("items use snow_qiannianlingzhi");
}
//切小号（切之前请提前切一次，小号不要点取消或接受点下观察即可）--------------------------------
function func6(){
    if(btnList["切磋B"].innerText  == '切磋B'){
        var Swordsman2_targetName = prompt("请输入B的游戏名","剑行");
        fightSwordsman2Func();
        btnList["切磋B"].innerText  = '停切磋';}
    else{clearKill2();
         {btnList["切磋B"].innerText  = '切磋B';}
        }

    function fightSwordsman2Func(){

        // 间隔1000毫秒查找比试一次
        fightSwordsmanInterval2Func = setInterval(fightSwordsman2,1000);
    }

    /**
 * [clearKill 停止比试B]
 * @return {[type]} [无]
 */
    function clearKill2(){
        clearInterval(fightSwordsmanInterval2Func);
    }

    /**
 * [fightSwordsman2 比试指定B]
 * @return {[type]} [无]
 */
    function fightSwordsman2(){
        // 寻找指定名称的B并开始比试
        $("button.cmd_click3").each(
            function(){
                if(isContains($(this).html() , Swordsman2_targetName))
                    eval($(this).attr("onclick").replace("score","fight"));
            });

        // 战斗结束自动退出战斗界面
        if($('span.outbig_text:contains(战斗结束)').length>0){
            clickButton('prev_combat');
            }
        if (isContains($('span:contains(道：)').text().slice(-8),'应当会有发现……')){
    		//fightSwordsmanIntervalFunc = setInterval(fightSwordsman,1000);
    	    clearInterval(fightSwordsmanInterval2Func);
	        btnList["切磋B"].innerText  = '切磋B';
    	  }
    	//fightSwordsmanFunc();
    }
}
// 杀红名----------------------------
var killHongMingIntervalFunc =  null;
var currentNPCIndex = 0;
function killred(){
	HongMingNPCList =[quid+"恶棍",quid+"恶棍", quid+"流寇", quid+"剧盗",quid+"云老四", quid+"岳老三", quid+"二娘",quid+"段老大", quid+"墟归一",quid+"上官晓芙",quid+"洪昭天","恶棍", "流寇", "云老四", "岳老三", "二娘","段老大","剧盗"];
	console.log(HongMingNPCList);
    zdskill =  null;
    if (btnList["杀红名"].innerText == '杀红名'){
        currentNPCIndex = 0;
        console.log("开始杀红名目标NPC！");
        skillLists = mySkillLists;
        btnList["杀红名"].innerText ='停红名';
        killHongMingIntervalFunc = setInterval(killHongMing, 200);

    }else{
        console.log("停止杀红名目标NPC！");
        btnList["杀红名"].innerText ='杀红名';
        clearInterval(killHongMingIntervalFunc);
    }
}

function killHongMing(){
    if ($('span').text().slice(-7) == "不能杀这个人。"){
        currentNPCIndex = currentNPCIndex + 1;
        console.log("不能杀这个人！");
    }
    getHongMingTargetCode();
    if($('span:contains(胜利)').text().slice(-3)=='胜利！' || $('span:contains(战败了)').text().slice(-6)=='战败了...'){
        currentNPCIndex = 0;
        console.log('杀人一次！');
        clickButton('prev_combat');
    }
}
function getHongMingTargetCode(){
    var peopleList = $(".cmd_click3");
    var thisonclick = null;
    var targetNPCListHere = [];
    var countor= 0;
    for(var i=0; i < peopleList.length; i++) { // 从第一个开始循环
        // 打印 NPC 名字，button 名，相应的NPC名
        thisonclick = peopleList[i].getAttribute('onclick');
        if (HongMingNPCList.contains(peopleList[i].innerText)){
            var targetCode = thisonclick.split("'")[1].split(" ")[1];
            //           console.log("发现NPC名字：" +  peopleList[i].innerText + "，代号：" + targetCode);
            targetNPCListHere[countor] = peopleList[i];
            countor = countor +1;
        }
    }
    // targetNPCListHere 是当前场景所有满足要求的NPC button数组
    if (currentNPCIndex >= targetNPCListHere.length){
        currentNPCIndex = 0;
    }
    if (targetNPCListHere.length > 0){
        thisonclick = targetNPCListHere[currentNPCIndex].getAttribute('onclick');
        var targetCode = thisonclick.split("'")[1].split(" ")[1];
        console.log("准备杀目标NPC名字：" + targetNPCListHere[currentNPCIndex].innerText + "，代码：" + targetCode +"，目标列表中序号：" + (currentNPCIndex ));
        clickButton('kill ' + targetCode); // 点击杀人
        setTimeout(detectKillHongMingInfo,200); // 200 ms后获取杀人情况，是满了还是进入了
    }
}
function detectKillHongMingInfo(){
    var HongMingInfo = $('span').text();
    if (HongMingInfo.slice(-15) == "已经太多人了，不要以多欺少啊。"){
        currentNPCIndex = currentNPCIndex + 1;
    }else{
        currentNPCIndex = 0;
    }
}

// 杀黄名----------------------------
var killHuangMingIntervalFunc =  null;
var currentNPCIndex = 0;
function killyellow(){
	HuangMingNPCList = ["醉汉","地痞","青竹蛇",quid+"王铁匠", quid+"杨掌柜", quid+"柳绘心", quid+"柳小花", quid+"卖花姑娘",quid+"刘守财",quid+"朱老伯",quid+"方老板", quid+"客商",quid+"方寡妇",quid+"花落云", quid+"辰川",quid+"王世仲","王铁匠", "杨掌柜", "柳绘心", "柳小花", "朱老伯","方老板", "客商","方寡妇","卖花姑娘","刘守财"];
    console.log(HuangMingNPCList);
	zdskill =  null;
    if (btnList["杀黄名"].innerText == '杀黄名'){
        currentNPCIndex = 0;
        console.log("开始杀黄名目标NPC！");
        skillLists = mySkillLists;
        btnList["杀黄名"].innerText ='停黄名';
        killHuangMingIntervalFunc = setInterval(killHuangMing, 200);

    }else{
        console.log("停止杀黄名目标NPC！");
        btnList["杀黄名"].innerText ='杀黄名';
        clearInterval(killHuangMingIntervalFunc);
    }
}

function killHuangMing(){
    if ($('span').text().slice(-7) == "不能杀这个人。"){
        currentNPCIndex = currentNPCIndex + 1;
        console.log("不能杀这个人！");
    }
    getHuangMingTargetCode();
    if($('span:contains(胜利)').text().slice(-3)=='胜利！' || $('span:contains(战败了)').text().slice(-6)=='战败了...'){
        currentNPCIndex = 0;
        console.log('杀人一次！');
        clickButton('prev_combat');
    }
}
function getHuangMingTargetCode(){
    var peopleList = $(".cmd_click3");
    var thisonclick = null;
    var targetNPCListHere = [];
    var countor= 0;
    for(var i=0; i < peopleList.length; i++) { // 从第一个开始循环
        // 打印 NPC 名字，button 名，相应的NPC名
        thisonclick = peopleList[i].getAttribute('onclick');
        if (HuangMingNPCList.contains(peopleList[i].innerText)){
            var targetCode = thisonclick.split("'")[1].split(" ")[1];
            //           console.log("发现NPC名字：" +  peopleList[i].innerText + "，代号：" + targetCode);
            targetNPCListHere[countor] = peopleList[i];
            countor = countor +1;
        }
    }
    // targetNPCListHere 是当前场景所有满足要求的NPC button数组
    if (currentNPCIndex >= targetNPCListHere.length){
        currentNPCIndex = 0;
    }
    if (targetNPCListHere.length > 0){
        thisonclick = targetNPCListHere[currentNPCIndex].getAttribute('onclick');
        var targetCode = thisonclick.split("'")[1].split(" ")[1];
        console.log("准备杀目标NPC名字：" + targetNPCListHere[currentNPCIndex].innerText + "，代码：" + targetCode +"，目标列表中序号：" + (currentNPCIndex ));
        clickButton('kill ' + targetCode); // 点击杀人
        setTimeout(detectKillHuangMingInfo,200); // 200 ms后获取杀人情况，是满了还是进入了
    }
}
function detectKillHuangMingInfo(){
    var HuangMingInfo = $('span').text();
    if (HuangMingInfo.slice(-15) == "已经太多人了，不要以多欺少啊。"){
        currentNPCIndex = currentNPCIndex + 1;
    }else{
        currentNPCIndex = 0;
    }
}

// 杀天剑----------------------------
var TianJianNPCList = ["天剑", "天剑真身", "虹风", "虹雨","虹雷", "虹电", "天剑谷卫士", "醉汉"];
var killTianJianIntervalFunc =  null;
var currentNPCIndex = 0;
function func9(){
    zdskill =  mySkillLists;
    if (btnList["杀天剑"].innerText == '杀天剑'){
        currentNPCIndex = 0;
        console.log("开始杀天剑目标NPC！");
        skillLists = mySkillLists;
        btnList["杀天剑"].innerText ='停天剑';
        killTianJianIntervalFunc = setInterval(killTianJian, 500);

    }else{
        console.log("停止杀天剑目标NPC！");
        btnList["杀天剑"].innerText ='杀天剑';
        clearInterval(killTianJianIntervalFunc);
    }
}

function killTianJian(){
    if ($('span').text().slice(-7) == "不能杀这个人。"){
        currentNPCIndex = currentNPCIndex + 1;
        console.log("不能杀这个人！");
        //        return;
    }
    getTianJianTargetCode();
    //setTimeout(ninesword, 200);
    if($('span:contains(胜利)').text().slice(-3)=='胜利！' || $('span:contains(战败了)').text().slice(-6)=='战败了...'){
        currentNPCIndex = 0;
        console.log('杀人一次！');
        clickButton('prev_combat');
    }
}
function getTianJianTargetCode(){
    var peopleList = $(".cmd_click3");
    var thisonclick = null;
    var targetNPCListHere = [];
    var countor= 0;
    for(var i=0; i < peopleList.length; i++) { // 从第一个开始循环
        // 打印 NPC 名字，button 名，相应的NPC名
        thisonclick = peopleList[i].getAttribute('onclick');
        if (TianJianNPCList.contains(peopleList[i].innerText)){
            var targetCode = thisonclick.split("'")[1].split(" ")[1];
            //           console.log("发现NPC名字：" +  peopleList[i].innerText + "，代号：" + targetCode);
            targetNPCListHere[countor] = peopleList[i];
            countor = countor +1;
        }
    }
    // targetNPCListHere 是当前场景所有满足要求的NPC button数组
    if (currentNPCIndex >= targetNPCListHere.length){
        currentNPCIndex = 0;
    }
    if (targetNPCListHere.length > 0){
        thisonclick = targetNPCListHere[currentNPCIndex].getAttribute('onclick');
        var targetCode = thisonclick.split("'")[1].split(" ")[1];
        console.log("准备杀目标NPC名字：" + targetNPCListHere[currentNPCIndex].innerText + "，代码：" + targetCode +"，目标列表中序号：" + (currentNPCIndex ));
        clickButton('kill ' + targetCode); // 点击杀人
        setTimeout(detectKillTianJianInfo,200); // 200 ms后获取杀人情况，是满了还是进入了
    }
}
function detectKillTianJianInfo(){
    var TianJianInfo = $('span').text();
    if (TianJianInfo.slice(-15) == "已经太多人了，不要以多欺少啊。"){
        currentNPCIndex = currentNPCIndex + 1;
    }else{
        currentNPCIndex = 0;
    }
}

// 杀帮副本---------------------------
var bangfuNPCList = ["地痞", "镇殿神兽", "守殿神兽", "幽荧幼崽", "幽荧兽魂", "幽荧分身", "幽荧战神", "镇潭神兽", "守潭神兽", "螣蛇幼崽", "螣蛇兽魂", "螣蛇分身", "螣蛇战神", "镇山神兽", "守山神兽", "应龙幼崽", "应龙兽魂", "应龙分身", "应龙战神", "镇谷神兽", "守谷神兽", "饕餮幼崽", "饕餮兽魂", "饕餮王", "饕餮战神","铁狼军","银狼军"];
//var killTianJianIntervalFunc =  null;
var currentNPCIndex = 0;
function func10(){
    zdskill =  mySkillLists;
    if (btnList["杀帮副"].innerText == '杀帮副'){
        currentNPCIndex = 0;
        console.log("开始杀帮副本目标NPC！");
        skillLists = mySkillLists;
        btnList["杀帮副"].innerText ='停帮副';
        bangfuIntervalFunc = setInterval(bangfu, 500);

    }else{
        console.log("停止帮副本目标NPC！");
        btnList["杀帮副"].innerText ='杀帮副';
        clearInterval(bangfuIntervalFunc);
    }
}

function bangfu(){
    if ($('span').text().slice(-7) == "不能杀这个人。"){
        currentNPCIndex = currentNPCIndex + 1;
        console.log("不能杀这个人！");
        //        return;
    }
    getbangfuTargetCode();
    //setTimeout(ninesword, 200);
    if($('span:contains(胜利)').text().slice(-3)=='胜利！' || $('span:contains(战败了)').text().slice(-6)=='战败了...'){
        currentNPCIndex = 0;
        console.log('杀人一次！');
        clickButton('prev_combat');
    }
}
function getbangfuTargetCode(){
    var peopleList = $(".cmd_click3");
    var thisonclick = null;
    var targetNPCListHere = [];
    var countor= 0;
    for(var i=0; i < peopleList.length; i++) { // 从第一个开始循环
        // 打印 NPC 名字，button 名，相应的NPC名
        thisonclick = peopleList[i].getAttribute('onclick');
        if (bangfuNPCList.contains(peopleList[i].innerText)){
            var targetCode = thisonclick.split("'")[1].split(" ")[1];
            //           console.log("发现NPC名字：" +  peopleList[i].innerText + "，代号：" + targetCode);
            targetNPCListHere[countor] = peopleList[i];
            countor = countor +1;
        }
    }
    // targetNPCListHere 是当前场景所有满足要求的NPC button数组
    if (currentNPCIndex >= targetNPCListHere.length){
        currentNPCIndex = 0;
    }
    if (targetNPCListHere.length > 0){
        thisonclick = targetNPCListHere[currentNPCIndex].getAttribute('onclick');
        var targetCode = thisonclick.split("'")[1].split(" ")[1];
        console.log("准备杀目标NPC名字：" + targetNPCListHere[currentNPCIndex].innerText + "，代码：" + targetCode +"，目标列表中序号：" + (currentNPCIndex ));
        clickButton('kill ' + targetCode); // 点击杀人
        setTimeout(detectbangfuInfo,200); // 200 ms后获取杀人情况，是满了还是进入了
    }
}
function detectbangfuInfo(){
    var bangfuInfo = $('span').text();
    if (bangfuInfo.slice(-15) == "已经太多人了，不要以多欺少啊。"){
        currentNPCIndex = currentNPCIndex + 1;
    }else{
        currentNPCIndex = 0;
    }
}
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};
//--------------------------打奇侠dqxfunc-------------------------------------
	var jishi;
var fqxname = '';
//createButton1('打奇侠', dqxfunc);
var dqx_popbk = createPop('打奇侠');
popList['打奇侠'].innerHTML = '<div>请选择想比试的奇侠</div>';

function dqx_addbtns() {
    var a = ['郭济', '步惊鸿', '浪唤雨', '火云邪神', '逆风舞', '王蓉', '风南', '狐苍雁', '李宇飞', '庞统', '风行骓', '吴缜', '护竺','玄月研','狼居胥','烈九州','穆妙羽','宇文无敌','李玄霸','八部龙将','风无痕','厉沧若','夏岳卿','妙无心','巫夜姬'];
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = document.createElement('button');
        b[i].style.padding = '0';
        b[i].style.margin = '5px 0 0 5px';
        b[i].style.width = '60px';
        b[i].style.height = '20px';
		b[i].style.background = ground;
		b[i].style.color = color;
		b[i].style.borderStyle = 'outset';
        b[i].innerHTML = a[i];
        popList['打奇侠'].appendChild(b[i]);
        b[i].onclick = function (i) {
          if(userqu!=21){			
	        getqixiacode();
            dqx_popbk.style.display = 'none';
            fqxname = this.innerHTML;
            setTimeout(function(){clickButton('find_task_road qixia ' + qixiaCode[fqxname])},500);
            clearInterval(jishi);
            jishi = setInterval(fightqx, 1500);
            btnList['打奇侠'].innerText = '停比试'
		  }
		  else{alert("抱歉，你所在的区暂不开放打奇侠功能")};
        }
    }
}
dqx_addbtns();

function dqxfunc() {
    if (btnList['打奇侠'].innerText == '打奇侠') {
        dqx_popbk.style.display = ""
    } else {
        clearInterval(jishi);
        btnList['打奇侠'].innerText = '打奇侠'
    }
}
function fightqx() {
	if(!is_fighting){
    clickButton('golook_room');
    setTimeout(function(){setdonpc(fqxname, '比试')},300);
	}
}
//---------------------------第二类左边功能区-------------------------------------------------------------------------
//比试怪--------------------------------------
//createButton('比试怪',btnBox3,bsgfunc);
var bsnpc="野猪",
bishiIntervalFunc =  null,
currentNPCIndex = 0;
function func11(){
    zdskill =  mySkillLists;
    if (btnList["比试怪"].innerText == '比试怪'){
		chuzhao_open();
	    bsnpc=prompt("请输入需要一直比试的npc名称，并走到该npc对应的地图",bsnpc);
		bishiNPCList = [bsnpc];
		console.log(bishiNPCList);
        currentNPCIndex = 0;
        console.log("开始比试"+bsnpc);
        skillLists = mySkillLists;
        btnList["比试怪"].innerText ='停比试';
        bishiIntervalFunc = setInterval(bishi, 500);

    }else{
		chuzhao_close();
        console.log("停止攻击目标npc!");
        btnList["比试怪"].innerText ='比试怪';
        clearInterval(bishiIntervalFunc);
    }
}

function bishi(){
    if ($('span').text().slice(-7) == "不能杀这个人。"){
        currentNPCIndex = currentNPCIndex + 1;
        console.log("不能杀这个人！");
        //        return;
    }
    getbishiCode();
    //setTimeout(ninesword, 200);
    if($('span:contains(胜利)').text().slice(-3)=='胜利！' || $('span:contains(战败了)').text().slice(-6)=='战败了...'){
        currentNPCIndex = 0;
        console.log('杀人一次！');
        clickButton('prev_combat');
    }
}
function getbishiCode(){
    var peopleList = $(".cmd_click3");
    var thisonclick = null;
    var targetNPCListHere = [];
    var countor= 0;
    for(var i=0; i < peopleList.length; i++) { // 从第一个开始循环
        // 打印 NPC 名字，button 名，相应的NPC名
        thisonclick = peopleList[i].getAttribute('onclick');
        if (bishiNPCList.contains(peopleList[i].innerText)){
            var targetCode = thisonclick.split("'")[1].split(" ")[1];
            //           console.log("发现NPC名字：" +  peopleList[i].innerText + "，代号：" + targetCode);
            targetNPCListHere[countor] = peopleList[i];
            countor = countor +1;
        }
    }
    // targetNPCListHere 是当前场景所有满足要求的NPC button数组
    if (currentNPCIndex >= targetNPCListHere.length){
        currentNPCIndex = 0;
    }
    if (targetNPCListHere.length > 0){
        thisonclick = targetNPCListHere[currentNPCIndex].getAttribute('onclick');
        var targetCode = thisonclick.split("'")[1].split(" ")[1];
        console.log("准备杀目标NPC名字：" + targetNPCListHere[currentNPCIndex].innerText + "，代码：" + targetCode +"，目标列表中序号：" + (currentNPCIndex ));
        clickButton('fight ' + targetCode); // 点击杀人
        setTimeout(detectbishiInfo,200); // 200 ms后获取杀人情况，是满了还是进入了
    }
}
function detectbishiInfo(){
    var bishiInfo = $('span').text();
    if (bishiInfo.slice(-15) == "已经太多人了，不要以多欺少啊。"){
        currentNPCIndex = currentNPCIndex + 1;
    }else{
        currentNPCIndex = 0;
    }
}
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
};

//--------------------------------题库--------------------------------------------------------------------
// 答题 ---------------------------------------------------

var answerQuestionsInterval = null;
var QuestAnsLibs = {
    "“白玉牌楼”场景是在哪个地图上？":"c",
    "“百龙山庄”场景是在哪个地图上？":"b",
    "“冰火岛”场景是在哪个地图上？":"b",
    "“常春岛渡口”场景是在哪个地图上？":"c",
    "“跪拜坪”场景是在哪个地图上？":"b",
    "“翰墨书屋”场景是在哪个地图上？":"c",
    "“花海”场景是在哪个地图上？":"a",
    "“留云馆”场景是在哪个地图上？":"b",
    "“清音居”场景是在哪个地图上？":"a",
    "“日月洞”场景是在哪个地图上？":"b",
    "“蓉香榭”场景是在哪个地图上？":"c",
    "“三清殿”场景是在哪个地图上？":"b",
    "“三清宫”场景是在哪个地图上？":"c",
    "“双鹤桥”场景是在哪个地图上？":"b",
    "“无名山脚”场景是在哪个地图上？":"d",
    "“伊犁”场景是在哪个地图上？":"b",
    "“鹰记商号”场景是在哪个地图上？":"d",
    "“迎梅客栈”场景是在哪个地图上？":"d",
    "“子午楼”场景是在哪个地图上？":"c",
    "8级的装备摹刻需要几把刻刀？":"a",
    "NPC公平子在哪一章地图？":"a",
    "vip每天不可以领取什么？":"b",
    "瑷伦在晚月庄的哪个场景？":"b",
    "安惜迩是在那个场景？":"c",
    "黯然消魂掌有多少招式？":"c",
    "黯然销魂掌是哪个门派的技能？":"a",
    "黯然销魂掌有多少招式？":"c",
    "八卦迷阵是哪个门派的阵法？":"b",
    "八卦迷阵是那个门派的阵法？":"a",
    "白金戒指可以在哪位npc那里获得？":"b",
    "白金戒指可以在哪位那里获得？":"b",
    "白金手镯可以在哪位npc那里获得？":"a",
    "白金项链可以在哪位npc那里获得？":"b",
    "白金项链可以在哪位那里获得？":"b",
    "白蟒鞭的伤害是多少？":"a",
    "白驼山第一位要拜的师傅是谁？":"a",
    "白银宝箱礼包多少元宝一个？":"d",
    "白玉牌楼场景是在哪个地图上？":"c",
    "白玉腰束是腰带类的第几级装备？":"b",
    "拜师风老前辈需要正气多少？":"b",
	"铁手镯可以在哪位npc那里获得":"a",
	"草帽可以在哪位npc那里获得":"b",
    "拜师老毒物需要蛤蟆功多少级？":"a",
    "拜师铁翼需要多少内力？":"b",
    "拜师小龙女需要容貌多少？":"c",
    "拜师张三丰需要多少正气？":"b",
    "包家将是哪个门派的师傅？":"a",
    "包拯在哪一章？":"d",
    "宝石合成一次需要消耗多少颗低级宝石？":"c",
    "宝玉帽可以在哪位npc那里获得？":"d",
    "宝玉帽可以在哪位那里获得？":"d",
    "宝玉鞋击杀哪个npc可以获得？":"a",
    "宝玉鞋击杀哪个可以获得？":"a",
    "宝玉鞋在哪获得？":"a",
    "暴雨梨花针的伤害是多少？":"c",
    "北斗七星阵是第几个的组队副本？":"c",
    "北冥神功是哪个门派的技能？":"b",
    "北岳殿神像后面是哪位？":"b",
    "北岳殿神像后面是哪位npc？":"b",
    "匕首加什么属性？":"c",
    "碧海潮生剑在哪位师傅处学习？":"a",
    "碧磷鞭的伤害是多少？":"b",
    "镖局保镖是挂机里的第几个任务？":"d",
    "冰魄银针的伤害是多少？":"b",
    "病维摩拳是哪个门派的技能？":"b",
    "不可保存装备下线多久会消失？":"c",
    "不属于白驼山的技能是什么？":"b",
    "仓库最多可以容纳多少种物品？":"b",
    "沧海护腰可以镶嵌几颗宝石？":"d",
    "沧海护腰是腰带类的第几级装备？":"a",
    "藏宝图在哪个npc处购买？":"b",
    "藏宝图在哪个处购买？":"b",
    "藏宝图在哪里npc那里买？":"a",
    "藏宝图在哪里那里买？":"a",
    "藏宝图在哪个NPC处购买":"a",
    "草帽可以在哪位npc那里获得？":"b",
    "草帽可以在哪位那里获得？":"b",
    "成功易容成异性几次可以领取易容成就奖？":"b",
    "成长计划第七天可以领取多少元宝？":"d",
    "成长计划六天可以领取多少银两？":"d",
    "成长计划需要多少元宝方可购买？":"a",
    "城里打擂是挂机里的第几个任务？":"d",
    "城里抓贼是挂机里的第几个任务？":"b",
    "充值积分不可以兑换下面什么物品？":"d",
    "出生选武学世家增加什么？":"a",
    "闯楼第几层可以获得称号“藏剑楼护法”？":"b",
    "闯楼第几层可以获得称号“藏剑楼楼主”？":"d",
    "闯楼第几层可以获得称号“藏剑楼长老”？":"c",
    "闯楼每多少层有称号奖励？":"a",
    "春风快意刀是哪个门派的技能？":"b",
    "春秋水色斋需要多少杀气才能进入？":"d",
    "从哪个npc处进入跨服战场？":"a",
    "从哪个处进入跨服战场？":"a",
    "摧心掌是哪个门派的技能？":"a",
    "达摩在少林哪个场景？":"c",
    "达摩杖的伤害是多少？":"d",
    "打开引路蜂礼包可以得到多少引路蜂？":"b",
    "打排行榜每天可以完成多少次？":"a",
    "打土匪是挂机里的第几个任务？":"c",
    "打造刻刀需要多少个玄铁？":"a",
    "打坐增长什么属性？":"a",
    "大保险卡可以承受多少次死亡后不降技能等级？":"b",
    "大乘佛法有什么效果？":"d",
    "大旗门的修养术有哪个特殊效果？":"a",
    "大旗门的云海心法可以提升哪个属性？":"c",
    "大招寺的金刚不坏功有哪个特殊效果？":"a",
    "大招寺的铁布衫有哪个特殊效果？":"c",
    "当日最低累积充值多少元即可获得返利？":"b",
    "刀法基础在哪掉落？":"a",
    "倒乱七星步法是哪个门派的技能？":"d",
    "等级多少才能在世界频道聊天？":"c",
    "第一个副本需要多少等级才能进入？":"d",
    "貂皮斗篷是披风类的第几级装备？":"b",
    "丁老怪是哪个门派的终极师傅？":"a",
    "丁老怪在天宿海的哪个场景？":"b",
    "丁老怪在天宿海哪个场景？":"b",
    "丁老怪在星宿海的哪个场景？":"b",
    "东方教主在魔教的哪个场景？":"b",
    "斗转星移是哪个门派的技能？":"a",
    "斗转星移阵是哪个门派的阵法？":"a",
    "毒龙鞭的伤害是多少？":"a",
    "毒物阵法是哪个门派的阵法？":"b",
    "独孤求败有过几把剑？":"d",
    "独龙寨是第几个组队副本？":"a",
    "读书写字301-400级在哪里买书？":"c",
    "读书写字最高可以到多少级？":"b",
    "端茶递水是挂机里的第几个任务？":"b",
    "断云斧是哪个门派的技能？":"a",
    "锻造一把刻刀需要多少玄铁碎片锻造？":"c",
    "锻造一把刻刀需要多少银两？":"a",
    "兑换易容面具需要多少玄铁碎片？":"c",
    "多少消费积分换取黄金宝箱？":"a",
    "多少消费积分可以换取黄金钥匙？":"b",
    "翻译梵文一次多少银两？":"d",
    "方媃是哪个门派的师傅？":"b",
    "飞仙剑阵是哪个门派的阵法？":"b",
    "风老前辈在华山哪个场景？":"b",
    "风泉之剑加几点悟性？":"c",
    "风泉之剑可以在哪位npc那里获得？":"b",
    "风泉之剑可以在哪位那里获得？":"b",
    "风泉之剑在哪里获得？":"d",
    "疯魔杖的伤害是多少？":"b",
    "伏虎杖的伤害是多少？":"c",
    "副本完成后不可获得下列什么物品？":"b",
    "副本一次最多可以进几人？":"a",
    "副本有什么奖励？":"d",
    "富春茶社在哪一章？":"c",
    "改名字在哪改？":"d",
    "丐帮的绝学是什么？":"a",
    "丐帮的轻功是哪个？":"b",
    "干苦力是挂机里的第几个任务？":"a",
    "钢丝甲衣可以在哪位npc那里获得？":"d",
    "钢丝甲衣可以在哪位那里获得？":"d",
    "高级乾坤再造丹加什么？":"b",
    "高级乾坤再造丹是增加什么的？":"b",
    "高级突破丹多少元宝一颗？":"d",
    "割鹿刀可以在哪位npc那里获得？":"b",
    "葛伦在大招寺的哪个场景？":"b",
    "根骨能提升哪个属性？":"c",
    "功德箱捐香火钱有什么用？":"a",
    "功德箱在雪亭镇的哪个场景？":"c",
    "购买新手进阶礼包在挂机打坐练习上可以享受多少倍收益？":"b",
    "孤独求败称号需要多少论剑积分兑换？":"b",
    "孤儿出身增加什么？":"d",
    "古灯大师是哪个门派的终极师傅？":"c",
    "古灯大师在大理哪个场景？":"c",
    "古墓多少级以后才能进去？":"d",
    "挂机增长什么？":"a",
    "寒玉床睡觉修炼需要多少点内力值？":"c",
    "寒玉床睡觉一次多久？":"c",
    "寒玉床需要切割多少次？":"d",
    "寒玉床在哪里切割？":"a",
    "寒玉床在那个地图可以找到？":"a",
    "黑狗血在哪获得？":"b",
    "黑水伏蛟可以在哪位npc那里获得？":"c",
    "黑水伏蛟可以在哪位那里获得？":"c",
    "红宝石加什么属性？":"b",
    "洪帮主在洛阳哪个场景？":"c",
    "虎皮腰带是腰带类的第几级装备？":"a",
    "花不为在哪一章？":"a",
    "花花公子在哪个地图？":"a",
    "华山村王老二掉落的物品是什么？":"a",
    "华山施戴子掉落的物品是什么？":"b",
    "华山武器库从哪个NPC进？":"d",
    "黄宝石加什么属性？":"c",
    "黄岛主在桃花岛的哪个场景？":"d",
    "黄袍老道是哪个门派的师傅？":"c",
    "积分商城在雪亭镇的哪个场景？":"c",
    "技能柳家拳谁教的？":"a",
    "技能数量超过了什么消耗潜能会增加？":"b",
    "嫁衣神功是哪个门派的技能？":"b",
    "剑冢在哪个地图？":"a",
    "街头卖艺是挂机里的第几个任务？":"a",
    "金弹子的伤害是多少？":"a",
    "金刚不坏功有什么效果？":"a",
    "金刚杖的伤害是多少？":"a",
    "金戒指可以在哪位npc那里获得？":"d",
    "金手镯可以在哪位npc那里获得？":"b",
    "金丝鞋可以在哪位npc那里获得？":"b",
    "金项链可以在哪位npc那里获得？":"d",
    "金玉断云是哪个门派的阵法？":"a",
    "锦缎腰带是腰带类的第几级装备？":"a",
    "精铁棒可以在哪位npc那里获得？":"d",
    "精铁棒可以在哪位那里获得？":"d",
    "九区服务器名称？":"d",
    "九阳神功是哪个门派的技能？":"c",
    "九阴派梅师姐在星宿海哪个场景？":"a",
    "军营是第几个组队副本？":"b",
    "开通VIP月卡最低需要当天充值多少元方有购买资格？":"a",
    "可以召唤金甲伏兵助战是哪个门派？":"a",
    "客商在哪一章？":"b",
    "孔雀氅可以镶嵌几颗宝石？":"b",
    "孔雀氅是披风类的第几级装备？":"c",
    "枯荣禅功是哪个门派的技能？":"a",
    "跨服副本周六几点开启？":"a",
    "跨服是星期几举行的？":"b",
    "跨服天剑谷每周六几点开启？":"a",
    "跨服需要多少级才能进入？":"c",
    "跨服在哪个场景进入？":"c",
    "兰花拂穴手是哪个门派的技能？":"a",
    "蓝宝石加什么属性？":"a",
    "蓝止萍在哪一章？":"c",
    "蓝止萍在晚月庄哪个小地图？":"b",
    "老毒物在白驮山的哪个场景？":"b",
    "老顽童在全真教哪个场景？":"b",
    "莲花掌是哪个门派的技能？":"a",
    "烈火旗大厅是那个地图的场景？":"c",
    "烈日项链可以镶嵌几颗宝石？":"c",
    "林祖师是哪个门派的师傅？":"a",
    "灵蛇杖法是哪个门派的技能？":"c",
    "凌波微步是哪个门派的技能？":"b",
    "凌虚锁云步是哪个门派的技能？":"b",
    "领取消费积分需要寻找哪个NPC？":"c",
    "鎏金缦罗是披风类的第几级装备？":"d",
    "柳淳风在哪一章":"c",
    "柳淳风在雪亭镇哪个场景？":"b",
    "柳文君所在的位置？":"a",
    "六脉神剑是哪个门派的绝学？":"a",
    "六阴追魂剑是哪个门派的技能？":"b",
    "陆得财是哪个门派的师傅？":"c",
    "陆得财在乔阴县的哪个场景？":"a",
    "论剑每天能打几次？":"a",
    "论剑是每周星期几？":"c",
    "论剑是什么时间点正式开始？":"a",
    "论剑是星期几进行的？":"c",
    "论剑是星期几举行的？":"c",
    "论剑输一场获得多少论剑积分？":"a",
    "论剑要在晚上几点前报名？":"b",
    "论剑一次最多能突破几个技能？":"c",
    "论剑在周几进行？":"b",
    "论剑中步玄派的师傅是哪个？":"a",
    "论剑中大招寺第一个要拜的师傅是谁？":"c",
    "论剑中古墓派的终极师傅是谁？":"d",
    "论剑中花紫会的师傅是谁？":"c",
    "论剑中青城派的第一个师傅是谁？":"a",
    "论剑中青城派的终极师傅是谁？":"d",
    "论剑中逍遥派的终极师傅是谁？":"c",
    "论剑中以下不是峨嵋派技能的是哪个？":"b",
    "论剑中以下不是华山派的人物的是哪个？":"d",
    "论剑中以下哪个不是大理段家的技能？":"c",
    "论剑中以下哪个不是大招寺的技能？":"b",
    "论剑中以下哪个不是峨嵋派可以拜师的师傅？":"d",
    "论剑中以下哪个不是丐帮的技能？":"d",
    "论剑中以下哪个不是丐帮的人物？":"a",
    "论剑中以下哪个不是古墓派的的技能？":"b",
    "论剑中以下哪个不是华山派的技能的？":"d",
    "论剑中以下哪个不是明教的技能？":"d",
    "论剑中以下哪个不是魔教的技能？":"a",
    "论剑中以下哪个不是魔教的人物？":"d",
    "论剑中以下哪个不是全真教的技能？":"d",
    "论剑中以下哪个不是是晚月庄的技能？":"d",
    "论剑中以下哪个不是唐门的技能？":"c",
    "论剑中以下哪个不是唐门的人物？":"c",
    "论剑中以下哪个不是铁雪山庄的技能？":"d",
    "论剑中以下哪个不是铁血大旗门的技能？":"c",
    "论剑中以下哪个不是晚月庄的技能？":"d",
    "论剑中以下哪个是大理段家的技能？":"a",
    "论剑中以下哪个是大招寺的技能？":"b",
    "论剑中以下哪个是丐帮的技能？":"b",
    "论剑中以下哪个是花紫会的技能？":"a",
    "论剑中以下哪个是华山派的技能的？":"a",
    "论剑中以下哪个是明教的技能？":"b",
    "论剑中以下哪个是青城派的技能？":"b",
    "论剑中以下哪个是唐门的技能？":"b",
    "论剑中以下哪个是天邪派的技能？":"b",
    "论剑中以下哪个是天邪派的人物？":"a",
    "论剑中以下哪个是铁雪山庄的技能？":"c",
    "论剑中以下哪个是铁血大旗门的技能？":"b",
    "论剑中以下哪个是铁血大旗门的师傅？":"a",
    "论剑中以下哪个是晚月庄的技能？":"a",
    "论剑中以下哪个是晚月庄的人物":"a",
    "论剑中以下是峨嵋派技能的是哪个？":"a",
    "论语在哪购买？":"a",
    "骆云舟在哪一章？":"c",
    "骆云舟在乔阴县的哪个场景？":"b",
    "落英神剑掌是哪个门派的技能？":"b",
    "吕进在哪个地图？":"a",
    "绿宝石加什么属性？":"c",
    "漫天花雨匕在哪获得？":"a",
    "茅山的绝学是什么？":"b",
    "茅山的天师正道可以提升哪个属性？":"d",
    "茅山可以招几个宝宝？":"c",
    "茅山派的轻功是什么？":"b",
    "茅山天师正道可以提升什么？":"c",
    "茅山学习什么技能招宝宝？":"a",
    "茅山在哪里拜师？":"c",
    "每次合成宝石需要多少银两？":"a",
    "每个玩家最多能有多少个好友？":"b",
    "每日微信分享可以获得什么奖励？":"a",
    "每天的任务次数几点重置？":"d",
    "每天分享游戏到哪里可以获得20元宝？":"a",
    "每天能挖几次宝？":"d",
    "每天能做多少个谜题任务？":"a",
    "每天能做多少个师门任务？":"c",
    "每天微信分享能获得多少元宝？":"d",
    "每天有几次试剑？":"b",
    "每天在线多少个小时即可领取消费积分？":"b",
    "每突破一次技能有效系数加多少？":"a",
    "密宗伏魔是哪个门派的阵法？":"c",
    "灭绝师太在第几章？":"c",
    "灭绝师太在峨眉山哪个场景？":"a",
    "明教的九阳神功有哪个特殊效果？":"a",
    "明月帽要多少刻刀摩刻？":"a",
    "摹刻10级的装备需要摩刻技巧多少级？":"b",
    "摹刻烈日宝链需要多少级摩刻技巧？":"c",
    "摹刻扬文需要多少把刻刀？":"a",
    "魔鞭诀在哪里学习？":"d",
    "魔教的大光明心法可以提升哪个属性？":"d",
    "莫不收在哪一章？":"a",
    "墨磷腰带是腰带类的第几级装备？":"d",
    "木道人在青城山的哪个场景？":"b",
    "慕容家主在慕容山庄的哪个场景？":"a",
    "慕容山庄的斗转星移可以提升哪个属性？":"d",
    "哪个npc处可以捏脸？":"a",
    "哪个NPC掉落拆招基础？":"a",
    "哪个npc属于全真七子？":"b",
    "哪个处可以捏脸？":"a",
    "哪个分享可以获得20元宝？":"b",
    "哪个技能不是魔教的？":"d",
    "哪个门派拜师没有性别要求？":"d",
    "哪样不能获得玄铁碎片？":"c",
    "能增容貌的是下面哪个技能？":"a",
    "捏脸需要花费多少银两？":"c",
    "捏脸需要寻找哪个NPC？":"a",
    "欧阳敏是哪个门派的？":"b",
    "欧阳敏是哪个门派的师傅？":"b",
    "欧阳敏在哪一章？":"a",
    "欧阳敏在唐门的哪个场景？":"c",
    "排行榜最多可以显示多少名玩家？":"a",
    "逄义是在那个场景？":"a",
    "披星戴月是披风类的第几级装备？":"d",
    "劈雳拳套有几个镶孔？":"a",
    "霹雳掌套的伤害是多少？":"b",
    "辟邪剑法是哪个门派的绝学技能？":"a",
    "辟邪剑法在哪学习？":"b",
    "婆萝蜜多心经是哪个门派的技能？":"b",
    "七宝天岚舞是哪个门派的技能？":"d",
    "七星鞭的伤害是多少？":"c",
    "七星剑法是哪个门派的绝学？":"a",
    "棋道是哪个门派的技能？":"c",
    "千古奇侠称号需要多少论剑积分兑换？":"d",
    "乾坤大挪移属于什么类型的武功？":"a",
    "乾坤一阳指是哪个师傅教的？":"a",
    "青城派的道德经可以提升哪个属性？":"c",
    "青城派的道家心法有哪个特殊效果？":"a",
    "清风寨在哪":"b",
    "清风寨在哪个地图？":"d",
    "清虚道长在哪一章？":"d",
    "去唐门地下通道要找谁拿钥匙？":"a",
    "全真的道家心法有哪个特殊效果？":"a",
    "全真的基本阵法有哪个特殊效果？":"b",
    "全真的双手互搏有哪个特殊效果？":"c",
    "人物背包最多可以容纳多少种物品？":"a",
    "日月神教大光明心法可以提升什么？":"d",
    "如何将华山剑法从400级提升到440级？":"d",
    "如意刀是哪个门派的技能？":"c",
    "山河藏宝图需要在哪个NPC手里购买？":"d",
    "上山打猎是挂机里的第几个任务？":"c",
    "少林的混元一气功有哪个特殊效果？":"d",
    "少林的易筋经神功有哪个特殊效果？":"a",
    "蛇形刁手是哪个门派的技能？":"b",
    "什么影响打坐的速度？":"c",
    "什么影响攻击力？":"d",
    "什么装备不能镶嵌黄水晶？":"d",
    "什么装备都能镶嵌的是什么宝石？":"c",
    "什么装备可以镶嵌紫水晶？":"c",
    "神雕大侠所在的地图？":"b",
    "神雕大侠在哪一章？":"a",
    "神雕侠侣的时代背景是哪个朝代？":"d",
    "神雕侠侣的作者是？":"b",
    "升级什么技能可以提升根骨？":"a",
    "生死符的伤害是多少？":"a",
    "师门磕头增加什么？":"a",
    "师门任务每天可以完成多少次？":"a",
    "师门任务每天可以做多少个？":"c",
    "师门任务什么时候更新？":"b",
    "师门任务一天能完成几次？":"d",
    "师门任务最多可以完成多少个？":"d",
    "施令威在哪个地图？":"b",
    "石师妹哪个门派的师傅？":"c",
    "使用朱果经验潜能将分别增加多少？":"a",
    "首冲重置卡需要隔多少天才能在每日充值奖励中领取？":"b",
    "首次通过桥阴县不可以获得那种奖励？":"a",
    "受赠的消费积分在哪里领取？":"d",
    "兽皮鞋可以在哪位npc那里获得？":"b",
    "兽皮鞋可以在哪位那里获得？":"b",
    "树王坟在第几章节？":"c",
    "双儿在扬州的哪个小地图？":"a",
    "孙天灭是哪个门派的师傅？":"c",
    "踏雪无痕是哪个门派的技能？":"b",
    "踏云棍可以在哪位npc那里获得？":"a",
    "踏云棍可以在哪位那里获得？":"a",
    "唐门的唐门毒经有哪个特殊效果？":"a",
    "唐门密道怎么走？":"c",
    "天蚕围腰可以镶嵌几颗宝石？":"d",
    "天蚕围腰是腰带类的第几级装备？":"d",
    "天山姥姥在逍遥林的哪个场景？":"d",
    "天山折梅手是哪个门派的技能？":"c",
    "天师阵法是哪个门派的阵法？":"b",
    "天邪派在哪里拜师？":"b",
    "天羽奇剑是哪个门派的技能？":"a",
    "铁戒指可以在哪位npc那里获得？":"a",
    "铁戒指可以在哪位那里获得？":"a",
    "铁手镯可以在哪位npc那里获得？":"a",
    "铁手镯可以在哪位那里获得？":"a",
    "铁项链可以在哪位npc那里获得？":"a",
    "铁血大旗门云海心法可以提升什么？":"a",
    "通灵需要花费多少银两？":"d",
    "通灵需要寻找哪个NPC？":"c",
    "突破丹在哪里购买？":"b",
    "屠龙刀法是哪个门派的绝学技能？":"b",
    "屠龙刀是什么级别的武器？":"a",
    "挖剑冢可得什么？":"a",
    "弯月刀可以在哪位npc那里获得？":"b",
    "弯月刀可以在哪位那里获得？":"b",
    "玩家每天能够做几次正邪任务？":"c",
    "玩家想修改名字可以寻找哪个NPC？":"a",
    "晚月庄的内功是什么？":"b",
    "晚月庄的七宝天岚舞可以提升哪个属性？":"b",
    "晚月庄的小贩在下面哪个地点？":"a",
    "晚月庄七宝天岚舞可以提升什么？":"b",
    "晚月庄意寒神功可以提升什么？":"b",
    "晚月庄主线过关要求？":"a",
    "王铁匠是在那个场景？":"b",
    "王重阳是哪个门派的师傅？":"b",
    "魏无极处读书可以读到多少级？":"a",
    "魏无极身上掉落什么装备？":"c",
    "魏无极在第几章？":"a",
    "闻旗使在哪个地图？":"a",
    "乌金玄火鞭的伤害是多少？":"d",
    "乌檀木刀可以在哪位npc那里获得？":"d",
    "乌檀木刀可以在哪位那里获得？":"d",
    "钨金腰带是腰带类的第几级装备？":"d",
    "武当派的绝学技能是以下哪个？":"d",
    "武穆兵法提升到多少级才能出现战斗必刷？":"d",
    "武穆兵法通过什么学习？":"a",
    "武学世家加的什么初始属性？":"a",
    "舞中之武是哪个门派的阵法？":"b",
    "西毒蛇杖的伤害是多少？":"c",
    "吸血蝙蝠在下面哪个地图？":"a",
    "下列哪项战斗不能多个玩家一起战斗？":"a",
    "下列装备中不可摹刻的是？":"c",
    "下面哪个npc不是魔教的？":"d",
    "下面哪个不是古墓的师傅？":"d",
    "下面哪个不是门派绝学？":"d",
    "下面哪个不是魔教的？":"d",
    "下面哪个地点不是乔阴县的？":"d",
    "下面哪个门派是正派？":"a",
    "下面哪个是天邪派的师傅？":"a",
    "下面有什么是寻宝不能获得的？":"c",
    "向师傅磕头可以获得什么？":"b",
    "逍遥步是哪个门派的技能？":"a",
    "逍遥林是第几章的地图？":"c",
    "逍遥林怎么弹琴可以见到天山姥姥？":"b",
    "逍遥派的绝学技能是以下哪个？":"a",
    "萧辟尘在哪一章？":"d",
    "小李飞刀的伤害是多少？":"d",
    "小龙女住的古墓是谁建造的？":"b",
    "小男孩在华山村哪里？":"a",
    "新人礼包在哪个npc处兑换？":"a",
    "新手礼包在哪里领取？":"a",
    "新手礼包在哪领取？":"c",
    "需要使用什么衣服才能睡寒玉床？":"a",
    "选择孤儿会影响哪个属性？":"c",
    "选择商贾会影响哪个属性？":"b",
    "选择书香门第会影响哪个属性？":"b",
    "选择武学世家会影响哪个属性？":"a",
    "学习屠龙刀法需要多少内力？":"b",
    "雪莲有什么作用？":"a",
    "雪蕊儿是哪个门派的师傅？":"a",
    "雪蕊儿在铁雪山庄的哪个场景？":"d",
    "扬文的属性？":"a",
    "扬州询问黑狗能到下面哪个地点？":"a",
    "扬州询问黑狗子能到下面哪个地点？":"a",
    "扬州在下面哪个地点的npc处可以获得玉佩？":"c",
    "扬州在下面哪个地点的处可以获得玉佩？":"c",
    "羊毛斗篷是披风类的第几级装备？":"a",
    "阳刚之劲是哪个门派的阵法？":"c",
    "杨过小龙女分开多少年后重逢?":"c",
    "杨过在哪个地图？":"a",
    "夜行披风是披风类的第几级装备？":"a",
    "夜皇在大旗门哪个场景？":"c",
    "一个队伍最多有几个队员？":"c",
    "一天能使用元宝做几次暴击谜题？":"c",
    "一天能完成谜题任务多少个？":"b",
    "一天能完成师门任务有多少个？":"c",
    "一天能完成挑战排行榜任务多少次？":"a",
    "一张分身卡的有效时间是多久？":"c",
    "一指弹在哪里领悟？":"b",
    "移开明教石板需要哪项技能到一定级别？":"a",
    "以下不是步玄派的技能的哪个？":"c",
    "以下不是天宿派师傅的是哪个？":"c",
    "以下不是晚月庄技能？":"d",
    "以下不是隐藏门派的是哪个？":"d",
    "以下哪个宝石不能镶嵌到戒指？":"c",
    "以下哪个宝石不能镶嵌到内甲？":"a",
    "以下哪个宝石不能镶嵌到披风？":"c",
    "以下哪个宝石不能镶嵌到腰带？":"c",
    "以下哪个宝石不能镶嵌到衣服？":"a",
    "以下哪个不是道尘禅师教导的武学？":"d",
    "以下哪个不是何不净教导的武学？":"c",
    "以下哪个不是慧名尊者教导的技能？":"d",
    "以下哪个不是空空儿教导的武学？":"b",
    "以下哪个不是梁师兄教导的武学？":"b",
    "以下哪个不是鲁长老教导的武学？":"d",
    "以下哪个不是论剑的皮肤？":"d",
    "以下哪个不是全真七子？":"c",
    "以下哪个不是宋首侠教导的武学？":"d",
    "以下哪个不是微信分享好友、朋友圈、QQ空间的奖励？":"a",
    "以下哪个不是岳掌门教导的武学？":"a",
    "以下哪个不是在洛阳场景":"d",
    "以下哪个不是在雪亭镇场景？":"d",
    "以下哪个不是在扬州场景？":"d",
    "以下哪个不是知客道长教导的武学？":"b",
    "以下哪个门派不是隐藏门派？":"c",
    "以下哪个门派是正派？":"d",
    "以下哪个门派是中立门派？":"a",
    "以下哪个是步玄派的祖师？":"b",
    "以下哪个是封山派的祖师？":"c",
    "以下哪个是花紫会的祖师？":"a",
    "以下哪个是晚月庄的祖师？":"d",
    "以下哪些物品不是成长计划第二天可以领取的？":"c",
    "以下哪些物品不是成长计划第三天可以领取的？":"d",
    "以下哪些物品不是成长计划第一天可以领取的？":"d",
    "以下哪些物品是成长计划第四天可以领取的？":"a",
    "以下哪些物品是成长计划第五天可以领取的？":"b",
    "以下属于邪派的门派是哪个？":"b",
    "以下属于正派的门派是哪个？":"a",
    "以下谁不精通降龙十八掌？":"d",
    "以下有哪些物品不是每日充值的奖励？":"d",
    "倚天剑加多少伤害？":"d",
    "倚天屠龙记的时代背景哪个朝代？":"a",
    "易容后保持时间是多久？":"a",
    "易容面具需要多少玄铁兑换？":"c",
    "易容术多少级才可以易容成异性NPC？":"a",
    "易容术可以找哪位NPC学习？":"b",
    "易容术向谁学习？":"a",
    "易容术在哪里学习？":"a",
    "易容术在哪学习？":"b",
    "银手镯可以在哪位npc那里获得？":"b",
    "银手镯可以在哪位那里获得？":"b",
    "银丝链甲衣可以在哪位npc那里获得？":"a",
    "银项链可以在哪位npc那里获得？":"b",
    "银项链可以在哪位那里获得？":"b",
    "尹志平是哪个门派的师傅？":"b",
    "隐者之术是那个门派的阵法？":"a",
    "鹰爪擒拿手是哪个门派的技能？":"a",
    "影响你出生的福缘的出生是？":"d",
    "油流麻香手是哪个门派的技能？":"a",
    "游龙散花是哪个门派的阵法？":"d",
    "玉草帽可以在哪位npc那里获得？":"b",
    "玉蜂浆在哪个地图获得？":"a",
    "玉女剑法是哪个门派的技能？":"b",
    "岳掌门在哪一章？":"a",
    "云九天是哪个门派的师傅？":"c",
    "云问天在哪一章？":"a",
    "在洛阳萧问天那可以学习什么心法？":"b",
    "在庙祝处洗杀气每次可以消除多少点？":"a",
    "在哪个npc处可以更改名字？":"a",
    "在哪个npc处领取免费消费积分？":"d",
    "在哪个npc处能够升级易容术？":"b",
    "在哪个NPC可以购买恢复内力的药品？":"c",
    "在哪个处可以更改名字？":"a",
    "在哪个处领取免费消费积分？":"d",
    "在哪个处能够升级易容术？":"b",
    "在哪里可以找到“香茶”？":"a",
    "在哪里捏脸提升容貌？":"d",
    "在哪里消杀气？":"a",
    "在逍遥派能学到的技能是哪个？":"a",
    "在雪亭镇李火狮可以学习多少级柳家拳？":"b",
    "在战斗界面点击哪个按钮可以进入聊天界面？":"d",
    "在正邪任务中不能获得下面什么奖励？":"d",
    "怎么样获得免费元宝？":"a",
    "赠送李铁嘴银两能够增加什么？":"a",
    "张教主在明教哪个场景？":"d",
    "张三丰在哪一章？":"d",
    "张三丰在武当山哪个场景？":"d",
    "张松溪在哪个地图？":"c",
    "张天师是哪个门派的师傅？":"a",
    "张天师在茅山哪个场景？":"d",
    "长虹剑在哪位npc那里获得？":"a",
    "长虹剑在哪位那里获得？":"a",
    "长剑在哪里可以购买？":"a",
    "正邪任务杀死好人增长什么？":"b",
    "正邪任务一天能做几次？":"a",
    "正邪任务中客商的在哪个地图？":"a",
    "正邪任务中卖花姑娘在哪个地图？":"b",
    "正邪任务最多可以完成多少个？":"d",
    "支线对话书生上魁星阁二楼杀死哪个NPC给10元宝？":"a",
    "朱姑娘是哪个门派的师傅？":"a",
    "朱老伯在华山村哪个小地图？":"b",
    "追风棍可以在哪位npc那里获得？":"a",
    "追风棍在哪里获得？":"b",
    "紫宝石加什么属性？":"d",
    "钻石项链在哪获得？":"a",
	"铁手镯可以在哪位npc那里获得？":"a"

};
//---------------------走迷人zmrfunc---------------------
//var jishi = setInterval(zmr, 500);
var zmrname = '';
//createButton2('走迷人', zmrfunc);
var zmr_popbk = createPop('走迷人');
popList['走迷人'].innerHTML = '<div>请选择你要去的迷宫地图或者npc</div>';

function zmr_addbtns() {
    var a = ['天策府', '老祭司','欧阳敏', '林祖师', '铁尸','琅嬛洞', '高老者', '雪林深处', '出雪林', '石帮主', '朱熹', '谢烟客', "三门派"];
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = document.createElement('button');
        b[i].style.padding = '0';
        b[i].style.margin = '5px 0 0 5px';
        b[i].style.width = '60px';
        b[i].style.height = '20px';
		b[i].style.background = ground;
		b[i].style.color = color;
        b[i].innerHTML = a[i];
        popList['走迷人'].appendChild(b[i]);
        b[i].onclick = function (i) {
            zmr_popbk.style.display = 'none';
            zmrname = this.innerHTML;
			if(zmrname=="天策府"){tcf();}
			if(zmrname=="老祭司"){ljs();}
			if(zmrname=="欧阳敏"){oym();}
			if(zmrname=="林祖师"){lzs();}
			if(zmrname=="铁尸"){ts();}
			if(zmrname=="琅嬛洞"){lhd();}
			if(zmrname=="高老者"){glz();}
			if(zmrname=="雪林深处"){xlsc();}
			if(zmrname=="出雪林"){cxl();}
			if(zmrname=="石帮主"){sbz();}
			if(zmrname=="朱熹"){zx();}
			if(zmrname=="谢烟客"){xyk();}
			if(zmrname=="三门派"){smp();}
            btnList['走迷人'].innerText = '走迷人'
        }
    }
}
zmr_addbtns();

function zmrfunc() {
    if (btnList['走迷人'].innerText == '走迷人') {
        zmr_popbk.style.display = ""
    } else {
        //clearInterval(jishi);
        btnList['走迷人'].innerText = '走迷人'
    }
}
function tcf(){//天策府
    go("jh 2;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;n;n;n;n;n;w;w;n;n;n;");
       }
function ljs(){//老祭司
    go("jh 33;sw;sw;s;s;s;s;w;w;w;w;w;n;w;se;");
       }

function oym(){// 欧阳敏
    go("jh 14;w;n;n;n;n;ask tangmen_tangyun;ask tangmen_tangyun;ask tangmen_tangyun;s;e;e;n;n;ask tangmen_tangmei;ask tangmen_tangmei;ask tangmen_tangmei;e;event_1_8413183;event_1_39383240;e;s;e;n;w;n;n;")
}
function lzs(){//林祖师
go("jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;s;s;s;e;e;event_1_3723773;se;n;e;s;e;s;e;");
}
function ts(){// 铁尸
    go("jh 21;nw;w;w;nw;n;n;n;n;n;n;n;n;ne;n;n;s;s;s;sw;nw;sw;sw;nw;nw;se;sw;");
}
function lhd(){//琅嬛洞
    go("nw;event_1_92817399;w;event_1_91110342;s;event_1_74276536;se;event_1_14726005;sw;event_1_66980486;nw;event_1_39972900;nw;event_1_61689122;w;event_1_19336706;s;eevent_1_30457951;sw;event_1_96023188;s;");
}
function glz(){//高老者
 if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口"){
        alert("请位于 #侠客岛渡口# 位置再点 #高老者# 按钮！");
        return;
}
    go("e;ne;ne;ne;e;e;e;e;e;e;n;n;n;e;ne;nw;");
}
function xlsc(){//雪林深处
 if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "彩虹瀑布"){
        alert("请位于 #彩虹瀑布# 位置再点 #雪林深处# 按钮！");
        return;
}
    go("w;w;w;n;e;n;w;w;s;");
}
function cxl(){//出雪林
 if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "彩虹瀑布"){
        alert("请位于 #彩虹瀑布# 位置再点 #雪林深处# 按钮！");
        return;
}
    go("w;n;e;e;n;se;");
}
function sbz(){//石帮主
 if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口"){
        alert("请位于 #侠客岛渡口# 位置再点 #雪林深处# 按钮！");
        return;
}
    go("e;se;e;e;n;e;s;");
}
function zx(){//朱熹
 if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口"){
        alert("请位于 #侠客岛渡口# 位置再点 #朱熹# 按钮！");
        return;
}
    go("e;ne;ne;ne;e;e;e;e;e;e;n;n;n;w;w;");
}
function xyk(){//谢烟客
 if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口"){
        alert("请位于 #侠客岛渡口# 位置再点 #谢烟客# 按钮！");
        return;
}
    go("e;ne;ne;ne;e;e;e;e;e;e;n;e;e;ne;");
}
//三门派-------------------------------------
function smp(){
    go("jh 2;n;n;e;s;luoyang317_op1;look_npc luoyang_luoyang17;go_hjs;go_hjs go;se;se;ne;w;n;ne;ne;w;n;");
	//setTimeout(func2_s,1000);
	}
function func2_s(){
	go_delay=500;
		if($('.cmd_click_room')[0].innerText  ==undefined || $('.cmd_click_room')[0].innerText== "榆叶林"||"青苔石阶")
		{func2_ss=setInterval(func2_go,2000);return;}
	   clearInterval(func2_ss);
}
function func2_go(){
	go("n;e;nw;se;ne;w;sw");
}

//------------------零散功能---------------------
function chuzhao(){//开出招
	if(btnList['开出招'].innerText =='开出招')
	{
	//mySkillLists=prompt("请输入连续单放出招技能:","九天龙吟剑法");
	btnList['开出招'].innerText ='关出招';
	btnList['开出招'].style.borderStyle = 'inset';
	chuzhao=setInterval(ninesword, 1000);
	}
	else{
	btnList['开出招'].innerText ='开出招';
	btnList['开出招'].style.borderStyle = 'outset';
	clearInterval(chuzhao);
	}
}
function chuzhao_open(){
	btnList['开出招'].innerText ='关出招';
	btnList['开出招'].style.borderStyle = 'inset';
	chuzhao=setInterval(ninesword, 1000);
}
function chuzhao_close(){
	btnList['开出招'].innerText ='开出招';
	btnList['开出招'].style.borderStyle = 'outset';
	clearInterval(chuzhao);
}
//------------挂打坐和睡觉-----------------
function update(){//刷新网页
    window.location.replace(window.location.href);
}
function worksleep(){//打坐睡觉
	sleepwork=setInterval(worksleep1,1000);
}
function worksleep1(){
	if($('span.out2:contains(你打坐完毕，收起全身的真气游走，站起身来。)').length>0)
	{
		go("home;exercise");
		clearInterval(sleepwork);
		setTimeout(update,2000);
	}
	if($('span.out2:contains(你停止了打坐。)').length>0)
	{
		go("home;exercise");
		clearInterval(sleepwork);
		setTimeout(update,2000);
	}
	if($('span.out2:contains(你从寒玉床上爬起，结束了这次练功。)').length>0)
	{
		go("home;sleep_hanyuchuang");
		clearInterval(sleepwork);
		setTimeout(update,2000);
	}
}
worksleep();

//------------------时间获取------------------------
var myDate = new Date();//获取系统当前时间
var mytime=myDate.toLocaleTimeString(); //获取当前时间
var nowtime=myDate.toLocaleString(); //获取日期与时间
/* myDate.getYear(); //获取当前年份(2位)
myDate.getFullYear(); //获取完整的年份(4位,1970-????)
myDate.getMonth(); //获取当前月份(0-11,0代表1月)
myDate.getDate(); //获取当前日(1-31)
myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours(); //获取当前小时数(0-23)
myDate.getMinutes(); //获取当前分钟数(0-59)
myDate.getSeconds(); //获取当前秒数(0-59)
myDate.getMilliseconds(); //获取当前毫秒数(0-999)
myDate.toLocaleDateString(); //获取当前日期 */
var userid="u"+window.location.href.split("&")[1].split("=")[1],userqu=window.location.href.split("&")[4].split("=")[1];
//--------------------消息提示---------------------
function msg(){
	console.log("上次网页刷新时间："+nowtime);
	console.log("您的用户id是"+userid);
	console.log("您所在区是"+userqu+"区");
}
msg();
function readyuanbao(){
	var a=g_obj_map.get("msg_attrs").get("yuanbao");
	var b=g_obj_map.get("msg_attrs").get("xf_score");
	g_gmain.recvNetWork2(HIB + "当前脚本版本号为手机论剑 "+nowversion+"\n" + NOR);//绿
	g_gmain.recvNetWork2(HIG + "你的元宝有 "+a+"\n" + NOR);//绿
	g_gmain.recvNetWork2(HIR + "你的消费积分有 "+b+"\n" + NOR);//红
	g_gmain.recvNetWork2(HIY + "当前功能按钮布局为"+buju+'--('+window.screen.height+'p)'+"\n" + NOR);//黄
	g_gmain.recvNetWork2(HIM + "你所在的区是 "+userqu+"\n" + NOR);//紫
	g_gmain.recvNetWork2(GRA + "你的当前出招设置为 "+mySkillLists+"\n" + NOR);//灰
}
setTimeout(readyuanbao,2000);
//-------------------------------------------
function kggfunc(){//看公告
	alert("脚本隐藏在手机论剑页面右边，需要手指把页面往左滑动可见。当前版本详细介绍请联系15区打酱油的道长");

}
function kljfunc(){//开领奖
    var getRewardsdelay = 100;
    var getRewardsInterval = 5*60*1000; // ms
    if (btnList["开领奖"].innerText == '开领奖'){ // 处于未领奖状态，单击开始领奖,并将状态置于停领奖状态
        console.log("开始自动领取奖励！");
        scanEscapedFish();
        scanEscaped = setInterval(scanEscapedFish,getRewardsInterval);
        maikuli_i = setInterval(maikuli,5000 + getRewardsdelay); // 干苦力, 5s
        duancha_i  = setInterval(duancha,10*1000  + getRewardsdelay ); // 端茶送水, 10s
        dalie_i = setInterval(dalie,5*60*1000 + getRewardsdelay); // 上山打猎, 5 min = 300 s
        btnList["开领奖"].innerText = '停领奖';
    }else{
        console.log("停止自动领取奖励！");
        clearInterval(scanEscaped);
        clearInterval(maikuli_i);
        clearInterval(duancha_i);
        clearInterval(dalie_i);
        btnList["开领奖"].innerText = '开领奖';
    }
}
function maikuli() {
    clickButton('work click maikuli');
}
function duancha() {
    clickButton('work click duancha');
}
function dalie() {
   clickButton('work click dalie');
}
function baobiao() {
    clickButton('work click baobiao');
}
function maiyi() {
    clickButton('work click maiyi');
}
function xuncheng() {
    clickButton('work click xuncheng');
}
function datufei() {
    clickButton('work click datufei');
}
function dalei() {
    clickButton('work click dalei');
}
function kangjijinbin() {
    clickButton('work click kangjijinbin');
}
function zhidaodiying() {
    clickButton('work click zhidaodiying');
}
function dantiaoqunmen() {
    clickButton('work click dantiaoqunmen');
}
function shenshanxiulian() {
    clickButton('work click shenshanxiulian');
}
function jianlimenpai() {
    clickButton('work click jianmenlipai');
}
function scanEscapedFish() {
    go("work click maikuli;work click duancha;work click dalie;work click baobiao;work click maiyi;work click xuncheng;work click datufei;work click dalei;work click kangjijinbin;work click zhidaodiying;work click dantiaoqunmen;work click shenshanxiulian;work click jianmenlipai;public_op3;");
}

function gywfunc(){//关于我
	alert("大家好，我是一个打酱油的道长，现在在15区玩，战力34w");
}

//---------------------任务集rwj---------------------
//var jishi = setInterval(rwj, 500);
var rwjname = '';
//createButton1('任务集', rwjfunc);
var rwj_popbk = createPop('任务集');
popList['任务集'].innerHTML = '<div>请选择你要做的日常任务</div>';

function rwj_addbtns() {
    var a = ['签到',  '刷碎片', '买千年', '出海', '去钓鱼', '杀孽龙', '杀白陀','杀峨眉', '点破阵', '喂鳄鱼','侠客岛','参岩画', '采矿', '挖玄铁', '冰月谷', '采莲', '去赌场', '试剑', '去射雕', '撩奇侠', '清谜题','清背包', '点vip','满血蓝','杀秘宝','总设置'];
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = document.createElement('button');
        b[i].style.padding = '0';
        b[i].style.margin = '5px 0 0 5px';
        b[i].style.width = '60px';
        b[i].style.height = '20px';
		b[i].style.background = ground;
		b[i].style.color = color;
		b[i].style.borderStyle = 'outset';
        b[i].innerHTML = a[i];
        popList['任务集'].appendChild(b[i]);
        b[i].onclick = function (i) {
            rwj_popbk.style.display = 'none';
            rwjname = this.innerHTML;
			if(rwjname=="签到"){qd();}
			if(rwjname=="刷碎片"){ssp();}
			if(rwjname=="买千年"){mqn();}
			if(rwjname=="出海"){ch();}
			if(rwjname=="去钓鱼"){qdy();}
			if(rwjname=="杀孽龙"){snl();}
			if(rwjname=="杀白陀"){sbt();}
			if(rwjname=="杀峨眉"){sem();}
			if(rwjname=="点破阵"){dpz();}
			if(rwjname=="喂鳄鱼"){wey();}
			if(rwjname=="侠客岛"){xkd();}
			if(rwjname=="参岩画"){cyh();}
			if(rwjname=="采矿"){ck();}
			if(rwjname=="挖玄铁"){wxt();}
			if(rwjname=="冰月谷"){byg();}
			if(rwjname=="采莲"){cl();}
			if(rwjname=="去赌场"){qdc();}
			if(rwjname=="试剑"){shijian();}
			if(rwjname=="去射雕"){qsd();}
			if(rwjname=="撩奇侠"){lqx();}
			if(rwjname=="清谜题"){clearmt();}
			if(rwjname=="清背包"){clearBag();}
			if(rwjname=="点vip"){vip();}
			if(rwjname=="满血蓝"){recoveryall();}
			if(rwjname=="杀秘宝"){killmibao();}
			if(rwjname=="总设置"){setAll();}
            btnList['任务集'].innerText = '任务集'
        }
    }
}
rwj_addbtns();

function rwjfunc() {
    if (btnList['任务集'].innerText == '任务集') {
        rwj_popbk.style.display = ""
    } else {
        //clearInterval(jishi);
        btnList['任务集'].innerText = '任务集'
    }
}

// 签到--------------------------------------------------------
//礼包代码：---------------------------------------------------
/*
琼枝礼包：:event_1_6640312;平安礼包:event_1_44140115;吉祥礼包：event_1_20991163;元旦大礼包：go("jh 5;n;n;e;event_1_54203203");小寒礼包:event_1_1820391风霜礼包:event_1_44531938;腊八礼包:event_1_11670568天寒礼包：event_1_86822312
领理财：home;jh 2;n;n;n;n;n;n;n;e;tzjh_lq;home;


*/
//-------------------------------------------------------------
function qd(){
console.log('签到一次！');
nextgo=function(){
            var b = document.getElementById('out').getElementsByTagName('button');            
            for(var i = 0; i<b.length; i++){
                var btxt=b[i].innerHTML.replace(/<[^>]+>/g,"");
                if(btxt.indexOf('礼包')>-1&&btxt!=='兑换礼包'&&btxt!="1元礼包"){
                    b[i].click();console.log("正在领礼包");
                }
            } 
        };
go('jh 5;n;n;n;w;sign7;jh 1;baixinnian;look_npc snow_mercenary');
setTimeout(nextgo,go_delay*10);
setTimeout(function(){go("e;n;e;e;event_1_8041045;event_1_8041045;event_1_44731074;event_1_29721519;e;e;n;lq_lmyh_lb;home;sort fetch_reward;shop money_buy shop1_N_10;cangjian get_all;xueyin_shenbinggu blade get_all;xueyin_shenbinggu unarmed get_all;xueyin_shenbinggu throwing get_all;home；clan buy 302;clan buy 302;clan buy 302;clan buy 302;clan buy 302;clan buy 302;home;jh 5;n;n;e;event_1_1278209;event_1_67345350;jh 2;n;n;n;n;n;n;n;e;tzjh_lq;home;share_ok 1;share_ok 2;share_ok 3;share_ok 4;share_ok 5;share_ok 7");},go_delay*12);
}
// 刷碎片 ----------------------------
var SnakeName = 'luoyang_luoyang20';
function ssp(){
    if (! (counthead=prompt("请输入剩余数量","20"))){
        return;
    }
	go("jh 2;n;n;n;n;n;n;n;n;n;e");
    clickButton('kill ' + SnakeName);
    setTimeout(killsnake,500);
}
function killsnake(){
	if($('span:contains(胜利)').text().slice(-3) == '胜利！'){
		clickButton('prev_combat');
		if(counthead > 1){
			counthead = counthead - 1;
			console.log('杀人一次，剩余杀人次数：%d！',counthead);
			clickButton('kill ' + SnakeName);
		}
		else{
			console.log('刷完了！');
			clickButton('home');
			return;	 // 终止
		}
	}
	else{
		if(is_fighting)
			ninesword();
		else
			clickButton('kill ' + SnakeName);
	}
	setTimeout(killsnake,500);
}
function mqn(){//买千年
	if(!( num  = prompt("请输入购买数量：","60"))){ //
        return;
    }
	num  = parseInt(num);
	go("jh 1;e;n;n;n;w;");
	setTimeout(buyqn,1500);
}
function buyqn(){
	clear();
	for(var i=0; i < num/10; i++) { // 从第一个开始循环
             od[i]="buy /map/snow/obj/qiannianlingzhi_N_10 from snow_herbalist";
        }
	go_rt();
	setTimeout(function(){clickButton('home');},2000);
}
//--------------------------------------------------------------------
function ch(){// 出海
    console.log("开始走向冰火岛！");
    fishingFirstStage();
}
function fishingFirstStage(){
    FishingParas = 0;
    // 进入扬州出海
	go("jh 5;n;n;n;n;n;n;n;n;n;n;ne;look_npc yangzhou_chuanyundongzhu;chuhai go");
}
//-------------------------------------------------
function qdy(){//去钓鱼
    resFishingParas=0;
    console.log("开始钓鱼！");
    // 到达冰火岛
	go("jh 35;nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;e");
    // 开始钓鱼
    setTimeout(fishIt,2000);
}
function fishIt(){
    resFishingParas = resFishingParas+1;
    if ( isContains($('span:contains(钓鱼需要)').text().slice(-17), '钓鱼需要鱼竿和鱼饵，你还没有'))
    {alert('鱼竿或鱼饵不足，停止钓鱼！');
     console.log('没有工具！钓鱼次数：%d次。',resFishingParas);}
    else if( isContains($('span:contains(整个冰湖的)').text().slice(-6), '明天再来吧。')){
        console.log('钓完了！钓鱼次数：%d次。',resFishingParas);
    }
    else{
        clickButton('diaoyu');
        setTimeout(fishIt, 6000);
        console.log($('span:contains(突然)').text().slice(-9));}
}
function snl(){//杀孽龙
	go("jh 15;n;nw;w;nw;n;event_1_14401179");
}

function sbt(){//杀白陀
	go("jh 21;n;n;n;n;w;");
}
function sem(){//杀峨眉
	go("jh 8;ne;e;e;e;n;n;n;n;n;");
}
function dpz(){//点破阵

	go("jh 26;w;w;n;n;event_1_14435995;");
}
function wey(){//喂鳄鱼
     go("jh 37;n;e;e;nw;nw;w;n;e;n;e;e;e;ne;ne;ne;se;n;event_1_97487911");
}
function xkd(){//侠客岛
    if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "侠客岛渡口"){
        alert("	请到“侠客岛渡口”再使用本功能！");
        return;
    }
	go("e;ne;ne;ne;e;e;e;event_1_9179222;e;event_1_11720543;w;n;e;e;s;e;event_1_44025101");
    setTimeout(XiaKeFunc,2000);
}

// 判断出路
function XiaKeFunc(){
    if ($('span.outtitle')[0].innerText == "崖底")		// 重新跳
        XuanYaFunc();
    else if ($('span.outtitle')[0].innerText == "石门")	// 进门领悟
    {
		go("event_1_36230918;e;e;s;event_1_77496481;home");
    }
    else{
        setTimeout(XiaKeFunc,2000);		// 2秒后重新检查出路
    }
}

// 重新跳崖
function XuanYaFunc(){
	go("event_1_4788477;nw;w;sw;w;n;n;n;w;w;s;w;nw;w;e;ne;ne;ne;e;e;e;e;e;s;e;event_1_44025101");
    setTimeout(XiaKeFunc,2000);
    // 2秒后检查出路
}
//----------------------
function cyh(){//参岩画
	if (confirm("你确定自己的悟性达到125了吗？注意，如果遇到拦路npc请重新点击参岩画按钮")) {
	           setTimeout(canyanhua,200);
            }
            else {
                alert("悟性不达标，取消参岩画。先去打把风泉剑再来吧");
            }
}
// 判断出路
function canyanhua(){
    if ($('span.outtitle')[0].innerText != "阴山岩画")		// 重新走
        yanhua_go();
    else if ($('span.outtitle')[0].innerText == "阴山岩画")	// 点击参看
    {
		go("event_1_12853448;home");
    }
    else{
        setTimeout(canyanhua,2000);		// 1秒后重新检查出路
    }
}

// 重新走路
function yanhua_go(){
	go("jh 26;w;w;n;w;w;w;n;n;e;e;");
    setTimeout(canyanhua,2000);
    // 1秒后检查出路
}
//-------------------------
function ck(){//采矿

	go("jh 26;w;w;n;e;e;event_1_18075497");
}
function wxt(){//挖玄铁
	go("jh 35;nw;nw;nw;n;ne;nw;w;nw;e;e;e;e;e;se;n;n;w;n;w;event_1_53278632;sousuo;sousuo;");
}
function byg(){//冰月谷
go("jh 14;w;n;n;n;n;");
}
function cl(){//采莲
    go("jh 2;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;e;n;n;n;w;event_1_31320275");
       }
function qdc(){//去赌场
    go("jh 2;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;w;w;w;w;w;touzi;");
}
function shijian(){//试剑
    clickButton('swords');
    clickButton('swords select_member huashan_feng');   //风清扬
    clickButton('swords select_member gumu_yangguo'); //神雕大侠
    clickButton('swords select_member taoist_zhangtianshi'); //张天师
    clickButton('swords fight_test go');
    setTimeout(Shijian1,1000);//code
}
function Shijian1(){
    if( isContains($('span:contains(你今天)').text().slice(-12), '你今天试剑次数已达限额。')){
        console.log('打完收工！');
    }
    else{clickButton('swords fight_test go');
         ninesword();
         setTimeout(Shijian1,1000);//code
        }
}
//----------------------------
function kdt(){//开答题
    if(btnList["开答题"].innerText == "开答题"){
        console.log("准备自动答题！");
        answerQuestionsInterval = setInterval(answerQuestions, 400);
        btnList["开答题"].innerText = "停答题";
    }else{
        console.log("停止自动答题！");
        btnList["开答题"].innerText = "开答题";
        clearInterval(answerQuestionsInterval);
    }
}
function answerQuestions(){
    if($('span:contains(每日武林知识问答次数已经)').text().slice(-46) == "每日武林知识问答次数已经达到限额，请明天再来。每日武林知识问答次数已经达到限额，请明天再来。") {
        // 今天答题结束了
        console.log("完成自动答题！");
        btnList["开答题"].innerText = "开答题";
        clearInterval(answerQuestionsInterval);
    }
    clickButton('question');
    setTimeout(getAndAnsQuestion, 200); // 200 ms之后提取问题，查询答案，并回答
}

function getAndAnsQuestion(){
    // 提取问题
    //alert($(".out").text());
    var theQuestion = A = $(".out").text().split("题")[1].split("A")[0];
    // 左右去掉空格

    //var theQuestion = A = $(".out").text();
    //theQuestion=theQuestion.split("题")[1];
    //theQuestion=theQuestion.split("A.")[0];
    theQuestion=theQuestion.replace( /^\theQuestion*/, "");
    theQuestion=theQuestion.replace( /\theQuestion*$/, "");
    theQuestion=theQuestion.slice(1);
    //theQuestion = theQuestion.trim(" ","left").trim(" ","right");
    //alert(theQuestion);
    // 查找某个问题，如果问题有包含关系，则
    var theAnswer = getAnswer2Question(theQuestion);
    if (theAnswer !== "failed"){
        eval   ("clickButton('question " + theAnswer + "')");
    }/* if (theAnswer == "failed"){
        alert("意外卡顿，请重启开答题或者手动答此题！");
        console.log("停止自动答题！");
        btnList["开答题"].innerText = "开答题";
        clearInterval(answerQuestionsInterval);
        return;
    }  */
    setTimeout(printAnswerInfo, 150);

}
function printAnswerInfo(){
    console.log("完成一道武林知识问答：" );
    console.log($('span:contains(知识问答第)').text().split("继续答题")[0]);
}
function getAnswer2Question(localQuestion){
    // 如果找到答案，返回响应答案，a,b,c或者d
    // 如果没有找到答案，返回 "failed"

    var resultsFound = [];
    var countor = 0;
    for(var quest in QuestAnsLibs){
        if (isContains(quest, localQuestion)){ //包含关系就可
            resultsFound[countor] = quest;
            countor = countor +1;
        }else if(isContains(quest, localQuestion.replace("npc","")) || isContains(quest, localQuestion.replace("NPC",""))){

        }

    }
    if(resultsFound.length ==1){
        return QuestAnsLibs[resultsFound[0]];
    }
    else {
        console.log("题目 " + localQuestion + " 找不到答案或存在多个答案，请手动作答！");
        return "failed";
    }
}
//---------------------------------
function qsd(){//去射雕
	go("jh 28;n;w;w;w;w;w;w;nw;ne;nw;ne;nw;ne;e;");
	chuzhao_open();
	qsd_go=setInterval(function(){clickButton('shediao', 0)},300);
	setTimeout(qsd1,3500);
}
function qsd1(){
	if($('span.out2:contains(臂力达到87以上才能射雕。)').length>0)
	{
		clearInterval(qsd_go);
		go('home');
	}
	if($('span.out2:contains(金凤凰不敌你，匆匆逃走之际留下了一个凤凰蛋壳。)').length>0)
	{
		clearInterval(qsd_go);
		go('home');
	}
	if($('span.out2:contains(每次射雕需要白羽箭，你目前没有箭。)').length>0)
	{
		clearInterval(qsd_go);
		go('home');
	}
	if($('span.out2:contains(你今天已经收获累累，同时也消耗了大量元气和体力，请大侠隔日再来射雕。)').length>0)
	{
		clearInterval(qsd_go);
		go('home');
	}
}
//撩奇侠------------------------------------------------------------------------
var askTimes = 0,
qixiaCode = [
	"玄月研",
	 "王蓉",
	 "狼居胥",
     "庞统",
     "烈九州",
	 "步惊鸿",
	 "穆妙羽",
	 "宇文无敌",
	 "李玄霸",
	 "护竺",
	 "八部龙将",
	 "风无痕",
    "浪唤雨",
    "李宇飞",
	"风行骓",
	"郭济",
    "吴缜",
    "风南",
    "火云邪神",
    "逆风舞",
    "狐苍雁",
	"厉沧若",
	"夏岳卿",
	"妙无心",
	"巫夜姬"
]; 
function getqixiacode(){
	clickButton('open jhqx');
	setTimeout(function(){
	var t=$("#out td a");
        if(t.text().indexOf('步惊鸿')>-1){
		var qxi=0;
        for(var i=0;i<t.length;i++){
			if(t[i].innerText!="朱果"){
            qixiaCode[t[i].innerText]=qxi;
			//console.log(t[i].innerText+"--"+qxi);
			qxi++;
			}
        }
		console.log('奇侠代码已获取数量：'+qixiaCode.length);
    }
	},300);
}
var qxList='',qxList_input='';
function lqx_go(){
qxOrder = 0;
getqixiacode();   

setTimeout(function(){
	if(qixiaCode.length>20){
		goSwordsman();
	}
    },500
	);
}
function lqx(){

if(rwjname == '撩奇侠'){
	
if(userqu!=21){

if(qxList==''){
qxList_input = prompt("请输入撩奇侠顺序（中文分号隔开）",qxList_inputs);
qxList = qxList_input.split("；");
}
qixia_nofound=[];
lqx_go();
go_delay=200;
}
	else{alert("抱歉，你所在的区暂不开放撩奇侠功能")};
}
else{
console.log(".不要慌，还没撩完呢");	
}	
}

function goSwordsman() {
	if(qxOrder<qxList.length){
    go('find_task_road qixia ' + qixiaCode[qxList[qxOrder]]);
	}
    setTimeout(askSwordsman, 300)
}
var qixia_nofound=[];
function askSwordsman() {
    if (qxOrder < qxList.length) {
        var a = 0;
        askTimes = askTimes + 1;
        if (askTimes > 5) {
            console.log('.'+qxList[qxOrder] + "没找到");
			qixia_nofound.push(qxList[qxOrder]);
            askTimes = 0;
			qxOrder++;
            goSwordsman();
            return
        }
        var b = $("#out .cmd_click3");
        for (var i = 0; i < b.length; i++) {
            var c = b[i].innerText;
            if (qxList[qxOrder] == c) {
                a = 1;
                askTimes = 0;
                console.log(".对话 " + qxList[qxOrder]);
                var d = b[i].getAttribute('onclick').split("'")[1].split(" ")[1];
                var e = 'ask ' + d;
				nextgo = function () {
                    qxOrder++;
                     goSwordsman();
                };
                go(e + ';' + e + ';' + e + ';' + e + ';' + e);
                return
            }
        }
        if (a === 0) setTimeout(function () {
            askSwordsman()
        }, 100)
    } else {
        askTimes = 0;
		if(qixia_nofound.length==0){
			console.log(".撩奇侠结束");
			qxList="";
			go_delay=150;
			go('home');	
			setTimeout(function(){words1("撩奇侠结束！");},400);
		}
		else{ 
		qxList=qixia_nofound;
		words1(".本次剩余以下奇侠未撩:---"+qxList);
		go('home');	  
		qx_bstime=setTimeout(qixia_nowtask,200000);
		words1(".askSwordsman:目前奇侠暂未撩完，延迟3分钟后继续");					
		}
        
    }
}

function qixia_nowtask(){
	if(!is_fighting){
									   clearTimeout(qx_bstime);
						                     qixia_nofound=[];
                                             lqx_go();
											 return;
				                                }
			 else  {
				 clearTimeout(qx_bstime);
				 qx_bstime=setTimeout(qixia_nowtask,200000);
				 words1(".qixia_nowtask:目前奇侠暂未撩完，延迟3分钟后继续");
				   }
}
function clearmt(){//清谜题
	go('auto_tasks cancel');
}
//-------------------------清背包------------------------------------
function clearBag() {
    clickButton('items', 0);
    window.setTimeout(clearitem, 300)
}
var items_sell = '拂尘桃符纸粗布衣长虹剑暗箭银丝鞋叫化鸡丝绸衣钢刀闪避基础银丝帽玉竹杖中级拆招技巧金戒冰魄银针禅杖拂尘蛇胆草皮帽旧书粉红绸衫玄苏剑青葫芦松子铁斧水蜜桃蓑衣破弯刀柴刀丝衣长鞭道德经布裙钢丝甲衣牛皮带制服金刚杖斩空刀拜月掌套金弹子新月棍白蟒鞭-草莓玉蜂浆玉蜂蜜蜂浆瓶豆浆蛋糕菠菜粉条包裹鸡叫草水密桃--新月棍银簪重甲羊角匕梅花匕日月神教腰牌船篙-丝绸马褂白缨冠白色长袍蛇杖鬼头刀拐杖古铜缎子袄裙大环刀鹿皮手套丝绸衣羊毛裙牧羊鞭牛皮酒袋麻带钢剑钢杖藤甲盾长斗篷军袍破披风木盾铁盾锦缎腰带鞶革青色道袍-鲫鱼鲤鱼树枝水草破烂衣服-鹿皮小靴青绫绸裙布衣草帽草鞋布鞋精铁甲-柳玉刀玉竹剑钢刀戒刀单刀长剑长枪铁锤木棍轻罗绸衫兽皮鞋皮鞭铁棍飞镖匕首细剑绣鞋绣花小鞋狼皮雪靴铁戒银戒铁手镯银手镯铁项链银项链';
var items_store = '玄重铁分身卡鱼竿鱼饵百宝令江湖令师门令谜题令正邪令黄金钥匙突破加速卡玄铁令状元贴白银宝箱黄金宝箱高级突破丹高级乾坤袋装备打折卡碎片武穆遗书';
var items_use = '狂暴丹大还丹小还丹百年紫芝百年灵草高级乾坤再造丹高级小还丹玫瑰花神秘宝箱冰镇酸梅汤';
var items_study = '左手兵刃研习';

function clearitem() {
    go_st = 0;
    od = [];
    var t = $("tr[bgcolor]:contains(两)").siblings();
    if (t.length > 0) {
        for (var i = 0; i < t.length; i++) {
            if (t.eq(i)[0].innerText.replace(/\s+/g, "") != "") {
                var a = t.eq(i).find('td')[0].innerText.replace('\n', "");
                var b = parseInt(t.eq(i).find('td')[1].innerText.match(/\d+/g)[0]);
                var c = t[i].getAttribute('onclick').split("'")[1].split("info ")[1];
                if (items_store.indexOf(a) != -1) {
                    console.log("存仓库：" + a + " 数量：" + b);
                    od.push('items put_store ' + c)
                } else if (items_use.indexOf(a) != -1) {
                    console.log("使用：" + a + " 数量：" + b);
                    for (j = 0; j < b; j++) {
                        od.push('items use ' + c)
                    }
                } else if (items_study.indexOf(a) != -1) {
                    console.log("学习：" + a + " 数量：" + b);
                    for (j = 0; j < b; j++) {
                        od.push('study ' + c)
                    }
                } else if (items_sell.indexOf(a) != -1) {
                    console.log("卖掉：" + a + " 数量：" + b);
                    for (j = 0; j < b; j++) {
                        od.push('items sell ' + c)
                    }
                }
                if (a.indexOf('宝石') != -1) {
                    console.log("存仓库：" + a + " 数量：" + b);
                    od.push('items put_store ' + c)
                }
                if (a.indexOf('基础') != -1 || a.indexOf('进阶') != -1 || a.indexOf('长衫') != -1 || a.indexOf('袈裟') != -1 || a.indexOf('圣衣') != -1 || a.indexOf('道袍') != -1) {
                    console.log("卖掉：" + a + " 数量：" + b);
                    for (j = 0; j < b; j++) {
                        od.push('items sell ' + c)
                    }
                }
            }
        }
    }
    od.push('prev');
    go_delay = 300;
    go_rt();
}

//--------------------------点vip-------------------------------------
function vip(){
	//go("vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_family;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_clan;vip finish_big_task;vip finish_big_task;vip finish_big_task;vip finish_big_task;vip finish_big_task;vip finish_big_task;vip finish_big_task;vip finish_big_task;vip finish_big_task;vip finish_big_task;vip finish_taofan 2;vip finish_taofan 2;vip finish_taofan 2;vip finish_taofan 2;vip finish_taofan 2;vip finish_dig;vip finish_dig;vip finish_dig;vip finish_dig;vip finish_dig;vip finish_dig;vip finish_dig;vip finish_dig;vip finish_dig;vip finish_dig;vip finish_fb dulongzhai;vip finish_fb dulongzhai;vip finish_fb junying;vip finish_fb junying;vip finish_fb beidou;vip finish_fb beidou;vip finish_fb youling;vip finish_fb youling;sort fetch_reward;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;clan incense yx;");
       clear();
	   for(var i=0;i<25;i++)
	   {
		 od[i]="vip finish_family";
	   }
	   for(var i=25;i<45;i++)
	   {
		 od[i]="vip finish_clan";
	   }
	   for(var i=45;i<55;i++)
	   {
		 od[i]="vip finish_big_task";
	   }
	   for(var i=55;i<60;i++)
	   {
		 od[i]="vip finish_taofan 2";
	   }
	   for(var i=60;i<70;i++)
	   {
		 od[i]="vip finish_dig";
	   }
	   for(var i=70;i<72;i++)
	   {
		 od[i]="vip finish_fb dulongzhai";
	   }
	   for(var i=72;i<74;i++)
	   {
		 od[i]="vip finish_fb junying";
	   }
	   for(var i=74;i<76;i++)
	   {
		 od[i]="vip finish_fb beidou";
	   }
	   for(var i=76;i<78;i++)
	   {
		 od[i]="vip finish_fb youling";
	   }
	   for(var i=78;i<79;i++)
	   {
		   od[i]="vip drops";
	   }
	   for(var i=79;i<80;i++)
	   {
		 od[i]="sort fetch_reward";
	   }
	   for(var i=80;i<100;i++)
	   {
		 od[i]="clan incense yx";
	   }
	   go_rt();   //调用即刻执行函数
	}
//-----------
function recoveryall(){
	clear();
	   for(var i=0;i<10;i++)
	   {
		 od[i]="items use snow_qiannianlingzhi";
	   }
	   for(var i=10;i<30;i++)
	   {
		 od[i]="recovery";
	   }
	   for(var i=30;i<40;i++)
	   {
		   od[i]="items use snow_qiannianlingzhi";
	   }
		   go_rt();
}

function killmibao(){
	go('jh 2;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;n;w;s;s;s;s;e;event_1_2215721;w');
}	

    console.log("当前出招技能:"+mySkillLists);
    var quid1="11-15"; //初始值
    var quid="["+quid1+"区]"//初始值
	console.log("当前区段设置为:"+quid+"请在总设置里自行更改");
// 战斗总设置 ------------------------------------------------------------------------------------------------------
    function setAll(){
		quid1=prompt("输入你所在的区段号",quid1);
		quid="["+quid1+"区]";
        mySkillLists = prompt("请输入自动出招技能（用英文格式的分号隔开）", mySkillLists);
		playwarn();
    }
function playwarn(){//播放音乐
	var music=new Audio("http://playdreamer.cn/qlyxqj/jijiao.mp3");
	music.play()
}
//-----------地图集dtjfunc---------------------------
//---------------------地图集dtj---------------------
//var jishi = setInterval(dtj, 500);
var dtjname = '';
//createButton1('地图集', dtjfunc);
var dtj_popbk = createPop('地图集');
popList['地图集'].innerHTML = '<div>请选择你要去的地图</div>';
function dtj_addbtns() {
    var a = ['雪亭镇',  '洛阳', '华山村', '华山', '扬州', '丐帮', '乔阴县','峨眉山', '恒山', '武当山','晚月庄', '水烟阁', '少林寺', '唐门', '青城山', '逍遥林', '开封', '明教', '全真教', '古墓' ,'白驼山', '嵩山', '寒梅庄', '泰山', '大旗门', '大昭寺', '魔教', '星宿海', '茅山', '桃花岛', '铁雪山庄', '慕容山庄', '大理', '断剑山庄', '冰火岛', '侠客岛'];
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = document.createElement('button');
        b[i].style.padding = '0';
        b[i].style.margin = '5px 0 0 5px';
        b[i].style.width = '60px';
        b[i].style.height = '20px';
		b[i].style.background = ground;
		b[i].style.color = color;
		b[i].style.borderStyle = 'outset';
        b[i].innerHTML = a[i];
        popList['地图集'].appendChild(b[i]);
        b[i].onclick = function (i) {
            dtj_popbk.style.display = 'none';
            dtjname = this.innerHTML;
			if(dtjname=="雪亭镇"){go("jh 1");}
			if(dtjname=="洛阳"){go("jh 2");}
			if(dtjname=="华山村"){go("jh 3");}
			if(dtjname=="华山"){go("jh 4");}
			if(dtjname=="扬州"){go("jh 5");}
			if(dtjname=="丐帮"){go("jh 6");}
			if(dtjname=="乔阴县"){go("jh 7");}
			if(dtjname=="峨眉山"){go("jh 8");}
			if(dtjname=="恒山"){go("jh 9");}
			if(dtjname=="武当山"){go("jh 10");}
			if(dtjname=="晚月庄"){go("jh 11");}
			if(dtjname=="水烟阁"){go("jh 12");}
			if(dtjname=="少林寺"){go("jh 13");}
			if(dtjname=="唐门"){go("jh 14");}
			if(dtjname=="青城山"){go("jh 15");}
			if(dtjname=="逍遥林"){go("jh 16");}
			if(dtjname=="开封"){go("jh 17");}
			if(dtjname=="明教"){go("jh 18");}
			if(dtjname=="全真教"){go("jh 19");}
			if(dtjname=="古墓"){go("jh 20");}
			if(dtjname=="白驼山"){go("jh 21");}
			if(dtjname=="嵩山"){go("jh 22");}
			if(dtjname=="寒梅庄"){go("jh 23");}
			if(dtjname=="泰山"){go("jh 24");}
			if(dtjname=="大旗门"){go("jh 25");}
			if(dtjname=="大昭寺"){go("jh 26");}
			if(dtjname=="魔教"){go("jh 27");}
			if(dtjname=="星宿海"){go("jh 28");}
			if(dtjname=="茅山"){go("jh 29");}
			if(dtjname=="桃花岛"){go("jh 30");}
			if(dtjname=="铁雪山庄"){go("jh 31");}
			if(dtjname=="慕容山庄"){go("jh 32");}
			if(dtjname=="大理"){go("jh 33");}
			if(dtjname=="断剑山庄"){go("jh 34");}
			if(dtjname=="冰火岛"){go("jh 35");}
			if(dtjname=="侠客岛"){go("jh 36");}
            btnList['地图集'].innerText = '地图集'
        }
    }
}
dtj_addbtns();

function dtjfunc() {
    if (btnList['地图集'].innerText == '地图集') {
        dtj_popbk.style.display = ""
    } else {
        //clearInterval(jishi);
        btnList['地图集'].innerText = '地图集'
    }
}
//---------------------正邪图zxt---------------------
//var jishi = setInterval(zxt, 500);
var zxtname = '';
//createButton1('正邪图', zxtfunc);
var zxt_popbk = createPop('正邪图');
popList['正邪图'].innerHTML = '<div>请选择你要去的正邪地点</div>';

function zxt_addbtns() {
    var a = ['打铁铺子',  '桑邻药铺', '书房', '南市', '绣楼', '北大街', '钱庄', '杂货铺','祠堂大门', '厅堂'];
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = document.createElement('button');
        b[i].style.padding = '0';
        b[i].style.margin = '5px 0 0 5px';
        b[i].style.width = '60px';
        b[i].style.height = '20px';
		b[i].style.background = ground;
		b[i].style.color = color;
		b[i].style.borderStyle = 'outset';
        b[i].innerHTML = a[i];
        popList['正邪图'].appendChild(b[i]);
        b[i].onclick = function (i) {
            zxt_popbk.style.display = 'none';
            zxtname = this.innerHTML;
			if(zxtname=="打铁铺子"){datie();}
			if(zxtname=="桑邻药铺"){sangling();}
			if(zxtname=="书房"){shufang();}
			if(zxtname=="南市"){nanshi();}
			if(zxtname=="绣楼"){xiulou();}
			if(zxtname=="北大街"){beidajie();}
			if(zxtname=="钱庄"){qianzhuang();}
			if(zxtname=="杂货铺"){zahuo();}
			if(zxtname=="祠堂大门"){citang();}
			if(zxtname=="厅堂"){tingtang();}
            btnList['正邪图'].innerText = '正邪图'
        }
    }
}
zxt_addbtns();

function zxtfunc() {
    if (btnList['正邪图'].innerText == '正邪图') {
        zxt_popbk.style.display = ""
    } else {
        //clearInterval(jishi);
        btnList['正邪图'].innerText = '正邪图'
    }
}
function datie(){
	go("jh 1;e;n;n;w;");
}
function sangling(){
	go("jh 1;e;n;n;n;w;");
}
function shufang(){
	go("jh 1;e;n;e;e;e;e;n;");
}
function nanshi(){
	go("jh 2;n;n;e;");
}
function xiulou(){
	go("jh 2;n;n;n;n;w;s;w;");
}
function beidajie(){
	go("jh 2;n;n;n;n;n;n;n;");
}
function qianzhuang(){
	go("jh 2;n;n;n;n;n;n;n;e;");
}
function zahuo(){
	go("jh 3;s;s;e;");
}
function citang(){
	go("jh 3;s;s;w;");
}
function tingtang(){
	go("jh 3;s;s;w;n");
}
//---------------------去秘境qmjfunc---------------------
//var jishi = setInterval(qmj, 500);
var qmjname = '';
//createButton1('去秘境', qmjfunc);
var qmj_popbk = createPop('去秘境');
popList['去秘境'].innerHTML = '<div>请选择你要去的秘境地图</div>';

function qmj_addbtns() {
    var a = ['山坳', '石街','桃花泉', '潭畔草地', '长空栈道','临渊石台', '千尺幢', '玉女峰', '猢狲愁', '沙丘小洞', '九老洞', '悬根松', '夕阳岭', '青云坪', '湖边','玉壁瀑布','碧水寒潭','悬崖','寒水潭','戈壁','卢崖瀑布','启母石','无极老姆洞','山溪畔','奇槐坡','小洞天','天梯','云步桥','观景台','危崖前','草原','无名山峡谷'];
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = document.createElement('button');
        b[i].style.padding = '0';
        b[i].style.margin = '5px 0 0 5px';
        b[i].style.width = '60px';
        b[i].style.height = '20px';
		b[i].style.background = ground;
		b[i].style.color = color;
		b[i].style.borderStyle = 'outset';
        b[i].innerHTML = a[i];
        popList['去秘境'].appendChild(b[i]);
        b[i].onclick = function (i) {
            qmj_popbk.style.display = 'none';
            qmjname = this.innerHTML;
			if(qmjname=="山坳"){sa();}
			if(qmjname=="石街"){sj();}
			if(qmjname=="桃花泉"){thq();}
			if(qmjname=="潭畔草地"){tpcd();}
			if(qmjname=="长空栈道"){ckzd();}
			if(qmjname=="临渊石台"){lyst();}
			if(qmjname=="千尺幢"){qct();}
			if(qmjname=="玉女峰"){ynf();}
			if(qmjname=="猢狲愁"){hsc();}
			if(qmjname=="沙丘小洞"){sqxd();}
			if(qmjname=="九老洞"){jld();}
			if(qmjname=="悬根松"){xgs();}
			if(qmjname=="夕阳岭"){xyl();}
			if(qmjname=="青云坪"){qyp();}
			if(qmjname=="湖边"){hb();}
			if(qmjname=="玉壁瀑布"){ybpb();}
			if(qmjname=="碧水寒潭"){bsht();}
			if(qmjname=="悬崖"){xy();}
			if(qmjname=="寒水潭"){hst();}
			if(qmjname=="戈壁"){gb();}
			if(qmjname=="卢崖瀑布"){lypb();}
			if(qmjname=="启母石"){qms();}
			if(qmjname=="无极老姆洞"){wjlmd();}
			if(qmjname=="山溪畔"){sxp();}
			if(qmjname=="奇槐坡"){qhp();}
			if(qmjname=="小洞天"){xdt();}
			if(qmjname=="天梯"){tt();}
			if(qmjname=="云步桥"){ybq();}
			if(qmjname=="观景台"){gjt();}
			if(qmjname=="危崖前"){wyq();}
			if(qmjname=="草原"){cy();}
			if(qmjname=="无名山峡谷"){wmsxg();};
            btnList['去秘境'].innerText = '去秘境'
        }
    }
}
qmj_addbtns();

function qmjfunc() {
    if (btnList['去秘境'].innerText == '去秘境') {
        qmj_popbk.style.display = ""
    } else {
        //clearInterval(jishi);
        btnList['去秘境'].innerText = '去秘境'
    }
}
//长空栈道千尺幢玉女峰猢狲愁沙丘小洞九老洞悬根松夕阳岭青云坪湖边玉壁瀑布碧水寒潭悬崖寒水潭戈壁卢崖瀑布
//启母石无极老姆洞山溪畔奇槐坡小洞天天梯云步桥观景台危崖前草原无名山峡谷
function sa(){//山坳
    go("jh 1;e;n;n;n;n;n;find_task_road secret");
       }
function sj(){//石街
    go("jh 2;n;n;n;n;w;event_1_98995501;n;find_task_road secret");
       }
function thq(){//桃花泉
go("jh 3;s;s;s;s;s;nw;n;n;e;find_task_road secret");
}
function tpcd(){// 潭畔草地
    go("jh 4;n;n;n;n;n;n;n;event_1_91604710;s;s;s;find_task_road secret");
}
function lyst(){// 临渊石台
    go("jh 4;n;n;n;n;n;n;n;n;n;e;n;find_task_road secret");
}
function ckzd(){// 长空栈道
    go("jh 4;n;n;n;n;n;n;n;n;n;e;find_task_road secret");
}
function qct(){// 千尺幢
    go("jh 4;n;n;n;n;find_task_road secret");
}
function ynf(){// 玉女峰
    go("jh 4;n;n;n;n;n;n;n;n;w;find_task_road secret");
}
function hsc(){// 猢狲愁
    go("jh 4;n;n;n;n;n;n;e;n;n;find_task_road secret");
}
function sqxd(){// 沙丘小洞
    go("jh 6;event_1_98623439;ne;n;ne;ne;ne;event_1_97428251;find_task_road secret");
}
function jld(){//九老洞
 if ($('.cmd_click_room')[0] === undefined || $('.cmd_click_room')[0].innerText !== "山门广场"){
        alert("请位于 #山门广场# 位置再点 #九老洞# 按钮！");
        return;
}
    go("n;n;n;w;n;n;n;n;n;n;n;n;n;nw;sw;w;nw;w;find_task_road secret");
}
function xgs(){// 悬根松
    go("jh 9;n;w;find_task_road secret");
}
function xyl(){// 夕阳岭
    go("jh 9;n;n;e;find_task_road secret");
}
function qyp(){// 青云坪
    go("jh 13;e;s;s;w;w;find_task_road secret");
}
//长空栈道千尺幢玉女峰猢狲愁沙丘小洞九老洞悬根松夕阳岭青云坪湖边玉壁瀑布碧水寒潭悬崖寒水潭戈壁卢崖瀑布
//启母石无极老姆洞山溪畔奇槐坡小洞天天梯云步桥观景台危崖前草原无名山峡谷
function hb(){// 湖边
    go("jh 16;s;s;s;s;e;n;e;event_1_5221690;s;w;find_task_road secret");
}
function ybpb(){// 玉壁瀑布
    go("jh 16;s;s;s;s;e;n;e;find_task_road secret");
}
function bsht(){// 碧水寒潭
    go("jh 18;n;nw;n;n;n;n;n;ne;n;n;n;n;n;e;e;se;se;e;find_task_road secret");
}
function xy(){// 悬崖
    go("jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;s;e;find_task_road secret");
}
function hst(){// 寒水潭
    go("jh 20;w;w;s;e;s;s;s;s;s;sw;sw;s;e;se;find_task_road secret");
}
function gb(){// 戈壁
    go("jh 21;find_task_road secret");
}
function lypb(){// 卢崖瀑布
    go("jh 22;n;n;n;n;e;n;find_task_road secret");
}
function qms(){// 启母石
    go("jh 22;n;n;w;w;find_task_road secret");
}
function wjlmd(){// 无极老姆洞
    go("jh 22;n;n;w;n;n;n;n;find_task_road secret");
}
function sxp(){// 山溪畔
    go("jh 22;n;n;w;n;n;n;n;event_1_88705407;s;s;find_task_road secret");
}
function qhp(){// 奇槐坡
    go("jh 23;n;n;n;n;n;n;n;n;find_task_road secret");
}
function tt(){// 天梯
    go("jh 24;n;n;n;find_task_road secret");
}
function xdt(){// 小洞天
    go("jh 24;n;n;n;n;e;e;;find_task_road secret");
}
function ybq(){// 云步桥
    go("jh 24;n;n;n;n;n;n;n;n;n;find_task_road secret");
}
function gjt(){// 观景台
    go("jh 24;n;n;n;n;n;n;n;n;n;n;n;n;e;e;n;find_task_road secret");
}
function wyq(){// 危崖前
    go("jh 25;w;find_task_road secret");
}
function cy(){// 草原
    go("jh 26;w;find_task_road secret");
}
function wmsxg(){// 无名山峡谷
    go("jh 29;n;n;n;n;event_1_60035830;find_task_road secret");
}
words1("除黑名单外全区的奇侠功能已经开放！");
words2("除黑名单外全区的奇侠功能已经开放！");
words3("除黑名单外全区的奇侠功能已经开放！");