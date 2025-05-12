// ==============================================================
// Configurações dos validadores
// ==============================================================
jQuery.extend(jQuery.validator.messages, {
    required: "Obrigat&oacute;rio.",
    remote: "Por favor, corrija este campo.",
    email: "Por favor, forne&ccedil;a um email v&aacute;lido.",
    url: "Por favor, forne&ccedil;a uma URL v&aacute;lida.",
    date: "Por favor, forne&ccedil;a uma data v&aacute;lida.",
    dateISO: "Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).",
    number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
    digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.",
    creditcard: "Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.",
    equalTo: "Por favor, forne&ccedil;a o mesmo valor novamente.",
    accept: "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.",
    maxlength: jQuery.validator.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, forne&ccedil;a ao menos {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."),
    range: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."),
    max: jQuery.validator.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."),
    min: jQuery.validator.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}.")
});



$.fn.showLoading = function (message) {
    if (message === undefined)
        texto = 'Aguarde...';

    this.waitMe({
        effect: 'facebook',
        text: texto,
        waitTime: -1,
        textPos: 'vertical',
        fontSize: '15px',
        color: '#fff',
        bg: 'rgba(0,0,0,0.3)'
    });
}

$.fn.hideLoading = function () {
    this.waitMe('hide');
}

//// Limpa o form e os validadores
$.validator.prototype.clearForm = function () {
    this.resetForm();
    this.currentForm.reset();
};

//// Limpa o form e os validadores
$.fn.post = function (e) {
    e.preventDefault();

    if (!this.valid())
        return;

    var data = this.serialize();
    var form = this;

    AjaxRequest.POST(e.currentTarget.action, data,
        function (response) {
            form.trigger('post-success', response);
        },
        function () { form.showLoading() },
        function () { form.hideLoading() });

}

//// Notificações
function showNotification(type, message) {
    var bgcolor;

    switch (type) {
        case 'success':
            bgcolor = '#27ae60';
            break;
        case 'error':
            bgcolor = '#c0392b';
            break;
        case 'info':
            bgcolor = '#269abc';
            break;
        case 'warning':
            bgcolor = '#ffe10d';
            break;
    }

    $.amaran({
        theme: 'colorful',
        delay: 7000,
        clearAll: false,
        content: {
            bgcolor: bgcolor,
            color: '#fff',
            message: message
        },
        position: 'top right',
        cssanimationIn: 'flipInX',
        cssanimationOut: 'flipOutX'
    });
}