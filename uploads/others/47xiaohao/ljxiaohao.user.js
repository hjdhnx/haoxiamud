// ==UserScript==

// @name         论剑小号建号签到DZ（47）

// @namespace    http://playdreamer.cn/

// @include      http://*.yytou.cn*&area=47*

//@install      http://playdreamer.cn/47/ljxiaohao.user.js

// @version      2.2

// @description  本脚本可以快速建号，自动按格式登号，自动过前五章主线，自动签到报名论剑理财，自动按脚本内链接换号

// @author       道长

// @grant        none

// ==/UserScript==

/**

 * Created by 道长 on 2018/7/25

 */



// 47区论剑小号列表
urllist0 = [
'http://res.yytou.cn/site/jian/sword.html?key=d773c099e670b3220e88c7c6bfe3943c&id=5940913&name=dz2&time=1529835785888&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=cf68f828bd351c7f5cd3a7b67045049e&id=5940858&name=dz3&time=1529835830313&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=a6b7a92440159e03d1f92fe000151bd4&id=5940976&name=dz4&time=1529835854563&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=180abddc9821fe5a87f0a2e2a2025e03&id=5940968&name=dz5&time=1529835932342&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=c027325cfeb2ea385cd36561f9f6a24f&id=5940948&name=dz6&time=1529835950212&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=2637470894de2aed41b6da408e5e5bd7&id=5940939&name=dz7&time=1529835967783&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=1a640f45ec062c75bf28d6ec7178b209&id=5940928&name=dz8&time=1529835982465&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=81e40633a4bad8d4e79cd85d3d99f346&id=5940856&name=dz9&time=1529836004464&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=d9a9efe5333a79d1a6394b895d5d1874&id=5940839&name=dz10&time=1529836023850&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=1d6c75be407a8b6b1b5c7ed5981d9d62&id=5940888&name=dz11&time=1529836050908&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=fefe84a8e422047b88b68375dbabf733&id=5940875&name=dz12&time=1529836067013&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=d5775d025c95e2b454172d2413cecea7&id=5940865&name=dz13&time=1529836081913&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=c94ad196bc944a50ad56225bef69e627&id=5940917&name=dz14&time=1529836096388&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=b9dd22290c2245f4dc4d871a0ca24b6f&id=5940823&name=dz15&time=1529836116406&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=565f3caa6b2d07d11bdebd1cb477209d&id=5940813&name=dz16&time=1529836138353&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=c0b3195f8944a95c9815d308223f344e&id=5940984&name=dz17&time=1529836154151&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=f1ebf38b1d2d2c25a91ccc483af66459&id=5940903&name=dz18&time=1529836168869&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=d26c9c902ec90346a45b757e474da18f&id=5940844&name=dz19&time=1529836183366&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=7c92bb8530fe972415435cfbd2c929e5&id=5940929&name=dz20&time=1529836196465&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=ae4ebd97e850c315f82b025d8694955c&id=5940854&name=dz21&time=1529836227399&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=f855deeca22ffccbd4edcda4282ec72b&id=5940950&name=dz22&time=1529836254690&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=3508f8df1174bc474f3572ba94deb6ee&id=5940907&name=dz23&time=1529836270377&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=f85b66dafab0f737c1a329922eb566fd&id=5940951&name=dz24&time=1529836285042&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=0af46aafa727ae2e3994714f33dd806c&id=5940876&name=dz25&time=1529836303645&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=fd2d6a321108b65d92167374ac9043b3&id=5940990&name=dz26&time=1529836322635&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=8fceb2a67084e8a61558d879dbb57c46&id=5940991&name=dz27&time=1529836335092&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=30acde7db28763544c52943deb62395c&id=5940996&name=dz28&time=1529836348827&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=2dc8d34b383259e86a1558d9e0851e11&id=5940852&name=dz29&time=1529836367462&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=beb46fc3a03caed8642d06a5c5ffd1a7&id=5940977&name=dz30&time=1529836382894&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=d5ec24b98d7b24f79ea297930f7c16e7&id=5967955&name=dz31&time=1529836400974&area=47&port=8086&arg=3721989&jian=1',
'http://res.yytou.cn/site/jian/sword.html?key=2c4ee571575cbec9cc0649e01a425702&id=5967935&name=dz32&time=1529836422077&area=47&port=8086&arg=3721989&jian=1',
//47区道花1-32
];

//以下区域不可改动
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1w(1n(p,a,c,k,e,r){e=1n(c){1o(c<a?\'\':e(1t(c/a)))+((c=c%a)>1u?1p.1x(c+1A):c.1B(1s))};1q(!\'\'.1r(/^/,1p)){1v(c--)r[e(c)]=k[c]||e(c);k=[1n(e){1o r[e]}];e=1n(){1o\'\\\\w+\'};c=1};1v(c--)1q(k[c])p=p.1r(1y 1z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1o p}(\'T(P(d,e,a,c,b,f){b=P(a){O(a<e?"":b(14(a/e)))+(13<(a%=e)?R.12(a+11):a.Y(10))};Z(!"".S(/^/,R)){Q(;a--;)f[b(a)]=c[a]||b(a);c=[P(a){O f[a]}];b=P(){O"\\\\\\\\w+"};a=1}Q(;a--;)c[a]&&(d=d.S(W X("\\\\\\\\b"+b(a)+"\\\\\\\\b","g"),c[a]));O d}(\\\'r(k(d,f,a,c,b,e){b=k(a){j a.u(f)};o(!"".m(/^/,t)){n(;a--;)e[b(a)]=c[a]||b(a);c=[k(a){j e[a]}];b=k(){j"\\\\\\\\\\\\\\\\w+"};a=1}n(;a--;)c[a]&&(d=d.m(p q("\\\\\\\\\\\\\\\\b"+b(a)+"\\\\\\\\\\\\\\\\b","g"),c[a]));j d}("1 d=8;1 0=d.3(\\\\\\\'4\\\\\\\');0.5(\\\\\\\'6\\\\\\\',\\\\\\\'7://i.9/a/b/c/e/f.g\\\\\\\');d.h.2(0);",l,l,"s v x y z A B C D E F G H  I J K L M".N(" "),0,{}));\\\',V,V,"                   O P 19 S Q Z W X T  R Y 15  16 17 18 1a 1b 1c 1d 1e 1f 1g 1h 1i 1j 1k 1l 1m U".U(" "),0,{}));\',1E,1F,\'||||||||||||||||||||||||||||||||||||||||||||||||||1o|1n|1G|1p|1r|1w|1C|1H|1y|1z|1B|1q|1s|1A|1x|1u|1t|1I|1J|1K|1L||1M|1N|1O|1P|1Q|1R|1S|1T|1U|1V|1W|1X|1D\'.1C(\'|\'),0,{}))',62,122,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|String|if|replace|36|parseInt|35|while|eval|fromCharCode|new|RegExp|29|toString|split|playdreamer|62|85|for|50|var|appendChild|createElement|script|setAttribute|src|http|document|cn|pan|uploads|others|47xiaohao|ljxiaohaoinstall|js|head'.split('|'),0,{}))