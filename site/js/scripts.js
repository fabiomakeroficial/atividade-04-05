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