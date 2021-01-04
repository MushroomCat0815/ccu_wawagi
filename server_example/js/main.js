$(document).ready(function () {
	console.log('tttt');
	$('#textboard_submit').on('click', function () {
		console.log($('#textboard_text').val());
		$('.board-show-wrap').append(
			"<div class='show-item-wrap'><div class='show-item'><div class='item-user'>a</div><div class='context'>"+ $('#textboard_text').val() +"</div></div></div>"
		);
		$('#textboard_text').val("");
		console.log($('#user1').text());
		;
	});

	var profile = googleUser.getBasicProfile();
	console.log(profile, "profile");

	$(".image").onclick(function() {
		console.log(profile);
	})

	
});
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
