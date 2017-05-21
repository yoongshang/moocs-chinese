
function ttlover(){
	document.getElementById("ttl").src = "image/title1-2.png";
}
function ttlout(){
	document.getElementById("ttl").src = "image/title1.png";
}
function msover1(){
	document.getElementById("imgbt1").style.backgroundColor = "#9ab300";	
}
function msout1(){
	document.getElementById("imgbt1").style.backgroundColor = "#d3e94c";
}
function msover2(){
	document.getElementById("imgbt2").style.backgroundColor = "#9ab300";	
}
function msout2(){
	document.getElementById("imgbt2").style.backgroundColor = "#d3e94c";
}

function msclick1(){
	document.getElementById("frameid").src					="game1.html";
	document.getElementById("bt-sec").style.display			="none";
	document.getElementById("game-iframe").style.height		="auto";	
	document.getElementById("game-iframe").style.visibility	="visible";
	
}
function msclick2(){
	document.getElementById("frameid").src					="game2.html";
	document.getElementById("bt-sec").style.display			="none";
	document.getElementById("game-iframe").style.height		="auto";	
	document.getElementById("game-iframe").style.visibility ="visible";
	
}