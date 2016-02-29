// 그림 이동 함수 

$(document).ready(function(){

	$(".vertical-align").click(function(){
	
	var $images = $("#container img");
	var length = $images.length;

	for(var i = 0; i < length; i++){
		var $img = $images.eq(i);
		var x = i*200;
		$images.eq(i).css({left:x});
		}
	});


// 직사각형으로 그림 배열하기 

	$(".rec-align").click(function(){
		var $images = $("#container img");
		var length = $images.length;
		position = $images.offset();
		var x = 0;
		var y = 0;
		console.log(x, y);
		for(var i = 1; i< length; i++){
			if(i%3 === 0)
			{
				x = 0;
				y = y+200;
				$images.eq(i).css({left: x, top:y});
				console.log(x, y);
				continue;
			}
				 x = x+ 200;
				$images.eq(i).css({left:x, top: y});
		}
	});


	$(".reset").click(function(){

		var $images = $("#container img");
		var length = $images.length;

		for(i = 0; i < length; i++){
			$images.eq(i).css({left:0, top: 0});
		}

	});


});