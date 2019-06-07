$('title').html("论剑小号:" + window.location.href.split("&")[2].split("=")[1]);
var buttonTop = 280;

function IsPC() {
	var a = navigator.userAgent;
	var b = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	var c = true;
	for (var v = 0; v < b.length; v++) {
		if (a.indexOf(b[v]) > 0) {
			c = false;
			break
		}
	}
	if (buju == "auto" && c == false) {
		console.log("你的当前设备为移动端，已为你优化默认布局");
		buju = 330
	} else if (buju == "auto") {
		if (window.screen.height == 1080) {
			buju = 650;
			buttonTop = 540
		} else if (window.screen.height == 1050) {
			buju = 600;
			buttonTop = 490
		} else if (window.screen.height == 900) {
			buju = 510;
			buttonTop = 340
		} else if (window.screen.height == 768) {
			buju = 425;
			buttonTop = 280
		} else if (window.screen.height == 720) {
			buju = 390;
			buttonTop = 250
		} else if (window.screen.height < 720) {
			buju = 320;
			buttonTop = 60
		} else if (window.screen.height > 1080) {
			buju = 820;
			buttonTop = 530
		} else {
			buju = 480
		}
		console.log("功能按钮布局已自动优化为" + buju + '(' + window.screen.height + 'p)')
	}
}
IsPC();
var btnList = {},
	paddingLeft = '0px',
	paddingRight = '0px',
	clrs1 = 'color',
	clrs2 = 'ground',
	color0 = '#ffffff',
	ground0 = '#00BFFF',
	color1 = '#ffffff',
	ground1 = '#1ba9f5',
	color2 = '#E0EEEE',
	ground2 = '#9370DB',
	color3 = '#ffffff',
	ground3 = '#78C300',
	color4 = '#BFEFFF',
	ground4 = '#BDB76B',
	color5 = '#ffffff',
	ground5 = '#ff0000',
	color6 = '#E0EEE0',
	ground6 = '#CD661D',
	color7 = '#FFFAFA',
	ground7 = '#FFB6C1',
	color8 = '#ffffff',
	ground8 = '#000000',
	color9 = null,
	ground9 = null,
	color = eval(clrs1 + pifu),
	ground = eval(clrs2 + pifu),
	buttonWidth = '70px',
	buttonHeight = '20px',
	currentPos = 5,
	delta = 30,
	nowversion = "6.4.2",
	database = window.sessionStorage,
	database_all = window.localStorage;
var btnBox1 = document.createElement('div');
btnBox1.style.position = 'absolute';
btnBox1.style.top = buttonTop + 'px';
btnBox1.style.left = 0 + buju + 'px';
btnBox1.style.width = buttonWidth;
document.body.appendChild(btnBox1);

