eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 15(s){7 b=x.17(\'18\').v(\'V\');q(7 i=0;i<b.8;i++){3(b[i].1A.1k(/<[^>]+>/g,"").9(s)>-1){b[i].1L();I}}}7 B=\'\';5 1l(s){q(7 i=$("a[1j]").8-1;i>0;i--){7 a=x.v("a")[i].X;3(a.9(s)!=-1){C=i;i=1}}3(1H C!="1r"&&x.v("a")[C].X.9(s)!=-1){f.h("正在点击传送链接："+s);B=x.v("a")[C].1i(\'1j\').6("\'")[1];f.h(B);J(B)}4{f.h("没有此传送链接")}}7 K="醉汉的尸体";5 1h(){$("V.1v").1y(5(){3(1g($(1f).1G(),K))1e($(1f).1o("1d").1k("1t 1c","1w 1c"))})}5 1g(a,b){I a.9(b)>=0}7 Q;5 1a(n){7 b=x.17(\'18\').v(\'V\');q(7 i=0;i<b.8;i++){3(b[i].X==n){Q=b[i].1i(\'1d\').6("\'")[1].6(" ")[1];I}}}7 19=1,o=0,d="",e=[],l=14,j=1x;5 P(a){7 b=a.6(";");3(19&&j){e=e.1z(b);3(!l)H()}4{q(7 c=0;c<b.8;c++)S(b[c])}}5 H(){7 a=e.1b();7 b=a.6(";");3(!1n){I}S(b[0]);q(7 i=b.8-1;i>0;i--){e.1N(b[i])}3(e.8>0){l=p(H,j)}4{l=1;p(5(){3(e.8==0)l=0;4 H()},j)}}5 1q(){A(l);l=0;e=[]}7 10=5(){},M=5(){},N=5(){},L,y;5 11(){3(!12&&e.8==0){A(L);10()}4{A(L);L=p(11,13)}}5 F(){3(l==14){A(y);f.h(\'检测得\'+e.8+"没有战斗，进行后面操作");M()}4 3(12){E.1K(16+"正在激烈战斗中。。。"+D);y=p(F,W)}4 3(!l==1p){f.h("正在做任务，请等待本任务完成:"+e.8);y=p(F,W)}4{A(y);M()}}5 U(s){E.R(1s+s+"\\n"+D)}5 Z(s){E.R(1u+s+"\\n"+D)}5 O(s){E.R(16+s+"\\n"+D)}7 r=0,t="",u=0,z=0,w=[];5 S(s){3(s==\'#1B\'){r=1}4 3(s==\'#1C\'){r=0;z--}4 3(s.9(\'=\')>-1){j=1D(s.6(\'=\')[1])}4 3(s.9(\'.\')>-1){f.h(s.6(\'.\')[1])}4 3(s.9(\'!\')>-1){3(s.6(\'!\')[0]!=\'\'){3(s.6(\'!\')[0]==\'1\'){Z(s.6(\'!\')[1])}4 3(s.6(\'!\')[0]==\'2\'){O(s.6(\'!\')[1])}4{U(s.6(\'!\')[1])}}4{U(s.6(\'!\')[1])}}4 3(s.9(\'?\')>-1){3(s.6(\'?\')[0]!=\'\'){1a(s.6(\'?\')[1]);J(s.6(\'?\')[0]+\' \'+Q)}4{15(s.6(\'?\')[1])}}4 3(s.9(\'@\')>-1){K=s.6(\'@\')[1];1h();f.h(\'摸取\'+K)}4 3(s.9(\'~\')>-1){J(\'1E\')}4 3(s.9(\'^\')>-1){N=1e(s.6(\'^\')[1])}4 3(s.9(\'$\')>-1){N();3(s.6(\'$\')[0]==\'0\'){N=5(){}}}4 3(s.9(\'+\')>-1){1l(s.6(\'+\')[1])}4{J(s)}}5 T(){3(o<d.8){P(d[o]);o++;3(o<d.8){M=5(){T()};p(F,d[(o-1)].6(\';\').8*j+1F)}4 3(o==d.8){o=0}}}7 m=[];5 Y(){3(m.8==0){m=w}3(r==0&&m.8>0){f.h(\'执行\'+m[0].1I(0,1J)+\'...\');G(m[0]);m.1b();3(m.8==0){1m()}}4{p(Y,W)}}5 1m(){f.h("清空锁存数组！");z=0;r=0;t="";u=0;z=1;w=[]}5 G(s){3(r==0){d=s;3(d.9(\'|\')>-1){d=d.6(\'|\');7 a=0;O(\'进入了打怪指令模式\');T()}4{P(d)}}4 3(r==1){3(t==\'\'){t=s;w[0]=t}4 3(t!=\'\'){u++;z=u;w[u]=s}p(Y,13)}}5 1M(a){7 b=(a/j);f.h("延时中，等待"+b*j+"毫秒");q(7 k=0;k<a/j;k++){G("")}}5 1O(a,b){q(7 i=0;i<b;i++){G(a)}}',62,113,'|||if|else|function|split|var|length|indexOf||||str|cmdCache|console||log||cmdDelayTime||timeCmd|nowlockod||go_num|setTimeout|for|go_lock||go_locked|go_lockednum|getElementsByTagName|go_lockedod|document|bs_time|now_lockednum|clearTimeout|href_code|last|NOR|g_gmain|checkbusy|go|delayCmd|return|clickButton|targetName|task_time|nextdo|nextgo|words3|go_start|npc_id|recvNetWork2|go_single|go_str|words1|button|1000|innerText|tell_lockover|words2|nexttask|checktask|is_fighting|2000|null|clickbtn|HIR|getElementById|out|isDelayCmd|getnpcid|shift|corpse|onclick|eval|this|isContains|AutoGet|getAttribute|href|replace|clickhref|newgo_reset|sock|attr|false|stopDelayCmd|undefined|HIW|look_item|HIG|cmd_click3|get|150|each|concat|innerHTML|on|off|parseInt|golook_room|3000|html|typeof|substr|40|notify_fail|click|delay|unshift|goes'.split('|'),0,{}));	

