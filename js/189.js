// JavaScript 
//广告条滚动效果
var time;
window.onload = function(){
	$1("cl").style.height="0px";
	time=setInterval(cladd,10);
	ddd();
	startRb(); 
	zhgdwz();
}
function cladd(){
	var cl = $1("cl");
	cl.style.height=parseInt(cl.style.height)+2+"px";
	if(parseInt(cl.style.height)==80){
		clearInterval(time);
	}
}
function jian(){
	time = setInterval(closecl,10);	
	x.style.display="none";
}
function closecl(){
	var cl = $1("cl");
	cl.style.height = parseInt(cl.style.height)-2+"px";
	if(parseInt(cl.style.height)==0){
		clearInterval(time);
	}
}
//广告框滚动结束
function $1(id){
	return document.getElementById(id);
}
function sbz(){
	$1("rswz").style.background="#FF8201";
	$1("rswz").style.color="white";
	$1("rsw").style.background="white";
	$1("rsw").style.color="#000000";
	$1("wz").placeholder="";
}
function scp(){
	$1("rswz").style.background="white";
	$1("rswz").style.color="#000000";
	$1("rsw").style.background="#FF8201";
	$1("rsw").style.color="white";
	$1("wz").placeholder="不限量套餐";
}
//江西搜索框

function ddd(){
	var city = document.getElementById("city");
	var alist = city.getElementsByTagName("a");
	for(var i=0;i<alist.length;i++){
		alist[i].onmouseover=function(){
			document.getElementById("logoz1").innerHTML=this.innerHTML;
		}
	}
}
var time1;
var timeout;
startlb();
function startlb(){
	clearInterval(time1);
	time1=setInterval(lb,1);
}
var flag=0;
function lb(){
	var big = $1("big");
  if(flag==0){
		big.scrollTop++; 
		if(parseInt(big.scrollTop)==75){
		    flag=1;
			clearInterval(time1);
			timeout=setTimeout(startlb,3000);
		}
  }else{
		big.scrollTop--;
		if(parseInt(big.scrollTop)==0){
			flag=0;
			clearInterval(time1);
			timeout=setTimeout(startlb,3000);
  		}
  }
}
function clickList(){
	clearInterval(time1);
	clearTimeout(timeout);
}
function clickList1(){
	startlb();
}
//文字滚动
var time2;
var timeout1;
start();
function start(){
	clearInterval(time2);
	time2=setInterval(wz,10);
}
function wz(){
	var gdwz = $1("gdwz");
	gdwz.scrollTop++;
	if(parseInt(gdwz.scrollTop)==60){
		gdwz.scrollTop=0;
		clearInterval(time2);
		timeout1=setTimeout(start,6000);
	}
	if(parseInt(gdwz.scrollTop)%30==0){
			clearInterval(time2);
			timeout1=setTimeout(start,6000);
	}
}
function clickList2(){
	clearInterval(time2);
	clearTimeout(timeout1);
}
function clickList3(){
	start();
}
//文字滚动结束
//搜索栏结束
//大轮播开始
var time3;
function startRb(){
	clearInterval(time3);
	time3 = setInterval(runbuo,2000);	
}
var j = 0;
function runbuo(){
	j++;
	if(j>4){
		j=0;	
	}
	var image = $1("image");
	var imgs = image.getElementsByTagName("img");
	var list = $1("xyd").getElementsByTagName("li");
	for(var i=0;i<list.length;i++){
		list[i].style.backgroundColor="rgb(227,227,227)";
	}
	$("#image>img").hide();
	$(imgs[j]).fadeIn(300);
	list[j].style.background="white";
}
function xyd(num){
	clearInterval(time3);
	$("img").stop();
	j = num-1;
	runbuo();
	setTimeout(startRb);
}
/*轮播结束*/
//左边对联头部函数
function lwjx1(){
	$1("hxfw1").style.backgroundPosition="-230px -224px";
	$1("hxfw2").style.backgroundPosition="-229px -292px";
	$1("hxfw1").style.color="orange";
	$1("hxfw2").style.color="#777777";
	$1("hxfwxm").style.display="block";
	$1("hxfwxm1").style.display="none";
}
function lwjx2(){
	$1("hxfw1").style.backgroundPosition="-230px -260px";
	$1("hxfw2").style.backgroundPosition="-230px -328px";	
	$1("hxfw1").style.color="#777777";
	$1("hxfw2").style.color="orange";
	$1("hxfwxm").style.display="none";
	$1("hxfwxm1").style.display="block";
}
var time4;
function leftAdd(){
	clearInterval(time4);
	clearInterval(time5);
	time4 = setInterval(ad,1);
}
function ad(){
	$1("hxfwxm").scrollLeft+=5;
	if($1("hxfwxm").scrollLeft%235==0){
		clearInterval(time4);
	}
	if($1("hxfwxm").scrollLeft==470){
		$1("hxfwxm").scrollLeft=0;
	}
}
var time5;
function rightAdd(){
	clearInterval(time5);
	clearInterval(time4);
	time5 = setInterval(rd,1);
}
function rd(){
	$1("hxfwxm").scrollLeft-=5;
	if($1("hxfwxm").scrollLeft%235==0){
		clearInterval(time5);
	}
	if($1("hxfwxm").scrollLeft==0){
		$1("hxfwxm").scrollLeft=470;
	}
}
var time6;
function leftAdd1(){
	clearInterval(time6);
	clearInterval(time7);
	time6 = setInterval(add,1);
}
function add(){
	$1("hxfwxm1").scrollLeft+=5;
	if($1("hxfwxm1").scrollLeft%235==0){
		clearInterval(time6);
	}
	if($1("hxfwxm1").scrollLeft==470){
		$1("hxfwxm1").scrollLeft=0;
	}
}
var time7;
function rightAdd1(){
	clearInterval(time7);
	clearInterval(time6);
	time7 = setInterval(rdd,1);
}
function rdd(){
	$1("hxfwxm1").scrollLeft-=5;
	if($1("hxfwxm1").scrollLeft%235==0){
		clearInterval(time7);
	}
	if($1("hxfwxm1").scrollLeft==0){
		$1("hxfwxm1").scrollLeft=470;
	}
}