function createButton(a, b, c) {
	btnList[a] = document.createElement('button');
	var d = btnList[a];
	d.innerText = a;
	d.style.marginTop = currentPos + "px";
	d.style.color = color;
	d.style.background = ground;
	d.style.paddingLeft = paddingLeft;
	d.style.paddingRight = paddingRight;
	d.style.width = '100%';
	d.style.height = buttonHeight;
	d.addEventListener('click', c);
	b.appendChild(d)
}
var encode_version = 'sojson.v4';var __0x1b34c=['wpXCv8OUwosI','wrnDo8KzwpI=','YMOqwrzDtA==','asKQQMOQYQ==','TMKdUMOSbQ==','wpUmwqpEw7Y=','FF3DvcKfWQ==','wqcKwobCtsKN','w4jClGEqbA==','UsKNKcOGwoA=','fsKrJcKha2TDrA0UwqElw5Q=','V8K5w5F1SSVa','U8KFEcO4woQ=','Kn9awqp6','wqXDrjjCvxE=','wrlBwoxiFA==','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','A2LDoMK9ag==','IcOMK3kSWg==','w4QKwo/Cq8Oh','H8KTIRvDvg==','U8Kqw5lWTA==','wqfDshPDn8KV','w5DChVQrfQ==','K8OvRx4n','ecK7L8O0woQ=','wpI2woLCs8K/','wqlQeVzCqA==','wpt3w6vCkg==','wrjDqMKkwoPCiGlBOMK3','w7BFdQADwo8=','w6wtV08sesO0AQ==','CcOUA2Y4csKCP8KsFS0we8OoHMOPDMOLwoXCgcOtG0nDn0Q=','wo5CZcOKw5DDrWDCpSDDpBsQw5ZcwrZ3OcOxw7ESw6bCmXrDkjJ2EEnDu8K5w5rDig==','ecKrwoo=','IcO+Wg8Z','ASrCmGcj','woRPwplrOg==','wpfCnztXJg==','wpE0wq3Cr8O7','wqPCqHrDrik=','b3HCqXQR','wozDqwnCoDM=','w64hw7HCqyM=','w6LCpMKzaTw=','woTCqh5LBw==','wrnCiUzDpyg=','QMKzbsOCcw==','QMKOLMOQwpg=','PQ3Ds8KnGw==','w7g/wp7DvXs=','w5XDrw1uw6Y=','EnlPTQ==','w5QPw43CliA=','QsKOFMOmwro=','w4zDr8Oiw4Jw','EnhvwpQ=','CTsswqRU','w5PCnEIMXQ==','wpfDpjsDHA==','LMOrRAQUw40=','wqpjwodNPg==','d3ggYHvDqg==','NgDDoMK7KA==','w7UVwofDg0AKK8OCw47ChA==','w7HDocORw4Fp','U8Kaw6JIQQ==','wq3DvADCjwha','wpcmwpJCw4k5','w4zCiUACXcO9','wpItwphAw4Uewps=','MwUawqx1','wqdnXVTCsQ==','w4XCo0U1Yg==','wpfDsD3DisOpw7w=','w4zCvG8HRg==','wot2L8OZw6zDm38=','wrfDlGlGwpU=','BFjDvllt','YsKIWMOUWQ==','w6M2UFg=','A0DDhMKBSw==','E8OWDV42','YcKgBcOwwpU=','wpR2w6DCnMObwqbCrU5awozCh8OGwoUiD8K/','w7/Ck8OUwrMEwojChcK2wp8Pw4LDhC9ww6jCg8Ouw43Di8OowoXCtn5awr8ewodZwqzDt8O6w4c9w4A0woTDo0TDnMKVamvCpQrDjcKwLcOlLjHDjnLCg8OJw4cqBnHCoMK/wocV'];(function(_0x10a0a5,_0x2585d6){var _0x34fe1=function(_0x28bab7){while(--_0x28bab7){_0x10a0a5['push'](_0x10a0a5['shift']());}};_0x34fe1(++_0x2585d6);}(__0x1b34c,0x11e));var _0x2671=function(_0x1c0224,_0x3e2b0b){_0x1c0224=_0x1c0224-0x0;var _0x12f89a=__0x1b34c[_0x1c0224];if(_0x2671['initialized']===undefined){(function(){var _0x530844=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1a9078='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x530844['atob']||(_0x530844['atob']=function(_0x4a258f){var _0x53fc7b=String(_0x4a258f)['replace'](/=+$/,'');for(var _0x49ce2d=0x0,_0x45ebae,_0x2aa513,_0x58c075=0x0,_0x55daa0='';_0x2aa513=_0x53fc7b['charAt'](_0x58c075++);~_0x2aa513&&(_0x45ebae=_0x49ce2d%0x4?_0x45ebae*0x40+_0x2aa513:_0x2aa513,_0x49ce2d++%0x4)?_0x55daa0+=String['fromCharCode'](0xff&_0x45ebae>>(-0x2*_0x49ce2d&0x6)):0x0){_0x2aa513=_0x1a9078['indexOf'](_0x2aa513);}return _0x55daa0;});}());var _0x26af4e=function(_0x3de86a,_0x433693){var _0x146dc2=[],_0x18f799=0x0,_0x27c5b6,_0x52a95a='',_0x4b2d69='';_0x3de86a=atob(_0x3de86a);for(var _0x31be3c=0x0,_0x7a3885=_0x3de86a['length'];_0x31be3c<_0x7a3885;_0x31be3c++){_0x4b2d69+='%'+('00'+_0x3de86a['charCodeAt'](_0x31be3c)['toString'](0x10))['slice'](-0x2);}_0x3de86a=decodeURIComponent(_0x4b2d69);for(var _0x3d1d68=0x0;_0x3d1d68<0x100;_0x3d1d68++){_0x146dc2[_0x3d1d68]=_0x3d1d68;}for(_0x3d1d68=0x0;_0x3d1d68<0x100;_0x3d1d68++){_0x18f799=(_0x18f799+_0x146dc2[_0x3d1d68]+_0x433693['charCodeAt'](_0x3d1d68%_0x433693['length']))%0x100;_0x27c5b6=_0x146dc2[_0x3d1d68];_0x146dc2[_0x3d1d68]=_0x146dc2[_0x18f799];_0x146dc2[_0x18f799]=_0x27c5b6;}_0x3d1d68=0x0;_0x18f799=0x0;for(var _0x3d8794=0x0;_0x3d8794<_0x3de86a['length'];_0x3d8794++){_0x3d1d68=(_0x3d1d68+0x1)%0x100;_0x18f799=(_0x18f799+_0x146dc2[_0x3d1d68])%0x100;_0x27c5b6=_0x146dc2[_0x3d1d68];_0x146dc2[_0x3d1d68]=_0x146dc2[_0x18f799];_0x146dc2[_0x18f799]=_0x27c5b6;_0x52a95a+=String['fromCharCode'](_0x3de86a['charCodeAt'](_0x3d8794)^_0x146dc2[(_0x146dc2[_0x3d1d68]+_0x146dc2[_0x18f799])%0x100]);}return _0x52a95a;};_0x2671['rc4']=_0x26af4e;_0x2671['data']={};_0x2671['initialized']=!![];}var _0x1a11a5=_0x2671['data'][_0x1c0224];if(_0x1a11a5===undefined){if(_0x2671['once']===undefined){_0x2671['once']=!![];}_0x12f89a=_0x2671['rc4'](_0x12f89a,_0x3e2b0b);_0x2671['data'][_0x1c0224]=_0x12f89a;}else{_0x12f89a=_0x1a11a5;}return _0x12f89a;};eval(function(_0x32a357,_0x4f993d,_0x53a905,_0x446e21,_0x565b7a,_0x5d3926){var _0x3cea08={'MrgHO':function _0x25e02e(_0x13d604,_0x275f20){return _0x13d604<_0x275f20;},'LOPHf':function _0x56a44b(_0x29321e,_0x2ebfd4){return _0x29321e+_0x2ebfd4;},'dwVWm':function _0x3eface(_0xd3190d,_0x498b3a){return _0xd3190d+_0x498b3a;},'LPdXX':_0x2671('0x0','A6lz'),'mcEBM':'attribute','GUQig':function _0x1fefa5(_0x95d7c7,_0x3751a5){return _0x95d7c7!==_0x3751a5;},'wXLBf':_0x2671('0x1','m0W@'),'wBsKL':function _0x18e97b(_0xd871ae,_0x4e98a2){return _0xd871ae===_0x4e98a2;},'mPWmn':_0x2671('0x2','XPnk'),'lnhXB':_0x2671('0x3','0v]S'),'mInnF':_0x2671('0x4','&Qb['),'aBAAV':_0x2671('0x5','AVtv'),'gOaIl':function _0x1a0b84(_0x500182,_0x5ee191){return _0x500182==_0x5ee191;},'YtRdb':function _0x5010e1(_0x352ffe,_0x53e214){return _0x352ffe==_0x53e214;},'eOkPK':function _0x113be1(_0x195625,_0x5e5687){return _0x195625==_0x5e5687;},'RYYYM':function _0xd8d34c(_0x4dfb7e,_0x5c85c0){return _0x4dfb7e&&_0x5c85c0;},'vFCQi':function _0x1df8a2(_0x561d30,_0x26b523){return _0x561d30<_0x26b523;},'WwXfg':function _0x596a0f(_0x3c314f,_0x4bf9ab){return _0x3c314f!==_0x4bf9ab;},'lPAbo':function _0x2bbe94(_0x4f2bb0,_0xc667d2){return _0x4f2bb0===_0xc667d2;},'YVJJt':function _0x462f2a(_0x5e10d5){return _0x5e10d5();},'dOqKG':function _0x3ad56e(_0x393a8b,_0x138429){return _0x393a8b(_0x138429);},'sRHUU':'chain','AnTNJ':function _0x32e96a(_0x56e556){return _0x56e556();},'QcyQx':function _0x4fc978(_0x275baf,_0x4a145a,_0x1b93ab){return _0x275baf(_0x4a145a,_0x1b93ab);},'Axore':function _0x298a7b(_0x539f51,_0x6d8ab1){return _0x539f51(_0x6d8ab1);},'hxOOE':function _0x602237(_0x436d64,_0x42c7e0){return _0x436d64/_0x42c7e0;},'bNUgm':function _0x317928(_0xa93c14,_0x51ccb8){return _0xa93c14>_0x51ccb8;},'QsPSA':_0x2671('0x6','2A5E'),'cFmYi':function _0x306a65(_0x386c3e,_0x34eb50){return _0x386c3e(_0x34eb50);},'JVYKH':function _0x5d0cd1(_0x4f699b,_0x216b5c){return _0x4f699b+_0x216b5c;}};var _0x4a63e5=function(){var _0x5927c5=!![];return function(_0x220532,_0x52b2a4){var _0x52230d=_0x5927c5?function(){if(_0x52b2a4){var _0x3d5f08=_0x52b2a4[_0x2671('0x7','p@oP')](_0x220532,arguments);_0x52b2a4=null;return _0x3d5f08;}}:function(){};_0x5927c5=![];return _0x52230d;};}();var _0x2675e9=_0x4a63e5(this,function(){var _0x4b04e2=_0x3cea08[_0x2671('0x8','f*Mc')](typeof window,_0x3cea08[_0x2671('0x9','7C$l')])?window:_0x3cea08[_0x2671('0xa','8x6M')](typeof process,_0x3cea08[_0x2671('0xb','89h!')])&&_0x3cea08[_0x2671('0xc','2N]Y')](typeof require,_0x3cea08['lnhXB'])&&_0x3cea08[_0x2671('0xd','@q3!')](typeof global,_0x3cea08['mPWmn'])?global:this;var _0x1a9b78=function(){var _0x3e6ab7={'CKFzS':function _0x1d3bc7(_0x470631,_0x17670b){return _0x3cea08[_0x2671('0xe','Xqwo')](_0x470631,_0x17670b);},'pMPqu':function _0x2303a4(_0x495c6a,_0x557263){return _0x495c6a>_0x557263;},'nBxLx':function _0x1b84f2(_0x515c19,_0x6e23af){return _0x3cea08[_0x2671('0xf','&ZQY')](_0x515c19,_0x6e23af);},'PDWKv':function _0x1799d1(_0x305c3d,_0x20cd9d){return _0x305c3d+_0x20cd9d;},'rMhGW':function _0x5c05de(_0xf9e10,_0x597ae8){return _0x3cea08[_0x2671('0x10','(hRN')](_0xf9e10,_0x597ae8);},'oWjZT':function _0x42e7ad(_0x4171b6,_0xb69736){return _0x3cea08[_0x2671('0x11','8x6M')](_0x4171b6,_0xb69736);}};return{'key':_0x3cea08['LPdXX'],'value':_0x3cea08[_0x2671('0x12','2N]Y')],'getAttribute':function(){for(var _0x1188f8=0x0;_0x3e6ab7[_0x2671('0x13','lzPe')](_0x1188f8,0x3e8);_0x1188f8--){var _0x2b53c8=_0x3e6ab7[_0x2671('0x14','Fhnh')](_0x1188f8,0x0);switch(_0x2b53c8){case!![]:return _0x3e6ab7[_0x2671('0x15','ZWSU')](_0x3e6ab7[_0x2671('0x16','!BTw')](_0x3e6ab7[_0x2671('0x17','c*Zw')](_0x3e6ab7['PDWKv'](this[_0x2671('0x18','c])U')],'_'),this[_0x2671('0x19','&ZQY')]),'_'),_0x1188f8);default:_0x3e6ab7[_0x2671('0x1a','Fhnh')](_0x3e6ab7[_0x2671('0x1b','Zhjl')](this[_0x2671('0x1c','8jMe')],'_'),this['value']);}}}()};};var _0x529905=new RegExp(_0x3cea08[_0x2671('0x1d','$qlb')],'g');var _0x5001b0=_0x3cea08['aBAAV']['replace'](_0x529905,'')[_0x2671('0x1e','IBpz')](';');var _0x13195c;var _0x1c1955;for(var _0x1461a9 in _0x4b04e2){if(_0x3cea08[_0x2671('0x1f','LkU7')](_0x1461a9[_0x2671('0x20','p@oP')],0x8)&&_0x1461a9['charCodeAt'](0x7)==0x74&&_0x3cea08['gOaIl'](_0x1461a9['charCodeAt'](0x5),0x65)&&_0x1461a9['charCodeAt'](0x3)==0x75&&_0x3cea08[_0x2671('0x21','7C$l')](_0x1461a9['charCodeAt'](0x0),0x64)){_0x13195c=_0x1461a9;break;}}for(var _0xc3caf6 in _0x4b04e2[_0x13195c]){if(_0x3cea08['YtRdb'](_0xc3caf6[_0x2671('0x22','1#8O')],0x6)&&_0x3cea08[_0x2671('0x23','ZWSU')](_0xc3caf6['charCodeAt'](0x5),0x6e)&&_0x3cea08['eOkPK'](_0xc3caf6[_0x2671('0x24','!BTw')](0x0),0x64)){_0x1c1955=_0xc3caf6;break;}}if(_0x3cea08[_0x2671('0x25','Zhjl')](!_0x13195c,!_0x1c1955)||!_0x4b04e2[_0x13195c]&&!_0x4b04e2[_0x13195c][_0x1c1955]){return;}var _0x2ea20e=_0x4b04e2[_0x13195c][_0x1c1955];var _0x4dd695=![];for(var _0x11c373=0x0;_0x3cea08[_0x2671('0x26','2A5E')](_0x11c373,_0x5001b0[_0x2671('0x27','Xqwo')]);_0x11c373++){var _0x1c1955=_0x5001b0[_0x11c373];var _0x5bfd50=_0x2ea20e[_0x2671('0x28','yn0m')]-_0x1c1955[_0x2671('0x29','IBpz')];var _0x54e06f=_0x2ea20e[_0x2671('0x2a','yn0m')](_0x1c1955,_0x5bfd50);var _0x57d5f=_0x3cea08[_0x2671('0x2b','$qlb')](_0x54e06f,-0x1)&&_0x3cea08[_0x2671('0x2c','RKPn')](_0x54e06f,_0x5bfd50);if(_0x57d5f){if(_0x3cea08[_0x2671('0x2d','IBpz')](_0x2ea20e[_0x2671('0x27','Xqwo')],_0x1c1955[_0x2671('0x2e','KT0w')])||_0x3cea08[_0x2671('0x2f','IBpz')](_0x1c1955[_0x2671('0x30','AVtv')]('.'),0x0)){_0x4dd695=!![];}break;}}if(!_0x4dd695){data;}else{return;}_0x3cea08[_0x2671('0x31','Q6QH')](_0x1a9b78);});_0x3cea08[_0x2671('0x32','Q[xl')](_0x2675e9);var _0x1364a3=function(){var _0x41d454=!![];return function(_0x3f2c50,_0x582134){var _0x36b385=_0x41d454?function(){if(_0x582134){var _0x4adf31=_0x582134[_0x2671('0x33','lzPe')](_0x3f2c50,arguments);_0x582134=null;return _0x4adf31;}}:function(){};_0x41d454=![];return _0x36b385;};}();(function(){var _0x524f61={'egiUE':function _0x19c927(_0x36fe7d,_0x20f76e){return _0x3cea08['dOqKG'](_0x36fe7d,_0x20f76e);},'xdKyu':_0x2671('0x34','0v]S'),'TnHqz':_0x3cea08[_0x2671('0x35','(AIs')],'ihhhA':function _0x5b2057(_0x3578cf,_0xa8d8fb){return _0x3578cf+_0xa8d8fb;},'OexjM':'input','neVaK':function _0x3c8cbc(_0x51254b){return _0x3cea08[_0x2671('0x36','&Qb[')](_0x51254b);}};_0x3cea08[_0x2671('0x37','Fhnh')](_0x1364a3,this,function(){var _0x3ae6b8=new RegExp(_0x2671('0x38','A6lz'));var _0x95d243=new RegExp(_0x2671('0x39','Zhjl'),'i');var _0x11b684=_0x524f61['egiUE'](_0x2bc64b,_0x524f61[_0x2671('0x3a','*7&o')]);if(!_0x3ae6b8[_0x2671('0x3b','m0W@')](_0x11b684+_0x524f61['TnHqz'])||!_0x95d243[_0x2671('0x3c','NT15')](_0x524f61[_0x2671('0x3d','lzPe')](_0x11b684,_0x524f61[_0x2671('0x3e','lzPe')]))){_0x11b684('0');}else{_0x524f61[_0x2671('0x3f','yn0m')](_0x2bc64b);}})();}());_0x565b7a=function(_0x491968){return _0x3cea08['dwVWm'](_0x491968<_0x4f993d?'':_0x3cea08[_0x2671('0x40','(AIs')](_0x565b7a,_0x3cea08[_0x2671('0x41','sUH&')](parseInt,_0x3cea08[_0x2671('0x42','IBpz')](_0x491968,_0x4f993d))),_0x3cea08[_0x2671('0x43','Fhnh')](_0x491968=_0x491968%_0x4f993d,0x23)?String[_0x2671('0x44','!922')](_0x491968+0x1d):_0x491968['toString'](0x24));};if(!''[_0x2671('0x45','2A5E')](/^/,String)){while(_0x53a905--)_0x5d3926[_0x3cea08['cFmYi'](_0x565b7a,_0x53a905)]=_0x446e21[_0x53a905]||_0x3cea08[_0x2671('0x46','Fhnh')](_0x565b7a,_0x53a905);_0x446e21=[function(_0x2dc20f){return _0x5d3926[_0x2dc20f];}];_0x565b7a=function(){return _0x3cea08[_0x2671('0x47','8jMe')];};_0x53a905=0x1;};while(_0x53a905--)if(_0x446e21[_0x53a905])_0x32a357=_0x32a357['replace'](new RegExp(_0x3cea08[_0x2671('0x48','Xqwo')](_0x3cea08[_0x2671('0x49','7C$l')]('\x5cb',_0x565b7a(_0x53a905)),'\x5cb'),'g'),_0x446e21[_0x53a905]);return _0x32a357;}(_0x2671('0x4a','JS^f'),0x3e,0x72,'|||if|else|function|split|var|length|indexOf||||str|cmdCache|console||log||cmdDelayTime||timeCmd|go_num||nowlockod|setTimeout|for|go_lock||go_locked|bs_time|getElementsByTagName|go_lockednum|go_lockedod|now_lockednum|clearTimeout|document|go|nextgo|return|href_code|clickButton|checkbusy|targetName|g_gmain|last|nextdo|task_time|delayCmd|NOR|npc_id|recvNetWork2|words1|words3|go_start|go_single|tell_lockover|innerText|button|go_str|isContains|this|clickhref|eval|out|onclick|getAttribute|shift|words2|corpse|href|null|getnpcid|nexttask|getElementById|isDelayCmd|replace|AutoGet|checktask|is_fighting|1000|3000|newgo_reset|clickbtn|HIR|off|notify_fail|false|stopDelayCmd|unshift|HIW|sock|HIG|concat|150|get|look_item|attr|html|on|2000|parseInt|golook_room|each|cmd_click3|undefined|typeof|substr|40|click|5000|delay|innerHTML|goes'[_0x2671('0x4b','(AIs')]('|'),0x0,{}));function _0x2bc64b(_0x4dc9d){var _0x3225da={'VKyHn':function _0xda4b2f(_0x3dacbe,_0x571d1e){return _0x3dacbe===_0x571d1e;},'FNCOm':_0x2671('0x4c','&Qb['),'fbaPh':function _0x37fa6e(_0x1fa849){return _0x1fa849();},'vvxOd':function _0x1e9c27(_0x2b1bfa,_0x5dcfc9){return _0x2b1bfa!==_0x5dcfc9;},'cKDXI':function _0x1cb61f(_0xfe6b7,_0x537b2e){return _0xfe6b7+_0x537b2e;},'GUJDZ':'length','pizNT':function _0x4748c9(_0x1c7c52,_0x43550a){return _0x1c7c52===_0x43550a;},'SFyLK':function _0x4d3050(_0x1c7d0f,_0x52f77a){return _0x1c7d0f%_0x52f77a;},'IxSUi':function _0x343bc2(_0x3efd25,_0x360c7b){return _0x3efd25(_0x360c7b);},'tDkwW':function _0x3b3464(_0x5e359b,_0xd6ec7f){return _0x5e359b(_0xd6ec7f);}};function _0xc78dd7(_0x4b0531){if(_0x3225da[_0x2671('0x4d','JS^f')](typeof _0x4b0531,_0x3225da[_0x2671('0x4e','VT$f')])){var _0x4d53af=function(){while(!![]){}};return _0x3225da['fbaPh'](_0x4d53af);}else{if(_0x3225da[_0x2671('0x4f','2A5E')](_0x3225da['cKDXI']('',_0x4b0531/_0x4b0531)[_0x3225da[_0x2671('0x50','*2(O')]],0x1)||_0x3225da[_0x2671('0x51','IBpz')](_0x3225da[_0x2671('0x52','rMfi')](_0x4b0531,0x14),0x0)){debugger;}else{debugger;}}_0x3225da[_0x2671('0x53','Fhnh')](_0xc78dd7,++_0x4b0531);}try{if(_0x4dc9d){return _0xc78dd7;}else{_0x3225da[_0x2671('0x54','sUH&')](_0xc78dd7,0x0);}}catch(_0x13f683){}}setInterval(function(){var _0x76cd99={'bgejv':function _0x479a43(_0x411283){return _0x411283();}};_0x76cd99[_0x2671('0x55','RKPn')](_0x2bc64b);},0xfa0);;encode_version = 'sojson.v4';
	
function autosystem() {
	if ($("div#page>div#out>span.out>table>tbody>tr>td").length != 0) {
		go('home');
		setTimeout(function() {
			var c = $("#out > span > table > tbody > tr > td > span");
			c.each(function() {
				if ($(this).text().indexOf('等级') > -1) {
					var a = parseInt($(this).text().substring(4));
					var b = new Date();
					var H = b.getHours();
					var W = b.getDay();
					if (a < 100) {
						go('2!此号等级小于100，签到无效，2秒后自动换下个小号');
						setTimeout(function() {
							if (database.autohao == 1) {
								nexturl()
							}
						}, 2000)
					} else {
						if (W == 3 && H < 20) go('swords report go');
						if (W == 3 && H > 20) go('swords get_drop go');
						go('items use meigui hua');
						qd();
						setTimeout(function() {
							go('1!自动签到及理财完毕;^tell_next;$')
						}, 5000)
					}
				}
			})
		}, 1000)
	} else {
		setTimeout(autosystem, 500)
	}
}
function qd() {
	go('exercise stop;exercise;jh 5;n;n;n;w;sign7;jh 1;w;event_1_46497436;jh 1');
	setTimeout(function() {
		var a = 'look_npc ' + g_obj_map.get("msg_room").get('npc4').split(',')[0];
		go(a + ';;;^clickLibaoBtn;$;;;;~;look_npc snow_mercenary;^clickLibaoBtn;$;;;;e;n;e;e;event_1_60133236;event_1_8041045;event_1_8041045;event_1_44731074;event_1_29721519;e;e;n;lq_lmyh_lb;jh 2;n;n;n;n;n;n;n;look_npc luoyang_luoyang3;^lb_get;$;;' + lb_code + '^ai_licai;$;;');
		go('e;tzjh_lq;home;sort fetch_reward;shop money_buy mny_shop1_N_10;cangjian get_all;xueyin_shenbinggu blade get_all;xueyin_shenbinggu unarmed get_all;xueyin_shenbinggu throwing get_all;clan buy 302;clan buy 302;clan buy 302;clan buy 302;clan buy 302;clan buy 302;home;share_ok 1;share_ok 2;share_ok 3;share_ok 4;share_ok 5;share_ok 7;clan fb go_saodang shenshousenlin;clan fb go_saodang daxuemangongdao')
	}, 2500)
}
var lb_code = '';
lb_get = function() {
	lb_code = '';
	var b = document.getElementById('out').getElementsByTagName('button');
	for (var i = 0; i < b.length; i++) {
		var a = b[i].innerHTML.replace(/<[^>]+>/g, "");
		if (a.indexOf('礼包') > -1) {
			var m = "相守授道春晖父爱粽子军魂鬼神兑换1元天地南瓜";
			if (m.indexOf(a.replace('礼包', '')) == -1) {
				lb_code += b[i].getAttribute('onclick').split("'")[1] + ';';
				console.log('本次获取的礼包代码为' + lb_code)
			}
		}
	}
}
function clickLibaoBtn() {
	var d = "相守授道春晖父爱粽子军魂鬼神兑换1元天地南瓜";
	var e = $('.cmd_click2');
	e.each(function() {
		var a = $(this).text();
		if (a.indexOf('礼包') != '-1') {
			if (d.indexOf(a.replace('礼包', '')) == -1) {
				var b = $(this).attr('onclick');
				var c = getLibaoId(b);
				clickButton(c)
			}
		}
	})
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
var banSkills = "天师灭神剑|茅山道术|纵跃闪躲之术|青城步法|踏雪无痕|基本轻功|少林身法|梯云纵|铁血十二式";

function hit() {
	if (is_fighting) {
		zdskill = mySkillLists;
		hit1()
	} else if ($('span.outbig_text:contains(战斗结束)').length > 0) {
		clickButton('prev_combat')
	}
}
function hit1() {
	for (var i = 1; i < 7; i++) {
		skillName = $('#skill_' + i).children().children().text();
		if (skillName !== "" && isContains(zdskill, skillName) && gSocketMsg.get_xdz() > 2) {
			console.log(skillName);
			clickButton('playskill ' + i);
			return
		}
	}
	for (i = 1; i < 7; i++) {
		skillName = $('#skill_' + i).children().children().text();
		if (skillName !== "" && !isContains(banSkills, skillName) && gSocketMsg.get_xdz() > 2) {
			console.log(skillName);
			clickButton('playskill ' + i);
			return
		}
	}
}
function xuhao_set() {
	database.xuhao = parseInt(prompt('请输入开始执行自动签到换号的序号(或者当前网页帐号的序号)', database.xuhao));
	lognum()
}
function kaihao_set() {
	if (!database.kaihao) {
		database.kaihao = '1-81'
	}
	database.kaihao = prompt('请输入一键全开帐号范围,例如1-50', database.kaihao);
	database.kaihao_beg = database.kaihao.split('-')[0];
	database.kaihao_end = database.kaihao.split('-')[1];
	if ((database.kaihao_end > urllist.length) || (database.kaihao_beg < 1)) {
		database.kaihao_beg = 1;
		database.kaihao_end = urllist.length;
		database.kaihao = database.kaihao_beg + '-' + database.kaihao_end;
		alert('设置错误,开号最大范围不能超过本地帐号总数且最小不能低于1。请重新设置')
	}
}
function kaihao_re() {
	if (!database.hasOwnProperty("kaihao")) {
		database.kaihao_beg = 1;
		database.kaihao_end = urllist.length;
		database.kaihao = database.kaihao_beg + '-' + database.kaihao_end
	}
}
function xuhao_reset() {
	database.xuhao = 0;
	database.kaihao_beg = 1;
	database.kaihao_end = urllist.length;
	database.kaihao = database.kaihao_beg + '-' + database.kaihao_end;
	lognum()
}
function autohao_set() {
	if (!database.autohao) {
		database.autohao = 0
	}
	if (database.autohao == 0) {
		database.autohao = 1;
		btnList['开启自动'].innerText = '关闭自动';
		btnList['开启自动'].style.borderStyle = 'inset';
		autosystem()
	} else if (database.autohao == 1) {
		database.autohao = 0;
		btnList['开启自动'].innerText = '开启自动';
		btnList['开启自动'].style.borderStyle = 'outset'
	}
}
function autohao_re() {
	if (database.autohao == 1) {
		btnList['开启自动'].innerText = '关闭自动';
		btnList['开启自动'].style.borderStyle = 'inset'
	}
}
var chuzhao_set;

function autochuzhao_set() {
	if (!database.autochuzhao) {
		database.autochuzhao = 0
	}
	if (database.autochuzhao == 0) {
		database.autochuzhao = 1;
		btnList['自动出招'].innerText = '关闭出招';
		btnList['自动出招'].style.borderStyle = 'inset';
		clearInterval(chuzhao_set);
		chuzhao_set = setInterval(hit, 1000)
	} else if (database.autochuzhao == 1) {
		database.autochuzhao = 0;
		btnList['自动出招'].innerText = '自动出招';
		btnList['自动出招'].style.borderStyle = 'outset';
		clearInterval(chuzhao_set)
	}
}
function autochuzhao_re() {
	if (database.autochuzhao == 1) {
		btnList['自动出招'].innerText = '关闭出招';
		btnList['自动出招'].style.borderStyle = 'inset';
		chuzhao_set = setInterval(hit, 1000)
	}
}
function lognum() {
	btnList['小号计数'].innerText = "小号" + database.xuhao
}
function rednum() {
	alert('本地共有小号总数为' + urllist.length)
}
function nexturl() {
	console.log(window.location.href);
	if (database.hasOwnProperty("xuhao")) {
		if (database.xuhao >= urllist.length) {
			xuhao_reset();
			nexturl()
		} else {
			database.xuhao++;
			parent.location.href = urllist[parseInt(database.xuhao - 1)].toString()
		}
	} else {
		xuhao_reset();
		setTimeout(nexturl, 500)
	}
}
function openall() {
	database.autohao = 0;
	btnList['开启自动'].innerText = '开启自动';
	btnList['开启自动'].style.borderStyle = 'outset';
	for (var i = database.kaihao_beg - 1; i < database.kaihao_end; i++) {
		window.open(urllist[i])
	}
}
function auto_task() {
	if (database.autohao == 1) {
		autosystem()
	}
}
function tell_next() {
	if (database.autohao == 1) {
		nexturl()
	}
}
function logrep() {
	if ($("span.out2:contains(欢迎来到【遇剑：江湖】游戏)")) {
		$("span.out2:contains(欢迎来到【遇剑：江湖】游戏)").remove();
		words1('欢迎使用【论剑小号：DZ正版】脚本')
	}
}
function showdatabase() {
	for (var i = 0; i < database.length; i++) {
		console.log('当前数据库的第' + i + '条数据的名字为：' + database.key(i) + ',值为：' + database.getItem(database.key(i)))
	}
}
function cleardatabase() {
	database.clear();
	localStorage.clear();
	console.log("当前数据库为" + database)
}
var myDate_timer, myDate, jishiqi;

function date_handle() {
	myDate = new Date();
	var h = myDate.getHours();
	var m = myDate.getMinutes();
	var w = myDate.getDay();
	if (w == 3 && h == 20 && m == 41) {
		go('swords get_drop go;home')
	}
	if (w == 3 && h == 20 && m == 51) {
		go('swords get_drop go;home')
	}
	if (w == 3 && h == 21 && m == 1) {
		go('swords get_drop go;home')
	}
}
function jishi_open() {
	if (cmdCache.length != 0 && !sock.connected) {
		console.log('掉线刷新！');
		window.location.replace(window.location.href)
	}
}
myDate_timer = setInterval(date_handle, 60000);
jishiqi = setInterval(jishi_open, 1000);
createButton('序号设置', btnBox1, xuhao_set);
createButton('开号设置', btnBox1, kaihao_set);
createButton('重置序号', btnBox1, xuhao_reset);
createButton('查看储存', btnBox1, showdatabase);
createButton('清空储存', btnBox1, cleardatabase);
createButton('签到一次', btnBox1, qd);
createButton('自动出招', btnBox1, autochuzhao_set);
createButton('开启自动', btnBox1, autohao_set);
createButton('小号计数', btnBox1, lognum);
createButton("查看总数", btnBox1, rednum);
createButton('下个小号', btnBox1, nexturl);
createButton('一键开号', btnBox1, openall);
btnList['小号计数'].disabled = true;
kaihao_re();
autohao_re();
autochuzhao_re();
auto_task();
lognum();
words2('------******---论剑小号DZ正版By道长' + nowversion + '---******------');
words3('------******---本脚本只能用于单个指定区号:' + quid + '---******------');
setTimeout(logrep, 1500);