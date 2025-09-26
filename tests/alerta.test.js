const classicarAlerta = require('../src/alerta');
console.log('classicarAlerta:', classicarAlerta);

test("alertar alto", () => {
  expect(classicarAlerta(70)).toBe("Alto");
});
