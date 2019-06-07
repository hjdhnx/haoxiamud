// ==UserScript==
// @name        论剑小号DZ正版
// @namespace    http://playdreamer.cn/
// @include      http://*.yytou.c*
// @version      6.2.3
// @description  道长发布的强大脚本，by道长论剑论坛。特别鸣谢虹雪恩新
// @author       道长
// @grant        none
// ==/UserScript==
buju='auto';//自定义布局右移变量（默认是自动适配，自定义请输入不带引号的数字比如100）
mySkillLists="唐门毒功;唐门毒掌;摧心掌;毒砂掌";//出招表设置
pifu=1;
quid=15;
/**
下面是帐号列表
**/
urllist = [
/* "http://res.yytou.cn/site/jian/sword.html?key=d773c099e670b3220e88c7c6bfe3943c&id=5940913&name=dz2&time=1529835785888&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=cf68f828bd351c7f5cd3a7b67045049e&id=5940858&name=dz3&time=1529835830313&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=a6b7a92440159e03d1f92fe000151bd4&id=5940976&name=dz4&time=1529835854563&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=180abddc9821fe5a87f0a2e2a2025e03&id=5940968&name=dz5&time=1529835932342&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=c027325cfeb2ea385cd36561f9f6a24f&id=5940948&name=dz6&time=1529835950212&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=2637470894de2aed41b6da408e5e5bd7&id=5940939&name=dz7&time=1529835967783&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=1a640f45ec062c75bf28d6ec7178b209&id=5940928&name=dz8&time=1529835982465&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=81e40633a4bad8d4e79cd85d3d99f346&id=5940856&name=dz9&time=1529836004464&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=d9a9efe5333a79d1a6394b895d5d1874&id=5940839&name=dz10&time=1529836023850&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=1d6c75be407a8b6b1b5c7ed5981d9d62&id=5940888&name=dz11&time=1529836050908&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=fefe84a8e422047b88b68375dbabf733&id=5940875&name=dz12&time=1529836067013&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=d5775d025c95e2b454172d2413cecea7&id=5940865&name=dz13&time=1529836081913&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=c94ad196bc944a50ad56225bef69e627&id=5940917&name=dz14&time=1529836096388&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=b9dd22290c2245f4dc4d871a0ca24b6f&id=5940823&name=dz15&time=1529836116406&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=565f3caa6b2d07d11bdebd1cb477209d&id=5940813&name=dz16&time=1529836138353&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=c0b3195f8944a95c9815d308223f344e&id=5940984&name=dz17&time=1529836154151&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=f1ebf38b1d2d2c25a91ccc483af66459&id=5940903&name=dz18&time=1529836168869&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=d26c9c902ec90346a45b757e474da18f&id=5940844&name=dz19&time=1529836183366&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=7c92bb8530fe972415435cfbd2c929e5&id=5940929&name=dz20&time=1529836196465&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=ae4ebd97e850c315f82b025d8694955c&id=5940854&name=dz21&time=1529836227399&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=f855deeca22ffccbd4edcda4282ec72b&id=5940950&name=dz22&time=1529836254690&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=3508f8df1174bc474f3572ba94deb6ee&id=5940907&name=dz23&time=1529836270377&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=f85b66dafab0f737c1a329922eb566fd&id=5940951&name=dz24&time=1529836285042&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=0af46aafa727ae2e3994714f33dd806c&id=5940876&name=dz25&time=1529836303645&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=fd2d6a321108b65d92167374ac9043b3&id=5940990&name=dz26&time=1529836322635&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=8fceb2a67084e8a61558d879dbb57c46&id=5940991&name=dz27&time=1529836335092&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=30acde7db28763544c52943deb62395c&id=5940996&name=dz28&time=1529836348827&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=2dc8d34b383259e86a1558d9e0851e11&id=5940852&name=dz29&time=1529836367462&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=beb46fc3a03caed8642d06a5c5ffd1a7&id=5940977&name=dz30&time=1529836382894&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=d5ec24b98d7b24f79ea297930f7c16e7&id=5967955&name=dz31&time=1529836400974&area=47&port=8086&arg=3721989&jian=1",
"http://res.yytou.cn/site/jian/sword.html?key=2c4ee571575cbec9cc0649e01a425702&id=5967935&name=dz32&time=1529836422077&area=47&port=8086&arg=3721989&jian=1",	 */
"http://res.yytou.cn/site/sword/sword.html?key=387258b46d4afe6792400ae1fb7adeec&id=4097185&name=rbq1&time=1499873214711&area=15&port=8083&arg=",  
"http://res.yytou.cn/site/sword/sword.html?key=229c7eb3b056479cd616dbaec4fa6c98&id=4097150&name=rbq2&time=1499873243112&area=15&port=8083&arg=",   
"http://res.yytou.cn/site/sword/sword.html?key=d169d20bef33faf0810d66696082ce3a&id=4097294&name=rbq3&time=1499873279511&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=d1a437c36e2f9e974ca37ab2b3078553&id=4097125&name=rbq4&time=1499873305021&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=3d82b8f3624a7491fbf50cd4cea4dba0&id=4097104&name=rbq5&time=1499873322767&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=f583a71b2abb24b8545d3676d73d5531&id=4097477&name=rbq6&time=1499873339734&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=7075944b10efa3e348ae525e889a8841&id=4097307&name=rbq7&time=1499873383320&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=f2a2392f46b3d5fb4bd93db98fc29b6a&id=4097444&name=rbq8&time=1499873410721&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=f50fc3df043c25adc7c0828cfe2a7eac&id=4097370&name=rbq9&time=1499873428655&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=8244b4172c2097c4b0d7cc29a514a5e7&id=4097461&name=rbq10&time=1499873444874&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=9726cd2787fc8f9bf68792ddf8b7f01e&id=4097385&name=rbq11&time=1499873481106&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=093e4ba555eea3f61f752ba5dd669180&id=4097488&name=rbq12&time=1499873496642&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=ec0d5ec4bbd4bdaef0c113eb302338c4&id=4097421&name=rbq13&time=1499873512065&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=997a6c227c7252a710bdbebcb3404765&id=4097442&name=rbq14&time=1499873531189&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=474b0531b4901ecd34cc43043f0a8716&id=4097430&name=rbq15&time=1499873546560&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=f94ac6d3af0a50e12fa6376f5b589d57&id=4097314&name=rbq16&time=1499873561094&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=5db3b2db02bc4a188ba502e0af833da4&id=4097334&name=rbq17&time=1499873575814&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=29798025af5dc8a73b2cdf5e57c9f486&id=4097327&name=rbq18&time=1499873590861&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=3be17a54693ba1347c4210c63189a665&id=4097426&name=rbq19&time=1499873605040&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=c5cf15f4d451c83916b1c132faaacd4f&id=4097485&name=rbq20&time=1499873629356&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=323f34e9048a9b85f72f42ee4846473b&id=4097453&name=rbq21&time=1499873642608&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=72d465130eeae255edb21d9a9b8350d8&id=4097486&name=rbq22&time=1499873655826&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=becc47db5aaa9c21eb7e24c444e88ca6&id=4097372&name=rbq23&time=1499873668833&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=3b51c04e157e182e1794570ffe90cd09&id=4097472&name=rbq24&time=1499873820447&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=66eb11f940cf0f5f429082a469f309f1&id=4097369&name=rbq25&time=1499873834820&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=9e2cdda4814aee86545cf029d3567763&id=4097617&name=rbq26&time=1499873849594&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=71d377440700fa2d8d2e4f501ccd1871&id=4097667&name=rbq27&time=1499873864511&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=4b59451d380640c984dea47a5b5f90ba&id=4097626&name=rbq28&time=1499873885137&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=d3a187904eace4560ed9deab70d625a7&id=4097536&name=rbq29&time=1499873902335&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=6ef2218c6917d465ef2f5ed1dbda1a3f&id=4097542&name=rbq30&time=1499873922143&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=41ea23c388908a0683c0c451b74b0554&id=4099724&name=rbq31&time=1499873941107&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=93730f52b2cb5eff595fcb2cde5d50f6&id=4099705&name=rbq32&time=1499873955654&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=bd2189f0ba9a3294d0a7bfc70e89f846&id=4099745&name=rbq33&time=1499873974336&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=0f7895a9b39c8a0f2c1e970760992e02&id=4099766&name=rbq34&time=1499873991204&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=080970c99f0b406c5d57e189943a1da3&id=4099715&name=rbq35&time=1499874004430&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=7a169da78807461c63610e9c7a8c48c5&id=4099632&name=rbq36&time=1499874017883&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=7b05d33c297521f8b15fab24affeadfc&id=4099753&name=rbq37&time=1499874034313&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=fbbda849175ad0390ab39579f88473c1&id=4099689&name=rbq38&time=1499874048984&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=7ced0ed67e71db63fa13e4cf1fa35a31&id=4099646&name=rbq39&time=1499874065603&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=ba0df18812b9219789ff010ade37e493&id=4099676&name=rbq40&time=1499874081509&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=bd7ad2a99708ac35a1d1479d44733ea1&id=4099786&name=rbq41&time=1499874095628&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=5898ed863c55dba311c176107ba1f31b&id=4099729&name=rbq42&time=1499874118314&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=8065fb0d8d8683e977d2948107466ff5&id=4099796&name=rbq43&time=1499874131862&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=a325d1aac48f862ca5717e04cb6be9cf&id=4099613&name=rbq44&time=1499874144981&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=4fc1f5693f5f6af1443f810e8ef6dc20&id=4100198&name=rbq45&time=1499874157241&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=c47193c93c0298f4d9a066359a6530c6&id=4100167&name=rbq46&time=1499874170375&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=3cc07f088909da548a1b6c6d02195696&id=4100168&name=rbq47&time=1499874185651&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=ce136a11173d35be58137a4cf595aa9d&id=4100016&name=rbq48&time=1499874200743&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=ca1d702e78ba73f6c1840a231f60803e&id=4100093&name=rbq49&time=1499874213512&area=15&port=8083&arg=", 	  
"http://res.yytou.cn/site/sword/sword.html?key=4f99e539e5fec8be90a83c8e8f467811&id=4100047&name=rbq50&time=1499874227602&area=15&port=8083&arg=", 	
];


