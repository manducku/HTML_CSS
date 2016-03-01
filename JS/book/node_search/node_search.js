

$(document).ready(function(){

	// id로 노드 선택하기 
	$("#header").css("border", "4px solid #9933CC");

	// 태그 이름으로 노드 선택하기
	$("p").css("border", "4px solid #00CC99");

	//클래스 이름으로 노드 선택하기
	$(".test1").css("background-color", "#3366CC");

	//ul.menu 노드에 select 클래스가 적용된 메뉴 항목을 선택하기
	$("ul.menu li.select").css("background-color", "#CC33FF");

	//속성으로 노드 찾기 
	$("[class]").css("border", "4px solid #999999");
	$("[class*=test]").css("border", "4px solid #FFCCCC");

	//찾은 노드 개수 구하기 
	console.log("length= "+$("div").length);

	// li 2번째 노드에 접근 
	$("li").eq(1).css("background-color", "#FF3333");

	// DOM 객체 리턴 받아서 스타일 변경하기
	$("li").get(2).style.background = "#FF6600";
	$("li")[3].style.background = "#CC9933";

	// each 메소드에서 index 확인하기, 매개 변수로 index를 넘겨주므로 확인할 수 있음 
	$("li").each(function(index){
		console.log("index= "+ index);
	});

	//메뉴 노드(ul.menu li)의 border 속성을 2배수로 점점 두껍게 만들기
	$("ul.menu li").each(function(index){
		var border = index*5;
		$(this).css("border",border+"px solid black");
	});
	
});

