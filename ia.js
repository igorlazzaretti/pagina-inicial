function atualizarDataHora() {
    const dataHora = new Date();
    const opcoesData = { year: 'numeric', month: 'long', day: 'numeric' };
    const data = dataHora.toLocaleDateString('pt-BR', opcoesData);
    const hora = dataHora.toLocaleTimeString('pt-BR');
    document.getElementById("data").innerHTML = data;
    document.getElementById("horario").innerHTML = hora;
}

setInterval(atualizarDataHora, 1000);