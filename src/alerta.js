function classicarAlerta(nivel) {
  if (nivel >= 70) return "Alto";
  return "Baixo";
}

module.exports = classicarAlerta;
