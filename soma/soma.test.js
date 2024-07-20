var soma = require('./soma.js');

// criando meu primeiro teste
test("Somar 1 + 1 e retornar 2", function(){
  var resultado = soma(1, 1);
  expect(resultado).toBe(2);
})

// criando meu segundo teste
test("Somar 15 + 27 + 300 e retornar 342", function(){
  var resultado = soma(15, 27, 300);
  expect(resultado).toBe(342);
})