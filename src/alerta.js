function classificarAlerta(valor) {
  if (valor >= 90) {
    return "Crítico";
  } else if (valor >= 70) {
    return "Alto";
  } else if (valor >= 40) {
    return "Médio";
  } else {
    return "Baixo";
  }
}

module.exports = { classificarAlerta };
