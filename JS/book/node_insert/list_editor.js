var $menu = null;
var $data = null;
var data = null;
var $selected_item = null;
var count = 0;

$(document).ready(function(){	
	init();
	init_Event();
});

// 전역 요소 초기화 
function init(){
	$menu = $("ul.content");
	$data = $("#menuName");
}
// 이벤트 초기화 
function init_Event(){
	$("#add").click(function(){
		addMenu();
	});
	$(".content").on("click","li",function(){
		setSelectItem($(this));
	});

	$("#update").click(function(){
		updateMenu();
	});

	$("#delete").click(function(){
		deleteMenu();
	});
	
	// 엔터 입력 이벤트 추가 
	$('#menuName').on('keyup', function(e) {
    if (e.keyCode === 13) {
        addMenu();
    }
});

}

function addMenu(){
	// 텍스트 입력값 구하기 
	data = "<li>"+$data.val()+"</li>";
	if($selected_item){
		$selected_item.after(data);
	}
	$menu.append(data);
}




// 특정 영역 선택하는 함수 구현 
function setSelectItem($item){
	if($selected_item){
		$selected_item.removeClass("select");
	}
	$selected_item = $item;
	$selected_item.addClass("select");
}

// 선택한 메뉴 아이템 수정
function updateMenu(){
	if($selected_item){
		$selected_item.after(data);
		$selected_item.remove();
	}
	else{
		addMenu();
	}
}
// 선택한 메뉴 제거 
function deleteMenu(){
	if($selected_item){
		$next_item = $selected_item.next();
		$selected_item.remove();
		setSelectItem($next_item);
	}
	else{
		alert("리스트를 선택해 주세요.");
	}
}