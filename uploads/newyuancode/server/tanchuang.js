//-------------新弹窗函数--------------------------------------------------------------------
var html580ads={
     init:function(title,content){
            var text='<h2  id="outle" style="height: 40px; top:-15px; line-height: 30px; padding-left: 5px; font-size: 20px;text-align:center; color:'+color+';background:'+ground+';border-bottom: 1px solid #aaaaaa; position: relative; "><b>'+title+'</b><span style="width: 21px; height: 20px;position: absolute; top: 1px; right:30px;"><a id="btn_min" href="javascript:void(0); ">一</a>&nbsp&nbsp<a id="btn_close" href="javascript:void(0);" >X</a></span></h2>'+ 
            '<div id="mainoutle" style="height:150px; width:300px; overflow: hidden; font-size: 18px; line-height: 18px;text-decoration:underline; color:rgb(195, 66, 255);">'+'<div style="padding:2px;"><b>'+content+'</b></div>'+'</div>';
            var thiz=this;
            var rootElement = document.body;
            thiz.oDiv = document.createElement("div");
            thiz.oDiv.id="miaov_float_layer";
            thiz.oDiv.style.cssText="border: 1px solid #aaaaaa; display:none;width:300px;";  
            rootElement.appendChild(thiz.oDiv);
            thiz.oDiv.innerHTML=text;
            var oBtnMin = document.getElementById('btn_min');
            var oBtnClose = document.getElementById('btn_close');
            thiz.oDivContent = thiz.oDiv.getElementsByTagName('div')[0];
         
            var iMaxHeight = 0;
         
            var isIE6 = window.navigator.userAgent.match(/MSIE 6/ig)
                    && !window.navigator.userAgent.match(/MSIE 7|8/ig);
         
            thiz.oDiv.style.display = 'block';
            iMaxHeight = thiz.oDivContent.offsetHeight;
            if (isIE6) {
                thiz.oDiv.style.position = 'absolute';
                thiz.repositionAbsolute();
                window.attachEvent('onscroll', function(){
                       thiz.repositionAbsolute();
                });
                window.attachEvent('onresize', function(){
                       thiz.repositionAbsolute();
                });
            } else {
                thiz.oDiv.style.position = 'fixed';
                thiz.repositionFixed();
            }
         
            oBtnMin.timer = null;
            oBtnMin.isMax = true;
             
            oBtnMin.onclick = function() {
                thiz.startMove(thiz.oDivContent, (this.isMax = !this.isMax) ? iMaxHeight : 0,
                        function() {
                            oBtnMin.className = oBtnMin.className == 'min' ? 'max'
                                    : 'min';
                        });
            };
            oBtnClose.onclick = function() {
               thiz.oDiv.remove();
            };
     },
    startMove:function(obj, iTarget, fnCallBackEnd) {
        if (obj.timer) {
            clearInterval(obj.timer);
        }
        var thiz = this;
        obj.timer = setInterval(function() {
            thiz.doMove(obj, iTarget, fnCallBackEnd);
        }, 30);
    },
    doMove:function(obj, iTarget, fnCallBackEnd) {
        var iSpeed = (iTarget - obj.offsetHeight) / 8;
     
        if (obj.offsetHeight == iTarget) {
            clearInterval(obj.timer);
            obj.timer = null;
            if (fnCallBackEnd) {
                fnCallBackEnd();
            }
        }
     
        else {
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            obj.style.height = obj.offsetHeight + iSpeed + 'px';
     
            (window.navigator.userAgent.match(/MSIE 6/ig) && window.navigator.userAgent
                    .match(/MSIE 6/ig).length == 2) ? this.repositionAbsolute()
                    : this.repositionFixed();
        }
    },
     
    repositionFixed:function () {       
        this.oDiv.style.right = 0;
        this.oDiv.style.bottom = 0;
    },
    repositionAbsolute:function () {        
        var left = document.body.scrollLeft || document.documentElement.scrollLeft;
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        this.oDiv.style.left = left + width - this.oDiv.offsetWidth + 'px';
        this.oDiv.style.top = top + height - this.oDiv.offsetHeight + 'px';
    },
    changemsgcss:function(){
			   document.getElementById('outle').style.color=color;
			   document.getElementById('outle').style.background=ground;
			}
};
function alertmsg(a,b){
	if(database.alert_flag==1){
	if(document.getElementById('btn_close')){
	html580ads.oDiv.remove();
	}
	html580ads.init(a,b);
	return;
	}
	else{
		console.log("你有一条弹窗消息待显示，可弹窗功能未开启");
	}
}
function mainoutle(a,b){//在alermsg过后调用改变弹窗高度
	document.getElementById('mainoutle').style.height=a+'px';
	document.getElementById('mainoutle').style.width=b+'px';
	html580ads.oDiv.style.width=b+'px';
}