$(document).ready(function () {
	console.log('tttt');
	$('#textboard_submit').on('click', function () {
		console.log($('#textboard_text').val());
		$('.board-show-wrap').append(
			"<div class='show-item-wrap'><div class='show-item'><div class='item-user'>a</div><div class='context'>" +
				$('#textboard_text').val() +
				'</div></div></div>'
		);
		$('#textboard_text').val('');
		console.log($('#user1').text());
		console.log(profile);
		console.log(123);
	});
});
$(document).on('keypress', function (e) {
	function controlBtnActive(target) {
		$('.move-wrap').find('button').removeClass('active');
		target.addClass('active');
		setTimeout(function () {
			target.removeClass('active');
		}, 200);
	}
	if (e.keyCode == 119) {
		console.log('w');
		controlBtnActive($('#control_up'));
	}
	if (e.keyCode == 97) {
		console.log('a');
		controlBtnActive($('#control_left'));
	}
	if (e.keyCode == 115) {
		console.log('s');
		controlBtnActive($('#control_down'));
	}
	if (e.keyCode == 100) {
		console.log('d');
		controlBtnActive($('#control_right'));
	}
	if (e.keyCode == 13) {
		console.log('enter');
		controlBtnActive($('#control_enter'));
	}
});

function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	$("#signout-container").show();
	$("#signin-container").hide();
	$("#loggedUserImage").attr("src", profile.getImageUrl());
	$("#loggedUsername").html(profile.getName());
	$("#loggedUserEmail").html(profile.getEmail());
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	  $("#signout-container").hide();
	  $("#signin-container").show();
	})}
