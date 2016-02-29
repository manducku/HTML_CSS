// 그림 이동 함수 

$(document).ready(function(){

	$(".align-button").click(function(){
	
	var $images = $("#container img");
	var length = $images.length;

	for(var i = 0; i < length; i++){
		var $img = $images.eq(i);
		var x = i*200;
		$images.eq(i).css({left:x});
		}
	});

});