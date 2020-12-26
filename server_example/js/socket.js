$(document).ready(function () {
	var url = 'http://192.168.1.124';
	var port = '5001';
	var socket = io.connect(url + ':' + port);
	socket.on('connect', function () {
		socket.emit('connect_event', { data: 'test connected!' });
	});
	socket.on('server_response', function (msg) {
		$('#log').append(
			'<br>' +
				$('<div/>')
					.text('Received #' + ': ' + msg.data)
					.html()
		);
	});
	$('form#emit').submit(function (event) {
		socket.emit('client_stop', { data: $('#emit_data').val() });
		location.reload();
		return false;
	});
	$('#text').keypress(function (e) {
		$('#text').val('');
		socket.emit('client_event', {
			data: String.fromCharCode(e.charCode),
		});
	});
});