//----------------------------------6.3new go库函数-----------------
/**
created by daozhang on 2018/10/2
使用说明:
普通指令用 ;隔开
打怪后一个指令必须加 | 隔开
当前go执行已经包含了打怪指令，下次还要接着用另外的go，需要加锁与解锁
#on;  加锁
#off;  解锁
.xxx;  日志打印xxx
!xxx; 或者o!xxx o代表1或者2或者其他   游戏内提示xxx,!前面带1为绿色，带2为红色，其他默认白色
?xxx;   按下某个xxx文字的按钮
xxx?ooo 对ooo名字的npc进行xxx操作
;       空白内容纯;表示执行一次空指令，每个;可起到延时一次的作用
@xxx;   摸下某个人尸体并且捡起来东西;核心:摸尸体前必然经历过战斗，|之后紧跟prev_combat;@xxx尸体;
~;      特殊封装符号，表示观察一下
^xxx;   特殊指令,xxx表示一个不带参数的函数名，比如 function test(){} 这里就是 go('^test');只能在最后一个go末尾使用,将这个函数传递给nextgo;
$;     特殊功能指令，表示立即执行nextgo.如果$前面带0将会执行完毕后重置nextgo函数为空
=xxx;   将全局间隔延时设置为xxx毫秒，比如go('=300;n;n;n;w;=150');表示把延时间隔改为300后走几步路，完了再改回150
+xxx;   点击某个xxx名字的传送链接，功能链接
其他独立功能：
clickbtn(xxx)  点击某个xxx名字的按钮
clickhref(xxx)  点击某个xxx名字的链接
delay(ms);  延时ms毫秒执行下次go
goes(code,num); 执行为code的代码num次
nexttask=function(){};然后调用checktask();来执行，保证非战斗状态且无其他指令在执行的情况下才执行此功能

执行普通任务不需要打怪时无需上锁与解锁
执行特殊任务时go开头就上锁，结束才解锁

详情见最后的 newgotest 和 newgotest1  功能
newgotest1实现自动签到并杀人摸尸体连环杀人回家
**/


function newgotest() {
	go('#on;jh 1;?逄义;?大暑礼包;e;n;n;kill?醉汉|~;@醉汉的尸体;jh 2;n;n;n;n;?地痞;?杀死|jh 3;fight huashancun_huashancun12|home;1!准备解锁;.本次执行完毕;#off');
    go('#on;jh 1;e;n;n;kill snow_drunk|jh 2;n;n;n;n;kill luoyang_luoyang26|jh 3;fight huashancun_huashancun12|home;!准备解锁;.本次执行完毕;#off');
	go('#on;jh 2;n;n;n;n;kill luoyang_luoyang26|;#off');
	go('jh 3;s;s;s');
	go('jh 4;n;n;n;n');
	go('tupo try,taxue-wuhen');
}
function msg(){
	alert('created by daozhang on 2018/09/12');
}

function test(){
	go('jh 1;e;n;n;n;n;n');
	go('^msg;$');
}