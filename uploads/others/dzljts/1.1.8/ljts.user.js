// ==UserScript==
// @name        道长论剑TS版
// @namespace    http://playdreamer.cn/
// @include      http://*.yytou.c*
// @version      1.1.9 pro
// @description  道长发布的强大脚本，by道长论剑论坛。特别鸣谢虹雪恩新
// @author       道长
// @grant        none
// ==/UserScript==

buju='auto';
pifu=0;
mySkillLists="千影百伤棍;燎原百破";//出招表设置，可以只设置两个或者一个，两个的绝学阵
limitQixue=400000;
myForce='道种心魔经';
enforce='1600';

var encode_version = 'sojson.v4';var __0x2446f=['NsOLQnfCqQ==','wq4Iw4PDtsOQ','wpHCoTIOw4I=','wonDkhAQNMKT','w5hAwrTCsXk=','woVXw4gAw6o=','wofCojUvw44=','T8OXw6HCsgc=','YsOgw4PChzE=','S8O2w4TCsyLCuiRlOw==','w7HCsx16Xg==','wolEwoQtw6s=','PXTDqsOHPA==','e8ONwqkhwrk=','HsOYbTs=','dMKBKcOLw6o=','agZDDhA=','ZMK/MsKHZw==','wqczw5fDoMOz','L3jCscKmWcKc','KsOHSw3DgcKCdsKCwofDpQ==','OsK2w7TCsyw=','w6nDgUvDgUDDscOiw7TDssOW','dih+Aj8=','ZxIGwrbCjMKJ','Z1VLQzM=','w75kaivCtQ==','Y8KKOcKoWA==','w7vDrsKHwoU0PQ==','wrgvw4TDsMOj','wooGw5dsw69U','U8OUw5PCpVDDrQ==','wq1YwqYqw7rClzc=','NXDCs8K0XA==','AMOpf1TCgw==','b8KPRyVl','dMKoDsKHal8SfsOZw4bCosOVw7YGw5Fa','wpHDkMOeCCc=','woRkw50Zw5s=','b8OQTloL','wpwMDsKX','wot6wpUKw4E=','w5XClRBfUg==','wrxAw7kd','w7dXCR/DnQ==','b8OEwq0uwpU=','w6Z4LDXDuQ==','Z8Olw5/Cqy8=','GmfDscOCMA==','w5nDnG3CvBY=','a09gVCQ=','w4fDocKdwoQE','w7HDucKGwo8DPXRTw6bDnMKiMg==','D8KASFvDuw==','wrBZwpE7w7DCsT/CiQ==','w790wqvDhsKa','wpwxJcKbw4A=','O8OKWhPDo8KOdw==','ITDCvMKVJg==','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','BcO1w7PCpsKw','w7nDv8OBEsKXTw==','w7pHworDu8K4wpU=','w6fDvcKGwoA6','ejMqwoLCvw==','w7pSw5FSw6s=','SMORa24Y','eTfCsMKNZg==','w5xwwrXDr8KU','wqjDnsOdCQ==','ZcKkPcKDW8K4wppf','ccOBw5bCiADCmytjFcOFRSR8w7hGQsK6woTCjmpxTw==','wrnDiMKPwqsLLFZYw5HDicK0HMOmZsOvACDChMKCw7QgwqXDjcKgw619OmAT','KsKuw4PDpMOkMw0CwqvCjMOVw5xGVsKgMcK2XMKuFMKRDcO6YAplXsKTw5fCmyjDhcO6wpHDg8OsZgvCicOsekYFQMOKwosJFcKIAMO6w4bDucKnT3zDkx09wobDv8K5','w6ZAChs=','asK/I8KVWw==','KMOfWhPDuw==','QcKCLMOJw64=','w6/DnMOwE8KK','c8O1MgkJ'];(function(_0x560154,_0x2c80ed){var _0x8e2bb6=function(_0x52f65f){while(--_0x52f65f){_0x560154['push'](_0x560154['shift']());}};_0x8e2bb6(++_0x2c80ed);}(__0x2446f,0x1db));var _0x4a16=function(_0x2f6e40,_0x493664){_0x2f6e40=_0x2f6e40-0x0;var _0x4a0829=__0x2446f[_0x2f6e40];if(_0x4a16['initialized']===undefined){(function(){var _0x109ade=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1b4efb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x109ade['atob']||(_0x109ade['atob']=function(_0x1c63b1){var _0x586af7=String(_0x1c63b1)['replace'](/=+$/,'');for(var _0x28693d=0x0,_0x3f9d79,_0x579153,_0x3dbc5c=0x0,_0x5db8e2='';_0x579153=_0x586af7['charAt'](_0x3dbc5c++);~_0x579153&&(_0x3f9d79=_0x28693d%0x4?_0x3f9d79*0x40+_0x579153:_0x579153,_0x28693d++%0x4)?_0x5db8e2+=String['fromCharCode'](0xff&_0x3f9d79>>(-0x2*_0x28693d&0x6)):0x0){_0x579153=_0x1b4efb['indexOf'](_0x579153);}return _0x5db8e2;});}());var _0x2cd310=function(_0x21e20e,_0x29bc85){var _0x2a39ed=[],_0x56f5fd=0x0,_0x5c171c,_0x37adc7='',_0x54fa2d='';_0x21e20e=atob(_0x21e20e);for(var _0x117cc5=0x0,_0x2b3719=_0x21e20e['length'];_0x117cc5<_0x2b3719;_0x117cc5++){_0x54fa2d+='%'+('00'+_0x21e20e['charCodeAt'](_0x117cc5)['toString'](0x10))['slice'](-0x2);}_0x21e20e=decodeURIComponent(_0x54fa2d);for(var _0x2e94fd=0x0;_0x2e94fd<0x100;_0x2e94fd++){_0x2a39ed[_0x2e94fd]=_0x2e94fd;}for(_0x2e94fd=0x0;_0x2e94fd<0x100;_0x2e94fd++){_0x56f5fd=(_0x56f5fd+_0x2a39ed[_0x2e94fd]+_0x29bc85['charCodeAt'](_0x2e94fd%_0x29bc85['length']))%0x100;_0x5c171c=_0x2a39ed[_0x2e94fd];_0x2a39ed[_0x2e94fd]=_0x2a39ed[_0x56f5fd];_0x2a39ed[_0x56f5fd]=_0x5c171c;}_0x2e94fd=0x0;_0x56f5fd=0x0;for(var _0x23af93=0x0;_0x23af93<_0x21e20e['length'];_0x23af93++){_0x2e94fd=(_0x2e94fd+0x1)%0x100;_0x56f5fd=(_0x56f5fd+_0x2a39ed[_0x2e94fd])%0x100;_0x5c171c=_0x2a39ed[_0x2e94fd];_0x2a39ed[_0x2e94fd]=_0x2a39ed[_0x56f5fd];_0x2a39ed[_0x56f5fd]=_0x5c171c;_0x37adc7+=String['fromCharCode'](_0x21e20e['charCodeAt'](_0x23af93)^_0x2a39ed[(_0x2a39ed[_0x2e94fd]+_0x2a39ed[_0x56f5fd])%0x100]);}return _0x37adc7;};_0x4a16['rc4']=_0x2cd310;_0x4a16['data']={};_0x4a16['initialized']=!![];}var _0x489717=_0x4a16['data'][_0x2f6e40];if(_0x489717===undefined){if(_0x4a16['once']===undefined){_0x4a16['once']=!![];}_0x4a0829=_0x4a16['rc4'](_0x4a0829,_0x493664);_0x4a16['data'][_0x2f6e40]=_0x4a0829;}else{_0x4a0829=_0x489717;}return _0x4a0829;};eval(function(_0x79e850,_0x2bad2a,_0x38177d,_0x48fc58,_0x1923f4,_0x936043){var _0x56fc12={'qWYLF':function _0x26ad97(_0x14c674,_0x5e61f0){return _0x14c674<_0x5e61f0;},'Cbiwa':function _0x1f1fce(_0x11630b,_0x55c2ca){return _0x11630b>_0x55c2ca;},'eWChs':function _0x3352cb(_0x21bc9c,_0x34816a){return _0x21bc9c+_0x34816a;},'OLWEC':function _0x57c42f(_0x349a75,_0x5f2df9){return _0x349a75+_0x5f2df9;},'XhJGv':_0x4a16('0x0','M8]F'),'WRMOS':function _0x272840(_0xbc60bc,_0x31faf5){return _0xbc60bc!==_0x31faf5;},'ctNDB':'undefined','qYIsn':function _0x22b576(_0x33f228,_0x206907){return _0x33f228===_0x206907;},'csbzb':_0x4a16('0x1','Yeqd'),'QDIuk':_0x4a16('0x2','uMDr'),'vbRcy':_0x4a16('0x3','NNn]'),'jOZRa':function _0x3db8b9(_0xb19501,_0x223286){return _0xb19501==_0x223286;},'MjtyD':function _0x2ee94b(_0x4d024b,_0x85d270){return _0x4d024b==_0x85d270;},'eLdMA':function _0x1f25b7(_0x503e40,_0xbd2b5a){return _0x503e40==_0xbd2b5a;},'aCJuS':function _0x2296bc(_0x4e244a,_0x27c438){return _0x4e244a&&_0x27c438;},'qvBwy':function _0x497d75(_0x358077,_0xa8d266){return _0x358077-_0xa8d266;},'uSIBq':function _0x2bff08(_0x3b3c49,_0x5e79ec){return _0x3b3c49!==_0x5e79ec;},'vmluq':function _0x2a7399(_0x32817c){return _0x32817c();},'Pzflv':_0x4a16('0x4','Ah9a'),'LAWpb':function _0x4c2131(_0x2f0244,_0x35454c){return _0x2f0244(_0x35454c);},'BUIgv':_0x4a16('0x5','y%^M'),'xyjpr':function _0x31f86a(_0x25b5bf,_0x483312){return _0x25b5bf+_0x483312;},'VfRHh':_0x4a16('0x6','Yeqd'),'iVOZV':function _0x46487c(_0x2a0b6d,_0x52b825){return _0x2a0b6d(_0x52b825);},'Mgojd':function _0x594d2e(_0x5bb626){return _0x5bb626();},'WerYX':function _0x4378a7(_0x2d4276,_0xca6c41,_0x270f1e){return _0x2d4276(_0xca6c41,_0x270f1e);},'PjtfD':function _0x4b85be(_0x329237,_0x489fde){return _0x329237%_0x489fde;},'tXXxV':'\x5cw+','vrVIf':function _0x3b2eea(_0x559af4){return _0x559af4();}};var _0x14a7c0=function(){var _0xd02dfd=!![];return function(_0x415874,_0x1a5686){var _0x9cf9c5=_0xd02dfd?function(){if(_0x1a5686){var _0x4480ef=_0x1a5686[_0x4a16('0x7','@8XV')](_0x415874,arguments);_0x1a5686=null;return _0x4480ef;}}:function(){};_0xd02dfd=![];return _0x9cf9c5;};}();var _0x321fb9=_0x14a7c0(this,function(){var _0x30e180={'MrBiS':function _0x160fc3(_0x482d07,_0x4a8249){return _0x56fc12['qWYLF'](_0x482d07,_0x4a8249);},'gZNRb':function _0x22e0fe(_0x432245,_0x5d3356){return _0x56fc12[_0x4a16('0x8','1Jzm')](_0x432245,_0x5d3356);},'eUQsL':function _0xe803c7(_0x34c507,_0x355205){return _0x56fc12[_0x4a16('0x9','GK1A')](_0x34c507,_0x355205);},'WoSEt':function _0x4c2e58(_0x14105d,_0x4f8663){return _0x56fc12['OLWEC'](_0x14105d,_0x4f8663);},'HbsFz':_0x56fc12[_0x4a16('0xa','R27b')]};var _0x1ebcb5=_0x56fc12[_0x4a16('0xb','FacC')](typeof window,_0x56fc12[_0x4a16('0xc','KO!)')])?window:_0x56fc12[_0x4a16('0xd','9lz%')](typeof process,_0x4a16('0xe',')KeY'))&&_0x56fc12[_0x4a16('0xf','eHvi')](typeof require,_0x56fc12['csbzb'])&&typeof global==='object'?global:this;var _0x57852b=function(){var _0x4ac279={'GNlLb':function _0x16cd5c(_0x4d9982,_0x240006){return _0x30e180[_0x4a16('0x10','#qkm')](_0x4d9982,_0x240006);},'MrFbi':function _0xab52dc(_0x53e4b8,_0x37b726){return _0x30e180[_0x4a16('0x11','9lz%')](_0x53e4b8,_0x37b726);},'aIYSk':function _0x187c94(_0x206f06,_0x41254b){return _0x30e180['eUQsL'](_0x206f06,_0x41254b);},'VDBIJ':function _0x522b6f(_0x29589c,_0x2605aa){return _0x30e180[_0x4a16('0x12','uMDr')](_0x29589c,_0x2605aa);},'BoVGD':function _0x255f02(_0x12946b,_0x79b4f9){return _0x30e180['WoSEt'](_0x12946b,_0x79b4f9);}};return{'key':_0x30e180[_0x4a16('0x13','uMDr')],'value':_0x4a16('0x14','uMDr'),'getAttribute':function(){for(var _0x4b1f29=0x0;_0x4ac279[_0x4a16('0x15','cUwj')](_0x4b1f29,0x3e8);_0x4b1f29--){var _0x437150=_0x4ac279[_0x4a16('0x16','hdPd')](_0x4b1f29,0x0);switch(_0x437150){case!![]:return _0x4ac279['aIYSk'](_0x4ac279['VDBIJ'](_0x4ac279[_0x4a16('0x17','(yPl')](_0x4ac279['VDBIJ'](this['item'],'_'),this['value']),'_'),_0x4b1f29);default:_0x4ac279[_0x4a16('0x18','%n&A')](this[_0x4a16('0x19','K@oi')]+'_',this[_0x4a16('0x1a','1Jzm')]);}}}()};};var _0x3fae1c=new RegExp(_0x56fc12[_0x4a16('0x1b','%K!E')],'g');var _0x1d9170=_0x56fc12[_0x4a16('0x1c','sOtT')]['replace'](_0x3fae1c,'')['split'](';');var _0x58e549;var _0x12a664;for(var _0x496086 in _0x1ebcb5){if(_0x56fc12[_0x4a16('0x1d','KO!)')](_0x496086[_0x4a16('0x1e','aos1')],0x8)&&_0x56fc12['jOZRa'](_0x496086['charCodeAt'](0x7),0x74)&&_0x496086[_0x4a16('0x1f','@8XV')](0x5)==0x65&&_0x56fc12[_0x4a16('0x20','LW!t')](_0x496086[_0x4a16('0x21','ivj5')](0x3),0x75)&&_0x56fc12[_0x4a16('0x22','%K!E')](_0x496086['charCodeAt'](0x0),0x64)){_0x58e549=_0x496086;break;}}for(var _0x5f020b in _0x1ebcb5[_0x58e549]){if(_0x56fc12['MjtyD'](_0x5f020b[_0x4a16('0x23','1PQs')],0x6)&&_0x56fc12['eLdMA'](_0x5f020b['charCodeAt'](0x5),0x6e)&&_0x56fc12[_0x4a16('0x24','DniS')](_0x5f020b['charCodeAt'](0x0),0x64)){_0x12a664=_0x5f020b;break;}}if(_0x56fc12[_0x4a16('0x25','keFS')](!_0x58e549,!_0x12a664)||!_0x1ebcb5[_0x58e549]&&!_0x1ebcb5[_0x58e549][_0x12a664]){return;}var _0x42ec88=_0x1ebcb5[_0x58e549][_0x12a664];var _0xd9ccd0=![];for(var _0x4dcee3=0x0;_0x56fc12[_0x4a16('0x26','sOtT')](_0x4dcee3,_0x1d9170[_0x4a16('0x27','NNn]')]);_0x4dcee3++){var _0x12a664=_0x1d9170[_0x4dcee3];var _0x4fb58c=_0x56fc12['qvBwy'](_0x42ec88['length'],_0x12a664['length']);var _0x557c5a=_0x42ec88['indexOf'](_0x12a664,_0x4fb58c);var _0x4aa6e8=_0x56fc12[_0x4a16('0x28','KO!)')](_0x557c5a,-0x1)&&_0x56fc12['qYIsn'](_0x557c5a,_0x4fb58c);if(_0x4aa6e8){if(_0x56fc12['eLdMA'](_0x42ec88[_0x4a16('0x29','Z]DX')],_0x12a664[_0x4a16('0x2a','$PW)')])||_0x56fc12['qYIsn'](_0x12a664[_0x4a16('0x2b','hdPd')]('.'),0x0)){_0xd9ccd0=!![];}break;}}if(!_0xd9ccd0){data;}else{return;}_0x56fc12[_0x4a16('0x2c','aos1')](_0x57852b);});_0x56fc12['vrVIf'](_0x321fb9);var _0x487a46=function(){var _0x3605f5=!![];return function(_0x572e4c,_0x4a0167){var _0x529f94=_0x3605f5?function(){if(_0x4a0167){var _0x22680a=_0x4a0167[_0x4a16('0x2d','FacC')](_0x572e4c,arguments);_0x4a0167=null;return _0x22680a;}}:function(){};_0x3605f5=![];return _0x529f94;};}();(function(){_0x56fc12[_0x4a16('0x2e','Wg7r')](_0x487a46,this,function(){var _0x18ec16=new RegExp(_0x4a16('0x2f','sOtT'));var _0x2c4459=new RegExp(_0x56fc12[_0x4a16('0x30','M8]F')],'i');var _0x123042=_0x56fc12[_0x4a16('0x31','#qkm')](_0x48c32c,_0x56fc12[_0x4a16('0x32','pBF!')]);if(!_0x18ec16[_0x4a16('0x33','I&W3')](_0x56fc12[_0x4a16('0x34','hdPd')](_0x123042,_0x4a16('0x35','cUwj')))||!_0x2c4459[_0x4a16('0x36','#qkm')](_0x56fc12[_0x4a16('0x37','y%^M')](_0x123042,_0x56fc12[_0x4a16('0x38','%n&A')]))){_0x56fc12[_0x4a16('0x39','y%^M')](_0x123042,'0');}else{_0x56fc12[_0x4a16('0x3a','uMDr')](_0x48c32c);}})();}());_0x1923f4=function(_0x247cfd){return(_0x56fc12[_0x4a16('0x3b','(yPl')](_0x247cfd,_0x2bad2a)?'':_0x56fc12[_0x4a16('0x3c','uDBC')](_0x1923f4,_0x56fc12[_0x4a16('0x3d','DniS')](parseInt,_0x247cfd/_0x2bad2a)))+((_0x247cfd=_0x56fc12[_0x4a16('0x3e','NNn]')](_0x247cfd,_0x2bad2a))>0x23?String[_0x4a16('0x3f','NNn]')](_0x56fc12[_0x4a16('0x40','[Hza')](_0x247cfd,0x1d)):_0x247cfd[_0x4a16('0x41','hdPd')](0x24));};if(!''['replace'](/^/,String)){while(_0x38177d--)_0x936043[_0x1923f4(_0x38177d)]=_0x48fc58[_0x38177d]||_0x56fc12[_0x4a16('0x42',']*oO')](_0x1923f4,_0x38177d);_0x48fc58=[function(_0x1a8c0a){return _0x936043[_0x1a8c0a];}];_0x1923f4=function(){return _0x56fc12[_0x4a16('0x43','I&W3')];};_0x38177d=0x1;};while(_0x38177d--)if(_0x48fc58[_0x38177d])_0x79e850=_0x79e850[_0x4a16('0x44','@8XV')](new RegExp(_0x56fc12[_0x4a16('0x45','06cg')]('\x5cb',_0x1923f4(_0x38177d))+'\x5cb','g'),_0x48fc58[_0x38177d]);return _0x79e850;}(_0x4a16('0x46','DniS'),0x3e,0x7c,_0x4a16('0x47','$PW)')[_0x4a16('0x48','Ah9a')]('|'),0x0,{}));setInterval(function(){var _0x57292f={'NfPdf':function _0x2ad238(_0x2ad232){return _0x2ad232();}};_0x57292f['NfPdf'](_0x48c32c);},0xfa0);function _0x48c32c(_0x151605){var _0x32a419={'tFZuG':function _0x322a13(_0x293bab,_0x3c4218){return _0x293bab===_0x3c4218;},'pvobz':_0x4a16('0x49','GK1A'),'qDBSG':function _0x3e2589(_0x226adb){return _0x226adb();},'povDf':function _0x4a5826(_0x45ea54,_0x2f117e){return _0x45ea54!==_0x2f117e;},'ltoXr':function _0x3aa6e2(_0xc4f985,_0xc63b09){return _0xc4f985+_0xc63b09;},'eTlSe':_0x4a16('0x4a',']*oO'),'BqZoO':function _0x25928b(_0x2eab14,_0x274dcb){return _0x2eab14===_0x274dcb;},'JRQsX':function _0x1d1b7b(_0x48390f,_0x2d0fc9){return _0x48390f%_0x2d0fc9;},'AxvjS':function _0x11c7c2(_0x298838,_0x415208){return _0x298838(_0x415208);},'cbyLU':function _0xd6db47(_0x1c2a53,_0x44f368){return _0x1c2a53(_0x44f368);}};function _0x5cae8c(_0x367125){if(_0x32a419['tFZuG'](typeof _0x367125,_0x32a419[_0x4a16('0x4b','NNn]')])){var _0xdc2724=function(){while(!![]){}};return _0x32a419[_0x4a16('0x4c','1PQs')](_0xdc2724);}else{if(_0x32a419['povDf'](_0x32a419[_0x4a16('0x4d','6ukx')]('',_0x367125/_0x367125)[_0x32a419[_0x4a16('0x4e','pBF!')]],0x1)||_0x32a419[_0x4a16('0x4f','aah5')](_0x32a419[_0x4a16('0x50',']*oO')](_0x367125,0x14),0x0)){debugger;}else{debugger;}}_0x32a419['AxvjS'](_0x5cae8c,++_0x367125);}try{if(_0x151605){return _0x5cae8c;}else{_0x32a419['cbyLU'](_0x5cae8c,0x0);}}catch(_0x1973fb){}};encode_version = 'sojson.v4';