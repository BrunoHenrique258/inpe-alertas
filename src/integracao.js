function classificarAlerta(nivel) {
    if (nivel >= 90) return "Crítico";
    if (nivel >= 70) return "Alto";
    return "Baixo";
  }
  
  function enviarNotificacao(classificacao) {
    return `Notificação enviada: ${classificacao}`;
  }
  
  module.exports = { classificarAlerta, enviarNotificacao };
  