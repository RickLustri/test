var multiplicacao = require('./mult.js');

// criando meu primeiro teste
test("Multiplicando 4 x 4 e retornar 16", function(){
  var resultado = multiplicacao(4, 4);
  expect(resultado).toBe(16);
})

// criando meu segundo teste
test("Multiplicando 5 x 5 e retornar 25", function(){
  var resultado = multiplicacao(5, 5);
  expect(resultado).toBe(25);
})