//推荐广告区域的 自动轮播函数------------
var recommend_Lunbo_time;//定时器
var recommend_Lunbo_timeout;
function recommend_Lunbo(){
	recommend_Lunbo_timeout = setTimeout(function(){
		recommend_Lunbo_time = setInterval(recommend_lunbo_addscroll,1);
		},3000);
}
function recommend_lunbo_addscroll(){
	var recommend_right = document.getElementById("recommend_right");
	recommend_right.scrollLeft+=10;
	if(recommend_right.scrollLeft%1010==0 && recommend_right.scrollLeft/1010<=2){
		clearInterval(recommend_Lunbo_time);
		clearTimeout(recommend_Lunbo_timeout);
		recommend_Lunbo();
	}
	if(recommend_right.scrollLeft%1010==0 && recommend_right.scrollLeft/1010==3){
		recommend_right.scrollLeft=0;
		clearInterval(recommend_Lunbo_time);
		clearTimeout(recommend_Lunbo_timeout);
		recommend_Lunbo();
	}
}
function recommend_lunbo_lessenscroll(){
	var recommend_right = document.getElementById("recommend_right");
	if(recommend_right.scrollLeft==0)
		recommend_right.scrollLeft=3030;
	recommend_right.scrollLeft-=10;
	if(recommend_right.scrollLeft%1010==0){
		clearInterval(recommend_Lunbo_time);
		clearTimeout(recommend_Lunbo_timeout);
		recommend_Lunbo();
	}
	
}
function recommend_left(){
	clearInterval(recommend_Lunbo_time);
	clearTimeout(recommend_Lunbo_timeout);
	recommend_Lunbo_time = setInterval(recommend_lunbo_lessenscroll,1);
}
function recommend_right(){
	clearInterval(recommend_Lunbo_time);
	clearTimeout(recommend_Lunbo_timeout);
	recommend_Lunbo_time = setInterval(recommend_lunbo_addscroll,1);
}
//极客炫耀 换图函数
var geek_scroll_time = new Array();
function geek_flaunt_middle_scroll_next(){
	for(var i=0;i<geek_scroll_time.length;i++){
			clearInterval(geek_scroll_time[i]);
		}
	
	geek_scroll_time[0] = setInterval(geek_addscroll,1);
	geek_scroll_time[1] = setInterval(geek_addscroll,1);
	geek_scroll_time[2] = setInterval(geek_addscroll,1);
	geek_scroll_time[3] = setInterval(geek_addscroll,1);
	geek_scroll_time[4] = setInterval(geek_addscroll,1);
	geek_scroll_time[5] = setInterval(geek_addscroll,1);
	geek_scroll_time[6] = setInterval(geek_addscroll,1);
	geek_scroll_time[7] = setInterval(geek_addscroll,1);
}
function geek_addscroll(){
	var scroll_next = document.getElementById("geek_flaunt_middle");
	scroll_next.scrollLeft++;
	if(scroll_next.scrollLeft==806)
		scroll_next.scrollLeft=0;
	if(scroll_next.scrollLeft%403==0){
		for(var i=0;i<geek_scroll_time.length;i++){
			clearInterval(geek_scroll_time[i]);
		}
	}
}
function geek_flaunt_middle_scroll_prev(){
	for(var i=0;i<geek_scroll_time.length;i++){
			clearInterval(geek_scroll_time[i]);
		}
	geek_scroll_time[0] = setInterval(geek_lessenscroll,1);
	geek_scroll_time[1] = setInterval(geek_lessenscroll,1);
	geek_scroll_time[2] = setInterval(geek_lessenscroll,1);
	geek_scroll_time[3] = setInterval(geek_lessenscroll,1);
	geek_scroll_time[4] = setInterval(geek_lessenscroll,1);
	geek_scroll_time[5] = setInterval(geek_lessenscroll,1);
	geek_scroll_time[6] = setInterval(geek_lessenscroll,1);
	geek_scroll_time[7] = setInterval(geek_lessenscroll,1);
}
function geek_lessenscroll(){
	var scroll_next = document.getElementById("geek_flaunt_middle");
	if(scroll_next.scrollLeft==0)
		scroll_next.scrollLeft=806;
	scroll_next.scrollLeft--;
	if(scroll_next.scrollLeft%403==0){
		for(var i=0;i<geek_scroll_time.length;i++){
			clearInterval(geek_scroll_time[i]);
		}
	}
}
//快乐e家的 切图函数----------------
var happy_scroll_time = new Array();
function happy_family_middle_scroll_next(){
	for(var i=0;i<happy_scroll_time.length;i++){
			clearInterval(happy_scroll_time[i]);
		}
	happy_scroll_time[0] = setInterval(happy_addscroll,1);
	happy_scroll_time[1] = setInterval(happy_addscroll,1);
	happy_scroll_time[2] = setInterval(happy_addscroll,1);
	happy_scroll_time[3] = setInterval(happy_addscroll,1);
	happy_scroll_time[4] = setInterval(happy_addscroll,1);
	happy_scroll_time[5] = setInterval(happy_addscroll,1);
	happy_scroll_time[6] = setInterval(happy_addscroll,1);
	happy_scroll_time[7] = setInterval(happy_addscroll,1);
}
function happy_addscroll(){
	var scroll_next = document.getElementById("happy_family_middle");
	scroll_next.scrollLeft++;
	if(scroll_next.scrollLeft==1209)
		scroll_next.scrollLeft=0;
	if(scroll_next.scrollLeft%403==0){
		for(var i=0;i<happy_scroll_time.length;i++){
			clearInterval(happy_scroll_time[i]);
		}
	}
}
function happy_family_middle_scroll_prev(){
	for(var i=0;i<happy_scroll_time.length;i++){
			clearInterval(happy_scroll_time[i]);
		}
	happy_scroll_time[0] = setInterval(happy_lessenscroll,1);
	happy_scroll_time[1] = setInterval(happy_lessenscroll,1);
	happy_scroll_time[2] = setInterval(happy_lessenscroll,1);
	happy_scroll_time[3] = setInterval(happy_lessenscroll,1);
	happy_scroll_time[4] = setInterval(happy_lessenscroll,1);
	happy_scroll_time[5] = setInterval(happy_lessenscroll,1);
	happy_scroll_time[6] = setInterval(happy_lessenscroll,1);
	happy_scroll_time[7] = setInterval(happy_lessenscroll,1);
}
function happy_lessenscroll(){
	var scroll_next = document.getElementById("happy_family_middle");
	if(scroll_next.scrollLeft==0)
		scroll_next.scrollLeft=1209;
	scroll_next.scrollLeft--;
	if(scroll_next.scrollLeft%403==0){
		for(var i=0;i<happy_scroll_time.length;i++){
			clearInterval(happy_scroll_time[i]);
		}
	}
}
//心意 的 切图函数----------------
var heart_scroll_time = new Array();
function heart_middle_scroll_next(){
	for(var i=0;i<heart_scroll_time.length;i++){
			clearInterval(heart_scroll_time[i]);
		}
	heart_scroll_time[0] = setInterval(heart_addscroll,1);
	heart_scroll_time[1] = setInterval(heart_addscroll,1);
	heart_scroll_time[2] = setInterval(heart_addscroll,1);
	heart_scroll_time[3] = setInterval(heart_addscroll,1);
	heart_scroll_time[4] = setInterval(heart_addscroll,1);
	heart_scroll_time[5] = setInterval(heart_addscroll,1);
	heart_scroll_time[6] = setInterval(heart_addscroll,1);
	heart_scroll_time[7] = setInterval(heart_addscroll,1);
}
function heart_addscroll(){
	var scroll_next = document.getElementById("heart_middle");
	scroll_next.scrollLeft++;
	if(scroll_next.scrollLeft==1209)
		scroll_next.scrollLeft=0;
	if(scroll_next.scrollLeft%403==0){
		for(var i=0;i<heart_scroll_time.length;i++){
			clearInterval(heart_scroll_time[i]);
		}
	}
}
function heart_middle_scroll_prev(){
	for(var i=0;i<heart_scroll_time.length;i++){
			clearInterval(heart_scroll_time[i]);
		}
	heart_scroll_time[0] = setInterval(heart_lessenscroll,1);
	heart_scroll_time[1] = setInterval(heart_lessenscroll,1);
	heart_scroll_time[2] = setInterval(heart_lessenscroll,1);
	heart_scroll_time[3] = setInterval(heart_lessenscroll,1);
	heart_scroll_time[4] = setInterval(heart_lessenscroll,1);
	heart_scroll_time[5] = setInterval(heart_lessenscroll,1);
	heart_scroll_time[6] = setInterval(heart_lessenscroll,1);
	heart_scroll_time[7] = setInterval(heart_lessenscroll,1);
}
function heart_lessenscroll(){
	var scroll_next = document.getElementById("heart_middle");
	if(scroll_next.scrollLeft==0)
		scroll_next.scrollLeft=1209;
	scroll_next.scrollLeft--;
	if(scroll_next.scrollLeft%403==0){
		for(var i=0;i<heart_scroll_time.length;i++){
			clearInterval(heart_scroll_time[i]);
		}
	}
}
//单击展开所有城市链接 的函数-----------------------
var unfold_k=true;
function unfold(){
	var linked = document.getElementById("linked_range_bottom_links");
	var btn = document.getElementById("unfold_btn");
	var unfold_img = document.getElementById("unfold_img");
	if(unfold_k){
		linked.style.height = 120+"px";
		unfold_img.src = "images/bottom_img/s.png";
		unfold_k = false;
	}else{
		linked.style.height = 70+"px";
		unfold_img.src = "images/bottom_img/x.png";
		unfold_k = true;
	}
}
//切换 欢乐go 和 合作伙伴 div函数
function show_linked(num){
	var linked = document.getElementById("linked_range_bottom_links");
	var partner = document.getElementById("linked_range_bottom_partner");
	var dxhgw= document.getElementById("dxhgw");
	var hzhb = document.getElementById("hzhb");
	if(num==1){
		linked.style.display = "block";
		partner.style.display = "none";
		dxhgw.style.fontWeight = "600";
		hzhb.style.fontWeight = "normal";
	}else{
		linked.style.display = "none";
		partner.style.display = "block";
		dxhgw.style.fontWeight = "normal";
		hzhb.style.fontWeight = "600";
	}
	
}
function sj1(){
	$1("hm1").style.display="block";
	$1("hm2").style.display="none";
	$1("hm3").style.display="block";
	$1("sj2").style.color="orange";
	$1("rl2").style.color="black";
	$1("kd2").style.color="balck";
	$1("gh2").style.color="black";	
}
function rl1(){
	$1("hm1").style.display="block";
	$1("hm2").style.display="none";
	$1("hm3").style.display="none";	
	$1("sj2").style.color="black";
	$1("rl2").style.color="orange";
	$1("kd2").style.color="balck";
	$1("gh2").style.color="black";	
}
function kd1(){
	$1("hm1").style.display="block";
	$1("hm2").style.display="none";
	$1("hm3").style.display="block";
	$1("sj2").style.color="black";
	$1("rl2").style.color="black";
	$1("kd2").style.color="orange";
	$1("gh2").style.color="black";		
}
function gh1(){
	$1("hm1").style.display="none";
	$1("hm2").style.display="block";
	$1("hm3").style.display="block";
	$1("sj2").style.color="black";
	$1("rl2").style.color="black";
	$1("kd2").style.color="balck";
	$1("gh2").style.color="orange";		
}
var time8;
function zhgdwz(){
	clearInterval(time8);
	time8 = setInterval(zh,15);
}
function zh(){
	$1("zhwz").scrollLeft++;
	if(parseInt($1("zhwz").scrollLeft)==0){
		$1("zhwz").scrollLeft=0;
	}
}
function stopzh(){
	clearInterval(time8);
}
function startzh(){
	zhgdwz();	
}