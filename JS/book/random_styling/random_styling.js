var $pannel = null;
var number = 1;

$(document).ready(function(){

	init();
	// start();
});

var start = setInterval(addContent,10);

function init(){
	$pannel = $(".pannel");
}


function addContent(){
	var $span = $("<span></span>"); 
	// span에 css를 입력해야 하므로 먼저 생성 
	var font_size = parseInt(Math.random()*50)+"px";
	var color = "#" + parseInt(Math.random()*0xffffff).toString(16);

	// span 태그 css 삽입
	$span.css({
		fontSize : font_size,
		color : color,
		display: "inline-block",
	});
	// 숫자 집어 넣기 
	$span.html(number++);

	// 500개의 글자를 출력 시, setinterval 종료 
	if(number >500){
		clearInterval(start);
	}

	//패널 태그 내에 삽입
	$pannel.append($span);

}
