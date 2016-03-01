// 그림 이동 함수 

$(document).ready(function(){

	var $images = $("#container img");
	var length = $images.length;
	
	$(".reset").click(function(){
		reset();
	});

// 위치 초기화 함수 
	var reset = function(){
		for(i = 0; i < length; i++){
			$images.eq(i).css({left:0, top: 0});
			}
	};

// 수평으로 그림 배열하기 
	$(".vertical-align").click(function(){
		reset();
		var x = 0, y = 0;
		for(var i = 1; i < length; i++){
			var $img = $images.eq(i);
			x = x + 200;
			$images.eq(i).animate({left:x}, 2000);
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
				$images.eq(i).animate({left: x, top:y}, 2000);
				continue;
			}
				 x = x+ 200;
				$images.eq(i).animate({left:x, top: y}, 2000);
		}
	});

	$(".animate").click(function(){

		reset();
		var x = 0,
			y = 0;

		for(var i  = 1; i < length; i++){
			x = x + 100;
			y = y + 100;
		$images.eq(i).animate({left: x,top:y}, 1000);
	}



	});




});