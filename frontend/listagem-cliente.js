const exibeCliente = (cpf, nome) => {
  const linha = document.createElement("tr");

  const conteudoLinha = `
      <td>${cpf}</td>
      <td>${nome}</td>
      <button type="button" class="btn btn-danger">Deletar Cliente<button>
  `;

  linha.innerHTML = conteudoLinha;

  return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

listarClientes().then(exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
  });
});
