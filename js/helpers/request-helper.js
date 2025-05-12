var AjaxRequest = {

    Enviar: function (tipo, url, data, success, beforeSend, complete) {

        $.ajax({
            type: tipo,
            url: url,
            data: data,
            beforeSend: function () {
                if (beforeSend != null && beforeSend != undefined)
                    beforeSend();
            },
            success: function (response) {
                if (success != null && success != undefined)
                    success(response);
            },
            error: function (response) {
                if (response.status != 404) {

                    if (response.responseJSON == null) {
                        ExibirNotificacaoErro('Ops, algo saiu errado. Por favor contate o administrador do sistema.');
                    }
                    else if (ArrayHasElements(response.responseJSON.erros)) {

                        var erros = '';
                        response.responseJSON.erros.forEach(function (mensagem) {
                            erros += '<li>' + mensagem + '</li>';
                        });

                        console.log(erros);
                    } else if (response.responseJSON.mensagem != null) {
                        console.log(response.responseJSON.mensagem);
                    }
                }
            },
            complete: function () {
                if (complete != null && complete != undefined)
                    complete();
            },
            statusCode: {
                404: function () {
                    console.log("O endereço informado não foi encontrado!");
                }
            }
        });
    },

    GET: function (url, data, success, beforeSend, complete) {
        this.Enviar('GET', url, data, success, beforeSend, complete);
    },

    POST: function (url, data, success, beforeSend, complete) {
        this.Enviar('POST', url, data, success, beforeSend, complete);
    },

    PUT: function (url, data, success, beforeSend, complete) {
        this.Enviar('PUT', url, data, success, beforeSend, complete);
    },

    DELETE: function (url, success, beforeSend, complete) {
        this.Enviar('DELETE', url, null, success, beforeSend, complete);
    }
}