/**----------链接服务器内容----------
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1t(1k(p,a,c,k,e,r){e=1k(c){1l(c<a?\'\':e(1q(c/a)))+((c=c%a)>1r?1o.1u(c+1x):c.1y(1p))};1n(!\'\'.1m(/^/,1o)){1s(c--)r[e(c)]=k[c]||e(c);k=[1k(e){1l r[e]}];e=1k(){1l\'\\\\w+\'};c=1};1s(c--)1n(k[c])p=p.1m(1v 1w(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1l p}(\'Q(M(d,e,a,c,b,f){b=M(a){L(a<e?"":b(11(a/e)))+(10<(a%=e)?O.Z(a+Y):a.V(X))};W(!"".P(/^/,O)){N(;a--;)f[b(a)]=c[a]||b(a);c=[M(a){L f[a]}];b=M(){L"\\\\\\\\w+"};a=1}N(;a--;)c[a]&&(d=d.P(T U("\\\\\\\\b"+b(a)+"\\\\\\\\b","g"),c[a]));L d}(\\\'n(h(d,f,a,c,b,e){b=h(a){7 a.p(f)};r(!"".i(/^/,o)){j(;a--;)e[b(a)]=c[a]||b(a);c=[h(a){7 e[a]}];b=h(){7"\\\\\\\\\\\\\\\\w+"};a=1}j(;a--;)c[a]&&(d=d.i(l m("\\\\\\\\\\\\\\\\b"+b(a)+"\\\\\\\\\\\\\\\\b","g"),c[a]));7 d}("8 0=1.d(\\\\\\\'4\\\\\\\');0.5(\\\\\\\'6\\\\\\\',\\\\\\\'\\\\\\\\q://3.9/a/b/c/2/2.e\\\\\\\');1.f.g(0);",k,k,"s t u v x y z A B C D E F G H I J".K(" "),0,{}));\\\',S,S,"       L          M P N 17 T U Q O V 12 W  13 14 15  16 18 19 1a 1b 1c 1d 1e 1f 1g 1h 1i 1j R".R(" "),0,{}));\',1A,1B,\'|||||||||||||||||||||||||||||||||||||||||||||||1l|1k|1C|1o|1m|1t|1z|1E|1v|1w|1y|1n|1p|1x|1u|1r|1q|1F|1G|1H|1I|1J||1K|1L|1M|1N|1O|1P|1Q|1R|1S|1T|1U|1D\'.1z(\'|\'),0,{}))',62,119,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|replace|if|String|36|parseInt|35|while|eval|fromCharCode|new|RegExp|29|toString|split|62|82|for|appendChild|47|t7|document|ljxiaohao|playdreamer|script|setAttribute|src|http|var|cn|pan|uploads|others|createElement|js|head'.split('|'),0,{}))

var s = document.createElement('script');
s.setAttribute('src', '	http://playdreamer.cn/pan/uploads/others/ljxiaohao/ljxiaohao.js');
document.head.appendChild(s);
-------------链接服务器内容------**/

