 var qlnpc="";
 var ql_killset=0;
 var ql_num=0; //每次出青龙默认为0
 
 
 function killqlnpc(){
	 for(i=ql_num;i>0;i--){
		 if($('button.cmd_click3')[i].innerText.indexOf(qlnpc)>-1&&$('button.cmd_click3')[i].innerText.indexOf(qlnpc+'的尸体')==-1){
                ql_num = i-1;//方便下次逃跑后进场不从最后一个（从qlnum个倒数第二个）开始找
				if(cz_flag!=1){chuzhao_open();}
                opendonpc("杀死");
                    if(ql_killset==0){
					   var a=$('button.cmd_click3')[i-1].innerText;
					   var b=$('button.cmd_click3')[i-1].getAttribute('onclick').split("'")[1].split(" ")[1];
					    console.log('目标青龙好人：'+a+'-'+b);
						clickButton('look_npc '+b);
						//找出目标青龙好人名字和好人代码
                    }else{
					   var a=$('button.cmd_click3')[i].innerText;
					   var b=$('button.cmd_click3')[i].getAttribute('onclick').split("'")[1].split(" ")[1];
					   console.log('目标青龙恶人：'+a+'-'+b);
						clickButton('look_npc '+b);
						//找出目标青龙恶人名字和恶人代码
                    }
				triggers.enableByCls("ql_fight");	
				return;	
            }
		 
	 }
	    console.log('没有符合条件的青龙');
        triggers.disableByCls("ql_fight");
        triggers.disableByCls("ql_taopao");
        clearInterval(ql_tp);
        go_home();
        nowjob="";
 }
 
 function tell_killqlnpc(){//判断青龙杀人给qlnum赋初始值
	 if($('button.cmd_click3').text().indexOf('队伍')>-1)//判断有队伍
	 {
     console.log('本次判断你有队伍，从队伍前面开始找青龙');		 
	 for(i=0;i<$('button.cmd_click3').length;i++){
	 if($('button.cmd_click3')[i].innerText=='队伍')
	 {
		 ql_num=i-1;
		 console.log('队伍前个按钮：'+$('button.cmd_click3')[i-1].innerText+'-'+$('button.cmd_click3')[i-1].getAttribute('onclick').split("'")[1].split(" ")[1]);
		 //找出队伍前面一个按钮名字和按钮代码（跨服大多数时候就是目标恶人）
     }
	 }//找出队伍前面一个按钮的值，按钮名称，按钮代码,给qlnum赋初始值为队伍按钮的上一个按钮
	 killqlnpc();
	 }
	 
	 else{
		 console.log('本次判断你没有队伍，从最后一个按钮往前开始找青龙');
		 ql_num=$('button.cmd_click3').length-1;//判断没有队伍给qlnum赋初始值为当前场景按钮总长度
		 killqlnpc();
	 }
 }