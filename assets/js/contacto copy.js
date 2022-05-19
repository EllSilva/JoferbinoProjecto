$('#form-contacto').submit(function () {
	var nome = $('#nome');
	var email = $('#email');
	var servico = $('#servico');
	var message = $('#message');
	var telef = $('#telef');

	var erro = $('.alert');
	var campo = $('#campo-erro');

	erro.addClass('d-none');
	$('.is-invalid').removeClass('is-invalid');

	if (nome.val() == '') {
		erro.removeClass('d-none');
		campo.html('nome');
		nome.focus();
		nome.addClass('is-invalid');
		return false;
	}
	if (email.val() == '') {
		erro.removeClass('d-none');
		campo.html('email');
		email.focus();
		email.addClass('is-invalid');
		return false;
	}
	if (servico.val() == '') {
		erro.removeClass('d-none');
		campo.html('servico');
		servico.focus();
		servico.addClass('is-invalid');
		return false;
	}
	if (message.val() == '') {
		erro.removeClass('d-none');
		campo.html('message');
		message.focus();
		message.addClass('is-invalid');
		return false;
	}

	// return true;

	var nome = document.getElementById('nome').value;
	var message = document.getElementById('message').value;
	var email = document.getElementById('email').value;
	var telef = document.getElementById('telef').value;
	var servico = document.getElementById('servico').value;

	var Body =
		'Name: ' +
		nome +
		'<br>Email: ' +
		email +
		'<br>Telefene: ' +
		telef +
		'<br>Servico: ' +
		servico +
		'<br>Message: ' +
		message;
	// var Body = 'Name: ' + nome + '<br>Email: ' + email +  '<br>Message: ' + message;

	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'joferbinocomercial@gmail.com',
		// Password : "Miguel1995",
		Password: 'xomemutuwfqwfsyg',
		// SecureToken : "56c3201e-7c0d-48b6-85f2-1fc068112b8b",
		To: 'joferbinocomercial@gmail.com',
		From: document.getElementById('email').value,
		Subject: 'Pedido de Orçamento',
		Body: Body,
	}).then(alert('Mensagem enviada' + nome), message => alert(message));
});
