const api = {
  enviar: jest.fn(() => "Simulado!"),
};

test("simulação de envio", () => {
  const resposta = api.enviar();
  expect(resposta).toBe("Simulado!");
  expect(api.enviar).toHaveBeenCalled();
});
