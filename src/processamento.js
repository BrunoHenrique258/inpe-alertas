const { classificarAlerta } = require('./alerta');
const { enviarNotificacao } = require('./notificacao');

function processarAlerta(valor) {
    const alerta = classificarAlerta(valor);
    return enviarNotificacao(alerta);
}

module.exports = { processarAlerta };