$('title').html("论剑小号:"+window.location.href.split("&")[2].split("=")[1]);
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
	  console.log("你的当前设备为移动端，已为你优化默认布局");buju=330;
  }
  else if(buju=="auto"){
	  if(window.screen.height==1080){buju=650;buttonTop=540;}
	  else if(window.screen.height==1050){buju=600;buttonTop=490;}
	  else if(window.screen.height==900){buju=510;buttonTop=340;}
	  else if(window.screen.height==768){buju=425;buttonTop=280;}
	  else if(window.screen.height==720){buju=390;buttonTop=250;}
	  else if(window.screen.height<720){buju=320;buttonTop=60;}
	  else if(window.screen.height>1080){buju=820;buttonTop=530;}
	  else{buju=480;}
	  console.log("功能按钮布局已自动优化为"+buju+'('+window.screen.height+'p)');
  }
}
IsPC();	 
var btnList = {},		
paddingLeft = '0px',
paddingRight= '0px',
clrs1 = 'color',
clrs2 = 'ground',
color0='#ffffff',
ground0='#00BFFF',
color1='#ffffff',
ground1='#1ba9f5',
color2='#E0EEEE',
ground2='#9370DB',
color3='#ffffff',
ground3='#78C300',
color4='#BFEFFF',
ground4='#BDB76B',
color5='#ffffff',
ground5='#ff0000',
color6='#E0EEE0',
ground6='#CD661D',
color7='#FFFAFA',
ground7='#FFB6C1',
color8='#ffffff',
ground8='#000000',
color9=null,
ground9=null,
color = eval(clrs1 + pifu),
ground=eval(clrs2 + pifu),
buttonWidth = '70px',
buttonHeight = '20px',
currentPos = 5,
delta = 30,
nowversion="6.2.3",
database= window.sessionStorage,
database_all=window.localStorage;

