function calculadora() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let operacao = Number(document.getElementById('operacao').value);
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        alert('Erro - parâmetros inválidos!');
        return;
    }

    switch (operacao) {
        case 1:
            resultado = n1 + n2;
            break;
        case 2:
            resultado = n1 - n2;
            break;
        case 3:
            resultado = n1 * n2;
            break;
        case 4:
            resultado = n1 / n2;
            break;
        case 5:
            resultado = n1 % n2;
            break;
        case 6:
            resultado = n1 ** n2;
            break;
        default:
            alert('Erro - operação inválida!');
            return;
    }

    document.getElementById('resultado').innerText = `O resultado é: ${resultado}`;
 }