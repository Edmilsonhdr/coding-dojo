def is_narcissistic(number):
    # Verifica se o número é inteiro
    if not isinstance(number, int):
        return "Digite um número inteiro"

    # Converte o número em string e conta o número de dígitos
    num_str = str(number)
    num_digits = len(num_str)

    # Calcula a soma dos dígitos elevados ao número de dígitos
    total_sum = sum(int(digit) ** num_digits for digit in num_str)

    # Verifica se a soma é igual ao número original
    return total_sum == number

# Teste
result = is_narcissistic(123)
if result:
    print("O número  é um Número Narcisista")
else:
    print("O número não é um Número Narcisista")
