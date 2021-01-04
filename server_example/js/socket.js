$(document).ready(function () {
	var url = 'http://192.168.1.182';
	var port = '5001';
	var socket = io.connect(url + ':' + port);
	socket.on('connect', function () {
		socket.emit('connect_event', { data: 'test connected!' });

		socket.on('connect', function(){
			$('#control_up').click(function(msg) {
			socket.emit('button_press',{data : 'w'});
			});
		});
		socket.on('connect', function(){
			$('#control_down').click(function(msg) {
			socket.emit('button_press',{data : 's'});
			});
		});
		socket.on('connect', function(){
			$('#control_left').click(function(msg) {
			socket.emit('button_press',{data : 'a'});
			});
		});
		socket.on('connect', function(){
			$('#control_right').click(function(msg) {
			socket.emit('button_press',{data : 'd'});
			});
		});
		socket.on('connect', function(){
			$('#control_enter').click(function(msg) {
			socket.emit('button_press',{data : 'o'});
			});
		});

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