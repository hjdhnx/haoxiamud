
uncompile=function(code)//解密
{  
   code=unescape(code);  
   var c=String.fromCharCode(code.charCodeAt(0)-code.length);  
   for(var i=1;i<code.length;i++){  
   c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));  
   }  
   return c;  
}


compile=function(code)
{ 
var c=String.fromCharCode(code.charCodeAt(0)+code.length);
 for(var i=1;i<code.length;i++)
{
 c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));
 }
return (escape(c));
}

http://playdreamer.cn/qlyxqj/jijiao.mp3
换成
http://playdreamer.cn/pan/uploads/dzlunjian/music/jijiao.mp3

http://raw.githack.com/hjdhnx/haoxiamud/uploads/dzlunjian/music/jijiao.mp3


http://playdreamer.cn/dzlunjian/music/jijiao.mp3
换成
http://playdreamer.cn/pan/uploads/dzlunjian/music/jijiao.mp3
http://raw.githack.com/hjdhnx/haoxiamud/uploads/dzlunjian/music/jijiao.mp3

http://playdreamer.cn/dzlunjian/music/zfb1000.mp3
换成
http://playdreamer.cn/pan/uploads/dzlunjian/music/zfb1000.mp3
http://raw.githack.com/hjdhnx/haoxiamud/uploads/dzlunjian/music/zfb1000.mp3

http://playdreamer.cn/pan
换成
http://raw.githack.com/hjdhnx/haoxiamud

https://raw.githack.com/hjdhnx/haoxiamud/master

	https://github.com/hjdhnx/haoxiamud/raw/master/uploads/dzlunjian/6.x/6.7/dzlunjian6.7.user.js
    https://github.com/hjdhnx/haoxiamud/raw/master/uploads/dzlunjian/6.x/6.7/dzlunjian6.7installnew.js
    https://raw.githubusercontent.com/hjdhnx/haoxiamud/master/uploads/dzlunjian/6.x/6.7/dzlunjian6.7installnew.js
    https://raw.githack.com/hjdhnx/haoxiamud/master/uploads/dzlunjian/6.x/6.7/dzlunjian6.7installnew.js
    
compile=function(code)
{ 
var c=String.fromCharCode(code.charCodeAt(0)+code.length);
 for(var i=1;i<code.length;i++)
{
 c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));
 }
return (escape(c));
}

function go(){
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/5.4/dzlunjian5.4.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/qlyxdz/5.3/qlyxdzinstall5.3.js);");
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/5.5/dzlunjian5.5.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/5.4/dzlunjian5.4installnew.js');");
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/5.6/dzlunjian5.6.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/5.5/dzlunjian5.5installnew.js');");
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/5.7/dzlunjian5.7.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/5.6/dzlunjian5.6installnew.js');");
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/5.8/dzlunjian5.8.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/5.7/dzlunjian5.7installnew.js');");
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/5.9/dzlunjian5.9.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/5.8/dzlunjian5.8installnew.js');");
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/5.9.1/dzlunjian5.9.1.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/5.9/dzlunjian5.9installnew.js');");
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/5.9.1/dzlunjian5.9.1.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/5.9.1/dzlunjian5.9.1installnew.js');");


compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/6.x/6.0/dzlunjian6.0.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/5.9/dzlunjian5.9installnew.js');");
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/6.x/6.1/dzlunjian6.1.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/6.x/6.0/dzlunjian6.0installnew.js');");
compile('window.open("http://playdreamer.cn/pan/uploads/dzlunjian/6.x/6.1/dzlunjian6.1.user.js");');
compile("s.setAttribute('src', 'http://playdreamer.cn/pan/uploads/dzlunjian/6.x/6.1/dzlunjian6.1installnew.js');");

compile('window.open("https://raw.githack.com/hjdhnx/haoxiamud/master/uploads/dzlunjian/6.x/6.7/dzlunjian6.7.user.js");');
compile("s.setAttribute('src', 'https://raw.githack.com/hjdhnx/haoxiamud/master/uploads/dzlunjian/6.x/6.7/dzlunjian6.7installnew.js');");
}