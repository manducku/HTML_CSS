


window.onload = function(){

	var $money = $("#money");
	var divWidth = parseInt($(".pannel").css("width"));
	var divHeight = parseInt($(".pannel").css("height"));
	var money_width = parseInt($("#money").css("width"));
	var money_height = parseInt($("#money").css("height"));
	var left_position = 0;
	var top_position = 0;
	
	$("#money").click(function(){

		left_position = parseInt(Math.random()*(divWidth-money_width));
		top_position = parseInt(Math.random()*(divHeight-money_height));

		$money.css({
			left: left_position,
			top: top_position
		});		
	});
};