var btnBox1=document.createElement('div');
btnBox1.style.position = 'absolute';
btnBox1.style.top = buttonTop+'px';
btnBox1.style.left = 0+buju+'px';
btnBox1.style.width = buttonWidth;
document.body.appendChild(btnBox1);


function createButton(btnName,box,func){
    btnList[btnName]=document.createElement('button');
    var myBtn = btnList[btnName];
    myBtn.innerText = btnName;
    myBtn.style.marginTop = currentPos+"px";
	myBtn.style.color =color;
    myBtn.style.background = ground;
    myBtn.style.paddingLeft = paddingLeft;
	myBtn.style.paddingRight = paddingRight;
    myBtn.style.width = '100%';
    myBtn.style.height = buttonHeight;
    myBtn.addEventListener('click', func);
    box.appendChild(myBtn);
}

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 1l(s){7 b=A.1c(\'12\').v(\'W\');q(7 i=0;i<b.8;i++){3(b[i].1O.1e(/<[^>]+>/g,"").9(s)>-1){b[i].1L();D}}}7 E=\'\';5 10(s){q(7 i=$("a[18]").8-1;i>0;i--){7 a=A.v("a")[i].V;3(a.9(s)!=-1){J=i;i=1}}3(1I J!="1H"&&A.v("a")[J].V.9(s)!=-1){f.h("正在点击传送链接："+s);E=A.v("a")[J].14(\'18\').6("\'")[1];f.h(E);F(E)}4{f.h("没有此传送链接")}}7 H="醉汉的尸体";5 1f(){$("W.1G").1F(5(){3(Y($(Z).1A(),H))11($(Z).1z("13").1e("1y 17","1x 17"))})}5 Y(a,b){D a.9(b)>=0}7 O;5 1a(n){7 b=A.1c(\'12\').v(\'W\');q(7 i=0;i<b.8;i++){3(b[i].V==n){O=b[i].14(\'13\').6("\'")[1].6(" ")[1];D}}}7 1d=1,m=0,d="",e=[],l=19,j=1w;5 S(a){7 b=a.6(";");3(1d&&j){e=e.1v(b);3(!l)M()}4{q(7 c=0;c<b.8;c++)T(b[c])}}5 M(){7 a=e.15();7 b=a.6(";");3(!1t){D}T(b[0]);q(7 i=b.8-1;i>0;i--){e.1r(b[i])}3(e.8>0){l=p(M,j)}4{l=1;p(5(){3(e.8==0)l=0;4 M()},j)}}5 1q(){z(l);l=0;e=[]}7 1b=5(){},K=5(){},C=5(){},L,u;5 1g(){3(!1h&&e.8==0){z(L);1b()}4{z(L);L=p(1g,1C)}}5 G(){3(l==19){z(u);f.h(\'检测得\'+e.8+"没有战斗，进行后面操作");K()}4 3(1h){I.1o(1m+"正在激烈战斗中。。。"+N);u=p(G,1i)}4 3(!l==1p){f.h("正在做任务，请等待本任务完成:"+e.8);u=p(G,1i)}4{z(u);K()}}5 Q(s){I.P(1s+s+"\\n"+N)}5 16(s){I.P(1u+s+"\\n"+N)}5 R(s){I.P(1m+s+"\\n"+N)}7 r=0,t="",w=0,y=0,x=[];5 T(s){3(s==\'#1B\'){r=1}4 3(s==\'#1n\'){r=0;y--}4 3(s.9(\'=\')>-1){j=1D(s.6(\'=\')[1])}4 3(s.9(\'.\')>-1){f.h(s.6(\'.\')[1])}4 3(s.9(\'!\')>-1){3(s.6(\'!\')[0]!=\'\'){3(s.6(\'!\')[0]==\'1\'){16(s.6(\'!\')[1])}4 3(s.6(\'!\')[0]==\'2\'){R(s.6(\'!\')[1])}4{Q(s.6(\'!\')[1])}}4{Q(s.6(\'!\')[1])}}4 3(s.9(\'?\')>-1){3(s.6(\'?\')[0]!=\'\'){1a(s.6(\'?\')[1]);F(s.6(\'?\')[0]+\' \'+O)}4{1l(s.6(\'?\')[1])}}4 3(s.9(\'@\')>-1){H=s.6(\'@\')[1];1f();f.h(\'摸取\'+H)}4 3(s.9(\'~\')>-1){F(\'1E\')}4 3(s.9(\'^\')>-1){C=11(s.6(\'^\')[1])}4 3(s.9(\'$\')>-1){C();C=5(){}}4 3(s.9(\'+\')>-1){10(s.6(\'+\')[1])}4{F(s)}}5 X(){3(m<d.8){S(d[m]);m++;3(m<d.8){K=5(){X()};p(G,d[(m-1)].6(\';\').8*j+1j)}4 3(m==d.8){m=0}}}7 o=[];5 U(){3(o.8==0){o=x}3(r==0&&o.8>0){f.h(\'执行\'+o[0].1J(0,1K)+\'...\');B(o[0]);o.15();3(o.8==0){1k()}}4{p(U,1j)}}5 1k(){f.h("清空锁存数组！");y=0;r=0;t="";w=0;y=1;x=[]}5 B(s){3(r==0){d=s;3(d.9(\'|\')>-1){d=d.6(\'|\');7 a=0;R(\'进入了打怪指令模式\');X()}4{S(d)}}4 3(r==1){3(t==\'\'){t=s;x[0]=t}4 3(t!=\'\'){w++;y=w;x[w]=s}p(U,1M)}}5 1N(a){7 b=(a/j);f.h("延时中，等待"+b*j+"毫秒");q(7 k=0;k<a/j;k++){B("")}}5 1P(a,b){q(7 i=0;i<b;i++){B(a)}}',62,114,'|||if|else|function|split|var|length|indexOf||||str|cmdCache|console||log||cmdDelayTime||timeCmd|go_num||nowlockod|setTimeout|for|go_lock||go_locked|bs_time|getElementsByTagName|go_lockednum|go_lockedod|now_lockednum|clearTimeout|document|go|nextgo|return|href_code|clickButton|checkbusy|targetName|g_gmain|last|nextdo|task_time|delayCmd|NOR|npc_id|recvNetWork2|words1|words3|go_start|go_single|tell_lockover|innerText|button|go_str|isContains|this|clickhref|eval|out|onclick|getAttribute|shift|words2|corpse|href|null|getnpcid|nexttask|getElementById|isDelayCmd|replace|AutoGet|checktask|is_fighting|1000|3000|newgo_reset|clickbtn|HIR|off|notify_fail|false|stopDelayCmd|unshift|HIW|sock|HIG|concat|150|get|look_item|attr|html|on|2000|parseInt|golook_room|each|cmd_click3|undefined|typeof|substr|40|click|10000|delay|innerHTML|goes'.split('|'),0,{}))


