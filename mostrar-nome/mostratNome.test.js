var mostrarNome = require('./mostrarNome.js');

// criando meu primeiro teste
test("Mostrar nome de 'Henrique'", function(){
  var resultado = mostrarNome('Henrique');
  expect(resultado).toBe('Henrique');
})

// criando meu segundo teste
test("Mostrar nome de 'SEM NOME'", function(){
  var resultado = mostrarNome();
  expect(resultado).toBe("SEM NOME");
})