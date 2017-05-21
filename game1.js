
var seconds;										//倒數時間秒數
var temp = document.getElementById('timerCount');	
var countCheck = 0;									//選擇正確記錄 （數字達 3 順利完成遊戲）
var failCheck = 0;									//錯誤記錄 1為錯誤
var img1CHK = 0;
var img2CHK = 0;
var img3CHK = 0;
var img4CHK = 0;
var img5CHK = 0;
var img6CHK = 0;
var img7CHK = 0;

function func_bt_start(){							//開始遊戲按鈕
	document.getElementById("div_bt_start").style.display = "none";
	document.getElementById("main-sec").style.visibility = "visible";
	
	countdown();
}
function func_bt_replay(){							//重玩遊戲按鈕
	location.reload();
}

function countdown() {								//倒數功能
	seconds = document.getElementById('timerCount').innerHTML;
	if(countCheck != 3 && failCheck == 0){
		seconds = parseInt(seconds, 10);  
		if (seconds == 0) {
			//alert("時間結束！");
			temp.innerHTML = "時間結束！";
			document.getElementById("bt_replay").style.display = "initial";
			return;
		}     
		seconds--;
		temp = document.getElementById('timerCount');
		temp.innerHTML = seconds;
		timeoutMyOswego = setTimeout(countdown, 1000);
	}
}

function cntCHK()	{								//成功遊戲功能
	var times = 15-seconds;
	if	(countCheck == 3 && failCheck == 0){
		temp.innerHTML = "恭喜答對！共花了 "+ times + "秒";
		document.getElementById("bt_replay").style.display = "initial";
		//document.getElementById("img_pass").style.visibility = "visible";
		//swal({   title: "恭喜答對!",text:"yeahhhh"});
		//alert("恭喜答對!");
	}

}
function msoverimg1(){
	if(seconds >= 1 && failCheck == 0 && img1CHK == 0){
		document.getElementById("img1").src="image/game1/shaonian_over.png";
	}
}
function msoutimg1(){
	if(seconds >= 1 && failCheck == 0 && img1CHK == 0){
		document.getElementById("img1").src="image/game1/shaonian.png";
	}
}
function msoverimg2(){
	if(seconds >= 1 && failCheck == 0 && img2CHK == 0){
		document.getElementById("img2").src="image/game1/simang_over.png";
	}
}
function msoutimg2(){
	if(seconds >= 1 && failCheck == 0 && img2CHK == 0){
		document.getElementById("img2").src="image/game1/simang.png";
	}
}
function msoverimg3(){
	if(seconds >= 1 && failCheck == 0 && img3CHK == 0){
		document.getElementById("img3").src="image/game1/lwerzi_over.png";
	}
}
function msoutimg3(){
	if(seconds >= 1 && failCheck == 0 && img3CHK == 0){
		document.getElementById("img3").src="image/game1/lwerzi.png";
	}
}
function msoverimg4(){
	if(seconds >= 1 && failCheck == 0 && img4CHK == 0){
		document.getElementById("img4").src="image/game1/yqns_over.png";
	}
}
function msoutimg4(){
	if(seconds >= 1 && failCheck == 0 && img4CHK == 0){
		document.getElementById("img4").src="image/game1/yqns.png";
	}
}
function msoverimg5(){
	if(seconds >= 1 && failCheck == 0 && img5CHK == 0){
		document.getElementById("img5").src="image/game1/lwaoguang_over.png";
	}
}
function msoutimg5(){
	if(seconds >= 1 && failCheck == 0 && img5CHK == 0){
		document.getElementById("img5").src="image/game1/lwaoguang.png";
	}
}
function msoverimg6(){
	if(seconds >= 1 && failCheck == 0 && img6CHK == 0){
		document.getElementById("img6").src="image/game1/daozhang_over.png";
	}
}
function msoutimg6(){
	if(seconds >= 1 && failCheck == 0 && img6CHK == 0){
		document.getElementById("img6").src="image/game1/daozhang.png";
	}
}
function msoverimg7(){
	if(seconds >= 1 && failCheck == 0 && img7CHK == 0){
		document.getElementById("img7").src="image/game1/nzfm_over.png";
	}
}
function msoutimg7(){
	if(seconds >= 1 && failCheck == 0 && img7CHK == 0){
		document.getElementById("img7").src="image/game1/nzfm.png";
	}
}
function img1_check()	{							//image listener & respond
	if(seconds >= 1 && failCheck == 0 && img1CHK == 0){
		document.getElementById("img1").src = "image/game1/shaonian_correct.png";
		countCheck = countCheck + 1;
		img1CHK = 1;
		cntCHK();
	}
}
function img2_check()	{
	if(seconds >=1 && failCheck == 0 && countCheck != 3) {
		temp.innerHTML = "作答錯誤 遊戲失敗！\n ";
		document.getElementById("bt_replay").style.display = "initial";
		document.getElementById("img2").src = "image/game1/simang_wrong.png";
		img2CHK = 1;
		failCheck = 1;
	}
}
function img3_check()	{
	if(seconds >= 1 && failCheck == 0 && img3CHK == 0){
		document.getElementById("img3").src = "image/game1/lwerzi_correct.png";
		countCheck = countCheck + 1;
		img3CHK = 1;	
		cntCHK();
	}
}
function img4_check()	{
	if(seconds >= 1 && failCheck == 0 && img4CHK == 0){
		document.getElementById("img4").src = "image/game1/yqns_right.png";
		countCheck = countCheck + 1;
		img4CHK = 1;
		cntCHK();
	}
}
function img5_check()	{
	if(seconds >=1 && failCheck == 0 && countCheck != 3) {
		temp.innerHTML = "作答錯誤 遊戲失敗！\n ";
		document.getElementById("bt_replay").style.display = "initial";
		document.getElementById("img5").src = "image/game1/lwaoguang_wrong.png";
		img5CHK = 1;
		failCheck = 1;
	}
}
function img6_check()	{
	if(seconds >=1 && failCheck == 0 && countCheck != 3) {
		temp.innerHTML = "作答錯誤 遊戲失敗！\n ";
		document.getElementById("bt_replay").style.display = "initial";
		document.getElementById("img6").src = "image/game1/daozhang_wrong.png";
		img6CHK = 1;
		failCheck = 1;
	}
}
function img7_check()	{
	if(seconds >=1 && failCheck == 0 && countCheck != 3) {
		temp.innerHTML = "作答錯誤 遊戲失敗！\n ";
		document.getElementById("bt_replay").style.display = "initial";
		document.getElementById("img7").src = "image/game1/nzfm_wrong.png";
		img7CHK = 1;
		failCheck = 1;
	}
}