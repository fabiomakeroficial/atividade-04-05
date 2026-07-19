// API ViaCEP (Autopreenchimento)
document.getElementById('cep').addEventListener('blur', function () {
    const cep = this.value.replace(/\D/g, '');

    if (cep.length === 8) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {

                    document.getElementById('endereco').value = `${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`;
                } else {
                    alert('CEP não encontrado.');
                    limparEndereco();
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
                alert('Erro ao buscar o CEP. Tente novamente.');
            });
    } else if (cep.length > 0) {
        alert('CEP inválido. Digite exatamente 8 números.');
        limparEndereco();
    }
});

function limparEndereco() {
    document.getElementById('endereco').value = '';
}

// Botão "Agende uma consulta gratuita"
document.getElementById('btnBanner').addEventListener('click', function () {

    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});

// Botão do Formulario "fale conosco"
document.getElementById('formContato').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;

    alert(`Obrigado pelo contato, ${nome}! Nossa equipe de auditoria retornará o seu e-mail em até 24 horas.`);

    this.reset();
    // Redireciona o usuário para a página dentro da pasta "pages"
    window.location.href = "./pages/saldacoes.html";
});