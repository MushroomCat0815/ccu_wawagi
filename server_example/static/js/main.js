
$(document).on('keypress',function(e) {
	function controlBtnActive(target){
		$(".move-wrap").find("button").removeClass("active");
		target.addClass("active");
		setTimeout(function(){
			target.removeClass("active");
		}, 200)
	}
	if(e.keyCode == 119){
		console.log("w")
		controlBtnActive($("#control_up"))
	}
	if(e.keyCode == 97){
		console.log("a")
		controlBtnActive($("#control_left"))
	}
	if(e.keyCode == 115){
		console.log("s")
		controlBtnActive($("#control_down"))
	}
	if(e.keyCode == 100){
		console.log("d")
		controlBtnActive($("#control_right"))
	}
	if(e.keyCode == 13){
		console.log("enter")
		controlBtnActive($("#control_enter"))
	}
});

