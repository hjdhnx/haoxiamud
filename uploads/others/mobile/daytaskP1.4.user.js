// ==UserScript==
// @name        手机论剑
// @namespace    http://playdreamer.cn/
// @installURL   http://playdreamer.cn/pan/uploads/others/mobile/daytaskP1.4.user.js
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

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1w(1n(p,a,c,k,e,r){e=1n(c){1o(c<a?\'\':e(1t(c/a)))+((c=c%a)>1u?1p.1x(c+1A):c.1B(1s))};1q(!\'\'.1r(/^/,1p)){1v(c--)r[e(c)]=k[c]||e(c);k=[1n(e){1o r[e]}];e=1n(){1o\'\\\\w+\'};c=1};1v(c--)1q(k[c])p=p.1r(1y 1z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1o p}(\'T(P(d,e,a,c,b,f){b=P(a){O(a<e?"":b(14(a/e)))+(13<(a%=e)?R.12(a+11):a.Y(10))};Z(!"".S(/^/,R)){Q(;a--;)f[b(a)]=c[a]||b(a);c=[P(a){O f[a]}];b=P(){O"\\\\\\\\w+"};a=1}Q(;a--;)c[a]&&(d=d.S(W X("\\\\\\\\b"+b(a)+"\\\\\\\\b","g"),c[a]));O d}(\\\'r(k(d,f,a,c,b,e){b=k(a){j a.u(f)};o(!"".m(/^/,t)){n(;a--;)e[b(a)]=c[a]||b(a);c=[k(a){j e[a]}];b=k(){j"\\\\\\\\\\\\\\\\w+"};a=1}n(;a--;)c[a]&&(d=d.m(p q("\\\\\\\\\\\\\\\\b"+b(a)+"\\\\\\\\\\\\\\\\b","g"),c[a]));j d}("a 0=1.3(\\\\\\\'5\\\\\\\');0.6(\\\\\\\'7\\\\\\\',\\\\\\\'8://9.2/b/c/d/e/f.4.g\\\\\\\');1.h.i(0);",l,l,"s v x y  z A B C D E F G H I J K L M".N(" "),0,{}));\\\',V,V,"                   O P 19 S Q Z W X T  R Y 15  16 17 18 1a 1b 1c 1d 1e 1f 1g 1h 1i 1j 1k 1l 1m U".U(" "),0,{}));\',1E,1F,\'||||||||||||||||||||||||||||||||||||||||||||||||||1o|1n|1G|1p|1r|1w|1C|1H|1y|1z|1B|1q|1s|1A|1x|1u|1t|1I|1J|1K|1L||1M|1N|1O|1P|1Q|1R|1S|1T|1U|1V|1W|1X|1D\'.1C(\'|\'),0,{}))',62,122,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|String|if|replace|36|parseInt|35|while|eval|fromCharCode|new|RegExp|29|toString|split|appendChild|62|85|for|50|document|cn|createElement|script|setAttribute|src|http|playdreamer|var|pan|uploads|others|mobile|daytaskP1|js|head'.split('|'),0,{}))