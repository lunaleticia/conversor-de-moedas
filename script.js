document.addEventListener("DOMContentLoaded", function () {
    
    const btnConverter = document.querySelector('.btn');

    function converterDolarParaReal() {
        const valorDolar = parseFloat(document.querySelector('.real').value);

        const taxaDeConversao = 5.07;

        const valorReal = valorDolar * taxaDeConversao;

        const resultado = document.querySelector('.resultado');

        resultado.textContent = valorReal.toFixed(2);
    }

    btnConverter.addEventListener('click', converterDolarParaReal);

    document.querySelector('.real').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            converterDolarParaReal();
        }
    });
});