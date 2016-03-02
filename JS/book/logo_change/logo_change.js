$(document).ready(function(){
	var $nodes = $(".tab-menu li");
	var length = $nodes.length;
	var current_index = 0;
	var has_select = true;
	var count_do_circle = 0;

	// js while문 구성 
	// 200초마다 사이즈가 순서적으로 1.5배씩 커지는 함수 
	var timerID  = setInterval(function(){
		var $item = $nodes.eq(current_index);
		
		if(has_select === true){
		$item.addClass("select");
		}
		else{
			$item.removeClass("select");
		}
		current_index++;
		if(current_index >= length){
			current_index = 0;
			count_do_circle++;
			has_select = !has_select;
			console.log(has_select);
		}

		if(count_do_circle == 10){
			clearInterval(timerID);
		}
	}, 200);
	
});