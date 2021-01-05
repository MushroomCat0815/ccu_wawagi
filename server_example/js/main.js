$(document).ready(function () {
	console.log('test');
	$('#textboard_submit').on('click', function () {
		console.log($('#textboard_text').val());
		$('.board-show-wrap').append(
			"<div class='show-item-wrap'><div class='show-item'><div class='item-user'>a</div><div class='context'>"+ $('#textboard_text').val() +"</div></div></div>"
		);
		$('#textboard_text').val("");
		;
	});

	
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
function onSignIn(googleUser) {
	// Useful data for your client-side scripts:
	var profile = googleUser.getBasicProfile();
	console.log("ID: " + profile.getId()); // Don't send this directly to your server!
	console.log('Full Name: ' + profile.getName());
	console.log('Given Name: ' + profile.getGivenName());
	console.log('Family Name: ' + profile.getFamilyName());
	console.log("Image URL: " + profile.getImageUrl());
	console.log("Email: " + profile.getEmail());

	// The ID token you need to pass to your backend:
	var id_token = googleUser.getAuthResponse().id_token;
	console.log("ID Token: " + id_token);
  }
  function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	});
  }