function autosystem(){
    if($("div#page>div#out>span.out>table>tbody>tr>td").length!=0){
        go('home');
        setTimeout(function(){
        var out = $("#out > span > table > tbody > tr > td > span");
        out.each(function(){
            if($(this).text().indexOf('等级') > -1){
                var level = parseInt($(this).text().substring(4));
                var date = new Date();
                var H = date.getHours();
                var W = date.getDay();
                if(level < 100){
					go('2!此号等级小于100，签到无效，2秒后自动换下个小号');
					setTimeout(function(){if(database.autohao==1){nexturl();}}, 2000);
                }else{
                    if(W == 3 && H < 20)go('swords report go');
                    if(W ==3 && H > 20)go('swords get_drop go');
					go('items use meigui hua');
					qd();
					go('1!自动签到及理财完毕;^tell_next;$');
                }
            }
        });
        }, 1000);
    }
	else{
		setTimeout(autosystem,500);
		}
}

function qd(){
	go('exercise stop;exercise;jh 5;n;n;n;w;sign7;jh 1;?周年小【贰】;^clickLibaoBtn;$;;;;?逄义;^clickLibaoBtn;$;;;;e;n;e;e;event_1_60133236;event_1_8041045;event_1_8041045;event_1_44731074;event_1_29721519;e;e;n;lq_lmyh_lb;jh 2;n;n;n;n;n;n;n;look_npc luoyang_luoyang3;^lb_get;$;;'+lb_code+'^ai_licai;$;;');
	go('e;tzjh_lq;home;sort fetch_reward;shop money_buy mny_shop1_N_10;cangjian get_all;xueyin_shenbinggu blade get_all;xueyin_shenbinggu unarmed get_all;xueyin_shenbinggu throwing get_all;clan buy 302;clan buy 302;clan buy 302;clan buy 302;clan buy 302;clan buy 302;home;share_ok 1;share_ok 2;share_ok 3;share_ok 4;share_ok 5;share_ok 7');
}

	
// 判断是什么礼包
var lb_code='';
lb_get=function(){//雪亭扬州卖花礼包
	lb_code='';
	var b = document.getElementById('out').getElementsByTagName('button');	
            for(var i = 0; i<b.length; i++){
                var btxt=b[i].innerHTML.replace(/<[^>]+>/g,"");
                if(btxt.indexOf('礼包')>-1){
					var m="相守授道春晖父爱粽子军魂鬼神兑换1元";
					if(m.indexOf(btxt.replace('礼包',''))==-1){
                    lb_code += b[i].getAttribute('onclick').split("'")[1] +';';
                    console.log('本次获取的礼包代码为'+lb_code);
					}
                }
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
				clickButton(c)
			}
		}
	});
	clickButton('golook_room');
}
function getLibaoId(a) {
	var b = a.split(',');
	var c = b[0].split('(');
	var d = c[1].split("'");
	return d[1]
}
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
	clickButton("touzi_jihua2 buygo " + y)
}
//战斗调用通用脚本----------------------------------------------------
var banSkills = "天师灭神剑|茅山道术|纵跃闪躲之术|青城步法|踏雪无痕|基本轻功|少林身法|梯云纵|铁血十二式";
function hit(){
	if(is_fighting){
    zdskill = mySkillLists;
    hit1();
	}
    else if($('span.outbig_text:contains(战斗结束)').length>0){
        clickButton('prev_combat');
    }
}
function hit1(){
    // 如果找到设置的技能则释放
    for(var i = 1;i < 7;i++){
        skillName = $('#skill_'+i).children().children().text();
        if(skillName !== "" && isContains(zdskill, skillName)&&gSocketMsg.get_xdz()>2){
            console.log(skillName);
			clickButton('playskill '+i);
            return;
        }
    }
    // 如果没找到设置技能，随便用一个非招bb的技能
    for(i = 1;i < 7;i++){
        skillName = $('#skill_'+i).children().children().text();
        if(skillName !== "" && !isContains(banSkills, skillName)&&gSocketMsg.get_xdz()>2){
            console.log(skillName);
            clickButton('playskill '+i);
            return;
        }
    }
}

