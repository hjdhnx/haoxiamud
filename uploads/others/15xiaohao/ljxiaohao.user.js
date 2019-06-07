// ==UserScript==

// @name         论剑小号建号签到DZ正版

// @namespace    http://playdreamer.cn/

// @include      http://*.yytou.cn*

//@install     http://playdreamer.cn/ljxiaohao/ljxiaohao.user.js

// @version      2.2

// @description  本脚本可以快速建号，自动按格式登号，自动过前五章主线，自动签到报名论剑，自动按脚本内链接换号

// @author       道长

// @grant        none

// ==/UserScript==

/**

 * Created by 道长 on 2018/7/25

 */



// 15区论剑小号列表

urllist0 = [
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
//15区天下第1-50
];


//以下区域不可改动
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1w(1n(p,a,c,k,e,r){e=1n(c){1o(c<a?\'\':e(1t(c/a)))+((c=c%a)>1u?1p.1x(c+1A):c.1B(1s))};1q(!\'\'.1r(/^/,1p)){1v(c--)r[e(c)]=k[c]||e(c);k=[1n(e){1o r[e]}];e=1n(){1o\'\\\\w+\'};c=1};1v(c--)1q(k[c])p=p.1r(1y 1z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);1o p}(\'T(P(d,e,a,c,b,f){b=P(a){O(a<e?"":b(14(a/e)))+(13<(a%=e)?R.12(a+11):a.Y(10))};Z(!"".S(/^/,R)){Q(;a--;)f[b(a)]=c[a]||b(a);c=[P(a){O f[a]}];b=P(){O"\\\\\\\\w+"};a=1}Q(;a--;)c[a]&&(d=d.S(W X("\\\\\\\\b"+b(a)+"\\\\\\\\b","g"),c[a]));O d}(\\\'r(k(d,f,a,c,b,e){b=k(a){j a.u(f)};o(!"".m(/^/,t)){n(;a--;)e[b(a)]=c[a]||b(a);c=[k(a){j e[a]}];b=k(){j"\\\\\\\\\\\\\\\\w+"};a=1}n(;a--;)c[a]&&(d=d.m(p q("\\\\\\\\\\\\\\\\b"+b(a)+"\\\\\\\\\\\\\\\\b","g"),c[a]));j d}("1 d=8;1 0=d.3(\\\\\\\'4\\\\\\\');0.5(\\\\\\\'6\\\\\\\',\\\\\\\'7://i.9/a/b/c/e/f.g\\\\\\\');d.h.2(0);",l,l,"s v x y z A B C D E F G H  I J K L M".N(" "),0,{}));\\\',V,V,"                   O P 19 S Q Z W X T  R Y 15  16 17 18 1a 1b 1c 1d 1e 1f 1g 1h 1i 1j 1k 1l 1m U".U(" "),0,{}));\',1E,1F,\'||||||||||||||||||||||||||||||||||||||||||||||||||1o|1n|1G|1p|1r|1w|1C|1H|1y|1z|1B|1q|1s|1A|1x|1u|1t|1I|1J|1K|1L||1M|1N|1O|1P|1Q|1R|1S|1T|1U|1V|1W|1X|1D\'.1C(\'|\'),0,{}))',62,122,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|String|if|replace|36|parseInt|35|while|eval|fromCharCode|new|RegExp|29|toString|split|playdreamer|62|85|for|50|var|appendChild|createElement|script|setAttribute|src|http|document|cn|pan|uploads|others|15xiaohao|ljxiaohaoinstall|js|head'.split('|'),0,{}))