
var seconds;										//倒數時間秒數
var temp;	
var objid;		//leaf id
var scr_cnt = 0;//score counter
var plc_cnt = 0;//leaf place counter
var winchk = 0;

function func_bt_start(){							//開始遊戲按鈕
	//var lfa1 = $("#lfa1");
	//var curlfa1 = $('#lfa1').css('top');
	document.getElementById("div_bt_start").style.display = "none";
	document.getElementById("descri-sec").style.display = "none";
	document.getElementById("main-sec").style.visibility = "visible";
	//lfa1.animate({top: '+=400px'}, 10000).fadeTo({queue: false, duration: 10600},0);
	//lfa1.animate({left: '100px'}, "slow");

	countdown();
	func_main2();
}
function func_bt_replay(){							//重玩遊戲按鈕
	location.reload();
}


function countdown() {								//倒數功能
	//var lfa1 = document.getElementById("lfa1");
	seconds = document.getElementById('timerCount').innerHTML;
	var scoreSHOW = document.getElementById("score_show");
	if(plc_cnt != 15 && winchk==0){
		seconds = parseInt(seconds, 10);  
		if (seconds == 0) {
			scoreSHOW.innerHTML = "時間到！再試一次！";
			//temp.innerHTML = "遊戲結束！耗時： " + times + "秒 ";
			document.getElementById("bt_replay").style.display = "initial";
  			$( ".drag-reality,.drag-school" ).draggable( "option", "disabled", true );
			$(".drag-reality,.drag-school").attr("draggable","false");
			return;
		}     
		//if(seconds==0){return};
		//shwscore();
		seconds--;
		//div.animate({top: '100px'}, 10000).fadeTo({queue: false, duration: 10600},0);
		
		temp = document.getElementById('timerCount');
		temp.innerHTML = seconds + "秒 ";
		timeoutMyOswego = setTimeout(countdown, 1000);
	}
}

function shwscore() {
	var scoreSHOW = document.getElementById("score_show");
	var times = 90 - seconds;
	scoreSHOW.innerHTML = "得分： " + scr_cnt + " ";
	/*if(plc_cnt<15 && seconds == 0){
		scoreSHOW.innerHTML = "時間到！得分： " + scr_cnt + " ";
		//temp.innerHTML = "遊戲結束！耗時： " + times + "秒 ";
		document.getElementById("bt_replay").style.display = "initial";
  		$( ".drag-reality,.drag-school" ).draggable( "option", "disabled", true );
		$(".drag-reality,.drag-school").attr("draggable","false");
	}*/
	if(seconds!=0 && plc_cnt==15){
		if(scr_cnt == 15){
			scoreSHOW.innerHTML = "恭喜過關！得分： " + scr_cnt + " ";
			temp.innerHTML = "耗時： " + times + "秒 ";
		}
		else if(scr_cnt<15 && scr_cnt>=1){
			scoreSHOW.innerHTML = "再試一次！得分： " + scr_cnt + " ";
			temp.innerHTML = "耗時： " + times + "秒 ";		
		}
		document.getElementById("bt_replay").style.display = "initial";
  		$( ".drag-reality,.drag-school" ).draggable( "option", "disabled", true );
		$(".drag-reality,.drag-school").attr("draggable","false");
	}
	
}

function cntCHK()	{								//成功遊戲功能
	if	(seconds!=0 && scr_cnt == 15 && winchk==0){
		winchk=1;
		temp.innerHTML = "恭喜答對！共花了 "+ seconds + "秒 ";
		document.getElementById("bt_replay").style.display = "initial";
		//document.getElementById("bt_replay").style.display = "initial";
		//document.getElementById("img_pass").style.visibility = "visible";
		//swal({   title: "恭喜答對!",text:"yeahhhh"});
		//alert("恭喜答對!");
	}
}



function func_main2(){
	var scoreSHOW = document.getElementById("score_show");
	$( ".drag-reality,.drag-school" ).draggable({
  		scroll: false
	});
    $( "#basket_reality" ).droppable({
	containment: 'parent',
    drop: function( event, ui ) {
		$(this)
		ui.draggable.fadeOut(1000,function(){			//set draggable object fade
			objid = ui.draggable.attr("id");		//get draggable object id
			plc_cnt = plc_cnt + 1;
			//scoreSHOW.innerHTML = "PLC" + plc_cnt;
			if(objid == "lfa1" || objid == "lfa2" || objid == "lfa3" || objid == "lfa4" || objid == "lfa5"){
				scr_cnt = scr_cnt + 1;
				//alert(scr_cnt);	
				
				//cntCHK();
				
			}
			shwscore();
		});
    }
    });	
	$( "#basket_school" ).droppable({
	containment: 'parent',
    drop: function( event, ui ) {
		$(this)
		ui.draggable.fadeOut(1000,function(){			//set draggable object fade
			objid = ui.draggable.attr("id");		//get draggable object id
			plc_cnt = plc_cnt + 1;
			//scoreSHOW.innerHTML = "PLC" + plc_cnt;
			if(objid == "lfb1" || objid == "lfb2" || objid == "lfb3" || objid == "lfb4" || objid == "lfb5" 
			|| objid == "lfb6" || objid == "lfb7" || objid == "lfb8" || objid == "lfb9" || objid == "lfb10"){
				scr_cnt = scr_cnt + 1;
				//alert(scr_cnt);	
				
				//cntCHK();
			}
			shwscore();
		});
    }
    });	
}
	