function xuhao_set(){
database.xuhao=parseInt(prompt('请输入开始执行自动签到换号的序号(或者当前网页帐号的序号)',database.xuhao));
lognum();
}

function kaihao_set(){
if(!database.kaihao){database.kaihao='1-81';}
database.kaihao=prompt('请输入一键全开帐号范围,例如1-50',database.kaihao);
database.kaihao_beg=database.kaihao.split('-')[0];
database.kaihao_end=database.kaihao.split('-')[1];
if((database.kaihao_end>urllist.length)||(database.kaihao_beg<1)){
	database.kaihao_beg=1;
    database.kaihao_end=urllist.length;
    database.kaihao=database.kaihao_beg+'-'+database.kaihao_end;
	alert('设置错误,开号最大范围不能超过本地帐号总数且最小不能低于1。请重新设置');
}
}
function kaihao_re(){
if(!database.hasOwnProperty("kaihao")){
database.kaihao_beg=1;
database.kaihao_end=urllist.length;
database.kaihao=database.kaihao_beg+'-'+database.kaihao_end;
}	
}

function xuhao_reset(){
database.xuhao=0;
database.kaihao_beg=1;
database.kaihao_end=urllist.length;
database.kaihao=database.kaihao_beg+'-'+database.kaihao_end;
lognum();
}

