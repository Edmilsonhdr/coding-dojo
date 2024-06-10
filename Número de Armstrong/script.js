function is_narcissistic(number) {
  // Verifica se o número é inteiro
  if (!Number.isInteger(number)) {
    return "Digite um número inteiro";
  }

  // Converte o número em string e conta o número de caracteres
  let numStr = String(number);
  let numDigits = numStr.length;

  // Calcula a soma dos dígitos elevados ao número de caracteres
  let sum = numStr.split("").reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), numDigits);
  }, 0);

  // Verifica se a soma é igual ao número original
  return sum === number;
}

// Teste
const result = is_narcissistic(153);
if (result) {
  console.log(`O número 153 é um Número Narcisista`);
} else {
  console.log(`O número 153 não é um Número Narcisista`);
}
