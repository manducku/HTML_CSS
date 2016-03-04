var $bg = null;
var timerId = 0;

window.onload = function(){

	init();
	initEvent();

};

// 변수 초기화 
function init(){
	$bg = $("#bg");
}

// 이벤트 초기화 
function initEvent(){

	$("#play").click(function(){
		play();
	});


	$("#stop").click(function(){
		stop();
	});


	$("#prev").click(function(){
		prev();
	});


	$("#next").click(function(){
		next();
	});

}

// 캐러셀 시작
function play(){
	if(timerId === 0){
	timerId = setInterval(next,1000);
	}
}

// 캐러셀 정지 
function stop(){
	if(timerId){
		clearInterval(timerId);
		timerId = 0;
	}
}

// 이전으로 넘기기 
function prev(){

	bg_image_num = get_image_num();
	bg_image_num--;

	if(bg_image_num === 0){
		bg_image_num = 5;		
	}
	$bg.attr("class", "bg"+bg_image_num);
}

// 다음으로 넘기기 
function next(){
	bg_image_num = get_image_num();
	bg_image_num++;

	if(bg_image_num === 6){
		bg_image_num = 1;
	}

	$bg.attr("class", "bg"+bg_image_num);
}

function get_image_num(){
	bg_attr = $bg.attr("class");
	return bg_attr.substring(2);
}