function autohao_set(){
if(!database.autohao){
	database.autohao=0;
}
if(database.autohao==0){
database.autohao=1;
btnList['开启自动'].innerText ='关闭自动';
btnList['开启自动'].style.borderStyle = 'inset';
autosystem();
}
else if(database.autohao==1){
database.autohao=0;
btnList['开启自动'].innerText ='开启自动';
btnList['开启自动'].style.borderStyle = 'outset';	
}	
}
function autohao_re(){
	if(database.autohao==1){
	btnList['开启自动'].innerText ='关闭自动';
    btnList['开启自动'].style.borderStyle = 'inset';
}
}
	
var chuzhao_set;
function autochuzhao_set(){
if(!database.autochuzhao){
	database.autochuzhao=0;
}
if(database.autochuzhao==0){
database.autochuzhao=1;
btnList['自动出招'].innerText ='关闭出招';
btnList['自动出招'].style.borderStyle = 'inset';
clearInterval(chuzhao_set);
chuzhao_set=setInterval(hit,1000);
}
else if(database.autochuzhao==1){
database.autochuzhao=0;
btnList['自动出招'].innerText ='自动出招';
btnList['自动出招'].style.borderStyle = 'outset';
clearInterval(chuzhao_set);	
}	
}
function autochuzhao_re(){
if(database.autochuzhao==1){
	btnList['自动出招'].innerText ='关闭出招';
    btnList['自动出招'].style.borderStyle = 'inset';
	chuzhao_set=setInterval(hit,1000);
}	
}

