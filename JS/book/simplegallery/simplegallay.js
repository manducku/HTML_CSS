// 그림 이동 함수 

$(document).ready(function(){

	
	var $images = $("#container img");
	var length = $images.length;

// 위치 초기화 함수 
	var reset = function(){
		$(".reset").click(function(){
		for(i = 0; i < length; i++){
			$images.eq(i).css({left:0, top: 0});
			}
		});
	};

// 수평으로 그림 배열하기 
	$(".vertical-align").click(function(){
		reset();
		var x = 0, y = 0;
		for(var i = 1; i < length; i++){
			var $img = $images.eq(i);
			x = x + 200;
			y = 0;
			// 여기서 0이 필요한 이유를 확실하게 모르겠음. 
			$images.eq(i).css({left:x ,top: 0});
			}
	});


// 직사각형으로 그림 배열하기 
	$(".rec-align").click(function(){
		reset();
		var x = 0, y = 0;
		for(var i = 1; i< length; i++){
			var $img = $images.eq(i);
			if(i%3 === 0)
			{
				x = 0;
				y = y+200;
				$images.eq(i).css({left: x, top:y});
				continue;
			}
				 x = x+ 200;
				$images.eq(i).css({left:x, top: y});
		}
	});


});