

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
});