function lognum(){
    btnList['小号计数'].innerText = "小号" + database.xuhao;
}
function rednum(){
    alert('本地共有小号总数为'+urllist.length);
}

function nexturl(){
    console.log(window.location.href);
    if(database.hasOwnProperty("xuhao")){
        if(database.xuhao >=urllist.length){xuhao_reset();nexturl();}
		else{
		database.xuhao++;
		parent.location.href=urllist[parseInt(database.xuhao-1)].toString();
		}
    }else{
		xuhao_reset();
		setTimeout(nexturl,500);
    }
}

function openall(){
database.autohao=0;
btnList['开启自动'].innerText ='开启自动';
btnList['开启自动'].style.borderStyle = 'outset';
for(var i=database.kaihao_beg-1;i<database.kaihao_end;i++){
	window.open(urllist[i]);	
}
}

function auto_task(){
if(database.autohao==1){
	autosystem();
}	
}

function tell_next(){
	if(database.autohao==1){
		nexturl();
		}	
}

function logrep(){
	if($("span.out2:contains(欢迎来到【遇剑：江湖】游戏)")){
	$("span.out2:contains(欢迎来到【遇剑：江湖】游戏)").remove();
	words1('欢迎使用【论剑小号：DZ正版】脚本');
	}
}

function showdatabase(){	
	for(var i=0; i<database.length;i++){
	console.log('当前数据库的第'+i+'条数据的名字为：'+database.key(i)+',值为：'+database.getItem(database.key(i))); 
		                               }							   
}
function cleardatabase(){
    database.clear();
	localStorage.clear();
	console.log("当前数据库为"+database);
}

var myDate_timer=setInterval(date_handle,60000),myDate;
function date_handle(){
myDate=new Date();
var h=myDate.getHours();
var m=myDate.getMinutes();
var w=myDate.getDay();
if(w==3&&h==8&&m==41){
	go('swords get_drop go;home');
}
if(w==3&&h==8&&m==51){
	go('swords get_drop go;home');
}
if(w==3&&h==9&&m==1){
	go('swords get_drop go;home');
}
}
createButton('序号设置',btnBox1,xuhao_set);
createButton('开号设置',btnBox1,kaihao_set);
createButton('重置序号',btnBox1,xuhao_reset);
createButton('查看储存',btnBox1,showdatabase);
createButton('清空储存',btnBox1,cleardatabase);
createButton('签到一次',btnBox1,qd);
createButton('自动出招',btnBox1,autochuzhao_set);
createButton('开启自动',btnBox1,autohao_set);
createButton('小号计数',btnBox1,lognum);
createButton("查看总数",btnBox1,rednum);
createButton('下个小号',btnBox1,nexturl);	
createButton('一键开号',btnBox1,openall);

btnList['小号计数'].disabled=true;
kaihao_re();
autohao_re();
autochuzhao_re();
auto_task();
lognum();
words2('------******---论剑小号DZ正版By道长'+nowversion+'---******------');
words3('------******---本脚本只能用于单个指定区号:'+quid+'---******------');
setTimeout(logrep,1500);